import { useState } from 'react'
import './Contact.css'

interface FormState {
  name: string
  phone: string
  email: string
  eventType: string
  eventDate: string
  guests: string
  requirements: string
}

const initial: FormState = {
  name: '',
  phone: '',
  email: '',
  eventType: '',
  eventDate: '',
  guests: '',
  requirements: '',
}

const WHATSAPP_PLACEHOLDER = '267XXXXXXXX'

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function validate(values: FormState) {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!values.name.trim()) e.name = 'Please enter your name.'
    if (!values.phone.trim()) e.phone = 'Please enter your phone number.'
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Please enter a valid email.'
    if (!values.eventType) e.eventType = 'Please select an event type.'
    if (!values.eventDate) e.eventDate = 'Please select an event date.'
    if (!values.guests.trim() || isNaN(Number(values.guests)) || Number(values.guests) < 1)
      e.guests = 'Please enter a valid number of guests.'
    if (!values.requirements.trim()) e.requirements = 'Please describe your catering requirements.'
    return e
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((er) => ({ ...er, [name]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const e2 = validate(form)
    setErrors(e2)
    if (Object.keys(e2).length > 0) return
    setSubmitting(true)
    // Front-end demonstration only: no backend or email service is connected.
    // In production, send this payload to your backend / email service here.
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setForm(initial)
    }, 600)
  }

  const waLink = `https://wa.me/${WHATSAPP_PLACEHOLDER}?text=${encodeURIComponent(
    `Hello Setho Kitchen, I would like to enquire about catering.\nName: ${form.name}\nEvent: ${form.eventType}\nDate: ${form.eventDate}\nGuests: ${form.guests}`
  )}`

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Request a catering quote</h1>
          <p className="page-hero__lead">
            Tell us about your event and we will get back to you with a tailored menu and quote.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <p>
              Prefer WhatsApp? Send us a message and we will respond as soon as we can. All contact details below
              are placeholders to be replaced before launch.
            </p>
            <ul className="contact-details">
              <li><strong>Phone:</strong> [Placeholder phone number]</li>
              <li><strong>Email:</strong> hello@sethokitchen.co.bw (placeholder)</li>
              <li><strong>WhatsApp:</strong> +267 XX XXX XXXX (placeholder)</li>
            </ul>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
              WhatsApp Us
            </a>
            <div className="contact-note">
              <strong>Note:</strong> This form is a front-end demonstration. No enquiries are delivered until a
              backend or email service is connected. See the README for setup instructions.
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {submitted && (
              <div className="form-success" role="status">
                Thank you! Your enquiry has been captured on this device. In production, this would be sent to
                Setho Kitchen. Please also reach out via WhatsApp to confirm.
              </div>
            )}
            <div className="form-row">
              <label>
                Name *
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </label>
              <label>
                Phone number *
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="+267 ..." />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </label>
            </div>
            <label>
              Email address
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </label>
            <div className="form-row">
              <label>
                Event type *
                <select name="eventType" value={form.eventType} onChange={handleChange}>
                  <option value="">Select an event type</option>
                  <option value="Birthday">Birthday celebration</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Baby Shower">Baby shower</option>
                  <option value="Bridal Shower">Bridal shower</option>
                  <option value="Corporate">Corporate meeting / office event</option>
                  <option value="Private">Private celebration</option>
                  <option value="Other">Other</option>
                </select>
                {errors.eventType && <span className="form-error">{errors.eventType}</span>}
              </label>
              <label>
                Event date *
                <input name="eventDate" type="date" value={form.eventDate} onChange={handleChange} />
                {errors.eventDate && <span className="form-error">{errors.eventDate}</span>}
              </label>
            </div>
            <label>
              Number of guests *
              <input name="guests" type="number" min="1" value={form.guests} onChange={handleChange} placeholder="e.g. 50" />
              {errors.guests && <span className="form-error">{errors.guests}</span>}
            </label>
            <label>
              Catering requirements *
              <textarea name="requirements" value={form.requirements} onChange={handleChange} rows={5} placeholder="Tell us about your event, dietary needs, menu preferences and budget." />
              {errors.requirements && <span className="form-error">{errors.requirements}</span>}
            </label>
            <button type="submit" className="btn btn--primary" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send Enquiry'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}