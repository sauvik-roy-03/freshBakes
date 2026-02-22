'use client'
import Image from 'next/image'
import heroCake from '../public/images/hero-cake.jpg'

export default function Hero() {
  return (
    <section style={{ height: '100vh' }} className="relative isolate w-full overflow-hidden">
  
  {/* BACKGROUND LAYER */}
  <div className="absolute inset-0 z-0">
    <Image src={heroCake} alt={'hero-banner'} fill priority className='object-cover' />
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-background/80" />
  </div>
  

  {/* CONTENT LAYER */}
  <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4">
    <div className="max-w-4xl">
      <p className="text-white text-xs sm:text-sm tracking-[0.4em] uppercase mb-6 font-light animate-fade-up">
        Homemade with love
      </p>

      
      <h1 className="text-5xl sm:text-7xl md:text-8xl text-white font-medium leading-[1.1] mb-8 animate-fade-up">
        Handcrafted Cakes
        <br />
        <span className="italic font-serif font-normal">Made With Love</span>
      </h1>

      <p className="text-[#ffffff] text-base font-semibold sm:text-lg mb-10 max-w-xl mx-auto animate-fade-up">
        Every cake tells a story. We bake yours with the finest ingredients and a whole lot of heart.
      </p>

      <div className="animate-fade-up">
        <a href="#our-collection" className="bakery-btn text-white font-semibold">
          Order Now
        </a>
      </div>
    </div>
  </div>
</section>
  )
}