const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/components/home/WhyChooseUs.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

// 1. Remove "90 Days" from stats array
content = content.replace(
  /{ value: '90', unit: 'Days', label: 'Strategy to Production' },\n\s*/,
  ''
);

// 2. Remove the Avg Project ROI floating metric card entirely
const cardStart = content.indexOf('{/* Floating Metric Card */}');
const nextSection = content.indexOf('{/* Floating Stats Glass Panel */}');

if (cardStart !== -1 && nextSection !== -1) {
  const cardBlock = content.substring(cardStart, nextSection);
  content = content.replace(cardBlock, '');
}

fs.writeFileSync(targetFile, content);
console.log('Removed specific stats from WhyChooseUs component.');
