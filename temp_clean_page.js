const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/app/case-studies/[slug]/page.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

const doubleIf = `  if (params.slug === 'qorebit-ai-application-platform') {
    return <QorebitCaseStudyContent />;
  }

  if (params.slug === 'qorebit-ai-application-platform') {
    return <QorebitCaseStudyContent />;
  }`;

content = content.replace(doubleIf, `  if (params.slug === 'qorebit-ai-application-platform') {
    return <QorebitCaseStudyContent />;
  }`);

fs.writeFileSync(targetFile, content);
console.log('Cleaned up duplicated if statement.');
