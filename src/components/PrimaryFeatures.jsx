'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
// Dashboard moved to a standalone section on the homepage

const features = [
  {
    title: 'Lead Engagement',
    description:
      'AI assistants that book appointments, send reminders, and complete tasks across channels — available 24/7 to engage every lead.',
    dashboard: '/lead_management_flow.jpg',
    workflow: 'AI Sales Agent workflow showing lead capture, qualification, scoring, and handoff processes'
  },
  {
    title: 'Voice Lead Qualification',
    description:
      'Autonomous inbound/outbound calling to screen and score leads, summarize calls, and route qualified prospects to your calendar.',
    dashboard: '/voice.jpg',
    workflow: 'Voice-based lead qualification with AI calling and automated routing'
  },
  {
    title: 'Omnichannel Sales Agents',
    description:
      'Consistent conversations across WhatsApp, Instagram, SMS, and email — brand‑tuned messaging, instant replies, and smart follow‑ups.',
    dashboard: '/AI Sales Agent Workflow.jpg',
    workflow: 'AI CRM workflow showing multi-channel lead capture, enrichment, and automated follow-ups'
  },
  {
    title: 'AI CRM for Real Estate',
    description:
      'Capture leads, qualify by location and criteria, and auto‑book showings — close more deals without the admin burden.',
    dashboard: '/🏡 AI CRM Workflow (Real Estate).jpg',
    workflow: 'Comprehensive lead management with scoring, nurturing, and agent assignment workflows'
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
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32 mt-24 lg:mt-32"
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
              {/* Prominent selected header + dotted guide below */}
              <div className="px-4 sm:px-0 mb-4 lg:col-span-12">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {features[selectedIndex].title}
                  </h3>
                  <span className="text-xs text-blue-100">
                    {selectedIndex + 1} / {features.length}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  {features.map((_, i) => (
                    <span
                      key={i}
                      className={clsx(
                        'h-1.5 w-1.5 rounded-full transition-colors duration-200',
                        i === selectedIndex ? 'bg-white' : 'bg-white/40'
                      )}
                    />
                  ))}
                </div>
              </div>
              {/* Mobile: horizontal swipeable cards; Desktop: full grid */}
              <div className="-mx-4 sm:mx-0 lg:col-span-12">
                <TabList className="relative z-10 flex gap-4 overflow-x-auto px-4 sm:px-0 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-12 lg:gap-4 lg:overflow-visible">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-xl px-4 py-4 sm:px-5 sm:py-5 transition-colors duration-200 backdrop-blur bg-white/0 ring-1 ring-white/10 h-full snap-start min-w-[16rem] shrink-0 lg:min-w-0 lg:shrink lg:col-span-3',
                        selectedIndex === featureIndex ? 'bg-white/10 ring-white/30' : 'hover:bg-white/10',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-base sm:text-lg data-selected:not-data-focus:outline-hidden transition-colors duration-200',
                            selectedIndex === featureIndex
                              ? 'text-white font-semibold'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 max-w-xl text-xs sm:text-sm text-blue-100 hidden lg:block',
                          selectedIndex === featureIndex && 'text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              
              {/* Dashboard Preview Section */}
              <div className="mt-8 lg:col-span-12">
                <div className="relative rounded-2xl bg-white/10 backdrop-blur-sm p-4 border border-white/20">
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {features[selectedIndex].title} Dashboard
                    </h4>
                    <p className="text-sm text-blue-100">
                      {features[selectedIndex].workflow}
                    </p>
                  </div>
                  <div className="relative rounded-xl overflow-hidden bg-white shadow-2xl">
                    <Image
                      src={features[selectedIndex].dashboard}
                      alt={`${features[selectedIndex].title} Dashboard`}
                      width={1200}
                      height={675}
                      className="w-full h-auto"
                      priority={selectedIndex === 0}
                    />
                  </div>
                </div>
              </div>
              
              {/* On mobile, show panel descriptions below; on desktop pills include descriptions inline */}
              <TabPanels className="lg:col-span-12 lg:hidden">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false} className="group">
                    <div className="relative mt-2 px-4 sm:px-6 lg:hidden">
                      <p className="relative mx-auto max-w-2xl text-base text-white/90 sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    {/* Single shared dashboard is rendered below the TabGroup */}
                    <div className="h-4" />
                  </TabPanel>
                ))}
              </TabPanels>
              {/* Dashboard removed from here; it's now a standalone section below Hero */}
            </>
          )}
        </TabGroup>
        {/* Dashboard is placed to the right on desktop via grid above */}
      </Container>
    </section>
  )
}
