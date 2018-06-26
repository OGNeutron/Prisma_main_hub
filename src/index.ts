import 'dotenv/config'
import { GraphQLServer } from 'graphql-yoga'
import * as path from 'path'
import { S3 } from 'aws-sdk'
import { platform, arch } from 'os'
import { makeExecutableSchema } from 'graphql-tools'
import { importSchema } from 'graphql-import'

import { IExpressTypes } from './tstypes'
import { redis } from './redis'
import { PORT } from './constants'
import { genResolvers } from './utils/genSchema'
import { Prisma } from './generated/prisma'
import { normalisePort, consolePrint } from './utils/helperFunctions'
import { middleware } from './middleware'
import { logger } from './utils/logger'

const s3Client: S3 = new S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	params: {
		Bucket: process.env.AWS_BUCKET
	}
})

const db: Prisma = new Prisma({
	endpoint: 'http://localhost:4466/prismadb/dev',
	secret: process.env.MANAGEMENT_API_SECRET || 'randomsecret',
	debug: false
})

const typeDefs: string = importSchema(path.join(__dirname, './schema.graphql'))

const schema = makeExecutableSchema({
	typeDefs,
	resolvers: genResolvers()
})

const server: GraphQLServer = new GraphQLServer({
	schema,
	context({ request, response }: IExpressTypes): Object {
		return {
			req: request,
			res: response,
			session: request.session,
			redis: redis,
			db,
			s3: s3Client
		}
	}
} as any)

const options = {
	port: normalisePort(PORT),
	cors: {
		credentials: true,
		origin: [
			'http://localhost:3000',
			'http://localhost:3001',
			'http://localhost:1234',
			'http://localhost:4000',
			'http://localhost:5000',
			'http://mainsite.surge.sh'
		],
		cacheControl: true
	}
}

middleware(server.express)

server
	.start(options)
	.then(async () => {
		const enviroment = process.env.NODE_ENV as string

		if (enviroment === 'test') {
			redis.flushall()
		}

		const messages: string[] = [
			`Running on: http://localhost:${options.port}`,
			`Current development status: ${enviroment}`,
			`Operating system: ${platform()} ${arch()}`
		]

		await consolePrint(messages)
	})
	.catch((err: any) => {
		logger.error({ level: '0', message: err })
	})
