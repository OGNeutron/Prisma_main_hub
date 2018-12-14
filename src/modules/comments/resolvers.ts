import { ForbiddenError, ApolloError } from 'apollo-server';

import { Context } from '../../tstypes';
import { logger } from '../../utils/logger';
import { INVALID_CREDENTIALS } from '../../constants';
import { Comment } from '../../generated/prisma';
import { QueryResolvers, MutationResolvers } from '../../generated/graphqlgen';

export const resolvers = {
	Query: {
		async queryComment(
			_: any,
			{ parentId }: QueryResolvers.ArgsQueryComment,
			{ db }: Context,
			info: any
		) {
			try {
				const comments: Comment[] = await db.query.comments(
					{
						where: {
							parentId
						},
						orderBy: 'createdAt_DESC'
					},
					info
				);

				return comments;
			} catch (error) {
				return logger.error({ level: '5', message: error });
			}
		}
	},
	Mutation: {
		async deleteComment(
			_: any,
			{ id }: MutationResolvers.ArgsDeleteComment,
			{ db, session }: Context,
			info: any
		) {
			try {
				const comment: Comment | null = await db.query.comment(
					{
						where: {
							id
						}
					},
					info
				);

				console.log('COMMENT', comment);

				if (!comment) {
					return new ApolloError(INVALID_CREDENTIALS);
				}

				if (comment.author.id !== session.userId) {
					return new ForbiddenError(INVALID_CREDENTIALS);
				}

				await db.mutation.deleteComment({
					where: {
						id: comment.id
					}
				});

				return comment;
			} catch (error) {
				return logger.error({ level: '5', message: error });
			}
		},
		async editComment(
			_: any,
			{ id, body }: MutationResolvers.ArgsEditComment,
			{ db, session }: Context,
			info: any
		) {
			try {
				const comment: Comment | null = await db.query.comment(
					{
						where: {
							id
						}
					},
					info
				);

				if (!comment) {
					return new ApolloError(INVALID_CREDENTIALS);
				}

				if (comment.author.id !== session.userId) {
					return new ForbiddenError(INVALID_CREDENTIALS);
				}

				return await db.mutation.updateComment(
					{
						where: {
							id: comment.id
						},
						data: {
							body
						}
					},
					info
				);
			} catch (error) {
				return logger.error({ level: '5', message: error });
			}
		},
		async likeComment(
			_: any,
			{ commentId }: MutationResolvers.ArgsLikeComment,
			{ db, session }: Context,
			info: any
		) {
			try {
				if (session.userId || session.decodedUser) {
					const userID = session.userId;

					const comment: any = await db.query.comment(
						{
							where: {
								id: commentId
							}
						},
						info
					);

					if (comment) {
						if (comment.ratings) {
							console.log('COMMENT', comment);

							const found = comment.ratings.author.find(
								(author: any) => author.id === userID
							);

							console.log('FOUND', found);

							if (found === undefined) {
								return await db.mutation.updateComment(
									{
										data: {
											ratings: {
												update: {
													vote:
														comment.ratings.vote +
														1,
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
									},
									info
								);
							}
						} else {
							return new ApolloError('No comment author');
						}
					} else {
						return new ApolloError('No such comment');
					}
					return comment;
				} else {
					return new ForbiddenError(INVALID_CREDENTIALS);
				}
			} catch (error) {
				return logger.error({ level: '5', message: error });
			}
		},
		async createReply(
			_: any,
			{
				pageId,
				body,
				parentId,
				repliedTo
			}: MutationResolvers.ArgsCreateReply,
			{ db, session }: Context,
			info: any
		) {
			try {
				if (session.userId || session.decodedUser) {
					const userID = session.userId;
					let comment: any;
					if (body) {
						comment = await db.mutation.createComment(
							{
								data: {
									body,
									parentId,
									pageId,
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
								}
							},
							info
						);
					}

					if (comment) {
						await db.mutation.updateComment({
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
						});
					}

					return comment;
				}

				return new ForbiddenError(INVALID_CREDENTIALS);
			} catch (error) {
				return logger.error({ level: '5', message: error });
			}
		},
		async createComment(
			_: any,
			{ pageId, body, parentId }: MutationResolvers.ArgsCreateComment,
			{ db, session }: Context,
			info: any
		) {
			try {
				if (session.userId || session.decodedUser) {
					const userID: string | undefined = session.userId;

					if (body) {
						const comment: Comment = await db.mutation.createComment(
							{
								data: {
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
								}
							},
							info
						);
						return comment;
					} else {
						return new ApolloError('Comment body required');
					}
				} else {
					return new ForbiddenError(INVALID_CREDENTIALS);
				}
			} catch (error) {
				return logger.error({ level: '5', message: error });
			}
		}
	}
};
