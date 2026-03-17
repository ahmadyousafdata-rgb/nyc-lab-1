export const metadata = {
  title: 'Contact Us',
}

import Link from 'next/link'
import Script from 'next/script'

import { Button } from '@/components/Button'
import { SelectField, TextField, TextAreaField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export default function Register() {
  return (
    <>
      {/* GTM Tracking for Register Page */}
      <Script
        id="gtm-register-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Track page view for register page
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'event': 'page_view',
              'page_title': 'Contact Us - Request Consultation',
              'page_location': window.location.href,
              'page_path': '/register',
              'content_group': 'Lead Generation'
            });
            
            // Track form interaction events
            document.addEventListener('DOMContentLoaded', function() {
              const form = document.querySelector('form[action="/api/contact"]');
              if (form) {
                // Track form start (when user starts filling)
                const inputs = form.querySelectorAll('input, textarea, select');
                inputs.forEach(input => {
                  input.addEventListener('focus', function() {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                      'event': 'form_start',
                      'form_name': 'consultation_request',
                      'form_location': 'register_page'
                    });
                  });
                });
                
                // Track form submission
                form.addEventListener('submit', function() {
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    'event': 'form_submit',
                    'form_name': 'consultation_request',
                    'form_location': 'register_page',
                    'form_action': 'submit'
                  });
                });
              }
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
        <h2 className="font-display mt-12 text-lg font-semibold text-gray-900">Request a Consultation</h2>
        <p className="mt-1 text-sm text-gray-700">Share a few details and we'll be in touch shortly.</p>
        <form action="/api/contact" method="POST" className="mt-8 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          <TextField label="First name" name="first_name" type="text" autoComplete="given-name" required />
          <TextField label="Last name" name="last_name" type="text" autoComplete="family-name" required />
          <TextField label="Email address" name="email" type="email" autoComplete="email" required />
          <TextField label="Phone Number" name="phone" type="tel" autoComplete="tel" required />

          <SelectField className="col-span-full" label="Industry" name="Options">
            <option>Real Estate</option>
            <option>Healthcare</option>
            <option>E-commerce</option>
            <option>Other</option>
          </SelectField>

          <TextAreaField
            className="col-span-full"
            label="Message"
            name="message"
            placeholder="Real estate investor; 4 rentals. Need monthly bookkeeping + year‑end tax prep. Start this month."
            required
            rows={3}
            maxLength={280}
            hint="Keep it concise — key details only."
          />

          <div className="col-span-full">
            <Button type="submit" variant="solid" color="blue" className="w-full">
              <span>
                Let's Connect <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </SlimLayout>
    </>
  )
}
