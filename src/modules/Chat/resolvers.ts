import { ForbiddenError, ApolloError } from 'apollo-server';
import * as shortid from 'shortid';

import { Context } from '../../tstypes';
import { logger } from '../../utils/logger';
import { INVALID_CREDENTIALS } from '../../constants';
import { GQL } from '../../tstypes/schema';
import { Channel, Team } from '../../generated/prisma';
import { sluggify } from 'scotts_utilities';

export const resolvers = {
	Subscription: {
		messageSubscription: {
			subscribe(
				_: any,
				{ channelId }: GQL.IMessageSubscriptionOnSubscriptionArguments,
				{ db }: Context,
				info: any
			) {
				console.log('MESSAGE SUBSCRIPTION', channelId);
				try {
					const response = db.subscription.message(
						{
							where: {
								mutation_in: [ 'CREATED' ],
								node: {
									parentId: channelId
								}
							}
						},
						info
					);

					return response;
				} catch (err) {
					console.log(err);
					return err;
				}
			}
		}
	},
	Query: {
		async showChannel(
			_: any,
			{ channelId }: GQL.IShowChannelOnQueryArguments,
			{ db }: Context,
			info: any
		) {
			return await db.query.channel(
				{
					where: {
						id: channelId
					}
				},
				info
			);
		},
		async showTeams(
			_: any,
			{ authorId }: GQL.IShowTeamsOnQueryArguments,
			{ db, session }: Context,
			info: any
		) {
			try {
				const response = await db.query.teams(
					{
						where: {
							OR: [
								{
									author: {
										id: authorId
									}
								},
								{
									members_some: {
										id: session.userId
									}
								}
							]
						}
					},
					info
				);
				console.log(response);

				return response;
			} catch (error) {
				return logger.error({ level: '5', message: error.message });
			}
		},
		async showTeam(
			_: any,
			{ teamSlug }: GQL.IShowTeamOnQueryArguments,
			{ db }: Context,
			info: any
		) {
			try {
				const team = await db.query.teams(
					{
						where: {
							slug: teamSlug
						}
					},
					info
				);

				return team[0];
			} catch (error) {
				return logger.error({ level: '5', message: error.message });
			}
		}
		// async showChannels(_: any, {teamId}: any, {db}: Context, info: any) {
		// 	try {
		// 		return await db.query.channels({
		// 			where: {

		// 			}
		// 		})
		// 	} catch (error) {

		// 	}
		// }
	},
	Mutation: {
		async removeChannelMember(
			_: any,
			{ userId, channelId }: any,
			{ db, session }: Context,
			info: any
		) {
			console.log('USERID', userId);
			console.log('CHANNELID', channelId);

			try {
				const channel = await db.query.channel(
					{
						where: {
							id: channelId
						}
					},
					info
				);

				console.log('CHANNEL', channel);

				if (channel != undefined) {
					if (
						channel.author.id === session.userId ||
						userId === session.userId
					) {
						return await db.mutation.updateChannel(
							{
								where: {
									id: channelId
								},
								data: {
									members: {
										disconnect: {
											id: userId
										}
									}
								}
							},
							info
						);
					} else {
						logger.error({
							level: '3',
							message: INVALID_CREDENTIALS
						});
						throw new ForbiddenError(INVALID_CREDENTIALS);
					}
				} else {
					logger.error({
						level: '3',
						message: 'Channel not found'
					});
					throw new ForbiddenError(INVALID_CREDENTIALS);
				}
			} catch (error) {
				return logger.error({ level: '5', message: error.message });
			}
		},
		async createMessage(
			_: any,
			{ body, channelId }: GQL.ICreateMessageOnMutationArguments,
			{ db, session }: Context,
			info: any
		) {
			const newMessage = await db.mutation.createMessage(
				{
					data: {
						body,
						parentId: channelId,
						url: '',
						filetype: '',
						author: {
							connect: {
								id: session.userId
							}
						}
					}
				},
				info
			);

			await db.mutation.updateChannel({
				where: {
					id: channelId
				},
				data: {
					messages: {
						connect: {
							id: newMessage.id
						}
					}
				}
			});

			return newMessage;
		},
		async createChannel(
			_: any,
			{ name, teamId }: GQL.ICreateChannelOnMutationArguments,
			{ db, session }: Context,
			info: any
		) {
			try {
				if (!teamId) {
					throw new ForbiddenError(INVALID_CREDENTIALS);
				}

				const channel: Channel = await db.mutation.createChannel(
					{
						data: {
							name,
							slug: `${sluggify(name)}-${shortid()}`,
							author: {
								connect: {
									id: session.userId
								}
							}
						}
					},
					info
				);

				await db.mutation.updateTeam({
					data: {
						channels: {
							connect: {
								id: channel.id
							}
						}
					},

					where: {
						id: teamId
					}
				});

				return channel;
			} catch (error) {
				return logger.error({ level: '5', message: error.message });
			}
		},
		async createTeam(
			_: any,
			{ name }: GQL.ICreateTeamOnMutationArguments,
			{ db, session }: Context,
			info: any
		) {
			try {
				return await db.mutation.createTeam(
					{
						data: {
							name: `${name}`,
							slug: `${sluggify(name)}-${shortid()}`,
							author: {
								connect: {
									id: session.userId
								}
							},
							channels: {
								create: {
									name: `General`,
									slug: `general-${shortid()}`,
									author: {
										connect: {
											id: session.userId
										}
									}
								}
							}
						}
					},
					info
				);
			} catch (error) {
				return logger.error({ level: '5', message: error.message });
			}
		},
		async addTeamMember(
			_: any,
			{ userId, teamId }: GQL.IAddTeamMemberOnMutationArguments,
			{ db, session }: Context,
			info: any
		) {
			console.log('USERID', userId);
			console.log('TEAMID', teamId);
			try {
				const team: Team | null = await db.query.team(
					{
						where: {
							id: teamId
						}
					},
					info
				);

				if (team && team.author.id !== session.userId) {
					throw new ForbiddenError(INVALID_CREDENTIALS);
				}

				const user = await db.query.user({
					where: {
						id: userId
					}
				});

				console.log('TEAM', team);
				console.log('USER', user);

				if (user && team) {
					return await db.mutation.updateTeam(
						{
							data: {
								members: {
									connect: {
										id: user.id
									}
								}
							},
							where: {
								id: team.id
							}
						},
						info
					);
				} else {
					return new ApolloError('Error: Unable to perform action');
				}
			} catch (error) {
				return logger.error({ level: '5', message: error.message });
			}
		},
		async addChannelMember(
			_: any,
			{ userId, channelId }: GQL.IAddChannelMemberOnMutationArguments,
			{ db, session }: Context,
			info: any
		) {
			console.log('USERID', userId);
			console.log('CHANNELID', channelId);

			try {
				const channel: Channel | null = await db.query.channel(
					{
						where: {
							id: channelId
						}
					},
					info
				);

				console.log('CHANNEL', channel);
				console.log('SESSION', session);

				if (channel && channel.author.id === session.userId) {
					const user = await db.query.user(
						{
							where: {
								id: userId
							}
						},
						info
					);

					if (user) {
						return await db.mutation.updateChannel(
							{
								where: {
									id: channelId
								},
								data: {
									members: {
										connect: {
											id: user.id
										}
									}
								}
							},
							info
						);
					} else {
						throw new ApolloError('Error: no such member');
					}
				} else {
					throw new ForbiddenError(INVALID_CREDENTIALS);
				}
			} catch (error) {
				return logger.error({ level: '5', message: error.message });
			}
		}
	}
};
