import Image from "next/image";

export function OfficeShowcaseSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">Global Presence</h2>
          <p className="text-xl text-gray-600">Serving clients worldwide with offices in key markets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Southwest Florida Office */}
          <div className="rounded-2xl overflow-hidden hover:border hover:border-teal-700 transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/luxury-real-estate-office-florida-interior-profess.jpg"
                alt="Southwest Florida Office"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                width={500}
                height={500}
              />
            </div>
            <div className="p-8 bg-linear-to-br from-teal-700/10 to-secondary/10">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Southwest Florida</h3>
              <p className="text-muted-foreground mb-4">Primary office serving residential and commercial properties</p>
              <p className="text-teal-700 font-semibold">941–830–3618</p>
            </div>
          </div>

          {/* Dubai Office */}
          <div className="rounded-2xl overflow-hidden hover:border hover:border-teal-700 transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/images/modern-luxury-office-dubai-skyline-professional-sp.jpg"
                alt="Dubai Office"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                width={500}
                height={500}
              />
            </div>
            <div className="p-8 bg-linear-to-br from-teal-700/10 to-secondary/10">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Dubai</h3>
              <p className="text-muted-foreground mb-4">Investment hub for international luxury properties</p>
              <p className="text-teal-700 font-semibold">Corr Commercial Advisors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
