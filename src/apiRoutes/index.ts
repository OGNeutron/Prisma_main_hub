import { Router, Request, Response } from 'express'
import * as passport from 'passport'
import { prisma } from '../generated/prisma-client'

const router: Router = Router()

router.get('/auth/github', passport.authenticate('github', { session: false }))

router.get(
	'/oauth/github',
	passport.authenticate('github', { session: false }),
	async (req: Request, res: Response) => {
		console.log('USER', req.user)

		if (req.user.user.id) {
			if (req.session) {
				req.session.userId = req.user.user.id
				req.session.accessToken = req.user.accessToken
				req.session.refreshToken = req.user.refreshToken

				console.log(req.session)

				const user = await prisma.user({ email: req.user.user.email })

				res.redirect(
					`${process.env.CLIENT_URL}/profile/${user.username}`
				)
			}
		} else {
			res.redirect(`${process.env.CLIENT_URL}/auth/login`)
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
			console.log('USER', req.user)
			if (req.session) {
				req.session.userId = req.user.user.id
				req.session.accessToken = req.user.accessToken
				req.session.refreshToken = req.user.refreshToken

				console.log(req.session)

				const user = await prisma.user({ email: req.user.user.email })

				res.redirect(
					`${process.env.CLIENT_URL}/profile/${user.username}`
				)
			}
		} else {
			res.redirect(`${process.env.CLIENT_URL}/auth/login`)
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

				const user = await prisma.user({ email: req.user.user.email })

				res.redirect(
					`${process.env.CLIENT_URL}/profile/${user.username}`
				)
			}
		} else {
			res.redirect(`${process.env.CLIENT_URL}/auth/login`)
		}
	}
)

export default router
