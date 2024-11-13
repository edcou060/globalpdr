'use client'

import { useState, useCallback, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChevronRight, ChevronLeft, ChevronDown, Facebook, Twitter, Instagram, ArrowRight, Star, CheckCircle, Clock, DollarSign, Shield, Car, PenToolIcon as Tool, MapPin, Phone, Mail, Menu, Play } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import useEmblaCarousel from 'embla-carousel-react'

const reviews = [
  {
    text: "Always reliable, always top notch results! I highly recommend this company!",
    author: "Steven"
  },
  {
    text: "Hard to find; Honest, Fast, Efficient! My car looks new again! Great work guys! Thank You to Jesse!",
    author: "Todd"
  },
  {
    text: "Great job! My car had a horrible crease in it. Jesse was upfront and honest with the potentials of what could happen, as they did not want any surprises. Thankfully, none of the worse case scenarios applied and my car looks like new again! Also, they were willing to come to my house, which was extremely convenient!",
    author: "Stephen D."
  },
  {
    text: "Jesse was out to fix my dent fast and made it back to normal in no time!!! Hail Damage is completely gone! Would highly recommend!!! Very happy!!!",
    author: "Anthony R."
  },
  {
    text: "Thank you! Jesse did an awesome job on my car. He responded quickly, came to my house and the job was done and over. He took care of all the insurance for the hail damage. Very professional, I would certainly recommend and would use his services again!",
    author: "William H."
  },
  {
    text: "I called Jesse Friday at 430 and he was at my home Saturday at 930. Very professional and punctual. Very satisfied with work he performed. He also traveled an hour to my home. Thanks again Jesse. Car is back to perfect again!",
    author: "Jerry L."
  }
]

