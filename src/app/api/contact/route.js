import { NextResponse } from 'next/server'

const DEFAULT_SUPPORT_FROM = 'NyxLab Support <support@nyxlab.ai>'
const DEFAULT_CONTACT_TO = 'info@nyxlab.ai'

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
    const EMAIL_FROM = process.env.EMAIL_FROM || DEFAULT_SUPPORT_FROM
    const CONTACT_TO_EMAIL_ENV = process.env.CONTACT_TO_EMAIL
    const CONTACT_TO = CONTACT_TO_EMAIL_ENV || DEFAULT_CONTACT_TO

    if (!RESEND_API_KEY || !EMAIL_FROM) {
      const missing = []
      if (!RESEND_API_KEY) missing.push('RESEND_API_KEY')
      if (!EMAIL_FROM) missing.push('EMAIL_FROM')
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
        to: [CONTACT_TO],
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
      const ackSubject = 'Thanks for reaching out to NyxLab'
      const name = `${firstName} ${lastName}`.trim()
      const greeting = name ? `Hi ${name},` : 'Hi there,'
      const ackHtml = `
        <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#111827;line-height:1.45;">
          <p>${greeting}</p>
          <p>Thanks for reaching out to NyxLab — your request has been received and our team is reviewing it now.</p>
          <p>We’ll get back to you shortly with the next steps. If this message wasn’t intended for you, please ignore it.</p>
          <p style="margin-top:24px;">Best regards,<br/>NyxLab Support Team<br/><a href="https://nyxlab.ai" style="color:#2563eb;text-decoration:none;">nyxlab.ai</a></p>
          <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb;" />
          <p style="font-size:12px;color:#6b7280;margin:0;">This automated confirmation was sent from nyxlab.ai</p>
        </div>
      `
      const ackText = `${greeting}\n\nThanks for reaching out to NyxLab — your request has been received and our team is reviewing it now.\n\nWe’ll get back to you shortly with the next steps. If this message wasn’t intended for you, please ignore it.\n\nBest regards,\nNyxLab Support Team\nnyxlab.ai`
      // Intentionally not awaited; ensure it doesn't block the redirect
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: DEFAULT_SUPPORT_FROM,
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
