import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Primary Contact */}
      <div className="bg-card rounded-2xl border border-border p-6">
        <h3 className="text-xl font-serif font-bold text-foreground mb-4">Contact Information</h3>

        <div className="space-y-4">
          <a href="tel:+12390000000" className="flex gap-3 items-start hover:text-primary transition-colors">
            <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm text-foreground/60">Phone</div>
              <div className="font-semibold text-foreground">+1 (239) 000-0000</div>
            </div>
          </a>

          <a
            href="mailto:info@ritterroyalty.com"
            className="flex gap-3 items-start hover:text-primary transition-colors"
          >
            <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm text-foreground/60">Email</div>
              <div className="font-semibold text-foreground">info@ritterroyalty.com</div>
            </div>
          </a>

          <div className="flex gap-3 items-start">
            <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm text-foreground/60">Location</div>
              <div className="font-semibold text-foreground">Southwest Florida</div>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm text-foreground/60">Hours</div>
              <div className="font-semibold text-foreground">
                <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                <div>Sat: 10:00 AM - 4:00 PM</div>
                <div>Sun: By Appointment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-secondary/30 rounded-2xl border border-border p-6">
        <h3 className="text-lg font-serif font-bold text-foreground mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="/listings/florida" className="text-primary hover:text-primary/80 transition-colors">
              Browse Florida Listings
            </a>
          </li>
          <li>
            <a href="/listings/international" className="text-primary hover:text-primary/80 transition-colors">
              International Markets
            </a>
          </li>
          <li>
            <a href="/about" className="text-primary hover:text-primary/80 transition-colors">
              About Our Team
            </a>
          </li>
          <li>
            <a href="/" className="text-primary hover:text-primary/80 transition-colors">
              Back to Home
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
