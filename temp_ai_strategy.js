const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/components/services/ai-strategy/AIStrategyRoadmapPageContent.tsx');

const content = `
'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import CTA from '@/components/shared/cta/CTA';
import Image from 'next/image';

const AIStrategyRoadmapPageContent = () => {
  return (
    <main className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#061225] pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
        <div className="absolute top-0 right-0 -z-10 h-[800px] w-[800px] rounded-full bg-[#7E57FD]/20 blur-[150px] translate-x-1/2 -translate-y-1/2" />
        
        <div className="main-container relative z-10 flex flex-col items-center text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green-v2 mb-6 inline-block uppercase tracking-wider text-[11px] font-bold">AI Strategy & Consulting</span>
            </RevealAnimation>
            
            <RevealAnimation delay={0.2}>
              <h1 className="text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-[72px] lg:leading-[1.05] mb-8 max-w-4xl">
                Turn AI Hype Into <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25CA22] to-[#7E57FD]">Tangible Business Value</span>
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="max-w-2xl mx-auto text-xl leading-relaxed text-white/70 mb-10">
                80% of enterprise AI initiatives fail at the proof-of-concept stage. We bridge the gap between ambitious business goals and engineering reality with data-backed, actionable AI roadmaps.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <a href="/contact-us" className="btn btn-lg bg-[#25CA22] text-[#061225] hover:bg-white transition-colors px-8 py-4 font-bold">
                Schedule a Strategy Session
              </a>
            </RevealAnimation>
        </div>
      </section>

      {/* 2. The Core Challenge */}
      <section className="py-24 md:py-32 bg-[#f4f5f8]">
         <div className="main-container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
               <RevealAnimation delay={0.2} direction="right">
                  <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl">
                     <Image 
                        src="/images/premium_ai_consulting_enterprise.jpg" 
                        alt="AI Strategy Consulting" 
                        fill 
                        className="object-cover"
                     />
                  </div>
               </RevealAnimation>

               <RevealAnimation delay={0.4} direction="left">
                  <div>
                     <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6 leading-tight">The difference between a PoC and Production is <span className="text-[#25CA22]">Strategy.</span></h3>
                     <p className="text-[17px] text-secondary/70 leading-relaxed mb-6">
                        Organizations are rushing to adopt Generative AI, LLMs, and predictive models, but most lack a foundational understanding of their data readiness and infrastructure constraints.
                     </p>
                     <p className="text-[17px] text-secondary/70 leading-relaxed">
                        Our AI Strategy service ensures you aren't just building tech for tech's sake. We align your AI investments directly with high-ROI business outcomes, mitigating risk and ensuring a clear path to scalable production.
                     </p>
                  </div>
               </RevealAnimation>
            </div>
         </div>
      </section>

      {/* 3. The Methodology (Bento Grid) */}
      <section className="py-24 md:py-32 bg-white">
         <div className="main-container">
            <RevealAnimation delay={0.2} direction="up">
               <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight mb-6">Our 4-Phase Strategy Framework</h2>
                  <p className="text-lg text-secondary/70">
                     A systematic, engineering-first approach to discovering, validating, and planning your enterprise AI transformation.
                  </p>
               </div>
            </RevealAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
               
               {/* Phase 1 */}
               <RevealAnimation delay={0.3} direction="up">
                  <div className="bg-[#f4f5f8] rounded-[24px] p-8 md:p-10 h-full border border-secondary/5 transition-all hover:border-[#25CA22]/30 hover:shadow-lg">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-white font-bold text-xl">1</div>
                        <h3 className="text-2xl font-bold text-secondary">Discovery & Readiness</h3>
                     </div>
                     <p className="text-secondary/70 leading-relaxed">
                        We audit your existing data infrastructure, software architecture, and business processes to assess true AI readiness and identify critical capability gaps.
                     </p>
                  </div>
               </RevealAnimation>

               {/* Phase 2 */}
               <RevealAnimation delay={0.4} direction="up">
                  <div className="bg-[#f4f5f8] rounded-[24px] p-8 md:p-10 h-full border border-secondary/5 transition-all hover:border-[#25CA22]/30 hover:shadow-lg">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-white font-bold text-xl">2</div>
                        <h3 className="text-2xl font-bold text-secondary">Use Case Validation</h3>
                     </div>
                     <p className="text-secondary/70 leading-relaxed">
                        We brainstorm and rigorously prioritize AI applications based on projected ROI, technical feasibility, time-to-market, and strategic alignment.
                     </p>
                  </div>
               </RevealAnimation>

               {/* Phase 3 */}
               <RevealAnimation delay={0.5} direction="up">
                  <div className="bg-[#f4f5f8] rounded-[24px] p-8 md:p-10 h-full border border-secondary/5 transition-all hover:border-[#25CA22]/30 hover:shadow-lg">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-white font-bold text-xl">3</div>
                        <h3 className="text-2xl font-bold text-secondary">Architecture Design</h3>
                     </div>
                     <p className="text-secondary/70 leading-relaxed">
                        Our forward-deployed engineers design the technical blueprint—selecting the right foundation models, vector databases, and cloud infrastructure for your specific needs.
                     </p>
                  </div>
               </RevealAnimation>

               {/* Phase 4 */}
               <RevealAnimation delay={0.6} direction="up">
                  <div className="bg-[#f4f5f8] rounded-[24px] p-8 md:p-10 h-full border border-secondary/5 transition-all hover:border-[#25CA22]/30 hover:shadow-lg">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25CA22] text-secondary font-bold text-xl">4</div>
                        <h3 className="text-2xl font-bold text-secondary">Execution Roadmap</h3>
                     </div>
                     <p className="text-secondary/70 leading-relaxed">
                        We deliver a phased, actionable 6-to-12 month execution plan including budget estimates, resource requirements, and risk mitigation strategies.
                     </p>
                  </div>
               </RevealAnimation>

            </div>
         </div>
      </section>

      {/* 4. Deliverables */}
      <section className="py-24 bg-[#061225] text-white overflow-hidden">
         <div className="main-container max-w-4xl">
            <RevealAnimation delay={0.2}>
               <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What You Walk Away With</h2>
            </RevealAnimation>
            
            <div className="space-y-6">
               {[
                  { title: 'Prioritized Use Case Matrix', desc: 'A clear ranking of AI initiatives mapped by impact vs. effort.' },
                  { title: 'Technical Architecture Blueprint', desc: 'System design documents detailing data pipelines, LLM integrations, and security models.' },
                  { title: 'Data Readiness Report', desc: 'An honest assessment of your current data quality and the engineering required to support AI.' },
                  { title: 'Phased Implementation Plan', desc: 'A step-by-step roadmap from PoC to MVP to full-scale production deployment.' }
               ].map((item, index) => (
                  <RevealAnimation key={index} delay={0.3 + (index * 0.1)} direction="up">
                     <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-white/5 border border-white/10 p-6 rounded-[20px]">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25CA22]/20 text-[#25CA22]">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <div>
                           <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                           <p className="text-white/60">{item.desc}</p>
                        </div>
                     </div>
                  </RevealAnimation>
               ))}
            </div>
         </div>
      </section>

      {/* 5. CTA */}
      <CTA
        className="bg-white pt-16 pb-16 md:pt-20 md:pb-32"
        badgeClass="!badge-green-v2"
        badgeText="Take The Next Step"
        ctaHeading="Ready to build your AI roadmap?"
        description="Stop guessing and start building with confidence. Speak with our lead engineers today to discuss your AI ambitions."
        ctaBtnText="Book a Strategy Call"
        btnClass="hover:bg-black"
      />
    </main>
  );
};

export default AIStrategyRoadmapPageContent;
`;

fs.writeFileSync(targetFile, content);
console.log('Rebuilt AIStrategyRoadmapPageContent.tsx');
