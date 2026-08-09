'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';

const ExecAIGap = () => {
  return (
    <section className="bg-white dark:bg-background-7 py-20 lg:py-[120px]">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <RevealAnimation>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">AI Is Moving Faster Than Most Leadership Teams</h2>
                <p className="text-secondary/70 dark:text-accent/70 text-lg leading-relaxed mb-8">
                  Executives are increasingly expected to make decisions about AI investments, tools, vendors, automation,
                  data infrastructure, talent, governance, security, product strategy, and competitive positioning.
                </p>
                <p className="text-secondary/70 dark:text-accent/70 text-lg leading-relaxed">
                  But many leadership teams lack a shared understanding of what modern AI can realistically do. This creates
                  risks such as investing in the wrong tools, running disconnected AI experiments, missing valuable
                  opportunities, underestimating implementation complexity, failing to prepare employees, and creating
                  unnecessary AI risk.
                </p>
              </div>
            </RevealAnimation>
          </div>
          <div>
            <RevealAnimation delay={0.2}>
              <div className="bg-secondary/5 dark:bg-accent/5 rounded-2xl p-8">
                <h4 className="font-bold text-xl mb-4">Key Decision Areas:</h4>
                <ul className="list-disc list-inside space-y-2 text-secondary/80 dark:text-accent/80">
                  <li>AI Investments & Tools</li>
                  <li>Automation & Data Infrastructure</li>
                  <li>AI Talent & Governance</li>
                  <li>Security & Product Strategy</li>
                  <li>Competitive Positioning</li>
                </ul>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

ExecAIGap.displayName = 'ExecAIGap';
export default ExecAIGap;