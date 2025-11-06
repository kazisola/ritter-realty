"use client"

import { Phone, Mail, MapPin, Copy, ExternalLink } from "lucide-react"
import { useState } from "react"

export function DirectContactCard() {
  const [copied, setCopied] = useState("")

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(""), 2000)
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main contact card */}
          <div className="lg:col-span-2 bg-linear-to-br from-teal-700/20 to-secondary/20 rounded-2xl p-12 border border-teal-700/30">
            <div className="mb-8">
              <h2 className="text-4xl font-serif font-bold text-foreground mb-2">Loyal Ritter</h2>
              <p className="text-lg text-teal-700 font-semibold">Senior Broker Associate</p>
              <p className="text-foreground/70">Corr Commercial Advisors</p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center justify-between group cursor-pointer hover:bg-white p-4 rounded-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-700/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Direct Phone</p>
                    <p className="text-2xl font-bold text-foreground">941–830–3618</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("941–830–3618", "phone")}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {copied === "phone" ? (
                    <span className="text-sm text-green-600 font-medium">Copied!</span>
                  ) : (
                    <Copy className="w-5 h-5 text-teal-700" />
                  )}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between group cursor-pointer hover:bg-white p-4 rounded-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-700/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Address</p>
                    <p className="text-lg font-bold text-foreground">Loyal@dubairealestateinvestments.com</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("Loyal@dubairealestateinvestments.com", "email")}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {copied === "email" ? (
                    <span className="text-sm text-green-600 font-medium">Copied!</span>
                  ) : (
                    <Copy className="w-5 h-5 text-teal-700" />
                  )}
                </button>
              </div>

              {/* Office */}
              <div className="flex items-center justify-between group cursor-pointer hover:bg-white p-4 rounded-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-700/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-teal-700" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Office</p>
                    <p className="text-lg font-bold text-foreground">Southwest Florida & Dubai</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-teal-700" />
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-teal-700/20">
              <a
                href="tel:941-830-3618"
                className="flex-1 px-6 py-3 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-700/90 transition-all duration-300 text-center"
              >
                Call Now
              </a>
              <a
                href="mailto:Loyal@dubairealestateinvestments.com"
                className="flex-1 px-6 py-3 border-2 border-teal-700 text-teal-700 font-semibold rounded-lg hover:bg-teal-700/10 transition-all duration-300 text-center"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Quick response info */}
          <div className="bg-transparent rounded-2xl p-8 border border-teal-700/15">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Response Time</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-teal-700 font-semibold mb-1">Phone Inquiries</p>
                <p className="text-gray-600 font-medium">Within 2 hours</p>
              </div>
              <div>
                <p className="text-sm text-teal-700 font-semibold mb-1">Email Inquiries</p>
                <p className="text-gray-600 font-medium">Within 4 hours</p>
              </div>
              <div>
                <p className="text-sm text-teal-700 font-semibold mb-1">Schedule Consultation</p>
                <p className="text-gray-600 font-medium">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
