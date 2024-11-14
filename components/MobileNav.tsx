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
        className="relative z-50 bg-white hover:bg-gray-100 rounded-md p-2"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-black" />
        ) : (
          <Menu className="h-6 w-6 text-black" />
        )}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm overflow-y-auto">
          <div className="min-h-screen py-20 px-4">
            <div className="flex flex-col items-center justify-start space-y-6">
              <Link 
                href="/locations" 
                className="text-black hover:text-gray-700 font-bold text-xl"
                onClick={toggleMenu}
              >
                Locations
              </Link>
              <Link 
                href="/hail-damage-repair" 
                className="text-black hover:text-gray-700 font-bold text-xl"
                onClick={toggleMenu}
              >
                Hail Damage Repair
              </Link>
              <Link 
                href="/reviews" 
                className="text-black hover:text-gray-700 font-bold text-xl"
                onClick={toggleMenu}
              >
                Reviews
              </Link>
              <Link 
                href="/our-team" 
                className="text-black hover:text-gray-700 font-bold text-xl"
                onClick={toggleMenu}
              >
                Our Team
              </Link>
              <Link 
                href="/before-and-after" 
                className="text-black hover:text-gray-700 font-bold text-xl"
                onClick={toggleMenu}
              >
                Before and After
              </Link>
              <Link 
                href="/get-free-quote"
                onClick={toggleMenu}
                className="mt-4"
              >
                <Button className="bg-black text-white hover:bg-gray-800 font-bold text-xl px-6 py-4">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}