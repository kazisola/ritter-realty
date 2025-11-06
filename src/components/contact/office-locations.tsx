const offices = [
  {
    city: "Naples, Florida",
    address: "123 Luxury Lane, Naples, FL 34102",
    phone: "+1 (239) 123-4567",
    email: "naples@ritterroyalty.com",
  },
  {
    city: "Miami, Florida",
    address: "456 Waterfront Ave, Miami, FL 33139",
    phone: "+1 (305) 234-5678",
    email: "miami@ritterroyalty.com",
  },
  {
    city: "International",
    address: "Available across Dubai, London, Paris & More",
    phone: "+1 (239) 000-0000",
    email: "international@ritterroyalty.com",
  },
]

export function OfficeLocations() {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Our Offices</h2>
          <p className="text-lg text-foreground/60">Connect with our team across multiple locations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">{office.city}</h3>
              <div className="space-y-3 text-sm text-foreground/70">
                <div>
                  <div className="font-semibold text-foreground mb-1">Address</div>
                  {office.address}
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Phone</div>
                  <a href={`tel:${office.phone}`} className="text-primary hover:text-primary/80 transition-colors">
                    {office.phone}
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Email</div>
                  <a href={`mailto:${office.email}`} className="text-primary hover:text-primary/80 transition-colors">
                    {office.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
