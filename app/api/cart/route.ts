import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.json()
	const order = await prisma.orders.create({ data: data })

	return NextResponse.json(order)
}