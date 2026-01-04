'use client'

import { InlineWidget } from 'react-calendly'

export default function CalendlyInline() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <InlineWidget
        url="https://calendly.com/founder-nyxlab/30min"
        styles={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  )
}
