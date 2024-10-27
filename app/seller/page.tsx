'use server'
import { SellerOrders } from '@/components/shared/seller-orders'
import { items } from '@prisma/client'

const Home = async () => {

  let items: items[]

  const response = await fetch('http://localhost:3000/api/orders')
  items = await response.json()

  return (
    <div>
      <SellerOrders orders={items} />
    </div>
  )
}

export default Home