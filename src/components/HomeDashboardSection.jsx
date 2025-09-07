import { Container } from '@/components/Container'
import DashboardPreview from '@/components/DashboardPreview'

export default function HomeDashboardSection() {
  return (
    <section aria-label="Live dashboard" className="relative bg-blue-50/0 py-8 sm:py-10">
      <Container>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-700">Live dashboard</p>
        </div>
        <div className="rounded-xl overflow-hidden bg-white shadow-lg ring-1 ring-slate-900/10 sm:shadow-xl sm:shadow-blue-900/10">
          <DashboardPreview />
        </div>
      </Container>
    </section>
  )
}

