import 'dotenv/config';

import * as express from 'express';
import * as http from 'http';
import * as path from 'path';

import { ApolloServer } from 'apollo-server-express';
import { S3 } from 'aws-sdk';
import { platform, arch } from 'os';
import { makeExecutableSchema } from 'graphql-tools';
import { importSchema } from 'graphql-import';
import { applyMiddleware } from 'graphql-middleware';
import { consolePrint, normalisePort } from 'scotts_utilities';

import { redis } from './redis';
import { PORT } from './constants';
import { genResolvers } from './utils/genSchema';
import { Prisma } from './generated/prisma';
import { middleware } from './middleware/express';
import { logger } from './utils/logger';
import { ShieldMiddleware } from './middleware/graphql/shield';
// import { graphqlMiddleware } from './middleware/graphql/graphql-middleware';
// import { Prisma } from './generated/prisma-client';

const s3Client: S3 = new S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	params: {
		Bucket: process.env.AWS_BUCKET
	}
});

const db: Prisma = new Prisma({
	endpoint:
		process.env.NODE_ENV !== 'production'
			? 'http://localhost:4466/prismadb/dev'
			: `${process.env.HEROKU_PRISMA_ENDPOINT}`,
	secret: process.env.MANAGEMENT_API_SECRET || 'my-secret',
	debug: false
});

const typeDefs: string = importSchema(path.join(__dirname, './schema.graphql'));

const makeSchema = makeExecutableSchema({
	typeDefs,
	resolvers: genResolvers()
});

const app = express();

middleware(app);

const { schema } = applyMiddleware(makeSchema, ShieldMiddleware);

const server: ApolloServer = new ApolloServer({
	subscriptions: {
		path: '/graphql'
	},
	schema,
	context: ({ req, res }: any) => {
		// console.log(req)
		return {
			req: req,
			res: res,
			session: req !== undefined ? req.session : req,
			redis: redis,
			db,
			s3: s3Client
		};
	}
} as any);

server.applyMiddleware({
	app,
	cors: {
		credentials: true,
		origin: [
			'http://localhost:3000',
			'http://localhost:3001',
			'http://localhost:1234',
			'http://localhost:4000',
			'http://localhost:5000',
			'http://mainsite.surge.sh'
		]
	}
});

const httpServer = http.createServer(app);

httpServer.listen(normalisePort(PORT));
server.installSubscriptionHandlers(httpServer);

httpServer.on('listening', async () => {
	const enviroment = process.env.NODE_ENV as string;

	if (enviroment === 'test') {
		redis.flushall();
	}

	const messages: string[] = [
		`Running on: http://localhost:${PORT}${server.graphqlPath}`,
		`Subscriptions on: http://localhost:${PORT}${server.subscriptionsPath}`,
		`Current development status: ${enviroment}`,
		`Operating system: ${platform()} ${arch()}`
	];

	await consolePrint(messages);
});

httpServer.on('error', (err) => logger.error({ level: '0', message: err }));
