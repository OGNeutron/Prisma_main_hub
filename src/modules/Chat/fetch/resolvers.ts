import { logger } from '../../../utils/logger';
import { QueryResolvers } from '../../../generated/graphqlgen';
import { Context } from '../../../tstypes';

export const resolvers = {
	Query: {
		async showChannel(
			_: any,
			{ channelId }: QueryResolvers.ArgsShowChannel,
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
			{ authorId }: QueryResolvers.ArgsShowTeams,
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
			{ teamSlug }: QueryResolvers.ArgsShowTeam,
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
	}
};
