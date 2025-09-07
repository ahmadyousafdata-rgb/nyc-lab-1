'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'
import DashboardPreview from '@/components/DashboardPreview'

const features = [
  {
    title: 'Lead Engagement',
    description:
      'AI assistants that book appointments, send reminders, and complete tasks across channels — available 24/7 to engage every lead.',
    image: screenshotPayroll,
  },
  {
    title: 'Voice Lead Qualification',
    description:
      'Autonomous inbound/outbound calling to screen and score leads, summarize calls, and route qualified prospects to your calendar.',
    image: screenshotExpenses,
  },
  {
    title: 'Omnichannel Sales Agents',
    description:
      'Consistent conversations across WhatsApp, Instagram, SMS, and email — brand‑tuned messaging, instant replies, and smart follow‑ups.',
    image: screenshotVatReturns,
  },
  {
    title: 'AI CRM for Real Estate',
    description:
      'Capture leads, qualify by location and criteria, and auto‑book showings — close more deals without the admin burden.',
    image: screenshotReporting,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-2xl tracking-tight text-white sm:text-4xl md:text-5xl">
            AI Assistant Applications
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            AI automation for faster lead conversion: qualification, nurturing, and appointment scheduling across voice, SMS, email, and social.
          </p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              {/* Mobile guide header to encourage exploring remaining features */}
              <div className="lg:hidden px-4 sm:px-0 mb-4">
                <div className="mb-2 flex items-center justify-between text-xs text-blue-100">
                  <span className="font-medium text-white">Explore more</span>
                  <span>
                    {selectedIndex + 1} / {features.length}
                  </span>
                </div>
                <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <span
                    className="absolute left-0 top-0 h-full bg-white/60 transition-all duration-300"
                    style={{ width: `${((selectedIndex + 1) / features.length) * 100}%` }}
                  />
                </div>
              </div>
              <div className="-mx-4 flex overflow-x-auto pb-6 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <TabList className="relative z-10 flex gap-x-3 px-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {/* Desktop guide header */}
                  <div className="hidden lg:block mb-3">
                    <div className="flex items-center justify-between text-xs text-blue-100">
                      <span className="font-medium text-white">Explore features</span>
                      <span>
                        {selectedIndex + 1} / {features.length}
                      </span>
                    </div>
                    <div className="relative mt-1 h-1 w-full overflow-hidden rounded-full bg-white/10">
                      <span
                        className="absolute left-0 top-0 h-full bg-white/60 transition-all duration-300"
                        style={{ width: `${((selectedIndex + 1) / features.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-3 sm:px-3 sm:py-2 transition-colors duration-200 snap-start lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white/10 border border-white/20 lg:bg-white/10 lg:ring-1 lg:ring-white/10 lg:border-0 lg:border-l-4 lg:border-white/70'
                          : 'border border-transparent hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg data-selected:not-data-focus:outline-hidden transition-colors duration-200',
                            selectedIndex === featureIndex
                              ? 'text-white font-semibold'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false} className="group">
                    <div className="relative mt-2 px-4 sm:px-6 lg:hidden">
                      <p className="relative mx-auto max-w-2xl text-base text-white/90 sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative z-10 mt-10 w-180 transition-transform duration-300 group-data-[selected]:scale-[1.01] lg:group-data-[selected]:scale-[1.02] sm:w-auto lg:mt-0 lg:w-271.25">
                      <DashboardPreview />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
