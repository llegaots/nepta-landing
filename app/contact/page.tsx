"use client"

import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just show success state
    // In production, this would send to an API
    console.log("Form submitted:", formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f5f4f0] flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-black/10 flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="text-3xl font-semibold text-black mb-4">Thank you</h1>
          <p className="text-black/70 mb-8">
            We&apos;ve received your message and will get back to you within 24 hours.
          </p>
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-black text-white text-sm font-semibold rounded-xl hover:bg-black/80 transition-colors tracking-wide"
          >
            Back to Home
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f5f4f0] py-20 px-6">
      <div className="max-w-lg mx-auto">
        {/* Back link */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="font-pixel text-xs tracking-[0.25em] text-black">NEPTA A.I</span>
          <h1 className="text-4xl md:text-5xl font-semibold text-black mt-4 mb-4">
            Get in touch
          </h1>
          <p className="text-black/70 text-lg">
            Tell us about your workflow. We&apos;ll show you exactly where AI agents can help.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-black mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-black placeholder:text-black/40 focus:outline-none focus:border-black/30 focus:ring-2 focus:ring-black/5 transition-all"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-black placeholder:text-black/40 focus:outline-none focus:border-black/30 focus:ring-2 focus:ring-black/5 transition-all"
              placeholder="john@company.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-black placeholder:text-black/40 focus:outline-none focus:border-black/30 focus:ring-2 focus:ring-black/5 transition-all"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-black mb-2">
              Reason for Contact
            </label>
            <select
              id="reason"
              name="reason"
              required
              value={formData.reason}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-black focus:outline-none focus:border-black/30 focus:ring-2 focus:ring-black/5 transition-all appearance-none"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
            >
              <option value="" disabled>Select a reason</option>
              <option value="capital-raising">Capital Raising Agent</option>
              <option value="leasing">Leasing Agent</option>
              <option value="nurturing">Nurturing Agent</option>
              <option value="underwriting">Underwriting Agent</option>
              <option value="custom">Custom Agent Build</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white text-black placeholder:text-black/40 focus:outline-none focus:border-black/30 focus:ring-2 focus:ring-black/5 transition-all resize-none"
              placeholder="Tell us about your workflow and what you're looking to automate..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-4 bg-black text-white text-sm font-semibold rounded-xl hover:bg-black/80 transition-colors tracking-wide mt-8"
          >
            SEND MESSAGE
          </button>
        </form>

        <p className="text-sm text-black/50 mt-8 text-center">
          We typically respond within 24 hours.
        </p>
      </div>
    </main>
  )
}
