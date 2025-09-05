import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(request) {
  try {
    const form = await request.formData()

    const firstName = form.get('first_name') || ''
    const lastName = form.get('last_name') || ''
    const email = form.get('email') || ''
    const phone = form.get('phone') || ''
    const business = form.get('Options') || ''
    const message = form.get('message') || ''

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const EMAIL_FROM = process.env.EMAIL_FROM
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL

    if (!RESEND_API_KEY || !EMAIL_FROM || !CONTACT_TO_EMAIL) {
      const missing = []
      if (!RESEND_API_KEY) missing.push('RESEND_API_KEY')
      if (!EMAIL_FROM) missing.push('EMAIL_FROM')
      if (!CONTACT_TO_EMAIL) missing.push('CONTACT_TO_EMAIL')
      return NextResponse.json(
        { error: 'Server email configuration missing', missing },
        { status: 500 }
      )
    }

    const subject = 'New consultation request from register page'
    const html = `
      <div>
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Message:</strong> ${message ? message.replace(/</g, '&lt;') : ''}</p>
        <p><strong>Source:</strong> Register Page</p>
      </div>
    `
    const text = `New Consultation Request\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nBusiness: ${business}\nMessage: ${message}\nSource: Register Page\n`

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: [CONTACT_TO_EMAIL],
        subject,
        html,
        text,
        reply_to: email || undefined,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      return NextResponse.json(
        { error: 'Failed to send email', details: err },
        { status: 502 }
      )
    }

    // Fire-and-forget auto-reply to the submitter (does not block UX)
    if (email) {
      const ackSubject = 'We received your request — nyx Lab'
      const ackHtml = `
        <div>
          <p>Hi ${firstName || ''}${firstName || lastName ? ',' : ''}</p>
          <p>Thanks for reaching out to nyx Lab. We’ve received your request and will get back to you within 5 minutes.</p>
          <p>If this was not you, please ignore this email.</p>
          <hr />
          <p style="font-size:12px;color:#6b7280;">This is an automated confirmation from nyxlab.ai</p>
        </div>
      `
      const ackText = `Hi ${firstName || ''}${firstName || lastName ? ',' : ''}\n\nWe’ve received your request and will get back to you within 5 minutes.\n\n— nyx Lab (nyxlab.ai)`
      // Intentionally not awaited; ensure it doesn't block the redirect
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: EMAIL_FROM,
          to: [email],
          subject: ackSubject,
          html: ackHtml,
          text: ackText,
        }),
      }).catch(() => {})
    }

    // For form POSTs, redirect to a thank-you page
    const url = new URL('/thank-you', request.url)
    return NextResponse.redirect(url, { status: 303 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
