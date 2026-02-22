'use client'
import { useState, useEffect } from "react";
import { Cake, Menu, X } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    
    { label: "Customize Cake", href: "#custom-cake" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link href={'/'}>
        <div className="flex items-center gap-2 group">
          <Cake className="w-7 h-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-serif text-xl font-semibold text-foreground tracking-wide">
            Fresh Bakes
          </span>
        </div>
        </Link>

        {/* Desktop Links */}
        <div className=" flex sm:flex md:flex lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium px-4 py-2 rounded-lg text-primary border border-primary hover:bg-primary hover:text-white transition-all duration-200 ${!scrolled?"bg-primary text-white":""} `}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        
      </div>

      {/* Mobile menu */}
     
    </nav>
  )
}
