import * as compression from 'compression'
import * as helmet from 'helmet'
import * as express from 'express'
import * as path from 'path'
import * as session from 'express-session'
import * as morgan from 'morgan'
import * as passport from 'passport'

import { Express } from 'express'

const redisStore = require('connect-redis')(session)
// import uuid from 'uuid/v4'

// import { REDIS_PREFIX } from '../constants'
// import { redis } from '../redis'
import { addUser } from '../../utils/auth/middleware'
import { redis } from '../../redis'
import { REDIS_PREFIX } from '../../constants'

export const middleware = (app: Express, passport: passport.PassportStatic) => {
	if (process.env.NODE_ENV !== 'production') {
	}

	app.disable('x-powered-by')
	app.use(morgan('dev'))
	app.use(helmet())
	app.use(compression())
	app.use(express.json())
	app.use(
		express.urlencoded({
			extended: true,
			inflate: true,
			limit: '100kb',
			parameterLimit: 1000
		})
	)
	app.use(express.static(path.join(__dirname, '../public')))

	app.use(
		session({
			store: new redisStore({
				client: redis as any,
				prefix: REDIS_PREFIX
			}),
			name: 'qid',
			secret: process.env.SESSION_SECRET as string,
			resave: false,
			saveUninitialized: false,
			cookie: {
				httpOnly: true,
				secure: 'auto', // process.env.NODE_ENV === 'production', remember for https
				maxAge: 1000 * 60 * 60 * 24 * 7
			}
		})
	)
	app.use(passport.initialize())
	app.use(addUser as any)
}
