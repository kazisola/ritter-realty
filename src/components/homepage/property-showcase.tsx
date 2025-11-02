"use client"

import { MapPin, Home, Briefcase } from "lucide-react"

const properties = [
  {
    id: 1,
    title: "Modern Waterfront Estate",
    location: "Naples, Florida",
    type: "Residential",
    price: "$4.8M",
    image: "/waterfront-modern-estate-luxury-home.jpg",
    icon: Home,
  },
  {
    id: 2,
    title: "Premium Commercial Plaza",
    location: "Miami Beach, Florida",
    type: "Commercial",
    price: "$12M",
    image: "/premium-commercial-office-building-miami.jpg",
    icon: Briefcase,
  },
  {
    id: 3,
    title: "Gulf-View Penthouse",
    location: "Sarasota, Florida",
    type: "Residential",
    price: "$3.2M",
    image: "/penthouse-gulf-view-luxury-florida.jpg",
    icon: Home,
  },
]

export function PropertyShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">Featured Properties</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Handpicked luxury properties across our premier markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property, index) => {
            const Icon = property.icon
            return (
              <div
                key={property.id}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Icon className="w-6 h-6 text-primary bg-background/90 rounded-full p-1.5" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-sm text-primary font-semibold uppercase tracking-wider">
                    <MapPin size={16} />
                    {property.location}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">{property.title}</h3>
                  <p className="text-sm text-foreground/60 mb-4">{property.type} Property</p>
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <span className="text-2xl font-serif font-bold text-primary">{property.price}</span>
                    <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Browse All Listings
          </button>
        </div>
      </div>
    </section>
  )
}
