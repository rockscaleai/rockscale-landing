'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    id: '1',
    question: 'Is Qorebit really OpenAI compatible?',
    answer: 'Yes. Qorebit exposes a fully OpenAI-compatible API. If you use the official OpenAI Node.js or Python SDK today, you can switch to Qorebit by changing just the base URL and API key — nothing else changes.',
  },
  {
    id: '2',
    question: 'Which AI providers are supported?',
    answer: 'Qorebit supports all major frontier model providers including OpenAI (GPT-4o, o3), Anthropic (Claude 3.5), Google (Gemini 2.0), Mistral, DeepSeek, and Meta (Llama). We continuously add new providers as they become available.',
  },
  {
    id: '3',
    question: 'How does billing work?',
    answer: 'Qorebit uses a unified credit wallet system. You pre-load credits once, and they are consumed across whichever models and providers you use. There are no separate subscriptions or invoices from individual AI providers — just one simple bill from Qorebit.',
  },
  {
    id: '4',
    question: 'Can I use my own API keys?',
    answer: 'Yes. Enterprise workspaces can optionally bring your own provider API keys (BYOK) for any supported provider. This allows you to leverage your existing provider relationships and volume discounts while still using Qorebit\'s gateway, routing, and management features.',
  },
  {
    id: '5',
    question: 'How secure is Qorebit?',
    answer: 'Security is foundational. API keys are encrypted at rest, all traffic uses TLS 1.3, and we support private cloud deployments for enterprise customers. We never log your prompt data without explicit opt-in, and our infrastructure is designed to meet SOC 2 requirements.',
  },
  {
    id: '6',
    question: 'What is the typical integration time?',
    answer: 'Most developers make their first successful API call within 5 minutes. Full production integration, including workspace setup, team management, and usage monitoring, typically takes less than an hour.',
  },
];

const QorebitFaq = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="qorebit-faq-heading">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[750px] space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">FAQ</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 id="qorebit-faq-heading">Questions about Qorebit</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
                Everything developers and technical leaders want to know before integrating.
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

QorebitFaq.displayName = 'QorebitFaq';
export default QorebitFaq;
