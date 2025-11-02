"use client"

import { Play, Globe } from "lucide-react"
import Image from "next/image"

export function VirtualTours() {
  const tours = [
    {
      title: "Oceanfront Penthouse 3D Tour",
      location: "Miami Beach",
      image: "/images/luxury-residential-house.jpg",
    },
    {
      title: "Commercial Hub Interactive Tour",
      location: "Downtown Tampa",
      image: "/images/commercial-office-building-luxury.jpg",
    },
    {
      title: "Beachfront Villa Virtual Walkthrough",
      location: "Naples",
      image: "/images/beachfront-luxury-villa-sunset.jpg",
    },
  ]

  return (
    <section className="pb-24">
      <div className="container bg-orange-700/5 py-16">
        <div className="mb-16">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Immersive Experience</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mt-2">Virtual Property Tours</h2>
          <p className="text-base text-gray-600 max-w-2xl mt-4">
            Explore every detail from anywhere with our cutting-edge 360° virtual tours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <Image
                src={tour.image || "/placeholder.svg"}
                alt={tour.title}
                width={100}
                height={100}
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="flex justify-end">
                  <Globe className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2">{tour.title}</h3>
                  <p className="text-white/80">{tour.location}</p>
                </div>
              </div>

              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-primary/80 transition-colors">
                  <Play size={32} className="text-white fill-white" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
