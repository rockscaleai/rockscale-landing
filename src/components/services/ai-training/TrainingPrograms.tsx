'use client';
import Link from 'next/link';
import RevealAnimation from '../../animation/RevealAnimation';
import { CheckIcon } from '@/icons';

const programs = [
  {
    title: 'AI Foundations for Business Teams',
    description: 'For non-technical employees and business professionals.',
    topics: [
      'AI fundamentals',
      'Generative AI',
      'Prompting',
      'AI productivity',
      'AI tools',
      'Responsible AI',
    ],
  },
  {
    title: 'AI Engineering for Technical Teams',
    description: 'For developers, engineers and technical teams.',
    topics: [
      'LLM applications',
      'AI APIs',
      'RAG',
      'AI agents',
      'Tool calling',
      'AI application architecture',
      'Evaluation',
      'Production AI',
    ],
  },
  {
    title: 'AI for Data & Analytics Teams',
    description: 'For analysts, data professionals and BI teams.',
    topics: [
      'AI-assisted analytics',
      'Data exploration',
      'AI-powered reporting',
      'Natural language interfaces',
      'Predictive analytics',
      'AI workflows',
    ],
  },
  {
    title: 'AI Leadership & Strategy',
    description: 'For executives, managers and technology leaders.',
    topics: [
      'AI opportunity discovery',
      'AI strategy',
      'AI adoption',
      'Build vs buy',
      'AI governance',
      'AI investment decisions',
      'Measuring AI ROI',
    ],
  },
];

const TrainingPrograms = () => {
  return (
    <section id="training-programs" className="py-16 md:py-20 lg:py-[100px]">
      <RevealAnimation delay={0.1}>
        <div className="mx-auto w-full max-w-[1440px] space-y-[70px] rounded-2xl px-5 py-[100px] md:px-6 lg:px-10 xl:px-16">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan">Training Programs</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2>Flexible training programs for every team.</h2>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-8">
            {programs.map((program, index) => (
              <div key={program.title} className="col-span-12 md:col-span-6 xl:col-span-3">
                <RevealAnimation delay={0.4 + index * 0.1}>
                  <div className="bg-background-3 dark:bg-background-7 flex flex-col space-y-8 rounded-[20px] px-6 py-8 h-full">
                    <div className='flex-grow'>
                      <h3 className="text-heading-5 font-normal">{program.title}</h3>
                      <p className="mt-3">{program.description}</p>
                    </div>
                    <ul className="flex-grow space-y-2">
                        {program.topics.map(topic => (
                            <li key={topic} className="flex items-center gap-2.5">
                                <span className="bg-secondary size-[19px] rounded-full flex items-center justify-center">
                                    <CheckIcon className="h-[12px] w-[12px] fill-white" />
                                </span>
                                <span className="text-tagline-2">{topic}</span>
                            </li>
                        ))}
                    </ul>
                    <Link
                      href="/contact-us"
                      className="btn btn-white hover:btn-primary dark:btn-white-dark btn-md w-full before:content-none">
                      Request a Program
                    </Link>
                  </div>
                </RevealAnimation>
              </div>
            ))}
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default TrainingPrograms;
