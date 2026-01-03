import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:items-start">
          {/* Brand + Contact */}
          <div className="text-center md:text-left">
            <Logo className="mx-auto md:mx-0 h-10 w-auto" />
            <p className="mt-4 text-sm text-slate-700">AI automation to save time and drive growth.</p>
            <div className="mt-4 text-sm text-slate-700 space-y-1">
              <p>📞 +1 (848) 219-0887</p>
              <p>🏢 Bay Ridge, Brooklyn, New York</p>
            </div>
            {/* Instant response email CTAs */}
            <div className="mt-6">
              <p className="text-sm font-medium text-slate-900">Instant response</p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <a
                  href="mailto:info@nyxlab.ai?subject=Inquiry%20from%20nyxlab.ai&body=Hi%20NyxLab%2C%20I%E2%80%99d%20like%20to%20learn%20more%20about..."
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 py-2 px-4 text-sm font-semibold text-white hover:bg-blue-500"
                  aria-label="Email info@nyxlab.ai"
                >
                  info@nyxlab.ai
                </a>
                <a
                  href="mailto:support@nyxlab.ai?subject=Support%20request%20from%20nyxlab.ai&body=Hi%20Support%2C%20I%E2%80%99m%20experiencing%20an%20issue%20with..."
                  className="inline-flex items-center justify-center rounded-full ring-1 ring-slate-200 py-2 px-4 text-sm text-slate-700 hover:bg-slate-100"
                  aria-label="Email support@nyxlab.ai"
                >
                  support@nyxlab.ai
                </a>
              </div>
            </div>
          </div>

          {/* Footer Nav (mirror header) — hidden on mobile */}
          <nav className="hidden md:block text-sm" aria-label="footer">
            <div className="flex flex-col items-center md:items-start gap-2">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/#testimonials">Testimonials</NavLink>
              <NavLink href="/blogs">Blog</NavLink>
              <NavLink href="/register">Schedule a Call</NavLink>
            </div>
          </nav>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm font-medium text-slate-900">Follow us</p>
            <div className="mt-3 flex gap-x-4">
              <Link href="https://x.com/nyxlabai" target="_blank" rel="noopener noreferrer" className="group" aria-label="nyx Lab on X">
                <svg className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/nyxlab-ai/" target="_blank" rel="noopener noreferrer" className="group" aria-label="nyx Lab on LinkedIn">
                <svg className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5V16.4c0-1.8 0-4.2-2.6-4.2-2.6 0-3 2-3 4.1V24h-5V8z" />
                </svg>
              </Link>
              <Link href="https://instagram.com/nyxlab.ai" target="_blank" rel="noopener noreferrer" className="group" aria-label="nyx Lab on Instagram">
                <svg className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.506 5.506 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm5.75-3.75a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z" />
                </svg>
              </Link>
              <Link href="https://github.com/nyxlabai" target="_blank" rel="noopener noreferrer" className="group" aria-label="nyx Lab on GitHub">
                <svg className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
              </Link>
              <Link href="https://www.youtube.com/@nyxlabai" target="_blank" rel="noopener noreferrer" className="group" aria-label="nyx Lab on YouTube">
                <svg className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a2.99 2.99 0 0 0-2.103-2.117C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.395.569A2.99 2.99 0 0 0 .502 6.186 31.49 31.49 0 0 0 0 12a31.49 31.49 0 0 0 .502 5.814 2.99 2.99 0 0 0 2.103 2.117C4.5 20.5 12 20.5 12 20.5s7.5 0 9.395-.569a2.99 2.99 0 0 0 2.103-2.117A31.49 31.49 0 0 0 24 12a31.49 31.49 0 0 0-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-500">Copyright &copy; {new Date().getFullYear()} nyx Lab. All rights reserved.</p>
          <div className="mt-6 sm:mt-0 text-xs text-slate-500">Privacy • Terms</div>
        </div>
      </Container>
    </footer>
  )
}
