import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import GoogleTagManager, { GoogleTagManagerNoScript } from '@/components/GoogleTagManager'
import CalendlyBadge from '@/components/CalendlyBadge'

export const metadata = {
  metadataBase: new URL('https://nyxlab.ai'),
  title: 'NyxLab — AI Automation & Workflow Solutions',
  description:
    'AI-powered workflow automation, voice agents, and CRM integration for real estate, healthcare, and service businesses.',
  openGraph: {
    title: 'NyxLab — AI Automation Solutions',
    description:
      'AI-powered workflow automation, CRM integrations, and voice AI agents for modern businesses.',
    url: 'https://nyxlab.ai',
    siteName: 'NyxLab',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NyxLab — AI Automation & Workflow Solutions',
    description:
      'AI-powered workflow automation, voice agents, and CRM integration for real estate, healthcare, and service businesses.',
    images: ['/og-image.png'],
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
