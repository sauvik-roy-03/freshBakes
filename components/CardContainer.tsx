import CakeCard from "./CakeCard"
import { cakeDetails } from "@/app/data/cakes"
export default function CardContainer() {
    
  return (

<div className="w-full bg-cream">
<div className="max-w-6xl mx-auto flex justify-center flex-col items-center px-4 py-16">
        {/* Header */}
        <div  id="our-collection" className="text-center mb-12 sm:mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-2">
            Our Collection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Explore Options
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Freshly baked and ready for your celebrations. Order now for same-day delivery.
          </p>
        </div>
    
    <div className="display-grid grid-cols-1 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
{(cakeDetails.map((cake)=>(
  <CakeCard key={cake.id} cake={cake} />
)))}
    </div>
      
    </div>
    </div>


  )
}
