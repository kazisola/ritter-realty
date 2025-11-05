const stats = [
  {
    number: "25+",
    label: "Years Combined Experience",
  },
  {
    number: "1000+",
    label: "Properties Sold",
  },
  {
    number: "$2.5B+",
    label: "Transaction Volume",
  },
  {
    number: "15+",
    label: "International Markets",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl font-serif font-bold mb-2">{stat.number}</div>
              <div className="text-lg text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
