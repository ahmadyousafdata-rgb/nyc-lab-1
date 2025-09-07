import Image from 'next/image'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

// Inline icons to avoid new dependencies
function PlusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" {...props}>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function MinusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" {...props}>
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

// AI automation-focused FAQ content for nyx Lab
const faqs = [
  {
    question: 'What is AI automation and how can it help my business?',
    answer:
      'AI automation uses machine learning and LLMs to handle repetitive tasks, orchestrate workflows, and make data-driven decisions without constant human input. For most teams this means faster response times, fewer manual errors, and lower costs across sales, operations, customer service, and back-office work.',
  },
  {
    question: 'What services does nyx Lab provide?',
    answer:
      'We design, build, and operate AI systems: lead capture and qualification, proposal and presentation automation, inbox triage and follow-ups, scheduling and CRM updates, executive enablement and training, and custom end-to-end integrations tailored to your stack.',
  },
  {
    question: 'Which industries do you serve?',
    answer:
      'We focus on real estate, healthcare administration, and e‑commerce, and also support professional services and B2B teams. Our systems plug into tools you already use to remove busywork and accelerate revenue workflows.',
  },
  {
    question: 'Do I need technical expertise to adopt AI automation?',
    answer:
      'No. We implement user-friendly workflows and provide onboarding and training so your team can use the system day one. We handle design, setup, integrations, monitoring, and iteration.',
  },
  {
    question: 'How do engagements work?',
    answer:
      'We start with a short discovery to identify high-ROI use cases, run a focused pilot (1–3 weeks), then scale to a production system with measurable KPIs. We can hand off to your team or operate the system for you.',
  },
  {
    question: 'What tools and platforms can you integrate with?',
    answer:
      'Common integrations include CRM (HubSpot, Salesforce), communication (iMessage, SMS, email), calendars, EHR/EMR and scheduling tools, e‑commerce platforms, and internal databases/APIs. If it has an API, we can usually connect it.',
  },
  {
    question: 'What’s the difference between AI agents and full AI systems?',
    answer:
      'AI agents complete specific tasks (qualify a lead, draft a reply). Full systems connect multiple agents with data pipelines, business rules, and human-in-the-loop steps to deliver reliable outcomes. nyx Lab designs for reliability, auditability, and ROI.',
  },
  {
    question: 'Is our data secure and private?',
    answer:
      'Yes. We follow least-privilege access, segregated environments, encryption in transit and at rest when supported by the platform, and vendor controls aligned to your requirements. We can scope deployments to use your accounts and data retention policies.',
  },
  {
    question: 'How is pricing structured?',
    answer:
      'Pricing depends on scope and usage. Typical models include a fixed pilot, then a monthly platform and maintenance fee plus pass-through model/API costs. We define clear KPIs so value and spend stay aligned.',
  },
  {
    question: 'How quickly will we see results?',
    answer:
      'Most pilots deliver measurable impact within the first 2–3 weeks (faster response times, higher conversion, fewer manual touches). Production rollouts follow once KPIs are validated.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Send us a brief about your workflow and tools. We will identify quick wins and propose a pilot plan with timeline, integrations, and expected ROI.',
  },
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      {/* Keep existing background image */}
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
        </div>

        {/* New accordion layout, themed to match site colors */}
        <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-4xl lg:mx-0">
          <dl className="mt-16 space-y-3 sm:space-y-4">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="group rounded-xl ring-1 ring-slate-900/5 bg-white/40 p-4 sm:p-5 transition hover:bg-white/50 data-[open]:bg-white"
              >
                <dt>
                  <DisclosureButton
                    className="flex w-full items-center justify-between text-left text-slate-900 focus-visible:outline-hidden"
                  >
                    <span className="flex items-start gap-x-2">
                      <span className="mt-0.5 inline-flex rounded-md bg-blue-600/10 px-2 py-0.5 text-[11px] font-semibold text-blue-600">Q</span>
                      <span className="font-display text-lg/7 font-semibold tracking-tight">{faq.question}</span>
                    </span>
                    <span
                      className="ml-4 inline-flex size-7 items-center justify-center rounded-md ring-1 ring-slate-900/5 bg-white/60 text-slate-600 transition group-data-[open]:bg-blue-600 group-data-[open]:text-white"
                    >
                      <PlusIcon aria-hidden="true" className="group-data-[open]:hidden" />
                      <MinusIcon aria-hidden="true" className="hidden group-data-[open]:block" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-3 sm:mt-4 pr-1 sm:pr-2">
                  <div className="flex items-start gap-x-3">
                    <span className="mt-1 inline-flex rounded-md bg-slate-900/5 px-2 py-0.5 text-[11px] font-semibold text-slate-700">A</span>
                    <p className="text-base leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
