const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/components/home/WhyChooseUs.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

const diffsArrayRegex = /const differentiators = \[\s*\{[\s\S]*?\},\s*\];/;
const originalDiffsArray = `const differentiators = [
  {
    id: '01',
    title: 'Enterprise-Grade Architecture',
    text: 'Robust, scalable, and secure AI solutions engineered for the enterprise from day one.',
  },
  {
    id: '02',
    title: 'End-to-End Delivery',
    text: 'Comprehensive support, from strategy and AI system design to full deployment.',
  },
  {
    id: '03',
    title: 'Multi-Cloud Expertise',
    text: 'Deep architectural expertise across AWS, Google Cloud, and Azure environments.',
  },
  {
    id: '04',
    title: 'Security & Compliance',
    text: 'Data security and compliance frameworks built into every layer of our infrastructure.',
  },
];`;

content = content.replace(diffsArrayRegex, originalDiffsArray);
fs.writeFileSync(targetFile, content);
console.log('Rolled back differentiators text.');
