export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  featured?: boolean;
  other?: boolean;
  url: string;
};

export const blogPosts: BlogPost[] = [
  // Featured posts (top 3)
  {
    id: '1',
    title:
      'How to build a HIPAA-compliant telehealth app with Telescopes, AWS...',
    excerpt:
      'Discover how Intelliduoscreated a telehealth app compliant with HIPAA, utilizing Telescopes, AWS Chime, and the Expo...',
    image: '/blog/hipaa-telehealth.png',
    category: 'Health',
    readTime: '4 min read',
    featured: true,
    url: '/blog/details',
  },
  {
    id: '2',
    title:
      "Lab testing integration for healthtech: extending Junction's example app",
    excerpt:
      "Learn how to integrate lab testing into healthtech products with Junction's API through our step-by-step guide to...",
    image: '/blog/lab-testing.png',
    category: 'Health',
    readTime: '4 min read',
    featured: true,
    url: '/blog/details',
  },
  {
    id: '3',
    title:
      'Awell and Medplum integration: building automated healthcare workflows',
    excerpt:
      'Learn how Awell and Medplum integration automates healthcare workflows, from patient intake to physician dashboards...',
    image: '/blog/awell-medplum.png',
    category: 'Medplum',
    readTime: '4 min read',
    featured: true,
    url: '/blog/details',
  },
  // Regular posts
  {
    id: '4',
    title:
      'FHIR-native applications: advancing healthcare data interoperability',
    excerpt:
      'FHIR-native architecture delivers seamless healthcare interoperability. Discover how this approach accelerates...',
    image: '/blog/fhir-native.png',
    category: 'Health',
    readTime: '4 min read',
    url: '/blog/details',
  },
  {
    id: '5',
    title: 'Headless EHRs: a deep dive into the technical and market landscape',
    excerpt:
      'Discover the technical advantages, implementation challenges, and strategic opportunities of headless EHRs.',
    image: '/blog/headless-ehr.png',
    category: 'EHR',
    readTime: '4 min read',
    url: '/blog/details',
  },
  {
    id: '6',
    title: 'Medplum Design System: bridging frontend & FHIR for custom EHRs',
    excerpt:
      'Learn how combining Medplum, Mantis, and a specialized design system creates customized EHR experiences that meet...',
    image: '/blog/medplum-design-system.png',
    category: 'Medplum',
    readTime: '4 min read',
    url: '/blog/details',
  },
  {
    id: '7',
    title: 'Streamlining clinical workflows with Awell and Medplum',
    excerpt:
      'Discover how the Awell and Medplum integration enables healthcare teams to design and automate clinical workflows...',
    image: '/blog/clinical-workflows.png',
    category: 'Medplum',
    readTime: '4 min read',
    url: '/blog/details',
  },
  {
    id: '8',
    title: 'Building secure patient-provider communication: a Medplum Chat App',
    excerpt:
      'Secure and integrated patient-provider communication is paramount for healthtech design and automation. Read our story...',
    image: '/blog/medplum-chat.png',
    category: 'Medplum',
    readTime: '5 min read',
    url: '/blog/details',
  },
  {
    id: '9',
    title:
      "Inside Intelliduos's HIPAA compliance blueprint: partners, training and...",
    excerpt:
      'How Intelliduosimplements comprehensive HIPAA compliance through strategic partnerships and a...',
    image: '/blog/hipaa-blueprint.png',
    category: 'Health',
    readTime: '5 min read',
    url: '/blog/details',
  },
  {
    id: '10',
    title: 'Transforming user data entry: implementing Medplum Bots for...',
    excerpt:
      'Discover how Medplum Bots can streamline your FHIR-compliant EHR workflows by automating Questionnaire...',
    image: '/blog/medplum-bots.png',
    category: 'Medplum',
    readTime: '2 min read',
    url: '/blog/details',
  },
  {
    id: '11',
    title: "Stop building your own EHR: a CTO's intro to Medplum",
    excerpt:
      "Building healthcare solutions means making heavy specification tradeoffs that may hinder or delay development if you're...",
    image: '/blog/stop-own-ehr.png',
    category: 'Medplum',
    readTime: '4 min read',
    url: '/blog/details',
  },
  {
    id: '12',
    title: 'FHIR, US Core, and Medplum: navigating healthcare interoperability',
    excerpt:
      'Explore how Medplum simplifies healthcare interoperability for developers.',
    image: '/blog/fhir-us-core.png',
    category: 'Medplum',
    readTime: '4 min read',
    url: '/blog/details',
  },
  // Other blog posts (for the dark cards section)
  {
    id: '13',
    title: 'Coding a chatless assistant with Django & OpenAI',
    excerpt: '',
    image: '/blog/chatless-assistant.png',
    category: 'Open Source',
    readTime: '3 min read',
    other: true,
    url: '/blog/details',
  },
  {
    id: '14',
    title: 'Intelliduosat Pygotham.tv 2023: highlights and insights',
    excerpt: '',
    image: '/blog/pygotham-2023.png',
    category: 'People',
    readTime: '2 min read',
    other: true,
    url: '/blog/details',
  },
  {
    id: '15',
    title: "URL, URI, URN — what's the difference?",
    excerpt: '',
    image: '/blog/url-uri-urn.png',
    category: 'API',
    readTime: '2 min read',
    other: true,
    url: '/blog/details',
  },
];
