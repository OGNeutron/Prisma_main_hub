import { Context } from '../../../tstypes'
import { logger } from '../../../utils/logger'
import { ApolloError } from 'apollo-server'

export const resolvers = {
	Notification: {
		author(parent: any, _: any, { db }: Context) {
			try {
				return db.notification({ id: parent.id }).author()
			} catch (error) {
				logger.error({ level: '5', message: error })
				return new ApolloError(error)
			}
		},
		friend(parent: any, _: any, { db }: Context) {
			try {
				return db.notification({ id: parent.id }).friend()
			} catch (error) {
				logger.error({ level: '5', message: error })
				return new ApolloError(error)
			}
		},
		friend_requests(parent: any, _: any, { db }: Context) {
			try {
				return db.notification({ id: parent.id }).friend_requests()
			} catch (error) {
				logger.error({ level: '5', message: error })
				return new ApolloError(error)
			}
		},
		comments(parent: any, _: any, { db }: Context) {
			try {
				return db.notification({ id: parent.id }).comments()
			} catch (error) {
				logger.error({ level: '5', message: error })
				return new ApolloError(error)
			}
		}
	}
}
