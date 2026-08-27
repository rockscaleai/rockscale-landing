'use client';
import { useState } from 'react';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

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
  const [openId, setOpenId] = useState<string | null>('1');

  const toggle = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section className="bg-white py-20 md:py-28 lg:py-32" aria-labelledby="faq-heading">
      <div className="main-container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column (Sticky Header) */}
          <div className="lg:col-span-4 xl:col-span-5">
            <div className="sticky top-32">
              <RevealAnimation delay={0.1}>
                <div className="mb-6">
                  <span className="badge badge-green-v2">FAQ</span>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 id="faq-heading" className="mb-6 text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[52px] lg:leading-[1.1]">
                  Questions enterprise teams ask us
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mb-10 text-lg leading-relaxed text-secondary/70">
                  Straightforward answers to the technical, operational, and strategic questions we hear most from engineering leaders and executives evaluating AI partners.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="flex flex-col items-start gap-4 sm:flex-row">
                  <Link
                    href="/contact-us"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-secondary px-8 py-3.5 font-medium text-white transition-all duration-300 hover:bg-[#25CA22] hover:shadow-[0_0_20px_rgba(37,202,34,0.3)]"
                  >
                    <span>Talk to our experts</span>
                    <svg
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* Right Column (Accordion) */}
          <div className="lg:col-span-8 xl:col-span-7">
            <RevealAnimation delay={0.3}>
              <div className="divide-y divide-stroke-3 border-y border-stroke-3">
                {faqItems.map((item) => {
                  const isOpen = openId === item.id;
                  
                  return (
                    <div key={item.id} className="py-6 sm:py-8">
                      <button
                        onClick={() => toggle(item.id)}
                        className="group flex w-full items-center justify-between text-left transition-colors"
                        aria-expanded={isOpen}
                      >
                        <h3 className={`text-xl font-medium tracking-tight transition-colors duration-300 md:text-[22px] lg:pr-8 ${isOpen ? 'text-[#25CA22]' : 'text-secondary group-hover:text-secondary/80'}`}>
                          {item.question}
                        </h3>
                        <div className={`ml-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'border-[#25CA22] bg-[#25CA22] text-white shadow-md' : 'border-stroke-3 bg-white text-secondary group-hover:bg-[#f4f5f8]'}`}>
                          <svg
                            className={`h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      
                      <div
                        className={`grid transition-all duration-500 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pt-5 text-lg leading-relaxed text-secondary/70 lg:pr-14">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </RevealAnimation>
          </div>
          
        </div>
      </div>
    </section>
  );
};

Faq.displayName = 'Faq';
export default Faq;
