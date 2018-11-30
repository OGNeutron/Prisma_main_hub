import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    notifications: <T = Notification[]>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    teams: <T = Team[]>(args: { where?: TeamWhereInput, orderBy?: TeamOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ratings: <T = Rating[]>(args: { where?: RatingWhereInput, orderBy?: RatingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    channels: <T = Channel[]>(args: { where?: ChannelWhereInput, orderBy?: ChannelOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Comment[]>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messages: <T = Message[]>(args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    team: <T = Team | null>(args: { where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rating: <T = Rating | null>(args: { where: RatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    channel: <T = Channel | null>(args: { where: ChannelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    message: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsConnection: <T = NotificationConnection>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    teamsConnection: <T = TeamConnection>(args: { where?: TeamWhereInput, orderBy?: TeamOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ratingsConnection: <T = RatingConnection>(args: { where?: RatingWhereInput, orderBy?: RatingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    channelsConnection: <T = ChannelConnection>(args: { where?: ChannelWhereInput, orderBy?: ChannelOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    messagesConnection: <T = MessageConnection>(args: { where?: MessageWhereInput, orderBy?: MessageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createNotification: <T = Notification>(args: { data: NotificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTeam: <T = Team>(args: { data: TeamCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRating: <T = Rating>(args: { data: RatingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createChannel: <T = Channel>(args: { data: ChannelCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMessage: <T = Message>(args: { data: MessageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNotification: <T = Notification | null>(args: { data: NotificationUpdateInput, where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTeam: <T = Team | null>(args: { data: TeamUpdateInput, where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRating: <T = Rating | null>(args: { data: RatingUpdateInput, where: RatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateChannel: <T = Channel | null>(args: { data: ChannelUpdateInput, where: ChannelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateComment: <T = Comment | null>(args: { data: CommentUpdateInput, where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMessage: <T = Message | null>(args: { data: MessageUpdateInput, where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNotification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTeam: <T = Team | null>(args: { where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRating: <T = Rating | null>(args: { where: RatingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteChannel: <T = Channel | null>(args: { where: ChannelWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteComment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMessage: <T = Message | null>(args: { where: MessageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNotification: <T = Notification>(args: { where: NotificationWhereUniqueInput, create: NotificationCreateInput, update: NotificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTeam: <T = Team>(args: { where: TeamWhereUniqueInput, create: TeamCreateInput, update: TeamUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRating: <T = Rating>(args: { where: RatingWhereUniqueInput, create: RatingCreateInput, update: RatingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertChannel: <T = Channel>(args: { where: ChannelWhereUniqueInput, create: ChannelCreateInput, update: ChannelUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertComment: <T = Comment>(args: { where: CommentWhereUniqueInput, create: CommentCreateInput, update: CommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMessage: <T = Message>(args: { where: MessageWhereUniqueInput, create: MessageCreateInput, update: MessageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotifications: <T = BatchPayload>(args: { data: NotificationUpdateManyMutationInput, where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTeams: <T = BatchPayload>(args: { data: TeamUpdateManyMutationInput, where?: TeamWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRatings: <T = BatchPayload>(args: { data: RatingUpdateManyMutationInput, where?: RatingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyChannels: <T = BatchPayload>(args: { data: ChannelUpdateManyMutationInput, where?: ChannelWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateManyMutationInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateManyMutationInput, where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMessages: <T = BatchPayload>(args: { data: MessageUpdateManyMutationInput, where?: MessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotifications: <T = BatchPayload>(args: { where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTeams: <T = BatchPayload>(args: { where?: TeamWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRatings: <T = BatchPayload>(args: { where?: RatingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyChannels: <T = BatchPayload>(args: { where?: ChannelWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMessages: <T = BatchPayload>(args: { where?: MessageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    notification: <T = NotificationSubscriptionPayload | null>(args: { where?: NotificationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    team: <T = TeamSubscriptionPayload | null>(args: { where?: TeamSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    rating: <T = RatingSubscriptionPayload | null>(args: { where?: RatingSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    channel: <T = ChannelSubscriptionPayload | null>(args: { where?: ChannelSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    message: <T = MessageSubscriptionPayload | null>(args: { where?: MessageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Notification: (where?: NotificationWhereInput) => Promise<boolean>
  Team: (where?: TeamWhereInput) => Promise<boolean>
  Rating: (where?: RatingWhereInput) => Promise<boolean>
  Channel: (where?: ChannelWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
  Comment: (where?: CommentWhereInput) => Promise<boolean>
  Message: (where?: MessageWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateChannel {
  count: Int!
}

type AggregateComment {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateNotification {
  count: Int!
}

type AggregateRating {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Channel implements Node {
  id: ID!
  name: String!
  slug: String!
  moderators(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  public: Boolean
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  author: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type ChannelConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ChannelEdge]!
  aggregate: AggregateChannel!
}

input ChannelCreateInput {
  name: String!
  slug: String!
  public: Boolean
  moderators: UserCreateManyInput
  messages: MessageCreateManyInput
  members: UserCreateManyWithoutChannelsInput
  author: UserCreateOneWithoutOwned_channelsInput!
}

input ChannelCreateManyInput {
  create: [ChannelCreateInput!]
  connect: [ChannelWhereUniqueInput!]
}

input ChannelCreateManyWithoutAuthorInput {
  create: [ChannelCreateWithoutAuthorInput!]
  connect: [ChannelWhereUniqueInput!]
}

input ChannelCreateManyWithoutMembersInput {
  create: [ChannelCreateWithoutMembersInput!]
  connect: [ChannelWhereUniqueInput!]
}

input ChannelCreateWithoutAuthorInput {
  name: String!
  slug: String!
  public: Boolean
  moderators: UserCreateManyInput
  messages: MessageCreateManyInput
  members: UserCreateManyWithoutChannelsInput
}

input ChannelCreateWithoutMembersInput {
  name: String!
  slug: String!
  public: Boolean
  moderators: UserCreateManyInput
  messages: MessageCreateManyInput
  author: UserCreateOneWithoutOwned_channelsInput!
}

"""An edge in a connection."""
type ChannelEdge {
  """The item at the end of the edge."""
  node: Channel!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ChannelOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  public_ASC
  public_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ChannelPreviousValues {
  id: ID!
  name: String!
  slug: String!
  public: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ChannelSubscriptionPayload {
  mutation: MutationType!
  node: Channel
  updatedFields: [String!]
  previousValues: ChannelPreviousValues
}

input ChannelSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ChannelSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChannelSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChannelSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ChannelWhereInput
}

input ChannelUpdateDataInput {
  name: String
  slug: String
  public: Boolean
  moderators: UserUpdateManyInput
  messages: MessageUpdateManyInput
  members: UserUpdateManyWithoutChannelsInput
  author: UserUpdateOneRequiredWithoutOwned_channelsInput
}

input ChannelUpdateInput {
  name: String
  slug: String
  public: Boolean
  moderators: UserUpdateManyInput
  messages: MessageUpdateManyInput
  members: UserUpdateManyWithoutChannelsInput
  author: UserUpdateOneRequiredWithoutOwned_channelsInput
}

input ChannelUpdateManyInput {
  create: [ChannelCreateInput!]
  connect: [ChannelWhereUniqueInput!]
  disconnect: [ChannelWhereUniqueInput!]
  delete: [ChannelWhereUniqueInput!]
  update: [ChannelUpdateWithWhereUniqueNestedInput!]
  upsert: [ChannelUpsertWithWhereUniqueNestedInput!]
}

input ChannelUpdateManyMutationInput {
  name: String
  slug: String
  public: Boolean
}

input ChannelUpdateManyWithoutAuthorInput {
  create: [ChannelCreateWithoutAuthorInput!]
  connect: [ChannelWhereUniqueInput!]
  disconnect: [ChannelWhereUniqueInput!]
  delete: [ChannelWhereUniqueInput!]
  update: [ChannelUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [ChannelUpsertWithWhereUniqueWithoutAuthorInput!]
}

input ChannelUpdateManyWithoutMembersInput {
  create: [ChannelCreateWithoutMembersInput!]
  connect: [ChannelWhereUniqueInput!]
  disconnect: [ChannelWhereUniqueInput!]
  delete: [ChannelWhereUniqueInput!]
  update: [ChannelUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [ChannelUpsertWithWhereUniqueWithoutMembersInput!]
}

input ChannelUpdateWithoutAuthorDataInput {
  name: String
  slug: String
  public: Boolean
  moderators: UserUpdateManyInput
  messages: MessageUpdateManyInput
  members: UserUpdateManyWithoutChannelsInput
}

input ChannelUpdateWithoutMembersDataInput {
  name: String
  slug: String
  public: Boolean
  moderators: UserUpdateManyInput
  messages: MessageUpdateManyInput
  author: UserUpdateOneRequiredWithoutOwned_channelsInput
}

input ChannelUpdateWithWhereUniqueNestedInput {
  where: ChannelWhereUniqueInput!
  data: ChannelUpdateDataInput!
}

input ChannelUpdateWithWhereUniqueWithoutAuthorInput {
  where: ChannelWhereUniqueInput!
  data: ChannelUpdateWithoutAuthorDataInput!
}

input ChannelUpdateWithWhereUniqueWithoutMembersInput {
  where: ChannelWhereUniqueInput!
  data: ChannelUpdateWithoutMembersDataInput!
}

input ChannelUpsertWithWhereUniqueNestedInput {
  where: ChannelWhereUniqueInput!
  update: ChannelUpdateDataInput!
  create: ChannelCreateInput!
}

input ChannelUpsertWithWhereUniqueWithoutAuthorInput {
  where: ChannelWhereUniqueInput!
  update: ChannelUpdateWithoutAuthorDataInput!
  create: ChannelCreateWithoutAuthorInput!
}

input ChannelUpsertWithWhereUniqueWithoutMembersInput {
  where: ChannelWhereUniqueInput!
  update: ChannelUpdateWithoutMembersDataInput!
  create: ChannelCreateWithoutMembersInput!
}

input ChannelWhereInput {
  """Logical AND on all given filters."""
  AND: [ChannelWhereInput!]

  """Logical OR on all given filters."""
  OR: [ChannelWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ChannelWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  public: Boolean

  """All values that are not equal to given value."""
  public_not: Boolean
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  moderators_every: UserWhereInput
  moderators_some: UserWhereInput
  moderators_none: UserWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  author: UserWhereInput
}

input ChannelWhereUniqueInput {
  id: ID
}

type Comment implements Node {
  id: ID!
  body: String!
  parentId: ID!
  pageId: ID!
  repliedTo: User
  ratings: Rating!
  createdAt: DateTime!
  updatedAt: DateTime!
  replies(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  author: User!
}

"""A connection to a list of items."""
type CommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  body: String!
  parentId: ID!
  pageId: ID!
  repliedTo: UserCreateOneInput
  ratings: RatingCreateOneInput!
  replies: CommentCreateManyInput
  author: UserCreateOneInput!
}

input CommentCreateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
}

"""An edge in a connection."""
type CommentEdge {
  """The item at the end of the edge."""
  node: Comment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  body_ASC
  body_DESC
  parentId_ASC
  parentId_DESC
  pageId_ASC
  pageId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CommentPreviousValues {
  id: ID!
  body: String!
  parentId: ID!
  pageId: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
}

input CommentUpdateDataInput {
  body: String
  parentId: ID
  pageId: ID
  repliedTo: UserUpdateOneInput
  ratings: RatingUpdateOneRequiredInput
  replies: CommentUpdateManyInput
  author: UserUpdateOneRequiredInput
}

input CommentUpdateInput {
  body: String
  parentId: ID
  pageId: ID
  repliedTo: UserUpdateOneInput
  ratings: RatingUpdateOneRequiredInput
  replies: CommentUpdateManyInput
  author: UserUpdateOneRequiredInput
}

input CommentUpdateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  delete: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueNestedInput!]
  upsert: [CommentUpsertWithWhereUniqueNestedInput!]
}

input CommentUpdateManyMutationInput {
  body: String
  parentId: ID
  pageId: ID
}

input CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateDataInput!
}

input CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateDataInput!
  create: CommentCreateInput!
}

input CommentWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  body: String

  """All values that are not equal to given value."""
  body_not: String

  """All values that are contained in given list."""
  body_in: [String!]

  """All values that are not contained in given list."""
  body_not_in: [String!]

  """All values less than the given value."""
  body_lt: String

  """All values less than or equal the given value."""
  body_lte: String

  """All values greater than the given value."""
  body_gt: String

  """All values greater than or equal the given value."""
  body_gte: String

  """All values containing the given string."""
  body_contains: String

  """All values not containing the given string."""
  body_not_contains: String

  """All values starting with the given string."""
  body_starts_with: String

  """All values not starting with the given string."""
  body_not_starts_with: String

  """All values ending with the given string."""
  body_ends_with: String

  """All values not ending with the given string."""
  body_not_ends_with: String
  parentId: ID

  """All values that are not equal to given value."""
  parentId_not: ID

  """All values that are contained in given list."""
  parentId_in: [ID!]

  """All values that are not contained in given list."""
  parentId_not_in: [ID!]

  """All values less than the given value."""
  parentId_lt: ID

  """All values less than or equal the given value."""
  parentId_lte: ID

  """All values greater than the given value."""
  parentId_gt: ID

  """All values greater than or equal the given value."""
  parentId_gte: ID

  """All values containing the given string."""
  parentId_contains: ID

  """All values not containing the given string."""
  parentId_not_contains: ID

  """All values starting with the given string."""
  parentId_starts_with: ID

  """All values not starting with the given string."""
  parentId_not_starts_with: ID

  """All values ending with the given string."""
  parentId_ends_with: ID

  """All values not ending with the given string."""
  parentId_not_ends_with: ID
  pageId: ID

  """All values that are not equal to given value."""
  pageId_not: ID

  """All values that are contained in given list."""
  pageId_in: [ID!]

  """All values that are not contained in given list."""
  pageId_not_in: [ID!]

  """All values less than the given value."""
  pageId_lt: ID

  """All values less than or equal the given value."""
  pageId_lte: ID

  """All values greater than the given value."""
  pageId_gt: ID

  """All values greater than or equal the given value."""
  pageId_gte: ID

  """All values containing the given string."""
  pageId_contains: ID

  """All values not containing the given string."""
  pageId_not_contains: ID

  """All values starting with the given string."""
  pageId_starts_with: ID

  """All values not starting with the given string."""
  pageId_not_starts_with: ID

  """All values ending with the given string."""
  pageId_ends_with: ID

  """All values not ending with the given string."""
  pageId_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  repliedTo: UserWhereInput
  ratings: RatingWhereInput
  replies_every: CommentWhereInput
  replies_some: CommentWhereInput
  replies_none: CommentWhereInput
  author: UserWhereInput
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

type File implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  mimetype: String!
  encoding: String!
  key: String!
  ETag: String!
  url: String!
}

"""A connection to a list of items."""
type FileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  filename: String!
  mimetype: String!
  encoding: String!
  key: String!
  ETag: String!
  url: String!
}

input FileCreateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
}

"""An edge in a connection."""
type FileEdge {
  """The item at the end of the edge."""
  node: File!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  filename_ASC
  filename_DESC
  mimetype_ASC
  mimetype_DESC
  encoding_ASC
  encoding_DESC
  key_ASC
  key_DESC
  ETag_ASC
  ETag_DESC
  url_ASC
  url_DESC
}

type FilePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  mimetype: String!
  encoding: String!
  key: String!
  ETag: String!
  url: String!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FileWhereInput
}

input FileUpdateDataInput {
  filename: String
  mimetype: String
  encoding: String
  key: String
  ETag: String
  url: String
}

input FileUpdateInput {
  filename: String
  mimetype: String
  encoding: String
  key: String
  ETag: String
  url: String
}

input FileUpdateManyMutationInput {
  filename: String
  mimetype: String
  encoding: String
  key: String
  ETag: String
  url: String
}

input FileUpdateOneRequiredInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
}

input FileUpsertNestedInput {
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileWhereInput {
  """Logical AND on all given filters."""
  AND: [FileWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  filename: String

  """All values that are not equal to given value."""
  filename_not: String

  """All values that are contained in given list."""
  filename_in: [String!]

  """All values that are not contained in given list."""
  filename_not_in: [String!]

  """All values less than the given value."""
  filename_lt: String

  """All values less than or equal the given value."""
  filename_lte: String

  """All values greater than the given value."""
  filename_gt: String

  """All values greater than or equal the given value."""
  filename_gte: String

  """All values containing the given string."""
  filename_contains: String

  """All values not containing the given string."""
  filename_not_contains: String

  """All values starting with the given string."""
  filename_starts_with: String

  """All values not starting with the given string."""
  filename_not_starts_with: String

  """All values ending with the given string."""
  filename_ends_with: String

  """All values not ending with the given string."""
  filename_not_ends_with: String
  mimetype: String

  """All values that are not equal to given value."""
  mimetype_not: String

  """All values that are contained in given list."""
  mimetype_in: [String!]

  """All values that are not contained in given list."""
  mimetype_not_in: [String!]

  """All values less than the given value."""
  mimetype_lt: String

  """All values less than or equal the given value."""
  mimetype_lte: String

  """All values greater than the given value."""
  mimetype_gt: String

  """All values greater than or equal the given value."""
  mimetype_gte: String

  """All values containing the given string."""
  mimetype_contains: String

  """All values not containing the given string."""
  mimetype_not_contains: String

  """All values starting with the given string."""
  mimetype_starts_with: String

  """All values not starting with the given string."""
  mimetype_not_starts_with: String

  """All values ending with the given string."""
  mimetype_ends_with: String

  """All values not ending with the given string."""
  mimetype_not_ends_with: String
  encoding: String

  """All values that are not equal to given value."""
  encoding_not: String

  """All values that are contained in given list."""
  encoding_in: [String!]

  """All values that are not contained in given list."""
  encoding_not_in: [String!]

  """All values less than the given value."""
  encoding_lt: String

  """All values less than or equal the given value."""
  encoding_lte: String

  """All values greater than the given value."""
  encoding_gt: String

  """All values greater than or equal the given value."""
  encoding_gte: String

  """All values containing the given string."""
  encoding_contains: String

  """All values not containing the given string."""
  encoding_not_contains: String

  """All values starting with the given string."""
  encoding_starts_with: String

  """All values not starting with the given string."""
  encoding_not_starts_with: String

  """All values ending with the given string."""
  encoding_ends_with: String

  """All values not ending with the given string."""
  encoding_not_ends_with: String
  key: String

  """All values that are not equal to given value."""
  key_not: String

  """All values that are contained in given list."""
  key_in: [String!]

  """All values that are not contained in given list."""
  key_not_in: [String!]

  """All values less than the given value."""
  key_lt: String

  """All values less than or equal the given value."""
  key_lte: String

  """All values greater than the given value."""
  key_gt: String

  """All values greater than or equal the given value."""
  key_gte: String

  """All values containing the given string."""
  key_contains: String

  """All values not containing the given string."""
  key_not_contains: String

  """All values starting with the given string."""
  key_starts_with: String

  """All values not starting with the given string."""
  key_not_starts_with: String

  """All values ending with the given string."""
  key_ends_with: String

  """All values not ending with the given string."""
  key_not_ends_with: String
  ETag: String

  """All values that are not equal to given value."""
  ETag_not: String

  """All values that are contained in given list."""
  ETag_in: [String!]

  """All values that are not contained in given list."""
  ETag_not_in: [String!]

  """All values less than the given value."""
  ETag_lt: String

  """All values less than or equal the given value."""
  ETag_lte: String

  """All values greater than the given value."""
  ETag_gt: String

  """All values greater than or equal the given value."""
  ETag_gte: String

  """All values containing the given string."""
  ETag_contains: String

  """All values not containing the given string."""
  ETag_not_contains: String

  """All values starting with the given string."""
  ETag_starts_with: String

  """All values not starting with the given string."""
  ETag_not_starts_with: String

  """All values ending with the given string."""
  ETag_ends_with: String

  """All values not ending with the given string."""
  ETag_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
}

input FileWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Message implements Node {
  id: ID!
  body: String!
  parentId: ID!
  url: String!
  filetype: String!
  author: User!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""A connection to a list of items."""
type MessageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  body: String!
  parentId: ID!
  url: String!
  filetype: String!
  author: UserCreateOneInput!
}

input MessageCreateManyInput {
  create: [MessageCreateInput!]
  connect: [MessageWhereUniqueInput!]
}

"""An edge in a connection."""
type MessageEdge {
  """The item at the end of the edge."""
  node: Message!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  body_ASC
  body_DESC
  parentId_ASC
  parentId_DESC
  url_ASC
  url_DESC
  filetype_ASC
  filetype_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  body: String!
  parentId: ID!
  url: String!
  filetype: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
}

input MessageUpdateDataInput {
  body: String
  parentId: ID
  url: String
  filetype: String
  author: UserUpdateOneRequiredInput
}

input MessageUpdateInput {
  body: String
  parentId: ID
  url: String
  filetype: String
  author: UserUpdateOneRequiredInput
}

input MessageUpdateManyInput {
  create: [MessageCreateInput!]
  connect: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  delete: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueNestedInput!]
  upsert: [MessageUpsertWithWhereUniqueNestedInput!]
}

input MessageUpdateManyMutationInput {
  body: String
  parentId: ID
  url: String
  filetype: String
}

input MessageUpdateWithWhereUniqueNestedInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateDataInput!
}

input MessageUpsertWithWhereUniqueNestedInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateDataInput!
  create: MessageCreateInput!
}

input MessageWhereInput {
  """Logical AND on all given filters."""
  AND: [MessageWhereInput!]

  """Logical OR on all given filters."""
  OR: [MessageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MessageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  body: String

  """All values that are not equal to given value."""
  body_not: String

  """All values that are contained in given list."""
  body_in: [String!]

  """All values that are not contained in given list."""
  body_not_in: [String!]

  """All values less than the given value."""
  body_lt: String

  """All values less than or equal the given value."""
  body_lte: String

  """All values greater than the given value."""
  body_gt: String

  """All values greater than or equal the given value."""
  body_gte: String

  """All values containing the given string."""
  body_contains: String

  """All values not containing the given string."""
  body_not_contains: String

  """All values starting with the given string."""
  body_starts_with: String

  """All values not starting with the given string."""
  body_not_starts_with: String

  """All values ending with the given string."""
  body_ends_with: String

  """All values not ending with the given string."""
  body_not_ends_with: String
  parentId: ID

  """All values that are not equal to given value."""
  parentId_not: ID

  """All values that are contained in given list."""
  parentId_in: [ID!]

  """All values that are not contained in given list."""
  parentId_not_in: [ID!]

  """All values less than the given value."""
  parentId_lt: ID

  """All values less than or equal the given value."""
  parentId_lte: ID

  """All values greater than the given value."""
  parentId_gt: ID

  """All values greater than or equal the given value."""
  parentId_gte: ID

  """All values containing the given string."""
  parentId_contains: ID

  """All values not containing the given string."""
  parentId_not_contains: ID

  """All values starting with the given string."""
  parentId_starts_with: ID

  """All values not starting with the given string."""
  parentId_not_starts_with: ID

  """All values ending with the given string."""
  parentId_ends_with: ID

  """All values not ending with the given string."""
  parentId_not_ends_with: ID
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  filetype: String

  """All values that are not equal to given value."""
  filetype_not: String

  """All values that are contained in given list."""
  filetype_in: [String!]

  """All values that are not contained in given list."""
  filetype_not_in: [String!]

  """All values less than the given value."""
  filetype_lt: String

  """All values less than or equal the given value."""
  filetype_lte: String

  """All values greater than the given value."""
  filetype_gt: String

  """All values greater than or equal the given value."""
  filetype_gte: String

  """All values containing the given string."""
  filetype_contains: String

  """All values not containing the given string."""
  filetype_not_contains: String

  """All values starting with the given string."""
  filetype_starts_with: String

  """All values not starting with the given string."""
  filetype_not_starts_with: String

  """All values ending with the given string."""
  filetype_ends_with: String

  """All values not ending with the given string."""
  filetype_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  author: UserWhereInput
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createNotification(data: NotificationCreateInput!): Notification!
  createTeam(data: TeamCreateInput!): Team!
  createRating(data: RatingCreateInput!): Rating!
  createChannel(data: ChannelCreateInput!): Channel!
  createFile(data: FileCreateInput!): File!
  createComment(data: CommentCreateInput!): Comment!
  createMessage(data: MessageCreateInput!): Message!
  createUser(data: UserCreateInput!): User!
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateRating(data: RatingUpdateInput!, where: RatingWhereUniqueInput!): Rating
  updateChannel(data: ChannelUpdateInput!, where: ChannelWhereUniqueInput!): Channel
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteRating(where: RatingWhereUniqueInput!): Rating
  deleteChannel(where: ChannelWhereUniqueInput!): Channel
  deleteFile(where: FileWhereUniqueInput!): File
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteUser(where: UserWhereUniqueInput!): User
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  upsertRating(where: RatingWhereUniqueInput!, create: RatingCreateInput!, update: RatingUpdateInput!): Rating!
  upsertChannel(where: ChannelWhereUniqueInput!, create: ChannelCreateInput!, update: ChannelUpdateInput!): Channel!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyNotifications(data: NotificationUpdateManyMutationInput!, where: NotificationWhereInput): BatchPayload!
  updateManyTeams(data: TeamUpdateManyMutationInput!, where: TeamWhereInput): BatchPayload!
  updateManyRatings(data: RatingUpdateManyMutationInput!, where: RatingWhereInput): BatchPayload!
  updateManyChannels(data: ChannelUpdateManyMutationInput!, where: ChannelWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  deleteManyRatings(where: RatingWhereInput): BatchPayload!
  deleteManyChannels(where: ChannelWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Notification implements Node {
  id: ID!
  message: String!
  author: User!
}

"""A connection to a list of items."""
type NotificationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NotificationEdge]!
  aggregate: AggregateNotification!
}

input NotificationCreateInput {
  message: String!
  author: UserCreateOneWithoutNotificationsInput!
}

input NotificationCreateManyWithoutAuthorInput {
  create: [NotificationCreateWithoutAuthorInput!]
  connect: [NotificationWhereUniqueInput!]
}

input NotificationCreateWithoutAuthorInput {
  message: String!
}

"""An edge in a connection."""
type NotificationEdge {
  """The item at the end of the edge."""
  node: Notification!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NotificationOrderByInput {
  id_ASC
  id_DESC
  message_ASC
  message_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type NotificationPreviousValues {
  id: ID!
  message: String!
}

type NotificationSubscriptionPayload {
  mutation: MutationType!
  node: Notification
  updatedFields: [String!]
  previousValues: NotificationPreviousValues
}

input NotificationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NotificationWhereInput
}

input NotificationUpdateInput {
  message: String
  author: UserUpdateOneRequiredWithoutNotificationsInput
}

input NotificationUpdateManyMutationInput {
  message: String
}

input NotificationUpdateManyWithoutAuthorInput {
  create: [NotificationCreateWithoutAuthorInput!]
  connect: [NotificationWhereUniqueInput!]
  disconnect: [NotificationWhereUniqueInput!]
  delete: [NotificationWhereUniqueInput!]
  update: [NotificationUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [NotificationUpsertWithWhereUniqueWithoutAuthorInput!]
}

input NotificationUpdateWithoutAuthorDataInput {
  message: String
}

input NotificationUpdateWithWhereUniqueWithoutAuthorInput {
  where: NotificationWhereUniqueInput!
  data: NotificationUpdateWithoutAuthorDataInput!
}

input NotificationUpsertWithWhereUniqueWithoutAuthorInput {
  where: NotificationWhereUniqueInput!
  update: NotificationUpdateWithoutAuthorDataInput!
  create: NotificationCreateWithoutAuthorInput!
}

input NotificationWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  author: UserWhereInput
}

input NotificationWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  ratings(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rating]!
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  notification(where: NotificationWhereUniqueInput!): Notification
  team(where: TeamWhereUniqueInput!): Team
  rating(where: RatingWhereUniqueInput!): Rating
  channel(where: ChannelWhereUniqueInput!): Channel
  file(where: FileWhereUniqueInput!): File
  comment(where: CommentWhereUniqueInput!): Comment
  message(where: MessageWhereUniqueInput!): Message
  user(where: UserWhereUniqueInput!): User
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  ratingsConnection(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RatingConnection!
  channelsConnection(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChannelConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Rating implements Node {
  id: ID!
  vote: Int!
  author(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""A connection to a list of items."""
type RatingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RatingEdge]!
  aggregate: AggregateRating!
}

input RatingCreateInput {
  vote: Int!
  author: UserCreateManyInput
}

input RatingCreateOneInput {
  create: RatingCreateInput
  connect: RatingWhereUniqueInput
}

"""An edge in a connection."""
type RatingEdge {
  """The item at the end of the edge."""
  node: Rating!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RatingOrderByInput {
  id_ASC
  id_DESC
  vote_ASC
  vote_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type RatingPreviousValues {
  id: ID!
  vote: Int!
}

type RatingSubscriptionPayload {
  mutation: MutationType!
  node: Rating
  updatedFields: [String!]
  previousValues: RatingPreviousValues
}

input RatingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RatingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RatingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RatingSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RatingWhereInput
}

input RatingUpdateDataInput {
  vote: Int
  author: UserUpdateManyInput
}

input RatingUpdateInput {
  vote: Int
  author: UserUpdateManyInput
}

input RatingUpdateManyMutationInput {
  vote: Int
}

input RatingUpdateOneRequiredInput {
  create: RatingCreateInput
  connect: RatingWhereUniqueInput
  update: RatingUpdateDataInput
  upsert: RatingUpsertNestedInput
}

input RatingUpsertNestedInput {
  update: RatingUpdateDataInput!
  create: RatingCreateInput!
}

input RatingWhereInput {
  """Logical AND on all given filters."""
  AND: [RatingWhereInput!]

  """Logical OR on all given filters."""
  OR: [RatingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RatingWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  vote: Int

  """All values that are not equal to given value."""
  vote_not: Int

  """All values that are contained in given list."""
  vote_in: [Int!]

  """All values that are not contained in given list."""
  vote_not_in: [Int!]

  """All values less than the given value."""
  vote_lt: Int

  """All values less than or equal the given value."""
  vote_lte: Int

  """All values greater than the given value."""
  vote_gt: Int

  """All values greater than or equal the given value."""
  vote_gte: Int
  author_every: UserWhereInput
  author_some: UserWhereInput
  author_none: UserWhereInput
}

input RatingWhereUniqueInput {
  id: ID
}

type Subscription {
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  rating(where: RatingSubscriptionWhereInput): RatingSubscriptionPayload
  channel(where: ChannelSubscriptionWhereInput): ChannelSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Team implements Node {
  id: ID!
  name: String!
  slug: String!
  moderators(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  author: User!
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel!]
  createdAt: DateTime!
  updatedAt: DateTime!
  confirmed: Boolean!
  online: Boolean!
}

"""A connection to a list of items."""
type TeamConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  name: String!
  slug: String!
  confirmed: Boolean
  online: Boolean
  moderators: UserCreateManyInput
  author: UserCreateOneWithoutOwned_teamsInput!
  members: UserCreateManyWithoutTeamsInput
  channels: ChannelCreateManyInput
}

input TeamCreateManyWithoutAuthorInput {
  create: [TeamCreateWithoutAuthorInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateManyWithoutMembersInput {
  create: [TeamCreateWithoutMembersInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateWithoutAuthorInput {
  name: String!
  slug: String!
  confirmed: Boolean
  online: Boolean
  moderators: UserCreateManyInput
  members: UserCreateManyWithoutTeamsInput
  channels: ChannelCreateManyInput
}

input TeamCreateWithoutMembersInput {
  name: String!
  slug: String!
  confirmed: Boolean
  online: Boolean
  moderators: UserCreateManyInput
  author: UserCreateOneWithoutOwned_teamsInput!
  channels: ChannelCreateManyInput
}

"""An edge in a connection."""
type TeamEdge {
  """The item at the end of the edge."""
  node: Team!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  confirmed_ASC
  confirmed_DESC
  online_ASC
  online_DESC
}

type TeamPreviousValues {
  id: ID!
  name: String!
  slug: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  confirmed: Boolean!
  online: Boolean!
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TeamSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TeamSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TeamSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TeamWhereInput
}

input TeamUpdateInput {
  name: String
  slug: String
  confirmed: Boolean
  online: Boolean
  moderators: UserUpdateManyInput
  author: UserUpdateOneRequiredWithoutOwned_teamsInput
  members: UserUpdateManyWithoutTeamsInput
  channels: ChannelUpdateManyInput
}

input TeamUpdateManyMutationInput {
  name: String
  slug: String
  confirmed: Boolean
  online: Boolean
}

input TeamUpdateManyWithoutAuthorInput {
  create: [TeamCreateWithoutAuthorInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  delete: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutAuthorInput!]
}

input TeamUpdateManyWithoutMembersInput {
  create: [TeamCreateWithoutMembersInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  delete: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutMembersInput!]
}

input TeamUpdateWithoutAuthorDataInput {
  name: String
  slug: String
  confirmed: Boolean
  online: Boolean
  moderators: UserUpdateManyInput
  members: UserUpdateManyWithoutTeamsInput
  channels: ChannelUpdateManyInput
}

input TeamUpdateWithoutMembersDataInput {
  name: String
  slug: String
  confirmed: Boolean
  online: Boolean
  moderators: UserUpdateManyInput
  author: UserUpdateOneRequiredWithoutOwned_teamsInput
  channels: ChannelUpdateManyInput
}

input TeamUpdateWithWhereUniqueWithoutAuthorInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutAuthorDataInput!
}

input TeamUpdateWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutMembersDataInput!
}

input TeamUpsertWithWhereUniqueWithoutAuthorInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutAuthorDataInput!
  create: TeamCreateWithoutAuthorInput!
}

input TeamUpsertWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutMembersDataInput!
  create: TeamCreateWithoutMembersInput!
}

input TeamWhereInput {
  """Logical AND on all given filters."""
  AND: [TeamWhereInput!]

  """Logical OR on all given filters."""
  OR: [TeamWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TeamWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  confirmed: Boolean

  """All values that are not equal to given value."""
  confirmed_not: Boolean
  online: Boolean

  """All values that are not equal to given value."""
  online_not: Boolean
  moderators_every: UserWhereInput
  moderators_some: UserWhereInput
  moderators_none: UserWhereInput
  author: UserWhereInput
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  channels_every: ChannelWhereInput
  channels_some: ChannelWhereInput
  channels_none: ChannelWhereInput
}

input TeamWhereUniqueInput {
  id: ID
  name: String
}

type User implements Node {
  id: ID!
  email: String!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
  set_private: Boolean!
  username: String!
  password: String!
  avatar_url: File!
  confirmed: Boolean!
  online: Boolean!
  friends(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  friend_requests(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  createdAt: DateTime!
  updatedAt: DateTime!
  role: UserRole!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel!]
  owned_teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  owned_channels(where: ChannelWhereInput, orderBy: ChannelOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Channel!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  set_private: Boolean
  username: String!
  password: String!
  confirmed: Boolean
  online: Boolean
  role: UserRole!
  notifications: NotificationCreateManyWithoutAuthorInput
  avatar_url: FileCreateOneInput!
  friends: UserCreateManyInput
  friend_requests: UserCreateManyInput
  teams: TeamCreateManyWithoutMembersInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutChannelsInput {
  create: [UserCreateWithoutChannelsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutTeamsInput {
  create: [UserCreateWithoutTeamsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwned_channelsInput {
  create: UserCreateWithoutOwned_channelsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOwned_teamsInput {
  create: UserCreateWithoutOwned_teamsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutChannelsInput {
  email: String!
  set_private: Boolean
  username: String!
  password: String!
  confirmed: Boolean
  online: Boolean
  role: UserRole!
  notifications: NotificationCreateManyWithoutAuthorInput
  avatar_url: FileCreateOneInput!
  friends: UserCreateManyInput
  friend_requests: UserCreateManyInput
  teams: TeamCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

input UserCreateWithoutNotificationsInput {
  email: String!
  set_private: Boolean
  username: String!
  password: String!
  confirmed: Boolean
  online: Boolean
  role: UserRole!
  avatar_url: FileCreateOneInput!
  friends: UserCreateManyInput
  friend_requests: UserCreateManyInput
  teams: TeamCreateManyWithoutMembersInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

input UserCreateWithoutOwned_channelsInput {
  email: String!
  set_private: Boolean
  username: String!
  password: String!
  confirmed: Boolean
  online: Boolean
  role: UserRole!
  notifications: NotificationCreateManyWithoutAuthorInput
  avatar_url: FileCreateOneInput!
  friends: UserCreateManyInput
  friend_requests: UserCreateManyInput
  teams: TeamCreateManyWithoutMembersInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
}

input UserCreateWithoutOwned_teamsInput {
  email: String!
  set_private: Boolean
  username: String!
  password: String!
  confirmed: Boolean
  online: Boolean
  role: UserRole!
  notifications: NotificationCreateManyWithoutAuthorInput
  avatar_url: FileCreateOneInput!
  friends: UserCreateManyInput
  friend_requests: UserCreateManyInput
  teams: TeamCreateManyWithoutMembersInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

input UserCreateWithoutTeamsInput {
  email: String!
  set_private: Boolean
  username: String!
  password: String!
  confirmed: Boolean
  online: Boolean
  role: UserRole!
  notifications: NotificationCreateManyWithoutAuthorInput
  avatar_url: FileCreateOneInput!
  friends: UserCreateManyInput
  friend_requests: UserCreateManyInput
  channels: ChannelCreateManyWithoutMembersInput
  owned_teams: TeamCreateManyWithoutAuthorInput
  owned_channels: ChannelCreateManyWithoutAuthorInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  set_private_ASC
  set_private_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  confirmed_ASC
  confirmed_DESC
  online_ASC
  online_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  role_ASC
  role_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  set_private: Boolean!
  username: String!
  password: String!
  confirmed: Boolean!
  online: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
  role: UserRole!
}

enum UserRole {
  ADMIN
  MODERATOR
  USER
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  set_private: Boolean
  username: String
  password: String
  confirmed: Boolean
  online: Boolean
  role: UserRole
  notifications: NotificationUpdateManyWithoutAuthorInput
  avatar_url: FileUpdateOneRequiredInput
  friends: UserUpdateManyInput
  friend_requests: UserUpdateManyInput
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  email: String
  set_private: Boolean
  username: String
  password: String
  confirmed: Boolean
  online: Boolean
  role: UserRole
  notifications: NotificationUpdateManyWithoutAuthorInput
  avatar_url: FileUpdateOneRequiredInput
  friends: UserUpdateManyInput
  friend_requests: UserUpdateManyInput
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
}

input UserUpdateManyMutationInput {
  email: String
  set_private: Boolean
  username: String
  password: String
  confirmed: Boolean
  online: Boolean
  role: UserRole
}

input UserUpdateManyWithoutChannelsInput {
  create: [UserCreateWithoutChannelsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutChannelsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutChannelsInput!]
}

input UserUpdateManyWithoutTeamsInput {
  create: [UserCreateWithoutTeamsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTeamsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTeamsInput!]
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneRequiredWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutNotificationsDataInput
  upsert: UserUpsertWithoutNotificationsInput
}

input UserUpdateOneRequiredWithoutOwned_channelsInput {
  create: UserCreateWithoutOwned_channelsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutOwned_channelsDataInput
  upsert: UserUpsertWithoutOwned_channelsInput
}

input UserUpdateOneRequiredWithoutOwned_teamsInput {
  create: UserCreateWithoutOwned_teamsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutOwned_teamsDataInput
  upsert: UserUpsertWithoutOwned_teamsInput
}

input UserUpdateWithoutChannelsDataInput {
  email: String
  set_private: Boolean
  username: String
  password: String
  confirmed: Boolean
  online: Boolean
  role: UserRole
  notifications: NotificationUpdateManyWithoutAuthorInput
  avatar_url: FileUpdateOneRequiredInput
  friends: UserUpdateManyInput
  friend_requests: UserUpdateManyInput
  teams: TeamUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutNotificationsDataInput {
  email: String
  set_private: Boolean
  username: String
  password: String
  confirmed: Boolean
  online: Boolean
  role: UserRole
  avatar_url: FileUpdateOneRequiredInput
  friends: UserUpdateManyInput
  friend_requests: UserUpdateManyInput
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutOwned_channelsDataInput {
  email: String
  set_private: Boolean
  username: String
  password: String
  confirmed: Boolean
  online: Boolean
  role: UserRole
  notifications: NotificationUpdateManyWithoutAuthorInput
  avatar_url: FileUpdateOneRequiredInput
  friends: UserUpdateManyInput
  friend_requests: UserUpdateManyInput
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutOwned_teamsDataInput {
  email: String
  set_private: Boolean
  username: String
  password: String
  confirmed: Boolean
  online: Boolean
  role: UserRole
  notifications: NotificationUpdateManyWithoutAuthorInput
  avatar_url: FileUpdateOneRequiredInput
  friends: UserUpdateManyInput
  friend_requests: UserUpdateManyInput
  teams: TeamUpdateManyWithoutMembersInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutTeamsDataInput {
  email: String
  set_private: Boolean
  username: String
  password: String
  confirmed: Boolean
  online: Boolean
  role: UserRole
  notifications: NotificationUpdateManyWithoutAuthorInput
  avatar_url: FileUpdateOneRequiredInput
  friends: UserUpdateManyInput
  friend_requests: UserUpdateManyInput
  channels: ChannelUpdateManyWithoutMembersInput
  owned_teams: TeamUpdateManyWithoutAuthorInput
  owned_channels: ChannelUpdateManyWithoutAuthorInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateWithWhereUniqueWithoutChannelsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutChannelsDataInput!
}

input UserUpdateWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTeamsDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput!
  create: UserCreateWithoutNotificationsInput!
}

input UserUpsertWithoutOwned_channelsInput {
  update: UserUpdateWithoutOwned_channelsDataInput!
  create: UserCreateWithoutOwned_channelsInput!
}

input UserUpsertWithoutOwned_teamsInput {
  update: UserUpdateWithoutOwned_teamsDataInput!
  create: UserCreateWithoutOwned_teamsInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutChannelsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutChannelsDataInput!
  create: UserCreateWithoutChannelsInput!
}

input UserUpsertWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTeamsDataInput!
  create: UserCreateWithoutTeamsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  set_private: Boolean

  """All values that are not equal to given value."""
  set_private_not: Boolean
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  confirmed: Boolean

  """All values that are not equal to given value."""
  confirmed_not: Boolean
  online: Boolean

  """All values that are not equal to given value."""
  online_not: Boolean
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  role: UserRole

  """All values that are not equal to given value."""
  role_not: UserRole

  """All values that are contained in given list."""
  role_in: [UserRole!]

  """All values that are not contained in given list."""
  role_not_in: [UserRole!]
  notifications_every: NotificationWhereInput
  notifications_some: NotificationWhereInput
  notifications_none: NotificationWhereInput
  avatar_url: FileWhereInput
  friends_every: UserWhereInput
  friends_some: UserWhereInput
  friends_none: UserWhereInput
  friend_requests_every: UserWhereInput
  friend_requests_some: UserWhereInput
  friend_requests_none: UserWhereInput
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
  channels_every: ChannelWhereInput
  channels_some: ChannelWhereInput
  channels_none: ChannelWhereInput
  owned_teams_every: TeamWhereInput
  owned_teams_some: TeamWhereInput
  owned_teams_none: TeamWhereInput
  owned_channels_every: ChannelWhereInput
  owned_channels_some: ChannelWhereInput
  owned_channels_none: ChannelWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserRole =   'ADMIN' |
  'MODERATOR' |
  'USER'

export type NotificationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'message_ASC' |
  'message_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'set_private_ASC' |
  'set_private_DESC' |
  'username_ASC' |
  'username_DESC' |
  'password_ASC' |
  'password_DESC' |
  'confirmed_ASC' |
  'confirmed_DESC' |
  'online_ASC' |
  'online_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'role_ASC' |
  'role_DESC'

export type TeamOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'confirmed_ASC' |
  'confirmed_DESC' |
  'online_ASC' |
  'online_DESC'

export type ChannelOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'public_ASC' |
  'public_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MessageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'body_ASC' |
  'body_DESC' |
  'parentId_ASC' |
  'parentId_DESC' |
  'url_ASC' |
  'url_DESC' |
  'filetype_ASC' |
  'filetype_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type RatingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'vote_ASC' |
  'vote_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'filename_ASC' |
  'filename_DESC' |
  'mimetype_ASC' |
  'mimetype_DESC' |
  'encoding_ASC' |
  'encoding_DESC' |
  'key_ASC' |
  'key_DESC' |
  'ETag_ASC' |
  'ETag_DESC' |
  'url_ASC' |
  'url_DESC'

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'body_ASC' |
  'body_DESC' |
  'parentId_ASC' |
  'parentId_DESC' |
  'pageId_ASC' |
  'pageId_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface NotificationWhereInput {
  AND?: NotificationWhereInput[] | NotificationWhereInput
  OR?: NotificationWhereInput[] | NotificationWhereInput
  NOT?: NotificationWhereInput[] | NotificationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  message?: String
  message_not?: String
  message_in?: String[] | String
  message_not_in?: String[] | String
  message_lt?: String
  message_lte?: String
  message_gt?: String
  message_gte?: String
  message_contains?: String
  message_not_contains?: String
  message_starts_with?: String
  message_not_starts_with?: String
  message_ends_with?: String
  message_not_ends_with?: String
  author?: UserWhereInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  set_private?: Boolean
  set_private_not?: Boolean
  username?: String
  username_not?: String
  username_in?: String[] | String
  username_not_in?: String[] | String
  username_lt?: String
  username_lte?: String
  username_gt?: String
  username_gte?: String
  username_contains?: String
  username_not_contains?: String
  username_starts_with?: String
  username_not_starts_with?: String
  username_ends_with?: String
  username_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  confirmed?: Boolean
  confirmed_not?: Boolean
  online?: Boolean
  online_not?: Boolean
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  role?: UserRole
  role_not?: UserRole
  role_in?: UserRole[] | UserRole
  role_not_in?: UserRole[] | UserRole
  notifications_every?: NotificationWhereInput
  notifications_some?: NotificationWhereInput
  notifications_none?: NotificationWhereInput
  avatar_url?: FileWhereInput
  friends_every?: UserWhereInput
  friends_some?: UserWhereInput
  friends_none?: UserWhereInput
  friend_requests_every?: UserWhereInput
  friend_requests_some?: UserWhereInput
  friend_requests_none?: UserWhereInput
  teams_every?: TeamWhereInput
  teams_some?: TeamWhereInput
  teams_none?: TeamWhereInput
  channels_every?: ChannelWhereInput
  channels_some?: ChannelWhereInput
  channels_none?: ChannelWhereInput
  owned_teams_every?: TeamWhereInput
  owned_teams_some?: TeamWhereInput
  owned_teams_none?: TeamWhereInput
  owned_channels_every?: ChannelWhereInput
  owned_channels_some?: ChannelWhereInput
  owned_channels_none?: ChannelWhereInput
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput
  OR?: FileWhereInput[] | FileWhereInput
  NOT?: FileWhereInput[] | FileWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  filename?: String
  filename_not?: String
  filename_in?: String[] | String
  filename_not_in?: String[] | String
  filename_lt?: String
  filename_lte?: String
  filename_gt?: String
  filename_gte?: String
  filename_contains?: String
  filename_not_contains?: String
  filename_starts_with?: String
  filename_not_starts_with?: String
  filename_ends_with?: String
  filename_not_ends_with?: String
  mimetype?: String
  mimetype_not?: String
  mimetype_in?: String[] | String
  mimetype_not_in?: String[] | String
  mimetype_lt?: String
  mimetype_lte?: String
  mimetype_gt?: String
  mimetype_gte?: String
  mimetype_contains?: String
  mimetype_not_contains?: String
  mimetype_starts_with?: String
  mimetype_not_starts_with?: String
  mimetype_ends_with?: String
  mimetype_not_ends_with?: String
  encoding?: String
  encoding_not?: String
  encoding_in?: String[] | String
  encoding_not_in?: String[] | String
  encoding_lt?: String
  encoding_lte?: String
  encoding_gt?: String
  encoding_gte?: String
  encoding_contains?: String
  encoding_not_contains?: String
  encoding_starts_with?: String
  encoding_not_starts_with?: String
  encoding_ends_with?: String
  encoding_not_ends_with?: String
  key?: String
  key_not?: String
  key_in?: String[] | String
  key_not_in?: String[] | String
  key_lt?: String
  key_lte?: String
  key_gt?: String
  key_gte?: String
  key_contains?: String
  key_not_contains?: String
  key_starts_with?: String
  key_not_starts_with?: String
  key_ends_with?: String
  key_not_ends_with?: String
  ETag?: String
  ETag_not?: String
  ETag_in?: String[] | String
  ETag_not_in?: String[] | String
  ETag_lt?: String
  ETag_lte?: String
  ETag_gt?: String
  ETag_gte?: String
  ETag_contains?: String
  ETag_not_contains?: String
  ETag_starts_with?: String
  ETag_not_starts_with?: String
  ETag_ends_with?: String
  ETag_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
}

export interface TeamWhereInput {
  AND?: TeamWhereInput[] | TeamWhereInput
  OR?: TeamWhereInput[] | TeamWhereInput
  NOT?: TeamWhereInput[] | TeamWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  confirmed?: Boolean
  confirmed_not?: Boolean
  online?: Boolean
  online_not?: Boolean
  moderators_every?: UserWhereInput
  moderators_some?: UserWhereInput
  moderators_none?: UserWhereInput
  author?: UserWhereInput
  members_every?: UserWhereInput
  members_some?: UserWhereInput
  members_none?: UserWhereInput
  channels_every?: ChannelWhereInput
  channels_some?: ChannelWhereInput
  channels_none?: ChannelWhereInput
}

export interface ChannelWhereInput {
  AND?: ChannelWhereInput[] | ChannelWhereInput
  OR?: ChannelWhereInput[] | ChannelWhereInput
  NOT?: ChannelWhereInput[] | ChannelWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  slug?: String
  slug_not?: String
  slug_in?: String[] | String
  slug_not_in?: String[] | String
  slug_lt?: String
  slug_lte?: String
  slug_gt?: String
  slug_gte?: String
  slug_contains?: String
  slug_not_contains?: String
  slug_starts_with?: String
  slug_not_starts_with?: String
  slug_ends_with?: String
  slug_not_ends_with?: String
  public?: Boolean
  public_not?: Boolean
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  moderators_every?: UserWhereInput
  moderators_some?: UserWhereInput
  moderators_none?: UserWhereInput
  messages_every?: MessageWhereInput
  messages_some?: MessageWhereInput
  messages_none?: MessageWhereInput
  members_every?: UserWhereInput
  members_some?: UserWhereInput
  members_none?: UserWhereInput
  author?: UserWhereInput
}

export interface MessageWhereInput {
  AND?: MessageWhereInput[] | MessageWhereInput
  OR?: MessageWhereInput[] | MessageWhereInput
  NOT?: MessageWhereInput[] | MessageWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  body?: String
  body_not?: String
  body_in?: String[] | String
  body_not_in?: String[] | String
  body_lt?: String
  body_lte?: String
  body_gt?: String
  body_gte?: String
  body_contains?: String
  body_not_contains?: String
  body_starts_with?: String
  body_not_starts_with?: String
  body_ends_with?: String
  body_not_ends_with?: String
  parentId?: ID_Input
  parentId_not?: ID_Input
  parentId_in?: ID_Input[] | ID_Input
  parentId_not_in?: ID_Input[] | ID_Input
  parentId_lt?: ID_Input
  parentId_lte?: ID_Input
  parentId_gt?: ID_Input
  parentId_gte?: ID_Input
  parentId_contains?: ID_Input
  parentId_not_contains?: ID_Input
  parentId_starts_with?: ID_Input
  parentId_not_starts_with?: ID_Input
  parentId_ends_with?: ID_Input
  parentId_not_ends_with?: ID_Input
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  filetype?: String
  filetype_not?: String
  filetype_in?: String[] | String
  filetype_not_in?: String[] | String
  filetype_lt?: String
  filetype_lte?: String
  filetype_gt?: String
  filetype_gte?: String
  filetype_contains?: String
  filetype_not_contains?: String
  filetype_starts_with?: String
  filetype_not_starts_with?: String
  filetype_ends_with?: String
  filetype_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  author?: UserWhereInput
}

export interface RatingWhereInput {
  AND?: RatingWhereInput[] | RatingWhereInput
  OR?: RatingWhereInput[] | RatingWhereInput
  NOT?: RatingWhereInput[] | RatingWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  vote?: Int
  vote_not?: Int
  vote_in?: Int[] | Int
  vote_not_in?: Int[] | Int
  vote_lt?: Int
  vote_lte?: Int
  vote_gt?: Int
  vote_gte?: Int
  author_every?: UserWhereInput
  author_some?: UserWhereInput
  author_none?: UserWhereInput
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | CommentWhereInput
  OR?: CommentWhereInput[] | CommentWhereInput
  NOT?: CommentWhereInput[] | CommentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  body?: String
  body_not?: String
  body_in?: String[] | String
  body_not_in?: String[] | String
  body_lt?: String
  body_lte?: String
  body_gt?: String
  body_gte?: String
  body_contains?: String
  body_not_contains?: String
  body_starts_with?: String
  body_not_starts_with?: String
  body_ends_with?: String
  body_not_ends_with?: String
  parentId?: ID_Input
  parentId_not?: ID_Input
  parentId_in?: ID_Input[] | ID_Input
  parentId_not_in?: ID_Input[] | ID_Input
  parentId_lt?: ID_Input
  parentId_lte?: ID_Input
  parentId_gt?: ID_Input
  parentId_gte?: ID_Input
  parentId_contains?: ID_Input
  parentId_not_contains?: ID_Input
  parentId_starts_with?: ID_Input
  parentId_not_starts_with?: ID_Input
  parentId_ends_with?: ID_Input
  parentId_not_ends_with?: ID_Input
  pageId?: ID_Input
  pageId_not?: ID_Input
  pageId_in?: ID_Input[] | ID_Input
  pageId_not_in?: ID_Input[] | ID_Input
  pageId_lt?: ID_Input
  pageId_lte?: ID_Input
  pageId_gt?: ID_Input
  pageId_gte?: ID_Input
  pageId_contains?: ID_Input
  pageId_not_contains?: ID_Input
  pageId_starts_with?: ID_Input
  pageId_not_starts_with?: ID_Input
  pageId_ends_with?: ID_Input
  pageId_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  repliedTo?: UserWhereInput
  ratings?: RatingWhereInput
  replies_every?: CommentWhereInput
  replies_some?: CommentWhereInput
  replies_none?: CommentWhereInput
  author?: UserWhereInput
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input
}

export interface TeamWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface RatingWhereUniqueInput {
  id?: ID_Input
}

export interface ChannelWhereUniqueInput {
  id?: ID_Input
}

export interface FileWhereUniqueInput {
  id?: ID_Input
}

export interface CommentWhereUniqueInput {
  id?: ID_Input
}

export interface MessageWhereUniqueInput {
  id?: ID_Input
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
  username?: String
}

export interface NotificationCreateInput {
  message: String
  author: UserCreateOneWithoutNotificationsInput
}

export interface UserCreateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateWithoutNotificationsInput {
  email: String
  set_private?: Boolean
  username: String
  password: String
  confirmed?: Boolean
  online?: Boolean
  role: UserRole
  avatar_url: FileCreateOneInput
  friends?: UserCreateManyInput
  friend_requests?: UserCreateManyInput
  teams?: TeamCreateManyWithoutMembersInput
  channels?: ChannelCreateManyWithoutMembersInput
  owned_teams?: TeamCreateManyWithoutAuthorInput
  owned_channels?: ChannelCreateManyWithoutAuthorInput
}

export interface FileCreateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
}

export interface FileCreateInput {
  filename: String
  mimetype: String
  encoding: String
  key: String
  ETag: String
  url: String
}

export interface UserCreateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserCreateInput {
  email: String
  set_private?: Boolean
  username: String
  password: String
  confirmed?: Boolean
  online?: Boolean
  role: UserRole
  notifications?: NotificationCreateManyWithoutAuthorInput
  avatar_url: FileCreateOneInput
  friends?: UserCreateManyInput
  friend_requests?: UserCreateManyInput
  teams?: TeamCreateManyWithoutMembersInput
  channels?: ChannelCreateManyWithoutMembersInput
  owned_teams?: TeamCreateManyWithoutAuthorInput
  owned_channels?: ChannelCreateManyWithoutAuthorInput
}

export interface NotificationCreateManyWithoutAuthorInput {
  create?: NotificationCreateWithoutAuthorInput[] | NotificationCreateWithoutAuthorInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
}

export interface NotificationCreateWithoutAuthorInput {
  message: String
}

export interface TeamCreateManyWithoutMembersInput {
  create?: TeamCreateWithoutMembersInput[] | TeamCreateWithoutMembersInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
}

export interface TeamCreateWithoutMembersInput {
  name: String
  slug: String
  confirmed?: Boolean
  online?: Boolean
  moderators?: UserCreateManyInput
  author: UserCreateOneWithoutOwned_teamsInput
  channels?: ChannelCreateManyInput
}

export interface UserCreateOneWithoutOwned_teamsInput {
  create?: UserCreateWithoutOwned_teamsInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateWithoutOwned_teamsInput {
  email: String
  set_private?: Boolean
  username: String
  password: String
  confirmed?: Boolean
  online?: Boolean
  role: UserRole
  notifications?: NotificationCreateManyWithoutAuthorInput
  avatar_url: FileCreateOneInput
  friends?: UserCreateManyInput
  friend_requests?: UserCreateManyInput
  teams?: TeamCreateManyWithoutMembersInput
  channels?: ChannelCreateManyWithoutMembersInput
  owned_channels?: ChannelCreateManyWithoutAuthorInput
}

export interface ChannelCreateManyWithoutMembersInput {
  create?: ChannelCreateWithoutMembersInput[] | ChannelCreateWithoutMembersInput
  connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
}

export interface ChannelCreateWithoutMembersInput {
  name: String
  slug: String
  public?: Boolean
  moderators?: UserCreateManyInput
  messages?: MessageCreateManyInput
  author: UserCreateOneWithoutOwned_channelsInput
}

export interface MessageCreateManyInput {
  create?: MessageCreateInput[] | MessageCreateInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
}

export interface MessageCreateInput {
  body: String
  parentId: ID_Input
  url: String
  filetype: String
  author: UserCreateOneInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateOneWithoutOwned_channelsInput {
  create?: UserCreateWithoutOwned_channelsInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateWithoutOwned_channelsInput {
  email: String
  set_private?: Boolean
  username: String
  password: String
  confirmed?: Boolean
  online?: Boolean
  role: UserRole
  notifications?: NotificationCreateManyWithoutAuthorInput
  avatar_url: FileCreateOneInput
  friends?: UserCreateManyInput
  friend_requests?: UserCreateManyInput
  teams?: TeamCreateManyWithoutMembersInput
  channels?: ChannelCreateManyWithoutMembersInput
  owned_teams?: TeamCreateManyWithoutAuthorInput
}

export interface TeamCreateManyWithoutAuthorInput {
  create?: TeamCreateWithoutAuthorInput[] | TeamCreateWithoutAuthorInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
}

export interface TeamCreateWithoutAuthorInput {
  name: String
  slug: String
  confirmed?: Boolean
  online?: Boolean
  moderators?: UserCreateManyInput
  members?: UserCreateManyWithoutTeamsInput
  channels?: ChannelCreateManyInput
}

export interface UserCreateManyWithoutTeamsInput {
  create?: UserCreateWithoutTeamsInput[] | UserCreateWithoutTeamsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserCreateWithoutTeamsInput {
  email: String
  set_private?: Boolean
  username: String
  password: String
  confirmed?: Boolean
  online?: Boolean
  role: UserRole
  notifications?: NotificationCreateManyWithoutAuthorInput
  avatar_url: FileCreateOneInput
  friends?: UserCreateManyInput
  friend_requests?: UserCreateManyInput
  channels?: ChannelCreateManyWithoutMembersInput
  owned_teams?: TeamCreateManyWithoutAuthorInput
  owned_channels?: ChannelCreateManyWithoutAuthorInput
}

export interface ChannelCreateManyWithoutAuthorInput {
  create?: ChannelCreateWithoutAuthorInput[] | ChannelCreateWithoutAuthorInput
  connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
}

export interface ChannelCreateWithoutAuthorInput {
  name: String
  slug: String
  public?: Boolean
  moderators?: UserCreateManyInput
  messages?: MessageCreateManyInput
  members?: UserCreateManyWithoutChannelsInput
}

export interface UserCreateManyWithoutChannelsInput {
  create?: UserCreateWithoutChannelsInput[] | UserCreateWithoutChannelsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserCreateWithoutChannelsInput {
  email: String
  set_private?: Boolean
  username: String
  password: String
  confirmed?: Boolean
  online?: Boolean
  role: UserRole
  notifications?: NotificationCreateManyWithoutAuthorInput
  avatar_url: FileCreateOneInput
  friends?: UserCreateManyInput
  friend_requests?: UserCreateManyInput
  teams?: TeamCreateManyWithoutMembersInput
  owned_teams?: TeamCreateManyWithoutAuthorInput
  owned_channels?: ChannelCreateManyWithoutAuthorInput
}

export interface ChannelCreateManyInput {
  create?: ChannelCreateInput[] | ChannelCreateInput
  connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
}

export interface ChannelCreateInput {
  name: String
  slug: String
  public?: Boolean
  moderators?: UserCreateManyInput
  messages?: MessageCreateManyInput
  members?: UserCreateManyWithoutChannelsInput
  author: UserCreateOneWithoutOwned_channelsInput
}

export interface TeamCreateInput {
  name: String
  slug: String
  confirmed?: Boolean
  online?: Boolean
  moderators?: UserCreateManyInput
  author: UserCreateOneWithoutOwned_teamsInput
  members?: UserCreateManyWithoutTeamsInput
  channels?: ChannelCreateManyInput
}

export interface RatingCreateInput {
  vote: Int
  author?: UserCreateManyInput
}

export interface CommentCreateInput {
  body: String
  parentId: ID_Input
  pageId: ID_Input
  repliedTo?: UserCreateOneInput
  ratings: RatingCreateOneInput
  replies?: CommentCreateManyInput
  author: UserCreateOneInput
}

export interface RatingCreateOneInput {
  create?: RatingCreateInput
  connect?: RatingWhereUniqueInput
}

export interface CommentCreateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface NotificationUpdateInput {
  message?: String
  author?: UserUpdateOneRequiredWithoutNotificationsInput
}

export interface UserUpdateOneRequiredWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutNotificationsDataInput
  upsert?: UserUpsertWithoutNotificationsInput
}

export interface UserUpdateWithoutNotificationsDataInput {
  email?: String
  set_private?: Boolean
  username?: String
  password?: String
  confirmed?: Boolean
  online?: Boolean
  role?: UserRole
  avatar_url?: FileUpdateOneRequiredInput
  friends?: UserUpdateManyInput
  friend_requests?: UserUpdateManyInput
  teams?: TeamUpdateManyWithoutMembersInput
  channels?: ChannelUpdateManyWithoutMembersInput
  owned_teams?: TeamUpdateManyWithoutAuthorInput
  owned_channels?: ChannelUpdateManyWithoutAuthorInput
}

export interface FileUpdateOneRequiredInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
  update?: FileUpdateDataInput
  upsert?: FileUpsertNestedInput
}

export interface FileUpdateDataInput {
  filename?: String
  mimetype?: String
  encoding?: String
  key?: String
  ETag?: String
  url?: String
}

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueNestedInput[] | UserUpdateWithWhereUniqueNestedInput
  upsert?: UserUpsertWithWhereUniqueNestedInput[] | UserUpsertWithWhereUniqueNestedInput
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  data: UserUpdateDataInput
}

export interface UserUpdateDataInput {
  email?: String
  set_private?: Boolean
  username?: String
  password?: String
  confirmed?: Boolean
  online?: Boolean
  role?: UserRole
  notifications?: NotificationUpdateManyWithoutAuthorInput
  avatar_url?: FileUpdateOneRequiredInput
  friends?: UserUpdateManyInput
  friend_requests?: UserUpdateManyInput
  teams?: TeamUpdateManyWithoutMembersInput
  channels?: ChannelUpdateManyWithoutMembersInput
  owned_teams?: TeamUpdateManyWithoutAuthorInput
  owned_channels?: ChannelUpdateManyWithoutAuthorInput
}

export interface NotificationUpdateManyWithoutAuthorInput {
  create?: NotificationCreateWithoutAuthorInput[] | NotificationCreateWithoutAuthorInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  disconnect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  delete?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  update?: NotificationUpdateWithWhereUniqueWithoutAuthorInput[] | NotificationUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: NotificationUpsertWithWhereUniqueWithoutAuthorInput[] | NotificationUpsertWithWhereUniqueWithoutAuthorInput
}

export interface NotificationUpdateWithWhereUniqueWithoutAuthorInput {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateWithoutAuthorDataInput
}

export interface NotificationUpdateWithoutAuthorDataInput {
  message?: String
}

export interface NotificationUpsertWithWhereUniqueWithoutAuthorInput {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateWithoutAuthorDataInput
  create: NotificationCreateWithoutAuthorInput
}

export interface TeamUpdateManyWithoutMembersInput {
  create?: TeamCreateWithoutMembersInput[] | TeamCreateWithoutMembersInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  disconnect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  delete?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  update?: TeamUpdateWithWhereUniqueWithoutMembersInput[] | TeamUpdateWithWhereUniqueWithoutMembersInput
  upsert?: TeamUpsertWithWhereUniqueWithoutMembersInput[] | TeamUpsertWithWhereUniqueWithoutMembersInput
}

export interface TeamUpdateWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput
  data: TeamUpdateWithoutMembersDataInput
}

export interface TeamUpdateWithoutMembersDataInput {
  name?: String
  slug?: String
  confirmed?: Boolean
  online?: Boolean
  moderators?: UserUpdateManyInput
  author?: UserUpdateOneRequiredWithoutOwned_teamsInput
  channels?: ChannelUpdateManyInput
}

export interface UserUpdateOneRequiredWithoutOwned_teamsInput {
  create?: UserCreateWithoutOwned_teamsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutOwned_teamsDataInput
  upsert?: UserUpsertWithoutOwned_teamsInput
}

export interface UserUpdateWithoutOwned_teamsDataInput {
  email?: String
  set_private?: Boolean
  username?: String
  password?: String
  confirmed?: Boolean
  online?: Boolean
  role?: UserRole
  notifications?: NotificationUpdateManyWithoutAuthorInput
  avatar_url?: FileUpdateOneRequiredInput
  friends?: UserUpdateManyInput
  friend_requests?: UserUpdateManyInput
  teams?: TeamUpdateManyWithoutMembersInput
  channels?: ChannelUpdateManyWithoutMembersInput
  owned_channels?: ChannelUpdateManyWithoutAuthorInput
}

export interface ChannelUpdateManyWithoutMembersInput {
  create?: ChannelCreateWithoutMembersInput[] | ChannelCreateWithoutMembersInput
  connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  disconnect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  delete?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  update?: ChannelUpdateWithWhereUniqueWithoutMembersInput[] | ChannelUpdateWithWhereUniqueWithoutMembersInput
  upsert?: ChannelUpsertWithWhereUniqueWithoutMembersInput[] | ChannelUpsertWithWhereUniqueWithoutMembersInput
}

export interface ChannelUpdateWithWhereUniqueWithoutMembersInput {
  where: ChannelWhereUniqueInput
  data: ChannelUpdateWithoutMembersDataInput
}

export interface ChannelUpdateWithoutMembersDataInput {
  name?: String
  slug?: String
  public?: Boolean
  moderators?: UserUpdateManyInput
  messages?: MessageUpdateManyInput
  author?: UserUpdateOneRequiredWithoutOwned_channelsInput
}

export interface MessageUpdateManyInput {
  create?: MessageCreateInput[] | MessageCreateInput
  connect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  disconnect?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  delete?: MessageWhereUniqueInput[] | MessageWhereUniqueInput
  update?: MessageUpdateWithWhereUniqueNestedInput[] | MessageUpdateWithWhereUniqueNestedInput
  upsert?: MessageUpsertWithWhereUniqueNestedInput[] | MessageUpsertWithWhereUniqueNestedInput
}

export interface MessageUpdateWithWhereUniqueNestedInput {
  where: MessageWhereUniqueInput
  data: MessageUpdateDataInput
}

export interface MessageUpdateDataInput {
  body?: String
  parentId?: ID_Input
  url?: String
  filetype?: String
  author?: UserUpdateOneRequiredInput
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface MessageUpsertWithWhereUniqueNestedInput {
  where: MessageWhereUniqueInput
  update: MessageUpdateDataInput
  create: MessageCreateInput
}

export interface UserUpdateOneRequiredWithoutOwned_channelsInput {
  create?: UserCreateWithoutOwned_channelsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutOwned_channelsDataInput
  upsert?: UserUpsertWithoutOwned_channelsInput
}

export interface UserUpdateWithoutOwned_channelsDataInput {
  email?: String
  set_private?: Boolean
  username?: String
  password?: String
  confirmed?: Boolean
  online?: Boolean
  role?: UserRole
  notifications?: NotificationUpdateManyWithoutAuthorInput
  avatar_url?: FileUpdateOneRequiredInput
  friends?: UserUpdateManyInput
  friend_requests?: UserUpdateManyInput
  teams?: TeamUpdateManyWithoutMembersInput
  channels?: ChannelUpdateManyWithoutMembersInput
  owned_teams?: TeamUpdateManyWithoutAuthorInput
}

export interface TeamUpdateManyWithoutAuthorInput {
  create?: TeamCreateWithoutAuthorInput[] | TeamCreateWithoutAuthorInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  disconnect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  delete?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  update?: TeamUpdateWithWhereUniqueWithoutAuthorInput[] | TeamUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: TeamUpsertWithWhereUniqueWithoutAuthorInput[] | TeamUpsertWithWhereUniqueWithoutAuthorInput
}

export interface TeamUpdateWithWhereUniqueWithoutAuthorInput {
  where: TeamWhereUniqueInput
  data: TeamUpdateWithoutAuthorDataInput
}

export interface TeamUpdateWithoutAuthorDataInput {
  name?: String
  slug?: String
  confirmed?: Boolean
  online?: Boolean
  moderators?: UserUpdateManyInput
  members?: UserUpdateManyWithoutTeamsInput
  channels?: ChannelUpdateManyInput
}

export interface UserUpdateManyWithoutTeamsInput {
  create?: UserCreateWithoutTeamsInput[] | UserCreateWithoutTeamsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutTeamsInput[] | UserUpdateWithWhereUniqueWithoutTeamsInput
  upsert?: UserUpsertWithWhereUniqueWithoutTeamsInput[] | UserUpsertWithWhereUniqueWithoutTeamsInput
}

export interface UserUpdateWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutTeamsDataInput
}

export interface UserUpdateWithoutTeamsDataInput {
  email?: String
  set_private?: Boolean
  username?: String
  password?: String
  confirmed?: Boolean
  online?: Boolean
  role?: UserRole
  notifications?: NotificationUpdateManyWithoutAuthorInput
  avatar_url?: FileUpdateOneRequiredInput
  friends?: UserUpdateManyInput
  friend_requests?: UserUpdateManyInput
  channels?: ChannelUpdateManyWithoutMembersInput
  owned_teams?: TeamUpdateManyWithoutAuthorInput
  owned_channels?: ChannelUpdateManyWithoutAuthorInput
}

export interface ChannelUpdateManyWithoutAuthorInput {
  create?: ChannelCreateWithoutAuthorInput[] | ChannelCreateWithoutAuthorInput
  connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  disconnect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  delete?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  update?: ChannelUpdateWithWhereUniqueWithoutAuthorInput[] | ChannelUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: ChannelUpsertWithWhereUniqueWithoutAuthorInput[] | ChannelUpsertWithWhereUniqueWithoutAuthorInput
}

export interface ChannelUpdateWithWhereUniqueWithoutAuthorInput {
  where: ChannelWhereUniqueInput
  data: ChannelUpdateWithoutAuthorDataInput
}

export interface ChannelUpdateWithoutAuthorDataInput {
  name?: String
  slug?: String
  public?: Boolean
  moderators?: UserUpdateManyInput
  messages?: MessageUpdateManyInput
  members?: UserUpdateManyWithoutChannelsInput
}

export interface UserUpdateManyWithoutChannelsInput {
  create?: UserCreateWithoutChannelsInput[] | UserCreateWithoutChannelsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutChannelsInput[] | UserUpdateWithWhereUniqueWithoutChannelsInput
  upsert?: UserUpsertWithWhereUniqueWithoutChannelsInput[] | UserUpsertWithWhereUniqueWithoutChannelsInput
}

export interface UserUpdateWithWhereUniqueWithoutChannelsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutChannelsDataInput
}

export interface UserUpdateWithoutChannelsDataInput {
  email?: String
  set_private?: Boolean
  username?: String
  password?: String
  confirmed?: Boolean
  online?: Boolean
  role?: UserRole
  notifications?: NotificationUpdateManyWithoutAuthorInput
  avatar_url?: FileUpdateOneRequiredInput
  friends?: UserUpdateManyInput
  friend_requests?: UserUpdateManyInput
  teams?: TeamUpdateManyWithoutMembersInput
  owned_teams?: TeamUpdateManyWithoutAuthorInput
  owned_channels?: ChannelUpdateManyWithoutAuthorInput
}

export interface UserUpsertWithWhereUniqueWithoutChannelsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutChannelsDataInput
  create: UserCreateWithoutChannelsInput
}

export interface ChannelUpsertWithWhereUniqueWithoutAuthorInput {
  where: ChannelWhereUniqueInput
  update: ChannelUpdateWithoutAuthorDataInput
  create: ChannelCreateWithoutAuthorInput
}

export interface UserUpsertWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutTeamsDataInput
  create: UserCreateWithoutTeamsInput
}

export interface ChannelUpdateManyInput {
  create?: ChannelCreateInput[] | ChannelCreateInput
  connect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  disconnect?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  delete?: ChannelWhereUniqueInput[] | ChannelWhereUniqueInput
  update?: ChannelUpdateWithWhereUniqueNestedInput[] | ChannelUpdateWithWhereUniqueNestedInput
  upsert?: ChannelUpsertWithWhereUniqueNestedInput[] | ChannelUpsertWithWhereUniqueNestedInput
}

export interface ChannelUpdateWithWhereUniqueNestedInput {
  where: ChannelWhereUniqueInput
  data: ChannelUpdateDataInput
}

export interface ChannelUpdateDataInput {
  name?: String
  slug?: String
  public?: Boolean
  moderators?: UserUpdateManyInput
  messages?: MessageUpdateManyInput
  members?: UserUpdateManyWithoutChannelsInput
  author?: UserUpdateOneRequiredWithoutOwned_channelsInput
}

export interface ChannelUpsertWithWhereUniqueNestedInput {
  where: ChannelWhereUniqueInput
  update: ChannelUpdateDataInput
  create: ChannelCreateInput
}

export interface TeamUpsertWithWhereUniqueWithoutAuthorInput {
  where: TeamWhereUniqueInput
  update: TeamUpdateWithoutAuthorDataInput
  create: TeamCreateWithoutAuthorInput
}

export interface UserUpsertWithoutOwned_channelsInput {
  update: UserUpdateWithoutOwned_channelsDataInput
  create: UserCreateWithoutOwned_channelsInput
}

export interface ChannelUpsertWithWhereUniqueWithoutMembersInput {
  where: ChannelWhereUniqueInput
  update: ChannelUpdateWithoutMembersDataInput
  create: ChannelCreateWithoutMembersInput
}

export interface UserUpsertWithoutOwned_teamsInput {
  update: UserUpdateWithoutOwned_teamsDataInput
  create: UserCreateWithoutOwned_teamsInput
}

export interface TeamUpsertWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput
  update: TeamUpdateWithoutMembersDataInput
  create: TeamCreateWithoutMembersInput
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput
  create: UserCreateWithoutNotificationsInput
}

export interface TeamUpdateInput {
  name?: String
  slug?: String
  confirmed?: Boolean
  online?: Boolean
  moderators?: UserUpdateManyInput
  author?: UserUpdateOneRequiredWithoutOwned_teamsInput
  members?: UserUpdateManyWithoutTeamsInput
  channels?: ChannelUpdateManyInput
}

export interface RatingUpdateInput {
  vote?: Int
  author?: UserUpdateManyInput
}

export interface ChannelUpdateInput {
  name?: String
  slug?: String
  public?: Boolean
  moderators?: UserUpdateManyInput
  messages?: MessageUpdateManyInput
  members?: UserUpdateManyWithoutChannelsInput
  author?: UserUpdateOneRequiredWithoutOwned_channelsInput
}

export interface FileUpdateInput {
  filename?: String
  mimetype?: String
  encoding?: String
  key?: String
  ETag?: String
  url?: String
}

export interface CommentUpdateInput {
  body?: String
  parentId?: ID_Input
  pageId?: ID_Input
  repliedTo?: UserUpdateOneInput
  ratings?: RatingUpdateOneRequiredInput
  replies?: CommentUpdateManyInput
  author?: UserUpdateOneRequiredInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface RatingUpdateOneRequiredInput {
  create?: RatingCreateInput
  connect?: RatingWhereUniqueInput
  update?: RatingUpdateDataInput
  upsert?: RatingUpsertNestedInput
}

export interface RatingUpdateDataInput {
  vote?: Int
  author?: UserUpdateManyInput
}

export interface RatingUpsertNestedInput {
  update: RatingUpdateDataInput
  create: RatingCreateInput
}

export interface CommentUpdateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueNestedInput[] | CommentUpdateWithWhereUniqueNestedInput
  upsert?: CommentUpsertWithWhereUniqueNestedInput[] | CommentUpsertWithWhereUniqueNestedInput
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateDataInput
}

export interface CommentUpdateDataInput {
  body?: String
  parentId?: ID_Input
  pageId?: ID_Input
  repliedTo?: UserUpdateOneInput
  ratings?: RatingUpdateOneRequiredInput
  replies?: CommentUpdateManyInput
  author?: UserUpdateOneRequiredInput
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface MessageUpdateInput {
  body?: String
  parentId?: ID_Input
  url?: String
  filetype?: String
  author?: UserUpdateOneRequiredInput
}

export interface UserUpdateInput {
  email?: String
  set_private?: Boolean
  username?: String
  password?: String
  confirmed?: Boolean
  online?: Boolean
  role?: UserRole
  notifications?: NotificationUpdateManyWithoutAuthorInput
  avatar_url?: FileUpdateOneRequiredInput
  friends?: UserUpdateManyInput
  friend_requests?: UserUpdateManyInput
  teams?: TeamUpdateManyWithoutMembersInput
  channels?: ChannelUpdateManyWithoutMembersInput
  owned_teams?: TeamUpdateManyWithoutAuthorInput
  owned_channels?: ChannelUpdateManyWithoutAuthorInput
}

export interface NotificationUpdateManyMutationInput {
  message?: String
}

export interface TeamUpdateManyMutationInput {
  name?: String
  slug?: String
  confirmed?: Boolean
  online?: Boolean
}

export interface RatingUpdateManyMutationInput {
  vote?: Int
}

export interface ChannelUpdateManyMutationInput {
  name?: String
  slug?: String
  public?: Boolean
}

export interface FileUpdateManyMutationInput {
  filename?: String
  mimetype?: String
  encoding?: String
  key?: String
  ETag?: String
  url?: String
}

export interface CommentUpdateManyMutationInput {
  body?: String
  parentId?: ID_Input
  pageId?: ID_Input
}

export interface MessageUpdateManyMutationInput {
  body?: String
  parentId?: ID_Input
  url?: String
  filetype?: String
}

export interface UserUpdateManyMutationInput {
  email?: String
  set_private?: Boolean
  username?: String
  password?: String
  confirmed?: Boolean
  online?: Boolean
  role?: UserRole
}

export interface NotificationSubscriptionWhereInput {
  AND?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  OR?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  NOT?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: NotificationWhereInput
}

export interface TeamSubscriptionWhereInput {
  AND?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput
  OR?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput
  NOT?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TeamWhereInput
}

export interface RatingSubscriptionWhereInput {
  AND?: RatingSubscriptionWhereInput[] | RatingSubscriptionWhereInput
  OR?: RatingSubscriptionWhereInput[] | RatingSubscriptionWhereInput
  NOT?: RatingSubscriptionWhereInput[] | RatingSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RatingWhereInput
}

export interface ChannelSubscriptionWhereInput {
  AND?: ChannelSubscriptionWhereInput[] | ChannelSubscriptionWhereInput
  OR?: ChannelSubscriptionWhereInput[] | ChannelSubscriptionWhereInput
  NOT?: ChannelSubscriptionWhereInput[] | ChannelSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ChannelWhereInput
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FileWhereInput
}

export interface CommentSubscriptionWhereInput {
  AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  NOT?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CommentWhereInput
}

export interface MessageSubscriptionWhereInput {
  AND?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  OR?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  NOT?: MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MessageWhereInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface Notification extends Node {
  id: ID_Output
  message: String
  author: User
}

export interface User extends Node {
  id: ID_Output
  email: String
  notifications?: Notification[]
  set_private: Boolean
  username: String
  password: String
  avatar_url: File
  confirmed: Boolean
  online: Boolean
  friends?: User[]
  friend_requests?: User[]
  createdAt: DateTime
  updatedAt: DateTime
  role: UserRole
  teams?: Team[]
  channels?: Channel[]
  owned_teams?: Team[]
  owned_channels?: Channel[]
}

export interface File extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  filename: String
  mimetype: String
  encoding: String
  key: String
  ETag: String
  url: String
}

export interface Team extends Node {
  id: ID_Output
  name: String
  slug: String
  moderators?: User[]
  author: User
  members?: User[]
  channels?: Channel[]
  createdAt: DateTime
  updatedAt: DateTime
  confirmed: Boolean
  online: Boolean
}

export interface Channel extends Node {
  id: ID_Output
  name: String
  slug: String
  moderators?: User[]
  public?: Boolean
  messages?: Message[]
  members?: User[]
  author: User
  createdAt: DateTime
  updatedAt: DateTime
}

export interface Message extends Node {
  id: ID_Output
  body: String
  parentId: ID_Output
  url: String
  filetype: String
  author: User
  createdAt: DateTime
  updatedAt: DateTime
}

export interface Rating extends Node {
  id: ID_Output
  vote: Int
  author?: User[]
}

export interface Comment extends Node {
  id: ID_Output
  body: String
  parentId: ID_Output
  pageId: ID_Output
  repliedTo?: User
  ratings: Rating
  createdAt: DateTime
  updatedAt: DateTime
  replies?: Comment[]
  author: User
}

/*
 * A connection to a list of items.

 */
export interface NotificationConnection {
  pageInfo: PageInfo
  edges: NotificationEdge[]
  aggregate: AggregateNotification
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * An edge in a connection.

 */
export interface NotificationEdge {
  node: Notification
  cursor: String
}

export interface AggregateNotification {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface TeamConnection {
  pageInfo: PageInfo
  edges: TeamEdge[]
  aggregate: AggregateTeam
}

/*
 * An edge in a connection.

 */
export interface TeamEdge {
  node: Team
  cursor: String
}

export interface AggregateTeam {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface RatingConnection {
  pageInfo: PageInfo
  edges: RatingEdge[]
  aggregate: AggregateRating
}

/*
 * An edge in a connection.

 */
export interface RatingEdge {
  node: Rating
  cursor: String
}

export interface AggregateRating {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface ChannelConnection {
  pageInfo: PageInfo
  edges: ChannelEdge[]
  aggregate: AggregateChannel
}

/*
 * An edge in a connection.

 */
export interface ChannelEdge {
  node: Channel
  cursor: String
}

export interface AggregateChannel {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

export interface AggregateFile {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: CommentEdge[]
  aggregate: AggregateComment
}

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
  cursor: String
}

export interface AggregateComment {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface MessageConnection {
  pageInfo: PageInfo
  edges: MessageEdge[]
  aggregate: AggregateMessage
}

/*
 * An edge in a connection.

 */
export interface MessageEdge {
  node: Message
  cursor: String
}

export interface AggregateMessage {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface NotificationSubscriptionPayload {
  mutation: MutationType
  node?: Notification
  updatedFields?: String[]
  previousValues?: NotificationPreviousValues
}

export interface NotificationPreviousValues {
  id: ID_Output
  message: String
}

export interface TeamSubscriptionPayload {
  mutation: MutationType
  node?: Team
  updatedFields?: String[]
  previousValues?: TeamPreviousValues
}

export interface TeamPreviousValues {
  id: ID_Output
  name: String
  slug: String
  createdAt: DateTime
  updatedAt: DateTime
  confirmed: Boolean
  online: Boolean
}

export interface RatingSubscriptionPayload {
  mutation: MutationType
  node?: Rating
  updatedFields?: String[]
  previousValues?: RatingPreviousValues
}

export interface RatingPreviousValues {
  id: ID_Output
  vote: Int
}

export interface ChannelSubscriptionPayload {
  mutation: MutationType
  node?: Channel
  updatedFields?: String[]
  previousValues?: ChannelPreviousValues
}

export interface ChannelPreviousValues {
  id: ID_Output
  name: String
  slug: String
  public?: Boolean
  createdAt: DateTime
  updatedAt: DateTime
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File
  updatedFields?: String[]
  previousValues?: FilePreviousValues
}

export interface FilePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  filename: String
  mimetype: String
  encoding: String
  key: String
  ETag: String
  url: String
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment
  updatedFields?: String[]
  previousValues?: CommentPreviousValues
}

export interface CommentPreviousValues {
  id: ID_Output
  body: String
  parentId: ID_Output
  pageId: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

export interface MessageSubscriptionPayload {
  mutation: MutationType
  node?: Message
  updatedFields?: String[]
  previousValues?: MessagePreviousValues
}

export interface MessagePreviousValues {
  id: ID_Output
  body: String
  parentId: ID_Output
  url: String
  filetype: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  set_private: Boolean
  username: String
  password: String
  confirmed: Boolean
  online: Boolean
  createdAt: DateTime
  updatedAt: DateTime
  role: UserRole
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string