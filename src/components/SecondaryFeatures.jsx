"use client"

import { Container } from '@/components/Container'

function SparkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 3v4M12 17v4M4.93 6.34l2.83 2.83M16.24 15.17l2.83 2.83M3 12h4M17 12h4M6.34 19.07l2.83-2.83M15.17 7.76l2.83-2.83" strokeLinecap="round"/>
    </svg>
  )
}

function ChatIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M7 8h10M7 12h6" strokeLinecap="round"/>
      <path d="M5 5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/>
    </svg>
  )
}

function CalendarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M7 3v3M17 3v3" strokeLinecap="round"/>
      <rect x="4" y="6" width="16" height="14" rx="2"/>
      <path d="M6 10h12"/>
    </svg>
  )
}

function PuzzleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M9 3h3a2 2 0 1 1-2 2v2H7a2 2 0 0 0-2 2v2h2a2 2 0 1 1 2 2h2v2a2 2 0 0 0 2 2h2v-2a2 2 0 1 1 2-2h2V9a2 2 0 0 0-2-2h-2V5a2 2 0 0 0-2-2h-2" strokeLinejoin="round"/>
    </svg>
  )
}

function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 3 5 6v6c0 4.97 3.58 7.69 7 9 3.42-1.31 7-4.03 7-9V6l-7-3Z"/>
      <path d="M9 12l2 2 4-4" strokeLinecap="round"/>
    </svg>
  )
}

function ChartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 19h16M7 16v-6M12 16V8M17 16v-4" strokeLinecap="round"/>
    </svg>
  )
}

const features = [
  {
    name: 'Smart Lead Qualification',
    description:
      'Score and route leads by intent, budget, and location so reps focus on the highest‑probability conversations.',
    icon: SparkIcon,
  },
  {
    name: 'Omnichannel Engagement',
    description:
      'Consistent follow‑ups across WhatsApp, SMS, email, and voice with brand‑tuned messaging and timing.',
    icon: ChatIcon,
  },
  {
    name: 'Scheduling & Handoff',
    description:
      'Auto‑book calendar slots, send reminders, and hand off qualified leads with concise summaries.',
    icon: CalendarIcon,
  },
  {
    name: 'CRM Sync & Workflows',
    description:
      'Update CRM fields, trigger workflows, and create tasks across your existing stack.',
    icon: PuzzleIcon,
  },
  {
    name: 'Analytics & Reporting',
    description:
      'Track conversion, response time, and ROI with ready‑to‑share reports.',
    icon: ChartIcon,
  },
  {
    name: 'Security & Compliance',
    description:
      'PII‑safe logging, data minimization, and role‑based access baked in.',
    icon: ShieldIcon,
  },
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="AI automation for workflows"
      className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Automate the busywork. Scale what matters.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Nyx Lab deploys AI agents that qualify, nurture, schedule, and update your systems — so your team closes more with less effort.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid grid-cols-1 gap-2 sm:gap-3 lg:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <div key={item.name} className="group relative flex gap-x-4 rounded-lg p-4 hover:bg-slate-50">
                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-slate-100 group-hover:bg-white">
                  <item.icon aria-hidden="true" className="h-6 w-6 text-slate-600 transition-colors duration-200 group-hover:text-blue-600" />
                </div>
                <div>
                  <div className="font-display text-lg font-medium tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-blue-600">
                    {item.name}
                    <span className="absolute inset-0" />
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-slate-50 px-6 py-5">
            <div className="flex items-center gap-x-3">
              <h3 className="font-display text-sm font-semibold text-slate-900">Enterprise</h3>
              <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold text-blue-600">New</p>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Bring your own tools and data. We integrate with your CRM, helpdesk, and calendars to automate full‑funnel workflows.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
