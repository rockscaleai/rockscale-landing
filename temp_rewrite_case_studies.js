const fs = require('fs');
const path = require('path');

const content = `
'use client';

import React from 'react';
import Link from 'next/link';

const caseStudies = [
  {
    id: '1',
    projectName: 'Qorebit AI',
    industry: 'Technology',
    clientType: 'Internal Product',
    category: 'Platform Development',
    description: 'An AI Infrastructure Platform built to simplify access to multiple AI providers through one unified API.',
    technologies: ['Next.js', 'Node.js', 'OpenAI', 'Anthropic', 'PostgreSQL'],
    businessOutcome: 'Unified AI integration, reduced API costs, and centralized token management.',
    slug: 'qorebit-ai',
    type: 'Platform Showcase'
  },
  {
    id: '2',
    projectName: 'AI Document Intelligence Platform',
    industry: 'Financial Services',
    clientType: 'Enterprise',
    category: 'Process Automation',
    description: 'A platform to automatically extract, classify, and validate data from complex financial documents.',
    technologies: ['Python', 'AWS Textract', 'LangChain', 'FastAPI'],
    businessOutcome: 'Reduced manual processing time by 85% and improved data accuracy.',
    slug: 'ai-document-intelligence',
    type: 'Concept Solution'
  },
  {
    id: '3',
    projectName: 'Enterprise Knowledge Assistant',
    industry: 'Professional Services',
    clientType: 'Mid-Market',
    category: 'Generative AI',
    description: 'An internal AI assistant that connects to company wikis and documents for instant answers.',
    technologies: ['OpenAI', 'Pinecone', 'React', 'LangChain'],
    businessOutcome: 'Saved employees an average of 4 hours per week on information retrieval.',
    slug: 'enterprise-knowledge-assistant',
    type: 'Reference Architecture'
  },
  {
    id: '4',
    projectName: 'Retail Analytics Dashboard',
    industry: 'Retail',
    clientType: 'SME',
    category: 'Data Engineering',
    description: 'A real-time dashboard unifying sales data, inventory, and customer behavior across channels.',
    technologies: ['Snowflake', 'dbt', 'Power BI', 'Azure'],
    businessOutcome: 'Enabled data-driven inventory management, reducing stockouts by 30%.',
    slug: 'retail-analytics-dashboard',
    type: 'Concept Solution'
  },
  {
    id: '5',
    projectName: 'Customer Support Copilot',
    industry: 'Technology',
    clientType: 'Enterprise',
    category: 'AI Agents',
    description: 'An AI copilot that assists support agents by drafting responses and surfacing relevant documentation.',
    technologies: ['Anthropic Claude', 'Node.js', 'Zendesk API'],
    businessOutcome: 'Decreased average response time by 40% and improved customer satisfaction scores.',
    slug: 'customer-support-copilot',
    type: 'Solution Showcase'
  },
  {
    id: '6',
    projectName: 'Predictive Sales Analytics',
    industry: 'B2B SaaS',
    clientType: 'Startup',
    category: 'Business Intelligence',
    description: 'A machine learning pipeline that scores leads and predicts churn based on usage data.',
    technologies: ['Python', 'scikit-learn', 'GCP', 'Looker'],
    businessOutcome: 'Increased conversion rates by 25% by prioritizing high-propensity leads.',
    slug: 'predictive-sales-analytics',
    type: 'Internal Innovation'
  },
  {
    id: '7',
    projectName: 'Supply Chain Intelligence',
    industry: 'Manufacturing',
    clientType: 'Enterprise',
    category: 'Data Engineering',
    description: 'A comprehensive data platform for end-to-end supply chain visibility and predictive maintenance.',
    technologies: ['AWS', 'Kafka', 'Databricks', 'Tableau'],
    businessOutcome: 'Identified bottlenecks and reduced logistics costs by 15% annually.',
    slug: 'supply-chain-intelligence',
    type: 'Concept Solution'
  }
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-[#061225] pt-32 pb-24 md:pt-40 md:pb-32">
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
    <div className="absolute -top-40 -left-40 -z-10 h-[800px] w-[800px] rounded-full bg-[#7E57FD]/20 blur-[150px]" />
    
    <div className="main-container relative z-10 text-center">
      <span className="badge badge-green-v2 mb-6 inline-block">Client Success</span>
      <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-[72px] lg:leading-[1.05]">
        Proven <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25CA22] to-[#7E57FD]">Outcomes</span>
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/70">
        Explore how we partner with forward-thinking enterprises to architect data platforms and engineer AI systems that drive measurable business value.
      </p>
    </div>
  </section>
);

const CaseStudyGrid = () => (
  <section className="bg-[#f4f5f8] py-24 md:py-32">
    <div className="main-container">
      
      {/* Featured: Qorebit AI */}
      <div className="mb-8">
        <Link href="/products/qorebit-ai" className="group relative flex flex-col lg:flex-row overflow-hidden rounded-[32px] border border-secondary/5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,18,37,0.06)] hover:border-secondary/10">
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <span className="badge badge-green bg-[#25CA22]/10 text-[#25CA22] border border-[#25CA22]/20 mb-6 w-fit uppercase tracking-wider text-[10px] font-bold">Featured Platform</span>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary mb-6">Qorebit AI</h3>
            <p className="text-lg leading-relaxed text-secondary/70 mb-8">
              An AI Infrastructure Platform built to simplify access to multiple frontier AI providers (OpenAI, Anthropic, Google) through one unified API with enterprise billing and routing.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Next.js', 'Node.js', 'OpenAI', 'Anthropic', 'PostgreSQL'].map(tech => (
                <span key={tech} className="px-3 py-1 rounded-full bg-secondary/5 text-secondary/70 text-xs font-semibold">{tech}</span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#25CA22]">
              Explore Platform <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-[#061225] overflow-hidden">
             <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#25CA22]/30 blur-[100px]" />
             <div className="absolute inset-0 flex items-center justify-center p-12">
               {/* Abstract graphic */}
               <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-2xl">
                 <div className="h-4 w-1/3 bg-white/20 rounded mb-6"></div>
                 <div className="space-y-3">
                   <div className="h-2 w-full bg-white/10 rounded"></div>
                   <div className="h-2 w-5/6 bg-white/10 rounded"></div>
                   <div className="h-2 w-4/6 bg-[#25CA22]/50 rounded"></div>
                 </div>
               </div>
             </div>
          </div>
        </Link>
      </div>

      {/* Grid of remaining case studies */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.slice(1).map((study, idx) => (
          <Link key={study.id} href={\`/case-studies/\${study.slug}\`} className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-secondary/5 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,18,37,0.06)] hover:border-secondary/10">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="rounded-full border border-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary/60">
                  {study.industry}
                </span>
                <span className="rounded-full border border-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-secondary/60">
                  {study.category}
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-secondary mb-3">{study.projectName}</h3>
              <p className="text-[14px] leading-relaxed text-secondary/70 mb-6">{study.description}</p>
            </div>
            
            <div className="pt-6 border-t border-secondary/5 mt-auto">
               <div className="mb-4">
                 <p className="text-xs font-bold uppercase tracking-wider text-secondary/50 mb-1">Impact</p>
                 <p className="text-[13px] font-medium text-secondary/90">{study.businessOutcome}</p>
               </div>
               <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#7E57FD] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Read Case Study <span className="transition-transform group-hover:translate-x-1">→</span>
               </div>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="relative overflow-hidden bg-[#061225] py-24 md:py-40">
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
    <div className="absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7E57FD]/20 blur-[150px]" />
    
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none -z-10" />

    <div className="main-container relative z-10 text-center">
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#25CA22] mb-8 inline-block shadow-sm">
        Ready for results?
      </span>
      <h2 className="mx-auto max-w-4xl text-4xl font-medium tracking-tight text-white md:text-6xl lg:text-[72px] lg:leading-[1.05]">
        Let's Build Your <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25CA22] to-[#7E57FD]">Success Story</span>
      </h2>
      <p className="mx-auto mt-8 max-w-2xl text-[19px] leading-relaxed text-white/60">
        Stop theoretical discussions and start building. Schedule a consultation with our experts to discuss your challenges and engineer a solution.
      </p>
      
      <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <Link
          href="/contact-us"
          className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25CA22] px-10 py-5 text-[15px] font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_15px_30px_rgba(37,202,34,0.3)]">
          <span className="relative z-10">Book a Discovery Call</span>
          <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
);

const CaseStudiesPageContent = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <CaseStudyGrid />
      <FinalCTASection />
      
      {/* Small white spacing to transition into global footer */}
      <div className="h-12 w-full bg-white" />
    </div>
  );
};

export default CaseStudiesPageContent;
`

fs.writeFileSync(path.join(__dirname, 'src/components/case-studies/CaseStudiesPageContent.tsx'), content);

// Update page.tsx
const pageContent = `
import CaseStudiesPageContent from '@/components/case-studies/CaseStudiesPageContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Case Studies & Success Stories | RockScale',
  description: 'Explore how RockScale has helped startups, SMEs, and mid-size companies unlock growth through AI and Data Engineering.',
};

const CaseStudiesPage = () => {
  return <CaseStudiesPageContent />;
};

export default CaseStudiesPage;
`
fs.writeFileSync(path.join(__dirname, 'src/app/case-studies/page.tsx'), pageContent.trim() + '\n');
console.log('Case studies page rewritten.');
