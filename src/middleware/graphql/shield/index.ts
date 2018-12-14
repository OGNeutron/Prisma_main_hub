import { rule, shield } from 'graphql-shield';
import { Context } from '../../../tstypes';

const isAuthenticated = rule()(
	async (_: any, __: any, { session }: Context, ___: any) => !!session.userId
);

export const ShieldMiddleware = shield(
	{
		Query: {
			getProfile: isAuthenticated
		}
	},
	{
		debug: true,
		graphiql: true
	}
);
