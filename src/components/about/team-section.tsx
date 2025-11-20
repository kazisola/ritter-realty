


"use client"

import Image from "next/image"
import { Mail, Phone, Medal, Building, ArrowRight } from "lucide-react"

export function TeamSection() {
  return (
    <section className="py-24 bg-background relative">
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-700/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exceptional leadership, decades of experience, and dedication to helping you achieve real estate success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Loyal Ritter */}
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-teal-700/10 hover:shadow-2xl transition duration-300">
            <div className="relative h-72 w-full">
              <Image
                src="/images/loyal-headshot.jpg"
                alt="Loyal Ritter - Broker"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-3xl font-serif font-bold text-foreground">
                  Loyal Ritter
                </h3>
                <p className="text-teal-700 font-medium">Real Estate Broker</p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Medal className="w-4 h-4 text-teal-700" />
                  <span className="text-gray-700 font-medium">25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-teal-700" />
                  <span className="text-gray-700 font-medium">Global Markets</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-600 leading-relaxed">
                International real estate visionary with deep expertise in global luxury,
                commercial investments, and high-value international markets. Loyal has
                built a reputation for integrity, strategy, and delivering exceptional
                results for clients worldwide.
              </p>

              {/* Contact */}
              <div className="pt-4 space-y-2">
                <a
                  href="mailto:loyal@ritterrealtyllc.com"
                  className="flex items-center gap-2 text-teal-700 hover:underline"
                >
                  <Mail className="w-4 h-4" /> loyal@ritterrealtyllc.com
                </a>
                <a
                  href="tel:9418303618"
                  className="flex items-center gap-2 text-teal-700 hover:underline"
                >
                  <Phone className="w-4 h-4" /> +1 (941) 830-3618
                </a>
              </div>
            </div>
          </div>

          {/* Michael Garvey */}
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-teal-700/10 hover:shadow-2xl transition duration-300">
            <div className="relative h-72 w-full">
              <Image
                src="/images/michale.jpeg" // <-- add your photo here
                alt="Michael Garvey"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-3xl font-serif font-bold text-foreground">
                  Michael Garvey
                </h3>
                <p className="text-teal-700 font-medium">Real Estate Agent</p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Medal className="w-4 h-4 text-teal-700" />
                  <span className="text-gray-700 font-medium">Since 1984</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-teal-700" />
                  <span className="text-gray-700 font-medium">Commercial + Residential</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-600 leading-relaxed">
                Former Navy/Marine Corps Hospital Corpsman in Vietnam.
                Experienced ICU RN, REMAX franchise owner, and commercial mall manager.
                Managed multifamily & Airbnb investments in Hawaii and Florida.
                Over 40 years of real estate expertise.
              </p>

              {/* Contact */}
              <div className="pt-4 space-y-2">
                <a
                  href="mailto:michaelgarvey03@gmail.com"
                  className="flex items-center gap-2 text-teal-700 hover:underline"
                >
                  <Mail className="w-4 h-4" /> michaelgarvey03@gmail.com
                </a>
                <a
                  href="tel:8087453031"
                  className="flex items-center gap-2 text-teal-700 hover:underline"
                >
                  <Phone className="w-4 h-4" /> +1 (808) 745-3031
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
