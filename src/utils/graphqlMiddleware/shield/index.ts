import { rule, shield } from 'graphql-shield'
import { Context } from '../../../tstypes'

const isAuthenticated = rule()((_: any, __: any, { session }: Context) => {
	return !!session.userId
})

export const ShieldMiddleware = shield({
	Query: {
		getProfile: isAuthenticated
	}
})
