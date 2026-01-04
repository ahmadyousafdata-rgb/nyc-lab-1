'use client'

import Script from 'next/script'

export default function CalendlyInline() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/founder-nyxlab/30min"
        style={{ minWidth: '320px', height: '540px' }}
      />
    </div>
  )
}
