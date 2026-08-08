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
      'AI Transformation Roadmaps',
      'AI Architecture Strategy',
      'Technology & Model Selection',
      'AI Governance Strategy',
      'Build vs Buy Decisions',
      'AI Adoption Planning',
      'Proof-of-Concept Strategy',
    ],
    outcome: 'Give leadership a clear understanding of where AI can create value, what should be built, what to prioritize, and how to move from strategy to implementation.',
    cta: 'Build Your AI Roadmap',
    color: 'bg-[#7E57FD]/10 dark:bg-[#7E57FD]/20',
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
      'Document Intelligence',
      'AI-Powered SaaS',
      'Internal AI Tools',
      'Workflow Automation',
      'Intelligent Search',
      'Conversational Interfaces',
      'AI Integrations',
    ],
    outcome: 'Automate workflows, improve productivity, create new AI-powered products, reduce manual work, and open new revenue opportunities.',
    cta: 'Build With AI',
    color: 'bg-ns-green/10 dark:bg-ns-green/20',
    iconColor: 'text-ns-green',
    phaseColor: 'text-ns-green',
  },
  {
    id: 's3',
    number: '03',
    phase: 'POWER',
    icon: 'ns-shape-41',
    title: 'Data Engineering & Analytics',
    positioning: 'Build the data foundation that makes intelligent systems reliable.',
    problem: 'Data is siloed, messy, and unreliable — making analytics impossible and AI untrustworthy.',
    solution: 'We connect, structure and transform business data into reliable systems that support analytics, automation and AI. We help organizations move from fragmented data and manual reporting to modern, accessible and analytics-ready data platforms.',
    capabilities: [
      'Data Pipelines & ETL/ELT',
      'Data Warehousing',
      'Data Lakes',
      'Data Integration',
      'Data Modeling & Quality',
      'Business Intelligence',
      'Executive Dashboards',
      'Analytics Engineering',
      'Predictive Analytics',
      'Data Platform Modernization',
    ],
    outcome: 'Create a reliable source of truth, eliminate fragmented data, automate reporting, improve decision-making, and prepare your data infrastructure for AI.',
    cta: 'Modernize Your Data',
    color: 'bg-blue-500/10 dark:bg-blue-500/20',
    iconColor: 'text-blue-500',
    phaseColor: 'text-blue-500',
  },
  {
    id: 's4',
    number: '04',
    phase: 'DEPLOY',
    icon: 'ns-shape-35',
    title: 'Forward Deployed Engineer',
    positioning: 'Put experienced engineers directly inside your organization.',
    problem: 'Organizations need deep AI and engineering expertise but cannot justify building an entire internal team from scratch.',
    solution: "RockScale engineers work directly alongside your product, engineering and operations teams. We understand the business problem, work inside the client's environment, build the solution and help take it into production.",
    capabilities: [
      'AI Implementation',
      'Rapid Prototyping',
      'Production AI Systems',
      'Technical Architecture',
      'AI Integrations',
      'Data & AI Infrastructure',
      'Legacy System Integration',
      'Internal Developer Platforms',
      'AI Agent Deployment',
      'Engineering Team Augmentation',
      'Productionization of AI PoCs',
    ],
    outcome: 'Move faster, reduce implementation bottlenecks, turn PoCs into production systems, solve complex technical problems, and build internal AI capabilities.',
    cta: 'Deploy an Engineer',
    color: 'bg-orange-500/10 dark:bg-orange-500/20',
    iconColor: 'text-orange-500',
    phaseColor: 'text-orange-500',
  },
];

