"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

const images = [
  {
    src: "/images/luxury-residential-house.jpg",
    alt: "Luxury residential property",
  },
  {
    src: "/images/commercial-office-building-luxury.jpg",
    alt: "Commercial property",
  },
  {
    src: "/images/beachfront-luxury-villa-sunset.jpg",
    alt: "Beachfront property",
  },
]

export function HeroSection() {
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState({ properties: 0, countries: 0, sqft: 0 })

  useEffect(() => {
    // Animate numbers
    let start = 0
    const duration = 1500
    const increment = 20
    const timer = setInterval(() => {
      start += increment
      setCount({
        properties: Math.min(500, Math.floor((start / duration) * 500)),
        countries: Math.min(15, Math.floor((start / duration) * 15)),
        sqft: Math.min(2, Math.floor((start / duration) * 2)),
      })
      if (start >= duration) clearInterval(timer)
    }, 30)
  }, [])

  useEffect(() => {
    // Rotate images every few seconds
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  // Compute current positions
  const large = images[index]
  const small1 = images[(index + 1) % images.length]
  const small2 = images[(index + 2) % images.length]

  return (
    <section className="pb-24">
      <div className="container bg-[#dbb55c15] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="space-y-6 max-sm:text-center">
              <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-[#dbb45c]">
                Welcome to Ritter Realty
              </p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight"
              >
                Discover Luxury Real Estate
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base text-gray-700 leading-relaxed max-w-lg"
              >
                Experience extraordinary properties across Southwest Florida and exclusive international markets. We
                specialize in connecting discerning clients with their dream estates.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <button className="px-8 py-3 bg-[#dbb45c] text-white rounded-full font-medium hover:bg-[#cdaa5a] transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-105 cursor-pointer">
                  Explore Listings
                  <ChevronRight size={20} />
                </button>
                <button className="px-8 py-3 border border-[#dbb45c] text-[#dbb45c] rounded-full font-medium hover:bg-primary/5 transition-colors shadow-sm hover:shadow-md cursor-pointer">
                  Learn More
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="grid grid-cols-3 gap-4 max-sm:gap-2 pt-8"
              >
                <div className="">
                  <div className="text-3xl font-serif font-bold text-[#00786F]">{count.properties}+</div>
                  <div className="text-sm text-gray-600">Properties Listed</div>
                </div>
                <div className="">
                  <div className="text-3xl font-serif font-bold text-[#00786F]">{count.countries}+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="">
                  <div className="text-3xl font-serif font-bold text-[#00786F]">{count.sqft}M+</div>
                  <div className="text-sm text-gray-600">Combined SqFt</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            layout
            className="grid grid-cols-2 gap-4 relative"
            transition={{ layout: { duration: 1.2, ease: "easeInOut" } }}
          >
            {/* Large Image */}
            <motion.div
              key={large.src}
              layout
              initial={{ opacity: 0.6, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
              className="col-span-2 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={large.src}
                alt={large.alt}
                width={800}
                height={600}
                className="w-full h-96 object-cover"
              />
            </motion.div>

            {/* Small Images */}
            {[small1, small2].map((img) => (
              <motion.div
                key={img.src}
                layout
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
