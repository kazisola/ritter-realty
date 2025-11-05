export function PhilosophySection() {
  return (
    <section className="py-24 bg-linear-to-br from-background via-teal-700/5 to-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">Guiding Principles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 border border-teal-700/15 text-center hover:border-teal-700 transition-all duration-300">
            <h3 className="text-2xl font-serif font-bold text-teal-700 mb-4">Integrity</h3>
            <p className="text-gray-600">
              Treat others as you want to be treated. Ethics are non-negotiable in every transaction.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-teal-700/15 text-center hover:border-teal-700 transition-all duration-300">
            <h3 className="text-2xl font-serif font-bold text-teal-700 mb-4">Listening</h3>
            <p className="text-gray-600">
              Understanding your goals and vision is the foundation of finding the perfect property.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-teal-700/15 text-center hover:border-teal-700 transition-all duration-300">
            <h3 className="text-2xl font-serif font-bold text-teal-700 mb-4">Excellence</h3>
            <p className="text-gray-600">
              Delivering exceptional results through dedication, hard work, and strategic expertise.
            </p>
          </div>
        </div>

        {/* Quote section */}
        <div className="bg-linear-to-r from-teal-700/20 to-secondary/20 rounded-2xl p-12 border border-teal-700/30 text-center">
          <blockquote className="text-3xl font-serif italic text-foreground mb-4">
            &quot;My goal is to serve my clients to the best of my abilities with honesty, ethics, and hard work.&quot;
          </blockquote>
          <p className="text-lg text-teal-700 font-semibold">— Loyal Ritter</p>
        </div>
      </div>
    </section>
  )
}
