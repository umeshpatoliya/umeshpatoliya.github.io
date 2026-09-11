// ---------------------------------------------------------------
// Portfolio content — single source of truth.
// Content sourced from Umesh Patoliya's CV. Edit values here to
// update the site. No JSX changes required.
// ---------------------------------------------------------------

export const profile = {
  name: 'Umesh Patoliya',
  role: 'Senior WordPress & Shopify Developer',
  shortRole: 'Sr. Web Developer / Front-End Developer',
  experience: '12+ years',
  location: 'Surat, India',
  availability: 'Open to remote opportunities',
  email: 'umeshpatoliya50@gmail.com',
  phone: '+91 99249 11102',
  linkedin: 'https://www.linkedin.com/in/umesh-patoliya',
  heroHeadline: 'Building digital experiences that work beautifully.',
  heroIntro:
    'Results-driven Senior Web Developer with 12+ years of experience in website design, front-end development, and WordPress-based development — building, customizing, maintaining, and migrating high-performance sites.',
  aboutLede:
    'I have spent 12+ years building scalable, high-performance, user-focused websites — from front-end interfaces to full WordPress, WooCommerce, and Shopify builds.',
  aboutBody: [
    'My core strength is turning designs into responsive, cross-browser experiences — implementing from Figma, Adobe XD, and Photoshop into clean WordPress themes, child themes, and custom builds. I work fluently with WooCommerce, Shopify, ACF, custom post types, and page builders like Elementor, Divi, WPBakery, and Oxygen.',
    'Beyond building, I handle end-to-end website migrations across hosting environments, run CRO and A/B testing on platforms like VWO and Optimizely, and develop landing pages with Unbounce and Instapage. Recently I have been building with React and Next.js, supported by AI-assisted tooling such as ChatGPT, Cursor, and Claude.',
  ],
  stats: [
    { value: '12+', label: 'Years of experience' },
    { value: '30+', label: 'Websites delivered' },
    { value: '3', label: 'Core platforms mastered' },
    { value: '100%', label: 'Remote-ready' },
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

// Selected work. Swap `image` with your own assets or Unsplash URLs.
export const projects = [
  {
    id: 'pontiac-promise-zone',
    title: 'Pontiac Promise Zone',
    description:
      'A community-focused platform bringing local programs, resources, and stories together in one accessible, content-rich experience.',
    technologies: ['WordPress', 'Custom Theme', 'Responsive Design'],
    year: '2026',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
    link: 'https://pontiacpromisezone.org/',
  },
  {
    id: 'anjex',
    title: 'Anjex',
    description:
      'A polished corporate presence with a modular design system, refined typography, and a build tuned for speed and clarity.',
    technologies: ['Next.js', 'React.js', 'Front-End'],
    year: '2026',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    link: 'https://anjex.vercel.app/',
  },
  {
    id: 'sun-siyam',
    title: 'Sun Siyam Resorts',
    description:
      'A refined hospitality website with an immersive, image-led experience and a responsive, mobile-first interface.',
    technologies: ['Umbraco', 'Responsive Design'],
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80',
    link: 'https://www.sunsiyam.com/',
  },
  {
    id: 'bill-howe',
    title: 'Bill Howe',
    description:
      'A conversion-focused services website with clear information architecture, lead capture, and performance tuning.',
    technologies: ['WordPress', 'WooCommerce', 'CRO'],
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80',
    link: 'https://www.billhowe.com/',
  },
]

// Additional live work from the CV — shown as a compact link list.
export const moreProjects = [
  { label: 'synergy-am.com', url: 'https://synergy-am.com/' },
  { label: 'validgrad.com', url: 'https://validgrad.com/' },
  { label: 'silmarventures.com', url: 'https://silmarventures.com/' },
  { label: 'unitedsettlement.com', url: 'https://unitedsettlement.com/' },
  { label: 'stripmakeup.com', url: 'https://www.stripmakeup.com/' },
  { label: 'muto.co', url: 'https://muto.co/' },
  { label: 'ignite.co', url: 'https://ignite.co/' },
  { label: 'clubflyers.com', url: 'https://www.clubflyers.com/' },
  { label: 'theborrowingclub.com', url: 'https://www.theborrowingclub.com/' },
  { label: 'crowdfundinglawyers.net', url: 'https://www.crowdfundinglawyers.net/' },
]

export const services = [
  {
    title: 'WordPress Development',
    description:
      'Custom themes, child themes, plugins, and ACF-driven builds tailored to how your team works.',
  },
  {
    title: 'Shopify Development',
    description:
      'Theme customization and storefront implementation built for smooth, high-converting selling.',
  },
  {
    title: 'WooCommerce Development',
    description:
      'Product, category, cart, checkout, and storefront customization on WordPress.',
  },
  {
    title: 'Custom Front-End Development',
    description:
      'Figma, XD, and Photoshop turned into pixel-considered, responsive, cross-browser interfaces.',
  },
  {
    title: 'Website Migration',
    description:
      'Server-to-server moves with backups, database transfer, DNS, SSL, and post-migration testing.',
  },
  {
    title: 'Landing Page Development',
    description:
      'End-to-end landing pages built with Unbounce and Instapage, engineered to convert.',
  },
  {
    title: 'CRO / A/B Testing',
    description:
      'Experimentation and optimization with VWO, Optimizely, and Convert.',
  },
  {
    title: 'Website Optimization',
    description:
      'Performance-focused improvements, browser compatibility, and UI refinement.',
  },
]

export const skills = [
  'WordPress',
  'WooCommerce',
  'Shopify',
  'HTML5',
  'CSS3',
  'JavaScript',
  'jQuery',
  'Bootstrap',
  'Tailwind CSS',
  'Responsive Web Design',
  'Elementor',
  'Divi',
  'WPBakery',
  'Oxygen',
  'ACF',
  'Custom Post Types',
  'React.js',
  'Next.js',
  'Laravel',
  'Webflow',
  'HubSpot',
  'Umbraco',
  'Unbounce',
  'Instapage',
  'VWO',
  'Optimizely',
  'Figma',
  'Adobe XD',
  'ChatGPT',
  'Cursor',
  'Claude AI',
]

// Vertical timeline sourced from the CV.
export const experience = [
  {
    period: 'July 2015 — Present',
    role: 'Sr. Web Developer',
    company: 'Marquee Solution · Full-Time',
    summary:
      'Develop and maintain responsive WordPress, WooCommerce, and Shopify websites. Customize themes, child themes, plugins, ACF, custom post types, and page builders. Build responsive interfaces from Figma, XD, Photoshop, Sketch, InVision, and Zeplin. Handle full website migrations, and manage client requirements, workflow, maintenance, and delivery.',
  },
  {
    period: '2014',
    role: 'Web Designer',
    company: 'W3gurukul · Surat',
    summary:
      'Early professional web design and front-end work, building the foundation in HTML, CSS, and responsive UI implementation.',
  },
  {
    period: '2013',
    role: 'Higher Secondary School (HSC)',
    company: 'Mangaldeep Vidhyalaya · Surat',
    summary:
      'Completed higher secondary education before moving into professional web development.',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand goals, audience, and constraints. Align on what success looks like.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'Map scope, architecture, and content structure into a clear, shared roadmap.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Shape layout, type, and interaction into a considered, on-brand system.',
  },
  {
    number: '04',
    title: 'Develop',
    description:
      'Build with clean, maintainable code — responsive, accessible, and fast.',
  },
  {
    number: '05',
    title: 'Test',
    description:
      'Cross-browser testing, performance tuning, and validation against the goals.',
  },
  {
    number: '06',
    title: 'Launch',
    description:
      'Ship with confidence, then measure, iterate, and optimize over time.',
  },
]
