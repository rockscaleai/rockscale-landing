'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    id: '1',
    question: 'How quickly will someone respond to my enquiry?',
    answer: 'We respond to every serious business enquiry within one business day. For urgent projects, you can mention your timeline in the message and we will prioritize accordingly.',
  },
  {
    id: '2',
    question: 'Do you work with startups?',
    answer: 'Yes. We work with startups that have identified a clear AI use case and have the funding or runway to execute. We are selective — we want every engagement to succeed, so we have honest conversations about readiness early.',
  },
  {
    id: '3',
    question: 'Do you work with enterprise organizations?',
    answer: 'Absolutely. Enterprise programmes are a core part of our business. We are experienced with procurement processes, enterprise security requirements, compliance frameworks (GDPR, SOC 2, HIPAA-aligned), and working within large engineering organizations.',
  },
  {
    id: '4',
    question: 'Can you modernize existing systems?',
    answer: 'Yes — and this is some of our most impactful work. We specialize in migrating legacy infrastructure to modern cloud architectures and layering AI capabilities on top of existing systems without requiring a full rebuild.',
  },
  {
    id: '5',
    question: 'Do you offer ongoing support after delivery?',
    answer: 'Yes. We offer dedicated post-deployment support packages covering model monitoring, data drift detection, infrastructure scaling, and continuous optimization. Many clients retain us to manage ongoing improvement of their AI systems.',
  },
  {
    id: '6',
    question: 'Can you work with our internal engineering team?',
    answer: 'Yes. We frequently operate as an embedded technical partner alongside existing engineering teams — providing specialized AI, data, and cloud expertise rather than replacing your team. We adapt our engagement model to what works best for your organization.',
  },
  {
    id: '7',
    question: 'How long do projects usually take?',
    answer: 'Discovery and strategy: 2–4 weeks. Proof of concept: 4–8 weeks. Full production deployment: 3–6 months depending on scope and infrastructure maturity. We work in sprints with regular delivery checkpoints so you always have visibility.',
  },
];

const ContactFaq = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="contact-faq-heading">
      <div className="main-container">
        <div className="mx-auto mb-12 max-w-[750px] space-y-4 text-center md:mb-[60px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Frequently Asked Questions</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="contact-faq-heading">Questions we hear from every serious prospect</h2>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.3}>
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

ContactFaq.displayName = 'ContactFaq';
export default ContactFaq;
