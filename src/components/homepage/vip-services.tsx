"use client"

import { Crown, Briefcase, Shield, Zap } from "lucide-react"

export function VIPServices() {
  const services = [
    {
      icon: Crown,
      title: "VIP Concierge",
      description: "Dedicated concierge team handling all aspects of your property acquisition",
    },
    {
      icon: Briefcase,
      title: "Legal & Tax Expertise",
      description: "Navigate complex transactions with our expert legal and tax advisors",
    },
    {
      icon: Shield,
      title: "Privacy Protection",
      description: "Complete discretion and privacy for all high-profile transactions",
    },
    {
      icon: Zap,
      title: "Fast-Track Closing",
      description: "Expedited closing process with dedicated transaction management",
    },
  ]

  return (
    <section className="pb-24">
      <div className="container py-16 bg-orange-700/5">
        <div className="mb-16">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Premium Services</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mt-2">Exclusive VIP Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mt-4">
            White-glove service for discerning clients who demand excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-linear-to-br from-orange-700/20 to-teal-600/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-orange-700" />
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to experience luxury real estate at the highest level?
          </p>
          <button className="px-8 py-3 bg-orange-700 text-white rounded-lg font-semibold text-sm hover:bg-orange-700/90 transition-colors">
            Schedule Private Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
