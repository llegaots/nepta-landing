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
import { fraunces } from '@/lib/fonts'

const inputClass =
  'h-14 rounded-md border-border text-[17px] px-4 shadow-none focus-visible:ring-2 focus-visible:ring-ring'

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

      <div className="flex flex-1 flex-col justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto w-full max-w-[520px]"
        >
          {!submitted ? (
            <>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">Waitlist</p>
              <h1
                className={`${fraunces.className} mt-4 text-[clamp(40px,5vw,56px)] font-semibold tracking-[-0.02em] leading-[1.08] text-foreground`}
              >
                Get on the list. We will be in touch.
              </h1>
              <p className="mt-4 max-w-[440px] text-[17px] leading-[1.7] text-muted-foreground">
                You will get occasional updates as we ship agents and take on new deployments.
              </p>

              <div className="mt-10 rounded-md border border-border bg-background p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                      {error}
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
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
                    <Label htmlFor="email">Email</Label>
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
                    <Label htmlFor="company">Company name</Label>
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
                    <Label htmlFor="phone">Phone number</Label>
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
                    className="h-14 w-full rounded-md text-[17px] font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting…' : 'Join the waitlist'}
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <h1
                className={`${fraunces.className} text-[clamp(36px,4vw,48px)] font-semibold tracking-tight text-foreground`}
              >
                You are on the list.
              </h1>
              <p className="mt-4 max-w-[440px] text-[17px] leading-[1.7] text-muted-foreground">
                We have your details. When there is something worth sharing, we will email you.
              </p>
              <div className="mt-10">
                <Button variant="outline" className="h-12 rounded-md" asChild>
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to home
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}

          {!submitted ? (
            <p className="mt-8 text-sm text-muted-foreground">
              By submitting, you agree to our{' '}
              <Link href="#" className="underline decoration-border underline-offset-4 hover:text-foreground">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="#" className="underline decoration-border underline-offset-4 hover:text-foreground">
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
