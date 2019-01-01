import { Context } from '../../../tstypes'
import { logger } from '../../../utils/logger'
import { ApolloError } from 'apollo-server'
import { MutationResolvers } from '../../../generated/graphqlgen'
import { processUpload } from '../../../utils/helperFunctions'

export const resolvers = {
	Mutation: {
		async updateProfile(
			_: any,
			{ avatar }: any,
			{ db, session, s3 }: Context
		) {
			try {
				const response: any = await processUpload(s3, avatar, 'avatars')

				if (!response) {
					return new ApolloError('Error with uploading image')
				}

				const userImage = await db
					.user({ id: session.userId })
					.avatar_url()

				await s3.deleteObject({
					Bucket: process.env.AWS_BUCKET as string,
					Key: userImage.key
				})

				const avatarResponse: any = await db.updateFile({
					where: {
						id: userImage.id
					},
					data: {
						mimetype: response.mimetype,
						filename: response.filename,
						url: response.url,
						encoding: response.encoding,
						key: response.key,
						ETag: response.Etag
					}
				})

				return avatarResponse
			} catch (error) {
				logger.error({ level: '5', message: error.message })
				throw new ApolloError(error)
			}
		},
		blockUser(
			_: any,
			{ id }: MutationResolvers.ArgsBlockUser,
			{ db, session }: Context
		) {
			try {
				return db.updateUser({
					where: {
						id: session.userId
					},
					data: {
						blockedUsers: {
							connect: {
								id
							}
						}
					}
				})
			} catch (error) {
				logger.error({ level: '5', message: error.message })
				throw new ApolloError(error)
			}
		},
		unblockUser(
			_: any,
			{ id }: MutationResolvers.ArgsUnblockUser,
			{ db, session }: Context
		) {
			try {
				console.log('ID', id)
				return db.updateUser({
					where: {
						id: session.userId
					},
					data: {
						blockedUsers: {
							disconnect: {
								id
							}
						}
					}
				})
			} catch (error) {
				logger.error({ level: '5', message: error.message })
				throw new ApolloError(error)
			}
		},
		setProfilePrivacy(
			_: any,
			{ bool }: MutationResolvers.ArgsSetProfilePrivacy,
			{ db, session }: Context
		) {
			try {
				return db.updateUser({
					where: {
						id: session.userId
					},
					data: {
						private: bool
					}
				})
			} catch (error) {
				logger.error({ level: '5', message: error.message })
				throw new ApolloError(error)
			}
		}
	}
}
