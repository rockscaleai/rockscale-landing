const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/app/case-studies/[slug]/page.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

if (!content.includes('export const dynamicParams')) {
  content = "export const dynamicParams = true;\n" + content;
  fs.writeFileSync(targetFile, content);
  console.log('Added dynamicParams.');
}
