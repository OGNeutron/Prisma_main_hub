import { sluggify } from 'scotts_utilities'
import * as shortid from 'shortid'
import { ForbiddenError } from 'apollo-server-express'

import { logger } from '../../../utils/logger'
import { MutationResolvers } from '../../../generated/graphqlgen'
import { Context } from '../../../tstypes'
import { INVALID_CREDENTIALS } from '../../../constants'

export const resolvers = {
	Mutation: {
		async createMessage(
			_: any,
			{ body, channelId }: MutationResolvers.ArgsCreateMessage,
			{ db, session }: Context
		) {
			const newMessage = await db.createMessage({
				body,
				parentId: channelId,
				url: '',
				filetype: '',
				author: {
					connect: {
						id: session.userId
					}
				}
			})

			await db.updateChannel({
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
			})

			return newMessage
		},
		async createChannel(
			_: any,
			{ name, teamId }: MutationResolvers.ArgsCreateChannel,
			{ db, session }: Context
		) {
			try {
				if (!teamId) {
					throw new ForbiddenError(INVALID_CREDENTIALS)
				}

				const channel = await db.createChannel({
					name,
					slug: `${sluggify(name)}-${shortid()}`,
					author: {
						connect: {
							id: session.userId
						}
					}
				})

				await db.updateTeam({
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
				})

				return channel
			} catch (error) {
				return logger.error({ level: '5', message: error.message })
			}
		},
		async createTeam(
			_: any,
			{ name }: MutationResolvers.ArgsCreateTeam,
			{ db, session }: Context
		) {
			try {
				return await db.createTeam({
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
				})
			} catch (error) {
				return logger.error({ level: '5', message: error.message })
			}
		}
	}
}
