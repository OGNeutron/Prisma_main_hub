import { ApolloError } from 'apollo-server'
import { Context } from '../../../tstypes'
import { logger } from '../../../utils/logger'

export const resolvers = {
	Notification: {
		team(parent: any, _: any, { db }: Context) {
			try {
				return db.notification({ id: parent.id }).team()
			} catch (error) {
				logger.error({ level: '5', message: error })
				return new ApolloError(error)
			}
		},
		async channel(parent: any, _: any, { db }: Context) {
			try {
				console.log('PARENT_ID', parent)
				const result = await db
					.notification({
						id: parent.id
					})
					.channel()

				console.log('CHANNELS', result)

				return result
			} catch (error) {
				logger.error({ level: '5', message: error })
				return new ApolloError(error)
			}
		},
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
