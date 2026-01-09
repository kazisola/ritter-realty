"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const images = [
  { src: "/images/luxury-residential-house.jpg", alt: "Modern Estate" },
  { src: "/images/commercial-office-building-luxury.jpg", alt: "Premium Office" },
  { src: "/images/beachfront-luxury-villa-sunset.jpg", alt: "Coastal Villa" },
]

export function HeroSection() {
  const router = useRouter()
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState({ properties: 0, countries: 0, experience: 0 })

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount({ properties: 120, countries: 5, experience: 25 })
    }, 500)
    
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#dbb55c15]">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#dbb55c15] -z-10" />

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content: Text & CTA */}
          <div className="lg:col-span-5 z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-[#9A8452] font-bold">
                  Welcome to Ritter Realty
                </span>
                <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-[1.1] tracking-tight">
                  Refined Living, <br />
                  <span className="italic text-[#9A8452]">Redefined.</span>
                </h1>
                <p className="text-base text-gray-600 max-w-md leading-relaxed font-light">
                  Experience extraordinary properties across Southwest Florida and exclusive international markets. We specialize in connecting discerning clients with their dream estates
                </p>
              </div>

              <div className="flex flex-wrap gap-5">
                <button 
                  onClick={() => router.push("/listings/hurricane-proof?type=residential")}
                  className="group relative px-8 py-4 bg-[#1A1A1A] text-white overflow-hidden transition-all cursor-pointer rounded-full"
                >
                  <span className="relative z-10 flex items-center gap-3 text-sm font-medium tracking-wide">
                    VIEW PORTFOLIO <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button 
                  onClick={() => router.push("/about")}
                  className="px-8 py-4 border border-gray-200 text-[#1A1A1A] hover:bg-white hover:shadow-xl transition-all text-sm font-medium tracking-wide flex items-center gap-3 cursor-pointer rounded-full"
                >
                  OUR STORY
                </button>
              </div>

              {/* Counter Section */}
              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-200">
                {[
                  { label: "Properties", value: count.properties },
                  { label: "Countries", value: count.countries },
                  { label: "Years", value: count.experience },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-serif text-[#1A1A1A]">{stat.value}+</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content: Advanced Image Layout */}
          <div className="lg:col-span-7 relative h-[600px] w-full">
            <div className="relative h-full w-full grid grid-cols-6 grid-rows-6 gap-4">
              
              {/* Main Image - Featured */}
              <motion.div 
                className="col-span-4 row-span-6 relative rounded-sm overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={images[index].src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[index].src}
                      alt={images[index].alt}
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Secondary Image - Top Right */}
              <motion.div 
                className="col-span-2 row-span-3 relative rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={images[(index + 1) % images.length].src}
                  alt="Gallery 1"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Tertiary Image - Bottom Right */}
              <motion.div 
                className="col-span-2 row-span-2 relative rounded-sm overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={images[(index + 2) % images.length].src}
                  alt="Gallery 2"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Video/Play Button Accent */}
              <motion.div 
                className="col-span-2 row-span-1 bg-[#9A8452] flex items-center justify-center cursor-pointer group"
                whileHover={{ backgroundColor: "#867347" }}
              >
                <div className="flex items-center gap-3 text-white">
                  <Play size={14} fill="white" className="group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold tracking-[.2em]">TOUR</span>
                </div>
              </motion.div>
            </div>

            {/* Floating Decorative Label */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-lg max-w-[200px] hidden md:block">
              <p className="text-[10px] text-[#9A8452] font-bold uppercase tracking-tighter mb-1">Featured Estate</p>
              <p className="text-sm font-serif text-[#1A1A1A] italic">The Azure Collection, Naples FL</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}