const fs = require('fs');
const path = require('path');

const whatWeDoPath = path.join(__dirname, 'src/components/shared/navbar/WhatWeDoMenu.tsx');
let whatWeDoContent = fs.readFileSync(whatWeDoPath, 'utf8');

whatWeDoContent = whatWeDoContent.replace(/const menuData = \[([\s\S]*?)\];/, `const menuData = [
          {
            title: 'CORE SERVICES',
            links: [
              { label: 'AI Strategy & Roadmap', href: '/services/ai-strategy' },
              { label: 'AI-Powered Software Development', href: '/services/ai-powered-software-development' },
              { label: 'Data Engineering & Analytics', href: '/services/data-engineering-analytics' },
              { label: 'Forward Deployed Engineer', href: '/services/forward-deployed-engineer' },
            ],
          },
      {
        title: 'AI TRAINING & WORKSHOPS',
        links: [
          { label: 'AI Training for Teams', href: '/services/ai-training' },
          { label: 'Executive AI Training', href: '/services/executive-ai-training' },
        ],
      },
];`);

whatWeDoContent = whatWeDoContent.replace(/min-w-\[1050px\]/g, 'min-w-[700px]');
whatWeDoContent = whatWeDoContent.replace(/md:w-\[1050px\]/g, 'md:w-[700px]');
whatWeDoContent = whatWeDoContent.replace(/md:grid-cols-3/g, 'md:grid-cols-2');

fs.writeFileSync(whatWeDoPath, whatWeDoContent);

const navDataPath = path.join(__dirname, 'src/data/navbar-data.ts');
let navDataContent = fs.readFileSync(navDataPath, 'utf8');

const regex = /{[\s\S]*?id: 'what-we-do'[\s\S]*?submenu: \[([\s\S]*?)\][\s\S]*?},/;
const newSubmenu = `
  {
    id: 'what-we-do',
    title: 'What We Do',
    submenu: [
      { id: 'wwd-strategy', label: 'AI Strategy & Roadmap', href: '/services/ai-strategy' },
      { id: 'wwd-dev', label: 'AI-Powered Software Development', href: '/services/ai-powered-software-development' },
      { id: 'wwd-data', label: 'Data Engineering & Analytics', href: '/services/data-engineering-analytics' },
      { id: 'wwd-fde', label: 'Forward Deployed Engineer', href: '/services/forward-deployed-engineer' },
      { id: 'wwd-training', label: 'AI Training for Teams', href: '/services/ai-training' },
      { id: 'wwd-executive', label: 'Executive AI Training', href: '/services/executive-ai-training' },
    ],
  },`;

navDataContent = navDataContent.replace(regex, newSubmenu.trim() + ',');
fs.writeFileSync(navDataPath, navDataContent);

console.log('Menus updated successfully!');
