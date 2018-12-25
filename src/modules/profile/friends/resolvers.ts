import { ForbiddenError, ApolloError } from 'apollo-server-express'

import { logger } from '../../../utils/logger'
import { Context } from '../../../tstypes'
import { INVALID_CREDENTIALS } from '../../../constants'
import { MutationResolvers } from '../../../generated/graphqlgen'
import { User } from '../../../generated/prisma-client'

export const resolvers = {
	Mutation: {
		async friendRemove(
			_: any,
			{ friendId }: MutationResolvers.ArgsFriendRemove,
			{ db, session }: Context
		) {
			try {
				const user = await db.updateUser({
					where: {
						id: session.id
					},
					data: {
						friends: {
							disconnect: {
								id: friendId
							}
						}
					}
				})

				await db.updateUser({
					where: { id: friendId },
					data: {
						friends: {
							disconnect: {
								id: user.id
							}
						}
					}
				})

				return {
					ok: true,
					user
				}
			} catch (error) {
				logger.error({ level: '5', message: error })
				return new ApolloError(error)
			}
		},
		async friendReject(
			_: any,
			{ id }: MutationResolvers.ArgsFriendReject,
			{ db, session }: Context
		) {
			try {
				if (!session.userId) {
					return new ForbiddenError(INVALID_CREDENTIALS)
				}

				if (id) {
					await db.updateUser({
						where: {
							id: session.userId
						},
						data: {
							friend_requests: {
								disconnect: {
									id
								}
							}
						}
					})

					return {
						ok: true
					}
				} else {
					return new ApolloError('ID is required')
				}
			} catch (error) {
				return logger.error({ level: '5', message: error })
			}
		},
		async friendRequest(
			_: any,
			{ requestedId }: MutationResolvers.ArgsFriendRequest,
			{ db, session }: Context
		) {
			try {
				if (requestedId == undefined) {
					return new ForbiddenError(INVALID_CREDENTIALS)
				} else if (!session.userId) {
					return new ForbiddenError(INVALID_CREDENTIALS)
				}

				const requested = await db.user({
					id: requestedId
				})

				const friends = await db
					.user({
						id: requestedId
					})
					.friends()

				console.log(requested)

				if (requested && friends) {
					const found = friends.find(
						(fr: User) => fr.id === requestedId
					)

					console.log('FOUND', found)

					if (found !== undefined) {
						return {
							ok: false,
							errors: [
								{
									path: 'friend_request',
									message: 'Already a friend'
								}
							]
						}
					}
				}

				await db.updateUser({
					where: {
						id: requestedId
					},
					data: {
						friend_requests: {
							connect: {
								id: session.userId
							}
						}
					}
				})

				const requester = await db.user({
					id: session.userId
				})

				if (requester) {
					await db.createNotification({
						message: `Friend request from ${requester.username}`,
						author: {
							connect: {
								id: requestedId
							}
						}
					})

					return {
						ok: true
					}
				} else {
					throw new ApolloError('Error with friend request')
				}
			} catch (error) {
				logger.error({ level: '5', message: error })
				return {
					ok: true,
					error: [
						{
							path: error.path,
							message: error.message
						}
					]
				}
			}
		},
		async addFriend(
			_: any,
			{ requestedId }: MutationResolvers.ArgsAddFriend,
			{ db, session }: Context
		) {
			try {
				console.log(requestedId)

				await db.updateUser({
					where: {
						id: session.userId
					},
					data: {
						friends: {
							connect: {
								id: requestedId
							}
						}
					}
				})

				const requestedUser = await db.updateUser({
					where: {
						id: requestedId
					},
					data: {
						friends: {
							connect: {
								id: session.userId
							}
						}
					}
				})

				if (requestedUser) {
					await db.createNotification({
						message: `Friend request accepted from ${
							requestedUser.username
						}`,
						author: {
							connect: {
								id: requestedUser.id
							}
						}
					})
				}

				console.log('THIS FAR')

				await db.updateUser({
					where: {
						id: session.userId
					},
					data: {
						friend_requests: {
							disconnect: {
								id: requestedId
							}
						}
					}
				})

				const user = await db.user({
					id: requestedId
				})

				return {
					ok: true,
					errors: [],
					user
				}
			} catch (error) {
				logger.error({ level: '5', message: error })
				return {
					ok: false,
					error: [
						{
							path: error.path,
							message: error.message
						}
					]
				}
			}
		}
	}
}
