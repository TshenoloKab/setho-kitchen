const titles: Record<string, string> = {
  '/': 'Setho Kitchen | Good Food. Beautifully Made.',
  '/about': 'About Setho Kitchen | Catering in Gaborone',
  '/menu': 'Our Menu | Setho Kitchen',
  '/catering': 'Catering & Events | Setho Kitchen',
  '/gallery': 'Gallery | Setho Kitchen',
  '/contact': 'Contact & Enquiries | Setho Kitchen',
}

const descriptions: Record<string, string> = {
  '/': 'Setho Kitchen brings people together through thoughtfully prepared food and memorable catering experiences in Gaborone, Botswana.',
  '/about': 'Learn about Setho Kitchen, a Botswana-based catering business passionate about good food, quality ingredients and memorable experiences.',
  '/menu': 'Explore Setho Kitchen menu categories including everyday meals, traditional Botswana-inspired dishes, party platters, corporate catering and desserts.',
  '/catering': 'Setho Kitchen caters for birthdays, weddings, baby showers, corporate events and private celebrations in Gaborone and across Botswana.',
  '/gallery': 'A gallery of beautifully arranged platters, traditional dishes, buffet presentations, desserts and event catering setups by Setho Kitchen.',
  '/contact': 'Request a catering quote or send an enquiry to Setho Kitchen in Gaborone, Botswana. WhatsApp enquiries welcome.',
}

export function applyPageMeta(pathname: string) {
  const title = titles[pathname] ?? 'Page Not Found | Setho Kitchen'
  const description = descriptions[pathname] ?? 'The requested page could not be found.'

  document.title = title

  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta) descriptionMeta.setAttribute('content', description)

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', title)

  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) ogDescription.setAttribute('content', description)
}