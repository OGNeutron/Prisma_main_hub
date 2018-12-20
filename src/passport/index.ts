import * as passport from 'passport'
import { Strategy as GitHubStrategy } from 'passport-github'
import { Strategy as TwitterStrategy } from 'passport-twitter'
import { Strategy as FacebookStrategy } from 'passport-facebook'
import { prisma } from '../generated/prisma-client'

interface CreateUserArgs {
	email: string
	username: string
	avatar: string
	confirmed: boolean
	githubId?: string
	twitterId?: string
	facebookId?: string
}

const {
	SERVER_ENDPOINT = 'http://localhost:2000',
	GITHUB_CLIENT_ID,
	GITHUB_CLIENT_SECRET,
	TWITTER_CONSUMER_KEY,
	TWITTER_CONSUMER_SECRET,
	FACEBOOK_SECRET,
	FACEBOOK_CLIENT_ID
} = process.env

const createUser = async ({
	email,
	username,
	avatar,
	confirmed,
	githubId,
	twitterId,
	facebookId
}: CreateUserArgs) => {
	return await prisma.createUser({
		email: email,
		username: username,
		password: '',
		confirmed,
		role: 'USER',
		gitHubId: githubId,
		twitterId,
		facebookId,
		avatar_url: {
			create: {
				filename: 'github_avatar',
				mimetype: 'image/jpeg',
				encoding: 'something',
				key: '1',
				ETag: 'tag',
				url: avatar
			}
		}
	})
}

export const setupPassport = () => {
	passport.use(
		new GitHubStrategy(
			{
				clientID: GITHUB_CLIENT_ID as string,
				clientSecret: GITHUB_CLIENT_SECRET as string,
				callbackURL: `${SERVER_ENDPOINT}/api/v1/oauth/github`,
				scope: ['user:email']
			},
			async (accessToken, refreshToken, profile: any, cb) => {
				console.log('PROFILE', profile)
				let user = await prisma.user({ email: profile.emails[0].value })

				if (!user) {
					user = await createUser({
						email: profile.emails[0].value,
						username: profile.username,
						avatar: profile._json.avatar_url,
						confirmed: true,
						githubId: profile.id
					})
				} else if (user.gitHubId == null) {
					user = await prisma.updateUser({
						where: {
							id: user.id
						},
						data: {
							gitHubId: profile.id
						}
					})
				}

				cb(null, { user, accessToken, refreshToken })
			}
		)
	)

	passport.use(
		new TwitterStrategy(
			{
				consumerKey: TWITTER_CONSUMER_KEY as string,
				consumerSecret: TWITTER_CONSUMER_SECRET as string,
				callbackURL: `http://127.0.0.1:2000/api/v1/auth/twitter/callback`,
				includeEmail: true
			},
			async (accessToken, refreshToken, profile: any, cb) => {
				let user = await prisma.user({ email: profile.emails[0].value })

				if (!user) {
					user = await createUser({
						email: profile.emails[0].value,
						username: profile.username,
						avatar: profile.photos[0].value,
						confirmed: true,
						twitterId: profile.id
					})
				} else if (user.twitterId == null) {
					user = await prisma.updateUser({
						where: {
							id: user.id
						},
						data: {
							twitterId: profile.id
						}
					})
				}
				return cb(null, { user, accessToken, refreshToken })
			}
		)
	)

	passport.use(
		new FacebookStrategy(
			{
				clientID: FACEBOOK_CLIENT_ID as string,
				clientSecret: FACEBOOK_SECRET as string,
				callbackURL: `${SERVER_ENDPOINT}/api/v1/auth/facebook/callback`,
				profileFields: ['id', 'email', 'name', 'picture']
			},
			async (accessToken, refreshToken, profile: any, cb) => {
				console.log('PROFILE', profile)
				let user = await prisma.user({ email: profile.emails[0].value })

				if (!user) {
					user = await createUser({
						email: profile.emails[0].value,
						username: profile.name.givenName,
						avatar: profile.photos[0].value,
						confirmed: true,
						facebookId: profile.id
					})
				} else if (user.facebookId == null) {
					user = await prisma.updateUser({
						where: {
							id: user.id
						},
						data: {
							facebookId: profile.id
						}
					})
				}
				return cb(null, { user, accessToken, refreshToken })
			}
		)
	)

	return passport
}
