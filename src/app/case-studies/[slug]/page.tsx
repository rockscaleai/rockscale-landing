import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import RevealAnimation from '@/components/animation/RevealAnimation';

import CTA from '@/components/shared/cta/CTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Case Study | RockScale',
};

const CaseStudyDetail = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      {/* 1. Hero */}
      <section className="bg-background-3 py-16 md:py-24 lg:py-32 dark:bg-background-7" aria-labelledby="case-study-hero">
        <div className="main-container">
          <div className="mx-auto max-w-4xl text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-4">Platform Showcase</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 id="case-study-hero" className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-primary">
                Qorebit AI: Unifying Enterprise AI Access
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-2xl text-lg text-secondary/80 dark:text-accent/80">
                An AI Infrastructure Platform built to simplify access to multiple AI providers through one unified API.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium text-secondary/60 dark:text-accent/60">
                <span className="rounded-full bg-white px-4 py-1.5 dark:bg-background-6">Industry: Technology</span>
                <span className="rounded-full bg-white px-4 py-1.5 dark:bg-background-6">Client: Internal Product</span>
                <span className="rounded-full bg-white px-4 py-1.5 dark:bg-background-6">Category: Platform Development</span>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* 2. Content Layout */}
      <section className="bg-white py-16 md:py-24 dark:bg-black">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Sidebar / Quick Facts */}
            <div className="lg:col-span-4 space-y-8">
              <RevealAnimation delay={0.2}>
                <div className="rounded-[20px] bg-background-3 p-8 dark:bg-background-7 border border-stroke-1 dark:border-stroke-7">
                  <h3 className="text-xl font-bold mb-6">Project Overview</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-secondary/60 dark:text-accent/60">Technology Stack</h4>
                      <p className="font-medium">Next.js, Node.js, OpenAI, Anthropic, PostgreSQL</p>
                    </div>
                    <hr className="border-stroke-1 dark:border-stroke-7" />
                    <div>
                      <h4 className="text-sm font-semibold text-secondary/60 dark:text-accent/60">Timeline</h4>
                      <p className="font-medium">6 Months</p>
                    </div>
                    <hr className="border-stroke-1 dark:border-stroke-7" />
                    <div>
                      <h4 className="text-sm font-semibold text-secondary/60 dark:text-accent/60">Key Deliverables</h4>
                      <ul className="list-disc pl-5 font-medium space-y-1">
                        <li>Unified AI Gateway API</li>
                        <li>Intelligent Model Router</li>
                        <li>Workspace & Billing Dashboard</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              
              <RevealAnimation delay={0.3}>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Client Overview</h2>
                  <p className="text-lg text-secondary/80 dark:text-accent/80 leading-relaxed">
                    [Placeholder] Describe the client, their industry position, and the context of the engagement. 
                    For Qorebit AI, this was an internal initiative to solve a widespread problem observed across multiple enterprise clients.
                  </p>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.4}>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Business Challenge</h2>
                  <p className="text-lg text-secondary/80 dark:text-accent/80 leading-relaxed">
                    [Placeholder] Detail the core problem. Enterprises are struggling to manage integrations with multiple AI providers (OpenAI, Google, Anthropic). 
                    Each provider requires different SDKs, separate billing contracts, and unique rate limits. 
                    This fragmentation increases development time, complicates cost tracking, and prevents seamless model fallbacks.
                  </p>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.5}>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Objectives</h2>
                  <ul className="list-disc pl-6 text-lg text-secondary/80 dark:text-accent/80 leading-relaxed space-y-2">
                    <li>Create a single OpenAI-compatible API that abstracts multiple providers.</li>
                    <li>Implement intelligent routing to reduce token costs and latency.</li>
                    <li>Provide a unified dashboard for API key management, workspace segregation, and analytics.</li>
                  </ul>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.6}>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Solution & Architecture</h2>
                  <p className="text-lg text-secondary/80 dark:text-accent/80 leading-relaxed">
                    [Placeholder] Explain the technical solution. We engineered a high-performance proxy layer in Node.js that standardizes incoming requests and routes them to the optimal provider based on real-time latency and cost metrics. 
                  </p>
                  {/* Placeholder for Architecture Diagram */}
                  <div className="mt-6 aspect-video w-full rounded-[20px] bg-background-3 dark:bg-background-7 flex items-center justify-center border border-stroke-1 dark:border-stroke-7">
                    <span className="text-secondary/50 dark:text-accent/50 font-medium">[Architecture Diagram / Screenshot]</span>
                  </div>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.7}>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Implementation Process</h2>
                  <p className="text-lg text-secondary/80 dark:text-accent/80 leading-relaxed">
                    [Placeholder] Outline the phases of delivery (Discovery, Architecture, Implementation, Testing, Deployment).
                  </p>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.8}>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Business Impact & Results</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    <div className="rounded-[16px] bg-background-3 p-6 text-center border border-stroke-1 dark:bg-background-7 dark:border-stroke-7">
                      <div className="text-4xl font-bold text-ns-green mb-2">80%</div>
                      <div className="text-sm font-medium text-secondary/80 dark:text-accent/80">Reduction in integration time</div>
                    </div>
                    <div className="rounded-[16px] bg-background-3 p-6 text-center border border-stroke-1 dark:bg-background-7 dark:border-stroke-7">
                      <div className="text-4xl font-bold text-ns-green mb-2">40%</div>
                      <div className="text-sm font-medium text-secondary/80 dark:text-accent/80">Lower average token cost</div>
                    </div>
                    <div className="rounded-[16px] bg-background-3 p-6 text-center border border-stroke-1 dark:bg-background-7 dark:border-stroke-7">
                      <div className="text-4xl font-bold text-ns-green mb-2">99.9%</div>
                      <div className="text-sm font-medium text-secondary/80 dark:text-accent/80">API Uptime</div>
                    </div>
                  </div>
                  <p className="text-lg text-secondary/80 dark:text-accent/80 leading-relaxed">
                    [Placeholder] Summarize the quantitative and qualitative outcomes of the project.
                  </p>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.9}>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Lessons Learned</h2>
                  <p className="text-lg text-secondary/80 dark:text-accent/80 leading-relaxed">
                    [Placeholder] Share insights gained from the engagement that highlight RockScale's expertise and maturity.
                  </p>
                </div>
              </RevealAnimation>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Final CTA */}
      <CTA
        className="dark:bg-background-7 bg-white pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[100px] lg:pb-[100px] border-t border-stroke-1 dark:border-stroke-7"
        badgeClass="!badge-green"
        badgeText="Let’s Build Your Next AI Success Story"
        ctaHeading="Ready to achieve similar results?"
        description="Schedule a consultation with our experts to discuss your business challenges and how our AI, data, and cloud solutions can help you scale."
        ctaBtnText="Book a Discovery Call"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default CaseStudyDetail;
