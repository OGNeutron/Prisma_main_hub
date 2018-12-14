import { sluggify } from 'scotts_utilities';
import * as shortid from 'shortid';
import { ForbiddenError } from 'apollo-server-express';

import { logger } from '../../../utils/logger';
import { MutationResolvers } from '../../../generated/graphqlgen';
import { Context } from '../../../tstypes';
import { INVALID_CREDENTIALS } from '../../../constants';

export const resolvers = {
	Mutation: {
		async createMessage(
			_: any,
			{ body, channelId }: MutationResolvers.ArgsCreateMessage,
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
			{ name, teamId }: MutationResolvers.ArgsCreateChannel,
			{ db, session }: Context,
			info: any
		) {
			try {
				if (!teamId) {
					throw new ForbiddenError(INVALID_CREDENTIALS);
				}

				const channel = await db.mutation.createChannel(
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
			{ name }: MutationResolvers.ArgsCreateTeam,
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
		}
	}
};
