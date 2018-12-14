import { ForbiddenError, ApolloError } from 'apollo-server';

import { Context } from '../../tstypes';
import { logger } from '../../utils/logger';
import { INVALID_CREDENTIALS } from '../../constants';
import { Channel, Team } from '../../generated/prisma';
import {
	MutationResolvers,
	SubscriptionResolvers
} from '../../generated/graphqlgen';

export const resolvers = {
	Subscription: {
		messageSubscription: {
			subscribe(
				_: any,
				{ channelId }: SubscriptionResolvers.ArgsMessageSubscription,
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

	Mutation: {
		async addTeamMember(
			_: any,
			{ userId, teamId }: MutationResolvers.ArgsAddTeamMember,
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
			{ userId, channelId }: MutationResolvers.ArgsAddChannelMember,
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
