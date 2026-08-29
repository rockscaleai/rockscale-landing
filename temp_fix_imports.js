const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/app/case-studies/[slug]/page.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

if (content.startsWith('export const dynamicParams = true;\n')) {
  content = content.replace('export const dynamicParams = true;\n', '');
  
  // insert after imports
  const lines = content.split('\n');
  let lastImportIdx = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) {
      lastImportIdx = i;
    }
  }
  
  lines.splice(lastImportIdx + 1, 0, '\nexport const dynamicParams = true;');
  fs.writeFileSync(targetFile, lines.join('\n'));
  console.log('Fixed imports order.');
} else {
  console.log('No fix needed.');
}
