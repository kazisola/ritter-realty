"use client"

import { useState, type FormEvent } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
          Thank you for your message! We'll get back to you within 24 hours.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary transition-colors"
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary transition-colors"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
        <input
          type="email"
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary transition-colors"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
        <input
          type="tel"
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary transition-colors"
          placeholder="+1 (239) 000-0000"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Interest *</label>
        <select
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary transition-colors"
        >
          <option>Select an option</option>
          <option>Florida Residential</option>
          <option>Florida Commercial</option>
          <option>International Properties</option>
          <option>Investment Consultation</option>
          <option>General Inquiry</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
        <select className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary transition-colors">
          <option>Select a range</option>
          <option>Under $1M</option>
          <option>$1M - $3M</option>
          <option>$3M - $5M</option>
          <option>$5M - $10M</option>
          <option>$10M+</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
        <textarea
          required
          rows={5}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Tell us more about your real estate needs..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-foreground/60 text-center">
        We respect your privacy. Your information will only be used to respond to your inquiry.
      </p>
    </form>
  )
}
