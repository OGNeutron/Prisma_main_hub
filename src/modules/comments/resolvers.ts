import { ForbiddenError, ApolloError } from 'apollo-server'

import { Context } from '../../tstypes'
import { logger } from '../../utils/logger'
import { INVALID_CREDENTIALS } from '../../constants'
import { QueryResolvers, MutationResolvers } from '../../generated/graphqlgen'

export const resolvers = {
	Query: {
		async queryComment(
			_: any,
			{ parentId, offset, limit }: QueryResolvers.ArgsQueryComment,
			{ db }: Context
		) {
			try {
				return await db.commentsConnection({
					where: {
						pageId: parentId
					},
					skip: offset || 0,
					first: limit || undefined,
					orderBy: 'createdAt_DESC'
				})
			} catch (error) {
				return logger.error({ level: '5', message: error })
			}
		}
	},
	Mutation: {
		async deleteComment(
			_: any,
			{ id }: MutationResolvers.ArgsDeleteComment,
			{ db, session }: Context
		) {
			try {
				const comment = await db.comment({
					id
				})

				const author = await db
					.comment({
						id
					})
					.author()

				console.log('COMMENT', comment)

				if (!comment) {
					return new ApolloError(INVALID_CREDENTIALS)
				}

				if (author.id !== session.userId) {
					return new ForbiddenError(INVALID_CREDENTIALS)
				}

				await db.deleteComment({
					id: comment.id
				})


				return comment
			} catch (error) {
				return logger.error({ level: '5', message: error })
			}
		},
		async editComment(
			_: any,
			{ id, body }: MutationResolvers.ArgsEditComment,
			{ db, session }: Context
		) {
			try {
				const comment = await db.comment({
					id
				})

				const author = await db
					.comment({
						id
					})
					.author()

				if (!comment) {
					return new ApolloError(INVALID_CREDENTIALS)
				}

				if (author.id !== session.userId) {
					return new ForbiddenError(INVALID_CREDENTIALS)
				}

				return await db.updateComment({
					where: {
						id: comment.id
					},
					data: {
						body
					}
				})
			} catch (error) {
				return logger.error({ level: '5', message: error })
			}
		},
		async likeComment(
			_: any,
			{ commentId }: MutationResolvers.ArgsLikeComment,
			{ db, session }: Context
		) {
			try {
				if (session.userId || session.decodedUser) {
					const userID = session.userId

					const comment: any = await db.comment({
						id: commentId
					})

					if (comment) {
						const ratings = await db
							.comment({ id: commentId })
							.ratings()

						if (ratings) {
							const rating = await db
								.rating({ id: ratings.id })
								.author()

							const found = rating.find(
								(author: any) => author.id === userID
							)

							if (found === undefined) {
								return await db.updateComment({
									data: {
										ratings: {
											update: {
												vote: ratings.vote + 1,
												author: {
													connect: {
														id: userID
													}
												}
											}
										}
									},
									where: {
										id: comment.id
									}
								})
							}
						} else {
							return new ApolloError('No comment author')
						}
					} else {
						return new ApolloError('No such comment')
					}
					return comment
				} else {
					return new ForbiddenError(INVALID_CREDENTIALS)
				}
			} catch (error) {
				return logger.error({ level: '5', message: error })
			}
		},
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
