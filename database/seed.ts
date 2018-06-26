import { Prisma } from '../src/generated/prisma'
import * as faker from 'faker'

const db: Prisma = new Prisma({
	endpoint: 'http://localhost:4466/prismadb/dev'
})

const setup = async () => {
	const users = []

	for (let i = 0; i <= 10; i++) {
		users.push({
			username: faker.name.firstName(1),
			email: faker.internet.email(),
			password: faker.internet.password()
		})
	}

	users.forEach(async user => {
		const createdUser = await db.mutation.createUser({ data: user })
		db.mutation.updateUser({
			where: { id: createdUser.id },
			data: { confirmed: true }
		})
	})
}

setup()
