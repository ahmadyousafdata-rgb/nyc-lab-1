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
      {/* Google Ads Conversion Tracking */}
      <Script
        id="google-ads-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Google Ads Conversion Tracking
            gtag('event', 'conversion', {
              'send_to': 'AW-17536704536/CONVERSION_LABEL', // Replace CONVERSION_LABEL with your actual label
              'value': 1.0,
              'currency': 'USD'
            });
            
            // GTM Data Layer Event
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'event': 'conversion',
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
