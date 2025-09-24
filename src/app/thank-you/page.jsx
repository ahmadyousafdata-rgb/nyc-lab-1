import Link from 'next/link'
import Script from 'next/script'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export const metadata = {
  title: 'Thank You',
}

export default function ThankYou() {
  return (
    <>
      {/* GTM Data Layer Event for Conversion */}
      <Script
        id="gtm-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Google Ads Conversion Tracking
            gtag('event', 'conversion', {
              'send_to': 'AW-17536704536/sE3TCJPAu5UbEJjAk6pB',
              'value': 1.0,
              'currency': 'USD'
            });
            
            // GTM Data Layer Event for additional tracking
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'event': 'conversion',
              'conversion_id': 'AW-17536704536',
              'conversion_label': 'sE3TCJPAu5UbEJjAk6pB',
              'conversion_value': 1.0,
              'conversion_currency': 'USD'
            });
          `,
        }}
      />
      
      <SlimLayout>
        <div className="flex">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
        </div>
        <h2 className="font-display mt-20 text-lg font-semibold text-gray-900">
          Thanks for reaching out!
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          We received your request and will get back to you shortly.
        </p>
        <div className="mt-10">
          <Button href="/" variant="solid" color="blue">
            Go to Home
          </Button>
        </div>
      </SlimLayout>
    </>
  )
}
