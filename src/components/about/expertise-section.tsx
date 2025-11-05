"use client"

import type React from "react"

import { Globe, Home, Building2, TrendingUp, Users, Shield } from "lucide-react"

interface Expertise {
  icon: React.ReactNode
  title: string
  description: string
}

const expertiseAreas: Expertise[] = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "International Markets",
    description: "Expert knowledge of global luxury real estate markets including Dubai, London, Paris, and Tokyo",
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Residential Luxury",
    description: "Specializing in high-end residential properties and estate acquisitions",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Commercial Real Estate",
    description: "Deep expertise in commercial transactions and investment opportunities",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Investment Strategy",
    description: "Strategic guidance for portfolio diversification and wealth building",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Client Advocacy",
    description: "Representing one client per transaction for undivided attention",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Ethics & Compliance",
    description: "Unwavering commitment to highest professional standards",
  },
]

export function ExpertiseSection() {
  return (
    <section className="py-24 bg-linear-to-br from-background to-teal-700/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">Core Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive capabilities across residential, commercial, and international real estate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="group bg-white/90 rounded-xl p-8 hover:border-teal-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-teal-700 group-hover:text-secondary transition-colors mb-4">{area.icon}</div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Unique value proposition */}
        <div className="mt-16 bg-linear-to-r from-teal-700/20 to-secondary/20 rounded-2xl p-12 border border-teal-700/30">
          <h3 className="text-3xl font-serif font-bold text-foreground mb-6">The Loyal Ritter Difference</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-teal-700 mb-2">Listener First</h4>
              <p className="text-gray-700 text-sm">
                Taking time to understand your goals and lifestyle before presenting options
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-teal-700 mb-2">One Client Focus</h4>
              <p className="text-gray-700 text-sm">
                Representing only one client per transaction for undivided loyalty and attention
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-teal-700 mb-2">Ethics Driven</h4>
              <p className="text-gray-700 text-sm">
                Treating others as you want to be treated - integrity is non-negotiable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
