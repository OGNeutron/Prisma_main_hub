import { Request, Response, Router } from 'express'
import * as passport from 'passport'
import { db } from '..'
import { prisma } from '../generated/prisma-client'

const router: Router = Router()

const {
	PRODUCTION_CLIENT_URL = 'https://inspiring-euler-247a1c.netlify.com',
	DEVELOPMENT_CLIENT_URL = 'http://localhost:5000'
} = process.env

const url =
	process.env.NODE_ENV === 'production'
		? PRODUCTION_CLIENT_URL
		: DEVELOPMENT_CLIENT_URL

router.get('/auth/github', passport.authenticate('github', { session: false }))

router.get(
	'/oauth/github',
	passport.authenticate('github', { session: false }),
	async (req: Request, res: Response) => {
		if (req.user.user.id) {
			if (req.session) {
				req.session.userId = req.user.user.id
				req.session.accessToken = req.user.accessToken
				req.session.refreshToken = req.user.refreshToken

				const user = await db.user({ id: req.user.user.id })

				await prisma.updateUser({
					where: {
						id: req.user.user.id
					},
					data: { online: true }
				})

				return res.redirect(`${url}/profile/${user.username}`)
			}
		} else {
			res.redirect(`${url}/auth/login`)
		}
	}
)

router.get(
	'/auth/twitter',
	passport.authenticate('twitter', { session: false })
)

router.get(
	'/auth/twitter/callback',
	passport.authenticate('twitter', { session: false }),
	async (req, res) => {
		if (req.user.user.id) {
			if (req.session) {
				req.session.userId = req.user.user.id
				req.session.accessToken = req.user.accessToken
				req.session.refreshToken = req.user.refreshToken

				const user = await db.user({ id: req.user.user.id })

				await prisma.updateUser({
					where: {
						id: req.user.user.id
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
	passport.authenticate('facebook', { session: false })
)

router.get(
	'/auth/facebook/callback',
	passport.authenticate('facebook', { session: false }),
	async (req, res) => {
		if (req.user.user.id) {
			if (req.session) {
				req.session.userId = req.user.user.id
				req.session.accessToken = req.user.accessToken
				req.session.refreshToken = req.user.refreshToken

				const user = await db.user({ id: req.user.user.id })

				await db.updateUser({
					where: {
						id: req.user.user.id
					},
					data: { online: true }
				})

				res.redirect(`${url}/profile/${user.username}`)
			}
		} else {
			res.redirect(`${url}/auth/login`)
			return
		}
	}
)

export default router
