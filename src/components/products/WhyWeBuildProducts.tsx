'use client';
import RevealAnimation from '../animation/RevealAnimation';

const reasons = [
  {
    id: '1',
    icon: 'ns-shape-8',
    title: 'Built from Real Consulting',
    description: 'Every feature solves a problem we encountered in production AI deployments. No speculative features.',
  },
  {
    id: '2',
    icon: 'ns-shape-35',
    title: 'Designed for Developers',
    description: 'OpenAI-compatible APIs, clean SDKs, and documentation that respects your time.',
  },
  {
    id: '3',
    icon: 'ns-shape-41',
    title: 'Enterprise-Ready',
    description: 'Role-based access, audit logs, workspace management, and security built in from day one.',
  },
  {
    id: '4',
    icon: 'ns-shape-19',
    title: 'Infinitely Scalable',
    description: 'Designed to handle requests at any volume without surprises in performance or pricing.',
  },
  {
    id: '5',
    icon: 'ns-shape-31',
    title: 'Modern AI Infrastructure',
    description: 'Always up to date with the latest frontier models and provider integrations as they emerge.',
  },
  {
    id: '6',
    icon: 'ns-shape-21',
    title: 'Future-Proof Architecture',
    description: 'Model-agnostic design means your application works regardless of which AI provider leads tomorrow.',
  },
];

const WhyWeBuildProducts = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="why-products-heading">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Why We Build Products</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="why-products-heading">Platforms that create lasting competitive advantage</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              Our products are born from engineering discipline and enterprise thinking. We don't build tools — we build infrastructure.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {reasons.map((item, index) => (
            <RevealAnimation key={item.id} delay={0.2 + index * 0.1}>
              <div className="bg-white dark:bg-background-6 flex h-full flex-col space-y-4 rounded-[20px] p-8 border border-stroke-1/10 dark:border-white/5 transition-transform duration-300 hover:-translate-y-1">
                <span className={`${item.icon} text-secondary dark:text-accent text-[40px]`} />
                <h4 className="text-heading-6">{item.title}</h4>
                <p className="text-secondary/70 dark:text-accent/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

WhyWeBuildProducts.displayName = 'WhyWeBuildProducts';
export default WhyWeBuildProducts;
