'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const benefits = [
  { id: '1', icon: 'ns-shape-8', title: 'One API', subtitle: 'Every Model', description: 'Integrate once and access all frontier models. Switch providers without rewriting a single line of code.' },
  { id: '2', icon: 'ns-shape-35', title: 'OpenAI Compatible', subtitle: 'Zero Migration', description: 'Fully compatible with the OpenAI SDK. If you use OpenAI today, you can switch to Qorebit in minutes.' },
  { id: '3', icon: 'ns-shape-41', title: 'Unified Billing', subtitle: 'One Invoice', description: 'Stop managing separate billing across providers. Consolidate all AI spending into a single transparent credit wallet.' },
  { id: '4', icon: 'ns-shape-19', title: 'AI Gateway', subtitle: 'Smart Routing', description: 'Intelligent model routing that selects the best model based on your latency, cost, and capability requirements.' },
  { id: '5', icon: 'ns-shape-31', title: 'Enterprise Ready', subtitle: 'Team Management', description: 'Role-based access, workspace management, and organization-level API key controls built for engineering teams.' },
  { id: '6', icon: 'ns-shape-21', title: 'Cost Optimization', subtitle: 'Spend Smarter', description: 'Real-time usage analytics and cost monitoring ensure you&apos;re always getting the best value from your AI infrastructure.' },
];

const QorebitBenefits = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="benefits-heading">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Key Benefits</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="benefits-heading">Everything you need. Nothing you don't.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              Qorebit is engineered to remove the infrastructure friction that slows AI adoption.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {benefits.map((item, index) => (
            <RevealAnimation key={item.id} delay={0.2 + index * 0.1}>
              <div className="bg-white dark:bg-background-6 group flex h-full flex-col space-y-4 rounded-[20px] p-8 border border-stroke-1/10 dark:border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className={`${item.icon} text-secondary dark:text-accent text-[40px] transition-transform duration-300 group-hover:scale-110`} />
                <div>
                  <h4 className="text-heading-6 mb-0.5">{item.title}</h4>
                  <p className="text-xs font-semibold text-ns-green uppercase tracking-wider mb-2">{item.subtitle}</p>
                  <p className="text-secondary/70 dark:text-accent/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

QorebitBenefits.displayName = 'QorebitBenefits';
export default QorebitBenefits;
