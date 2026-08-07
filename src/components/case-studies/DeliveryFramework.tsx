'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const frameworkSteps = [
  { id: '1', number: '01', title: 'Discovery', description: 'Understanding the business problem, current architecture, and desired outcomes.' },
  { id: '2', number: '02', title: 'Strategy', description: 'Defining the roadmap, selecting technologies, and identifying quick wins.' },
  { id: '3', number: '03', title: 'Architecture', description: 'Designing a secure, scalable, and enterprise-grade system architecture.' },
  { id: '4', number: '04', title: 'Implementation', description: 'Iterative development, integration, and rigorous testing.' },
  { id: '5', number: '05', title: 'Deployment', description: 'Seamless rollout to production with minimal disruption to operations.' },
  { id: '6', number: '06', title: 'Optimization', description: 'Continuous monitoring, performance tuning, and scaling.' }
];

const DeliveryFramework = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Our Delivery Framework</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>How we drive transformation</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              A proven, end-to-end methodology that ensures every AI and data project delivers measurable business value.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {frameworkSteps.map((step, index) => (
            <RevealAnimation key={step.id} delay={0.15 + index * 0.1}>
              <div className="bg-white dark:bg-background-6 rounded-[20px] p-8 border border-stroke-1/10 dark:border-white/5 relative overflow-hidden h-full">
                <span className="absolute -top-4 -right-4 text-8xl font-bold text-background-3 dark:text-background-7 select-none">{step.number}</span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-secondary dark:text-white">{step.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">{step.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

DeliveryFramework.displayName = 'DeliveryFramework';
export default DeliveryFramework;
