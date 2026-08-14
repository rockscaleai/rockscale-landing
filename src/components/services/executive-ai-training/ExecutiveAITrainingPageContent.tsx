'use client';

import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import ExecHero from '@/components/services/executive-ai-training/ExecHero';

const sectionLabelClass =
  'mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary';
const sectionTitleClass =
  'text-3xl font-bold tracking-tight text-secondary dark:text-white md:text-4xl lg:text-[42px]';
const sectionTextClass = 'text-base leading-8 text-secondary/70 dark:text-white/70 md:text-lg';

const processSteps = [
  {
    icon: 'ns-search-1',
    title: 'Discovery & Assessment',
    description:
      'We start by understanding your business goals, challenges, and current AI capabilities. This phase includes stakeholder interviews, technical assessments, and a review of your existing data infrastructure.',
  },
  {
    icon: 'ns-brain-1',
    title: 'Strategy & Roadmap',
    description:
      "Based on the discovery phase, we'll develop a tailored AI strategy and roadmap. This includes identifying high-impact AI use cases, defining key metrics, and creating a long-term plan for AI integration.",
  },
  {
    icon: 'ns-grid-2',
    title: 'Solution Design & Prototyping',
    description:
      "We'll design and prototype AI solutions for the prioritized use cases. This involves creating data models, developing algorithms, and building interactive prototypes to validate the solution's effectiveness.",
  },
  {
    icon: 'ns-rocket-1',
    title: 'Implementation & Integration',
    description:
      "We'll implement the AI solution and integrate it with your existing systems. Our team will handle everything from data engineering and model training to API development and deployment.",
  },
  {
    icon: 'ns-users-1',
    title: 'Training & Enablement',
    description:
      "We'll provide training to your team to ensure they can effectively use and manage the new AI solution. We'll also help you establish an internal AI center of excellence to drive continuous innovation.",
  },
  {
    icon: 'ns-settings-6',
    title: 'Continuous Improvement',
    description:
      'We monitor the performance of the AI solution and provide ongoing support and optimization to ensure it continues to deliver value.',
  },
];

const OurProcess = () => (
    <section className="bg-gray-50 py-20 dark:bg-background-8 md:py-28">
    <div className="main-container">
      <div className="mb-12 text-center">
        <span className={sectionLabelClass}>Our Process</span>
        <h2 className={`${sectionTitleClass} mx-auto mt-4 max-w-3xl`}>
          Your AI Transformation Journey
        </h2>
        <p className={`${sectionTextClass} mx-auto mt-6 max-w-3xl`}>
          We follow a structured, collaborative process to ensure your AI initiatives deliver
          measurable business value.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step) => (
          <div
            key={step.title}
            className="rounded-xl border border-primary/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-background-7"
          >
            <div className="flex-grow">
              <span className={`text-4xl text-primary ${step.icon}`} />
              <h3 className="mt-5 text-xl font-bold text-secondary dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-base text-secondary/70 dark:text-white/70">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ExecutiveAITrainingPageContent = () => (
  <div className="bg-background-2 dark:bg-background-7">
    <Navbar />
    <main>
      <ExecHero />
      <OurProcess />
    </main>
    <Footer />
  </div>
);

export default ExecutiveAITrainingPageContent;
