import { createOrder } from '@/app/api/orders/route'
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/table"
import { useBuyerStore } from '@/store/buyer'
import { X } from 'lucide-react'
import { Button } from '../ui/button'

export const BuyerCart: React.FC<{ cartItems: any[], deleteToCart: (item: any) => void, deleteAllItems: () => void }> = ({ cartItems, deleteToCart, deleteAllItems }) => {

	const name = useBuyerStore((state) => state.customer_name)
	const email = useBuyerStore((state) => state.customer_email)

	const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.price), 0)

	return (
		<>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Позиция</TableHead>
						<TableHead>Статус</TableHead>
						<TableHead>Метод оплаты</TableHead>
						<TableHead className="text-right">Стоимость</TableHead>
						<TableHead></TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{cartItems.map((item) => (
						<TableRow key={item.id}>
							<TableCell className="font-medium">{item.name} {item.description}</TableCell>
							<TableCell>В корзине</TableCell>
							<TableCell>Самовывоз</TableCell>
							<TableCell className="text-right">{item.price.toString()}</TableCell>
							<TableCell>
								<X onClick={() => deleteToCart(item)} className='cursor-pointer' />
							</TableCell>

						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell colSpan={3}>Общая стоимость</TableCell>
						<TableCell className="text-right">{totalPrice} ₽</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
			<div className='flex justify-end items-end'>
				<Button onClick={() => {
					createOrder(name, email, cartItems)
					deleteAllItems()
				}}>
					Заказать
				</Button>
			</div>
		</>
	)
}
