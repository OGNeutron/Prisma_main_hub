import { Context } from '../../tstypes'
import { GQL } from '../../tstypes/schema'

export const resolvers = {
	Subscription: {
		NotificationSubscription: {
			subscribe(
				_: any,
				{ id }: GQL.INotificationSubscriptionOnSubscriptionArguments,
				{ db }: Context,
				info: any
			) {
				return db.subscription.notification(
					{
						where: {
							mutation_in: ['CREATED'],
							node: {
								author: {
									id
								}
							}
						}
					},
					info
				)
			}
		}
	}
}