const CoreServices = () => {
  return (
    <section id="services" className="bg-white py-16 md:py-20 lg:py-[100px] dark:bg-[#0d0d1a]" aria-labelledby="core-services-heading">
      <div className="main-container">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-[800px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Our Four-Pillar Service Model</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="core-services-heading">Strategy → Software → Data → Engineering</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[700px] text-secondary/70 dark:text-accent/70">
              RockScale helps organizations across the complete AI implementation journey — from understanding where AI creates value, to building intelligent software, powering it with reliable data, and deploying experienced engineers to make it real.
            </p>
          </RevealAnimation>
        </div>

        {/* Journey connector row */}
        <RevealAnimation delay={0.2}>
          <div className="hidden lg:flex items-center justify-center gap-0 mb-12">
            {services.map((s, idx) => (
              <div key={s.id} className="flex items-center">
                <div className={`flex flex-col items-center justify-center rounded-full px-6 py-2 ${s.color} border border-stroke-1/10 dark:border-white/10`}>
                  <span className={`text-[10px] font-bold tracking-widest uppercase ${s.phaseColor}`}>{s.phase}</span>
                  <span className="text-sm font-medium text-secondary dark:text-accent">{s.title.split(' ')[0]}</span>
                </div>
                {idx < services.length - 1 && (
                  <div className="flex items-center px-2">
                    <svg width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5H23M23 5L18 1M23 5L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary/30 dark:text-accent/30"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </RevealAnimation>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <RevealAnimation key={service.id} delay={0.2 + (index % 2) * 0.1}>
              <div className="bg-background-3 dark:bg-background-6 flex h-full flex-col rounded-[20px] p-8 xl:p-10 border border-stroke-1/10 dark:border-white/5 transition-transform duration-300 hover:-translate-y-1">
                
                {/* Card Header */}
                <div className="mb-6 flex items-start gap-4 border-b border-stroke-1/10 pb-6 dark:border-white/10">
                  <div className={`flex size-14 shrink-0 items-center justify-center rounded-xl ${service.color}`}>
                    <span className={`${service.icon} ${service.iconColor} text-[32px]`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold tracking-widest uppercase ${service.phaseColor}`}>{service.phase}</span>
                      <span className="text-secondary/30 dark:text-accent/30 text-[10px]">·</span>
                      <span className="text-[10px] font-medium text-secondary/40 dark:text-accent/40">{service.number}</span>
                    </div>
                    <h3 className="text-heading-5">{service.title}</h3>
                    <p className="text-sm text-secondary/60 dark:text-accent/60 mt-1">{service.positioning}</p>
                  </div>
                </div>

                <div className="flex-grow space-y-5">
                  {/* Problem */}
                  <div>
                    <h4 className="text-tagline-2 mb-1 font-semibold text-secondary dark:text-accent">The Challenge</h4>
                    <p className="text-secondary/70 dark:text-accent/70 text-sm">{service.problem}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-tagline-2 mb-1 font-semibold text-secondary dark:text-accent">RockScale Approach</h4>
                    <p className="text-secondary/70 dark:text-accent/70 text-sm">{service.solution}</p>
                  </div>

                  {/* Capabilities */}
                  <div>
                    <h4 className="text-tagline-2 mb-3 font-semibold text-secondary dark:text-accent">What We Help With</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((cap) => (
                        <span key={cap} className="bg-white dark:bg-background-8 text-secondary/70 dark:text-accent/70 rounded-full px-3 py-1 text-xs border border-stroke-1/10 dark:border-white/10">
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcome */}
                  <div>
                    <h4 className="text-tagline-2 mb-1 font-semibold text-secondary dark:text-accent">Business Outcome</h4>
                    <div className={`${service.color} rounded-lg p-3 border border-stroke-1/5 dark:border-white/5`}>
                      <p className={`text-sm font-medium ${service.iconColor}`}>{service.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-stroke-1/10 dark:border-white/10">
                  <Link
                    href="/contact-us"
                    className="btn btn-white dark:btn-transparent border border-stroke-1/20 dark:border-white/20 hover:btn-primary w-full first-letter:uppercase before:content-none text-sm"
                  >
                    {service.cta} →
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

CoreServices.displayName = 'CoreServices';
export default CoreServices;
