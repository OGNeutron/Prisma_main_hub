import { ApolloError, ForbiddenError } from 'apollo-server-express'
import { INVALID_CREDENTIALS } from '../../../constants'
import { logger } from '../../../utils/logger'
import { MutationResolvers } from '../../../generated/graphqlgen'
import { Context } from '../../../tstypes'

export const resolvers = {
	Mutation: {
		async createReply(
			_: any,
			{
				// pageId,
				body,
				parentId,
				repliedTo
			}: MutationResolvers.ArgsCreateReply,
			{ db, session }: Context
		) {
			try {
				if (session.userId || session.decodedUser) {
					const userID = session.userId
					let comment: any
					if (body) {
						comment = await db.createComment({
							body,
							parentId,
							pageId: '',
							repliedTo: {
								connect: {
									id: repliedTo || ''
								}
							},
							ratings: {
								create: {
									vote: 0
								}
							},
							author: {
								connect: {
									id: userID
								}
							}
						})
					}

					if (comment) {
						await db.updateComment({
							where: {
								id: parentId
							},
							data: {
								replies: {
									connect: {
										id: comment.id
									}
								}
							}
						})
					}

					return comment
				}

				return new ForbiddenError(INVALID_CREDENTIALS)
			} catch (error) {
				return logger.error({ level: '5', message: error })
			}
		},
		async createComment(
			_: any,
			{ pageId, body, parentId }: MutationResolvers.ArgsCreateComment,
			{ db, session }: Context
		) {
			try {
				if (session.userId || session.decodedUser) {
					const userID: string | undefined = session.userId

					if (body) {
						const comment = await db.createComment({
							body,
							parentId,
							pageId,
							ratings: {
								create: {
									vote: 0
								}
							},
							author: {
								connect: {
									id: userID
								}
							}
						})

						console.log('COMMENT', comment)
						return comment
					} else {
						return new ApolloError('Comment body required')
					}
				} else {
					return new ForbiddenError(INVALID_CREDENTIALS)
				}
			} catch (error) {
				return logger.error({ level: '5', message: error })
			}
		}
	}
}
