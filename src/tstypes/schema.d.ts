// tslint:disable
// graphql typescript definitions

export namespace GQL {
	interface IGraphQLResponseRoot {
		data?: IQuery | IMutation | ISubscription
		errors?: Array<IGraphQLResponseError>
	}

	interface IGraphQLResponseError {
		/** Required for all errors */
		message: string
		locations?: Array<IGraphQLResponseErrorLocation>
		/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
		[propName: string]: any
	}

	interface IGraphQLResponseErrorLocation {
		line: number
		column: number
	}

	interface IQuery {
		__typename: 'Query'
		currentUser: IUser | null
		getProfile: IUser
		queryComment: Array<IComment>
		queryUsers: Array<IUser>
		showTeam: ITeam
		showTeams: Array<ITeam>
		showChannel: IChannel
	}

	interface IGetProfileOnQueryArguments {
		username: string
	}

	interface IQueryCommentOnQueryArguments {
		parentId: string
	}

	interface IShowTeamOnQueryArguments {
		teamSlug: string
	}

	interface IShowTeamsOnQueryArguments {
		authorId: string
	}

	interface IShowChannelOnQueryArguments {
		channelId: string
	}

	interface IUser {
		__typename: 'User'
		id: string
		email: string
		notifications: Array<INotification>
		set_private: boolean
		username: string
		password: string
		avatar_url: IFile
		confirmed: boolean
		online: boolean
		friends: Array<IUser>
		friend_requests: Array<IUser>
		createdAt: any
		updatedAt: any
		role: UserRole
		teams: Array<ITeam>
		channels: Array<IChannel>
		owned_teams: Array<ITeam>
		owned_channels: Array<IChannel>
	}

	interface INotificationsOnUserArguments {
		where?: INotificationWhereInput | null
		orderBy?: NotificationOrderByInput | null
		skip?: number | null
		after?: string | null
		before?: string | null
		first?: number | null
		last?: number | null
	}

	interface IAvatarUrlOnUserArguments {
		where?: IFileWhereInput | null
	}

	interface IFriendsOnUserArguments {
		where?: IUserWhereInput | null
		orderBy?: UserOrderByInput | null
		skip?: number | null
		after?: string | null
		before?: string | null
		first?: number | null
		last?: number | null
	}

	interface IFriendRequestsOnUserArguments {
		where?: IUserWhereInput | null
		orderBy?: UserOrderByInput | null
		skip?: number | null
		after?: string | null
		before?: string | null
		first?: number | null
		last?: number | null
	}

	interface ITeamsOnUserArguments {
		where?: ITeamWhereInput | null
		orderBy?: TeamOrderByInput | null
		skip?: number | null
		after?: string | null
		before?: string | null
		first?: number | null
		last?: number | null
	}

	interface IChannelsOnUserArguments {
		where?: IChannelWhereInput | null
		orderBy?: ChannelOrderByInput | null
		skip?: number | null
		after?: string | null
		before?: string | null
		first?: number | null
		last?: number | null
	}

	interface IOwnedTeamsOnUserArguments {
		where?: ITeamWhereInput | null
		orderBy?: TeamOrderByInput | null
		skip?: number | null
		after?: string | null
		before?: string | null
		first?: number | null
		last?: number | null
	}

	interface IOwnedChannelsOnUserArguments {
		where?: IChannelWhereInput | null
		orderBy?: ChannelOrderByInput | null
		skip?: number | null
		after?: string | null
		before?: string | null
		first?: number | null
		last?: number | null
	}

	/**
	 * An object with an ID
	 */
	type Node =
		| IUser
		| INotification
		| IFile
		| ITeam
		| IChannel
		| IMessage
		| IComment
		| IRating

	/**
	 * An object with an ID
	 */
	interface INode {
		__typename: 'Node'

		/**
		 * The id of the object.
		 */
		id: string
	}

	interface INotificationWhereInput {
		/**
		 * Logical AND on all given filters.
		 */
		AND: Array<INotificationWhereInput>

		/**
		 * Logical OR on all given filters.
		 */
		OR: Array<INotificationWhereInput>

		/**
		 * Logical NOT on all given filters combined by AND.
		 */
		NOT: Array<INotificationWhereInput>
		id?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		id_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		id_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		id_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		id_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		id_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		id_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		id_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		id_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		id_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		id_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		id_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		id_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		id_not_ends_with?: string | null
		message?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		message_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		message_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		message_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		message_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		message_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		message_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		message_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		message_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		message_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		message_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		message_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		message_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		message_not_ends_with?: string | null
		author?: IUserWhereInput | null
	}

	interface IUserWhereInput {
		/**
		 * Logical AND on all given filters.
		 */
		AND: Array<IUserWhereInput>

		/**
		 * Logical OR on all given filters.
		 */
		OR: Array<IUserWhereInput>

		/**
		 * Logical NOT on all given filters combined by AND.
		 */
		NOT: Array<IUserWhereInput>
		id?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		id_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		id_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		id_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		id_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		id_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		id_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		id_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		id_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		id_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		id_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		id_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		id_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		id_not_ends_with?: string | null
		email?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		email_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		email_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		email_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		email_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		email_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		email_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		email_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		email_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		email_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		email_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		email_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		email_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		email_not_ends_with?: string | null
		set_private?: boolean | null

