import { ForbiddenError } from 'apollo-server'

import { Context } from '../../../tstypes'
import { INVALID_CREDENTIALS } from '../../../constants'
import { removeAllUsersSessions } from '../../../utils/auth/helperFunctions'
import { logger } from '../../../utils/logger'
import { MutationResolvers } from '../../../generated/graphqlgen'

export const resolvers = {
	Mutation: {
		async logout(
			_: any,
			__: MutationResolvers.LogoutResolver,
			{ db, session, redis, res }: Context
		): Promise<boolean> {
			try {
				let userId
				if (session) {
					if (session.decodedUser) {
						userId = session.decodedUser
					} else {
						userId = session.userId
					}
				}

				if (userId === undefined) {
					throw new ForbiddenError(INVALID_CREDENTIALS)
				}

				await db.updateUser({
					data: {
						online: false
					},
					where: {
						id: userId
					}
				})

				removeAllUsersSessions(userId, redis)

				session.destroy(err => {
					if (err) {
						logger.info({ level: 0, message: err })
					}
				})

				res.clearCookie('qid')

				return true
			} catch (error) {
				logger.info({ level: '0', message: error })
				return false
			}
		}
	}
}
