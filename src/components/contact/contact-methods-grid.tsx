"use client"

import type React from "react"

import { Phone, Mail, MessageCircle, Video, FileText, Calendar } from "lucide-react"

interface ContactMethod {
  icon: React.ReactNode
  title: string
  description: string
  action: string
  color: string
}

const methods: ContactMethod[] = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Direct Call",
    description: "Immediate conversation with Loyal for urgent matters",
    action: "Call 941–830–3618",
    color: "accent",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Consultation",
    description: "Detailed inquiry with attached documents and details",
    action: "Send Email",
    color: "accent",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Schedule Meeting",
    description: "Book a formal consultation at your convenience",
    action: "Schedule Now",
    color: "accent",
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Virtual Tour",
    description: "Video walkthrough of properties or investment opportunities",
    action: "Request Tour",
    color: "accent",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "WhatsApp Direct",
    description: "Quick messages and instant communication",
    action: "Message",
    color: "accent",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Portfolio Request",
    description: "Download investment portfolios and market reports",
    action: "Download",
    color: "accent",
  },
]

export function ContactMethodsGrid() {
  return (
    <section className="py-24 bg-gradient-to-br from-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">Ways to Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the communication method that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl p-8 border border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>

              <h3 className="text-xl font-serif font-bold text-foreground mb-3">{method.title}</h3>
              <p className="text-muted-foreground mb-6">{method.description}</p>

              <button className="px-6 py-2 bg-accent/20 text-accent font-semibold rounded-lg hover:bg-accent hover:text-background transition-all duration-300">
                {method.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
