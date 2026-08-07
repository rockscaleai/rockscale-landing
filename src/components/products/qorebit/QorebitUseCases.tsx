'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const useCases = [
  { id: 'uc1', icon: 'ns-shape-8', title: 'AI Chatbots', description: 'Build intelligent chat interfaces powered by multiple frontier models with automatic fallbacks.' },
  { id: 'uc2', icon: 'ns-shape-35', title: 'Customer Support', description: 'Automate support workflows with context-aware AI that escalates intelligently to human agents.' },
  { id: 'uc3', icon: 'ns-shape-41', title: 'AI Coding Assistants', description: 'Integrate code generation and review capabilities into developer workflows using the best code models.' },
  { id: 'uc4', icon: 'ns-shape-19', title: 'Content Generation', description: 'Scale content production across marketing, documentation, and knowledge management.' },
  { id: 'uc5', icon: 'ns-shape-31', title: 'Workflow Automation', description: 'Embed AI reasoning into existing business processes to reduce manual effort.' },
  { id: 'uc6', icon: 'ns-shape-21', title: 'Knowledge Search', description: 'Combine Qorebit models with your internal documents for intelligent enterprise search.' },
  { id: 'uc7', icon: 'ns-shape-23', title: 'AI Agents', description: 'Build autonomous agents that plan, reason, and execute multi-step tasks on your behalf.' },
  { id: 'uc8', icon: 'ns-shape-10', title: 'Document Intelligence', description: 'Extract, classify, and analyse information from unstructured documents at scale.' },
];

const QorebitUseCases = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="use-cases-heading">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Use Cases</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="use-cases-heading">What teams build with Qorebit</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              From early-stage startups to enterprise engineering teams, Qorebit powers real-world AI applications across every vertical.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((uc, index) => (
            <RevealAnimation key={uc.id} delay={0.15 + (index % 4) * 0.08}>
              <div className="bg-white dark:bg-background-6 flex flex-col gap-3 rounded-[16px] p-6 border border-stroke-1/10 dark:border-white/5 h-full transition-transform duration-300 hover:-translate-y-1">
                <span className={`${uc.icon} text-secondary dark:text-accent text-[32px]`} />
                <h4 className="text-heading-6 text-sm font-semibold">{uc.title}</h4>
                <p className="text-secondary/60 dark:text-accent/60 text-xs leading-relaxed flex-grow">{uc.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

QorebitUseCases.displayName = 'QorebitUseCases';
export default QorebitUseCases;
