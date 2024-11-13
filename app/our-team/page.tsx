'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

const teamMembers = [
  {
    name: "Robinson Rodriguez",
    role: "Senior Claims Manager",
    phone: "(806) 730-0565",
    email: "robinson@globalautohail.com",
    image: "/photos/Robinson-Rodriguez.jpg"
  },
  {
    name: "Rebeca Rodriguez",
    role: "Claims Manager",
    phone: "(806) 503-9931",
    email: "rebeca@globalautohail.com",
    image: "/photos/Rebeca-Rodriguez.jpg"
  },
  {
    name: "Raamses Rodriguez",
    role: "Claims Manager",
    phone: "(806) 777-3207",
    email: "raamses@globalautohail.com",
    image: "/photos/Raamses-Rodriguez.jpg"
  },
  {
    name: "Ramsey Zio",
    role: "Claims Manager",
    phone: "(903) 918-9844",
    email: "ramsey@globalautohail.com",
    image: "/photos/Ramsey-Zio.png"
  },
  {
    name: "Nicholas Maniolo",
    role: "Claim Specialist",
    phone: "(512) 534-5547",
    email: "nicholas@globalautohail.com",
    image: "/photos/Nicholas-Maniolo.jpg"
  },
  {
    name: "David Vargas",
    role: "Claim Specialist",
    phone: "(806) 787-6964",
    email: "david@globalautohail.com",
    image: "/photos/David-Vargas.png"
  },
  {
    name: "Austin McCullough",
    role: "Claim Specialist",
    phone: "(512) 937-0276",
    email: "austin@globalautohail.com",
    image: "/photos/Austin-McCullough.png"
  }
]

export default function OurTeamPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextMember = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length)
  }

  const prevMember = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length)
  }

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-gradient-to-b from-[#1a2e35] to-[#2a3f48]">
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

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/locations" className="text-gray-700 hover:text-gray-900 font-bold text-lg">Locations</Link>
              <Link href="/hail-damage-repair" className="text-gray-700 hover:text-gray-900 font-bold text-lg">Hail Damage Repair</Link>
              <Link href="/reviews" className="text-gray-700 hover:text-gray-900 font-bold text-lg">Reviews</Link>
              <Link href="/our-team" className="text-gray-700 hover:text-gray-900 font-bold text-lg">Our Team</Link>
              <Link href="/before-and-after" className="text-gray-700 hover:text-gray-900 font-bold text-lg">Before and After</Link>
            </div>

            <Link href="/get-free-quote">
              <Button className="bg-black text-white hover:bg-gray-800 font-bold text-lg">
                Get a Free Quote
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Our Team Section */}
      <section className="pt-32 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Meet Our Expert Team</h1>
          
          <div className="relative">
            <div className="flex justify-center items-center h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl"
                >
                  <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <Image
                      src={teamMembers[activeIndex].image}
                      alt={teamMembers[activeIndex].name}
                      fill
                      className="object-cover rounded-full border-4 border-blue-400"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-50 rounded-full" />
                  </div>
                  <Card className="bg-white/10 backdrop-blur-sm border-0 text-white p-6 md:p-8 w-full md:w-auto">
                    <CardContent>
                      <h2 className="text-3xl font-bold mb-2">{teamMembers[activeIndex].name}</h2>
                      <p className="text-xl text-blue-300 mb-4">{teamMembers[activeIndex].role}</p>
                      <div className="space-y-2">
                        <p className="flex items-center">
                          <Phone className="mr-2 h-5 w-5 text-blue-400" />
                          {teamMembers[activeIndex].phone}
                        </p>
                        <p className="flex items-center">
                          <Mail className="mr-2 h-5 w-5 text-blue-400" />
                          {teamMembers[activeIndex].email}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white"
              onClick={prevMember}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white"
              onClick={nextMember}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="mt-16">
            <div className="flex justify-center space-x-2 overflow-x-auto py-4">
              {teamMembers.map((member, index) => (
                <Button
                  key={index}
                  variant={index === activeIndex ? "default" : "outline"}
                  className="rounded-full w-3 h-3 p-0 bg-blue-400"
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/get-free-quote">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl 
              transition-all transform hover:-translate-y-1 font-bold text-lg px-8 py-6"
            >
              Work With Our Expert Team
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-900 text-white mt-24">
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