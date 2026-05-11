 # NEPTA AI — Full Site Redesign Prompt

> Save as `PROMPT.md` in repo root. Paste the prompt in Section 9 as your first message to Cursor.

---

## 1. Context

You're working in the existing **nepta.ai** repo: **Next.js (Pages Router)**.

The current live site is positioned narrowly around "AI-powered capital raising for real estate syndicators" with a waitlist signup as the primary CTA. That positioning is outdated.

**The new positioning**: NEPTA is **Vertical Agents as a Service for the real estate industry**. We build and deploy AI agents that run the operational layer of real estate firms — capital raising, leasing operations, investor relations, property management, and more on the roadmap.

**Scope of this rebuild**: two pages.
1. `/` — the landing page
2. `/signup` — the existing waitlist page, rebranded to match the new positioning (functionality preserved, visual/copy aligned with the landing)

Both pages share one design system and one layout (nav + footer). Build the landing page first, lock the design system, then apply the same system to `/signup`. Do not abstract shared components prematurely — abstract only after a pattern has been used twice.

**Goal**: a serious operator, investor, or scout lands here, immediately understands what NEPTA is and what it does, takes the team seriously, and either signs up for the waitlist or reaches out directly. Closer to a serious infrastructure company's homepage than a SaaS landing page.

---

## 2. Workflow — pause between steps

### Step 2.1 — Audit (do this first, no code yet)

Report back on:

