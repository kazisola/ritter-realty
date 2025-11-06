import { Clock, MessageSquare, Phone, Calendar } from "lucide-react"

export function ResponseTimeSection() {
  return (
    <section className="py-16 bg-linear-to-r from-teal-700/20 to-secondary/20 border-y border-teal-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <Phone className="w-8 h-8 text-teal-700 mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-2xl font-bold text-teal-700">Within 2h</p>
            <p className="text-sm text-foreground/70">Average response</p>
          </div>

          <div className="text-center">
            <MessageSquare className="w-8 h-8 text-teal-700 mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-2xl font-bold text-teal-700">Within 4h</p>
            <p className="text-sm text-foreground/70">Average response</p>
          </div>

          <div className="text-center">
            <Calendar className="w-8 h-8 text-teal-700 mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Consultation</h3>
            <p className="text-2xl font-bold text-teal-700">Within 24h</p>
            <p className="text-sm text-foreground/70">Appointment booking</p>
          </div>

          <div className="text-center">
            <Clock className="w-8 h-8 text-teal-700 mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Available</h3>
            <p className="text-2xl font-bold text-teal-700">24/7</p>
            <p className="text-sm text-foreground/70">Emergency reach</p>
          </div>
        </div>
      </div>
    </section>
  )
}
