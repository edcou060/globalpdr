'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Upload} from 'lucide-react'
import { MobileNav } from "@/components/MobileNav"
import { garamond } from "@/app/fonts"

export default function GetFreeQuotePage() {
  const [damageSize, setDamageSize] = useState(50)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
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

      {/* Get a Free Quote Form Section */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`${garamond.className} text-4xl md:text-5xl font-bold text-center mb-12 text-white`}>
              Get Your Free Quote
            </h1>
          </motion.div>
          
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
            <form className="space-y-8">
              {/* Vehicle Information */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-400">Vehicle Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="make" className="text-white">Make</Label>
                    <Input id="make" placeholder="e.g. Toyota" className="bg-white/20 text-white placeholder-white" />
                  </div>
                  <div>
                    <Label htmlFor="model" className="text-white">Model</Label>
                    <Input id="model" placeholder="e.g. Camry" className="bg-white/20 text-white placeholder-white" />
                  </div>
                  <div>
                    <Label htmlFor="year" className="text-white">Year</Label>
                    <Input id="year" placeholder="e.g. 2022" className="bg-white/20 text-white placeholder-white" />
                  </div>
                  <div>
                    <Label htmlFor="color" className="text-white">Color</Label>
                    <Input id="color" placeholder="e.g. Silver" className="bg-white/20 text-white placeholder-white" />
                  </div>
                </div>
              </div>

              {/* Damage Information */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-400">Damage Information</h2>
                <div>
                  <Label className="text-white mb-2 block">Type of Damage</Label>
                  <RadioGroup defaultValue="hail" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hail" id="hail" className="text-blue-400" />
                      <Label htmlFor="hail" className="text-white">Hail</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dent" id="dent" className="text-blue-400" />
                      <Label htmlFor="dent" className="text-white">Dent</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" className="text-blue-400" />
                      <Label htmlFor="other" className="text-white">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label htmlFor="damage-location" className="text-white">Damage Location</Label>
                  <Input id="damage-location" placeholder="e.g. Hood, Roof" className="bg-white/20 text-white placeholder-white" />
                </div>
                <div>
                  <Label className="text-white mb-2 block">Damage Size (approximate)</Label>
                  <div className="flex items-center space-x-4">
                    <Slider
                      value={[damageSize]}
                      onValueChange={(value) => setDamageSize(value[0])}
                      max={100}
                      step={1}
                      className="flex-grow"
                    />
                    <span className="text-white font-bold">{damageSize}%</span>
                  </div>
                </div>
              </div>

              {/* Image Upload */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-400">Upload Image</h2>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-400 border-dashed rounded-lg cursor-pointer bg-white/10 hover:bg-white/20">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      {uploadedImage ? (
                        <Image src={uploadedImage} alt="Uploaded damage" width={200} height={200} className="mb-4 rounded-lg" />
                      ) : (
                        <>
                          <Upload className="w-10 h-10 mb-3 text-blue-400" />
                          <p className="mb-2 text-sm text-blue-400"><span className="font-bold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-400">PNG, JPG or GIF (MAX. 800x400px)</p>
                        </>
                      )}
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                  </label>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-400">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-white/20 text-white placeholder-white" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-white/20 text-white placeholder-white" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(123) 456-7890" className="bg-white/20 text-white placeholder-white" />
                  </div>
                  <div>
                    <Label htmlFor="zip" className="text-white">ZIP Code</Label>
                    <Input id="zip" placeholder="12345" className="bg-white/20 text-white placeholder-white" />
                  </div>
                </div>
              </div>

              {/* Additional Comments */}
              <div>
                <Label htmlFor="comments" className="text-white">Additional Comments</Label>
                <Textarea id="comments" placeholder="Any additional details about the damage..." className="bg-white/20 text-white placeholder-white" />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                Get My Free Quote
              </Button>
            </form>
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