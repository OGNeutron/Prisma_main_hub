// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { Resolvers } from '../graphqlgen'

import { Query } from './Query'
import { User } from './User'
import { Notification } from './Notification'
import { File } from './File'
import { Team } from './Team'
import { Channel } from './Channel'
import { Message } from './Message'
import { Comment } from './Comment'
import { Rating } from './Rating'
import { Mutation } from './Mutation'
import { LoginResponse } from './LoginResponse'
import { RegisterResponse } from './RegisterResponse'
import { ForgotPasswordResponse } from './ForgotPasswordResponse'
import { VoidResponse } from './VoidResponse'
import { Error } from './Error'
import { AddFriendResponse } from './AddFriendResponse'
import { Subscription } from './Subscription'
import { UserSubscriptionPayload } from './UserSubscriptionPayload'
import { UserPreviousValues } from './UserPreviousValues'
import { NotificationSubscriptionPayload } from './NotificationSubscriptionPayload'
import { NotificationPreviousValues } from './NotificationPreviousValues'
import { MessageSubscriptionPayload } from './MessageSubscriptionPayload'
import { MessagePreviousValues } from './MessagePreviousValues'

export const resolvers: Resolvers = {
	Query,
	User,
	Notification,
	File,
	Team,
	Channel,
	Message,
	Comment,
	Rating,
	Mutation,
	LoginResponse,
	RegisterResponse,
	ForgotPasswordResponse,
	VoidResponse,
	Error,
	AddFriendResponse,
	Subscription,
	UserSubscriptionPayload,
	UserPreviousValues,
	NotificationSubscriptionPayload,
	NotificationPreviousValues,
	MessageSubscriptionPayload,
	MessagePreviousValues
}
