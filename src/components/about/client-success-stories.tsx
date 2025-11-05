"use client"

import { Star, Quote } from "lucide-react"

interface ClientStory {
  name: string
  role: string
  company: string
  story: string
  rating: number
  highlight: string
}

const stories: ClientStory[] = [
  {
    name: "Microsoft Founding Member",
    role: "Investment Portfolio",
    company: "Tech Sector",
    story: "Successfully closed a high-profile hotel transaction that exceeded expectations",
    highlight: "Premium Hotel Transaction",
    rating: 5,
  },
  {
    name: "International Investor",
    role: "Dubai Real Estate",
    company: "Global Portfolio",
    story: "Secured luxury properties in Dubai with exceptional ROI and market positioning",
    highlight: "$25M+ Portfolio Build",
    rating: 5,
  },
  {
    name: "Family Office",
    role: "Multi-Market Strategy",
    company: "Wealth Management",
    story: "Coordinated international acquisitions across 5 countries with seamless execution",
    highlight: "Global Real Estate Strategy",
    rating: 5,
  },
]

export function ClientSuccessStories() {
  return (
    <section className="py-24 bg-gradient-to-br from-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">Proven Results</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From families finding dream homes to closing high-profile commercial deals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl p-8 border border-border hover:border-accent transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-accent/30" />
              </div>

              <p className="text-foreground/80 italic mb-6 leading-relaxed">"{story.story}"</p>

              <div className="border-t border-border pt-6">
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
                  {story.highlight}
                </div>
                <h3 className="font-serif font-bold text-foreground">{story.name}</h3>
                <p className="text-sm text-muted-foreground">{story.role}</p>
                <p className="text-sm text-accent font-medium">{story.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
