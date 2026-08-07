'use client';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const roadmapItems = [
  {
    id: 'rm-1',
    status: 'live',
    badge: 'Now Available',
    title: 'Qorebit AI',
    description: 'AI Infrastructure Platform. Unified API access to all leading AI models with enterprise workspace management, usage analytics, and OpenAI-compatible SDKs.',
    features: ['Model Routing', 'Unified Billing', 'AI Gateway', 'Workspace Management'],
    href: '/products/qorebit-ai',
  },
  {
    id: 'rm-2',
    status: 'upcoming',
    badge: 'Future Product',
    title: 'Enterprise AI Agents',
    description: 'Autonomous multi-agent orchestration platform for complex, multi-step business workflows.',
    features: ['Multi-agent Coordination', 'Task Orchestration', 'Business Process Automation'],
    href: null,
  },
  {
    id: 'rm-3',
    status: 'upcoming',
    badge: 'Future Product',
    title: 'Knowledge Platforms',
    description: 'Enterprise knowledge management and retrieval platform powered by advanced RAG architectures.',
    features: ['Document Intelligence', 'Semantic Search', 'Knowledge Graphs'],
    href: null,
  },
  {
    id: 'rm-4',
    status: 'upcoming',
    badge: 'Future Product',
    title: 'AI Analytics Platform',
    description: 'Embedded analytics and predictive intelligence for data-driven decision making at scale.',
    features: ['Predictive Analytics', 'ML Dashboards', 'Automated Insights'],
    href: null,
  },
];

const ProductRoadmap = () => {
  return (
    <section className="bg-white dark:bg-[#0d0d1a] py-16 md:py-20 lg:py-[100px]" aria-labelledby="roadmap-heading">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Product Roadmap</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="roadmap-heading">Where we're building next</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              We are building a growing ecosystem of intelligent platforms. Here's what's live and what's coming.
            </p>
          </RevealAnimation>
        </div>

        <div className="relative mx-auto max-w-[780px]">
          {/* Vertical connector */}
          <div className="absolute left-6 top-10 bottom-10 w-px bg-stroke-1/30 dark:bg-white/10 hidden md:block" />

          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <RevealAnimation key={item.id} delay={0.2 + index * 0.15}>
                <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
                  {/* Status indicator */}
                  <div className={`relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full shadow-[0_0_0_6px_var(--color-background-1)] dark:shadow-[0_0_0_6px_#0d0d1a] ${item.status === 'live' ? 'bg-ns-green' : 'bg-background-4 dark:bg-background-6 border-2 border-stroke-1 dark:border-white/10'}`}>
                    {item.status === 'live' ? (
                      <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                        <path d="M14 1.5L5.5 10L2 6.5" stroke="#061225" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <span className="text-secondary/40 dark:text-accent/30 text-xs font-bold">{index}</span>
                    )}
                  </div>

                  {/* Card */}
                  <div className={`flex-grow rounded-[20px] p-6 border transition-all duration-300 md:p-8 ${item.status === 'live' ? 'bg-background-3 dark:bg-background-6 border-ns-green/30 dark:border-ns-green/20' : 'bg-background-3 dark:bg-background-6 border-stroke-1/10 dark:border-white/5 opacity-70'}`}>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-grow space-y-3">
                        <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${item.status === 'live' ? 'bg-ns-green/20 text-ns-green' : 'bg-background-4 dark:bg-background-7 text-secondary/60 dark:text-accent/50'}`}>
                          {item.badge}
                        </span>
                        <h3 className="text-heading-5">{item.title}</h3>
                        <p className="text-secondary/70 dark:text-accent/70 text-sm leading-relaxed">{item.description}</p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {item.features.map((f) => (
                            <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-stroke-1/30 dark:bg-white/5 text-secondary/60 dark:text-accent/50">{f}</span>
                          ))}
                        </div>
                      </div>
                      {item.href && (
                        <div className="shrink-0">
                          <LinkButton href={item.href} className="btn btn-secondary hover:btn-primary btn-md whitespace-nowrap">
                            Learn More
                          </LinkButton>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

ProductRoadmap.displayName = 'ProductRoadmap';
export default ProductRoadmap;