		/**
		 * All values that are not equal to given value.
		 */
		set_private_not?: boolean | null
		username?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		username_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		username_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		username_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		username_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		username_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		username_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		username_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		username_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		username_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		username_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		username_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		username_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		username_not_ends_with?: string | null
		password?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		password_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		password_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		password_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		password_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		password_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		password_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		password_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		password_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		password_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		password_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		password_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		password_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		password_not_ends_with?: string | null
		confirmed?: boolean | null

		/**
		 * All values that are not equal to given value.
		 */
		confirmed_not?: boolean | null
		online?: boolean | null

		/**
		 * All values that are not equal to given value.
		 */
		online_not?: boolean | null
		createdAt?: any | null

		/**
		 * All values that are not equal to given value.
		 */
		createdAt_not?: any | null

		/**
		 * All values that are contained in given list.
		 */
		createdAt_in: Array<any>

		/**
		 * All values that are not contained in given list.
		 */
		createdAt_not_in: Array<any>

		/**
		 * All values less than the given value.
		 */
		createdAt_lt?: any | null

		/**
		 * All values less than or equal the given value.
		 */
		createdAt_lte?: any | null

		/**
		 * All values greater than the given value.
		 */
		createdAt_gt?: any | null

		/**
		 * All values greater than or equal the given value.
		 */
		createdAt_gte?: any | null
		updatedAt?: any | null

		/**
		 * All values that are not equal to given value.
		 */
		updatedAt_not?: any | null

		/**
		 * All values that are contained in given list.
		 */
		updatedAt_in: Array<any>

		/**
		 * All values that are not contained in given list.
		 */
		updatedAt_not_in: Array<any>

		/**
		 * All values less than the given value.
		 */
		updatedAt_lt?: any | null

		/**
		 * All values less than or equal the given value.
		 */
		updatedAt_lte?: any | null

		/**
		 * All values greater than the given value.
		 */
		updatedAt_gt?: any | null

		/**
		 * All values greater than or equal the given value.
		 */
		updatedAt_gte?: any | null
		role?: UserRole | null

		/**
		 * All values that are not equal to given value.
		 */
		role_not?: UserRole | null

		/**
		 * All values that are contained in given list.
		 */
		role_in: Array<UserRole>

		/**
		 * All values that are not contained in given list.
		 */
		role_not_in: Array<UserRole>
		notifications_every?: INotificationWhereInput | null
		notifications_some?: INotificationWhereInput | null
		notifications_none?: INotificationWhereInput | null
		avatar_url?: IFileWhereInput | null
		friends_every?: IUserWhereInput | null
		friends_some?: IUserWhereInput | null
		friends_none?: IUserWhereInput | null
		friend_requests_every?: IUserWhereInput | null
		friend_requests_some?: IUserWhereInput | null
		friend_requests_none?: IUserWhereInput | null
		teams_every?: ITeamWhereInput | null
		teams_some?: ITeamWhereInput | null
		teams_none?: ITeamWhereInput | null
		channels_every?: IChannelWhereInput | null
		channels_some?: IChannelWhereInput | null
		channels_none?: IChannelWhereInput | null
		owned_teams_every?: ITeamWhereInput | null
		owned_teams_some?: ITeamWhereInput | null
		owned_teams_none?: ITeamWhereInput | null
		owned_channels_every?: IChannelWhereInput | null
		owned_channels_some?: IChannelWhereInput | null
		owned_channels_none?: IChannelWhereInput | null
		_MagicalBackRelation_MessageToUser_every?: IMessageWhereInput | null
		_MagicalBackRelation_MessageToUser_some?: IMessageWhereInput | null
		_MagicalBackRelation_MessageToUser_none?: IMessageWhereInput | null
		_MagicalBackRelation_TeamModerators_every?: ITeamWhereInput | null
		_MagicalBackRelation_TeamModerators_some?: ITeamWhereInput | null
		_MagicalBackRelation_TeamModerators_none?: ITeamWhereInput | null
		_MagicalBackRelation_RepliedTo_every?: ICommentWhereInput | null
		_MagicalBackRelation_RepliedTo_some?: ICommentWhereInput | null
		_MagicalBackRelation_RepliedTo_none?: ICommentWhereInput | null
		_MagicalBackRelation_UserFriends_every?: IUserWhereInput | null
		_MagicalBackRelation_UserFriends_some?: IUserWhereInput | null
		_MagicalBackRelation_UserFriends_none?: IUserWhereInput | null
		_MagicalBackRelation_RatingToUser_every?: IRatingWhereInput | null
		_MagicalBackRelation_RatingToUser_some?: IRatingWhereInput | null
		_MagicalBackRelation_RatingToUser_none?: IRatingWhereInput | null
		_MagicalBackRelation_UserFriendRequests_every?: IUserWhereInput | null
		_MagicalBackRelation_UserFriendRequests_some?: IUserWhereInput | null
		_MagicalBackRelation_UserFriendRequests_none?: IUserWhereInput | null
		_MagicalBackRelation_ChannelModerators_every?: IChannelWhereInput | null
		_MagicalBackRelation_ChannelModerators_some?: IChannelWhereInput | null
		_MagicalBackRelation_ChannelModerators_none?: IChannelWhereInput | null
		_MagicalBackRelation_CommentUser_every?: ICommentWhereInput | null
		_MagicalBackRelation_CommentUser_some?: ICommentWhereInput | null
		_MagicalBackRelation_CommentUser_none?: ICommentWhereInput | null
	}

