'use client'

import { motion } from 'framer-motion'
import { Search, Clock, MessageSquare, CheckCircle, TrendingUp, Target, Sparkles, FileText } from 'lucide-react'
import { UIMockup } from './UIMockup'
import { FlowDiagram } from './FlowDiagram'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const step1Flow = [
  { id: '1', label: 'Discover Investors', icon: <Search className="h-6 w-6" /> },
  { id: '2', label: 'Detect Signals', icon: <TrendingUp className="h-6 w-6" /> },
  { id: '3', label: 'Match to Deals', icon: <Target className="h-6 w-6" /> },
]

const step2Flow = [
  { id: '1', label: 'Analyze Signals', icon: <Sparkles className="h-6 w-6" /> },
  { id: '2', label: 'Calculate Intent', icon: <TrendingUp className="h-6 w-6" /> },
  { id: '3', label: 'Prioritize Queue', icon: <Clock className="h-6 w-6" /> },
]

const step3Flow = [
  { id: '1', label: 'Personalize Message', icon: <MessageSquare className="h-6 w-6" /> },
  { id: '2', label: 'Select Channel', icon: <Target className="h-6 w-6" /> },
  { id: '3', label: 'Auto Follow-up', icon: <CheckCircle className="h-6 w-6" /> },
]

const step4Flow = [
  { id: '1', label: 'Share Data Room', icon: <FileText className="h-6 w-6" /> },
  { id: '2', label: 'Answer Questions', icon: <MessageSquare className="h-6 w-6" /> },
  { id: '3', label: 'Close Faster', icon: <CheckCircle className="h-6 w-6" /> },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">How It Works</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            An AI-powered capital raising platform that helps you find, prioritize, and engage investors
          </p>
        </motion.div>

        {/* Step 1 */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Badge className="bg-primary">Step 1</Badge>
                <h3 className="text-3xl font-bold">Find the Right Investors</h3>
              </div>
              <p className="mt-4 text-lg text-muted-foreground">
                Identifies new and existing investors and detects signals that they may have fresh capital. 
                Matches investors to the right deal.
              </p>
              <div className="mt-8">
                <FlowDiagram steps={step1Flow} direction="horizontal" />
              </div>
            </div>
            <UIMockup title="Scout Agent - Investor Discovery">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">New Investors Discovered</h4>
                  <Badge>12 this week</Badge>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Investor</TableHead>
                      <TableHead>Intent Score</TableHead>
                      <TableHead>Match</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Sarah Chen</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={85} className="w-20" />
                          <span className="text-sm font-medium">85%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">High</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Michael Park</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={72} className="w-20" />
                          <span className="text-sm font-medium">72%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Medium</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Emma Rodriguez</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={91} className="w-20" />
                          <span className="text-sm font-medium">91%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">High</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </UIMockup>
          </motion.div>
        </div>

        {/* Step 2 */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <UIMockup title="Intent OS - Prioritization Dashboard" className="lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Top Priority Investors</h4>
                  <Badge variant="outline">Ready Now</Badge>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Sarah Chen', score: 92, trend: 'up', signals: 3 },
                    { name: 'Emma Rodriguez', score: 88, trend: 'up', signals: 2 },
                    { name: 'Michael Park', score: 75, trend: 'up', signals: 1 },
                  ].map((investor) => (
                    <Card key={investor.name} className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{investor.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {investor.signals} new signals detected
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{investor.score}</div>
                          <div className="text-xs text-muted-foreground">Intent Score</div>
                        </div>
                      </div>
                      <Progress value={investor.score} className="mt-2" />
                    </Card>
                  ))}
                </div>
              </div>
            </UIMockup>
            <div className="lg:order-2">
              <div className="mb-4 flex items-center gap-2">
                <Badge className="bg-primary">Step 2</Badge>
                <h3 className="text-3xl font-bold">Reach Out at the Right Time</h3>
              </div>
              <p className="mt-4 text-lg text-muted-foreground">
                Prioritizes investors most likely to say yes based on real-world signals, 
                no guessing or mass emailing.
              </p>
              <div className="mt-8">
                <FlowDiagram steps={step2Flow} direction="horizontal" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Step 3 */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Badge className="bg-primary">Step 3</Badge>
                <h3 className="text-3xl font-bold">Reach Out the Right Way</h3>
              </div>
              <p className="mt-4 text-lg text-muted-foreground">
                Creates warm, personalized outreach tied to each investor's interests and 
                handles follow-ups automatically.
              </p>
              <div className="mt-8">
                <FlowDiagram steps={step3Flow} direction="horizontal" />
              </div>
            </div>
            <UIMockup title="Nurture Agent - Message Composer">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">To: Sarah Chen</label>
                  <div className="rounded-md border bg-muted/50 p-3">
                    <p className="text-sm">
                      Subject: Opportunity aligned with your recent exit
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Personalized Message</label>
                  <div className="rounded-md border bg-muted/50 p-3">
                    <p className="text-sm text-muted-foreground">
                      Hi Sarah,<br />
                      <br />
                      Congratulations on your recent exit! I noticed you might be looking for new opportunities...
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm">Send Email</Button>
                  <Button size="sm" variant="outline">Schedule Follow-up</Button>
                </div>
              </div>
            </UIMockup>
          </motion.div>
        </div>

        {/* Step 4 */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <UIMockup title="Vault Agent - Interactive Data Room" className="lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Deal Documents</h4>
                  <Badge>12 files</Badge>
                </div>
                <div className="space-y-2">
                  {['Financial Models', 'Property Reports', 'Market Analysis'].map((category) => (
                    <Card key={category} className="p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{category}</span>
                        </div>
                        <Badge variant="outline">4 files</Badge>
                      </div>
                    </Card>
                  ))}
                </div>
                <div className="rounded-md border bg-primary/5 p-3">
                  <p className="text-sm font-medium">AI Q&A Available</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Get instant answers to investor questions
                  </p>
                </div>
              </div>
            </UIMockup>
            <div className="lg:order-2">
              <div className="mb-4 flex items-center gap-2">
                <Badge className="bg-primary">Step 4</Badge>
                <h3 className="text-3xl font-bold">Close with Less Friction</h3>
              </div>
              <p className="mt-4 text-lg text-muted-foreground">
                Gives investors a simple, interactive data room where questions are answered 
                instantly, speeding up decisions.
              </p>
              <div className="mt-8">
                <FlowDiagram steps={step4Flow} direction="horizontal" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

