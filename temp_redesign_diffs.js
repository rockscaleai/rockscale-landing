const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/components/home/WhyChooseUs.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

// 1. Replace the differentiators array
const diffsArrayRegex = /const differentiators = \[\s*\{[\s\S]*?\},\s*\];/;
const newDiffsArray = `const differentiators = [
  {
    id: '01',
    title: 'Mission-Critical AI Infrastructure',
    text: 'We do not build toys or generic chat apps. We engineer robust, autonomous AI systems capable of handling enterprise scale and complexity from day zero.',
  },
  {
    id: '02',
    title: 'Unbiased Vendor Independence',
    text: 'We are not tied to a single ecosystem. We architect solutions across AWS, GCP, and Azure using the exact foundation models that best fit your unique use case.',
  },
  {
    id: '03',
    title: 'Elite Engineering Pedigree',
    text: 'Our teams operate as Forward Deployed Engineers. We embed directly into your technical organization, matching your velocity and adapting to your culture.',
  },
  {
    id: '04',
    title: 'Military-Grade Data Governance',
    text: 'Enterprise AI requires uncompromising security. We implement strict RBAC, data masking, and VPC-isolated deployments to ensure your proprietary data never leaks.',
  },
];`;

content = content.replace(diffsArrayRegex, newDiffsArray);

// 2. Replace the component rendering
const oldRenderBlockStart = content.indexOf('<div className="space-y-6 pt-4">');
const oldRenderBlockEnd = content.indexOf('{/* CTA */}');

if (oldRenderBlockStart !== -1 && oldRenderBlockEnd !== -1) {
  const oldRenderBlock = content.substring(oldRenderBlockStart, oldRenderBlockEnd);
  
  const newRenderBlock = `<div className="space-y-5 pt-4">
                {differentiators.map((item, index) => (
                  <RevealAnimation key={item.id} delay={0.4 + index * 0.1}>
                    <div className="group relative overflow-hidden rounded-[24px] border border-secondary/5 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,18,37,0.06)] hover:border-secondary/10 flex items-start gap-6">
                      
                      {/* Ambient Hover Glow */}
                      <div className="absolute -right-8 -top-8 z-0 h-32 w-32 rounded-full bg-[#25CA22] opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-[0.08]" />
                      
                      <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#25CA22]/10 text-xl font-black text-[#25CA22] border border-[#25CA22]/20 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                        {item.id}
                      </div>
                      
                      <div className="relative z-10 pt-1">
                        <h3 className="mb-2 text-[19px] font-bold tracking-tight text-secondary">{item.title}</h3>
                        <p className="text-[15px] leading-relaxed text-secondary/70">{item.text}</p>
                      </div>
                      
                    </div>
                  </RevealAnimation>
                ))}
              </div>

              `;
  
  content = content.replace(oldRenderBlock, newRenderBlock);
}

fs.writeFileSync(targetFile, content);
console.log('Redesigned differentiators.');
