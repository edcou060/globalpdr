'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, Star, Search, ThumbsUp, MessageSquare, Award } from 'lucide-react'
import { motion } from "framer-motion"
import { MobileNav } from "@/components/MobileNav"
import { garamond } from "@/app/fonts"

const reviews = [
  {
    id: 1,
    text: "Always reliable, always top notch results! I highly recommend this company!",
    author: "Steven",
    rating: 5,
    verified: true
  },
  {
    id: 2,
    text: "Hard to find; Honest, Fast, Efficient! My car looks new again! Great work guys! Thank You to Jesse!",
    author: "Todd",
    rating: 5,
    verified: true
  },
  {
    id: 3,
    text: "Great job! My car had a horrible crease in it. Jesse was upfront and honest with the potentials of what could happen, as they did not want any surprises. Thankfully, none of the worse case scenarios applied and my car looks like new again! Also, they were willing to come to my house, which was extremely convenient!",
    author: "Stephen D.",
    rating: 5,
    verified: true
  },
  {
    id: 4,
    text: "Jesse was out to fix my dent fast and made it back to normal in no time!!! Hail Damage is completely gone! Would highly recommend!!! Very happy!!!",
    author: "Anthony R.",
    rating: 5,
    verified: true
  },
  {
    id: 5,
    text: "Thank you! Jesse did an awesome job on my car. He responded quickly, came to my house and the job was done and over. He took care of all the insurance for the hail damage. Very professional, I would certainly recommend and would use his services again!",
    author: "William H.",
    rating: 5,
    verified: true
  },
  {
    id: 6,
    text: "I called Jesse Friday at 430 and he was at my home Saturday at 930. Very professional and punctual. Very satisfied with work he performed. He also traveled an hour to my home. Thanks again Jesse. Car is back to perfect again!",
    author: "Jerry L.",
    rating: 5,
    verified: true
  }
]

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredReviews, setFilteredReviews] = useState(reviews)
  const [stats, setStats] = useState({ total: 0, average: 0, verified: 0 })

  useEffect(() => {
    // Calculate stats
    const total = reviews.length
    const average = reviews.reduce((acc, review) => acc + review.rating, 0) / total
    const verified = reviews.filter(review => review.verified).length
    setStats({ total, average, verified })

    // Filter reviews based on search
    const filtered = reviews.filter(review => 
      review.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredReviews(filtered)
  }, [searchTerm])

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

      {/* Hero Section */}
      <section className="pt-32 bg-gradient-to-b from-[#1a2e35] to-[#2a3f48] text-white min-h-screen relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <motion.h1 
              className={`${garamond.className} text-5xl md:text-6xl font-bold mb-6`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Customer Reviews
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              See what our satisfied customers have to say about our services
            </motion.p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: MessageSquare, label: "Total Reviews", value: stats.total },
              { icon: Star, label: "Average Rating", value: stats.average.toFixed(1) },
              { icon: Award, label: "Verified Reviews", value: stats.verified }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-blue-400" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Search Section */}
          <div className="max-w-md mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search reviews..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {filteredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
                        />
                      ))}
                      {review.verified && (
                        <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-gray-100 mb-4">{review.text}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">- {review.author}</span>
                      <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        Helpful
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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