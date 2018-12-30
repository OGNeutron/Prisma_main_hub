import { ForbiddenError, ApolloError } from 'apollo-server'

import { Context } from '../../tstypes'
import { logger } from '../../utils/logger'
import { INVALID_CREDENTIALS } from '../../constants'
import {
	MutationResolvers,
	SubscriptionResolvers
} from '../../generated/graphqlgen'

export const resolvers = {
	Subscription: {
		messageSubscription: {
			subscribe(
				_: any,
				{ channelId }: SubscriptionResolvers.ArgsMessageSubscription,
				{ db }: Context
			) {
				try {
					console.log('MESSAGE SUBSCRIPTION')
					return db.$subscribe
						.message({
							mutation_in: ['CREATED'],
							node: {
								parentId: channelId
							}
						})
						.node()
				} catch (err) {
					console.log(err)
					return err
				}
			},
			resolve: (payload: any) => {
				console.log('payload', payload)

				return payload
			}
		}
	},

	Mutation: {
		async addTeamMember(
			_: any,
			{ userId, teamId }: MutationResolvers.ArgsAddTeamMember,
			{ db, session }: Context
		) {
			console.log('USERID', userId)
			console.log('TEAMID', teamId)
			try {
				const team = await db.team({
					id: teamId
				})

				const author = await db
					.team({
						id: teamId
					})
					.author()

				if (team && author.id !== session.userId) {
					throw new ForbiddenError(INVALID_CREDENTIALS)
				}

				const user = await db.user({
					id: userId
				})

				console.log('TEAM', team)
				console.log('USER', user)

				if (user && team) {
					return await db.updateTeam({
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
					})
				} else {
					return new ApolloError('Error: Unable to perform action')
				}
			} catch (error) {
				return logger.error({ level: '5', message: error.message })
			}
		},
		async addChannelMember(
			_: any,
			{ userId, channelId }: MutationResolvers.ArgsAddChannelMember,
			{ db, session }: Context
		) {
			console.log('USERID', userId)
			console.log('CHANNELID', channelId)

			try {
				const channel = await db.channel({
					id: channelId
				})

				const author = await db
					.channel({
						id: channelId
					})
					.author()

				if (channel && author.id === session.userId) {
					const user = await db.user({
						id: userId
					})

					if (user) {
						return await db.updateChannel({
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
						})
					} else {
						throw new ApolloError('Error: no such member')
					}
				} else {
					throw new ForbiddenError(INVALID_CREDENTIALS)
				}
			} catch (error) {
				return logger.error({ level: '5', message: error.message })
			}
		}
	}
}
