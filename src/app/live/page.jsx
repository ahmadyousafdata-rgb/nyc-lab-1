import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import Link from 'next/link'

const projects = [
  {
    title: 'Lead Qualification Agent (iMessage/SMS) – Real Estate',
    description:
      'Captures inbound leads, asks qualifying questions, schedules viewings, and updates your CRM in real time. Human-in-the-loop handoff for hot leads.',
    tags: ['Agents', 'CRM', 'Scheduling', 'iMessage/SMS'],
    cta: {
      label: 'Request live demo',
      href: 'mailto:info@nyxlab.ai?subject=Live%20Demo%20Request:%20Lead%20Qualification%20Agent&body=Hi%20nyx%20Lab%2C%20we%27d%20like%20a%20live%20walkthrough%20of%20the%20Lead%20Qualification%20Agent.',
    },
  },
  {
    title: 'Proposal & Presentation Automation – Sales Enablement',
    description:
      'Turns briefs and discovery notes into polished proposals and slide decks, integrates brand guidelines, and routes for approval in minutes.',
    tags: ['Docs', 'Slides', 'Approval Flows'],
    cta: {
      label: 'View sample output',
      href: 'mailto:info@nyxlab.ai?subject=Sample%20Request:%20Proposal%20%26%20Presentation%20Automation&body=Please%20send%20a%20sanitized%20proposal%2Fdeck%20sample.%20We%27re%20interested%20in%20adapting%20it%20to%20our%20brand.',
    },
  },
  {
    title: 'Inbox Triage + Follow-ups – Customer Ops',
    description:
      'Routes messages, drafts first responses, triggers follow-ups, and escalates exceptions. Reduces response times and keeps SLAs on track.',
    tags: ['Email', 'Routing', 'SLAs'],
    cta: {
      label: 'See flow',
      href: 'mailto:info@nyxlab.ai?subject=Live%20Demo%20Request:%20Inbox%20Triage%20%2B%20Follow-ups&body=We%27d%20like%20to%20see%20the%20triage%20and%20follow-up%20flow%20in%20action.',
    },
  },
  {
    title: 'Scheduling + CRM Sync – Multi-channel',
    description:
      'Books meetings via SMS/email, checks calendars, confirms attendance, and logs every touchpoint and note into your CRM automatically.',
    tags: ['Calendars', 'HubSpot', 'Salesforce'],
    cta: {
      label: 'Request live demo',
      href: 'mailto:info@nyxlab.ai?subject=Live%20Demo%20Request:%20Scheduling%20%2B%20CRM%20Sync',
    },
  },
  {
    title: 'E‑commerce Product Ops Assistant',
    description:
      'Generates enriched titles, descriptions, and attributes, fixes taxonomy, and syncs listings across channels. Optional human review gates.',
    tags: ['Catalog', 'Content', 'Automation'],
    cta: {
      label: 'View sample outputs',
      href: 'mailto:info@nyxlab.ai?subject=Sample%20Request:%20E-commerce%20Product%20Ops%20Assistant',
    },
  },
  {
    title: 'Healthcare Intake & Reminders',
    description:
      'Automates patient intake Q&A, appointment reminders, and updates to scheduling/EHR, with compliant data handling and opt-in flows.',
    tags: ['EHR/EMR', 'Scheduling', 'Compliance'],
    cta: {
      label: 'Discuss compliance and demo',
      href: 'mailto:support@nyxlab.ai?subject=Demo%20Request:%20Healthcare%20Intake%20%26%20Reminders&body=We%27d%20like%20to%20review%20compliance%20considerations%20and%20see%20a%20demo.',
    },
  },
]

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
      {children}
    </span>
  )
}

export default function LiveShowcase() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Container className="pt-20 pb-16">
          <SectionHeading
            eyebrow="Live Showcase"
            title="Live AI automation projects"
            description="A curated set of real workflows we design, build, and operate. Request a live walkthrough to see how they plug into your tools and deliver measurable results."
            align="center"
          />

          <section className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div key={p.title} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <div className="mt-5">
                  <Link
                    href={p.cta.href}
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                  >
                    {p.cta.label}
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </Container>
      </main>
      <Footer />
    </>
  )
}

