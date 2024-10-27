'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { _password } from '@/lib/const'
import { useBuyerStore } from '@/store/buyer'
import Link from 'next/link'
import { useState } from 'react'


export function MainTab() {

  const customer_name = useBuyerStore((state) => state.customer_name)
  const customer_email = useBuyerStore((state) => state.customer_email)
  const setCustomerName = useBuyerStore((state) => state.setName)
  const setCustomerEmail = useBuyerStore((state) => state.setEmail)

  const [password, setPassword] = useState('')
  const [incorrect, setIncorrect] = useState(false)

  const handleChange = (e: any, setFunc: (e: any) => void) => {
    setFunc(e.target.value)
  }

  const handleIncorrectChange = () => {
    setIncorrect(true)
    setTimeout(() => setIncorrect(false), 1000)
  }

  return (
    <Tabs defaultValue="buyer" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="buyer">Покупатель</TabsTrigger>
        <TabsTrigger value="seller">Продавец</TabsTrigger>
      </TabsList>
      <TabsContent value="buyer">
        <Card>
          <CardHeader>
            <CardTitle>Войти как покупатель</CardTitle>
            <CardDescription>
              Вы можете войти в сервис как покупатель, чтобы сделать свой заказ
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Имя</Label>
              <Input id="name" defaultValue={customer_name} onChange={(e) => handleChange(e, setCustomerName)} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Почта</Label>
              <Input id="username" defaultValue={customer_email} onChange={(e) => handleChange(e, setCustomerEmail)} />
            </div>
          </CardContent>
          <CardFooter>
            <Link href='buyer'>
              <Button>Войти</Button>
            </Link>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="seller">
        <Card>
          <CardHeader>
            <CardTitle>Войти как продавец</CardTitle>
            <CardDescription>
              Вы можете войти в сервис как продавец, чтобы посмотреть заказы
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="password">Введите пароль</Label>
              <Input id="password" type="password" onChange={(e) => handleChange(e, setPassword)} />
            </div>
          </CardContent>
          <CardFooter>
            {password === _password
              ? (
                <Link href='/seller'>
                  <Button>Войти</Button>
                </Link>
              )
              :
              <Button onClick={handleIncorrectChange}>Войти</Button>
            }
            {incorrect
              ? (<div className='ml-4 font-bold text-red-500'>Неверный пароль</div>)
              : (<></>)
            }
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
