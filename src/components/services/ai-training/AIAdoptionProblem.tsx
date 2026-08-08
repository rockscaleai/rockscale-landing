'use client';
import featureImgTwo from '@public/images/ns-img-81.png';
import featureImgTwoDark from '@public/images/ns-img-dark-55.png';
import Image from 'next/image';
import RevealAnimation from '../../animation/RevealAnimation';

const problems = [
  { id: 1, icon: 'ns-cross', label: 'Employees don’t know which AI tools to use' },
  { id: 2, icon: 'ns-cross', label: 'Teams use AI inconsistently' },
  { id: 3, icon: 'ns-cross', label: 'Employees don’t know how to write effective prompts' },
  { id: 4, icon: 'ns-cross', label: 'AI is being used for low-value tasks' },
  { id: 5, icon: 'ns-cross', label: 'Teams don’t understand AI limitations' },
  { id: 6, icon: 'ns-cross', label: 'Employees are unsure what data can be shared' },
  { id: 7, icon: 'ns-cross', label: 'Organizations struggle with adoption' },
  { id: 8, icon: 'ns-cross', label: 'Leadership lacks a clear AI strategy' },
];

const AIAdoptionProblem = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] dark:bg-[#0d0d1a]" aria-labelledby="ai-adoption-problem-heading">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-16 xl:gap-[80px]">
          {/* Left copy */}
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.2}>
              <h2 id="ai-adoption-problem-heading" className="mb-6">
              AI Tools Don’t Create Value. AI-Enabled Teams Do.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mb-10 text-secondary/70 dark:text-accent/70">
              Simply giving employees access to AI tools is not enough. Without a clear strategy and proper training, organizations often face inconsistent usage, low-value applications, and security risks, failing to realize the true potential of AI.
              </p>
            </RevealAnimation>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((item, idx) => (
                <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                  <li className="flex items-center gap-3">
                    <span className={`${item.icon} text-red-500 text-[24px]`} />
                    <strong className="text-tagline-1 font-medium text-secondary dark:text-accent">
                      {item.label}
                    </strong>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          
          {/* Right visual */}
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.4} direction="up" offset={80}>
              <figure className="mx-auto w-full max-w-[500px] overflow-hidden rounded-[20px] lg:mx-0 lg:max-w-[600px]">
                <Image
                  src={featureImgTwo}
                  alt="Enterprise AI infrastructure"
                  className="h-full w-full object-cover dark:hidden"
                />
                <Image
                  src={featureImgTwoDark}
                  alt="Enterprise AI infrastructure"
                  className="hidden h-full w-full object-cover dark:block"
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

AIAdoptionProblem.displayName = 'AIAdoptionProblem';
export default AIAdoptionProblem;
