import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import GoogleTagManager, { GoogleTagManagerNoScript } from '@/components/GoogleTagManager'
import CalendlyBadge from '@/components/CalendlyBadge'

export const metadata = {
  metadataBase: new URL('https://nyxlab.ai'),
  title: {
    template: '%s | nyx Lab',
    default: 'nyx Lab | AI Automation for Real Estate, Healthcare & E-Commerce',
  },
  description:
    'nyx Lab builds AI automation for real estate, healthcare, and e-commerce to streamline workflows, save time, and boost efficiency.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'nyx Lab | AI Automation for Real Estate, Healthcare & E-Commerce',
    description:
      'nyx Lab builds AI automation for real estate, healthcare, and e-commerce to streamline workflows, save time, and boost efficiency.',
    url: 'https://nyxlab.ai',
    siteName: 'nyx Lab',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nyx Lab | AI Automation for Real Estate, Healthcare & E-Commerce',
    description:
      'nyx Lab builds AI automation for real estate, healthcare, and e-commerce to streamline workflows, save time, and boost efficiency.',
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
