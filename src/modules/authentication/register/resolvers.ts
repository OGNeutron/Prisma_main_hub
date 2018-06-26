import * as yup from 'yup'
import { AuthenticationError } from 'apollo-server'
import { Context } from '../../../tstypes'
import { hashPassword } from '../../../utils/auth/helperFunctions'
import { sendConfirmationEmail } from '../../../utils/auth/emailHelpers'
import { INVALID_CREDENTIALS } from '../../../constants'
import { logger } from '../../../utils/logger'

const schema: yup.ObjectSchema<{}> = yup.object().shape({
	username: yup.string().required(),
	email: yup
		.string()
		.required()
		.email(),
	password: yup.string().required()
})

export const resolvers = {
	Mutation: {
		async register(
			_: any,
			{ username, email, password }: any,
			{ db }: Context
		): Promise<any> {
			try {
				const isValid = await schema.validate(
					{
						username,
						email,
						password
					},
					{ abortEarly: false }
				)

				if (isValid) {
					const passwordHash: string = await hashPassword(
						password as string
					)

					const user = await db.mutation.createUser({
						data: {
							username,
							email,
							password: passwordHash
						}
					})

					sendConfirmationEmail(user)

					return {
						__typename: 'RegisterResponse',
						ok: true,
						result: `Confirmation email sent to ${user.email}`
					}
				} else {
					return {
						__typename: 'RegisterResponse',
						ok: false,
						result: new AuthenticationError(INVALID_CREDENTIALS)
							.message
					}
				}
			} catch (error) {
				logger.error({ level: '0', message: error })
				return error
			}
		}
	}
}
