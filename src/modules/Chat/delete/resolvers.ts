import { ForbiddenError } from 'apollo-server-express'

import { MutationResolvers } from '../../../generated/graphqlgen'
import { Context } from '../../../tstypes'
import { logger } from '../../../utils/logger'
import { INVALID_CREDENTIALS } from '../../../constants'

export const resolvers = {
	Mutation: {
		async removeChannelMember(
			_: any,
			{ userId, channelId }: MutationResolvers.ArgsRemoveChannelMember,
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

				console.log('CHANNEL', channel)

				if (channel != undefined) {
					if (
						author.id === session.userId ||
						userId === session.userId
					) {
						return await db.updateChannel({
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
						})
					} else {
						logger.error({
							level: '3',
							message: INVALID_CREDENTIALS
						})
						throw new ForbiddenError(INVALID_CREDENTIALS)
					}
				} else {
					logger.error({
						level: '3',
						message: 'Channel not found'
					})
					throw new ForbiddenError(INVALID_CREDENTIALS)
				}
			} catch (error) {
				return logger.error({ level: '5', message: error.message })
			}
		}
	}
}
