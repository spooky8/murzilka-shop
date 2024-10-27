import { items } from '@prisma/client'
import { BuyerMain } from './buyer-main'

const Home = async () => {

  let items: items[]

  const response = await fetch('http://localhost:3000/api/items')
  items = await response.json()

  console.log(items)

  return (
    <>
      <BuyerMain items={items} />
    </>
  )
}

export default Home
