'use client';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const services = [
  {
    id: 's1',
    number: '01',
    phase: 'THINK',
    icon: 'ns-shape-8',
    title: 'AI Strategy & Roadmap',
    positioning: 'Understand where AI can create real business value.',
    problem: 'Organizations want to adopt AI but lack clarity on where to start, what to prioritize, and how much it will cost.',
    solution: 'We help businesses identify high-value AI opportunities, assess current technology and data capabilities, and develop a clear roadmap for adopting AI across their organization.',
    capabilities: [
      'AI Readiness Assessment',
      'AI Opportunity Identification',
      'AI Use-Case Discovery',
      'AI Architecture Strategy',
      'Technology Selection',
      'Build vs Buy Decisions',
    ],
    outcome: 'Give leadership a clear understanding of where AI can create value, what to prioritize, and how to execute.',
    cta: 'Build Your AI Roadmap',
    color: 'bg-[#7E57FD]/10 border-[#7E57FD]/30 shadow-[0_0_15px_rgba(126,87,253,0.1)]',
    iconColor: 'text-[#7E57FD]',
    phaseColor: 'text-[#7E57FD]',
  },
  {
    id: 's2',
    number: '02',
    phase: 'BUILD',
    icon: 'ns-shape-23',
    title: 'AI-Powered Software Development',
    positioning: 'Turn high-value opportunities into production-ready software.',
    problem: 'Manual processes, generic software, and disconnected workflows create bottlenecks and fail to scale with business demands.',
    solution: 'We design and build production-ready software powered by modern AI models, agents and intelligent automation — from AI copilots to intelligent business applications.',
    capabilities: [
      'AI Applications & Agents',
      'AI Copilots',
      'LLM Applications',
      'RAG Systems',
      'Workflow Automation',
      'AI Integrations',
    ],
    outcome: 'Automate workflows, improve productivity, create new AI products, and reduce manual work.',
    cta: 'Build With AI',
    color: 'bg-[#25CA22]/10 border-[#25CA22]/30 shadow-[0_0_15px_rgba(37,202,34,0.1)]',
    iconColor: 'text-[#25CA22]',
    phaseColor: 'text-[#25CA22]',
  },
  {
    id: 's3',
    number: '03',
    phase: 'POWER',
    icon: 'ns-shape-41',
    title: 'Data Engineering & Analytics',
    positioning: 'Build the data foundation that makes intelligent systems reliable.',
    problem: 'Data is siloed, messy, and unreliable — making analytics impossible and AI untrustworthy.',
    solution: 'We connect, structure and transform business data into reliable systems that support analytics, automation and AI. We help organizations move to modern, accessible data platforms.',
    capabilities: [
      'Data Pipelines & ETL',
      'Data Warehousing',
      'Data Integration',
      'Data Modeling',
      'Business Intelligence',
      'Analytics Engineering',
    ],
    outcome: 'Create a reliable source of truth, automate reporting, and prepare your data infrastructure for AI.',
    cta: 'Modernize Your Data',
    color: 'bg-blue-500/10 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]',
    iconColor: 'text-blue-400',
    phaseColor: 'text-blue-400',
  },
  {
    id: 's4',
    number: '04',
    phase: 'DEPLOY',
    icon: 'ns-shape-35',
    title: 'Forward Deployed Engineer',
    positioning: 'Put experienced engineers directly inside your organization.',
    problem: 'Organizations need deep AI and engineering expertise but cannot justify building an entire internal team from scratch.',
    solution: "RockScale engineers work directly alongside your product, engineering and operations teams. We understand the business problem, build the solution and help take it into production.",
    capabilities: [
      'AI Implementation',
      'Rapid Prototyping',
      'Technical Architecture',
      'Data & AI Infrastructure',
      'Engineering Augmentation',
      'Productionization of PoCs',
    ],
    outcome: 'Move faster, reduce bottlenecks, turn PoCs into production systems, and build internal AI capabilities.',
    cta: 'Deploy an Engineer',
    color: 'bg-orange-500/10 border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.1)]',
    iconColor: 'text-orange-400',
    phaseColor: 'text-orange-400',
  },
];

const CoreServices = () => {
  return (
    <section id="services" className="relative z-0 overflow-hidden bg-[#061225] py-20 md:py-28 lg:py-32" aria-labelledby="core-services-heading">
      
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay -z-20" />
      <div className="absolute top-1/2 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7E57FD]/5 blur-[120px]" />
      
      <div className="main-container relative z-10">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-[800px] space-y-6 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2">Our Four-Pillar Service Model</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="core-services-heading" className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-[56px] lg:leading-[1.1]">
              Strategy → Software →<br className="hidden md:block" /> Data → Engineering
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[700px] text-lg leading-relaxed text-white/70">
              RockScale helps organizations across the complete AI implementation journey — from understanding where AI creates value, to building intelligent software, powering it with reliable data, and deploying experienced engineers to make it real.
            </p>
          </RevealAnimation>
        </div>

        {/* Journey connector row */}
        <RevealAnimation delay={0.2}>
          <div className="hidden lg:flex items-center justify-center gap-0 mb-16">
            {services.map((s, idx) => (
              <div key={s.id} className="flex items-center">
                <div className={`flex flex-col items-center justify-center rounded-full px-7 py-2.5 backdrop-blur-md ${s.color}`}>
                  <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${s.phaseColor}`}>{s.phase}</span>
                  <span className="text-sm font-semibold text-white">{s.title.split(' ')[0]}</span>
                </div>
                {idx < services.length - 1 && (
                  <div className="flex items-center px-3">
                    <svg width="32" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5H23M23 5L18 1M23 5L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/20"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </RevealAnimation>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <RevealAnimation key={service.id} delay={0.2 + (index % 2) * 0.1}>
              <div className="group flex h-full flex-col rounded-[32px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:border-white/20 xl:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
                
                {/* Card Header */}
                <div className="mb-8 flex items-start gap-5 border-b border-white/10 pb-8">
                  <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${service.color}`}>
                    <span className={`${service.icon} ${service.iconColor} text-[32px]`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${service.phaseColor}`}>{service.phase}</span>
                      <span className="text-white/20 text-[10px]">·</span>
                      <span className="text-[10px] font-bold text-white/40">{service.number}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white md:text-3xl tracking-tight">{service.title}</h3>
                    <p className="text-base text-white/60 mt-2 leading-relaxed">{service.positioning}</p>
                  </div>
                </div>

                <div className="flex-grow space-y-8">
                  {/* Problem & Solution */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">The Challenge</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{service.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">RockScale Approach</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{service.solution}</p>
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">What We Help With</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((cap) => (
                        <span key={cap} className="rounded-full bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 border border-white/10 transition-colors group-hover:border-white/20">
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcome */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">Business Outcome</h4>
                    <div className={`rounded-2xl p-4 ${service.color}`}>
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-current/20 ${service.iconColor}`}>
                           <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <p className={`text-sm font-medium leading-relaxed ${service.iconColor}`}>{service.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <Link
                    href="/contact-us"
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30"
                  >
                    {service.cta}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
