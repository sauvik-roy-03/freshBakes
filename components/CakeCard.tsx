import React from 'react'
import Image from 'next/image'
import demoCake from '../public/images/demo-cake.jpeg'   
import {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent} from '@/components/ui/card'
import { Cake } from '@/app/data/cakes'
import Link from 'next/link'
export default function CakeCard({cake}: {cake: Cake}) {
  return (
    <>
    <Link href={`/productDetails/${cake.id}`}>
   <Card className='rounded-[0.75rem] overflow-hidden w-full flex flex-col max-w-90 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 hover:cursor-pointer'>
  <CardContent className='p-0 relative h-80'>
    <Image 
      src={cake.imageURL} 
      alt={cake.name} 
      fill
      className=' object-cover hover:scale-105 transition-transform duration-300 ease-in-out    '
    />
  </CardContent>
  <CardHeader className='flex-1'>
    <CardTitle className='text-base'>{cake.name}</CardTitle>
    <CardDescription className='text-sm line-clamp-2'>
      {cake.description}
    </CardDescription>
  </CardHeader>
<CardFooter className='flex flex-row justify-between items-center gap-2'>
  <h1 className='text-primary font-bold text-2xl'>₹{cake.price}</h1>
  <button className='bakery-btn-secondary self-center max-h-10 max-w-25 text-sm'>View Details</button>
</CardFooter>
</Card>
</Link>
</>
  )
}