	const enum UserRole {
		ADMIN = 'ADMIN',
		MODERATOR = 'MODERATOR',
		USER = 'USER'
	}

	interface IFileWhereInput {
		/**
		 * Logical AND on all given filters.
		 */
		AND: Array<IFileWhereInput>

		/**
		 * Logical OR on all given filters.
		 */
		OR: Array<IFileWhereInput>

		/**
		 * Logical NOT on all given filters combined by AND.
		 */
		NOT: Array<IFileWhereInput>
		id?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		id_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		id_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		id_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		id_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		id_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		id_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		id_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		id_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		id_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		id_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		id_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		id_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		id_not_ends_with?: string | null
		createdAt?: any | null

		/**
		 * All values that are not equal to given value.
		 */
		createdAt_not?: any | null

		/**
		 * All values that are contained in given list.
		 */
		createdAt_in: Array<any>

		/**
		 * All values that are not contained in given list.
		 */
		createdAt_not_in: Array<any>

		/**
		 * All values less than the given value.
		 */
		createdAt_lt?: any | null

		/**
		 * All values less than or equal the given value.
		 */
		createdAt_lte?: any | null

		/**
		 * All values greater than the given value.
		 */
		createdAt_gt?: any | null

		/**
		 * All values greater than or equal the given value.
		 */
		createdAt_gte?: any | null
		updatedAt?: any | null

		/**
		 * All values that are not equal to given value.
		 */
		updatedAt_not?: any | null

		/**
		 * All values that are contained in given list.
		 */
		updatedAt_in: Array<any>

		/**
		 * All values that are not contained in given list.
		 */
		updatedAt_not_in: Array<any>

		/**
		 * All values less than the given value.
		 */
		updatedAt_lt?: any | null

		/**
		 * All values less than or equal the given value.
		 */
		updatedAt_lte?: any | null

		/**
		 * All values greater than the given value.
		 */
		updatedAt_gt?: any | null

		/**
		 * All values greater than or equal the given value.
		 */
		updatedAt_gte?: any | null
		filename?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		filename_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		filename_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		filename_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		filename_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		filename_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		filename_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		filename_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		filename_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		filename_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		filename_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		filename_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		filename_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		filename_not_ends_with?: string | null
		mimetype?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		mimetype_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		mimetype_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		mimetype_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		mimetype_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		mimetype_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		mimetype_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		mimetype_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		mimetype_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		mimetype_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		mimetype_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		mimetype_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		mimetype_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		mimetype_not_ends_with?: string | null
		encoding?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		encoding_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		encoding_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		encoding_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		encoding_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		encoding_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		encoding_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		encoding_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		encoding_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		encoding_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		encoding_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		encoding_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		encoding_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		encoding_not_ends_with?: string | null
		key?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		key_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		key_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		key_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		key_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		key_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		key_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		key_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		key_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		key_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		key_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		key_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		key_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		key_not_ends_with?: string | null
		ETag?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		ETag_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		ETag_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		ETag_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		ETag_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		ETag_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		ETag_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		ETag_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		ETag_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		ETag_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		ETag_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		ETag_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		ETag_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		ETag_not_ends_with?: string | null
		url?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		url_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		url_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		url_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		url_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		url_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		url_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		url_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		url_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		url_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		url_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		url_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		url_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		url_not_ends_with?: string | null
		_MagicalBackRelation_FileToUser_every?: IUserWhereInput | null
		_MagicalBackRelation_FileToUser_some?: IUserWhereInput | null
		_MagicalBackRelation_FileToUser_none?: IUserWhereInput | null
	}

	interface ITeamWhereInput {
		/**
		 * Logical AND on all given filters.
		 */
		AND: Array<ITeamWhereInput>

		/**
		 * Logical OR on all given filters.
		 */
		OR: Array<ITeamWhereInput>

		/**
		 * Logical NOT on all given filters combined by AND.
		 */
		NOT: Array<ITeamWhereInput>
		id?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		id_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		id_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		id_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		id_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		id_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		id_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		id_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		id_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		id_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		id_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		id_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		id_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		id_not_ends_with?: string | null
		name?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		name_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		name_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		name_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		name_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		name_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		name_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		name_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		name_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		name_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		name_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		name_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		name_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		name_not_ends_with?: string | null
		slug?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		slug_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		slug_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		slug_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		slug_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		slug_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		slug_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		slug_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		slug_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		slug_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		slug_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		slug_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		slug_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		slug_not_ends_with?: string | null
		createdAt?: any | null

		/**
		 * All values that are not equal to given value.
		 */
		createdAt_not?: any | null

		/**
		 * All values that are contained in given list.
		 */
		createdAt_in: Array<any>

		/**
		 * All values that are not contained in given list.
		 */
		createdAt_not_in: Array<any>

		/**
		 * All values less than the given value.
		 */
		createdAt_lt?: any | null

		/**
		 * All values less than or equal the given value.
		 */
		createdAt_lte?: any | null

		/**
		 * All values greater than the given value.
		 */
		createdAt_gt?: any | null

		/**
		 * All values greater than or equal the given value.
		 */
		createdAt_gte?: any | null
		updatedAt?: any | null

