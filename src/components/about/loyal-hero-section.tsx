"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowDown, MapPin, Award, Globe } from "lucide-react"
import Image from "next/image"

export function LoyalHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-linear-to-br from-background via-background to-teal-700/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-teal-700/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-40 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 h-screen max-md:h-max flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content side */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-teal-700 text-sm font-semibold uppercase tracking-widest">
                <div className="w-10 h-0.5 bg-teal-700" />
                Elite Broker
              </div>
              <h1 className="text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
                Loyal <span className="text-teal-700">Ritter</span>
              </h1>
              <p className="text-xl text-gray-600 font-light">
                Senior Broker Associate | 25+ Years of Expertise | International Real Estate Visionary
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-teal-700" />
                <span className="text-gray-700 font-medium">Global Markets</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-teal-700" />
                <span className="text-gray-700 font-medium">Award-Winning</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-teal-700" />
                <span className="text-gray-700 font-medium">Dubai Specialist</span>
              </div>
            </div>

            {/* <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
              &quot;My goal is to serve my clients to the best of my abilities with honesty, ethics, and hard work.&quot;
            </p> */}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-700/90 transition-all duration-300 inline-block text-center hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <button className="px-8 py-4 border-2 border-teal-700 text-teal-700 font-semibold rounded-lg hover:bg-teal-700/10 transition-all duration-300">
                Download Portfolio
              </button>
            </div>
          </div>

          {/* Image side */}
          <div
            className={`relative h-[500px] transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="absolute inset-0 bg-linear-to-br from-teal-700/30 to-secondary/30 rounded-2xl" />
            <Image
              src="/images/loyal-headshot.jpg"
              alt="Loyal Ritter - Senior Broker Associate"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-teal-700" />
        </div>
      </div>
    </section>
  )
}
