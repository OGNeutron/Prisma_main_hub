import { Context } from '../../tstypes'
import { logger } from '../../utils/logger'
import { ApolloError, AuthenticationError } from 'apollo-server'
import { MutationResolvers } from '../../generated/graphqlgen'
import { INVALID_CREDENTIALS } from '../../constants'

export const resolvers = {
	Query: {
		async fetchTodos(_: any, __: any, { session, db }: Context) {
			try {
				return db.todoesConnection({
					where: {
						author: {
							id: session.userId
						}
					}
				})
			} catch (error) {
				logger.error({ level: 5, message: error })
				return new ApolloError(error)
			}
		}
	},
	Mutation: {
		async createTodoProject(_: any, args: any, { db, session }: Context) {
			try {
				return db.createTodoProject({
					...args,
					author: {
						connect: {
							id: session.id
						}
					}
				})
			} catch (error) {
				logger.error({ level: 5, message: error })
				return new ApolloError(error)
			}
		},
		async createTodo(
			_: any,
			args: MutationResolvers.ArgsCreateTodo,
			{ session, db }: Context
		) {
			try {
				const todo = await db.createTodo({
					...args,
					author: {
						connect: {
							id: session.userId
						}
					}
				})

				return todo
			} catch (error) {
				logger.error({ level: 5, message: error })
				return new ApolloError(error)
			}
		},
		async editTodo(_: any, args: any, { db, session }: Context) {
			try {
				const todoAuthor = await db
					.todo({
						id: args.id
					})
					.author()

				if (todoAuthor.id === session.id) {
					return db.updateTodo({
						where: {
							id: args.id
						},
						data: {
							...args
						}
					})
				} else {
					return new AuthenticationError(INVALID_CREDENTIALS)
				}
			} catch (error) {
				logger.error({ level: 5, message: error })
				return new ApolloError(error)
			}
		},
		async deleteTodo(_: any, args: any, { db, session }: Context) {
			try {
				const todoAuthor = await db
					.todo({
						id: args.id
					})
					.author()

				if (todoAuthor.id === session.id) {
					return db.deleteTodo({
						id: args.id
					})
				} else {
					return new AuthenticationError(INVALID_CREDENTIALS)
				}
			} catch (error) {
				logger.error({ level: 5, message: error })
				return new ApolloError(error)
			}
		}
	}
}