		/**
		 * All values that are not equal to given value.
		 */
		updatedAt_not?: any | null

		/**
		 * All values that are contained in given list.
		 */
		updatedAt_in: Array<any>

		/**
		 * All values that are not contained in given list.
		 */
		updatedAt_not_in: Array<any>

		/**
		 * All values less than the given value.
		 */
		updatedAt_lt?: any | null

		/**
		 * All values less than or equal the given value.
		 */
		updatedAt_lte?: any | null

		/**
		 * All values greater than the given value.
		 */
		updatedAt_gt?: any | null

		/**
		 * All values greater than or equal the given value.
		 */
		updatedAt_gte?: any | null
		confirmed?: boolean | null

		/**
		 * All values that are not equal to given value.
		 */
		confirmed_not?: boolean | null
		online?: boolean | null

		/**
		 * All values that are not equal to given value.
		 */
		online_not?: boolean | null
		moderators_every?: IUserWhereInput | null
		moderators_some?: IUserWhereInput | null
		moderators_none?: IUserWhereInput | null
		author?: IUserWhereInput | null
		members_every?: IUserWhereInput | null
		members_some?: IUserWhereInput | null
		members_none?: IUserWhereInput | null
		channels_every?: IChannelWhereInput | null
		channels_some?: IChannelWhereInput | null
		channels_none?: IChannelWhereInput | null
	}

	interface IChannelWhereInput {
		/**
		 * Logical AND on all given filters.
		 */
		AND: Array<IChannelWhereInput>

		/**
		 * Logical OR on all given filters.
		 */
		OR: Array<IChannelWhereInput>

		/**
		 * Logical NOT on all given filters combined by AND.
		 */
		NOT: Array<IChannelWhereInput>
		id?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		id_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		id_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		id_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		id_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		id_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		id_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		id_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		id_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		id_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		id_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		id_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		id_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		id_not_ends_with?: string | null
		name?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		name_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		name_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		name_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		name_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		name_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		name_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		name_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		name_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		name_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		name_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		name_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		name_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		name_not_ends_with?: string | null
		slug?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		slug_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		slug_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		slug_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		slug_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		slug_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		slug_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		slug_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		slug_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		slug_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		slug_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		slug_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		slug_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		slug_not_ends_with?: string | null
		public?: boolean | null

		/**
		 * All values that are not equal to given value.
		 */
		public_not?: boolean | null
		createdAt?: any | null

		/**
		 * All values that are not equal to given value.
		 */
		createdAt_not?: any | null

		/**
		 * All values that are contained in given list.
		 */
		createdAt_in: Array<any>

		/**
		 * All values that are not contained in given list.
		 */
		createdAt_not_in: Array<any>

		/**
		 * All values less than the given value.
		 */
		createdAt_lt?: any | null

		/**
		 * All values less than or equal the given value.
		 */
		createdAt_lte?: any | null

		/**
		 * All values greater than the given value.
		 */
		createdAt_gt?: any | null

		/**
		 * All values greater than or equal the given value.
		 */
		createdAt_gte?: any | null
		updatedAt?: any | null

		/**
		 * All values that are not equal to given value.
		 */
		updatedAt_not?: any | null

		/**
		 * All values that are contained in given list.
		 */
		updatedAt_in: Array<any>

		/**
		 * All values that are not contained in given list.
		 */
		updatedAt_not_in: Array<any>

		/**
		 * All values less than the given value.
		 */
		updatedAt_lt?: any | null

		/**
		 * All values less than or equal the given value.
		 */
		updatedAt_lte?: any | null

		/**
		 * All values greater than the given value.
		 */
		updatedAt_gt?: any | null

		/**
		 * All values greater than or equal the given value.
		 */
		updatedAt_gte?: any | null
		moderators_every?: IUserWhereInput | null
		moderators_some?: IUserWhereInput | null
		moderators_none?: IUserWhereInput | null
		messages_every?: IMessageWhereInput | null
		messages_some?: IMessageWhereInput | null
		messages_none?: IMessageWhereInput | null
		members_every?: IUserWhereInput | null
		members_some?: IUserWhereInput | null
		members_none?: IUserWhereInput | null
		author?: IUserWhereInput | null
		_MagicalBackRelation_ChannelToTeam_every?: ITeamWhereInput | null
		_MagicalBackRelation_ChannelToTeam_some?: ITeamWhereInput | null
		_MagicalBackRelation_ChannelToTeam_none?: ITeamWhereInput | null
	}

	interface IMessageWhereInput {
		/**
		 * Logical AND on all given filters.
		 */
		AND: Array<IMessageWhereInput>

		/**
		 * Logical OR on all given filters.
		 */
		OR: Array<IMessageWhereInput>

		/**
		 * Logical NOT on all given filters combined by AND.
		 */
		NOT: Array<IMessageWhereInput>
		id?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		id_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		id_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		id_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		id_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		id_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		id_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		id_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		id_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		id_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		id_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		id_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		id_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		id_not_ends_with?: string | null
		body?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		body_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		body_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		body_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		body_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		body_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		body_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		body_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		body_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		body_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		body_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		body_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		body_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		body_not_ends_with?: string | null
		parentId?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		parentId_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		parentId_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		parentId_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		parentId_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		parentId_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		parentId_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		parentId_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		parentId_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		parentId_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		parentId_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		parentId_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		parentId_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		parentId_not_ends_with?: string | null
		url?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		url_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		url_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		url_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		url_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		url_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		url_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		url_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		url_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		url_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		url_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		url_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		url_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		url_not_ends_with?: string | null
		filetype?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		filetype_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		filetype_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		filetype_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		filetype_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		filetype_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		filetype_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		filetype_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		filetype_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		filetype_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		filetype_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		filetype_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		filetype_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		filetype_not_ends_with?: string | null
		createdAt?: any | null

