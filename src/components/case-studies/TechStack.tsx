'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const technologies = [
  { name: 'OpenAI', icon: 'ns-shape-45' },
  { name: 'Anthropic', icon: 'ns-shape-46' },
  { name: 'Google Cloud', icon: 'ns-shape-47' },
  { name: 'AWS', icon: 'ns-shape-48' },
  { name: 'Azure', icon: 'ns-shape-49' },
  { name: 'Docker', icon: 'ns-shape-50' },
  { name: 'Kubernetes', icon: 'ns-shape-51' },
  { name: 'LangGraph', icon: 'ns-shape-52' },
  { name: 'Power BI', icon: 'ns-shape-53' },
  { name: 'Snowflake', icon: 'ns-shape-54' },
  { name: 'dbt', icon: 'ns-shape-55' },
  { name: 'PostgreSQL', icon: 'ns-shape-56' },
  { name: 'Redis', icon: 'ns-shape-57' },
  { name: 'Vector Databases', icon: 'ns-shape-58' }
];

const TechStack = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Technology Stack</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Tools that power transformation</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              We leverage best-in-class enterprise technologies across AI, cloud infrastructure, and data engineering.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {technologies.map((tech, index) => (
            <RevealAnimation key={tech.name} delay={0.1 + (index % 7) * 0.05}>
              <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-background-6 rounded-[16px] border border-stroke-1/10 dark:border-white/5 transition-all hover:scale-105 hover:shadow-sm">
                <span className="text-secondary dark:text-accent font-medium text-sm text-center">{tech.name}</span>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

TechStack.displayName = 'TechStack';
export default TechStack;
