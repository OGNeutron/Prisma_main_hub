// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { OrderResolvers } from '../graphqlgen'

export const Order: OrderResolvers.Type = {
	...OrderResolvers.defaultResolvers,

	products: (parent, args, ctx) => {
		throw new Error('Resolver not implemented')
	},
	customer: (parent, args, ctx) => {
		throw new Error('Resolver not implemented')
	}
}
