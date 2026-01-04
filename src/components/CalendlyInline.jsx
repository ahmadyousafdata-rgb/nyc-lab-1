'use client'

import Script from 'next/script'

export default function CalendlyInline() {
  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <button
        onClick={() => {
          if (typeof window !== 'undefined' && window.Calendly) {
            window.Calendly.initPopupWidget({
              url: 'https://calendly.com/founder-nyxlab/30min',
            })
          }
        }}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-xl"
      >
        <span role="img" aria-label="calendar">
          📅
        </span>
        Book a meeting
      </button>
    </div>
  )
}
