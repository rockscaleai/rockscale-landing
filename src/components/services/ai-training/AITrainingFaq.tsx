'use client';
import faqData from '@/data/json/faq/ai-training-faq.json';
import RevealAnimation from '../../animation/RevealAnimation';
import Accordion from '../../ui/accordion/Accordion';
import AccordionContent from '../../ui/accordion/AccordionContent';
import AccordionItem from '../../ui/accordion/AccordionItem';
import AccordionTrigger from '../../ui/accordion/AccordionTrigger';

const AITrainingFaq = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="faq-heading">
      <div className="main-container">
        <div className="mx-auto mb-10 max-w-[750px] space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">FAQs</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 id="faq-heading" className="mb-3">Frequently Asked Questions</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="text-secondary/60 mx-auto max-w-[600px]">
            Have questions? We have answers. If you don’t see what you’re looking for, feel free to contact us.
            </p>
          </RevealAnimation>
        </div>
        <div className="mx-auto max-w-[800px]">
          <Accordion defaultValue="faq-1" className="space-y-6">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`faq-${faq.id}`}
                className="bg-background-3 dark:bg-background-7 rounded-lg px-6 py-4"
              >
                <AccordionTrigger
                  value={`faq-${faq.id}`}
                  className="flex w-full items-center justify-between text-left"
                  iconType="plus"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent value={`faq-${faq.id}`}>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AITrainingFaq;
