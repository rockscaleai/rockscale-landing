const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/components/home/WhyChooseUs.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

const panelStart = content.indexOf('{/* Floating Stats Glass Panel */}');
const panelEnd = content.indexOf('</div>\n            </RevealAnimation>\n          </div>');

if (panelStart !== -1 && panelEnd !== -1) {
  const panelBlock = content.substring(panelStart, panelEnd);
  content = content.replace(panelBlock, '');
}

fs.writeFileSync(targetFile, content);
console.log('Removed floating stats glass panel.');
