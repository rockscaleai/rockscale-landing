import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'about',
    title: 'About Us',
    submenu: [
      { id: 'about-us', label: 'About Us', href: '/about' },
    ],
  },
  {
    id: 'what-we-do',
    title: 'What We Do',
    submenu: [
      { id: 'wwd-strategy', label: 'AI Strategy & Roadmap', href: '/services/ai-strategy' },
      { id: 'wwd-dev', label: 'AI-Powered Software Development', href: '/services/ai-powered-software-development' },
      { id: 'wwd-data', label: 'Data Engineering & Analytics', href: '/services/data-engineering-analytics' },
      { id: 'wwd-fde', label: 'Forward Deployed Engineer', href: '/services/forward-deployed-engineer' },
      { id: 'wwd-training', label: 'Corporate & Executive AI Training', href: '/services/ai-training' },
    ],
  },
  {
    id: 'products',
    title: 'Products',
    submenu: [
      { id: 'qorebit-ai', label: 'Qorebit AI', href: '/products/qorebit-ai' },
    ],
  },
  {
    id: 'services',
    title: 'Services',
    submenu: [
      { id: 'services-main', label: 'Our Services', href: '/services' },
    ],
  },
  {
    id: 'case-studies',
    title: 'Case Studies',
    submenu: [
      { id: 'case-studies-main', label: 'Case Studies & Success Stories', href: '/case-studies' },
    ],
  },
  {
    id: 'contact',
    title: 'Contact Us',
    submenu: [
      { id: 'contact-us', label: 'Get in Touch', href: '/contact-us' },
      { id: 'book-call', label: 'Book a Discovery Call', href: '/contact-us' },
    ],
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Career', href: '/career' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'Tutorial', href: '/tutorial' },
      { label: 'Community', href: '/community' },
    ],
  },
  {
    title: 'Legal Policies',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'GDPR Compliance', href: '/gdpr' },
      { label: 'Affiliate Policy', href: '/affiliate-policy' },
    ],
  },
];
