'use client';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faqItems = [
  {
    id: '1',
    question: 'How long does a project take?',
    answer:
      'Timelines depend on complexity. An initial AI Strategy Workshop takes 2-4 weeks. A proof of concept (POC) can be delivered in 4-8 weeks. Full production deployments, including data pipelines and infrastructure, typically take 3-6 months. We work in agile sprints to ensure continuous delivery of value.',
  },
  {
    id: '2',
    question: 'Do you work with existing systems?',
    answer:
      'Yes. A core part of our engineering practice is enterprise integration. We build AI and data solutions that securely interface with your legacy systems, existing databases, and third-party APIs (Salesforce, SAP, Snowflake, etc.) to prevent data silos.',
  },
  {
    id: '3',
    question: 'Can you build custom AI solutions?',
    answer:
      'Absolutely. While we leverage powerful foundational models (like GPT-4 or Claude 3) and accelerators where appropriate, our primary focus is building bespoke AI applications, agents, and data pipelines uniquely tailored to your business operations and proprietary data.',
  },
  {
    id: '4',
    question: 'Do you offer ongoing support?',
    answer:
      'Yes. Deploying a model is only the beginning. Through our Managed AI Services and Dedicated Team models, we provide ongoing MLOps, model fine-tuning, infrastructure scaling, and continuous performance monitoring to ensure your systems remain accurate and reliable.',
  },
  {
    id: '5',
    question: 'How do you ensure security?',
    answer:
      'Enterprise security is non-negotiable. We deploy solutions within your secure cloud environments (VPCs), ensuring your data never leaves your infrastructure and is not used to train public models. We implement strict RBAC, data encryption (at rest and in transit), and follow compliance standards like SOC 2 and GDPR.',
  },
  {
    id: '6',
    question: 'Can you help with AI strategy?',
    answer:
      'Yes. Many organizations know they need AI but aren’t sure where to start. Our consulting engagements often begin with an AI Readiness Assessment, helping leadership identify high-ROI use cases, assess data maturity, and build a phased technical roadmap before writing any code.',
  },
];

const ServiceFaq = () => {
  return (
    <section
      className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]"
      aria-labelledby="faq-heading">
      <div className="main-container">
        {/* Heading */}
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
                Straightforward answers to the questions we hear most from technical and executive
                stakeholders evaluating AI partners.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* Accordion */}
        <RevealAnimation delay={0.4}>
          <Accordion
            className="mx-auto w-full max-w-[850px] space-y-4"
            defaultValue="1"
            enableScrollAnimation={true}
            animationDelay={0.1}>
            {faqItems.map((item) => (
              <AccordionItem
                className="dark:bg-background-6 rounded-[20px] bg-white px-6 sm:px-8 border border-stroke-1/10 dark:border-white/5"
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

ServiceFaq.displayName = 'ServiceFaq';
export default ServiceFaq;
