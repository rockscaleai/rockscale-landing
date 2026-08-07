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
    id: 'products',
    title: 'Products',
    submenu: [
      { id: 'products-overview', label: 'Products Overview', href: '/products' },
      { id: 'qorebit-ai', label: 'Qorebit AI', href: '/products/qorebit-ai' },
      { id: 'enterprise-solutions', label: 'Enterprise Solutions', href: '/services' },
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
