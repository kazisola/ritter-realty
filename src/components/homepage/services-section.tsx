import { Building2, Globe, Award } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Residential Properties",
    description: "Stunning homes from elegant waterfront estates to contemporary urban residences.",
  },
  {
    icon: Briefcase,
    title: "Commercial Real Estate",
    description: "Prime office spaces, retail locations, and investment-grade properties.",
  },
  {
    icon: Globe,
    title: "International Markets",
    description: "Access to exclusive opportunities in Dubai, Saudi Arabia, and beyond.",
  },
  {
    icon: Award,
    title: "Expert Consultation",
    description: "Personalized guidance from industry experts for informed decisions.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-foreground/60">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Briefcase } from "lucide-react"
