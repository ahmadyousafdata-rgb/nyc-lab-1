'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function CalendlyBadge() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/founder-nyxlab/30min',
        text: 'Book a meeting',
        color: '#0069ff',
        textColor: '#ffffff',
        branding: true,
      })
    }
  }, [])

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Calendly) {
            window.Calendly.initBadgeWidget({
              url: 'https://calendly.com/founder-nyxlab/30min',
              text: 'Book a meeting',
              color: '#0069ff',
              textColor: '#ffffff',
              branding: true,
            })
          }
        }}
      />
      <style>{`
        /* Position the floating badge mid-vertical on the right */
        .calendly-badge-widget {
          right: 24px !important;
          left: auto !important;
          top: 50% !important;
          bottom: auto !important;
          transform: translateY(-50%) !important;
        }
      `}</style>
    </>
  )
}
