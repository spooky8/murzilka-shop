import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

export const SellerOrders: React.FC<{ orders: any }> = ({ orders }) => {

	return (
		<>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>ID заказа</TableHead>
						<TableHead>Имя заказчика</TableHead>
						<TableHead>Почта заказчика</TableHead>
						<TableHead>Время заказа</TableHead>
						<TableHead>Заказанные товары</TableHead>
						<TableHead>Готовые товары</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{orders.map((order: any) => (
						<TableRow key={order.id}>
							<TableCell>{order.id}</TableCell>
							<TableCell>{order.customer_name}</TableCell>
							<TableCell>{order.customer_email}</TableCell>
							<TableCell>{order.order_date}</TableCell>
							<TableCell>1
							</TableCell>
							<TableCell>2
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table >
		</>
	)
}
