"use client"

import { Star, Award, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AgentSpotlight() {
  return (
    <section className="pb-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative max-h-[550px] max-w-[550px] bg-orange-700/5 p-10 rounded-full overflow-hidden group">
            <Image
              src={""}
              alt="Loyal Ritter - Senior Broker"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              width={100}
              height={100}
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-orange-700 text-sm font-semibold uppercase tracking-widest mb-4">
                <Star className="w-4 h-4 fill-current" />
                Featured Agent
              </div>
              <h2 className="text-5xl font-serif font-bold text-foreground mb-4">Meet Loyal Ritter</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Senior Broker Associate with 25+ years of experience in international real estate. Specializing in
                luxury properties and global investment opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-orange-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Industry Leadership</h3>
                  <p className="text-gray-600 text-sm">Former Chairman of Standards & Ethics Committee</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-orange-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Global Expert</h3>
                  <p className="text-gray-600 text-sm">Dubai, London, Paris, Tokyo and beyond</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star className="w-6 h-6 text-orange-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Proven Results</h3>
                  <p className="text-gray-600 text-sm">$500M+ in transactions | 100+ successful deals</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="px-14 py-3 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-700/90 transition-all duration-300 inline-block"
              >
                Contact Loyal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
