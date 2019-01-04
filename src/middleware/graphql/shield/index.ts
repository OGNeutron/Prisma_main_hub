import { rule, shield } from 'graphql-shield'
import { Context } from '../../../tstypes'

const isAuthenticated = rule()(
	async (_: any, __: any, { session }: Context, ___: any) => !!session.userId
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
		friendReject: isAuthenticated
	}
})
