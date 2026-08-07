'use client';
import RevealAnimation from '../animation/RevealAnimation';

const services = [
  {
    id: 's1',
    icon: 'ns-shape-23',
    title: 'Custom AI Solutions',
    problem: 'Manual processes and generic software create bottlenecks and inefficiencies.',
    solution: 'We build tailored AI applications, internal copilots, and workflow automation systems that integrate seamlessly into your operations.',
    outcome: 'Automate operations and improve productivity.',
    tech: 'Python, TypeScript, React, Docker, Custom LLM APIs',
  },
  {
    id: 's2',
    icon: 'ns-shape-41',
    title: 'Generative AI & LLM Integration',
    problem: 'Valuable organizational knowledge is trapped in unstructured documents and fragmented tools.',
    solution: 'We integrate advanced language models (ChatGPT, Claude) using Retrieval-Augmented Generation (RAG) to build intelligent document processing and AI agents.',
    outcome: 'Transform business knowledge into intelligent systems.',
    tech: 'OpenAI, Anthropic, LangChain, LlamaIndex, Vector Databases',
  },
  {
    id: 's3',
    icon: 'ns-shape-10',
    title: 'Data Engineering',
    problem: 'Data is siloed, messy, and unreliable, making AI and analytics impossible.',
    solution: 'We architect robust ETL/ELT pipelines, data warehouses, and data lakes to unify your data streams.',
    outcome: 'Create a reliable foundation for analytics and AI.',
    tech: 'Snowflake, BigQuery, dbt, Airflow, PostgreSQL',
  },
  {
    id: 's4',
    icon: 'ns-shape-35',
    title: 'Business Intelligence & Analytics',
    problem: 'Leaders struggle to make data-driven decisions due to poor visibility and reporting.',
    solution: 'We develop executive dashboards, predictive analytics, and forecasting models that provide actionable insights in real-time.',
    outcome: 'Turn data into business decisions.',
    tech: 'Power BI, Looker, Tableau, Predictive Models',
  },
  {
    id: 's5',
    icon: 'ns-shape-16',
    title: 'Cloud Infrastructure & Platform Engineering',
    problem: 'Legacy infrastructure is expensive, insecure, and fails to scale with business demands.',
    solution: 'We modernize and automate cloud environments using containerization and infrastructure-as-code.',
    outcome: 'Deploy scalable, secure and reliable systems.',
    tech: 'AWS, Google Cloud, Azure, Docker, Kubernetes',
  },
  {
    id: 's6',
    icon: 'ns-shape-8',
    title: 'AI Strategy & Digital Transformation',
    problem: 'Organizations want to adopt AI but lack a clear roadmap, governance, and technical alignment.',
    solution: 'We provide AI readiness assessments, architecture reviews, and strategic consulting to ensure successful AI adoption.',
    outcome: 'Help organizations adopt AI successfully.',
    tech: 'Architecture Review, AI Governance, Technology Consulting',
  },
];

const CoreServices = () => {
  return (
    <section id="services" className="bg-white py-16 md:py-20 lg:py-[100px] dark:bg-[#0d0d1a]" aria-labelledby="core-services-heading">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[800px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Service Overview</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="core-services-heading">Comprehensive engineering capabilities</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[700px] text-secondary/70 dark:text-accent/70">
              We provide end-to-end consulting and engineering services, taking you from initial strategy to production-grade deployment.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <RevealAnimation key={service.id} delay={0.2 + (index % 2) * 0.1}>
              <div className="bg-background-3 dark:bg-background-6 flex h-full flex-col rounded-[20px] p-8 xl:p-10 border border-stroke-1/10 dark:border-white/5 transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-6 flex items-center gap-4 border-b border-stroke-1/10 pb-6 dark:border-white/10">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-black">
                    <span className={`${service.icon} text-secondary dark:text-accent text-[32px]`} />
                  </div>
                  <h3 className="text-heading-5">{service.title}</h3>
                </div>
                
                <div className="flex-grow space-y-5">
                  <div>
                    <h4 className="text-tagline-2 mb-1 font-semibold text-secondary dark:text-accent">Business Problem</h4>
                    <p className="text-secondary/70 dark:text-accent/70">{service.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-tagline-2 mb-1 font-semibold text-secondary dark:text-accent">RockScale Solution</h4>
                    <p className="text-secondary/70 dark:text-accent/70">{service.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-tagline-2 mb-1 font-semibold text-secondary dark:text-accent">Business Outcome</h4>
                    <div className="bg-ns-green/10 dark:bg-ns-green/20 rounded-lg p-3">
                      <p className="font-medium text-ns-green dark:text-ns-green">{service.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-stroke-1/10 dark:border-white/10">
                  <h4 className="text-tagline-2 mb-2 font-semibold text-secondary dark:text-accent">Technologies</h4>
                  <p className="text-tagline-1 text-secondary/60 dark:text-accent/60">{service.tech}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

CoreServices.displayName = 'CoreServices';
export default CoreServices;
