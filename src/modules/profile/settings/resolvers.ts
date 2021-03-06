import { ApolloError } from 'apollo-server'
import { comparePassword, hashPassword } from 'scotts_utilities'
import { MutationResolvers } from '../../../generated/graphqlgen'
import { Context } from '../../../tstypes'
import { processUpload } from '../../../utils/helperFunctions'
import { logger } from '../../../utils/logger'

export const resolvers = {
	Mutation: {
		async updateProfile(
			_: any,
			{ avatar, username, newPassword, oldPassword }: any,
			{ db, session }: Context
		) {
			try {
				const response: any = await processUpload(avatar, 'avatars')

				console.log('IMAGE RESPONSE', response)

				if (!response) {
					return new ApolloError('Error with uploading image')
				}

				const userImage = await db
					.user({ id: session.userId })
					.avatar_url()

				const avatarResponse: any = await db.updateFile({
					where: {
						id: userImage.id
					},
					data: {
						mimetype: response.mimetype,
						filename: response.filename,
						url: response.url,
						encoding: response.encoding,
						key: response.key,
						ETag: response.Etag
					}
				})

				if (username) {
					await db.updateUser({
						where: {
							id: session.userId
						},
						data: {
							username
						}
					})
				}

				if (newPassword & oldPassword) {
					try {
						let userP = await db.user({
							id: session.userId
						})

						const valid = comparePassword(
							oldPassword,
							userP.password
						)

						if (valid) {
							let hashedPassword: string = await hashPassword(
								newPassword,
								10
							)

							await db.updateUser({
								where: {
									id: session.userId
								},
								data: {
									password: hashedPassword
								}
							})
						}
					} catch (error) {
						logger.error({ level: '5', message: error.message })
						throw new ApolloError(error)
					}
				}

				return {
					avatar: avatarResponse,
					username
				}
			} catch (error) {
				logger.error({ level: '5', message: error.message })
				throw new ApolloError(error)
			}
		},
		blockUser(
			_: any,
			{ id }: MutationResolvers.ArgsBlockUser,
			{ db, session }: Context
		) {
			try {
				return db.updateUser({
					where: {
						id: session.userId
					},
					data: {
						blockedUsers: {
							connect: {
								id
							}
						}
					}
				})
			} catch (error) {
				logger.error({ level: '5', message: error.message })
				throw new ApolloError(error)
			}
		},
		unblockUser(
			_: any,
			{ id }: MutationResolvers.ArgsUnblockUser,
			{ db, session }: Context
		) {
			try {
				return db.updateUser({
					where: {
						id: session.userId
					},
					data: {
						blockedUsers: {
							disconnect: {
								id
							}
						}
					}
				})
			} catch (error) {
				logger.error({ level: '5', message: error.message })
				throw new ApolloError(error)
			}
		},
		setProfilePrivacy(
			_: any,
			{ bool }: MutationResolvers.ArgsSetProfilePrivacy,
			{ db, session }: Context
		) {
			try {
				return db.updateUser({
					where: {
						id: session.userId
					},
					data: {
						private: bool
					}
				})
			} catch (error) {
				logger.error({ level: '5', message: error.message })
				throw new ApolloError(error)
			}
		}
	}
}
