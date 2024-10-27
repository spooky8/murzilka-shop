'use client'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { items } from '@prisma/client'
import Image from "next/image"
import React from 'react'

export const ItemCard: React.FC<{ items: items, addToCart: (item: any) => void }> = ({ items, addToCart }) => {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <AspectRatio ratio={16 / 9}>
          {items.category === 'Шаурма'
            ?
            <Image
              src="/шаурма.png"
              alt="Шаурма"
              fill
              className="h-full w-full rounded-md object-cover"
            />
            :
            <Image
              src="/морс.png"
              alt="Морс"
              fill
              className="h-full w-full rounded-md object-cover"
            />
          }
        </AspectRatio>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex justify-start">
              <Label htmlFor="name" className='font-bold text-lg'>{items.name}</Label>
            </div>
            <div className='flex justify-between border-b-2'>
              <Label htmlFor="size" className='font-bold'>{items.description}</Label>
              <Label htmlFor="cost" className='font-bold'>{items.price.toString()} ₽</Label>
            </div>
            <Label htmlFor="description" className='text-zinc-500'>Мы не просто готовим шаурму - мы создаем кулинарное искусство из самых лучших продуктов, которые можно найти на рынке.</Label >
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div />
        <Button onClick={() => addToCart(items)}>Добавить в корзину</Button>
      </CardFooter>
    </Card >
  )
}
