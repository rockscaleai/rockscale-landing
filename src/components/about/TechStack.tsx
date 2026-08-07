'use client';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const techStack = [
  'OpenAI', 'Anthropic', 'Google Cloud', 'AWS', 'Azure', 
  'Snowflake', 'Databricks', 'dbt', 'LangChain', 'LlamaIndex', 
  'Docker', 'Kubernetes', 'Power BI', 'Looker', 'Pinecone',
  'Weaviate', 'PostgreSQL', 'Python', 'TypeScript'
];

const TechStack = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="tech-stack-heading">
      <div className="main-container relative">
        <div className="mx-auto mb-12 max-w-[750px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-4">Technology Ecosystem</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="tech-stack-heading">Powered by modern infrastructure</h2>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.3} instant>
          <div className="overflow-hidden" aria-label="Technology stack used by RockScale">
            <Marquee speed={40} autoFill pauseOnHover>
              <div className="flex items-center gap-6 px-3">
                {techStack.map((tech, i) => (
                  <div 
                    key={`${tech}-${i}`} 
                    className="flex h-14 items-center justify-center rounded-full bg-white dark:bg-background-6 px-8 border border-stroke-1/10 dark:border-white/5 shadow-sm">
                    <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </RevealAnimation>
        
        {/* left fade */}
        <div className="dark:from-background-7 pointer-events-none absolute bottom-0 left-0 top-[150px] w-20 bg-gradient-to-r from-[#f5f4f2] to-transparent md:w-32" aria-hidden="true" />
        {/* right fade */}
        <div className="dark:to-background-7 pointer-events-none absolute bottom-0 right-0 top-[150px] w-20 bg-gradient-to-l from-[#f5f4f2] to-transparent md:w-32" aria-hidden="true" />
      </div>
    </section>
  );
};

TechStack.displayName = 'TechStack';
export default TechStack;
