'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { NeptaNav } from '@/components/layout/NeptaNav'
import { NeptaFooter } from '@/components/layout/NeptaFooter'
import { landing } from '@/lib/landing-ui'

const inputClass =
  'h-[3.35rem] rounded-md border-border/90 bg-background text-[17px] px-4 shadow-none transition-shadow focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0'

const linkClass =
  'underline decoration-primary/25 decoration-1 underline-offset-[5px] transition-colors hover:text-foreground hover:decoration-primary/50'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('handleSubmit called')

    setIsSubmitting(true)
    setError(null)

    console.log('Form submitted with data:', formData)
    console.log('About to make fetch request...')

    try {
      console.log('Inside try block - Sending POST request to /api/waitlist')

      const requestBody = JSON.stringify(formData)
      console.log('Request body:', requestBody)

      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      })

      console.log('Fetch completed. Response status:', response.status)
      console.log('Response ok?', response.ok)

      const data = await response.json()
      console.log('Response data:', data)

      if (!response.ok) {
        const errorMessage = data.details
          ? `${data.error}: ${data.details}`
          : data.error || 'Failed to submit form'
        console.error('Form submission error:', errorMessage)
        throw new Error(errorMessage)
      }

      console.log('Form submitted successfully!')
      setSubmitted(true)
    } catch (err) {
      console.error('Form submission catch error:', err)
      console.error('Error type:', typeof err)
      console.error('Error details:', err)
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      console.log('Finally block - setting isSubmitting to false')
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <NeptaNav variant="signup" />

      <div className="flex flex-1 flex-col justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[520px]"
        >
          {!submitted ? (
            <>
              <p className={landing.eyebrow}>waitlist</p>
              <h1
                className={`${landing.displayHeading} mt-5 text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.08]`}
              >
                Get on the list. We will be in touch.
              </h1>
              <p className={`${landing.lead} mt-5 max-w-[440px]`}>
                Occasional updates as we ship agents and take on new deployments. No marketing drip.
              </p>

              <div className="mt-10 rounded-md border border-border/90 bg-muted/25 p-7 shadow-[0_1px_0_rgba(15,23,42,0.03)] sm:p-9">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="rounded-md border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">
                      {error}
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[13px] font-medium text-foreground/90">
                      Full name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[13px] font-medium text-foreground/90">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[13px] font-medium text-foreground/90">
                      Company name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[13px] font-medium text-foreground/90">
                      Phone number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={inputClass}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-[3.35rem] w-full rounded-md text-[17px] font-medium shadow-[0_1px_0_rgba(15,23,42,0.06)]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting…' : 'Join the waitlist'}
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className={`${landing.displayHeading} text-[clamp(2rem,4vw,2.75rem)] leading-tight`}>
                You are on the list.
              </h1>
              <p className={`${landing.lead} mt-5 max-w-[440px]`}>
                We have your details. When there is something worth sharing, we will email you.
              </p>
              <div className="mt-10">
                <Button variant="outline" className="h-12 rounded-md border-border/90 px-6" asChild>
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to home
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}

          {!submitted ? (
            <p className="mt-8 text-[13px] leading-relaxed text-muted-foreground">
              By submitting, you agree to our{' '}
              <Link href="#" className={linkClass}>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="#" className={linkClass}>
                Privacy Policy
              </Link>
              .
            </p>
          ) : null}
        </motion.div>
      </div>

      <NeptaFooter />
    </div>
  )
}