		/**
		 * All values that are not equal to given value.
		 */
		createdAt_not?: any | null

		/**
		 * All values that are contained in given list.
		 */
		createdAt_in: Array<any>

		/**
		 * All values that are not contained in given list.
		 */
		createdAt_not_in: Array<any>

		/**
		 * All values less than the given value.
		 */
		createdAt_lt?: any | null

		/**
		 * All values less than or equal the given value.
		 */
		createdAt_lte?: any | null

		/**
		 * All values greater than the given value.
		 */
		createdAt_gt?: any | null

		/**
		 * All values greater than or equal the given value.
		 */
		createdAt_gte?: any | null
		updatedAt?: any | null

		/**
		 * All values that are not equal to given value.
		 */
		updatedAt_not?: any | null

		/**
		 * All values that are contained in given list.
		 */
		updatedAt_in: Array<any>

		/**
		 * All values that are not contained in given list.
		 */
		updatedAt_not_in: Array<any>

		/**
		 * All values less than the given value.
		 */
		updatedAt_lt?: any | null

		/**
		 * All values less than or equal the given value.
		 */
		updatedAt_lte?: any | null

		/**
		 * All values greater than the given value.
		 */
		updatedAt_gt?: any | null

		/**
		 * All values greater than or equal the given value.
		 */
		updatedAt_gte?: any | null
		author?: IUserWhereInput | null
		_MagicalBackRelation_ChannelToMessage_every?: IChannelWhereInput | null
		_MagicalBackRelation_ChannelToMessage_some?: IChannelWhereInput | null
		_MagicalBackRelation_ChannelToMessage_none?: IChannelWhereInput | null
	}

	interface ICommentWhereInput {
		/**
		 * Logical AND on all given filters.
		 */
		AND: Array<ICommentWhereInput>

		/**
		 * Logical OR on all given filters.
		 */
		OR: Array<ICommentWhereInput>

		/**
		 * Logical NOT on all given filters combined by AND.
		 */
		NOT: Array<ICommentWhereInput>
		id?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		id_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		id_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		id_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		id_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		id_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		id_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		id_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		id_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		id_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		id_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		id_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		id_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		id_not_ends_with?: string | null
		body?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		body_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		body_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		body_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		body_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		body_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		body_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		body_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		body_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		body_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		body_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		body_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		body_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		body_not_ends_with?: string | null
		parentId?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		parentId_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		parentId_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		parentId_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		parentId_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		parentId_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		parentId_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		parentId_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		parentId_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		parentId_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		parentId_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		parentId_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		parentId_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		parentId_not_ends_with?: string | null
		pageId?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		pageId_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		pageId_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		pageId_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		pageId_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		pageId_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		pageId_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		pageId_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		pageId_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		pageId_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		pageId_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		pageId_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		pageId_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		pageId_not_ends_with?: string | null
		createdAt?: any | null

		/**
		 * All values that are not equal to given value.
		 */
		createdAt_not?: any | null

		/**
		 * All values that are contained in given list.
		 */
		createdAt_in: Array<any>

		/**
		 * All values that are not contained in given list.
		 */
		createdAt_not_in: Array<any>

		/**
		 * All values less than the given value.
		 */
		createdAt_lt?: any | null

		/**
		 * All values less than or equal the given value.
		 */
		createdAt_lte?: any | null

		/**
		 * All values greater than the given value.
		 */
		createdAt_gt?: any | null

		/**
		 * All values greater than or equal the given value.
		 */
		createdAt_gte?: any | null
		updatedAt?: any | null

		/**
		 * All values that are not equal to given value.
		 */
		updatedAt_not?: any | null

		/**
		 * All values that are contained in given list.
		 */
		updatedAt_in: Array<any>

		/**
		 * All values that are not contained in given list.
		 */
		updatedAt_not_in: Array<any>

		/**
		 * All values less than the given value.
		 */
		updatedAt_lt?: any | null

		/**
		 * All values less than or equal the given value.
		 */
		updatedAt_lte?: any | null

		/**
		 * All values greater than the given value.
		 */
		updatedAt_gt?: any | null

		/**
		 * All values greater than or equal the given value.
		 */
		updatedAt_gte?: any | null
		repliedTo?: IUserWhereInput | null
		ratings?: IRatingWhereInput | null
		replies_every?: ICommentWhereInput | null
		replies_some?: ICommentWhereInput | null
		replies_none?: ICommentWhereInput | null
		author?: IUserWhereInput | null
		_MagicalBackRelation_CommentReplies_every?: ICommentWhereInput | null
		_MagicalBackRelation_CommentReplies_some?: ICommentWhereInput | null
		_MagicalBackRelation_CommentReplies_none?: ICommentWhereInput | null
	}

