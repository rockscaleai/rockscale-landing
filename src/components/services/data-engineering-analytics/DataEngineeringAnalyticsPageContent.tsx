'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import Accordion from '@/components/ui/accordion/Accordion';
import AccordionContent from '@/components/ui/accordion/AccordionContent';
import AccordionItem from '@/components/ui/accordion/AccordionItem';
import AccordionTrigger from '@/components/ui/accordion/AccordionTrigger';
import LinkButton from '@/components/ui/button/LinkButton';
import Image from 'next/image';
import { Fragment } from 'react';

// Data for various sections
const dataProblemItems = [
  'Data lives across disconnected systems.',
  'Teams rely on spreadsheets and manual reporting.',
  'Important information is difficult to access.',
  'Data quality is inconsistent.',
  'Reporting takes too long.',
  'Different teams work with different versions of the truth.',
  'Legacy systems make integration difficult.',
  'AI initiatives fail because the underlying data is unreliable.',
];

const whatWeDoItems = [
  {
    title: 'Data Pipelines',
    description: 'Build reliable pipelines that move data between business systems and analytical platforms.',
  },
  {
    title: 'Data Integration',
    description: 'Connect databases, SaaS platforms, APIs and legacy systems.',
  },
  {
    title: 'Data Warehousing',
    description: 'Design scalable warehouses that provide a reliable foundation for analytics.',
  },
  {
    title: 'Data Lakes',
    description: 'Build flexible data platforms for structured and unstructured information.',
  },
  {
    title: 'Data Modeling',
    description: 'Transform raw data into clean, understandable and analytics-ready models.',
  },
  {
    title: 'Analytics',
    description: 'Turn business data into useful insights, reports and decision-support systems.',
  },
  {
    title: 'Data Quality',
    description: 'Monitor and improve the accuracy, consistency and reliability of data.',
  },
  {
    title: 'Data Platforms',
    description: 'Modernize fragmented data infrastructure into scalable platforms.',
  },
];

const dataFlowSteps = [
  {
    title: 'Business Systems',
    items: ['CRM', 'ERP', 'Payments', 'SaaS', 'Applications', 'APIs', 'Databases'],
  },
  {
    title: 'Data Integration',
    items: ['ETL / ELT', 'APIs', 'Streaming', 'Batch Pipelines'],
  },
  {
    title: 'Data Platform',
    items: ['Warehouse', 'Lake', 'Lakehouse'],
  },
  {
    title: 'Analytics',
    items: ['BI', 'Dashboards', 'Reporting', 'Metrics'],
  },
  {
    title: 'AI',
    items: ['RAG', 'Agents', 'Prediction', 'Automation', 'Intelligence'],
  },
];

const dataEngineeringFeatures = [
  'Reliable',
  'Scalable',
  'Maintainable',
  'Observable',
  'Secure',
  'Analytics-ready',
  'AI-ready',
];

const dataEngineeringCapabilities = [
  'ETL / ELT',
  'Data pipelines',
  'API integrations',
  'Data transformation',
  'Data modeling',
  'Data orchestration',
  'Data warehouses',
  'Data lakes',
  'Data quality',
  'Data monitoring',
];

const analyticsCapabilities = [
  'Business intelligence',
  'Executive dashboards',
  'Operational reporting',
  'KPI systems',
  'Customer analytics',
  'Sales analytics',
  'Product analytics',
  'Financial analytics',
  'Predictive analytics',
  'Automated reporting',
];

const aiReadyDataItems = [
  'RAG systems',
  'AI agents',
  'AI assistants',
  'Predictive models',
  'Recommendation systems',
  'Natural language analytics',
  'Automated decision systems',
];

const modernDataStack = [
  {
    category: 'Cloud',
    items: ['AWS', 'Azure', 'Google Cloud'],
  },
  {
    category: 'Warehousing',
    items: ['Snowflake', 'BigQuery', 'PostgreSQL'],
  },
  {
    category: 'Transformation',
    items: ['dbt'],
  },
  {
    category: 'Orchestration',
    items: ['Airflow'],
  },
  {
    category: 'Integration',
    items: ['Fivetran', 'APIs', 'Custom pipelines'],
  },
  {
    category: 'Analytics',
    items: ['Power BI', 'Tableau', 'Looker'],
  },
  {
    category: 'Data Quality',
    items: ['Great Expectations', 'Soda'],
  },
];

