import { Quote, QuoteIcon, Star, TextQuote } from "lucide-react"

const testimonials = [
  {
    name: "Marcus Johnson",
    title: "Real Estate Investor",
    content: "Ritter Royalty made my commercial property search seamless. Exceptional expertise and service.",
    rating: 5,
  },
  {
    name: "Catherine Williams",
    title: "International Client",
    content: "Their international listings opened doors to opportunities I never knew existed. Highly recommended.",
    rating: 5,
  },
  {
    name: "David Martinez",
    title: "First-Time Buyer",
    content: "Professional, patient, and knowledgeable. They found my dream home in Florida.",
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
            <div key={index} className="relative p-8 bg-linear-to-br from-orange-700/20 to-gray-100/20 rounded-xl border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-800 mb-4 italic">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
              <span className="absolute right-5 bottom-5">
                <QuoteIcon size={60} className="opacity-10" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
