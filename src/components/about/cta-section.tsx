import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-linear-to-br from-teal-700 to-teal-700/80 text-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-background/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-serif font-bold mb-6 text-white">Ready to Transform Your Real Estate Portfolio?</h2>
        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Connect with Loyal Ritter for personalized guidance on your next property investment or real estate
          opportunity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-teal-700 font-semibold rounded-lg hover:bg-background/90 transition-all duration-300 inline-flex items-center justify-center gap-2 hover:gap-3"
          >
            Schedule Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-background/10 transition-all duration-300">
            View Portfolios
          </button>
        </div>
      </div>
    </section>
  )
}