	interface IRatingWhereInput {
		/**
		 * Logical AND on all given filters.
		 */
		AND: Array<IRatingWhereInput>

		/**
		 * Logical OR on all given filters.
		 */
		OR: Array<IRatingWhereInput>

		/**
		 * Logical NOT on all given filters combined by AND.
		 */
		NOT: Array<IRatingWhereInput>
		id?: string | null

		/**
		 * All values that are not equal to given value.
		 */
		id_not?: string | null

		/**
		 * All values that are contained in given list.
		 */
		id_in: Array<string>

		/**
		 * All values that are not contained in given list.
		 */
		id_not_in: Array<string>

		/**
		 * All values less than the given value.
		 */
		id_lt?: string | null

		/**
		 * All values less than or equal the given value.
		 */
		id_lte?: string | null

		/**
		 * All values greater than the given value.
		 */
		id_gt?: string | null

		/**
		 * All values greater than or equal the given value.
		 */
		id_gte?: string | null

		/**
		 * All values containing the given string.
		 */
		id_contains?: string | null

		/**
		 * All values not containing the given string.
		 */
		id_not_contains?: string | null

		/**
		 * All values starting with the given string.
		 */
		id_starts_with?: string | null

		/**
		 * All values not starting with the given string.
		 */
		id_not_starts_with?: string | null

		/**
		 * All values ending with the given string.
		 */
		id_ends_with?: string | null

		/**
		 * All values not ending with the given string.
		 */
		id_not_ends_with?: string | null
		vote?: number | null

		/**
		 * All values that are not equal to given value.
		 */
		vote_not?: number | null

		/**
		 * All values that are contained in given list.
		 */
		vote_in: Array<number>

		/**
		 * All values that are not contained in given list.
		 */
		vote_not_in: Array<number>

		/**
		 * All values less than the given value.
		 */
		vote_lt?: number | null

		/**
		 * All values less than or equal the given value.
		 */
		vote_lte?: number | null

		/**
		 * All values greater than the given value.
		 */
		vote_gt?: number | null

		/**
		 * All values greater than or equal the given value.
		 */
		vote_gte?: number | null
		author_every?: IUserWhereInput | null
		author_some?: IUserWhereInput | null
		author_none?: IUserWhereInput | null
		_MagicalBackRelation_CommentToRating_every?: ICommentWhereInput | null
		_MagicalBackRelation_CommentToRating_some?: ICommentWhereInput | null
		_MagicalBackRelation_CommentToRating_none?: ICommentWhereInput | null
	}

	const enum NotificationOrderByInput {
		id_ASC = 'id_ASC',
		id_DESC = 'id_DESC',
		message_ASC = 'message_ASC',
		message_DESC = 'message_DESC',
		updatedAt_ASC = 'updatedAt_ASC',
		updatedAt_DESC = 'updatedAt_DESC',
		createdAt_ASC = 'createdAt_ASC',
		createdAt_DESC = 'createdAt_DESC'
	}

	interface INotification {
		__typename: 'Notification'
		id: string
		message: string
		author: IUser
	}

	interface IAuthorOnNotificationArguments {
		where?: IUserWhereInput | null
	}

	interface IFile {
		__typename: 'File'
		id: string
		createdAt: any
		updatedAt: any
		filename: string
		mimetype: string
		encoding: string
		key: string
		ETag: string
		url: string
	}

	const enum UserOrderByInput {
		id_ASC = 'id_ASC',
		id_DESC = 'id_DESC',
		email_ASC = 'email_ASC',
		email_DESC = 'email_DESC',
		set_private_ASC = 'set_private_ASC',
		set_private_DESC = 'set_private_DESC',
		username_ASC = 'username_ASC',
		username_DESC = 'username_DESC',
		password_ASC = 'password_ASC',
		password_DESC = 'password_DESC',
		confirmed_ASC = 'confirmed_ASC',
		confirmed_DESC = 'confirmed_DESC',
		online_ASC = 'online_ASC',
		online_DESC = 'online_DESC',
		createdAt_ASC = 'createdAt_ASC',
		createdAt_DESC = 'createdAt_DESC',
		updatedAt_ASC = 'updatedAt_ASC',
		updatedAt_DESC = 'updatedAt_DESC',
		role_ASC = 'role_ASC',
		role_DESC = 'role_DESC'
	}

	const enum TeamOrderByInput {
		id_ASC = 'id_ASC',
		id_DESC = 'id_DESC',
		name_ASC = 'name_ASC',
		name_DESC = 'name_DESC',
		slug_ASC = 'slug_ASC',
		slug_DESC = 'slug_DESC',
		createdAt_ASC = 'createdAt_ASC',
		createdAt_DESC = 'createdAt_DESC',
		updatedAt_ASC = 'updatedAt_ASC',
		updatedAt_DESC = 'updatedAt_DESC',
		confirmed_ASC = 'confirmed_ASC',
		confirmed_DESC = 'confirmed_DESC',
		online_ASC = 'online_ASC',
		online_DESC = 'online_DESC'
	}

	interface ITeam {
		__typename: 'Team'
		id: string
		name: string
		slug: string
		moderators: Array<IUser>
		author: IUser
		members: Array<IUser>
		channels: Array<IChannel>
		createdAt: any
		updatedAt: any
		confirmed: boolean
		online: boolean
	}

