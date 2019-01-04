import { SchemaDirectiveVisitor } from 'graphql-tools'
import { defaultFieldResolver } from 'graphql'
import { INVALID_CREDENTIALS } from '../constants'
import { ForbiddenError } from 'apollo-server'

export default class AuthDirective extends SchemaDirectiveVisitor {
	visitFieldDefinition(field: any) {
		const { resolve = defaultFieldResolver } = field

		field.resolve = function(...args: any) {
			const [, , context] = args
			if (context.req.session.userId === null) {
				console.log('WORKING', context.req.session)
				throw new ForbiddenError(INVALID_CREDENTIALS)
			}

			return resolve.apply(this, args)
		}
	}
}
