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
      { label: 'AI Strategy & Roadmap', href: '/services/ai-strategy' },
      { label: 'AI Software Development', href: '/services/ai-powered-software-development' },
      { label: 'Data Engineering', href: '/services/data-engineering-analytics' },
      { label: 'Forward Deployed Engineer', href: '/services/forward-deployed-engineer' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
    ],
  },
];
`;

fs.writeFileSync(targetFile, content);
console.log('Footer links updated.');
