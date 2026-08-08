'use client';
import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faqItems = [
  {
    id: "1",
    question: "Where do we start if we're new to AI?",
    answer:
      "The best starting point is our AI Strategy & Roadmap service. We run a structured AI readiness assessment to understand your business objectives, technology landscape and data maturity. From there, we identify the highest-value AI opportunities and design a phased roadmap — so you know exactly what to build, what to prioritize, and how much it will cost before writing a single line of code.",
  },
  {
    id: "2",
    question: "What kinds of AI software do you build?",
    answer:
      "We build production-ready AI applications, agents, copilots, LLM applications, RAG systems, document intelligence tools, AI-powered SaaS products, internal AI tools, conversational interfaces and workflow automation systems. Our focus is always on solving real business problems — not building technology for its own sake.",
  },
  {
    id: "3",
    question: "Do you work with our existing data and systems?",
    answer:
      "Yes. A core part of our Data Engineering practice is integrating with your existing systems — whether that is a legacy database, Salesforce, SAP, a data warehouse or a third-party API. We build pipelines that connect, structure and transform your existing data into reliable, analytics-ready platforms without disrupting your operations.",
  },
  {
    id: "4",
    question: "What is a Forward Deployed Engineer and how is it different from standard consulting?",
    answer:
      "A Forward Deployed Engineer is not an external consultant who delivers a report. They work directly alongside your product, engineering and operations teams — inside your environment — to understand the business problem, build the solution and take it into production. They act as an extension of your team, not a vendor. This model is designed for organizations that need deep AI and engineering expertise without building an entire internal team.",
  },
  {
    id: "5",
    question: "How long does a typical project take?",
    answer:
      "An AI Strategy Workshop takes 2–4 weeks. A proof of concept typically takes 4–8 weeks. A full production deployment — including data pipelines, AI systems and infrastructure — typically takes 3–6 months. Forward Deployed Engineers can be engaged on a rolling monthly basis. We work in agile sprints to ensure continuous value delivery throughout.",
  },
  {
    id: "6",
    question: "How do you ensure our data stays secure?",
    answer:
      "Enterprise security is non-negotiable. We deploy all solutions within your secure cloud environment so your data never leaves your infrastructure and is never used to train public models. We implement strict RBAC, data encryption at rest and in transit, and follow compliance standards including SOC 2 and GDPR. Every engagement includes a security architecture review.",
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
              <h2 id="faq-heading">Questions we hear from technical and executive teams</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
                Straightforward answers about how RockScale works, what we build, and how we engage with clients across the AI implementation journey.
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
