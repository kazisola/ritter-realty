"use client"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

interface TimelineEvent {
  year: string
  title: string
  description: string
  highlight: string
}

const timeline: TimelineEvent[] = [
  {
    year: "2000",
    title: "Career Launch",
    description: "Started real estate career in Washington State",
    highlight: "Foundation",
  },
  {
    year: "2007",
    title: "Florida Expansion",
    description: "Relocated to Florida to serve diverse markets",
    highlight: "Growth",
  },
  {
    year: "2013",
    title: "International Focus",
    description: "Specialized in international commercial real estate",
    highlight: "Global",
  },
  {
    year: "2018",
    title: "Ethics Leadership",
    description: "Served as Chairman of Standards & Ethics Committee",
    highlight: "Leadership",
  },
  {
    year: "2022",
    title: "Dubai Expertise",
    description: "Launched luxury property investments in Dubai",
    highlight: "Innovation",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description: "Trusted advisor to high-net-worth individuals globally",
    highlight: "Excellence",
  },
]

export function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">Journey of Excellence</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A quarter-century of building trust, delivering results, and transforming real estate opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline visualization */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-teal-700 to-secondary" />

              {/* Timeline items */}
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div key={index} className="pl-24 cursor-pointer group" onClick={() => setActiveIndex(index)}>
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-teal-700 text-white scale-125 shadow-lg"
                          : "bg-white border-2 border-teal-700 text-teal-700 group-hover:scale-110"
                      }`}
                    >
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <div
                      className={`transition-all duration-300 ${
                        activeIndex === index ? "opacity-100 translate-x-0" : "opacity-60 group-hover:opacity-100"
                      }`}
                    >
                      <span className="text-3xl font-bold text-teal-700">{event.year}</span>
                      <h3 className="text-2xl font-serif font-bold text-foreground mt-2">{event.title}</h3>
                      <p className="text-gray-600 mt-2">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats panel */}
          <div className="bg-linear-to-br from-teal-700/10 to-secondary/10 rounded-2xl p-8 border border-teal-700/20 h-fit sticky top-24">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Key Milestones</h3>
            <div className="space-y-6">
              <div className="border-b border-teal-700/20 pb-6">
                <div className="text-5xl font-bold text-teal-700">25+</div>
                <p className="text-foreground/80 mt-2">Years of Experience</p>
              </div>
              <div className="border-b border-teal-700/20 pb-6">
                <div className="text-5xl font-bold text-teal-700">100+</div>
                <p className="text-foreground/80 mt-2">Successful Transactions</p>
              </div>
              <div className="border-b border-teal-700/20 pb-6">
                <div className="text-5xl font-bold text-teal-700">6+</div>
                <p className="text-foreground/80 mt-2">Countries Served</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-teal-700">$500M+</div>
                <p className="text-foreground/80 mt-2">Total Volume Transacted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
