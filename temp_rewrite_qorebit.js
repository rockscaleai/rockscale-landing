const fs = require('fs');
const path = require('path');

const content = `
'use client';

import React from 'react';
import Link from 'next/link';

// Shared Classes for Premium Layout
const sectionTitleClass = "text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[52px] lg:leading-[1.1]";
const sectionTitleDarkClass = "text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[52px] lg:leading-[1.1]";
const sectionTextClass = "text-lg leading-relaxed text-secondary/70";
const sectionTextDarkClass = "text-lg leading-relaxed text-white/70";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-[#061225] pt-32 pb-24 md:pt-40 md:pb-32">
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
    <div className="absolute -top-40 -right-40 -z-10 h-[800px] w-[800px] rounded-full bg-[#7E57FD]/20 blur-[150px]" />
    <div className="absolute top-1/2 left-0 -z-10 h-[600px] w-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-[#25CA22]/15 blur-[120px]" />
    
    <div className="main-container relative z-10 text-center">
      <span className="badge badge-green-v2 mb-6 inline-block">AI Infrastructure Platform</span>
      <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-[72px] lg:leading-[1.05]">
        The Unified API for <br className="hidden md:block"/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25CA22] to-[#7E57FD]">Frontier Intelligence</span>
      </h1>
      <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/70">
        Access OpenAI, Anthropic, Google, and open-source models through a single, compliant gateway. Featuring workspace management, model routing, and unified billing.
      </p>
      
      <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
        <Link
          href="https://qorebit.ai"
          target="_blank"
          className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25CA22] px-9 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_15px_30px_rgba(37,202,34,0.3)]">
          <span className="relative z-10">Access Qorebit</span>
          <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <Link
          href="#features"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-9 py-4 text-sm font-bold text-white transition-all hover:bg-white/5 hover:border-white/30">
          Explore Platform
        </Link>
      </div>
    </div>
  </section>
);

const PlatformFeaturesSection = () => (
  <section id="features" className="bg-[#f4f5f8] py-24 md:py-32">
    <div className="main-container">
      <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className="badge badge-green-v2 mb-6 inline-block">Core Capabilities</span>
          <h2 className={sectionTitleClass}>Control the Chaos</h2>
        </div>
        <p className={\`\${sectionTextClass} max-w-xl pb-2\`}>
          Stop managing multiple API keys, unmonitored spend, and disparate security protocols. Centralize your AI usage in one secure platform.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          { title: 'One API for Everything', desc: 'A drop-in replacement for the OpenAI SDK. Route requests to GPT-4, Claude 3, Gemini, or Llama without rewriting your code.', icon: 'ns-shape-41', color: '#7E57FD', span: 'lg:col-span-2' },
          { title: 'Unified Billing', desc: 'Consolidate multiple vendor invoices into a single, predictable billing pipeline with budget caps.', icon: 'ns-shape-33', color: '#25CA22', span: 'lg:col-span-1' },
          { title: 'Workspace Management', desc: 'Create isolated environments for different teams and projects. Issue discrete API keys with granular role-based access control.', icon: 'ns-shape-42', color: '#f97316', span: 'lg:col-span-1' },
          { title: 'Enterprise Observability', desc: 'Track every token, monitor latency, and analyze model performance across your entire organization in real time.', icon: 'ns-shape-8', color: '#5391f5', span: 'lg:col-span-2' },
        ].map((item, idx) => (
          <div key={idx} className={\`group relative overflow-hidden rounded-[24px] border border-secondary/5 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,18,37,0.06)] hover:border-secondary/10 \${item.span}\`}>
            {/* Ambient Glow */}
            <div className="absolute -right-8 -top-8 z-0 h-40 w-40 rounded-full opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-[0.12]" style={{ backgroundColor: item.color }} />
            
            {/* Icon */}
            <div className="relative z-10 mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/50 transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110 group-hover:shadow-sm" style={{ backgroundColor: \`\${item.color}15\` }}>
              <span className={\`\${item.icon} text-[26px]\`} style={{ color: item.color }} />
            </div>
            
            <h3 className="relative z-10 text-[20px] font-bold tracking-tight text-secondary mb-3">{item.title}</h3>
            <p className="relative z-10 text-[15px] leading-relaxed text-secondary/70 max-w-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DeveloperExperienceSection = () => (
  <section className="relative z-0 overflow-hidden bg-[#0a162b] py-24 md:py-32 border-t border-white/5">
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
    <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#7E57FD]/10 blur-[150px]" />
    
    <div className="main-container relative z-10">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="badge badge-green-v2 mb-6 inline-block">Developer Experience</span>
          <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[56px] lg:leading-[1.1]">
            Change One Line <br className="hidden lg:block"/> of Code
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/70">
            Qorebit is fully compatible with the official OpenAI SDK. You don't need to rewrite your application or learn a new protocol to access dozens of LLMs.
          </p>
          <ul className="mt-10 space-y-5">
             {[
               "Change your base URL to Qorebit's endpoint",
               "Use your Qorebit Workspace API Key",
               "Pass the model name (e.g. 'claude-3-opus-20240229')",
             ].map((text, i) => (
               <li key={i} className="flex items-center gap-4 text-white/90 font-medium">
                 <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25CA22]/20 text-[#25CA22] text-xs font-bold shrink-0">
                   {i + 1}
                 </span>
                 {text}
               </li>
             ))}
          </ul>
        </div>
        
        {/* Code Snippet Container */}
        <div className="rounded-[24px] border border-white/10 bg-[#061225] p-6 shadow-2xl relative overflow-hidden group">
           {/* Decorative header */}
           <div className="flex gap-2 mb-6">
              <div className="h-3 w-3 rounded-full bg-rose-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-orange-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
           </div>
           
           <pre className="text-sm md:text-base leading-loose font-mono text-white/80 overflow-x-auto pb-4">
             <code>
               <span className="text-[#7E57FD]">import</span> OpenAI <span className="text-[#7E57FD]">from</span> <span className="text-green-400">"openai"</span>;<br/><br/>
               <span className="text-white/40">// Use the official OpenAI SDK</span><br/>
               <span className="text-[#7E57FD]">const</span> client = <span className="text-[#7E57FD]">new</span> OpenAI(&#123;<br/>
               &nbsp;&nbsp;apiKey: <span className="text-orange-400">process.env.QOREBIT_API_KEY</span>,<br/>
               &nbsp;&nbsp;<span className="text-[#25CA22]">baseURL</span>: <span className="text-green-400">"https://api.qorebit.ai/v1"</span><br/>
               &#125;);<br/><br/>
               <span className="text-white/40">// Access Anthropic Claude using OpenAI syntax!</span><br/>
               <span className="text-[#7E57FD]">const</span> response = <span className="text-[#7E57FD]">await</span> client.chat.completions.create(&#123;<br/>
               &nbsp;&nbsp;model: <span className="text-green-400">"claude-3-opus"</span>,<br/>
               &nbsp;&nbsp;messages: [&#123; role: <span className="text-green-400">"user"</span>, content: <span className="text-green-400">"Hello!"</span> &#125;]<br/>
               &#125;);
             </code>
           </pre>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="relative overflow-hidden bg-white py-24 md:py-32 border-t border-secondary/5">
    <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#25CA22]/10 to-[#7E57FD]/10 blur-[100px]" />
    
    <div className="main-container relative z-10">
      <div className="mx-auto max-w-4xl rounded-[48px] border border-secondary/5 bg-white/60 p-10 text-center shadow-[0_20px_80px_rgba(6,18,37,0.06)] backdrop-blur-2xl md:p-20">
        
        <span className="badge badge-green-v2 mb-6 inline-block">Experience Qorebit</span>
        <h2 className="text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[64px] lg:leading-[1.1]">
          Scale Your AI <br className="hidden md:block" />
          <span className="text-secondary/40">Infrastructure</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-secondary/70">
          Stop worrying about API limits, vendor lock-in, and unpredictable billing. Future-proof your application today.
        </p>
        
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="https://qorebit.ai"
            target="_blank"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#25CA22] px-9 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#20b21e] hover:shadow-[0_15px_30px_rgba(37,202,34,0.3)]">
            <span className="relative z-10">Get Started Free</span>
            <svg className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full border border-secondary/20 bg-transparent px-9 py-4 text-sm font-bold text-secondary transition-all hover:bg-secondary/5 hover:border-secondary/30">
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const QorebitPageContent = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <PlatformFeaturesSection />
      <DeveloperExperienceSection />
      <FinalCTASection />
      
      {/* Small white spacing to transition into global footer */}
      <div className="h-12 w-full bg-white" />
    </div>
  );
};

export default QorebitPageContent;
`

fs.writeFileSync(path.join(__dirname, 'src/components/products/qorebit/QorebitPageContent.tsx'), content);
console.log('Created QorebitPageContent.tsx');

// Now update page.tsx to use this new component
const pageContent = `
import QorebitPageContent from '@/components/products/qorebit/QorebitPageContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Qorebit AI | AI Infrastructure Platform — RockScale',
  description:
    'Access OpenAI, Anthropic, Google, and Mistral through a single OpenAI-compatible API. Unified billing, model routing and enterprise workspace management.',
};

const QorebitPage = () => {
  return <QorebitPageContent />;
};

export default QorebitPage;
`

fs.writeFileSync(path.join(__dirname, 'src/app/products/qorebit-ai/page.tsx'), pageContent.trim() + '\n');
console.log('Updated page.tsx');
