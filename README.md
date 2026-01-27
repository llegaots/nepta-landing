# NEPTA Landing Page

A beautiful, modern landing page for NEPTA - an AI-powered capital raising platform for real estate syndicators.

## Overview

This is a single-page landing page built with Next.js that showcases NEPTA's value proposition, features, and benefits. The page is designed to be visually rich with diagrams, flowcharts, and UI mockups to help syndicators understand how the platform solves their capital raising challenges.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
capital-raising-platform/
├── app/
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/
│   ├── landing/            # Landing page sections
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── InsightSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── OutcomeSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── LandingHeader.tsx
│   │   ├── FlowDiagram.tsx
│   │   ├── UIMockup.tsx
│   │   └── TimelineDiagram.tsx
│   └── ui/                 # Reusable UI components (shadcn/ui)
├── lib/
│   └── utils.ts            # Utility functions
└── styles/
    └── globals.css          # Global styles and theme
```

## Features

- **Hero Section**: Compelling headline with value proposition
- **Problem Section**: Visual representation of current pain points
- **Insight Section**: Core insight with before/after comparison
- **How It Works**: 4-step process with visual diagrams and UI mockups
- **Outcome Section**: Results visualization with metrics
- **CTA Section**: Final call-to-action
- **Smooth Animations**: Scroll-triggered animations using Framer Motion
- **Responsive Design**: Mobile-friendly layout

## Deployment

This project is ready to be deployed to any platform that supports Next.js:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **AWS Amplify**: Connect your Git repository
- **Other platforms**: Build with `npm run build` and deploy the output

## License

MIT