	interface IModeratorsOnTeamArguments {
		where?: IUserWhereInput | null
		orderBy?: UserOrderByInput | null
		skip?: number | null
		after?: string | null
		before?: string | null
		first?: number | null
		last?: number | null
	}

	interface IAuthorOnTeamArguments {
		where?: IUserWhereInput | null
	}

	interface IMembersOnTeamArguments {
		where?: IUserWhereInput | null
		orderBy?: UserOrderByInput | null
		skip?: number | null
		after?: string | null
		before?: string | null
		first?: number | null
		last?: number | null
	}

	interface IChannelsOnTeamArguments {
		where?: IChannelWhereInput | null
		orderBy?: ChannelOrderByInput | null
		skip?: number | null
		after?: string | null
		before?: string | null
		first?: number | null
		last?: number | null
	}

	const enum ChannelOrderByInput {
		id_ASC = 'id_ASC',
		id_DESC = 'id_DESC',
		name_ASC = 'name_ASC',
		name_DESC = 'name_DESC',
		slug_ASC = 'slug_ASC',
		slug_DESC = 'slug_DESC',
		public_ASC = 'public_ASC',
		public_DESC = 'public_DESC',
		createdAt_ASC = 'createdAt_ASC',
		createdAt_DESC = 'createdAt_DESC',
		updatedAt_ASC = 'updatedAt_ASC',
		updatedAt_DESC = 'updatedAt_DESC'
	}

	interface IChannel {
		__typename: 'Channel'
		id: string
		name: string
		slug: string
		moderators: Array<IUser>
		public: boolean | null
		messages: Array<IMessage>
		members: Array<IUser>
		author: IUser
		createdAt: any
		updatedAt: any
	}

	interface IModeratorsOnChannelArguments {
		where?: IUserWhereInput | null
		orderBy?: UserOrderByInput | null
		skip?: number | null
		after?: string | null
		before?: string | null
		first?: number | null
		last?: number | null
	}

	interface IMessagesOnChannelArguments {
		where?: IMessageWhereInput | null
		orderBy?: MessageOrderByInput | null
		skip?: number | null
		after?: string | null
		before?: string | null
		first?: number | null
		last?: number | null
	}

	interface IMembersOnChannelArguments {
		where?: IUserWhereInput | null
		orderBy?: UserOrderByInput | null
		skip?: number | null
		after?: string | null
		before?: string | null
		first?: number | null
		last?: number | null
	}

	interface IAuthorOnChannelArguments {
		where?: IUserWhereInput | null
	}

	const enum MessageOrderByInput {
		id_ASC = 'id_ASC',
		id_DESC = 'id_DESC',
		body_ASC = 'body_ASC',
		body_DESC = 'body_DESC',
		parentId_ASC = 'parentId_ASC',
		parentId_DESC = 'parentId_DESC',
		url_ASC = 'url_ASC',
		url_DESC = 'url_DESC',
		filetype_ASC = 'filetype_ASC',
		filetype_DESC = 'filetype_DESC',
		createdAt_ASC = 'createdAt_ASC',
		createdAt_DESC = 'createdAt_DESC',
		updatedAt_ASC = 'updatedAt_ASC',
		updatedAt_DESC = 'updatedAt_DESC'
	}

	interface IMessage {
		__typename: 'Message'
		id: string
		body: string
		parentId: string
		url: string
		filetype: string
		author: IUser
		createdAt: any
		updatedAt: any
	}

	interface IAuthorOnMessageArguments {
		where?: IUserWhereInput | null
	}

	interface IComment {
		__typename: 'Comment'
		id: string
		body: string
		parentId: string
		pageId: string
		repliedTo: IUser | null
		ratings: IRating
		createdAt: any
		updatedAt: any
		replies: Array<IComment>
		author: IUser
	}

	interface IRepliedToOnCommentArguments {
		where?: IUserWhereInput | null
	}

	interface IRatingsOnCommentArguments {
		where?: IRatingWhereInput | null
	}

	interface IRepliesOnCommentArguments {
		where?: ICommentWhereInput | null
		orderBy?: CommentOrderByInput | null
		skip?: number | null
		after?: string | null
		before?: string | null
		first?: number | null
		last?: number | null
	}

	interface IAuthorOnCommentArguments {
		where?: IUserWhereInput | null
	}

	interface IRating {
		__typename: 'Rating'
		id: string
		vote: number
		author: Array<IUser>
	}

	interface IAuthorOnRatingArguments {
		where?: IUserWhereInput | null
		orderBy?: UserOrderByInput | null
		skip?: number | null
		after?: string | null
		before?: string | null
		first?: number | null
		last?: number | null
	}

	const enum CommentOrderByInput {
		id_ASC = 'id_ASC',
		id_DESC = 'id_DESC',
		body_ASC = 'body_ASC',
		body_DESC = 'body_DESC',
		parentId_ASC = 'parentId_ASC',
		parentId_DESC = 'parentId_DESC',
		pageId_ASC = 'pageId_ASC',
		pageId_DESC = 'pageId_DESC',
		createdAt_ASC = 'createdAt_ASC',
		createdAt_DESC = 'createdAt_DESC',
		updatedAt_ASC = 'updatedAt_ASC',
		updatedAt_DESC = 'updatedAt_DESC'
	}

