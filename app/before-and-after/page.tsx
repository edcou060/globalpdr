'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { MobileNav } from "@/components/MobileNav"
import { garamond } from "@/app/fonts"

const beforeAfterImages = [
  { before: "/photos/before1.jpg", after: "/photos/after1.jpg" },
  { before: "/photos/before2.jpg", after: "/photos/after2.jpg" },
  { before: "/photos/before3.jpg", after: "/photos/after3.jpg" },
  { before: "/photos/before4.jpg", after: "/photos/after4.jpg" },
  { before: "/photos/before5.jpg", after: "/photos/after5.jpg" },
  { before: "/photos/before6.jpg", after: "/photos/after6.jpg" },
  { before: "/photos/before7.jpg", after: "/photos/after7.jpg" },
]

export default function BeforeAndAfterPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextImage = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % beforeAfterImages.length)
  }

  const prevImage = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + beforeAfterImages.length) % beforeAfterImages.length)
  }

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      }
    }
  }

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/photos/logoblack.png"
                alt="Global PDR Logo"
                width={200}
                height={80}
                className="w-auto h-12"
                priority
              />
            </Link>

            <div className="flex items-center">
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/locations" className="text-gray-700 hover:text-gray-900 font-bold text-lg">Locations</Link>
                <Link href="/hail-damage-repair" className="text-gray-700 hover:text-gray-900 font-bold text-lg">Hail Damage Repair</Link>
                <Link href="/reviews" className="text-gray-700 hover:text-gray-900 font-bold text-lg">Reviews</Link>
                <Link href="/our-team" className="text-gray-700 hover:text-gray-900 font-bold text-lg">Our Team</Link>
                <Link href="/before-and-after" className="text-gray-700 hover:text-gray-900 font-bold text-lg">Before and After</Link>
                <Link href="/get-free-quote">
                  <Button className="bg-black text-white hover:bg-gray-800 font-bold text-lg">
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
              <MobileNav />
            </div>
          </nav>
        </div>
      </header>

      {/* Before and After Gallery Section */}
      <section className="pt-32 pb-32 min-h-screen bg-gradient-to-b from-[#1a2e35] to-[#2a3f48] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`${garamond.className} text-4xl md:text-5xl font-bold text-center mb-12`}>
            Before and After Gallery
          </h1>
          
          <div className="max-w-4xl mx-auto mb-4">
            <Tabs defaultValue="slider" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="slider">Slider View</TabsTrigger>
                <TabsTrigger value="grid">Grid View</TabsTrigger>
              </TabsList>
              
              <TabsContent value="slider" className="relative aspect-video">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="absolute w-full h-full"
                  >
                    <div className="grid grid-cols-2 gap-4 h-full">
                      <div className="relative">
                        <Image
                          src={beforeAfterImages[currentIndex].before}
                          alt={`Before image ${currentIndex + 1}`}
                          fill
                          className="object-cover rounded-lg"
                        />
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-[#1a2e35] px-6 py-2 rounded-b-lg">
                          <span className="text-white text-2xl font-bold">Before</span>
                        </div>
                      </div>
                      <div className="relative">
                        <Image
                          src={beforeAfterImages[currentIndex].after}
                          alt={`After image ${currentIndex + 1}`}
                          fill
                          className="object-cover rounded-lg"
                        />
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-[#1a2e35] px-6 py-2 rounded-b-lg">
                          <span className="text-white text-2xl font-bold">After</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black hover:bg-black/80"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4 text-white" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black hover:bg-black/80"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4 text-white" />
                </Button>
              </TabsContent>
              
              <TabsContent value="grid">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {beforeAfterImages.map((images, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="relative aspect-video mb-4">
                          <Image
                            src={images.before}
                            alt={`Before image ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                          <div className="absolute left-4 bottom-4">
                            <span className="text-white text-xl font-bold">Before</span>
                          </div>
                        </div>
                        <div className="relative aspect-video">
                          <Image
                            src={images.after}
                            alt={`After image ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                          <div className="absolute right-4 bottom-4">
                            <span className="text-white text-xl font-bold">After</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <Image
                src="/photos/logo.png"
                alt="Global PDR Logo"
                width={60}
                height={60}
                className="mx-auto md:mx-0 mb-4 filter brightness-0 invert"
              />
              <h3 className="text-xl font-bold mb-2">Global PDR</h3>
              <p className="text-sm text-gray-400">Expert Auto Hail & Dent Repair</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Services</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Hail Damage Repair</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Paintless Dent Repair</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Insurance Claims</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Mobile Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(806) 730-0565</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@globalpdr.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Lubbock, Longview, Dallas/Fort Worth</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Global Auto Hail & Dent Repair INC. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}