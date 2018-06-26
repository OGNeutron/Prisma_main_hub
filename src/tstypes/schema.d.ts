// tslint:disable
// graphql typescript definitions

declare namespace GQL {
	interface IGraphQLResponseRoot {
		data?: IQuery | IMutation
		errors?: Array<IGraphQLResponseError>
	}

	interface IGraphQLResponseError {
		/** Required for all errors */
		message: string
		locations?: Array<IGraphQLResponseErrorLocation>
		/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
		[propName: string]: any
	}

	interface IGraphQLResponseErrorLocation {
		line: number
		column: number
	}

	interface IQuery {
		__typename: 'Query'
		currentUser: IUser | null
	}

	interface IUser {
		__typename: 'User'
		id: string
		username: string
		password: string
		email: string
		createdAt: any
		updatedAt: any
		confirmed: boolean
		online: boolean
	}

	/**
	 * An object with an ID
	 */
	type Node = IUser

	/**
	 * An object with an ID
	 */
	interface INode {
		__typename: 'Node'

		/**
		 * The id of the object.
		 */
		id: string
	}

	interface IMutation {
		__typename: 'Mutation'
		login: ILoginResponse
		register: IRegisterResponse
	}

	interface ILoginOnMutationArguments {
		email: string
		password?: string | null
	}

	interface IRegisterOnMutationArguments {
		email: string
		username: string
		password: string
	}

	interface ILoginResponse {
		__typename: 'LoginResponse'
		ok: boolean
		token: string | null
		refreshToken: string
	}

	interface IRegisterResponse {
		__typename: 'RegisterResponse'
		ok: boolean
		result: string
	}
}

// tslint:enable
