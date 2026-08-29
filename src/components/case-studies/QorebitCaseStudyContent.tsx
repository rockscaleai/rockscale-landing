
'use client';

import Image from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';
import CTA from '@/components/shared/cta/CTA';

const QorebitCaseStudyContent = () => {
  return (
    <main className="bg-white">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#061225] pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
        <div className="absolute top-0 right-0 -z-10 h-[800px] w-[800px] rounded-full bg-[#7E57FD]/20 blur-[150px] translate-x-1/2 -translate-y-1/2" />
        
        <div className="main-container relative z-10 flex flex-col items-center text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green-v2 mb-6 inline-block uppercase tracking-wider text-[11px] font-bold">Featured Platform</span>
            </RevealAnimation>
            
            <RevealAnimation delay={0.2}>
              <h1 className="text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-[72px] lg:leading-[1.05] mb-8 max-w-4xl">
                Qorebit AI <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25CA22] to-[#7E57FD]">Infrastructure</span>
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="max-w-2xl mx-auto text-xl leading-relaxed text-white/70">
                The unified API for frontier intelligence. We eliminated AI vendor lock-in with a single OpenAI-compatible gateway that handles smart model routing, enterprise observability, and centralized billing.
              </p>
            </RevealAnimation>
        </div>
      </section>

      {/* 2. The Dashboard Section */}
      <section className="py-24 md:py-32 bg-[#f4f5f8] relative overflow-hidden">
        <div className="main-container max-w-[1200px]">
           <RevealAnimation delay={0.2} direction="up">
              <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold text-secondary tracking-tight mb-6">Centralized Enterprise Workspace</h2>
                 <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
                    Manage API keys, track token usage across all models, and set hard billing limits per organization—all from a single, unified dashboard.
                 </p>
              </div>
           </RevealAnimation>

           <RevealAnimation delay={0.4} direction="up" offset={80}>
              <div className="relative rounded-[32px] bg-white p-4 md:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-secondary/5">
                 <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-black">
                    <Image
                       src="/images/Qorebit-Org_Dashboard.png"
                       alt="Qorebit Organization Dashboard"
                       fill
                       className="object-cover object-left-top"
                    />
                 </div>
              </div>
           </RevealAnimation>
        </div>
      </section>

      {/* 3. The Technical Challenge & Solution */}
      <section className="py-24 md:py-32 bg-white">
         <div className="main-container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24">
               <RevealAnimation delay={0.2} direction="right">
                  <div>
                     <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-500/10 mb-6">
                        <span className="ns-shape-23 text-2xl text-rose-500" />
                     </div>
                     <h3 className="text-3xl font-bold text-secondary mb-6">The Challenge</h3>
                     <p className="text-[17px] text-secondary/70 leading-relaxed mb-6">
                        Enterprises are struggling with AI fragmentation. Engineering teams are forced to hard-code integrations for OpenAI, Anthropic, and Google separately, managing different SDKs and billing contracts for each.
                     </p>
                     <p className="text-[17px] text-secondary/70 leading-relaxed">
                        This creates massive overhead, zero visibility into cross-organization token spend, and extreme vendor lock-in.
                     </p>
                  </div>
               </RevealAnimation>

               <RevealAnimation delay={0.4} direction="left">
                  <div>
                     <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#25CA22]/10 mb-6">
                        <span className="ns-shape-41 text-2xl text-[#25CA22]" />
                     </div>
                     <h3 className="text-3xl font-bold text-secondary mb-6">The Solution</h3>
                     <p className="text-[17px] text-secondary/70 leading-relaxed mb-6">
                        We built an ultra-low latency, OpenAI-compatible proxy gateway in Node.js. Developers simply change their base URL to <code>api.qorebit.ai</code> and instantly gain access to every frontier model via a single API key.
                     </p>
                     <ul className="space-y-4 border-t border-secondary/10 pt-6">
                        <li className="flex items-center gap-3 text-secondary font-semibold"><div className="h-2 w-2 rounded-full bg-[#25CA22]" /> Zero-Rewrite Integration</li>
                        <li className="flex items-center gap-3 text-secondary font-semibold"><div className="h-2 w-2 rounded-full bg-[#7E57FD]" /> Fallback Routing & Load Balancing</li>
                        <li className="flex items-center gap-3 text-secondary font-semibold"><div className="h-2 w-2 rounded-full bg-[#f97316]" /> Unified Billing & Spend Limits</li>
                     </ul>
                  </div>
               </RevealAnimation>
            </div>
         </div>
      </section>

      {/* 4. Results Strip */}
      <section className="bg-[#061225] py-20 border-y border-white/10">
         <div className="main-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
               <div className="text-center py-6">
                  <p className="text-5xl font-bold text-white mb-3">80<span className="text-[#25CA22]">%</span></p>
                  <p className="text-sm font-bold uppercase tracking-widest text-white/50">Reduction in Integration Time</p>
               </div>
               <div className="text-center py-6">
                  <p className="text-5xl font-bold text-white mb-3">40<span className="text-[#25CA22]">%</span></p>
                  <p className="text-sm font-bold uppercase tracking-widest text-white/50">Lower Token Costs via Routing</p>
               </div>
               <div className="text-center py-6">
                  <p className="text-5xl font-bold text-white mb-3">99.9<span className="text-[#25CA22]">%</span></p>
                  <p className="text-sm font-bold uppercase tracking-widest text-white/50">API Gateway Uptime</p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Custom CTA */}
      <section className="bg-white pt-16 pb-16 md:pt-20 md:pb-32 text-center">
         <div className="main-container max-w-3xl mx-auto">
            <RevealAnimation delay={0.2} direction="up">
               <span className="badge badge-green-v2 mb-6 inline-block uppercase tracking-wider text-[11px] font-bold">Unified AI Infrastructure</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3} direction="up">
               <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Ready to scale your AI operations?</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4} direction="up">
               <p className="text-lg text-secondary/70 mb-10 leading-relaxed">
                  Stop fighting fragmented SDKs and billing limits. Unify your enterprise AI strategy with Qorebit's infrastructure platform.
               </p>
            </RevealAnimation>
            <RevealAnimation delay={0.5} direction="up">
               <a 
                 href="https://qorebit.ai/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="btn btn-lg bg-secondary text-white hover:bg-black transition-colors px-10 py-4 font-semibold text-lg inline-flex items-center gap-3"
               >
                 Visit Website
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
               </a>
            </RevealAnimation>
         </div>
      </section>
    </main>
  );
};

export default QorebitCaseStudyContent;
