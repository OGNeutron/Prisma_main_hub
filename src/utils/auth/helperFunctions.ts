import { sign } from 'jsonwebtoken'
// import { pick } from 'ramda'
import { hash, compare } from 'bcryptjs'
import { Redis } from 'ioredis'
import { USER_SESSION_ID_PREFIX, REDIS_PREFIX } from '../../constants'
import { logger } from '../logger'

export const createToken = async (
	{ username, id }: any,
	refreshSecret: string
): Promise<Array<string>> => {
	try {
		const secret = process.env.JWT_SECRET as string

		const createToken: string = sign({ user: { username, id } }, secret, {
			expiresIn: '24h'
		})

		console.log('CREATETOKEN', createToken)

		if (refreshSecret) {
			const refreshToken: string = sign(
				{
					user: { id }
				},
				refreshSecret,
				{
					expiresIn: '7d'
				}
			)
			return [createToken, refreshToken]
		}

		return [createToken]
	} catch (error) {
		logger.error({ level: '5', message: error })
		return error
	}
}

export const hashPassword = async (password: string): Promise<string> => {
	return await hash(password, 12)
}

export const comparePassword = async (
	password: string,
	userPassword: string
): Promise<boolean> => {
	return await compare(password, userPassword)
}

export const removeAllUsersSessions = async (
	userId: string,
	redis: Redis
): Promise<any> => {
	const sessionIds = await redis.lrange(
		`${USER_SESSION_ID_PREFIX}${userId}`,
		0,
		-1
	)

	const promises: Array<Promise<any>> = []

	for (let i = 0; i < sessionIds.length; i++) {
		promises.push(redis.del(`${REDIS_PREFIX}${sessionIds[i]}`))
	}

	await Promise.all(promises)
}
