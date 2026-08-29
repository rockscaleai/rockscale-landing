const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/app/case-studies/[slug]/page.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

// Fix generateMetadata
const oldMeta = "export async function generateMetadata({ params }: { params: { slug: string } }) {";
const newMeta = "export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {\n  const { slug } = await params;";

if (content.includes(oldMeta)) {
  content = content.replace(oldMeta, newMeta);
}

// Fix CaseStudyDetail
const oldComp = "const CaseStudyDetail = ({ params }: { params: { slug: string } }) => {";
const newComp = "const CaseStudyDetail = async ({ params }: { params: Promise<{ slug: string }> }) => {\n  const { slug } = await params;";

if (content.includes(oldComp)) {
  content = content.replace(oldComp, newComp);
}

// Replace params.slug with slug
content = content.replace(/params\.slug/g, 'slug');

fs.writeFileSync(targetFile, content);
console.log('Fixed params awaiting for Next.js 16.');
