'use server'
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {

	const orders = await prisma.orders.findMany()

	return NextResponse.json(orders)
}

export async function createOrder(name: string, email: string, cartItems: any[]) {

	const data = {
		customer_name: name,
		customer_email: email,
	}

	const order = await prisma.orders.create(
		{
			 data: data 
		}
	)
	let id = order.id

	await prisma.order_items.createMany({
		data:
			cartItems.map((item: any) => ({
				order_id: id,
				item_id: item.id,
				quantity: 1,
			}))
	})
}
