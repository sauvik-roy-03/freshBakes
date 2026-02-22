import ProductDetails from '@/components/productDetails';
import React from 'react'

export default async function page({params}:{params:Promise<{id:string}>}) {
   
  return (
    <div>
      <ProductDetails params={params}/>
    </div>
  )
}
