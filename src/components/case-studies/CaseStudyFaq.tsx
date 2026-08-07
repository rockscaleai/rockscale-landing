'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    id: '1',
    question: 'Can RockScale work with existing systems?',
    answer: 'Absolutely. We specialize in modernizing legacy infrastructure and integrating AI capabilities into existing enterprise systems without disrupting ongoing operations. We design our architectures to augment rather than completely replace your current technology stack whenever possible.',
  },
  {
    id: '2',
    question: 'How long do projects typically take?',
    answer: 'Timelines vary by complexity. A strategic roadmap or discovery phase typically takes 2-4 weeks. A proof of concept (PoC) can be delivered in 4-8 weeks. Full-scale production deployments usually range from 3 to 6 months. We prioritize iterative delivery so you see value quickly.',
  },
  {
    id: '3',
    question: 'Do you provide post-launch support?',
    answer: 'Yes, we offer ongoing support and optimization. AI systems require continuous monitoring for data drift and performance degradation. We provide Service Level Agreements (SLAs) for maintenance, model tuning, and infrastructure scaling to ensure long-term success.',
  },
  {
    id: '4',
    question: 'Can you modernize legacy infrastructure?',
    answer: 'Yes. A significant portion of our work involves migrating legacy on-premise systems to modern cloud architectures (AWS, GCP, Azure), which is often a prerequisite for successfully deploying scalable AI and data engineering solutions.',
  },
  {
    id: '5',
    question: 'How do you approach AI strategy?',
    answer: 'We focus on business outcomes, not hype. Our strategy engagements start by identifying high-value use cases that align with your operational goals. We then evaluate data readiness, technical feasibility, and ROI before writing a single line of code.',
  },
];

const CaseStudyFaq = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] dark:bg-black" aria-labelledby="faq-heading">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[750px] space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">FAQ</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 id="faq-heading">Common questions</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
                What you need to know about partnering with RockScale for your next major initiative.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.4}>
          <Accordion
            className="mx-auto w-full max-w-[850px] space-y-4"
            defaultValue="1"
            enableScrollAnimation={true}
            animationDelay={0.1}>
            {faqItems.map((item) => (
              <AccordionItem
                className="dark:bg-background-6 rounded-[20px] bg-background-3 px-6 sm:px-8 border border-stroke-1/10 dark:border-white/5"
                key={item.id}
                value={item.id}>
                <AccordionTrigger
                  titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                  className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-7 sm:pb-7"
                  value={item.id}
                  iconType="arrow">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent value={item.id}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealAnimation>
      </div>
    </section>
  );
};

CaseStudyFaq.displayName = 'CaseStudyFaq';
export default CaseStudyFaq;
