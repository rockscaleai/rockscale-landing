'use client';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const industries = [
  {
    id: '01',
    title: 'Financial Services',
    description: 'Fraud detection, credit risk AI, intelligent automation for lending, trading, and compliance workflows.',
    tags: ['Fraud Detection', 'Credit Risk', 'RegTech'],
    color: '#7E57FD',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Healthcare',
    description: 'Clinical decision support, medical document intelligence, patient data pipelines, and HIPAA-compliant AI systems.',
    tags: ['Clinical AI', 'HIPAA', 'Doc Intelligence'],
    color: '#25CA22',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Retail & E-Commerce',
    description: 'AI-driven demand forecasting, dynamic pricing engines, personalized recommendations, and supply chain intelligence.',
    tags: ['Forecasting', 'Personalization', 'Pricing AI'],
    color: '#7E57FD',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Logistics & Supply Chain',
    description: 'Route optimization, real-time visibility platforms, predictive maintenance, and intelligent warehouse automation.',
    tags: ['Route Optimization', 'Predictive Ops', 'Automation'],
    color: '#25CA22',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    id: '05',
    title: 'Legal & Compliance',
    description: 'Contract analysis, document extraction, regulatory monitoring, and AI-assisted due diligence pipelines.',
    tags: ['Contract AI', 'Regulatory', 'Due Diligence'],
    color: '#7E57FD',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    id: '06',
    title: 'Manufacturing & Energy',
    description: 'Predictive quality control, energy optimization AI, equipment failure forecasting, and operational analytics.',
    tags: ['Quality Control', 'Energy AI', 'Predictive Ops'],
    color: '#25CA22',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

const IndustrySolutions = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#061225] py-24 md:py-32 lg:py-40"
      aria-labelledby="industries-heading"
    >
      {/* ── Background Glows ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#7E57FD]/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full bg-[#25CA22]/10 blur-[120px]" />
      </div>

      <div className="main-container relative z-10">
        
        {/* Header */}
        <div className="mx-auto mb-20 max-w-[800px] text-center md:mb-24">
          <RevealAnimation delay={0.1}>
            <div className="mb-6">
              <span className="badge badge-green-v2">Industries</span>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h2 id="industries-heading" className="mb-6 text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[56px] lg:leading-[1.1]">
              Built for complex, regulated industries
            </h2>
          </RevealAnimation>
          
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[680px] text-lg leading-relaxed text-white/70">
              We engineer AI solutions for sectors where data quality, security, and compliance are
              non-negotiable. Our deep domain expertise translates directly into measurable outcomes.
            </p>
          </RevealAnimation>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {industries.map((industry, index) => {
            const isGreen = industry.color === '#25CA22';
            const iconBg = isGreen ? 'bg-[#25CA22]/10 text-[#25CA22]' : 'bg-[#7E57FD]/10 text-[#7E57FD]';
            const tagBg = isGreen ? 'bg-[#25CA22]/5 text-[#25CA22] border-[#25CA22]/20' : 'bg-[#7E57FD]/5 text-[#7E57FD] border-[#7E57FD]/20';
            const hoverBorder = isGreen ? 'group-hover:border-[#25CA22]/30' : 'group-hover:border-[#7E57FD]/30';
            const gradientLine = isGreen ? 'from-[#25CA22]' : 'from-[#7E57FD]';

            return (
              <RevealAnimation key={industry.id} delay={0.2 + (index % 3) * 0.1}>
                <div className={`group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:bg-white/[0.04] ${hoverBorder} hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]`}>
                  
                  {/* Subtle top gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${gradientLine} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  
                  <div className="mb-8 flex items-start justify-between">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                      {industry.icon}
                    </div>
                    <span className="text-xl font-bold text-white/10 transition-colors duration-500 group-hover:text-white/20">
                      {industry.id}
                    </span>
                  </div>

                  <div className="flex-1 space-y-4">
                    <h3 className="text-[22px] font-semibold tracking-tight text-white">{industry.title}</h3>
                    <p className="text-[15px] leading-relaxed text-white/60">
                      {industry.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-8 flex flex-wrap gap-2 pt-2 border-t border-white/5 transition-colors duration-500 group-hover:border-white/10">
                    {industry.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide ${tagBg}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealAnimation>
            );
          })}
        </div>

        
        
      </div>
    </section>
  );
};

IndustrySolutions.displayName = 'IndustrySolutions';
export default IndustrySolutions;
