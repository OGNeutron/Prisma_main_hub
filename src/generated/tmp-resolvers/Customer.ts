// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { CustomerResolvers } from '../graphqlgen'

export const Customer: CustomerResolvers.Type = {
	...CustomerResolvers.defaultResolvers,

	user: (parent, args, ctx) => {
		throw new Error('Resolver not implemented')
	}
}
