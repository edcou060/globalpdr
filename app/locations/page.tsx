'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Car, Shield, Wrench, Facebook, Twitter, Instagram, ArrowRight, Navigation } from 'lucide-react'
import { MobileNav } from "@/components/MobileNav"
import { garamond } from "@/app/fonts"

const locations = [
  {
    id: "amarillo",
    name: "Amarillo",
    address: "109 S Johnson St",
    city: "Amarillo",
    state: "TX",
    zip: "79101",
    phone: "(806) 730-0565",
    email: "amarillo@globalpdr.com",
    hours: "Mon-Fri: 8am-6pm",
    image: "/photos/amarillo-location.jpg",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846554669428!2d-101.8347373!3d35.208961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87014f6fc7cb3eb7%3A0x7f0e4b793d02f6a8!2s109%20S%20Johnson%20St%2C%20Amarillo%2C%20TX%2079101!5e0!3m2!1sen!2sus!4v1635787645784!5m2!1sen!2sus",
    features: ["Hail Damage Repair", "PDR Services", "Insurance Claims", "Free Estimates"]
  },
  {
    id: "longview",
    name: "Longview",
    address: "1203 Champion Way",
    city: "Longview",
    state: "TX",
    zip: "75604",
    phone: "(806) 730-0565",
    email: "longview@globalpdr.com",
    hours: "Mon-Fri: 8am-6pm",
    image: "/photos/longview-location.jpg",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846554669428!2d-101.8347373!3d35.208961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87014f6fc7cb3eb7%3A0x7f0e4b793d02f6a8!2s1203%20Champion%20Way%2C%20Longview%2C%20TX%2075604!5e0!3m2!1sen!2sus!4v1635787645784!5m2!1sen!2sus",
    features: ["Mobile Service", "PDR Specialists", "Insurance Assistance", "Same Day Service"]
  },
  {
    id: "lubbock",
    name: "Lubbock",
    address: "610 E County Rd 7300",
    city: "Lubbock",
    state: "TX",
    zip: "79404",
    phone: "(806) 730-0565",
    email: "lubbock@globalpdr.com",
    hours: "Mon-Fri: 8am-6pm",
    image: "/photos/lubbock-location.jpg",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846554669428!2d-101.8347373!3d35.208961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87014f6fc7cb3eb7%3A0x7f0e4b793d02f6a8!2s610%20E%20County%20Rd%207300%2C%20Lubbock%2C%20TX%2079404!5e0!3m2!1sen!2sus!4v1635787645784!5m2!1sen!2sus",
    features: ["Expert PDR Team", "Quick Turnaround", "Insurance Claims", "Lifetime Warranty"]
  }
]

export default function LocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0])

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
      <section className="pt-32 bg-gradient-to-b from-[#1a2e35] to-[#2a3f48] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto pb-16">
            <h1 className={`${garamond.className} text-4xl md:text-5xl font-bold mb-6`}>Our Locations</h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert auto hail repair services across Texas. Find your nearest location and get your vehicle back to perfect condition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {locations.map((loc) => (
                <Button
                  key={loc.id}
                  variant={selectedLocation.id === loc.id ? "default" : "outline"}
                  onClick={() => setSelectedLocation(loc)}
                  className={`min-w-[120px] text-lg ${
                    selectedLocation.id === loc.id 
                      ? "bg-black text-white hover:bg-black/90" 
                      : "text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {loc.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Location Image and Info */}
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <Image
                  src={selectedLocation.image}
                  alt={`${selectedLocation.name} Location`}
                  width={800}
                  height={500}
                  className="rounded-xl shadow-2xl w-full object-cover aspect-video"
                />
              </div>
              
              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Address</h3>
                      <p className="text-gray-600">
                        {selectedLocation.address}<br />
                        {selectedLocation.city}, {selectedLocation.state} {selectedLocation.zip}
                      </p>
                      <Button variant="link" className="p-0 h-auto mt-2 text-blue-500 hover:text-blue-600">
                        Get Directions
                        <Navigation className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Hours</h3>
                      <p className="text-gray-600">{selectedLocation.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-blue-500 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Contact</h3>
                      <p className="text-gray-600">{selectedLocation.phone}</p>
                      <p className="text-gray-600">{selectedLocation.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-2">
                {selectedLocation.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Map and Services */}
            <div className="space-y-8">
              <div className="rounded-xl overflow-hidden shadow-2xl h-[400px] bg-white">
                <iframe
                  src={selectedLocation.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Services at {selectedLocation.name}</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { icon: Car, text: "Mobile Service Available" },
                      { icon: Shield, text: "Insurance Claims Assistance" },
                      { icon: Wrench, text: "Expert PDR Technicians" },
                      { icon: Clock, text: "Same-Day Service Options" }
                    ].map((service, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                        <service.icon className="h-5 w-5" />
                        <span>{service.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Link href="/get-free-quote">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                  Schedule Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
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