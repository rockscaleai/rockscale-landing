'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const services = [
  { id: '1', title: 'AI Applications', outcome: 'Ship production-ready AI features that users actually rely on — from copilots to fully automated workflows.' },
  { id: '2', title: 'AI Agents', outcome: 'Deploy autonomous agents that execute complex tasks across your internal systems with minimal human intervention.' },
  { id: '3', title: 'LLM Integration', outcome: 'Integrate leading language models into your products and infrastructure with robust fallbacks and cost controls.' },
  { id: '4', title: 'Data Engineering', outcome: 'Build reliable, scalable data pipelines that turn raw operational data into clean, actionable assets.' },
  { id: '5', title: 'Business Intelligence', outcome: 'Deliver real-time dashboards and analytics that give leadership the insight needed for confident decisions.' },
  { id: '6', title: 'Cloud Infrastructure', outcome: 'Design and operate secure, cost-optimized cloud environments across AWS, GCP, and Azure.' },
  { id: '7', title: 'Enterprise Automation', outcome: 'Eliminate manual bottlenecks by automating repetitive workflows across operations, finance, and HR.' },
  { id: '8', title: 'AI Strategy', outcome: 'Define a clear, board-level AI roadmap with prioritized use cases, ROI projections, and a governance framework.' },
];

const ServicesGrid = () => {
  return (
    <section className="bg-white dark:bg-black py-16 md:py-20 lg:py-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-12 max-w-[750px] space-y-4 text-center md:mb-[60px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Services We Can Help With</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Capabilities built for serious business challenges</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              Not sure which service applies? Describe your challenge in the form and we will recommend the right approach.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <RevealAnimation key={service.id} delay={0.1 + (index % 4) * 0.07}>
              <div className="group h-full rounded-[20px] bg-background-3 p-6 dark:bg-background-7 border border-stroke-1/10 dark:border-white/5 transition-all duration-300 hover:-translate-y-1 space-y-3">
                <h3 className="text-base font-bold">{service.title}</h3>
                <p className="text-sm text-secondary/70 dark:text-accent/70 leading-relaxed">{service.outcome}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

ServicesGrid.displayName = 'ServicesGrid';
export default ServicesGrid;
