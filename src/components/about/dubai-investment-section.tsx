"use client"

import type React from "react"

import { TrendingUp, Zap, DollarSign, MapPin } from "lucide-react"
import Image from "next/image"

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Zero Income Tax",
    description: "No income, capital gains, or sales tax on investments",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visa Opportunity",
    description: "Visa provided with real estate investment",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Strong Growth",
    description: "Strong projected market value growth in dynamic market",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Income Potential",
    description: "Airbnb and leasing approved for rental income",
  },
]

export function DubaiInvestmentSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-teal-700/30 to-orange-700/30" />
            <Image
              src="/images/luxury-dubai-skyline-modern-architecture-palm-jume.jpg"
              alt="Dubai Luxury Properties"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-serif font-bold text-foreground mb-4">Dubai Real Estate Investments</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Unlock opportunities in one of the world&apos;s most dynamic and tax-friendly markets. Experience the journey
                from dream to reality with Loyal&apos;s global expertise and local insights.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-teal-700/20 flex items-center justify-center text-teal-700">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <button className="px-8 py-4 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-700/90 transition-all duration-300 hover:scale-105 inline-block">
                Explore Dubai Opportunities
              </button>
            </div>
          </div>
        </div>

        {/* Video callout */}
        <div className="mt-16 bg-linear-to-r from-teal-700/10 to-secondary/10 rounded-2xl p-12 border border-teal-700/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Watch the Journey</h3>
              <p className="text-gray-600">
                See these premium Dubai projects come to life. &quot;Experience the journey from a dream to reality.&quot;
              </p>
            </div>
            <button className="px-8 py-4 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-700/90 transition-all duration-300 shrink-0">
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
