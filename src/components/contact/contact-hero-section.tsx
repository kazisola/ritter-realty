"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Phone, Mail } from "lucide-react"

export function ContactHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] bg-linear-to-br from-background via-background to-teal-700/10 py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-bg-teal-700/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-40 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">Let&apos;s Connect</h1>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto mb-12">
            Have questions about luxury real estate, Dubai investments, or international markets? Reach out to Loyal
            Ritter directly.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Phone className="w-5 h-5 text-teal-700" />
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center gap-2 text-foreground font-medium">
              <MessageCircle className="w-5 h-5 text-teal-700" />
              <span>Fast Response</span>
            </div>
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Mail className="w-5 h-5 text-teal-700" />
              <span>Expert Guidance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
