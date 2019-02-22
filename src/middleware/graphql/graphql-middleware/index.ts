import { AuthenticationError } from 'apollo-server-express'
import { ALREADY_SIGNED_IN } from '../../../constants'

const isAuthenticated = async (
	resolve: any,
	parent: any,
	args: any,
	context: any,
	info: any
) => {
	return resolve(parent, args, context, info)
}

const alreadySignedIn = async (
	resolve: any,
	parent: any,
	args: any,
	context: any,
	info: any
) => {
	if (context.session.userId) {
		throw new AuthenticationError(ALREADY_SIGNED_IN)
	}

	return resolve(parent, args, context, info)
}

export const graphqlMiddleware = {
	Query: {
		currentUser: isAuthenticated,
		getProfile: isAuthenticated
	},
	Mutation: {
		login: isAuthenticated,
		register: alreadySignedIn
		// changePassword: isAuthenticated
	}
}
