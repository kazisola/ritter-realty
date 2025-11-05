import { Heart, Target, Zap, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest, transparent dealings in every transaction and relationship.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Unwavering commitment to the highest standards of service.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Forward-thinking approaches to solving real estate challenges.",
  },
  {
    icon: Users,
    title: "Client-First",
    description: "Your goals and satisfaction are always our top priority.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Our Core Values</h2>
          <p className="text-lg text-foreground/60">The principles guiding everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-foreground/60">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
