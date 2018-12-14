import { ApolloError, ForbiddenError } from 'apollo-server';

import { Context } from '../../tstypes';
import { logger } from '../../utils/logger';
import { INVALID_CREDENTIALS } from '../../constants';
import { User } from '../../generated/prisma';
import {
	SubscriptionResolvers,
	QueryResolvers,
	MutationResolvers
} from '../../generated/graphqlgen';

export const resolvers = {
	Subscription: {
		friendSubscription: {
			subscribe(
				_: any,
				{ id }: SubscriptionResolvers.ArgsFriendSubscription,
				ctx: Context,
				info: any
			) {
				try {
					return ctx.db.subscription.user(
						{
							where: {
								mutation_in: [ 'UPDATED' ],
								node: {
									id
								}
							}
						},
						info
					);
				} catch (error) {
					logger.error({ level: '5', message: error });
					return error;
				}
			}
		},
		friendRequestSubscription: {
			subscribe(
				_: any,
				{ id }: SubscriptionResolvers.ArgsFriendRequestSubscription,
				ctx: any,
				info: any
			) {
				try {
					return ctx.db.subscription.user(
						{
							where: {
								mutation_in: [ 'CREATED', 'UPDATED' ],
								node: {
									id
								}
							}
						},
						info
					);
				} catch (error) {
					logger.error({ level: '5', message: error });
					return error;
				}
			}
		}
	},
	Query: {
		async queryUsers(_: any, __: any, { db }: Context, info: any) {
			try {
				return await db.query.users({}, info);
			} catch (error) {
				return logger.error({ level: 5, message: error });
			}
		},
		async getProfile(
			_: any,
			{ username }: QueryResolvers.ArgsGetProfile,
			{ db }: Context,
			info: any
		) {
			try {
				console.log('PROFILE');
				const profile: User | null = await db.query.user(
					{ where: { username } },
					info
				);

				if (!profile) {
					return new ApolloError('No such user');
				}

				console.log('PROFILE', profile);

				return profile;
			} catch (error) {
				logger.error({ level: '5', message: error });
				return error;
			}
		}
	},
	Mutation: {
		async friendReject(
			_: any,
			{ id }: MutationResolvers.ArgsFriendReject,
			{ db, session }: Context
		) {
			try {
				if (!session.userId) {
					return new ForbiddenError(INVALID_CREDENTIALS);
				}

				if (id) {
					await db.mutation.updateUser({
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
					});

					return {
						ok: true
					};
				} else {
					return new ApolloError('ID is required');
				}
			} catch (error) {
				return logger.error({ level: '5', message: error });
			}
		},
		async friendRequest(
			_: any,
			{ requestedId }: MutationResolvers.ArgsFriendRequest,
			{ db, session }: Context,
			info: any
		) {
			try {
				if (requestedId == undefined) {
					return new ForbiddenError(INVALID_CREDENTIALS);
				} else if (!session.userId) {
					return new ForbiddenError(INVALID_CREDENTIALS);
				}

				const requested: User | null = await db.query.user(
					{
						where: {
							id: requestedId
						}
					},
					`{
						friends {
							id
							username
						}
					}`
				);

				console.log(requested);

				if (requested && requested.friends) {
					const found = requested.friends.find(
						(fr) => fr.id === requestedId
					);

					console.log('FOUND', found);

					if (found !== undefined) {
						return {
							ok: false,
							errors: [
								{
									path: 'friend_request',
									message: 'Already a friend'
								}
							]
						};
					}
				}

				await db.mutation.updateUser(
					{
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
					},
					info
				);

				const requester = await db.query.user({
					where: { id: session.userId }
				});

				if (requester) {
					await db.mutation.createNotification({
						data: {
							message: `Friend request from ${requester.username}`,
							author: {
								connect: {
									id: requestedId
								}
							}
						}
					});

					return {
						ok: true
					};
				} else {
					throw new ApolloError('Error with friend request');
				}
			} catch (error) {
				logger.error({ level: '5', message: error });
				return {
					ok: true,
					error: [
						{
							path: error.path,
							message: error.message
						}
					]
				};
			}
		},
		async addFriend(
			_: any,
			{ requestedId }: MutationResolvers.ArgsAddFriend,
			{ db, session }: Context,
			info: any
		) {
			try {
				console.log(requestedId);

				await db.mutation.updateUser({
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
				});

				const requestedUser = await db.mutation.updateUser({
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
				});

				if (requestedUser) {
					await db.mutation.createNotification({
						data: {
							message: `Friend request accepted from ${requestedUser.username}`,
							author: {
								connect: {
									id: requestedUser.id
								}
							}
						}
					});
				}

				console.log('THIS FAR');

				await db.mutation.updateUser({
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
				});

				const user: User | null = await db.query.user(
					{
						where: {
							id: requestedId
						}
					},
					info
				);

				return {
					ok: true,
					errors: [],
					user
				};
			} catch (error) {
				logger.error({ level: '5', message: error });
				return {
					ok: false,
					error: [
						{
							path: error.path,
							message: error.message
						}
					]
				};
			}
		}
	}
};
