const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/components/services/ServicesIndexPageContent.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

// Add import at the top
content = content.replace(
  /'use client';\n\nimport React from 'react';\nimport Link from 'next\/link';/,
  `'use client';\n\nimport React from 'react';\nimport Link from 'next/link';\nimport CoreServices from '@/components/services/CoreServices';`
);

// Replace CoreServicesGrid definition
// The definition starts at const CoreServicesGrid = () => (
// And ends at </section>\n);\n\nconst MethodologySection
const startIdx = content.indexOf('const CoreServicesGrid = () => (');
const endIdx = content.indexOf('const MethodologySection = () => (');
const stringToReplace = content.substring(startIdx, endIdx);

content = content.replace(stringToReplace, '');

// Replace <CoreServicesGrid /> in the render block with <CoreServices />
content = content.replace('<CoreServicesGrid />', '<CoreServices />');

fs.writeFileSync(targetFile, content);
console.log('Rolled back CoreServices.');
