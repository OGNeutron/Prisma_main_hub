import { logger } from '../../../utils/logger'
import { Context } from '../../../tstypes'

export const resolvers = {
	Message: {
		author(parent: any, _: any, { db }: Context) {
			try {
				return db.message({ id: parent.id })['author']()
			} catch (error) {
				return logger.error({ level: '5', message: error.message })
			}
		}
	},
	Channel: {
		author(parent: any, _: any, { db }: Context) {
			try {
				return db.channel({ id: parent.id })['author']()
			} catch (error) {
				return logger.error({ level: '5', message: error.message })
			}
		},
		messages(parent: any, _: any, { db }: Context) {
			try {
				return db
					.channel({ id: parent.id })
					.messages({ orderBy: 'createdAt_DESC' })
			} catch (error) {
				return logger.error({ level: '5', message: error.message })
			}
		},
		members(parent: any, _: any, { db }: Context) {
			try {
				return db.channel({ id: parent.id }).members()
			} catch (error) {
				return logger.error({ level: '5', message: error.message })
			}
		}
	},
	Team: {
		channels(parent: any, _: any, { db }: Context) {
			try {
				return db.team({ id: parent.id })['channels']()
			} catch (error) {
				return logger.error({ level: '5', message: error.message })
			}
		},
		author(parent: any, _: any, { db }: Context) {
			try {
				console.log('author')
				return db.team({ id: parent.id })['author']()
			} catch (error) {
				return logger.error({ level: '5', message: error.message })
			}
		},
		members(parent: any, _: any, { db }: Context) {
			try {
				return db.team({ id: parent.id })['members']()
			} catch (error) {
				return logger.error({ level: '5', message: error.message })
			}
		},
		moderators(parent: any, _: any, { db }: Context) {
			try {
				return db.team({ id: parent.id })['moderators']()
			} catch (error) {
				return logger.error({ level: '5', message: error.message })
			}
		}
	}
}
