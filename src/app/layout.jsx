import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import GoogleTagManager, { GoogleTagManagerNoScript } from '@/components/GoogleTagManager'
import CalendlyBadge from '@/components/CalendlyBadge'

export const metadata = {
  metadataBase: new URL('https://www.nyxlab.ai'),
  title: 'nyx Lab | AI Automation for Real Estate & Healthcare',
  description:
    'AI-powered automation for real estate, healthcare, and e-commerce businesses. Streamline workflows and boost efficiency.',
  openGraph: {
    url: 'https://www.nyxlab.ai',
    type: 'website',
    title: 'nyx Lab | AI Automation for Real Estate & Healthcare',
    description:
      'AI-powered automation for real estate, healthcare, and e-commerce businesses. Streamline workflows and boost efficiency.',
    images: [
      {
        url: 'https://www.nyxlab.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'nyx Lab - AI Automation Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nyx Lab | AI Automation for Real Estate & Healthcare',
    description:
      'AI-powered automation for real estate, healthcare, and e-commerce businesses. Streamline workflows and boost efficiency.',
    images: ['https://www.nyxlab.ai/og-image.png'],
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <head>
        <GoogleAnalytics />
        <GoogleTagManager />
        <meta
          name="facebook-domain-verification"
          content="rfv1uihc0dfbcoc1oepr0zcvlavdz3"
        />
      </head>
      <body className="flex h-full flex-col">
        <GoogleTagManagerNoScript />
        {children}
        <CalendlyBadge />
      </body>
    </html>
  )
}
