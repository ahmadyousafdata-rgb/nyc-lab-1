import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import Image from 'next/image'
import backgroundImage from '@/images/background-features.jpg'

function SwirlyDoodle() { return null }

function CheckIcon({ className, ...props }) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className,
      )}
      {...props}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const tiers = [
  {
    eyebrow: 'Our Expertise',
    name: 'Custom AI Automation',
    id: 'tier-expertise',
    href: '/register',
    features: [
      'Lead generation automation',
      'AI calling agents & follow-ups',
      'CRM integrations (GoHighLevel, HubSpot, etc.)',
      'Document processing automation (OCR, LLM)',
      {
        title: 'Multi-platform Data Sync',
        description:
          'Automatically connect leads, forms, and customer data across multiple platforms in real-time.',
      },
      {
        title: 'Workflow Orchestration',
        description:
          'Build end-to-end automated pipelines tailored to your business operations.',
      },
    ],
    featured: true,
  },
  {
    eyebrow: 'What You Get',
    name: 'Your Business, Supercharged',
    id: 'tier-outcomes',
    href: '/register',
    features: [
      'Save 80% of manual work',
      'Get more qualified leads',
      'Faster deal closures',
      {
        title: 'AI-Powered Reporting & Analytics',
        description:
          'Get real-time insights with dynamic dashboards and performance tracking.',
      },
      {
        title: 'Omnichannel Engagement',
        description:
          'Automate email, SMS, calls, and WhatsApp follow-ups for seamless client communication.',
      },
    ],
    featured: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Pricing() {
  return (
    <section id="pricing" aria-label="Packages" className="relative overflow-hidden bg-blue-600 py-20 sm:py-32">
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        {/* Intentionally no section heading per request */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? 'relative bg-white shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                tier.featured
                  ? ''
                  : tierIdx === 0
                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                    : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
              )}
            >
              {tier.eyebrow && (
                <div className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
                  {tier.eyebrow}
                </div>
              )}
              <h3 id={tier.id} className="font-display mt-2 text-2xl font-semibold tracking-tight text-gray-900">
                {tier.name}
              </h3>
              <ul role="list" className="mt-8 space-y-2 text-sm/6 text-gray-600 sm:mt-10">
                {tier.features.map((feature) => (
                  <li key={typeof feature === 'string' ? feature : feature.title} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="mt-0.5 h-6 w-5 flex-none text-indigo-500" />
                    <span>{typeof feature === 'string' ? feature : feature.title}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 sm:mt-10">
                <Button href={tier.href} color="blue">
                  Get Consultation
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
