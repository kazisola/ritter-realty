"use client"

import { useState } from "react"
import { Search, MapPin, DollarSign, Home } from "lucide-react"

export function AdvancedSearch() {
  const [searchType, setSearchType] = useState("all")

  return (
    <section className="py-12 bg-secondary/40 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Find Your Perfect Property</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-foreground/70 mb-2">Location</label>
              <div className="flex items-center gap-2 bg-background rounded-lg px-4 py-3 border border-border">
                <MapPin size={18} className="text-accent" />
                <input
                  type="text"
                  placeholder="City or neighborhood"
                  className="flex-1 bg-transparent outline-none text-foreground placeholder:text-foreground/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground/70 mb-2">Price Range</label>
              <div className="flex items-center gap-2 bg-background rounded-lg px-4 py-3 border border-border">
                <DollarSign size={18} className="text-accent" />
                <select className="flex-1 bg-transparent outline-none text-foreground">
                  <option>Any price</option>
                  <option>$0 - $1M</option>
                  <option>$1M - $5M</option>
                  <option>$5M - $10M</option>
                  <option>$10M+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground/70 mb-2">Property Type</label>
              <div className="flex items-center gap-2 bg-background rounded-lg px-4 py-3 border border-border">
                <Home size={18} className="text-accent" />
                <select className="flex-1 bg-transparent outline-none text-foreground">
                  <option>All types</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Land</option>
                </select>
              </div>
            </div>

            <div className="flex items-end">
              <button className="w-full bg-primary text-primary-foreground rounded-lg py-3 font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <Search size={18} />
                Search
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setSearchType("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                searchType === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-foreground hover:border-accent"
              }`}
            >
              All Listings
            </button>
            <button
              onClick={() => setSearchType("residential")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                searchType === "residential"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-foreground hover:border-accent"
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setSearchType("commercial")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                searchType === "commercial"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-foreground hover:border-accent"
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setSearchType("investment")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                searchType === "investment"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-foreground hover:border-accent"
              }`}
            >
              Investment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
