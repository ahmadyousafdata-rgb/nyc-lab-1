import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import SectionHeading from '@/components/SectionHeading'
import AboutFeatures from './components/AboutFeatures'

export default function About() {
  return (
    <>
      <Header />
      
      <main className="bg-white">
        <Container className="pt-20 pb-16">
          <SectionHeading
            eyebrow="Nyx Automation"
            title="AI automation that saves time and drives growth"
            description="We design AI agents and workflow automation that eliminate busywork, speed up delivery, and improve customer experience — from lead capture and follow‑ups to data integrations and SEO ops."
            align="center"
          />

          <section className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
              <p className="mt-2 text-sm text-slate-700">Help teams work smarter with practical AI automation — measurable time savings, faster execution, and compounding results.</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-900">Our Vision</h2>
              <p className="mt-2 text-sm text-slate-700">Be the most trusted partner for AI automation services and business process automation.</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-900">Our Approach</h2>
              <p className="mt-2 text-sm text-slate-700">We combine domain expertise with modern AI stacks to deliver automation that feels natural and drives ROI.</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-900">Industries We Automate</h2>
              <p className="mt-2 text-sm text-slate-700">Real estate (lead capture, follow‑ups, reporting), healthcare (intake, reminders, compliance), and e‑commerce (catalog ops, abandoned cart, support). SEO automation across all.</p>
            </div>
          </section>
        </Container>
        <AboutFeatures/>
       </main>
    
       <Footer />
    </>
  )
}
