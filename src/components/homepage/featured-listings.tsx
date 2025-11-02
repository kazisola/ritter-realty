"use client"

import { Heart, MapPin, Bed, Bath, Ruler } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const featuredListings = [
  {
    id: 1,
    title: "Oceanfront Luxury Penthouse",
    location: "Miami Beach, Florida",
    price: "$8.5M",
    beds: 4,
    baths: 4,
    sqft: "5,200",
    image: "/images/luxury-residential-house.jpg",
    featured: true,
    discount: "New",
  },
  {
    id: 2,
    title: "Modern Downtown Plaza",
    location: "Tampa, Florida",
    price: "$15M",
    beds: 0,
    baths: 0,
    sqft: "45,000",
    image: "/images/commercial-office-building-luxury.jpg",
    featured: true,
    discount: "Investment",
  },
  {
    id: 3,
    title: "Beachfront Estate",
    location: "Naples, Florida",
    price: "$6.2M",
    beds: 5,
    baths: 5,
    sqft: "8,400",
    image: "/images/beachfront-luxury-villa-sunset.jpg",
    featured: false,
    discount: "Reduced",
  },
]

export function FeaturedListings() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  return (
    <section className="pb-24">
      <div className="container">
        <div className="mb-16">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Featured Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mt-2 mb-4">
            Our Signature Properties
          </h2>
          <p className="text-base text-gray-600 max-w-2xl">
            Curated collection of exceptional properties representing the pinnacle of luxury real estate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredListings.map((property) => (
            <div key={property.id} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={100}
                  height={100}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <button
                  onClick={() => toggleFavorite(property.id)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-3 transition-colors"
                >
                  <Heart
                    size={20}
                    className={`transition-colors ${favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-foreground"
                      }`}
                  />
                </button>

                {/* {property.discount && (
                  <div className="absolute bottom-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm">
                    {property.discount}
                  </div>
                )} */}
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex items-center gap-2 text-teal-700 text-sm font-semibold mb-1">
                    <MapPin size={16} />
                    {property.location}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">{property.title}</h3>
                </div>

                <div className="text-3xl font-serif font-bold text-orange-700">{property.price}</div>

                <div className="flex gap-6 text-sm text-gray-600 py-3 border-t border-border pt-4">
                  {property.beds > 0 && (
                    <div className="flex items-center gap-2">
                      <Bed size={18} className="text-teal-700" />
                      <span>{property.beds} Beds</span>
                    </div>
                  )}
                  {property.baths > 0 && (
                    <div className="flex items-center gap-2">
                      <Bath size={18} className="text-teal-700" />
                      <span>{property.baths} Baths</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Ruler size={18} className="text-teal-700" />
                    <span>{property.sqft} Sq Ft</span>
                  </div>
                </div>

                <button className="w-full bg-gray-500/10 hover:bg-gray-500/20 py-4 text-sm rounded-lg font-semibold transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
