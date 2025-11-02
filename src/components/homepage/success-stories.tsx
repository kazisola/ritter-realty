"use client"

import { Star } from "lucide-react"

export function SuccessStories() {
  const stories = [
    {
      quote:
        "Ritter Royalty helped us find the perfect investment property within weeks. Their expertise and personal touch are unmatched.",
      author: "David Chen",
      role: "Tech Entrepreneur & Investor",
      rating: 5,
    },
    {
      quote:
        "After years of searching, their team found us a beachfront villa that exceeded all expectations. Truly exceptional service.",
      author: "Marie & Philippe Dubois",
      role: "Luxury Lifestyle Connoisseurs",
      rating: 5,
    },
    {
      quote:
        "Professional, responsive, and results-oriented. They turned our commercial real estate vision into reality.",
      author: "James Morrison",
      role: "Commercial Real Estate Developer",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Client Success</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mt-2">
            Success Stories & Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-secondary/40 to-background border border-border rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-lg text-foreground/80 mb-6 italic">"{story.quote}"</blockquote>

              <div className="border-t border-border pt-6">
                <div className="font-serif font-bold text-foreground">{story.author}</div>
                <div className="text-sm text-foreground/60">{story.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