1. File tree under `pages/`, `components/`, `styles/`, `lib/`, `public/`.
2. Map of which components are used by which pages (`/`, `/signup`, anything else).
3. Styling system in use (Tailwind / CSS Modules / styled-components / plain CSS). Reference the config files.
4. **Exact hex values** of the existing palette — primary purple, white/off-white, grays, any accent colors. Pull from the codebase, do not guess.
5. Existing UI primitives I can reuse: buttons, section wrappers, cards, animation utilities, form components.
6. Photos / logos / assets in `public/` (especially the NEPTA logo mark — extract and preserve).
7. The existing `/signup` form: what fields it captures, what handler it calls, what service it submits to (Mailchimp / HubSpot / custom API / etc.). Preserve this exactly. Only the visual wrapper changes.
8. Any analytics / pixel snippets (the current site has a Facebook pixel — note where and how it's loaded).

Output as a structured report. Then **stop and wait**.

### Step 2.2 — Teardown plan

Propose:
- Components to delete (anything tied to the old capital-raising-only narrative — fake investor dashboards, agent mockup widgets, "reactive workflow" diagrams, outcome stat blocks).
- Components to keep or modify (logo, nav, footer, button primitives, form primitives, the signup submit handler).
- New components needed.
- The new `pages/index.tsx` and `pages/signup.tsx` structure with imports.

Wait for approval before deleting anything.

### Step 2.3 — Build order

1. Build the **landing page** section by section in the order in Section 5. After each section: render, review, approve, move on. Do not stream the entire page at once.
2. Once landing is approved end-to-end, lock the design system (colors, type, spacing, motion patterns).
3. Apply the locked design system to **`/signup`** as specified in Section 6.
4. Final QA pass per Section 8.

---

## 3. Design system

### 3.1 Color — keep what's already there

Use the existing NEPTA palette pulled in Step 2.1. The vibe is:

- White and very pale off-white backgrounds
- Existing brand **purple** as the dominant accent — for headlines, eyebrows, key emphasis, hover states, small accent shapes
- Dark near-black for primary text, mid-gray for secondary, lighter gray for tertiary
- Very pale lavender-gray for subtle surface contrast (highlighted cards, alternating sections)
- Hairline gray for dividers

Do **not** introduce navy, black backgrounds, gold, dark mode, or new brand colors. Brand stays purple-on-white.

Define as CSS variables (or extend `tailwind.config`). One source of truth, used by both pages.

### 3.2 Typography

- **Display / headlines**: a serif with personality. If the current site already loads a serif via `next/font`, keep it. Otherwise load **Fraunces** (weights 400/600/700, optical sizing enabled) via `next/font/google`. Use for h1, h2, and the hero headline.
- **Body / UI**: clean geometric sans. Match existing if loaded (likely Inter). Otherwise load **Inter** via `next/font/google`.
- **Hero headline**: very large (clamp 44px → 84px), tight letter-spacing (-0.02em), line-height 1.05–1.1.
- **Section headlines**: clamp 32px → 56px, similar tight spacing.
- **Body**: 17–18px, line-height 1.65–1.7, comfortable for reading.
- **Eyebrows / section labels**: 11–12px, uppercase, tracked 0.12–0.14em, brand purple.

### 3.3 Layout principles

- **Generous whitespace.** 100–140px vertical section padding on desktop, 64–80px on mobile.
- **Left-aligned, not centered.** Headlines and body live in max-widths of 680–880px. Avoid the "centered hero with stats below, repeated for every section" template.
- **Editorial feel.** Think serious infrastructure homepage, not Gamma-deck-turned-landing-page.
- **Thin 1px dividers** in lightest gray instead of heavy card shadows. Flat, refined, restrained.
- **One decorative element max for the hero**: a single soft radial purple tint in the corner, very low opacity. Nothing else. No floating orbs, no gradient meshes, no animated blobs.

### 3.4 Motion

Restrained. Specifically:
- Subtle fade-up on scroll for section headings and cards (`framer-motion` if already a dependency; otherwise CSS + `IntersectionObserver`).
- Hero text staggers in on load (60–80ms between elements).
- Hover states on cards: very subtle background tint shift only. No scale, no shadow, no rotation.
- No parallax, no scroll-jacking, no auto-playing video.

### 3.5 Banned patterns

Do not produce any of:
- Generic "AI startup" purple gradient hero with a 3D glass orb on the right
- Fake "Trusted by" logo strip
- Bento grid with mixed-size feature cards
- Animated terminal/code window showing fake AI output
- Pricing section (no public pricing)
- FAQ accordion
- Testimonial carousel with fake quotes
- Chatbot widget in the corner
- "Built with [stack badges]" footer
- Stat counters that animate from 0 on scroll
- A separate "Team" or "About Us" section on the landing page (intentionally omitted — founders are introduced only through the Contact section)

---

## 4. Voice

This is the most important section. Read it twice.

### 4.1 Rules

- Direct, plain, operator-to-operator. Short sentences. Facts over hype.
- lowercase friendly. Sentence case for headings. Never Title Case, never ALL CAPS.
- No em dashes. Use periods, commas, or restructure the sentence.
- No exclamation points anywhere.
- No marketing openers: "Imagine if…", "What if…", "Picture this…", "In a world where…"
- No CTA microcopy like "Let's chat!", "Drop us a line", "Reach out!"
- **Banned words**: leverage, seamlessly, synergy, empower, transform, unlock, supercharge, elevate, robust, revolutionize, cutting-edge, next-generation, harness, enable (as a verb), best-in-class, end-to-end (as buzzword), agentic (as buzzword).

### 4.2 Voice samples — calibrate to these

These are the difference between landing page copy I want and the generic version you'll default to if not constrained.

**Hero headline:**
- ❌ Bad: "Revolutionize Real Estate with AI-Powered Agents"
- ❌ Bad: "Unlock the Future of Real Estate Operations"
- ✅ Good: "AI agents that run real estate firms."
- ✅ Good: "We build the agents that run real estate operations."

**Hero sub-headline:**
- ❌ Bad: "Empowering operators to seamlessly transform their workflow with cutting-edge AI."
- ✅ Good: "NEPTA designs and deploys vertical AI agents for real estate operators. One agent at a time, until the entire operational layer runs itself."

**Agent card description:**
- ❌ Bad: "Our Capital Raising Agent leverages advanced AI to seamlessly transform your investor outreach."
- ✅ Good: "Sources investors, scores intent, runs outreach, and books meetings. Deployed across two raises so far."

**Contact section:**
- ❌ Bad: "Ready to transform your real estate business? Let's chat!"
- ✅ Good: "If you run a real estate firm and want to see what we've built, get in touch."

**Signup page headline:**
- ❌ Bad: "Join the Waitlist and Revolutionize Your Workflow!"
- ✅ Good: "Get on the list. We'll be in touch."

### 4.3 Source material

The pitch deck I've shared contains the right facts, numbers, and positioning. Use it as inspiration only, not as a copy source. Specifically:
- Do not lift sentences from the deck verbatim
- Do not reuse the deck's "Today vs. Tomorrow" comparison framing on the landing page
- Do not include the "We don't know what we don't know" investor-ask framing
- The deck is pitch material. The site is something different.

When you write copy, draft 2–3 options for any headline or section intro and show me before committing. I'd rather pick from options than re-edit one draft.

---

## 5. Landing page (`/`) structure

Build in this order. **No problem statement section. No team section.** Founders introduced only in Contact.

### Section A — Nav

Sticky top. Transparent over hero, gains subtle white bg + hairline bottom border on scroll.
- Left: NEPTA wordmark (use existing logo from `public/` if there; otherwise typeset "NEPTA" in the display serif at weight 700).
- Right: one text link "Contact" that scrolls to the contact section, plus a small "Join waitlist" button (quiet purple, not loud) that links to `/signup`.

### Section B — Hero

Left-aligned, single column, max-width ~880px. No image, no illustration, no fake product mockup. Type-driven only.

Content beats (you write the copy — show me 2–3 options each):
- **Eyebrow** (small, uppercase, purple): the category — "Vertical agents as a service" or similar
- **Headline** (display serif, very large): the clearest one-line statement of what NEPTA does. Operator can grasp it in 2 seconds.
- **Sub-headline** (body, ~19px, max-width ~560px, secondary text color): one short paragraph expanding the headline. What we build, who for, why it matters. No more than 2 sentences.
- **Quiet stat row** below the sub-head: three numbers from the deck (capital raised, projects deployed, bootstrapped revenue) styled small with hairline vertical dividers. They are proof points, not a billboard. Don't shout.

No CTA button in the hero. The nav's "Join waitlist" handles intent.

### Section C — What we build

Section label: `What we build` (or similar — your call)

Section headline: one line introducing the agents. Frame them as proof of what NEPTA does, not as a product catalog. Visitor should walk away thinking "these people actually ship things," not "here are SKUs."

Layout: **2x2 grid of agent cards**. Generous cards (~40px padding), thin 1px dividers between them rather than four floating boxes. Editorial grid feel.

Each card has:
- Small status pill at top: `Live` (purple-tinted bg, purple text) or `Roadmap` (gray-tinted bg, gray text). Sentence case, not ALL CAPS.
- Tiny index: `01`, `02`, `03`, `04`
- Agent name in serif, ~22–24px
- One-line description in your voice
- Thin divider
- 2–3 short proof lines below the divider, each prefixed with a small purple dot

Source content (deck — do not copy verbatim, rewrite in voice):

1. **Capital Raising Agent** — Live. Investor sourcing, outreach, nurture, conversion. Deck stats: $1.45M+ raised across 2 deals in 6 months, ~83x return on marketing spend, ~$0.012 cost per dollar raised.
2. **Leasing Operations Agent** — Live. Lead routing, contracts, invoicing, SMS reminders. Deck stats: +27% lead-to-close rate, 575+ hours saved per leasing season, $45K admin hire avoided.
3. **Investor Nurture Suite** — Live. Personalized newsletters, market reports, deal updates. Deck stats: 5–10 hours saved weekly, keeps database warm between raises.
4. **Property Management Agent** — Roadmap. Tenant tickets, maintenance, customer service. Replaces the ops headcount entirely.

Below the grid, one quiet line (small, muted) signaling there's more coming. Don't be cute about it.

### Section D — Traction

Section label: `Traction`

Section headline: one line. Direct. Something like "Bootstrapped. Clients keep coming back." in your voice.

Layout: a small horizontal block of 3–4 stats. Number in serif, label below in small uppercase tracked. Hairline vertical dividers between. Same restrained styling as the hero stat row but slightly larger.

Stats from the deck:
- $100K+ bootstrapped revenue
- 53% client return rate
- 130% net dollar retention
- $6–8K average monthly revenue

Optional: one short sentence below the stat row mentioning the three business models (revenue share, monthly retainer, custom deployment) in a single sentence, not as a feature grid. Keep this restrained — it's a landing page, not a pricing page.

After the stat row, place **one quiet line of italicized serif text** in muted color, max-width ~480px:
`Built by two operators in Montréal.`

This is the only place on the landing page that hints at the founders. Do not expand it into a section.

### Section E — Contact

Section label: `Contact`

Section headline: short, direct. Invite people who fit (operators, investors, builders) without sounding like a sales page. You write it.

Layout: two simple founder contact blocks side by side. **No form, no waitlist on this section.** (Waitlist lives on `/signup`.)

Each block:
- Name in serif (~22px)
- Email (plain text link)
- Phone (plain text, not a link)
- LinkedIn (plain text link)

Julian:
- julian@neptaai.com
- +1 438 882 8831
- linkedin.com/in/julian-etauri

Lucas:
- lucas@neptaai.com
- +1 438 501 7336
- linkedin.com/in/lucas-legatos

Below the two blocks, a single horizontal divider, then a quiet secondary line:
`Prefer the waitlist? Sign up here.` (the "Sign up here" is a text link to `/signup`)

### Section F — Footer

One line. Small, muted, left or center aligned (your call).

Suggested format: `NEPTA AI · Montréal, QC · [year]`

No social icons, no sitemap, no legal links unless something's legally required (in which case ask me first).

---

## 6. Signup page (`/signup`) structure

The signup page is **minimal by design**. Same nav, same footer, same fonts, same colors — visually continuous with the landing. The middle is just a focused form.

**Preserve the existing form's submit handler exactly** — same fields, same destination, same payload shape, same success/error handling. Only the wrapper changes.

### Section A — Nav

Same nav as landing. On `/signup` the nav's "Join waitlist" button is replaced with a `← Back` text link to `/`.

### Section B — Form section

Centered vertically in the viewport (minus nav/footer), left-aligned content inside a max-width ~520px container.

Content beats (you write the copy — show me 2–3 options each):
- **Eyebrow** (small, uppercase, purple): "Waitlist" or similar
- **Headline** (display serif, ~40–56px): one line. The voice sample for the signup headline above is the target tone.
- **Sub-headline** (body, ~17px, max-width ~440px, secondary text): one short sentence explaining what happens after they sign up. No promises about timing.
- **Form**: stack of inputs (whatever fields the existing form has — preserve them). Inputs styled to match the design system: thin 1px border, hairline gray, focus ring in brand purple, no rounded pills (subtle 4–6px radius), 17px body text inside inputs, generous height (52–56px).
- **Submit button**: solid brand purple background, white text, sentence case label (e.g. "Join the waitlist"), full width of the form column, same height as inputs. Subtle hover darken.
- **Confirmation state**: after successful submit, replace the form with a short message in the same column. Headline in serif: "You're on the list." Body: one short line. No emojis, no exclamation points.

### Section C — Footer

Same footer as landing.

---

## 7. Technical requirements

- **Framework**: Next.js Pages Router. Do not migrate to App Router.
- **TypeScript**: match existing file conventions.
- **Styling**: match existing system. Don't introduce a new styling library.
- **Fonts**: load via `next/font/google`, not `<link>` tags in `_document`.
- **Images**: `next/image` for all photos.
- **Shared layout**: nav and footer should be shared components used by both pages. Don't duplicate.
- **Form handler**: preserve the existing `/signup` submit logic exactly — same endpoint, same payload shape, same success/error handling.
- **Accessibility**: visible focus rings on all interactive elements, keyboard navigation works end-to-end on both pages, form inputs have proper labels (visible or `sr-only`), WCAG AA color contrast on body text.
- **Responsive**: mobile-first. Test both pages at 375 / 768 / 1024 / 1440. Hero scales cleanly. Agent grid collapses to single column on mobile. Signup form is comfortable on mobile (no zoom on input focus).
- **SEO meta** in `<Head>`:
  - `/` Title: `NEPTA · AI-native real estate, one agent at a time`
  - `/signup` Title: `NEPTA · Waitlist`
  - Descriptions: short, in voice, ~150 chars each. Draft 2 options per page and show me.
  - Preserve existing OG image if present; flag if missing.
- **Analytics**: preserve any existing pixels or analytics snippets (the current site has a Facebook pixel — keep it firing on both pages).
- **Performance**: target Lighthouse 95+ on desktop for both pages. No heavy libraries unless already in the project.

---

## 8. After completion

Once both pages are built and approved:

1. Run dev server, confirm both pages render cleanly at all breakpoints (375 / 768 / 1024 / 1440).
2. Confirm `/signup` form actually submits to the same endpoint as before — do not change the submit destination.
3. Run `next build`, report warnings/errors.
4. List every file created, modified, or deleted.
5. Flag any decisions you made without explicit approval.

---

## 9. First message to send Cursor

> Read `PROMPT.md` in full. Do not write any code yet. Execute **Step 2.1 (Audit)** only and report back. Specifically: list the files, map which components belong to which pages, identify the styling system, extract the exact hex values of the existing purple / white / gray palette from the codebase, document how the current `/signup` form submits (endpoint, payload, service), and locate any analytics pixels. Then stop and wait for approval before proceeding.

