import { Context } from '../../tstypes'
import { SubscriptionResolvers } from '../../generated/graphqlgen'

export const resolvers = {
	Subscription: {
		NotificationSubscription: {
			subscribe(
				_: any,
				{ id }: SubscriptionResolvers.ArgsNotificationSubscription,
				{ db }: Context
			) {
				return db.$subscribe.notification({
					mutation_in: ['CREATED'],
					node: {
						author: {
							id
						}
					}
				})
			}
		}
	}
}
