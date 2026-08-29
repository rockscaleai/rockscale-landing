const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/components/home/Projects.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

const desktopButtonRegex = /<RevealAnimation delay=\{0\.4\}>\s*<div className="hidden shrink-0 md:block">\s*<LinkButton\s*href="\/case-study"[^>]*>\s*View all projects\s*<\/LinkButton>\s*<\/div>\s*<\/RevealAnimation>/g;
content = content.replace(desktopButtonRegex, '');

const mobileButtonRegex = /\{\/\* Mobile CTA \*\/\}\s*<RevealAnimation delay=\{0\.7\}>\s*<div className="mt-12 text-center md:hidden">\s*<LinkButton\s*href="\/case-study"[^>]*>\s*View all projects\s*<\/LinkButton>\s*<\/div>\s*<\/RevealAnimation>/g;
content = content.replace(mobileButtonRegex, '');

fs.writeFileSync(targetFile, content);
console.log('Removed View All Projects buttons.');