export default function LandingPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const logoSliderRef = useRef<HTMLDivElement | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    const slider = logoSliderRef.current
    let animationId: number

    const animate = () => {
      if (slider) {
        slider.scrollLeft += 1
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0
        }
      }
      animationId = window.requestAnimationFrame(animate)
    }

    animationId = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(animationId)
    }
  }, [])

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying)
  }

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image
              src="https://imgur.com/nYIJuF2.png"
              alt="Global PDR Logo"
              width={30}
              height={30}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold">Global PDR</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Locations</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Hail Damage Repair</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Reviews</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Our Team</Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Before and After</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex shadow-lg hover:shadow-xl transition-shadow">Get a Free Quote</Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4">
                  <Link href="#" className="text-lg font-medium hover:text-primary transition-colors">Locations</Link>
                  <Link href="#" className="text-lg font-medium hover:text-primary transition-colors">Hail Damage Repair</Link>
                  <Link href="#" className="text-lg font-medium hover:text-primary transition-colors">Reviews</Link>
                  <Link href="#" className="text-lg font-medium hover:text-primary transition-colors">Our Team</Link>
                  <Link href="#" className="text-lg font-medium hover:text-primary transition-colors">Before and After</Link>
                  <Button className="mt-4">Get a Free Quote</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-b from-[#1a2e35] to-[#2a3f48] min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none max-w-3xl">
              Expert Auto Hail Repair
              <span className="text-green-400 block mt-2">Restore Your Car's Beauty Today</span>
            </h1>
            <p className="max-w-[700px] text-gray-300 md:text-xl">
              Don't let hail damage diminish your vehicle's value or appearance. Our professional paintless dent repair services guarantee quality repairs with same-day service available. Trust Global PDR to bring your car back to its pre-storm condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Schedule Repair
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#1a2e35] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Learn More
              </Button>
            </div>
            <div className="relative mt-12 flex justify-center w-full">
              <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                {isVideoPlaying ? (
                  <video 
                    className="w-full aspect-video object-cover"
                    controls
                    autoPlay
                  >
                    <source src="/video-placeholder.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Video thumbnail"
                      width={600}
                      height={400}
                      className="w-full"
                    />
                    <Button
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-4"
                      onClick={toggleVideo}
                    >
                      <Play className="h-12 w-12" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-24 bg-gradient-to-b from-[#2a3f48] to-[#1a2e35] overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">See the Transformation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white/10 border-0 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-400">BEFORE REPAIR</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Before repair - car damage"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-blue-400">Witness the Damage</h3>
                  <p className="text-gray-300">
                    Hail damage can be devastating, leaving your vehicle covered in unsightly dents and dings. Our before photos showcase the extent of hail damage we commonly encounter.
                  </p>
                  <Button variant="outline" className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-blue-500/50 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    View More Before Photos
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-0 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-green-400">AFTER REPAIR</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="After repair - restored car"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-green-400">Restored to Perfection</h3>
                  <p className="text-gray-300">
                    Our skilled technicians use advanced paintless dent repair techniques to restore your vehicle to its pre-damage condition. The results speak for themselves - smooth, flawless surfaces that look like the hail damage never happened.
                  </p>
                  <Button className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                    Get Your Free Estimate Today
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Global PDR?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="h-12 w-12 text-green-500" />,
                title: "Expert Technicians",
                description: "Our team is certified and experienced in the latest PDR techniques."
              },
              {
                icon: <Clock className="h-12 w-12 text-blue-500" />,
                title: "Fast Turnaround",
                description: "Most repairs are completed within 1-3 days, minimizing your inconvenience."
              },
              {
                icon: <DollarSign className="h-12 w-12 text-yellow-500" />,
                title: "Competitive Pricing",
                description: "We offer fair, transparent pricing without compromising on quality."
              },
              {
                icon: <Shield className="h-12 w-12 text-red-500" />,
                title: "Lifetime Warranty",
                description: "We stand behind our work with a lifetime warranty on all repairs."
              }
            ].map((item, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-0 bg-gray-50">
                <CardContent>
                  <div className="bg-white p-4 rounded-full mb-6 shadow-md inline-block">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-gray-100 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Repair Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Car className="h-16 w-16 text-blue-500" />,
                title: "1. Inspection",
                description: "We thoroughly assess your vehicle's damage and provide a detailed estimate."
              },
              {
                icon: <Tool className="h-16 w-16 text-green-500" />,
                title: "2. Repair",
                description: "Our skilled technicians use PDR techniques to remove dents without affecting the paint."
              },
              {
                icon: <CheckCircle className="h-16 w-16 text-purple-500" />,
                title: "3. Quality Check",
                description: "We perform a final inspection to ensure your vehicle is restored to perfection."
              }
            ].map((step, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-8 shadow-lg hover:shadow-xl transition-all border-0 bg-white">
                <CardHeader>
                  <div className="bg-gray-100 p-6 rounded-full mb-6 shadow-inner inline-block">
                    {step.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Logo Slider Section */}
      <section className="py-16 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Trusted by Thousands of Satisfied Customers</h2>
          <div 
            className="flex space-x-12 animate-scroll"
            ref={logoSliderRef}
            style={{
              width: "200%",
              animation: "scroll 20s linear infinite"
            }}
          >
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex-shrink-0">
                <Image
                  src="https://imgur.com/nYIJuF2.png"
                  alt="Global PDR Logo"
                  width={120}
                  height={60}
                  className="h-16 w-auto filter brightness-0 invert opacity-50"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Carousel Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-600 via-green-500 to-green-400 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">What Our Customers Say</h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
              ))}
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm pointer-events-auto -translate-x-6 shadow-lg hover:shadow-xl transition-all"
                onClick={scrollPrev}
              >
                <ChevronLeft className="h-8 w-8 text-white" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm pointer-events-auto translate-x-6 shadow-lg hover:shadow-xl transition-all"
                onClick={scrollNext}
              >
                <ChevronRight className="h-8 w-8 text-white" />
              </Button>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {reviews.map((review, index) => (
                  <div key={index} className="flex-[0_0_100%] ">
                    <Card className="mx-8 bg-white/10 border-0 shadow-xl backdrop-blur-sm">
                      <CardContent className="p-8">
                        <blockquote className="text-xl text-white text-center mb-6">
                          "{review.text}"
                        </blockquote>
                        <cite className="block text-center text-white/80 not-italic font-medium">
                          - {review.author}
                        </cite>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === selectedIndex ? 'w-8 bg-white shadow-md' : 'w-2 bg-white/50'
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Comprehensive Services</h2>
          <div className="space-y-8">
            {[
              {
                title: "Hail Damage Repair",
                description: "Our expert technicians use state-of-the-art paintless dent repair techniques to remove hail damage, restoring your vehicle's appearance without compromising the original paint job.",
                image: "/placeholder.svg?height=200&width=300"
              },
              {
                title: "Same Day Service",
                description: "We understand the inconvenience of being without your vehicle. That's why we offer quick turnaround times, with most repairs completed within hours, getting you back on the road as soon as possible.",
                image: "/placeholder.svg?height=200&width=300"
              },
              {
                title: "Insurance Claims Assistance",
                description: "Navigating insurance claims can be stressful. Our team handles all insurance paperwork and offers direct billing to your insurance company, making the repair process smooth and hassle-free for you.",
                image: "/placeholder.svg?height=200&width=300"
              }
            ].map((service, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center p-6 hover:bg-gray-50 rounded-xl transition-all shadow-lg hover:shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="outline" className="group shadow-md hover:shadow-lg transition-all">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Transparent Pricing</h2>
          <Tabs defaultValue="small" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="small">Small Dents</TabsTrigger>
              <TabsTrigger value="medium">Medium Dents</TabsTrigger>
              <TabsTrigger value="large">Large Dents</TabsTrigger>
            </TabsList>
            <TabsContent value="small">
              <Card>
                <CardHeader>
                  <CardTitle>Small Dent Repair</CardTitle>
                  <CardDescription>Pricing for minor dents and dings</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHeader>Number of Dents</TableHeader>
                        <TableHeader>Price Range</TableHeader>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1-5</TableCell>
                        <TableCell>$50 - $150</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>6-10</TableCell>
                        <TableCell>$100 - $250</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>11+</TableCell>
                        <TableCell>$200 - $400</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="medium">
              <Card>
                <CardHeader>
                  <CardTitle>Medium Dent Repair</CardTitle>
                  <CardDescription>Pricing for moderate-sized dents</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHeader>Number of Dents</TableHeader>
                        <TableHeader>Price Range</TableHeader>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1-3</TableCell>
                        <TableCell>$150 - $300</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>4-7</TableCell>
                        <TableCell>$250 - $500</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>8+</TableCell>
                        <TableCell>$400 - $800</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="large">
              <Card>
                <CardHeader>
                  <CardTitle>Large Dent Repair</CardTitle>
                  <CardDescription>Pricing for significant dent damage</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHeader>Number of Dents</TableHeader>
                        <TableHeader>Price Range</TableHeader>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>1-2</TableCell>
                        <TableCell>$300 - $600</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>3-5</TableCell>
                        <TableCell>$500 - $1000</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>6+</TableCell>
                        <TableCell>$800 - $1500+</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <p className="text-center mt-8 text-sm text-muted-foreground">
            Note: Prices may vary based on the location and severity of the dents. Contact us for a personalized quote.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-blue-50 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How long does hail damage repair typically take?",
                    answer: "The duration of hail damage repair can vary depending on the extent of the damage. Most repairs can be completed within a few hours to one day. For more severe cases, it might take 2-3 days. We always strive to return your vehicle as quickly as possible without compromising on the quality of our work."
                  },
                  {
                    question: "Do you work with all insurance companies?",
                    answer: "Yes, we work with all major insurance companies and can handle the claims process for you. Our team is experienced in dealing with insurance adjusters and can help ensure you receive fair compensation for the repairs. We offer direct billing to your insurance company, making the process hassle-free for you."
                  },
                  {
                    question: "What is paintless dent repair (PDR) and how does it work?",
                    answer: "Paintless Dent Repair (PDR) is a technique used to remove minor dents and dings without affecting the original paint of your vehicle. Our skilled technicians use specialized tools to carefully massage the dented metal back to its original position from behind the panel. This method is highly effective for hail damage and preserves your car's factory finish, maintaining its value."
                  },
                  {
                    question: "Is there a warranty on your hail damage repairs?",
                    answer: "We stand behind the quality of our work. All our hail damage repairs come with a lifetime warranty. If you ever experience any issues with the areas we've repaired, simply bring your vehicle back, and we'll fix it at no additional cost to you."
                  }
                ].map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-24 bg-white overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-500" />
                  <p>Lubbock, Longview and Dallas/Fort Worth Metroplex</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-500" />
                  <p>(806) 730-0565</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-500" />
                  <p>info@globalpdr.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-blue-500" />
                  <p>Mon-Fri: 8am-6pm, Sat: 9am-3pm</p>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mb-4">Schedule a Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                      <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-900 text-white overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <Image
                src="https://imgur.com/nYIJuF2.png"
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