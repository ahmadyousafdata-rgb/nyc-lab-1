import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import HomeDashboardSection from '@/components/HomeDashboardSection'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Container } from '@/components/Container'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HomeDashboardSection />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Container>
          <div className="mx-auto my-10 h-px w-24 rounded bg-blue-600/80 sm:w-40" />
        </Container>
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
