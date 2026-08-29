const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/components/home/IndustrySolutions.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

const startIdx = content.indexOf('{/* CTA */}');
const endIdx = content.indexOf('</RevealAnimation>') + '</RevealAnimation>'.length;
// Wait, there might be multiple RevealAnimations. Let's find the specific CTA block precisely.
const specificEndIdx = content.indexOf('</RevealAnimation>', startIdx) + '</RevealAnimation>'.length;

if (startIdx !== -1 && specificEndIdx > startIdx) {
  const block = content.substring(startIdx, specificEndIdx);
  content = content.replace(block, '');
}

fs.writeFileSync(targetFile, content);
console.log('Removed button.');
