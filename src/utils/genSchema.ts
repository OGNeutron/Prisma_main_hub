// import { importSchema } from 'graphql-import'
import * as path from 'path'
// import * as fs from 'fs'
// import { makeExecutableSchema } from 'graphql-tools'
import * as glob from 'glob'
//import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas' //mergeSchema
// import { GraphQLSchema } from 'graphql'

const pathToModules = path.join(__dirname, '../modules')

// export const genSchema = (): GraphQLSchema => {
// 	const graphqlTypes = glob
// 		.sync(`${pathToModules}/**/*.graphql`)
// 		.map(x => fs.readFileSync(x, { encoding: 'utf8' }))

// 	const resolvers = glob
// 		.sync(`${pathToModules}/**/resolvers.?s`)
// 		.map(resolver => require(resolver).resolvers)

// 	return makeExecutableSchema({
// 		typeDefs: mergeTypes(graphqlTypes),
// 		resolvers: mergeResolvers(resolvers)
// 	})
// }

export const genResolvers = () => {
	return glob
		.sync(`${pathToModules}/**/resolvers.?s`)
		.map(resolver => require(resolver).resolvers)
}
