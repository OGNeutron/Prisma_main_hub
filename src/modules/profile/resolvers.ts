import { ApolloError } from 'apollo-server'

import { Context } from '../../tstypes'
import { logger } from '../../utils/logger'
import {
	SubscriptionResolvers,
	QueryResolvers
} from '../../generated/graphqlgen'

export const resolvers = {
	Subscription: {
		friendSubscription: {
			subscribe(
				_: any,
				{ id }: SubscriptionResolvers.ArgsFriendSubscription,
				ctx: Context
			) {
				try {
					return ctx.db.$subscribe.user({
						mutation_in: ['UPDATED'],
						node: {
							id
						}
					})
				} catch (error) {
					logger.error({ level: '5', message: error })
					return error
				}
			}
		},
		friendRequestSubscription: {
			subscribe(
				_: any,
				{ id }: SubscriptionResolvers.ArgsFriendRequestSubscription,
				ctx: any,
				info: any
			) {
				try {
					return ctx.db.subscription.user(
						{
							where: {
								mutation_in: ['CREATED', 'UPDATED'],
								node: {
									id
								}
							}
						},
						info
					)
				} catch (error) {
					logger.error({ level: '5', message: error })
					return error
				}
			}
		}
	},
	Query: {
		async queryUsers(_: any, __: any, { db }: Context) {
			try {
				return await db.users({})
			} catch (error) {
				return logger.error({ level: 5, message: error })
			}
		},
		async getProfile(
			_: any,
			{ username }: QueryResolvers.ArgsGetProfile,
			{ db }: Context
		) {
			try {
				const profile = await db.user({ username })

				if (!profile) {
					return new ApolloError('No such user')
				}

				return profile
			} catch (error) {
				logger.error({ level: '5', message: error })
				return error
			}
		}
	}
}
