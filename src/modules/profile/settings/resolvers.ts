import { Context } from '../../../tstypes'
import { logger } from '../../../utils/logger'
import { ApolloError } from 'apollo-server'
import { MutationResolvers } from '../../../generated/graphqlgen'

export const resolvers = {
	Mutation: {
		blockUser(
			_: any,
			{ id }: MutationResolvers.ArgsBlockUser,
			{ db, session }: Context
		) {
			try {
				return db.updateUser({
					where: {
						id: session.userId
					},
					data: {
						blockedUsers: {
							connect: {
								id
							}
						}
					}
				})
			} catch (error) {
				logger.error({ level: '5', message: error.message })
				throw new ApolloError(error)
			}
		},
		unblockUser(
			_: any,
			{ id }: MutationResolvers.ArgsUnblockUser,
			{ db, session }: Context
		) {
			try {
				console.log('ID', id)
				return db.updateUser({
					where: {
						id: session.userId
					},
					data: {
						blockedUsers: {
							disconnect: {
								id
							}
						}
					}
				})
			} catch (error) {
				logger.error({ level: '5', message: error.message })
				throw new ApolloError(error)
			}
		},
		setProfilePrivacy(
			_: any,
			{ bool }: MutationResolvers.ArgsSetProfilePrivacy,
			{ db, session }: Context
		) {
			try {
				return db.updateUser({
					where: {
						id: session.userId
					},
					data: {
						private: bool
					}
				})
			} catch (error) {
				logger.error({ level: '5', message: error.message })
				throw new ApolloError(error)
			}
		}
	}
}
