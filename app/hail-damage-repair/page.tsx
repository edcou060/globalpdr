'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, Shield, Clock, CheckCircle, ArrowRight, DollarSign } from 'lucide-react'
import { MobileNav } from "@/components/MobileNav"

export default function HailDamageRepair() {

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Navigation - Same as original */}
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
      <section className="pt-48 pb-36 bg-[#1a2e35] relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-center md:text-left">
              <h1 className="text-6xl font-extrabold text-white mb-6">
                DO YOU HAVE HAIL DAMAGE?
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Professional hail damage repair services with lifetime warranty. Fast, reliable, and insurance-approved solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/get-free-quote">
                  <Button 
                    size="lg" 
                    className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl 
                    transition-all transform hover:-translate-y-1 font-bold text-lg px-8 py-6 rounded-xl
                    border-2 border-green-400 hover:scale-105"
                  >
                    Get a Free Estimate
                  </Button>
                </Link>
                <Link href="#insurance-information">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-black border-2 border-white hover:bg-black hover:text-white
                    shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 
                    font-bold text-lg px-8 py-6 rounded-xl hover:scale-105"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Global PDR?</h3>
                <ul className="space-y-4">
                  {[
                    "Free inspection and estimate",
                    "Insurance claim assistance",
                    "Lifetime warranty on repairs",
                    "Same-day service available",
                    "Expert certified technicians"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ALERT: Amarillo, TX just got hit by hail!
          </h2>
          <p className="text-xl mb-4">
            WE REMOVE AUTO HAIL DAMAGE DAILY!
          </p>
          <p className="text-lg">
            We work with ALL INSURANCE COMPANIES! We'll do all the paperwork! No out of pocket in most cases for Hail Removal Claims!
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            OUR TEAM IS STANDING BY TO HELP YOU!
          </h2>
          <p className="text-xl mb-6">CHAT WITH US NOW:</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
            Open Chat
          </Button>
        </div>
      </section>



      {/* Insurance Information Section */}
<section id="insurance-information" className="py-24 bg-gradient-to-b from-[#1a2e35] to-[#2a3f48]">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-400 mb-4">Insurance Claims Process</h2>
      <p className="text-xl text-gray-300">
        Understanding your insurance coverage and claim process is crucial. We're here to help guide you through every step.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Scenario 1 */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-blue-500/20 p-3 rounded-lg">
            <Shield className="h-8 w-8 text-blue-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Covered by Insurance</h3>
            <p className="text-blue-300">Most common scenario</p>
          </div>
        </div>
        <ul className="space-y-4">
          {[
            "Professional damage assessment with specialized lighting",
            "Review of insurance policy coverage and deductible",
            "Direct communication with insurance adjusters",
            "Licensed repair shop certification",
            "Quality inspection upon completion"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Scenario 2 */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-purple-500/20 p-3 rounded-lg">
            <DollarSign className="h-8 w-8 text-purple-400" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Self-Pay Options</h3>
            <p className="text-purple-300">Flexible payment solutions</p>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-gray-300">
            If your insurance doesn't cover hail damage repair, we offer competitive pricing and flexible payment options:
          </p>
          <ul className="space-y-4">
            {[
              "Free initial consultation",
              "Detailed cost estimate provided",
              "Transparent pricing with no hidden fees",
              "Multiple payment options available",
              "Satisfaction guaranteed"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


            {/* Infinite Logo Slider Section */}
            <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Trusted by Thousands of Satisfied Customers</h2>
        </div>
        <div className="relative overflow-hidden w-screen">
          <div 
            className="flex space-x-16 animate-scroll"
            style={{
              transform: 'translateX(-16.666%)',
              width: "calc(120px * 28)",
              paddingLeft: "2rem",
              paddingRight: "2rem"
            }}
          >
            {/* First set of images */}
            {[...Array(14)].map((_, i) => (
              <div key={`first-${i}`} className="flex-shrink-0">
                <Image
                  src="/photos/logo.png"
                  alt="Global PDR Logo"
                  width={120}
                  height={60}
                  className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[...Array(14)].map((_, i) => (
              <div key={`second-${i}`} className="flex-shrink-0">
                <Image
                  src="/photos/logo.png"
                  alt="Global PDR Logo"
                  width={120}
                  height={60}
                  className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Insurance Approved",
                description: "We work with all major insurance companies and handle the claims process."
              },
              {
                icon: Clock,
                title: "Fast Service",
                description: "Most repairs completed within 1-3 days with same-day service available."
              },
              {
                icon: CheckCircle,
                title: "Lifetime Warranty",
                description: "Our repairs are guaranteed for as long as you own your vehicle."
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent>
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Fix Your Hail Damage?
          </h2>
          <p className="text-xl mb-8">
            Get your free estimate today and restore your vehicle's value
          </p>
          <Link href="/get-free-quote">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
          >
            Schedule Your Free Inspection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          </Link>
        </div>
      </section>

      {/* Footer - Same as original */}
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