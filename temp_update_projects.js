const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/app/page.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

const oldFeaturedProjectsCode = `  const featuredProjects = getMarkDownData<ICaseStudy & { [key: string]: unknown }>(
    'src/data/case-study',
  )
    .filter((project) => project.slug !== 'eduFlow-digital-learning-transformation')
    .slice(0, 3);`;

const newFeaturedProjectsCode = `  const allProjects = getMarkDownData<ICaseStudy & { [key: string]: unknown }>('src/data/case-study');
  
  const qorebitProject = allProjects.find(p => p.slug === 'qorebit-ai-application-platform');
  const otherProjects = allProjects
    .filter(p => p.slug !== 'qorebit-ai-application-platform' && p.slug !== 'eduFlow-digital-learning-transformation')
    .slice(0, 2);

  const featuredProjects = qorebitProject ? [qorebitProject, ...otherProjects] : otherProjects.slice(0, 3);`;

content = content.replace(oldFeaturedProjectsCode, newFeaturedProjectsCode);
fs.writeFileSync(targetFile, content);
console.log('Updated featured projects logic in page.tsx');
