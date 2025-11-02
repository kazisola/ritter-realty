"use client"

import { Zap, Target, TrendingUp } from "lucide-react"

export function InvestmentOpportunities() {
  const opportunities = [
    {
      icon: Target,
      title: "High-Yield Portfolio",
      description: "Commercial real estate in prime locations with 8-12% annual ROI potential",
      features: ["Portfolio diversification", "Quarterly returns", "Professional management"],
    },
    {
      icon: TrendingUp,
      title: "Development Projects",
      description: "Pre-launch luxury developments with strong appreciation potential",
      features: ["Early bird pricing", "Build-to-suit options", "Flexible timelines"],
    },
    {
      icon: Zap,
      title: "Opportunity Zones",
      description: "Tax-advantaged investments in emerging markets with rapid growth",
      features: ["Tax benefits", "Capital gains deferral", "Long-term wealth building"],
    },
  ]

  return (
    <section className="pb-24">
      <div className="container">
        <div className="mb-16">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Investment Solutions</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mt-2">
            Build Wealth Through Real Estate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opp, index) => {
            const Icon = opp.icon
            return (
              <div
                key={index}
                className="bg-linear-to-br from-orange-700/20 to-gray-100/20 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <Icon className="w-12 h-12 text-orange-700 mb-6" />
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{opp.title}</h3>
                <p className="text-gray-700 mb-6">{opp.description}</p>
                <ul className="space-y-3 mb-8">
                  {opp.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="w-2 h-2 rounded-full bg-teal-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-orange-700 font-semibold hover:text-orange-700/80 transition-colors">
                  Learn More →
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
