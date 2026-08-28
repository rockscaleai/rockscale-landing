const fs = require('fs');
const path = require('path');

const whatWeDoPath = path.join(__dirname, 'src/components/shared/navbar/WhatWeDoMenu.tsx');
let whatWeDoContent = fs.readFileSync(whatWeDoPath, 'utf8');

whatWeDoContent = whatWeDoContent.replace(/{\s*label:\s*'AI Training for Teams',\s*href:\s*'\/services\/ai-training'\s*},\s*{\s*label:\s*'Executive AI Training',\s*href:\s*'\/services\/executive-ai-training'\s*},/, 
`{ label: 'Corporate & Executive AI Training', href: '/services/ai-training' },`);

fs.writeFileSync(whatWeDoPath, whatWeDoContent);

const navDataPath = path.join(__dirname, 'src/data/navbar-data.ts');
let navDataContent = fs.readFileSync(navDataPath, 'utf8');

navDataContent = navDataContent.replace(/{\s*id:\s*'wwd-training',\s*label:\s*'AI Training for Teams',\s*href:\s*'\/services\/ai-training'\s*},\s*{\s*id:\s*'wwd-executive',\s*label:\s*'Executive AI Training',\s*href:\s*'\/services\/executive-ai-training'\s*},/, 
`{ id: 'wwd-training', label: 'Corporate & Executive AI Training', href: '/services/ai-training' },`);

fs.writeFileSync(navDataPath, navDataContent);

console.log('Navigation updated.');
