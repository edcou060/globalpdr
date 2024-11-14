'use client'

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="block md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="relative z-50"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link 
              href="/locations" 
              className="text-gray-700 hover:text-gray-900 font-bold text-xl"
              onClick={toggleMenu}
            >
              Locations
            </Link>
            <Link 
              href="/hail-damage-repair" 
              className="text-gray-700 hover:text-gray-900 font-bold text-xl"
              onClick={toggleMenu}
            >
              Hail Damage Repair
            </Link>
            <Link 
              href="/reviews" 
              className="text-gray-700 hover:text-gray-900 font-bold text-xl"
              onClick={toggleMenu}
            >
              Reviews
            </Link>
            <Link 
              href="/our-team" 
              className="text-gray-700 hover:text-gray-900 font-bold text-xl"
              onClick={toggleMenu}
            >
              Our Team
            </Link>
            <Link 
              href="/before-and-after" 
              className="text-gray-700 hover:text-gray-900 font-bold text-xl"
              onClick={toggleMenu}
            >
              Before and After
            </Link>
            <Link 
              href="/get-free-quote"
              onClick={toggleMenu}
            >
              <Button className="bg-black text-white hover:bg-gray-800 font-bold text-xl px-8 py-6">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}