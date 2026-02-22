
'use client'
import { Cake, Phone } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-chocolate text-primary-foreground/80 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Cake className="w-6 h-6 text-soft-pink" />
          <span className="font-serif text-lg text-white font-semibold text-primary-foreground">
            Fresh Bakes
          </span>
        </a>

        {/* Social */}
        <div className="flex gap-1 flex-row justify-center items-center">
          <h4
            
            className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            aria-label="Instagram">
            <Phone className="w-4 h-4 text-white" />
          </h4>
          <h5 className="text-white">
          +91 7086396368
          </h5>
        </div>

        {/* Made with love */}
        <p className="text-sm flex items-center gap-1 text-primary-foreground/50">
          {/* Made with <Heart className="w-3.5 h-3.5 text-soft-pink fill-soft-pink" /> in Mumb */}
        </p>
      </div>
    </footer>
  )
}
