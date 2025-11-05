export function MissionSection() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card p-10 rounded-2xl border border-border">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              To provide unparalleled real estate expertise and personalized service that empowers clients to make
              informed decisions. We're committed to delivering exceptional value through market knowledge, integrity,
              and an unwavering focus on client success.
            </p>
          </div>
          <div className="bg-card p-10 rounded-2xl border border-border">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              To be recognized as the most trusted luxury real estate partner across Florida and international markets,
              known for exceptional service, innovative solutions, and transformative client experiences. We envision a
              future where luxury real estate is seamlessly accessible to those who appreciate excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
