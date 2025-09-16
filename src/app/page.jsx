import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export const metadata = {
  title: 'nyx Lab - AI Automation Solutions for Real Estate, Healthcare & E-Commerce',
  description: 'Transform your business with AI automation. Lead qualification, CRM integration, and workflow automation for real estate, healthcare, and e-commerce. Get started today.',
  alternates: { canonical: 'https://nyxlab.ai/' },
  openGraph: {
    title: 'nyx Lab - AI Automation Solutions',
    description: 'AI-powered automation for real estate, healthcare, and e-commerce businesses. Streamline workflows and boost efficiency.',
    url: 'https://nyxlab.ai',
    type: 'website',
    siteName: 'nyx Lab',
  },
  keywords: ['AI automation', 'real estate automation', 'healthcare automation', 'e-commerce automation', 'lead qualification', 'CRM integration', 'workflow automation'],
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
