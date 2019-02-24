import { ApolloError, AuthenticationError } from 'apollo-server'
import { INVALID_CREDENTIALS } from '../../constants'
import { SubscriptionResolvers } from '../../generated/graphqlgen'
import { Context } from '../../tstypes'
import { logger } from '../../utils/logger'

export const resolvers = {
	Subscription: {
		NotificationSubscription: {
			subscribe(
				_: any,
				{ id }: SubscriptionResolvers.ArgsNotificationSubscription,
				{ db }: Context
			) {
				console.log('ID', id)
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
				console.log('SUBSCRIPTION_PAYLOAD', payload)
				return payload
			}
		}
	},
	Query: {
		async fetchNotifications(_: any, __: any, { db, session }: Context) {
			try {
				const notification = await db.notifications({
					where: {
						author: {
							id: session.userId
						}
					}
				})

				return notification
			} catch (error) {
				logger.error({ level: '5', message: error.message })
				return new ApolloError(error)
			}
		}
	},
	Mutation: {
		async deleteNotification(_: any, args: any, { db, session }: Context) {
			try {
				const notification = await db
					.notification({ id: args.id })
					.author()

				if (notification.id === session.userId) {
					await db.deleteNotification({
						id: args.id
					})

					return {
						ok: true
					}
				} else {
					return new AuthenticationError(INVALID_CREDENTIALS)
				}
			} catch (error) {
				logger.error({ level: '5', message: error.message })
				return new ApolloError(error)
			}
		}
	}
}