const dataQualityAspects = [
  'Completeness',
  'Accuracy',
  'Consistency',
  'Freshness',
  'Validation',
  'Monitoring',
  'Lineage',
];

const dataModernizationBefore = [
  'Disconnected systems',
  'Manual reporting',
  'Data silos',
  'Slow decisions',
];

const dataModernizationAfter = [
  'Connected data',
  'Automated pipelines',
  'Trusted metrics',
  'Faster insights',
  'AI-ready infrastructure',
];

const useCases = [
  {
    title: 'Executive Reporting',
    description: 'Create a reliable view of company performance.',
  },
  {
    title: 'Sales Analytics',
    description: 'Understand pipeline, conversion and customer performance.',
  },
  {
    title: 'Customer Analytics',
    description: 'Understand customer behavior, retention and segmentation.',
  },
  {
    title: 'Financial Analytics',
    description: 'Improve visibility into revenue, costs and financial performance.',
  },
  {
    title: 'Operational Analytics',
    description: 'Monitor processes, efficiency and operational performance.',
  },
  {
    title: 'Product Analytics',
    description: 'Understand how customers use digital products.',
  },
  {
    title: 'AI Data Foundation',
    description: 'Prepare enterprise data for AI applications and agents.',
  },
];

const deliveryProcessSteps = [
  { id: '01', title: 'Assess', description: 'Understand your systems, data sources and business goals.' },
  { id: '02', title: 'Connect', description: 'Integrate the systems that contain your important business data.' },
  { id: '03', title: 'Engineer', description: 'Build pipelines, transformations and data models.' },
  { id: '04', title: 'Organize', description: 'Create a reliable warehouse, lake or data platform.' },
  { id: '05', title: 'Analyze', description: 'Build dashboards, reporting and analytics workflows.' },
  { id: '06', title: 'Optimize', description: 'Improve quality, performance, reliability and AI readiness.' },
];

const outcomes = [
  'Trusted data',
  'Faster reporting',
  'Better decisions',
  'Less manual work',
  'Connected systems',
  'Scalable infrastructure',
  'Improved data quality',
  'AI-ready data',
];

const whyRockScaleItems = [
  {
    title: 'Data + AI',
    description: 'We understand how data infrastructure supports modern AI applications.',
  },
  {
    title: 'Engineering First',
    description: 'We build real production data systems rather than simply producing reports.',
  },
  {
    title: 'End-to-End',
    description: 'Integration, engineering, analytics and AI readiness under one partner.',
  },
  {
    title: 'Cloud Native',
    description: 'Build modern infrastructure that can scale with the organization.',
  },
  {
    title: 'Business Focused',
    description: 'Connect technical data work to real business outcomes.',
  },
  {
    title: 'Practical Modernization',
    description: 'Improve existing systems without forcing unnecessary technology replacements.',
  },
];

const relatedServices = [
  {
    title: 'AI Strategy',
    description: 'Define your AI vision and roadmap.',
    href: '/services#strategy',
  },
  {
    title: 'Data Engineering',
    description: 'Build a solid data foundation.',
    href: '/services/data-engineering-analytics', // Current page, but linking for consistency
  },
  {
    title: 'AI-Powered Software',
    description: 'Develop intelligent applications and agents.',
    href: '/services/ai-powered-software-development',
  },
  {
    title: 'Forward Deployed Engineering',
    description: 'Embed RockScale engineers with your team.',
    href: '/services/forward-deployed-engineer',
  },
];

