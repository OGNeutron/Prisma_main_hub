import { Context } from '../../../tstypes'
import { logger } from '../../../utils/logger'

export const resolvers = {
	Rating: {
		author(parent: any, _: any, { db }: Context) {
			try {
				return db.rating({ id: parent.id }).author()
			} catch (error) {
				return logger.error({ level: '5', message: error })
			}
		}
	},
	Comment: {
		author(parent: any, _: any, { db }: Context) {
			try {
				return db.comment({ id: parent.id }).author()
			} catch (error) {
				return logger.error({ level: '5', message: error })
			}
		},
		async ratings(parent: any, _: any, { db }: Context) {
			try {
				const comment = await db.comment({ id: parent.id }).ratings()
				console.log('RATINGS', comment)

				return comment
			} catch (error) {
				return logger.error({ level: '5', message: error })
			}
		},
		replies(parent: any, _: any, { db }: Context) {
			try {
				return db.comment({ id: parent.id }).replies()
			} catch (error) {
				return logger.error({ level: '5', message: error })
			}
		},
		repliedTo(parent: any, _: any, { db }: Context) {
			try {
				return db.comment({ id: parent.id }).repliedTo()
			} catch (error) {
				return logger.error({ level: '5', message: error })
			}
		}
	}
}
