import { ApolloError } from 'apollo-server'

import { Context } from '../../tstypes'
import { logger } from '../../utils/logger'

export const resolvers = {
	Mutation: {
		async createOrder(_: any, args: any, { session, db, stripe }: Context) {
			try {
				const customer = await db.customers({
					where: {
						user: {
							id: session.id
						}
					}
				})

				// const products = await db.products({
				// 	where: {
				// 		id: ''
				// 	}
				// })

				let newCustomer

				if (!customer) {
					newCustomer = await db.createCustomer({
						stripeId: '',

						user: {
							connect: {
								id: session.userId
							}
						}
					})
				}

				const user = await db.user({ id: session.userId })

				const stripeResult = await stripe.customers.create({
					email: user.id
				})

				console.log(stripeResult)

				if (newCustomer) {
					await db.updateCustomer({
						where: { id: newCustomer.id },
						data: {}
					})

					const createOrder = await db.createOrder({
						confirmed: true,
						currency: '',
						total_price: args.totalPrice,
						customer: {
							connect: {
								id: newCustomer.id
							}
						}
					})

					return createOrder
				} else {
					await db.updateCustomer({
						where: { id: customer[0].id },
						data: {}
					})

					const createOrder = await db.createOrder({
						confirmed: true,
						currency: '',
						total_price: args.totalPrice,
						customer: {
							connect: {
								id: customer[0].id
							}
						}
					})

					return createOrder
				}
			} catch (error) {
				logger.error({ level: '5', error })

				return new ApolloError(error)
			}
		}
	}
}
