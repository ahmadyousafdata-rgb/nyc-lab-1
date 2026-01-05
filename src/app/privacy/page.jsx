import { Container } from '@/components/Container'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | nyx Lab',
  description: 'How nyx Lab collects, uses, and protects your information.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Container className="py-16">
          <div className="mx-auto max-w-3xl space-y-8 text-slate-800">
            <div className="space-y-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Privacy</p>
              <h1 className="text-3xl font-semibold text-slate-900">Privacy Policy</h1>
              <p className="text-base text-slate-700">
                We keep your data safe and use it only to deliver and improve our services. This page outlines what we collect,
                how we use it, and your choices.
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Information we collect</h2>
              <ul className="list-disc space-y-2 pl-5 text-base text-slate-700">
                <li>Contact details you provide (name, email, phone) via forms or Calendly bookings.</li>
                <li>Business context you share about your workflows and tools.</li>
                <li>Technical data from site usage (IP, browser, device, and analytics events).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">How we use it</h2>
              <ul className="list-disc space-y-2 pl-5 text-base text-slate-700">
                <li>Respond to inquiries, schedule calls, and provide demos.</li>
                <li>Improve site performance, security, and product experience.</li>
                <li>Send relevant updates; you can opt out anytime.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Sharing</h2>
              <p className="text-base text-slate-700">
                We do not sell your data. We share it only with trusted providers (e.g., analytics, email, scheduling) needed to
                operate our services, under confidentiality and security obligations, or when required by law.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Data retention & security</h2>
              <p className="text-base text-slate-700">
                We keep data only as long as needed for the purposes above. We use industry-standard safeguards to protect it, but
                no system is 100% secure. Contact us if you have concerns.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Your choices</h2>
              <ul className="list-disc space-y-2 pl-5 text-base text-slate-700">
                <li>Request access, correction, or deletion of your data.</li>
                <li>Opt out of marketing emails via unsubscribe links.</li>
                <li>Block or delete cookies in your browser settings.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
              <p className="text-base text-slate-700">
                For privacy requests or questions, email <a className="text-blue-600 hover:text-blue-500" href="mailto:info@nyxlab.ai">info@nyxlab.ai</a>.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
