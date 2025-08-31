import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export const metadata = {
  title: 'Contact Us',
}

export default function Register() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Get Free Consultation
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Fill out the form below & we'll get back to you within 5 minutes.
      </p>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          label="First name"
          name="first_name"
          type="text"
          autoComplete="given-name"
          required
        />
        <TextField
          label="Last name"
          name="last_name"
          type="text"
          autoComplete="family-name"
          required
        />
        <TextField
          className="col-span-full"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
         className="col-span-full"
         label="Phone Number"
         name="phone"
         type="tel"
         placeholder="+1 (555) 123-4567"
         autoComplete="tel"
         required
        />
      
        <SelectField
          className="col-span-full"
          label="What type of business are you in?"
          name="Options"
        >
          <option>Real Estate</option>
          <option>HealthCare</option>
          <option>E-commerce</option>
          <option>Others</option>
        </SelectField>
        
        
    
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Let’s Connect <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
