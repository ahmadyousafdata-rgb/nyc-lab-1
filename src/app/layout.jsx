import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import GoogleTagManager, { GoogleTagManagerNoScript } from '@/components/GoogleTagManager'
import CalendlyBadge from '@/components/CalendlyBadge'

export const metadata = {
  metadataBase: new URL('https://www.nyxlab.ai'),
  title: 'Automation for Real-World Business Needs',
  description:
    'Optimize workflows, reduce manual tasks, and improve team efficiency.',
  openGraph: {
    url: 'https://www.nyxlab.ai/',
    type: 'website',
    title: 'Automation for Real-World Business Needs',
    description:
      'Optimize workflows, reduce manual tasks, and improve team efficiency.',
    siteName: 'nyx Lab',
    images: [
      {
        url: 'https://www.nyxlab.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Automation for Real-World Business Needs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automation for Real-World Business Needs',
    description:
      'Optimize workflows, reduce manual tasks, and improve team efficiency.',
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
        <meta property="og:title" content="Automation for Real-World Business Needs" />
        <meta property="og:description" content="Optimize workflows, reduce manual tasks, and improve team efficiency." />
        <meta property="og:image" content="https://www.nyxlab.ai/og-image.png" />
        <meta property="og:url" content="https://www.nyxlab.ai/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="nyx Lab" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Automation for Real-World Business Needs" />
        <meta name="twitter:description" content="Optimize workflows, reduce manual tasks, and improve team efficiency." />
        <meta name="twitter:image" content="https://www.nyxlab.ai/og-image.png" />
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
