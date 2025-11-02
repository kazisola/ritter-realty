"use client"

import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true)
  }, [])

  return (
    <section className="pb-24">
      <div className="container bg-orange-700/5 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-orange-700 uppercase tracking-widest">
                  Welcome to Ritter Royalty
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Discover Luxury Real Estate
              </h1>

              <p className="text-base text-gray-700 leading-relaxed max-w-lg">
                Experience extraordinary properties across Southwest Florida and exclusive international markets. We
                specialize in connecting discerning clients with their dream estates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-3 bg-orange-700 text-white rounded-lg font-medium hover:bg-orange-700/90 transition-colors flex items-center justify-center gap-2">
                  Explore Listings
                  <ChevronRight size={20} />
                </button>
                <button className="px-8 py-3 border-2 border-orange-700 text-orange-700 rounded-lg font-medium hover:bg-primary/5 transition-colors">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div>
                  <div className="text-3xl font-serif font-bold text-orange-700">500+</div>
                  <div className="text-sm text-gray-600">Properties Listed</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-orange-700">15+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-orange-700">2M+</div>
                  <div className="text-sm text-gray-600">Combined SqFt</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className={`transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/luxury-residential-house.jpg"
                  alt="Luxury residential property"
                  width={100}
                  height={100}
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Small Images Grid */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/commercial-office-building-luxury.jpg"
                  alt="Commercial property"
                  width={100}
                  height={100}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/beachfront-luxury-villa-sunset.jpg"
                  alt="Beachfront property"
                  width={100}
                  height={100}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
