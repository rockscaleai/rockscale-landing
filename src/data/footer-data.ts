import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Process', href: '/process' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Custom AI Solutions', href: '/services' },
      { label: 'Business Intelligence', href: '/services' },
      { label: 'Data Engineering', href: '/services' },
      { label: 'MLOps Consulting', href: '/services' },
    ],
  },
  {
    title: 'Legal Policies',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'GDPR Compliance', href: '/gdpr' },
    ],
  },
];

