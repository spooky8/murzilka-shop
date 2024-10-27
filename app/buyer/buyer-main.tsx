'use client'
import { BuyerCart } from '@/components/shared/buyer-cart'
import { BuyerOrders } from '@/components/shared/buyer-orders'
import { ItemCard } from '@/components/shared/item-card'
import { items } from '@prisma/client'
import React, { useState } from 'react'

export const BuyerMain: React.FC<{ items: any }> = (object) => {

	const [cartItems, setCartItems] = useState<any[]>([])

	const addToCart = (item: any) => {
		setCartItems((prevCartItems) => [...prevCartItems, item])
	}

	const deleteToCart = (item: any) => {
		setCartItems((prevCartItems) => prevCartItems.filter((i) => i.id !== item.id))
	}

	const deleteAllItems = () => {
		cartItems.forEach((item) => {
			deleteToCart(item)
		})
	}

	return (
		<>
			<div className='mt-10'>
				<h1 className="text-2xl font-bold mb-4 ml-56">Menu</h1>
				<div className='flex justify-evenly'>
					<div>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
							{object.items.map((item: items) => (
								<ItemCard items={item} key={item.id} addToCart={addToCart} />
							))}
						</div>
					</div>
					<div className='sticky top-0 flex justify-center items-start h-1/2 z-40'>
						<div className='mt-10'>
							<BuyerCart cartItems={cartItems} deleteToCart={deleteToCart} deleteAllItems={deleteAllItems} />
							<BuyerOrders />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