const faqItems = [
  {
    id: 'data-faq-1',
    question: 'What is data engineering?',
    answer:
      'Data engineering involves designing, building, and maintaining the infrastructure and systems for collecting, storing, processing, and analyzing large volumes of data. It ensures data is accessible, reliable, and ready for use by analytics and AI applications.',
  },
  {
    id: 'data-faq-2',
    question: 'What types of data systems can RockScale integrate?',
    answer:
      'We integrate a wide range of systems including relational databases (e.g., PostgreSQL, MySQL), NoSQL databases, data warehouses (Snowflake, BigQuery), data lakes, SaaS applications (CRM, ERP), custom APIs, and legacy systems.',
  },
  {
    id: 'data-faq-3',
    question: 'Can you work with our existing databases?',
    answer:
      'Absolutely. We specialize in connecting to and working with your existing data infrastructure, whether it\'s on-premise or cloud-based, to leverage your current investments.',
  },
  {
    id: 'data-faq-4',
    question: 'Can you modernize legacy data infrastructure?',
    answer:
      'Yes, we help companies migrate from outdated systems to modern cloud-based data platforms, improving scalability, performance, and maintainability without disrupting existing operations.',
  },
  {
    id: 'data-faq-5',
    question: 'Can you build data warehouses?',
    answer:
      'We design and build robust data warehouses tailored to your business needs, providing a centralized and structured repository for all your critical business data, optimized for analytics.',
  },
  {
    id: 'data-faq-6',
    question: 'Can you build data pipelines?',
    answer:
      'We construct automated and reliable data pipelines (ETL/ELT) that ingest, transform, and load data from various sources into your data platform, ensuring timely and accurate data flow.',
  },
  {
    id: 'data-faq-7',
    question: 'Can you help with Power BI or other BI platforms?',
    answer:
      'While we focus on building the underlying data foundation, we also design and implement dashboards and reports using popular BI tools like Power BI, Tableau, and Looker to turn your data into actionable insights.',
  },
  {
    id: 'data-faq-8',
    question: 'Can you improve our data quality?',
    answer:
      'We implement data quality frameworks, monitoring tools, and validation rules to ensure your data is complete, accurate, consistent, and fresh, leading to more reliable decisions.',
  },
  {
    id: 'data-faq-9',
    question: 'Can you prepare our data for AI?',
    answer:
      'Preparing data for AI is a core competency. We structure, clean, and optimize your data for AI applications, RAG systems, and machine learning models, ensuring your AI initiatives have a strong foundation.',
  },
  {
    id: 'data-faq-10',
    question: 'Can you work with our existing data team?',
    answer:
      'We frequently collaborate with internal data teams, augmenting their capabilities, sharing our expertise, and ensuring a smooth handover of new systems and processes.',
  },
  {
    id: 'data-faq-11',
    question: 'How long does a data modernization project take?',
    answer:
      'Project timelines vary based on scope and complexity. We work in agile sprints, providing continuous updates and delivering tangible results incrementally, typically ranging from a few weeks to several months for comprehensive modernizations.',
  },
];

