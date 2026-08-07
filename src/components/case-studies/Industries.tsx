'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const industries = [
  { id: '1', name: 'Financial Services', icon: 'ns-shape-8' },
  { id: '2', name: 'Healthcare', icon: 'ns-shape-35' },
  { id: '3', name: 'Retail', icon: 'ns-shape-41' },
  { id: '4', name: 'Manufacturing', icon: 'ns-shape-19' },
  { id: '5', name: 'Technology', icon: 'ns-shape-31' },
  { id: '6', name: 'Professional Services', icon: 'ns-shape-21' },
  { id: '7', name: 'Education', icon: 'ns-shape-10' },
  { id: '8', name: 'Government', icon: 'ns-shape-23' },
  { id: '9', name: 'Logistics', icon: 'ns-shape-16' },
];

const Industries = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Industries We Transform</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Expertise across domains</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              We apply our deep technical knowledge to solve complex business challenges in a variety of industries.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {industries.map((industry, index) => (
            <RevealAnimation key={industry.id} delay={0.15 + (index % 5) * 0.08}>
              <div className="bg-white dark:bg-background-6 flex flex-col items-center justify-center gap-3 rounded-[16px] p-6 border border-stroke-1/10 dark:border-white/5 h-full transition-all duration-300 hover:-translate-y-1 hover:border-ns-green/30 dark:hover:border-ns-green/20">
                <span className={`${industry.icon} text-secondary dark:text-accent text-[32px] mb-2`} />
                <h4 className="text-sm font-semibold text-center">{industry.name}</h4>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

Industries.displayName = 'Industries';
export default Industries;
