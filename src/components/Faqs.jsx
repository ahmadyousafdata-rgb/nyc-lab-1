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

// Flattened FAQ content (from previous version)
const faqs = [
  {
    question: 'Does nyx Lab What is AI automation in business?',
    answer:
      'Well no, but if you move AI automation uses artificial intelligence to perform tasks, processes, or decisions without constant human input. In business, it streamlines operations, reduces costs, and improves accuracy across departments like Real estate Agent, sales, marketing, HR, and customer service. company offshore you can probably ignore it.',
  },
  {
    question: 'How do I apply for a job How can I integrate AI into my business?',
    answer:
      'We only hire our Start by identifying areas with repetitive tasks or data-heavy decisions. Then, define clear goals and choose the right AI tools or partners. At The Gen AI, we guide teams through AI strategy, pilot projects, and full-scale implementation.',
  },
  {
    question: 'What was What are the benefits of AI automation?',
    answer:
      'AI automation boosts productivity, speeds up operations, reduces manual errors, and lowers costs. It also enhances customer experience and enables your team to focus on high-value tasks instead of repetitive ones.',
  },
  {
    question: 'What types of AI solutions does nyx Lab offer?',
    answer:
      'AI-powered business development, Proposal & Presentation Automation, AI Strategy & Executive Training, Internal Project Brief Generator, Custom end-to-end AI integrations tailored to your business goals',
  },
  {
    question: 'Do I need technical knowledge to use AI in my company?',
    answer:
      'Not at all. We design user-friendly systems and provide advisory support, enabling your team to adopt AI without requiring deep technical expertise. We focus on business results, not complexity.',
  },
  {
    question: 'What’s the difference between AI agents and full AI systems?',
    answer:
      'AI agents are tools that handle isolated tasks, like sending emails or answering queries. AI systems are broader, combining agents, data flows, and automation into a cohesive solution that delivers measurable outcomes. We build systems that drive real business value.',
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
