// Edit this file to change contact details, copy, prices and portfolio entries.
// Items marked PLACEHOLDER are examples. Replace them with your real details.

export const site = {
  name: 'JS Tech Solutions',
  legalName: 'JS Tech Solutions Ltd',
  tagline: 'Technology solutions for businesses and individuals',
  phoneDisplay: '+254 757 232 129',
  phoneTel: '+254757232129',
  whatsapp: '254757232129',
  whatsappMessage: 'Hello JS Tech Solutions, I would like to ask about your services.',
  email: 'jstechsolutionsltd@gmail.com',
  location: 'Karatina, Nyeri County, Kenya',
  mapQuery: 'Karatina, Kenya', // PLACEHOLDER: replace with your shop's exact address or Google Maps place name
  hours: 'Mon to Sat, 8:00 AM to 6:00 PM', // PLACEHOLDER: confirm your opening hours
};

export const serviceGroups = [
  {
    title: 'Build',
    lead: 'Websites and software made for how you actually work.',
    items: [
      ['Website development', 'Business sites, shops and landing pages that load fast on mobile data and are found on Google.'],
      ['Web apps and systems', 'Booking, inventory, school, payments and management systems built around your process.'],
      ['Online applications', 'Help with government and institution portals, from forms and uploads to follow-up.'],
    ],
  },
  {
    title: 'Maintain and advise',
    lead: 'Keep what you have working, and decide what to build next.',
    items: [
      ['Systems maintenance', 'Updates, backups, security checks and fixes for websites, networks and office systems.'],
      ['IT consultancy', 'Straight advice on software, hardware, going digital and what is worth paying for.'],
    ],
  },
  {
    title: 'Repair and print',
    lead: 'Walk in with a device or a document. Walk out with it done.',
    items: [
      ['Phone and laptop repair', 'Screens, batteries, charging faults, software problems and upgrades.'],
      ['Printing, scanning and photocopy', 'Documents, CVs, assignments, certificates and bulk copies.'],
    ],
  },
];

export const packages = [
  {
    name: 'Starter site',
    price: 'Quote on request', // PLACEHOLDER: add your prices, e.g. 'From KES 15,000'
    blurb: 'For a new business or an individual who needs to be found online.',
    points: ['Up to 5 pages', 'Mobile-friendly design', 'WhatsApp and contact form', 'Google search basics', 'Domain and hosting setup'],
  },
  {
    name: 'Business site',
    price: 'Quote on request',
    blurb: 'For a growing business that wants to sell, book or show its work.',
    points: ['Everything in Starter', 'Online shop or booking', 'M-Pesa payment options', 'Admin area to edit content', 'Monthly maintenance option'],
    featured: true,
  },
  {
    name: 'Custom system',
    price: 'Quote on request',
    blurb: 'For schools, shops and organisations that need software built around them.',
    points: ['Requirements workshop', 'Custom features and user roles', 'Reports and dashboards', 'Training for your team', 'Support after launch'],
  },
];

// PLACEHOLDER entries: replace with your real projects, screenshots and links.
export const portfolio = [
  { title: 'E-commerce platform', tag: 'Online shop', text: 'Catalogue, WhatsApp ordering and M-Pesa checkout for a Kenyan retail brand.' },
  { title: 'Management system', tag: 'Civic and organisation tech', text: 'Role-based system for managing people, data and reporting across several user groups.' },
  { title: 'Analytics dashboard', tag: 'Data', text: 'Live dashboards that turn spreadsheets and records into charts decision makers can read.' },
];

export const process = [
  ['Tell us what you need', 'Call, WhatsApp or fill the form. No jargon needed.'],
  ['Get a clear quote', 'You get a scope, a timeline and a price before any work starts.'],
  ['We build or fix it', 'You see progress along the way and can ask for changes.'],
  ['Launch and support', 'We hand over, train you, and stay available when something needs attention.'],
];

export const formServices = [
  'Website development',
  'Web app or system',
  'Systems maintenance',
  'IT consultancy',
  'Online applications help',
  'Phone or laptop repair',
  'Printing and scanning',
  'Something else',
];
