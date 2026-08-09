'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';

const knowledgeAreas = [
  {
    title: 'AI Fundamentals',
    description: 'Understand modern AI, LLMs, generative AI and AI agents without needing to become engineers.',
  },
  {
    title: 'Business Value',
    description: 'Identify where AI can improve revenue, productivity, customer experience and operations.',
  },
  {
    title: 'AI Strategy',
    description: 'Understand how to create an AI roadmap aligned with business objectives.',
  },
  {
    title: 'AI Investment',
    description: 'Evaluate where to invest, what to build and what to buy.',
  },
  {
    title: 'Data',
    description: 'Understand why data quality, infrastructure and access matter to AI.',
  },
  {
    title: 'AI Risk',
    description: 'Understand privacy, security, hallucinations, reliability and governance.',
  },
  {
    title: 'AI Adoption',
    description: 'Understand how AI changes workflows, roles and organizational processes.',
  },
  {
    title: 'Competitive Advantage',
    description: 'Identify where AI can create differentiation rather than simply improve productivity.',
  },
];

const ExecKnowledgeGrid = () => {
  return (
    <section className="py-20 lg:py-[120px]">
      <div className="main-container">
        <div className="text-center mb-12">
          <RevealAnimation>
            <h2 className="text-4xl lg:text-5xl font-bold">The AI Knowledge Every Executive Team Needs</h2>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {knowledgeAreas.map((item, index) => (
            <RevealAnimation key={index} delay={0.1 * index}>
              <div className="bg-white dark:bg-background-7 rounded-2xl p-6 h-full">
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-secondary/70 dark:text-accent/70">{item.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

ExecKnowledgeGrid.displayName = 'ExecKnowledgeGrid';
export default ExecKnowledgeGrid;