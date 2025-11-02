"use client"

export function MarketInsights() {
  const insights = [
    {
      title: "Southwest Florida Market Boom",
      excerpt: "The region continues to attract high-net-worth individuals seeking luxury real estate...",
      date: "Nov 2024",
      category: "Market Analysis",
    },
    {
      title: "Investment Opportunities in Emerging Markets",
      excerpt: "Our international portfolio expansion opens doors to unprecedented growth...",
      date: "Oct 2024",
      category: "Investment",
    },
    {
      title: "Luxury Real Estate Trends 2025",
      excerpt: "Sustainable design and smart home integration lead the charge in luxury properties...",
      date: "Oct 2024",
      category: "Trends",
    },
  ]

  return (
    <section className="pb-24">
      <div className="container py-16 bg-orange-700/5">
        <div className="mb-16">
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-widest">Insights & Analysis</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mt-2">Latest Market Insights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article
              key={index}
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-teal-600/10 text-teal-600 text-xs font-semibold rounded-full">
                  {insight.category}
                </span>
                <span className="text-xs text-gray-600">{insight.date}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">{insight.title}</h3>
              <p className="text-gray-600 mb-6">{insight.excerpt}</p>
              <button className="text-orange-700 font-semibold hover:text-primary/80 transition-colors">
                Read More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}