const team = [
  {
    name: "David Ritter",
    role: "Founder & Principal Broker",
    expertise: "Luxury Residential & Commercial",
    image: "/placeholder.svg?key=team1",
  },
  {
    name: "Jennifer Royalty",
    role: "International Markets Director",
    expertise: "Global Investment Properties",
    image: "/placeholder.svg?key=team2",
  },
  {
    name: "Michael Chen",
    role: "Commercial Real Estate Specialist",
    expertise: "Office & Retail Investments",
    image: "/placeholder.svg?key=team3",
  },
  {
    name: "Sarah Williams",
    role: "Residential Specialist",
    expertise: "Luxury Homes & Waterfront",
    image: "/placeholder.svg?key=team4",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Our Expert Team</h2>
          <p className="text-lg text-foreground/60">Dedicated professionals with deep market expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden bg-secondary/30">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-foreground text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-foreground/60">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
