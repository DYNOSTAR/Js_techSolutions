// Edit this file to change contact details, copy, prices, images and portfolio entries.
// Items marked PLACEHOLDER are examples. Replace them with your real details.
// Images live in client/public/images. Use paths like '/images/founder.jpg'.

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
  mapQuery: 'Karatina, Kenya', // PLACEHOLDER: your shop's exact address
  hours: 'Mon to Sat, 8:00 AM to 6:00 PM', // PLACEHOLDER: confirm hours
};

export const founder = {
  name: 'Your Name', // PLACEHOLDER: add your full name
  role: 'Founder, JS Tech Solutions Ltd',
  photo: '/images/founder.jpg',
  intro: 'A Computer Science graduate turning a local repair and printing shop into a full technology company.',
  bio: [
    'I hold a degree in Computer Science from Karatina University and founded JS Tech Solutions Ltd as my own investment. Today it runs a photocopy, printing and scanning shop and a phone and laptop repair service.',
    'Serving walk-in customers every day taught me what people really need from technology: things that work, are explained simply and are fixed quickly. I bring the same approach to website development, custom systems, maintenance and IT consultancy.',
    'My goal is to grow JS Tech Solutions into a trusted technology partner for businesses, schools and individuals across Kenya and the wider African market.',
  ],
  facts: [
    ['Education', 'Computer Science degree, Karatina University'],
    ['Based in', 'Karatina, Nyeri County, Kenya'],
    ['Focus', 'Websites, web systems and IT consultancy'],
    ['Main stack', 'React, Express.js, PostgreSQL'],
  ],
  skills: [
    'React and Vite front ends',
    'Express.js APIs',
    'PostgreSQL databases',
    'Secure sign-in (JWT, Google)',
    'Hardware repair and troubleshooting',
    'IT advice for small businesses',
  ],
};

export const shopPhotos = [
  { src: '/images/shop-1.jpg', caption: 'Our shop in Karatina' },
  { src: '/images/shop-2.jpg', caption: 'Repair desk' },
  { src: '/images/shop-3.jpg', caption: 'Printing and scanning' },
];

export const serviceGroupLeads = {
  Build: 'Websites and software made for how you actually work.',
  'Maintain and advise': 'Keep what you have working, and decide what to build next.',
  'Repair and print': 'Walk in with a device or a document. Walk out with it done.',
};

// formValue must match one of the options in formServices below.
export const services = [
  {
    slug: 'website-development',
    group: 'Build',
    title: 'Website development',
    formValue: 'Website development',
    summary: 'Business sites, shops and landing pages that load fast on mobile data and are found on Google.',
    details: ['Mobile-first design', 'Contact form and WhatsApp button', 'Domain, hosting and email setup', 'Search engine basics', 'Easy content updates'],
    image: '/images/services/website-development.jpg',
  },
  {
    slug: 'web-apps-systems',
    group: 'Build',
    title: 'Web apps and systems',
    formValue: 'Web app or system',
    summary: 'Booking, inventory, school, payments and management systems built around your process.',
    details: ['Custom features and user roles', 'Secure login', 'Reports and dashboards', 'Data import from spreadsheets', 'Training for your team'],
    image: '/images/services/web-apps-systems.jpg',
  },
  {
    slug: 'online-applications',
    group: 'Build',
    title: 'Online applications',
    formValue: 'Online applications help',
    summary: 'Help with government and institution portals, from forms and uploads to follow-up.',
    details: ['Account setup and form filling', 'Document scanning and uploads', 'Passport-size photos and printing', 'Follow-up on submissions'],
    image: '/images/services/online-applications.jpg',
  },
  {
    slug: 'systems-maintenance',
    group: 'Maintain and advise',
    title: 'Systems maintenance',
    formValue: 'Systems maintenance',
    summary: 'Updates, backups, security checks and fixes for websites, networks and office systems.',
    details: ['Regular updates and backups', 'Security checks', 'Fixes and performance tuning', 'Monthly maintenance plans'],
    image: '/images/services/systems-maintenance.jpg',
  },
  {
    slug: 'it-consultancy',
    group: 'Maintain and advise',
    title: 'IT consultancy',
    formValue: 'IT consultancy',
    summary: 'Straight advice on software, hardware, going digital and what is worth paying for.',
    details: ['Needs assessment', 'Software and hardware recommendations', 'Going digital roadmap', 'Vendor and quote review'],
    image: '/images/services/it-consultancy.jpg',
  },
  {
    slug: 'phone-laptop-repair',
    group: 'Repair and print',
    title: 'Phone and laptop repair',
    formValue: 'Phone or laptop repair',
    summary: 'Screens, batteries, charging faults, software problems and upgrades.',
    details: ['Screen and battery replacement', 'Charging and power faults', 'Software fixes and virus removal', 'Storage and memory upgrades'],
    image: '/images/services/phone-laptop-repair.jpg',
  },
  {
    slug: 'printing-scanning',
    group: 'Repair and print',
    title: 'Printing, scanning and photocopy',
    formValue: 'Printing and scanning',
    summary: 'Documents, CVs, assignments, certificates and bulk copies.',
    details: ['Black and white and colour printing', 'Scanning to PDF or email', 'Photocopying and bulk jobs', 'CV and document typing'],
    image: '/images/services/printing-scanning.jpg',
  },
];

// PLACEHOLDER projects: replace with your real work. Add as many images per project as you like.
export const projectCategories = ['Websites', 'Systems', 'Repairs', 'Printing'];

export const projects = [
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce platform',
    category: 'Websites',
    text: 'Catalogue, WhatsApp ordering and M-Pesa checkout for a Kenyan retail brand.',
    tech: ['React', 'Express.js', 'PostgreSQL'],
    url: '',
    images: ['/images/work/ecommerce-1.jpg', '/images/work/ecommerce-2.jpg'],
  },
  {
    slug: 'management-system',
    title: 'Management system',
    category: 'Systems',
    text: 'Role-based system for managing people, data and reporting across several user groups.',
    tech: ['React', 'Express.js', 'PostgreSQL', 'JWT'],
    url: '',
    images: ['/images/work/management-1.jpg', '/images/work/management-2.jpg'],
  },
  {
    slug: 'analytics-dashboard',
    title: 'Analytics dashboard',
    category: 'Systems',
    text: 'Live dashboards that turn spreadsheets and records into charts decision makers can read.',
    tech: ['React', 'PostgreSQL'],
    url: '',
    images: ['/images/work/analytics-1.jpg'],
  },
  {
    slug: 'business-website',
    title: 'Business website',
    category: 'Websites',
    text: 'A fast, mobile-friendly company site with services, contact form and WhatsApp chat.',
    tech: ['React', 'Tailwind CSS'],
    url: '',
    images: ['/images/work/website-1.jpg'],
  },
  {
    slug: 'device-repairs',
    title: 'Phone and laptop repairs',
    category: 'Repairs',
    text: 'Screen, battery and board-level repairs completed at our Karatina shop.',
    tech: [],
    url: '',
    images: ['/images/work/repair-1.jpg', '/images/work/repair-2.jpg'],
  },
  {
    slug: 'print-jobs',
    title: 'Printing and document jobs',
    category: 'Printing',
    text: 'Bulk printing, scanning and document preparation for students and businesses.',
    tech: [],
    url: '',
    images: ['/images/work/print-1.jpg'],
  },
];

export const packages = [
  {
    name: 'Starter site',
    price: 'Quote on request', // PLACEHOLDER: e.g. 'From KES 15,000'
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