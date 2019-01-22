import { Router, Request, Response } from 'express'
import * as passport from 'passport'
import { prisma } from '../generated/prisma-client'
import { db } from '..'
import { ApolloError } from 'apollo-server'
import { logger } from '../utils/logger'

const router: Router = Router()

const {
	PRODUCTION_CLIENT_URL = 'https://inspiring-euler-247a1c.netlify.com',
	DEVELOPMENT_CLIENT_URL = 'http://localhost:5000'
} = process.env

const url =
	process.env.NODE_ENV === 'production'
		? PRODUCTION_CLIENT_URL
		: DEVELOPMENT_CLIENT_URL

router.get('/auth/github', passport.authenticate('github', { session: false, scope: ['email'] }))

router.get(
	'/oauth/github',
	passport.authenticate('github', { session: false, scope: ['email'] }),
	async (req: Request, res: Response) => {
		if (req.user.user.id) {
			if (req.session) {
				req.session.userId = req.user.user.id
				req.session.accessToken = req.user.accessToken
				req.session.refreshToken = req.user.refreshToken

				const user = await db.user({ email: req.user.user.email })

				await prisma.updateUser({
					where: {
						email: req.user.user.email
					},
					data: { online: true }
				})

				res.redirect(`${url}/profile/${user.username}`)
			}
		} else {
			res.redirect(`${url}/auth/login`)
		}
	}
)

router.get(
	'/auth/twitter',
	passport.authenticate('twitter', { session: false, scope: ['email'] })
)

router.get(
	'/auth/twitter/callback',
	passport.authenticate('twitter', { session: false, scope: ['email'] }),
	async (req, res) => {
		if (req.user.user.id) {
			if (req.session) {
				req.session.userId = req.user.user.id
				req.session.accessToken = req.user.accessToken
				req.session.refreshToken = req.user.refreshToken

				const user = await db.user({ email: req.user.user.email })

				await prisma.updateUser({
					where: {
						email: req.user.user.email
					},
					data: { online: true }
				})

				res.redirect(`${url}/profile/${user.username}`)
			}
		} else {
			res.redirect(`${url}/auth/login`)
		}
	}
)

router.get(
	'/auth/facebook',
	passport.authenticate('facebook', { session: false, scope: ['email'] })
)

router.get(
	'/auth/facebook/callback',
	passport.authenticate('facebook', { session: false, scope: ['email'] }),
	async (req, res) => {
		try {
			if (req.user.user.id) {
				if (req.session) {
					req.session.userId = req.user.user.id
					req.session.accessToken = req.user.accessToken
					req.session.refreshToken = req.user.refreshToken

					const user = await db.user({ email: req.user.user.email })

					await db.updateUser({
						where: {
							email: req.user.user.email
						},
						data: { online: true }
					})

					return res.redirect(`${url}/profile/${user.username}`)
				}
			} else {
				res.redirect(`${url}/auth/login`)
			}
		} catch (error) {
			logger.error({ level: '5', message: error })
			return new ApolloError(error)
		}
	}
)

export default router
