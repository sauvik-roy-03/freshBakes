import Image from 'next/image'
import { cakeDetails, type Cake } from '@/app/data/cakes'
import { Card, CardDescription, CardContent } from '@/components/ui/card'
import OrderForm from './OrderForm'
import { ArrowLeft} from 'lucide-react'
import Link from 'next/link'
export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const selectedCake = cakeDetails.find((c) => c.id === id)

  if (!selectedCake) {
    return <div className="p-20 text-center">Selected Cake Not Found</div>
  }

  return (
    // Changed flex-col to lg:flex-row and added items-start
    <>
   

    <div className='flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 py-10 items-start'>
     
   
      {/* LEFT SIDE: IMAGE (Pinned at top on large screens) */}
      <Card className='w-full lg:w-1/2 bg-background rounded-none shadow-none border-none sticky top-10'>

      <Link href={'/'}>
    
    <div className='flex flex-row gap-2 text-muted-foreground mb-8'>
<ArrowLeft/>
<p className='text-foreground text-muted-foreground'>
   Back to home
</p>

    </div>
    </Link>
        <CardContent className='relative h-[400px] sm:h-[600px] p-0'>
          <Image 
            src={selectedCake.imageURL} 
            alt={selectedCake.name} 
            fill 
            className='object-cover rounded-xl'
            priority
          />
        </CardContent>
      </Card>

      {/* RIGHT SIDE: TEXT + FORM */}
      <div className='w-full lg:w-1/2 flex flex-col px-4 sm:px-10'>
        <p className="text-primary text-md tracking-[0.2em] uppercase mb-2">
           Chocolate Flavour
        </p>
        <h1 className="font-serif text-3xl sm:text-5xl text-foreground tracking-wide mb-2">
           {selectedCake.name}
        </h1>
        <h2 className='text-primary font-bold text-3xl mb-4 mt-2'>
           Starting from ₹{selectedCake.price}
        </h2>
        <CardDescription className='text-md mb-8'>
           {selectedCake.description}
        </CardDescription>

        <hr className="border-muted mb-8" />

        <OrderForm cake={selectedCake}/>
      </div>

    </div>
    </>
  )
}