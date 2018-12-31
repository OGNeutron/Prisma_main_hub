import { Context } from '../../../tstypes'
import { logger } from '../../../utils/logger'

const functions = {
	blockedUsers(parent: any, _: any, { db }: Context) {
		try {
			return db.user({ id: parent.id }).blockedUsers()
		} catch (error) {
			logger.error({ level: '5', message: error })
			return error
		}
	},

	avatar_url(parent: any, _: any, { db }: Context) {
		try {
			return db.user({ id: parent.id }).avatar_url()
		} catch (error) {
			logger.error({ level: '5', message: error })
			return error
		}
	},
	friend_requests(parent: any, _: any, { db }: Context) {
		try {
			return db.user({ id: parent.id }).friend_requests()
		} catch (error) {
			logger.error({ level: '5', message: error })
			return error
		}
	},
	friends(parent: any, _: any, { db }: Context) {
		try {
			return db.user({ id: parent.id }).friends()
		} catch (error) {
			logger.error({ level: '5', message: error })
			return error
		}
	},
	notifications(parent: any, _: any, { db }: Context) {
		try {
			return db.user({ id: parent.id }).notifications()
		} catch (error) {
			logger.error({ level: '5', message: error })
			return error
		}
	},
	teams(parent: any, _: any, { db }: Context) {
		try {
			return db.user({ id: parent.id }).teams()
		} catch (error) {
			logger.error({ level: '5', message: error })
			return error
		}
	},
	channels(parent: any, _: any, { db }: Context) {
		try {
			return db.user({ id: parent.id }).channels()
		} catch (error) {
			logger.error({ level: '5', message: error })
			return error
		}
	}
}

export const resolvers = {
	MyUser: {
		...functions
	},
	User: {
		...functions
	}
}
