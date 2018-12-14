import * as yup from 'yup';
import { AuthenticationError, ForbiddenError } from 'apollo-server';
import { decode } from 'jsonwebtoken';
import { hashPassword } from 'scotts_utilities';

import { Context } from '../../../tstypes';
import { sendConfirmationEmail } from '../../../utils/auth/emailHelpers';
import { INVALID_CREDENTIALS } from '../../../constants';
import { logger } from '../../../utils/logger';
import { GQL } from '../../../tstypes/schema';
import { User } from '../../../generated/prisma';

const schema: yup.ObjectSchema<{}> = yup.object().shape({
	username: yup.string().required(),
	email: yup.string().required().email(),
	password: yup.string().required()
});

export const resolvers = {
	Mutation: {
		async authConfirmation(
			_: any,
			{ token }: GQL.IAuthConfirmationOnMutationArguments,
			{ db }: Context
		) {
			try {
				let decoded: any;
				if (token != null) {
					decoded = decode(token);
				}

				if (decoded == null) {
					throw new ForbiddenError(INVALID_CREDENTIALS);
				}

				const user: User | null = await db.mutation.updateUser({
					where: { id: decoded.user.id },
					data: {
						confirmed: true
					}
				});

				if (user) {
					return {
						ok: true,
						result: `${user.username}`
					};
				} else {
					return {
						ok: true,
						result: INVALID_CREDENTIALS
					};
				}
			} catch (error) {
				logger.error({ level: '0', message: error.message });
				return error;
			}
		},
		async register(
			_: any,
			{ username, email, password }: GQL.IRegisterOnMutationArguments,
			{ db, req }: Context
		): Promise<any> {
			try {
				const isValid: yup.ValidateOptions = await schema.validate(
					{
						username,
						email,
						password
					},
					{ abortEarly: false }
				);

				if (isValid) {
					const passwordHash: string = await hashPassword(
						password as string,
						10
					);

					const user: User = await db.mutation.createUser({
						data: {
							username,
							email,
							role: 'USER',
							password: passwordHash,
							avatar_url: {
								create: {
									filename: 'pillars',
									mimetype: 'image/jpeg',
									encoding: 'something',
									key: '1',
									ETag: 'tag',
									url:
										'http://res.cloudinary.com/dmxf3jh8t/image/upload/v1524175832/pillarsofcreation_m6prxe.jpg'
								}
							}
						}
					});

					const url: string = req.get('origin') as string;

					sendConfirmationEmail(user, url);

					return {
						__typename: 'RegisterResponse',
						ok: true,
						result: `Confirmation email sent to ${user.email}`
					};
				} else {
					return {
						__typename: 'RegisterResponse',
						ok: false,
						result: new AuthenticationError(INVALID_CREDENTIALS)
							.message
					};
				}
			} catch (error) {
				logger.error({ level: '0', message: error });
				return error;
			}
		}
	}
};
