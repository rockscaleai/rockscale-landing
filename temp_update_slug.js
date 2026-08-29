const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/app/case-studies/[slug]/page.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

// 1. Add import if not present
if (!content.includes('import QorebitCaseStudyContent')) {
  content = content.replace(
    "import { notFound } from 'next/navigation';",
    "import { notFound } from 'next/navigation';\nimport QorebitCaseStudyContent from '@/components/case-studies/QorebitCaseStudyContent';"
  );
}

// 2. Add early return
const hookStart = "const CaseStudyDetail = ({ params }: { params: { slug: string } }) => {";
if (content.includes(hookStart)) {
  const replacement = `${hookStart}
  if (params.slug === 'qorebit-ai-application-platform') {
    return <QorebitCaseStudyContent />;
  }
`;
  content = content.replace(hookStart, replacement);
}

fs.writeFileSync(targetFile, content);
console.log('Updated page.tsx routing logic.');
