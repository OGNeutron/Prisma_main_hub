import { Context } from '../../tstypes';
import { SubscriptionResolvers } from '../../generated/graphqlgen';

export const resolvers = {
	Subscription: {
		NotificationSubscription: {
			subscribe(
				_: any,
				{ id }: SubscriptionResolvers.ArgsNotificationSubscription,
				{ db }: Context,
				info: any
			) {
				return db.subscription.notification(
					{
						where: {
							mutation_in: [ 'CREATED' ],
							node: {
								author: {
									id
								}
							}
						}
					},
					info
				);
			}
		}
	}
};
