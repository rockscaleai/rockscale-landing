'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const problems = [
  { id: '1', icon: 'ns-shape-8', title: 'Disconnected Systems', description: 'Operational systems work in isolation, creating data silos and limiting efficiency.' },
  { id: '2', icon: 'ns-shape-35', title: 'Manual Workflows', description: 'Reliance on manual, repetitive tasks slows down growth and stifles innovation.' },
  { id: '3', icon: 'ns-shape-41', title: 'Poor Data Visibility', description: 'Inability to extract actionable insights due to fragmented and unstructured data.' },
  { id: '4', icon: 'ns-shape-19', title: 'Slow Decision Making', description: 'Lack of real-time intelligence delays strategic responses to market changes.' },
  { id: '5', icon: 'ns-shape-31', title: 'Legacy Infrastructure', description: 'Outdated technology stacks that are expensive to maintain and difficult to scale.' },
  { id: '6', icon: 'ns-shape-21', title: 'AI Adoption Challenges', description: 'Struggling to move AI initiatives from pilot to production due to architecture complexity.' }
];

const BusinessProblems = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] dark:bg-black">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Business Problems We Solve</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Overcoming critical barriers</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              We design and implement solutions to address the most pressing challenges holding back enterprise growth.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <RevealAnimation key={problem.id} delay={0.15 + (index % 3) * 0.08}>
              <div className="bg-background-3 dark:bg-background-7 group flex flex-col gap-3 rounded-[16px] p-8 border border-stroke-1/10 dark:border-white/5 h-full transition-transform duration-300 hover:-translate-y-1">
                <span className={`${problem.icon} text-secondary dark:text-accent text-[32px] mb-2 transition-colors duration-300 group-hover:text-ns-green`} />
                <h4 className="text-heading-6 text-lg font-semibold">{problem.title}</h4>
                <p className="text-secondary/60 dark:text-accent/60 text-sm leading-relaxed flex-grow">{problem.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

BusinessProblems.displayName = 'BusinessProblems';
export default BusinessProblems;