const DataEngineeringAnalyticsPageContent = () => {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative z-0 overflow-hidden bg-[url('/images/ns-img-171.png')] bg-cover bg-top bg-no-repeat pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-52 lg:pb-[120px] xl:pt-[220px] xl:pb-[140px]"
        aria-labelledby="data-hero-heading"
      >
        <RevealAnimation delay={0.1} direction="right" offset={200}>
          <div className="pointer-events-none absolute top-[-10%] right-[-15%] -z-10 h-[600px] w-[600px] select-none rounded-full bg-[#7E57FD]/20 blur-[120px]" />
        </RevealAnimation>

        <div className="main-container relative z-10">
          <div className="mx-auto max-w-[980px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-6 inline-block">Data Engineering & Analytics</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 id="data-hero-heading" className="mb-6">
                Build a Data Foundation for What’s Next
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mx-auto mb-10 max-w-[760px] text-lg leading-relaxed">
                RockScale helps businesses connect, structure and transform their data into reliable systems for
                analytics, automation and AI.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <LinkButton href="/contact-us" className="btn btn-primary btn-md hover:btn-secondary w-[85%] sm:w-auto">
                  Modernize Your Data
                </LinkButton>
                <LinkButton href="/contact-us" className="btn btn-secondary btn-md hover:btn-primary w-[85%] sm:w-auto">
                  Talk to Our Team
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Data Problem Section */}
      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="data-problem-heading">
        <div className="main-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-outline-primary">The Challenge</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 id="data-problem-heading">Your Data Should Work Together</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary/70 dark:text-accent/70">
                  Many businesses struggle with fragmented, inaccessible, and unreliable data. This prevents teams
                  from making informed decisions and cripples AI initiatives.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="text-secondary/70 dark:text-accent/70">
                  RockScale helps organizations create a connected and trustworthy data foundation.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.5}>
              <div className="grid gap-4 rounded-[24px] border border-stroke-1/10 bg-background-3 p-6 dark:bg-background-7 md:p-8">
                {dataProblemItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 text-primary-500"
                    >
                      <path
                        d="M7.49935 14.5828L3.20703 10.2905L4.14935 9.34814L7.49935 12.6981L15.8507 4.3468L16.793 5.28912L7.49935 14.5828Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p className="text-secondary dark:text-accent">{item}</p>
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="what-we-do-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Our Capabilities</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="what-we-do-heading" className="mt-5">
                Comprehensive Data Engineering & Analytics Services
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whatWeDoItems.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.15 + index * 0.05}>
                <div className="dark:bg-background-6 h-full rounded-[22px] border border-stroke-1/10 bg-white p-6">
                  <h3 className="mb-3 text-heading-6">{item.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">{item.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Data Flow Section */}
      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="data-flow-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-outline-primary">Our Process</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="data-flow-heading" className="mt-5">
                From Fragmented Data to Actionable Intelligence
              </h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.3}>
            <div className="relative mx-auto max-w-[1000px]">
              <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-stroke-1/30 dark:bg-white/10 hidden md:block" />
              <div className="grid md:grid-cols-5 gap-8 md:gap-4 lg:gap-8">
                {dataFlowSteps.map((step, stepIndex) => (
                  <Fragment key={step.title}>
                    <div className="flex flex-col items-center col-span-full md:col-span-1">
                      <div className="dark:bg-background-6 rounded-[22px] border border-stroke-1/10 bg-white p-6 text-center h-full flex flex-col justify-center w-full">
                        <h3 className="mb-3 text-heading-6">{step.title}</h3>
                        <ul className="text-secondary/70 dark:text-accent/70 space-y-1 text-sm">
                          {step.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      {stepIndex < dataFlowSteps.length - 1 && (
                        <div className="py-4 md:py-8">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-primary-500 transform rotate-90 md:rotate-0"
                          >
                            <path d="M12 2L12 22M12 22L17 17M12 22L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Data Engineering Section */}
      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="data-engineering-heading">
        <div className="main-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">Engineering Focus</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 id="data-engineering-heading">Build Data Systems You Can Trust</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary/70 dark:text-accent/70">
                  RockScale designs, builds, and maintains robust data infrastructure that transforms raw data into
                  a trusted asset for your business. Our systems are built to be:
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {dataEngineeringFeatures.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0 text-primary-500"
                      >
                        <path
                          d="M7.49935 14.5828L3.20703 10.2905L4.14935 9.34814L7.49935 12.6981L15.8507 4.3468L16.793 5.28912L7.49935 14.5828Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="text-secondary dark:text-accent">{item}</p>
                    </div>
                  ))}
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <p className="text-secondary/70 dark:text-accent/70 mt-4">
                  Our capabilities cover the entire data lifecycle:
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <div className="flex flex-wrap gap-3">
                  {dataEngineeringCapabilities.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-stroke-1/20 bg-white px-4 py-2 text-sm text-secondary dark:border-white/10 dark:bg-background-6 dark:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.7}>
              <Image
                src="/images/ns-img-379.png" // Placeholder image
                alt="Data Engineering"
                width={800}
                height={600}
                className="rounded-[24px] shadow-lg"
              />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="analytics-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-outline-primary">Actionable Insights</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="analytics-heading" className="mt-5">
                From Data to Better Decisions
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mt-4">
                We help teams move beyond simply collecting data to actively using it to drive business outcomes.
                Our analytics solutions provide clear, reliable insights to empower every decision.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {analyticsCapabilities.map((item, index) => (
              <RevealAnimation key={item} delay={0.15 + index * 0.05}>
                <div className="dark:bg-background-6 h-full rounded-[22px] border border-stroke-1/10 bg-white p-6">
                  <h3 className="mb-3 text-heading-6">{item}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">
                    Give leadership a reliable view of revenue, customers, operations and performance.
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Ready Data Section */}
      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="ai-data-heading">
        <div className="main-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">Foundation for AI</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 id="ai-data-heading">AI Starts With Data</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary/70 dark:text-accent/70">
                  Modern AI applications depend on high-quality, accessible business data. Without a solid data
                  foundation, AI initiatives often fail to deliver on their promise.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="text-secondary/70 dark:text-accent/70">
                  RockScale prepares your data for advanced AI systems:
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div className="flex flex-wrap gap-3">
                  {aiReadyDataItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-stroke-1/20 bg-white px-4 py-2 text-sm text-secondary dark:border-white/10 dark:bg-background-6 dark:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <LinkButton href="/contact-us" className="btn btn-primary btn-md hover:btn-secondary mt-6">
                  Prepare Your Data for AI
                </LinkButton>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.7}>
              <Image
                src="/images/ns-img-378.svg" // Reusing AI & Data Integration image for conceptual flow
                alt="AI Starts with Data"
                width={700}
                height={500}
                className="rounded-[24px] shadow-lg"
              />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Modern Data Stack Section */}
      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="tech-stack-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-outline-primary">Our Ecosystem</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="tech-stack-heading" className="mt-5">
                Build With a Modern Data Stack
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mt-4">
                We leverage industry-leading technologies to build scalable, efficient, and future-proof data platforms,
                selecting the right tools to fit your unique environment.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {modernDataStack.map((group, index) => (
              <RevealAnimation key={group.category} delay={0.15 + index * 0.05}>
                <div className="dark:bg-background-6 h-full rounded-[22px] border border-stroke-1/10 bg-white p-6">
                  <h3 className="mb-5 text-heading-6">{group.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-stroke-1/20 bg-background-3 px-4 py-2 text-sm text-secondary dark:border-white/10 dark:bg-background-7 dark:text-accent"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Data Quality Section */}
      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="data-quality-heading">
        <div className="main-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">Trust Your Data</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 id="data-quality-heading">Bad Data Creates Bad Decisions</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary/70 dark:text-accent/70">
                  Poor data quality leads to flawed insights, wasted resources, and missed opportunities. RockScale
                  helps you establish robust data quality processes and monitoring to ensure your data is always reliable.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {dataQualityAspects.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0 text-primary-500"
                      >
                        <path
                          d="M7.49935 14.5828L3.20703 10.2905L4.14935 9.34814L7.49935 12.6981L15.8507 4.3468L16.793 5.28912L7.49935 14.5828Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="text-secondary dark:text-accent">{item}</p>
                    </div>
                  ))}
                </div>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.5}>
              <Image
                src="/images/ns-img-175.png" // Placeholder image for data quality/integrity
                alt="Data Quality"
                width={800}
                height={600}
                className="rounded-[24px] shadow-lg"
              />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Data Modernization Section */}
      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="data-modernization-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-outline-primary">Future-Proof Your Data</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="data-modernization-heading" className="mt-5">
                Modernize Without Breaking What Already Works
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mt-4">
                Many organizations grapple with a mix of legacy systems, siloed applications, and manual processes.
                We help you evolve your data landscape strategically, integrating new capabilities without
                requiring a complete overhaul.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.4}>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="dark:bg-background-6 rounded-[24px] border border-stroke-1/10 bg-white p-8 md:p-12">
                <h3 className="mb-6 text-heading-4 text-center">Before</h3>
                <ul className="space-y-4">
                  {dataModernizationBefore.map((item) => (
                    <li key={item} className="flex items-center justify-center gap-3 text-secondary dark:text-accent">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0 text-red-500"
                      >
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dark:bg-background-6 rounded-[24px] border border-stroke-1/10 bg-white p-8 md:p-12">
                <h3 className="mb-6 text-heading-4 text-center">After</h3>
                <ul className="space-y-4">
                  {dataModernizationAfter.map((item) => (
                    <li key={item} className="flex items-center justify-center gap-3 text-secondary dark:text-accent">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="shrink-0 text-green-500"
                      >
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="use-cases-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Real-World Applications</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="use-cases-heading" className="mt-5">
                Data Engineering Powers Diverse Business Outcomes
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {useCases.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.15 + index * 0.05}>
                <div className="dark:bg-background-6 h-full rounded-[22px] border border-stroke-1/10 bg-white p-6">
                  <h3 className="mb-3 text-heading-6">{item.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">{item.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process Section */}
      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="delivery-process-heading">
        <div className="main-container">
          <div className="mx-auto mb-16 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-outline-primary">Our Approach</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="delivery-process-heading" className="mt-5">
                How We Build Your Data Foundation
              </h2>
            </RevealAnimation>
          </div>

          <div className="relative mx-auto max-w-[900px]">
            <div className="absolute left-[27px] top-[24px] bottom-[24px] hidden w-px bg-stroke-1/30 dark:bg-white/10 md:block" />
            <div className="space-y-8 md:space-y-12">
              {deliveryProcessSteps.map((step, index) => (
                <RevealAnimation key={step.id} delay={0.15 + index * 0.05}>
                  <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
                    <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-[#7E57FD] text-xs font-bold tracking-widest text-white shadow-[0_0_0_8px_var(--bg-1)] dark:shadow-[0_0_0_8px_var(--bg-0)]">
                      {step.id}
                    </div>
                    <div className="flex-grow rounded-[20px] border border-stroke-1/10 bg-background-3 p-6 dark:bg-background-7 md:p-8">
                      <h3 className="mb-3 text-heading-5">{step.title}</h3>
                      <p className="text-secondary/70 dark:text-accent/70">{step.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="outcomes-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Tangible Results</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="outcomes-heading" className="mt-5">
                What You Gain with a Robust Data Foundation
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {outcomes.map((item, index) => (
              <RevealAnimation key={item} delay={0.15 + index * 0.05}>
                <div className="dark:bg-background-6 h-full rounded-[22px] border border-stroke-1/10 bg-white p-6">
                  <h3 className="mb-3 text-heading-6">{item}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">
                    Benefit from {item.toLowerCase()} across your organization.
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why RockScale Section */}
      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="why-rockscale-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-outline-primary">Our Advantage</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="why-rockscale-heading" className="mt-5">
                Why Companies Choose RockScale for Data Engineering
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyRockScaleItems.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.15 + index * 0.05}>
                <div className="dark:bg-background-6 h-full rounded-[22px] border border-stroke-1/10 bg-white p-6">
                  <h3 className="mb-3 text-heading-6">{item.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">{item.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Relationship to other RockScale Services Section */}
      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="related-services-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Integrated Solutions</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="related-services-heading" className="mt-5">
                A Foundation for All RockScale Services
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mt-4">
                Data Engineering & Analytics forms the crucial backbone for many of our advanced AI engagements.
                A strong data foundation enables seamless integration with other RockScale offerings.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedServices.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.15 + index * 0.05}>
                <div className="dark:bg-background-6 rounded-[22px] border border-stroke-1/10 bg-white p-6">
                  <h3 className="mb-3 text-heading-6">{item.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">{item.description}</p>
                  <LinkButton
                    href={item.href}
                    className="btn btn-sm btn-outline-primary mt-5"
                  >
                    Learn More
                  </LinkButton>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies - Placeholder as per task.md */}
      {/* <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="case-studies-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-outline-primary">Our Work</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="case-studies-heading" className="mt-5">
                Data Engineering Case Studies
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mt-4">
                See how RockScale has helped businesses transform their data into strategic assets.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.4}>
            <div className="dark:bg-background-6 relative overflow-hidden rounded-[24px] border border-stroke-1/10 bg-white p-8 md:p-12 text-center">
              <h3 className="mb-4 text-heading-4">Example Project: Enterprise Data Platform Modernization</h3>
              <p className="text-secondary/70 dark:text-accent/70 mb-6">
                RockScale partnered with a mid-market manufacturing company to migrate their legacy data infrastructure
                to a modern cloud-based data lakehouse, enabling real-time operational analytics and predictive maintenance.
              </p>
              <p className="text-primary-500 font-semibold italic">
                (Public case studies coming soon. This represents a reference implementation.)
              </p>
            </div>
          </RevealAnimation>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="faq-heading">
        <div className="main-container">
          <div className="mx-auto mb-10 max-w-[750px] space-y-5 text-center md:mb-[70px]">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-outline-primary">FAQs</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 id="faq-heading" className="mb-3">
                Frequently Asked Questions about Data Engineering & Analytics
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/60 mx-auto max-w-[600px]">
                Answers to common questions about building trusted data foundations and driving insights.
              </p>
            </RevealAnimation>
          </div>
          <div className="mx-auto max-w-[800px]">
            <Accordion defaultValue="data-faq-1" className="space-y-6">
              {faqItems.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="bg-background-3 dark:bg-background-7 rounded-lg px-6 py-4">
                  <AccordionTrigger value={faq.id} className="flex w-full items-center justify-between text-left" iconType="plus">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent value={faq.id}>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-secondary relative overflow-hidden py-16 md:py-20 lg:py-[100px]">
        <div className="main-container">
          <div className="mx-auto max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur mb-5 text-ns-yellow">Ready to Transform Your Data?</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-4 text-white">Build a Data Foundation That Can Scale</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto mb-8 max-w-[620px] text-white/60">
                Connect your data, improve your analytics and create the foundation your business needs for AI.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <LinkButton href="/contact-us" className="btn btn-white btn-md w-[85%] hover:btn-primary sm:w-auto">
                  Modernize Your Data
                </LinkButton>
                <LinkButton
                  href="/contact-us"
                  className="btn btn-md w-[85%] border border-white/20 text-white hover:border-white/60 sm:w-auto"
                >
                  Talk to RockScale
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DataEngineeringAnalyticsPageContent;