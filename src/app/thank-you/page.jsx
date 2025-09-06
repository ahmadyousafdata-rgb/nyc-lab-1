import Link from 'next/link'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export const metadata = {
  title: 'Thank You',
}

export default function ThankYou() {
  return (
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
  )
}
