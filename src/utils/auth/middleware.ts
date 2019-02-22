import { Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { logger } from '../logger'

export const addUser = (req: Request, _: Response, next: Function): any => {
	let token
	const secret = process.env.JWT_SECRET as string

	if (req.headers != undefined) {
		if (req.headers['x-token']) {
			token = req.headers['x-token']
		}
	}

	if (token != undefined) {
		try {
			// @ts-ignore
			const user = verify(token as string, secret)
			console.log('WORKING')

			if (req.session) {
				// req.session.decodedUser = user
			}
		} catch (error) {
			logger.log({ level: '0', message: error })
		}
	}

	next()
}