	interface IMutation {
		__typename: 'Mutation'
		createMessage: IMessage
		createChannel: IChannel
		createTeam: ITeam
		addTeamMember: ITeam
		addChannelMember: IChannel
		createChannelMember: IChannel
		deleteComment: IComment
		editComment: IComment
		login: ILoginResponse
		register: IRegisterResponse
		forgotPassword: IForgotPasswordResponse
		checkToken: IForgotPasswordResponse
		resetPassword: IForgotPasswordResponse
		logout: boolean
		authConfirmation: IForgotPasswordResponse
		createComment: IComment
		createReply: IComment
		likeComment: IComment | null
		friendRequest: IVoidResponse
		addFriend: IVoidResponse
		friendReject: IVoidResponse
	}

	interface ICreateMessageOnMutationArguments {
		body: string
		channelId: string
	}

	interface ICreateChannelOnMutationArguments {
		name: string
		teamId: string
	}

	interface ICreateTeamOnMutationArguments {
		name: string
	}

	interface IAddTeamMemberOnMutationArguments {
		userId: string
		teamId: string
	}

	interface IAddChannelMemberOnMutationArguments {
		userId: string
		channelId: string
	}

	interface ICreateChannelMemberOnMutationArguments {
		userId: string
		channelId: string
	}

	interface IDeleteCommentOnMutationArguments {
		id: string
	}

	interface IEditCommentOnMutationArguments {
		id: string
		body: string
	}

	interface ILoginOnMutationArguments {
		email: string
		password?: string | null
	}

	interface IRegisterOnMutationArguments {
		email: string
		username: string
		password: string
	}

	interface IForgotPasswordOnMutationArguments {
		email: string
	}

	interface ICheckTokenOnMutationArguments {
		token: string
	}

	interface IResetPasswordOnMutationArguments {
		id: string
		password: string
	}

	interface IAuthConfirmationOnMutationArguments {
		token: string
	}

	interface ICreateCommentOnMutationArguments {
		pageId: string
		parentId: string
		body?: string | null
		repliedTo?: string | null
	}

	interface ICreateReplyOnMutationArguments {
		pageId: string
		parentId: string
		body?: string | null
		repliedTo?: string | null
	}

	interface ILikeCommentOnMutationArguments {
		commentId: string
	}

	interface IFriendRequestOnMutationArguments {
		requestedId: string
	}

	interface IAddFriendOnMutationArguments {
		requestedId: string
	}

	interface IFriendRejectOnMutationArguments {
		id: string
	}

	interface ILoginResponse {
		__typename: 'LoginResponse'
		ok: boolean
		token: string | null
		refreshToken: string
		user: IUser | null
	}

	interface IRegisterResponse {
		__typename: 'RegisterResponse'
		ok: boolean
		result: string
	}

	interface IForgotPasswordResponse {
		__typename: 'ForgotPasswordResponse'
		ok: boolean
		result: string
	}

	interface IVoidResponse {
		__typename: 'VoidResponse'
		ok: boolean
		errors: Array<IError>
	}

	interface IError {
		__typename: 'Error'
		path: string
		message: string
	}

	interface ISubscription {
		__typename: 'Subscription'
		friendRequestSubscription: IUserSubscriptionPayload
		friendSubscription: IUserSubscriptionPayload
		NotificationSubscription: INotificationSubscriptionPayload
		messageSubscription: IMessageSubscriptionPayload
	}

	interface IFriendRequestSubscriptionOnSubscriptionArguments {
		id: string
	}

	interface IFriendSubscriptionOnSubscriptionArguments {
		id: string
	}

	interface INotificationSubscriptionOnSubscriptionArguments {
		id: string
	}

	interface IMessageSubscriptionOnSubscriptionArguments {
		channelId: string
	}

	interface IUserSubscriptionPayload {
		__typename: 'UserSubscriptionPayload'
		mutation: MutationType
		node: IUser | null
		updatedFields: Array<string>
		previousValues: IUserPreviousValues | null
	}

	const enum MutationType {
		CREATED = 'CREATED',
		UPDATED = 'UPDATED',
		DELETED = 'DELETED'
	}

	interface IUserPreviousValues {
		__typename: 'UserPreviousValues'
		id: string
		email: string
		set_private: boolean
		username: string
		password: string
		confirmed: boolean
		online: boolean
		createdAt: any
		updatedAt: any
		role: UserRole
	}

	interface INotificationSubscriptionPayload {
		__typename: 'NotificationSubscriptionPayload'
		mutation: MutationType
		node: INotification | null
		updatedFields: Array<string>
		previousValues: INotificationPreviousValues | null
	}

	interface INotificationPreviousValues {
		__typename: 'NotificationPreviousValues'
		id: string
		message: string
	}

	interface IMessageSubscriptionPayload {
		__typename: 'MessageSubscriptionPayload'
		mutation: MutationType
		node: IMessage | null
		updatedFields: Array<string>
		previousValues: IMessagePreviousValues | null
	}

	interface IMessagePreviousValues {
		__typename: 'MessagePreviousValues'
		id: string
		body: string
		parentId: string
		url: string
		filetype: string
		createdAt: any
		updatedAt: any
	}

	interface IAddFriendResponse {
		__typename: 'AddFriendResponse'
		ok: boolean
		errors: Array<IError>
		user: IUser | null
	}
}

// tslint:enable
