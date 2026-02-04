"use client"
import { useState } from "react"
import { Phone, Mail, Video, Share2, Heart } from "lucide-react"
import { IProperty } from "@/types/property"

interface PropertyContactSidebarProps {
  property: IProperty
}

const PropertyContactSidebar = ({ property }: PropertyContactSidebarProps) => {
  const [isFavorited, setIsFavorited] = useState(false)
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="space-y-4">
      {/* Agent Card */}
      <div className="bg-white border border-slate-900/10 rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-orange-700/20 to-cyan-600/20 h-24" />
        <div className="px-6 pb-6">
          <div className="flex items-center gap-4 -mt-8 mb-4">
            <div className="w-16 h-16 bg-[#dbb45c] rounded-full border-4 border-white flex items-center justify-center text-xl font-bold text-white">
              LR
            </div>
          </div>
          <h3 className="text-lg font-bold">Loyal Ritter</h3>
          <p className="text-sm text-gray-600 mb-4">Senior Broker Associate</p>
          <div className="space-y-2 text-sm text-gray-800 mb-4">
            <p>Ritter Realty LLC</p>
            <p>25+ Years Experience</p>
          </div>
          <a
            href="tel:9418303618"
            className="flex items-center gap-2 text-[#dbb45c] hover:text-[#d3a844] font-semibold text-sm mb-2"
          >
            <Phone size={16} />
            941–830–3618
          </a>
          <a
            href="mailto:loyal@ritterrealtyllc.com"
            className="flex items-center gap-2 text-[#dbb45c] hover:text-[#d3a844] font-semibold text-sm"
          >
            <Mail size={16} />
            loyal@ritterrealtyllc.com
          </a>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <button className="w-full bg-[#dbb45c] text-white py-3 rounded-lg font-semibold hover:bg-[#d3a844] transition-colors cursor-pointer">
          Request More Info
        </button>
        <button className="w-full bg-[#dbb55c8b] text-foreground py-3 rounded-lg font-semibold hover:bg-[#dbb55cb5] transition-colors flex items-center justify-center gap-2 cursor-pointer">
          <Video size={18} />
          Schedule Tour
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className={`p-3 rounded-lg transition-all font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer ${isFavorited
              ? "bg-red-500/10 border-red-500/30 text-red-500"
              : "bg-[#f0be4928] border-border text-foreground hover:border-primary/50"
            }`}
        >
          <Heart size={18} fill={isFavorited ? "currentColor" : "none"} />
          Save
        </button>
        <button className="p-3 rounded-lg bg-[#f0be4928] hover:border-primary/50 transition-all font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer">
          <Share2 size={18} />
          Share
        </button>
      </div>

      {/* Contact Form */}
      <div className="bg-white border border-slate-900/10 rounded-xl p-4">
        <h4 className="font-semibold text-gray-900 mb-4">Interested?</h4>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-3 py-2 bg-background border border-slate-700/10 rounded-lg text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-3 py-2 bg-background border border-slate-700/10 rounded-lg text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <textarea
            placeholder="Your message..."
            rows={3}
            className="w-full px-3 py-2 bg-background border border-slate-700/10 rounded-lg text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          />
          <button
            type="submit"
            className="w-full bg-[#dbb45c] text-white py-3 rounded-lg font-semibold hover:bg-[#d5a83f] transition-colors text-sm cursor-pointer"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  )
}

export default PropertyContactSidebar;