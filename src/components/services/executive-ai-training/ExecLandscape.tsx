'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';

const landscapeTopics = [
  'Foundation models',
  'LLMs',
  'AI agents',
  'AI copilots',
  'RAG',
  'AI automation',
  'Multimodal AI',
  'Open-source models',
  'AI infrastructure',
  'AI applications',
];

const ExecLandscape = () => {
  return (
    <section className="py-20 lg:py-[120px]">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <RevealAnimation>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Know What’s Real, What’s Useful and What’s Hype</h2>
                <p className="text-secondary/70 dark:text-accent/70 text-lg leading-relaxed">
                  The goal is not to teach technical implementation. The goal is to give executives enough context to make
                  informed decisions about the current AI ecosystem.
                </p>
              </div>
            </RevealAnimation>
          </div>
          <div>
            <RevealAnimation delay={0.2}>
              <div className="flex flex-wrap gap-4">
                {landscapeTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="bg-secondary/5 dark:bg-accent/5 rounded-full px-5 py-2 text-secondary dark:text-accent font-medium"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

ExecLandscape.displayName = 'ExecLandscape';
export default ExecLandscape;