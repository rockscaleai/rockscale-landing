const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/data/footer-data.ts');

const content = `import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI Strategy', href: '/services/ai-strategy' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Financial Services', href: '/services' },
      { label: 'Healthcare', href: '/services' },
      { label: 'Retail & E-Commerce', href: '/services' },
      { label: 'Logistics & Supply Chain', href: '/services' },
      { label: 'Legal & Compliance', href: '/services' },
      { label: 'Manufacturing', href: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
    ],
  },
];
`;

fs.writeFileSync(targetFile, content);
console.log('Footer links updated.');
