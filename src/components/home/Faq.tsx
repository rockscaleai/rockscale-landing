import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import LinkButton from '../ui/button/LinkButton';

const faqItems = [
  {
    id: '1',
    question: 'What types of AI and LLM integrations do you specialize in?',
    answer:
      'We build custom LLM applications, retrieval-augmented generation (RAG) systems, AI copilots, document intelligence pipelines, and multi-agent frameworks. We work with leading model providers including OpenAI, Anthropic, Google, and open-source models like LLaMA and Mistral — choosing the right model for your budget, latency, and compliance requirements.',
  },
  {
    id: '2',
    question: 'How do you ensure enterprise data security and compliance?',
    answer:
      'Data security is built into our engineering process from day one. We design all systems with role-based access controls, encryption in transit and at rest, private VPC deployments, and audit logging. We also support GDPR, SOC 2, HIPAA-aligned architectures depending on your sector, and regularly review model behaviour for bias and alignment.',
  },
  {
    id: '3',
    question: 'What data platforms and engineering tools do you work with?',
    answer:
      'Our data engineering practice is platform-agnostic. We regularly work with Snowflake, BigQuery, Databricks, AWS Redshift, and Azure Synapse for warehousing; dbt, Airbyte, Fivetran, and Apache Spark for transformation and pipelines; and Looker, Power BI, and Metabase for business intelligence. We architect around what best fits your data volume, velocity, and team.',
  },
  {
    id: '4',
    question: 'How long does a typical enterprise AI deployment take?',
    answer:
      'Our discovery and strategy phase typically takes 2–3 weeks. A focused proof-of-concept can be delivered within 4–6 weeks. Full production deployments, including data pipeline buildout and MLOps infrastructure, generally range from 3 to 6 months depending on scope and existing infrastructure maturity. We work in sprints with regular delivery checkpoints.',
  },
  {
    id: '5',
    question: 'Do you offer post-deployment support and model optimization?',
    answer:
      'Yes. We offer dedicated post-deployment support packages covering model performance monitoring, data drift detection, infrastructure scaling, and ongoing optimization. Many clients engage us on a retained basis to manage continuous improvement of their AI systems as their business data and requirements evolve.',
  },
  {
    id: '6',
    question: 'What does working with RockScale as a consulting partner look like?',
    answer:
      'We act as an embedded technical partner, not a vendor. Our teams integrate closely with your engineers, product managers, and leadership to ensure AI initiatives are business-driven and technically sound. We begin every engagement with a discovery call to align on goals, timelines, and success metrics — then deliver transparently against those commitments.',
  },
];

const Faq = () => {
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
              <h2 id="faq-heading">Questions enterprise teams ask us</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[600px]">
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
                className="dark:bg-background-6 rounded-[20px] bg-white px-6 sm:px-8"
                key={item.id}
                value={item.id}>
                <AccordionTrigger
                  titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                  className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-7 sm:pb-7"
                  value={item.id}
                  iconType="arrow">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent value={item.id}>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealAnimation>

        {/* Bottom CTA */}
        <RevealAnimation delay={0.6}>
          <div className="mt-14 text-center">
            <p className="text-secondary/60 dark:text-accent/60 mb-5">Still have questions?</p>
            <LinkButton
              href="/contact-us"
              className="btn btn-secondary hover:btn-primary btn-md mx-auto w-[85%] md:w-auto">
              Talk to our team
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

Faq.displayName = 'Faq';
export default Faq;
