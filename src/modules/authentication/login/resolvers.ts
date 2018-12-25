import * as yup from 'yup'

import { comparePassword, createToken } from 'scotts_utilities'
import { ForbiddenError, ApolloError, AuthenticationError } from 'apollo-server'

import { Context } from '../../../tstypes'
import { INVALID_CREDENTIALS, USER_SESSION_ID_PREFIX } from '../../../constants'
import { logger } from '../../../utils/logger'
import { MutationResolvers } from '../../../generated/graphqlgen'

const loginSchema: yup.ObjectSchema<{}> = yup.object().shape({
	email: yup
		.string()
		.required()
		.email(),
	password: yup.string().required()
})

export const resolvers = {
	Mutation: {
		async login(
			_: any,
			{ email, password }: MutationResolvers.ArgsLogin,
			{ db, session, redis, req }: Context
		) {
			try {
				if (
					await loginSchema.validate(
						{ email, password },
						{ abortEarly: false }
					)
				) {
					const user = await db.user({
						email
					})

					if (!user) {
						throw new AuthenticationError(INVALID_CREDENTIALS)
					}

					if (!user.password) {
						throw new AuthenticationError('Need to add a password')
					}

					if (!user.confirmed) {
						throw new ApolloError(
							`User is not confirmed, please check your email: ${email}`
						)
					}

					const valid = await comparePassword(
						password as string,
						user.password
					)

					if (!valid) {
						throw new ForbiddenError(INVALID_CREDENTIALS)
					}

					await db.updateUser({
						where: { email },
						data: { online: true }
					})

					const [token, refreshToken] = await createToken(
						user,
						'secret',
						{ expiresIn: '7d' },
						'moresecrets',
						user
					)

					console.log(token)

					session.userId = user.id
					if (req.sessionID) {
						await redis.lpush(
							`${USER_SESSION_ID_PREFIX}${user.id}`,
							req.sessionID
						)
					}

					return {
						ok: true,
						token,
						refreshToken,
						user
					}
				} else {
					throw new AuthenticationError(INVALID_CREDENTIALS)
				}
			} catch (error) {
				logger.error({ level: '5', message: error })
				return error
			}
		}
	}
}
