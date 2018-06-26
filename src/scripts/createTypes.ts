import { generateNamespace } from '@gql2ts/from-schema'
import * as fs from 'fs'
import * as path from 'path'
import { importSchema } from 'graphql-import'

import { logger } from '../utils/logger'

const typescriptTypes = generateNamespace(
	'GQL',
	importSchema(path.join(__dirname, '../schema.graphql'))
)

fs.writeFile(
	path.join(__dirname, '../tstypes/schema.d.ts'),
	typescriptTypes,
	(err: NodeJS.ErrnoException) => {
		if (err) logger.error({ level: '5', message: err.message })
	}
)
