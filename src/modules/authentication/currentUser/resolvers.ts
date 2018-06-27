import { ForbiddenError } from 'apollo-server'

import { ResolverMap } from '../../../tstypes'
import { INVALID_CREDENTIALS } from '../../../constants'
import { logger } from '../../../utils/logger'

export const resolvers: ResolverMap = {
	Query: {
		async currentUser(_: any, __: any, { session, db }): Promise<any> {
			try {
				let userId
				if (session) {
					if (session.decodedUser) {
						userId = session.decodedUser
					} else if (session.userId) {
						userId = session.userId
					}
				}

				if (userId == undefined) {
					throw new ForbiddenError(INVALID_CREDENTIALS)
				}

				return await db.query.user({ where: { id: userId } })
			} catch (error) {
				logger.error({ level: '', message: error })
				return error
			}
		}
	}
}
