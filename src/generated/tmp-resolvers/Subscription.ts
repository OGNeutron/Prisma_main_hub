// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { SubscriptionResolvers } from '../graphqlgen'

export const Subscription: SubscriptionResolvers.Type = {
	...SubscriptionResolvers.defaultResolvers,
	friendRequestSubscription: {
		subscribe: (parent, args, ctx) => {
			throw new Error('Resolver not implemented')
		}
	},
	friendSubscription: {
		subscribe: (parent, args, ctx) => {
			throw new Error('Resolver not implemented')
		}
	},
	NotificationSubscription: {
		subscribe: (parent, args, ctx) => {
			throw new Error('Resolver not implemented')
		}
	},
	messageSubscription: {
		subscribe: (parent, args, ctx) => {
			throw new Error('Resolver not implemented')
		}
	},
	newCommentSubscription: {
		subscribe: (parent, args, ctx) => {
			throw new Error('Resolver not implemented')
		}
	}
}
