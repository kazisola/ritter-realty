"use client"

import { TrendingUp, BarChart3, PieChart, ArrowUpRight } from "lucide-react"

export function MarketData() {
  const metrics = [
    {
      icon: TrendingUp,
      label: "Market Growth",
      value: "+12.4%",
      description: "Year-over-year increase",
      trend: "up",
    },
    {
      icon: BarChart3,
      label: "Avg Sale Price",
      value: "$4.2M",
      description: "Luxury segment average",
      trend: "up",
    },
    {
      icon: PieChart,
      label: "Avg Days on Market",
      value: "23 days",
      description: "Faster than market average",
      trend: "down",
    },
    {
      icon: ArrowUpRight,
      label: "Investment ROI",
      value: "8.7%",
      description: "Average annual return",
      trend: "up",
    },
  ]

  return (
    <section className="py-16 bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground">Real Estate Market Insights</h2>
          <p className="text-foreground/60 mt-2">Live data from Ritter Royalty's exclusive market analysis</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-10 h-10 text-accent" />
                  <span
                    className={`text-sm font-semibold ${metric.trend === "up" ? "text-green-600" : "text-blue-600"}`}
                  >
                    {metric.trend === "up" ? "↑" : "↓"}
                  </span>
                </div>
                <div className="text-3xl font-serif font-bold text-foreground mb-2">{metric.value}</div>
                <div className="font-semibold text-foreground text-sm mb-1">{metric.label}</div>
                <div className="text-xs text-foreground/60">{metric.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
