import { Quote, QuoteIcon, Star, StarOff, StarsIcon, TextQuote } from "lucide-react"

const testimonials = [
  {
    name: "David & Sharon Eisfelder",
    title: "Home Buyers",
    content:
      "We found that your integrity and honesty are beyond reproach. You always kept your word. It was reassuring to know we could trust you completely.",
    rating: 5,
  },
  {
    name: "Tannie & Tim Girard",
    title: "Sellers & Buyers",
    content:
      "He truly cares about people and has very high ethics. We feel fortunate to have had his expertise in real estate and would send family and friends to Loyal with complete confidence.",
    rating: 5,
  },
  {
    name: "Laurie & Chris",
    title: "Home Buyers",
    content:
      "Loyal respected that we weren’t quite ready but still took the time to guide us — and ultimately helped us find our dream home. If you want an honest, down-to-earth realtor, look no further.",
    rating: 5,
  },
]

export function TestimonialSection() {
  return (
    <section className="pb-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600">What our satisfied clients say</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative p-8 bg-linear-to-br from-[#dbb45c30] to-[#efc35d49] rounded-xl border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
              <span className="absolute right-5 bottom-5">
                <QuoteIcon size={60} className="opacity-5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
