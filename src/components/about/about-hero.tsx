import Image from "next/image";

export function AboutHeroSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Your Premier Real Estate Partner</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-4">
              With decades of combined experience, Ritter Royalty LLC stands as a beacon of excellence in luxury real
              estate. We specialize in connecting discerning clients with extraordinary properties across Southwest
              Florida and exclusive international markets.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-4">
              Our dedication to personalized service, market expertise, and attention to detail sets us apart. We don&apos;t
              just sell properties—we craft investment and lifestyle solutions.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Whether you&apos;re seeking a residential sanctuary, commercial investment, or international opportunity, we&apos;re
              committed to exceeding your expectations.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/placeholder.svg?key=about01" alt="Ritter Royalty office" className="w-full h-96 object-cover" width={400} height={400} />
          </div>
        </div>
      </div>
    </section>
  )
}
