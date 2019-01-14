import { rule, shield, and } from 'graphql-shield'
import { Context } from '../../../tstypes'
import { logger } from '../../../utils/logger'

const isAuthenticated = rule()(
	async (_: any, __: any, { session }: Context, ___: any) => !!session.userId
)

const isTeamAdmin = rule()(
	async (_: any, { teamId }: any, { db, session }: Context) => {
		try {
			const admin = await db.team({ id: teamId }).author()

			if (session.userId === admin.id) {
				return true
			} else {
				return false
			}
		} catch (error) {
			logger.error({ level: 5, message: error })
			return false
		}
	}
)

export const ShieldMiddleware = shield({
	Query: {
		// currentUser: isAuthenticated,
		getProfile: isAuthenticated,
		showTeam: isAuthenticated,
		showTeams: isAuthenticated,
		showChannel: isAuthenticated,
		queryComment: isAuthenticated
	},
	Mutation: {
		createMessage: isAuthenticated,
		createChannel: isAuthenticated,
		createTeam: isAuthenticated,
		addTeamMember: isAuthenticated,
		addChannelMember: isAuthenticated,
		createChannelMember: isAuthenticated,
		deleteComment: isAuthenticated,
		editComment: isAuthenticated,
		createComment: isAuthenticated,
		createReply: isAuthenticated,
		likeComment: isAuthenticated,
		addFriend: isAuthenticated,
		friendReject: isAuthenticated,
		removeTeamMember: and(isAuthenticated, isTeamAdmin)
	}
})
