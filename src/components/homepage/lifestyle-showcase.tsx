"use client"

import Image from "next/image"

export function LifestyleShowcase() {
  return (
    <section className="pb-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-teal-700 uppercase tracking-widest">Luxury Living</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
              More Than a Property, It&apos;s a Lifestyle
            </h2>
            <p className="text-base text-gray-800 mb-6">
              Our properties aren&apos;t just residences or commercial spaces—they&apos;re gateways to extraordinary experiences.
              From private yacht clubs to Michelin-starred dining, our communities offer unparalleled amenities.
            </p>

            <div className="space-y-4">
              {[
                "Private marina access & waterfront clubs",
                "Concierge services available 24/7",
                "Exclusive member-only events",
                "World-class fitness & wellness centers",
                "Fine dining partnerships",
                "Art gallery & cultural spaces",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teal-600" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-3 bg-orange-700 text-white rounded-lg font-medium hover:bg-orange-700/90 transition-colors">
              Explore Lifestyle Benefits
            </button>
          </div>

          <div className="relative">
            <Image
              src="/images/waterfront-modern-estate-luxury-home.jpg"
              alt="Luxury lifestyle"
              className="rounded-2xl shadow-2xl"
              width={550}
              height={550}
            />
            <div className="absolute -bottom-8 -right-8 max-sm:-right-4 bg-orange-700 text-white rounded-2xl p-6 max-sm:p-4 max-w-xs max-sm:w-72 shadow-xl">
              <div className="text-3xl max-sm:text-2xl font-serif font-bold mb-2">5-Star Amenities</div>
              <p>Experience luxury at every turn with world-class facilities and services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
