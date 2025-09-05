export const metadata = {
  title: 'Contact Us',
}

import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'

export default function Register() {
  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Left panel */}
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            {/* Left: Home button only */}
            <div className="flex items-center justify-start">
              <Button href="/" variant="outline" color="blue" className="px-3 py-1 text-sm">
                Home
              </Button>
            </div>
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
              >
                <defs>
                  <pattern x="100%" y={-1} id="gridPattern" width={200} height={200} patternUnits="userSpaceOnUse">
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} className="fill-white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect fill="url(#gridPattern)" width="100%" height="100%" strokeWidth={0} />
              </svg>
              <div
                aria-hidden="true"
                className="absolute top-[calc(100%-13rem)] -left-56 hidden transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                  className="aspect-1155/678 w-288.75 bg-linear-to-br from-blue-300 to-blue-600 opacity-10"
                />
              </div>
            </div>
            <h2 className="mt-10 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Get in touch
            </h2>
            <p className="mt-3 text-lg/8 text-gray-600">
              Share a few details and we’ll get back to you within 5 minutes.
            </p>
            <dl className="mt-8 space-y-4 text-base/7 text-gray-700 rounded-xl bg-white/70 p-6 ring-1 ring-slate-200 backdrop-blur">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <svg aria-hidden="true" className="h-7 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21s-7-5.686-7-11a7 7 0 1 1 14 0c0 5.314-7 11-7 11Z"/><circle cx="12" cy="10" r="3"/></svg>
                </dt>
                <dd>
                  414 Bayridge Ave
                  <br />
                  Brooklyn, NY 11220
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <svg aria-hidden="true" className="h-7 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 5a2 2 0 0 1 2-2h2l3 6-2 2a14 14 0 0 0 6 6l2-2 6 3v2a2 2 0 0 1-2 2h-1C9.163 22 2 14.837 2 6V5Z"/></svg>
                </dt>
                <dd>
                  <a href="tel:+18482190887" className="hover:text-gray-900">
                    +1 (848) 219-0887
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <svg aria-hidden="true" className="h-7 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 5h18v14H3z"/><path d="m3 7 9 6 9-6"/></svg>
                </dt>
                <dd>
                  <a href="mailto:info@nyxlab.ai" className="hover:text-gray-900">
                    info@nyxlab.ai
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Right form (with logo) */}
        <form action="/api/contact" method="POST" className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="mb-6 flex items-center">
              <Link href="/" aria-label="Home" className="flex items-center gap-2">
                <Logo className="h-8 w-auto" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first_name" className="block text-sm/6 font-semibold text-gray-900">First name</label>
                <div className="mt-2.5">
                  <input id="first_name" name="first_name" type="text" autoComplete="given-name" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                </div>
              </div>
              <div>
                <label htmlFor="last_name" className="block text-sm/6 font-semibold text-gray-900">Last name</label>
                <div className="mt-2.5">
                  <input id="last_name" name="last_name" type="text" autoComplete="family-name" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">Email</label>
                <div className="mt-2.5">
                  <input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm/6 font-semibold text-gray-900">Phone number</label>
                <div className="mt-2.5">
                  <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 (555) 234-5678" required className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="Options" className="block text-sm/6 font-semibold text-gray-900">Industry</label>
                <div className="mt-2.5">
                  <select id="Options" name="Options" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600">
                    <option>Real Estate</option>
                    <option>Healthcare</option>
                    <option>E-commerce</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">Message</label>
                <div className="mt-2.5">
                  <textarea id="message" name="message" rows={4} required placeholder="Real estate investor; 4 rentals. Need monthly bookkeeping + year‑end tax prep. Start this month." className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600" />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button type="submit" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
