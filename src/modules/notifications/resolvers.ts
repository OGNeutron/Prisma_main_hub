import { Context } from '../../tstypes'
import { SubscriptionResolvers } from '../../generated/graphqlgen'
import { logger } from '../../utils/logger'
import { ApolloError } from 'apollo-server'

export const resolvers = {
	Subscription: {
		NotificationSubscription: {
			subscribe(
				_: any,
				{ id }: SubscriptionResolvers.ArgsNotificationSubscription,
				{ db }: Context
			) {
				return db.$subscribe.notification({
					mutation_in: ['CREATED', 'UPDATED'],
					node: {
						author: {
							id
						}
					}
				})
			},
			resolve(payload: any) {
				console.log(payload)
				return payload
			}
		}
	},
	Query: {
		fetchNotifications(_: any, __: any, { db, session }: Context) {
			try {
				return db.notifications({
					where: {
						author: {
							id: session.userId
						}
					}
				})
			} catch (error) {
				logger.error({ level: '5', message: error.message })
				return new ApolloError(error)
			}
		}
	}
}
