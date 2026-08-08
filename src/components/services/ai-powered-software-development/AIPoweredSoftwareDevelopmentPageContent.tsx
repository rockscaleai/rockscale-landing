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

// Data for various sections
const whatWeBuildItems = [
  {
    title: 'AI Applications',
    description: 'Custom applications that use AI to solve specific business problems.',
  },
  {
    title: 'AI Copilots',
    description: 'Intelligent assistants that help employees work faster and make better decisions.',
  },
  {
    title: 'AI Agents',
    description: 'Systems capable of executing multi-step tasks using tools, APIs and business data.',
  },
  {
    title: 'RAG & Knowledge Systems',
    description: 'AI systems that securely retrieve information from company knowledge bases and documents.',
  },
  {
    title: 'Document Intelligence',
    description: 'Systems that extract, classify, analyze and act on information contained in documents.',
  },
  {
    title: 'AI-Powered SaaS',
    description: 'New software products built around AI capabilities.',
  },
  {
    title: 'Workflow Automation',
    description: 'Intelligent automation that connects AI with existing business processes.',
  },
  {
    title: 'Conversational Interfaces',
    description: 'Natural-language interfaces for interacting with applications and business systems.',
  },
  {
    title: 'AI Search',
    description: 'Semantic and natural-language search across enterprise information.',
  },
];

const ideaToProductionSteps = [
  { id: '01', title: 'Discover', description: 'Understand the business problem, users and desired outcomes.' },
  { id: '02', title: 'Design', description: 'Define the product experience, AI capabilities and system architecture.' },
  { id: '03', title: 'Build', description: 'Develop the application, AI workflows, integrations and infrastructure.' },
  { id: '04', title: 'Evaluate', description: 'Test model quality, reliability, latency, security and user experience.' },
  { id: '05', title: 'Deploy', description: 'Move the system into a production environment.' },
  { id: '06', title: 'Optimize', description: 'Monitor usage, improve performance and continuously refine the system.' },
];

const aiEngineeringCapabilities = [
  { title: 'LLM Integration', group: 'Core AI' },
  { title: 'Prompt Engineering', group: 'Core AI' },
  { title: 'RAG', group: 'Core AI' },
  { title: 'AI Agents', group: 'Core AI' },
  { title: 'Tool Calling', group: 'Advanced AI' },
  { title: 'Function Calling', group: 'Advanced AI' },
  { title: 'Model Routing', group: 'Advanced AI' },
  { title: 'AI Evaluation', group: 'Quality & Ops' },
  { title: 'Structured Outputs', group: 'Quality & Ops' },
  { title: 'Guardrails', group: 'Quality & Ops' },
  { title: 'AI Observability', group: 'Quality & Ops' },
  { title: 'Human-in-the-Loop', group: 'Quality & Ops' },
  { title: 'Streaming', group: 'Performance' },
  { title: 'Context Management', group: 'Performance' },
];

const productionAiRequirements = [
  { title: 'Reliability' },
  { title: 'Security' },
  { title: 'Evaluation' },
  { title: 'Observability' },
  { title: 'Latency' },
  { title: 'Cost Management' },
  { title: 'Scalability' },
  { title: 'Data Privacy' },
  { title: 'Access Control' },
  { title: 'Error Handling' },
  { title: 'Human Oversight' },
  { title: 'Model Fallbacks' },
  { title: 'Monitoring' },
];

const combinedEngineeringCapabilities = [
  'Frontend Engineering',
  'Backend Engineering',
  'API Design',
  'Database Architecture',
  'AI Engineering',
  'Data Engineering',
  'Cloud Infrastructure',
  'DevOps',
  'Security',
];

const useCases = [
  {
    title: 'Customer Support',
    description: 'AI agents that resolve requests and assist support teams.',
  },
  {
    title: 'Internal Knowledge',
    description: 'Search and interact with company knowledge using natural language.',
  },
  {
    title: 'Document Processing',
    description: 'Extract and reason over contracts, invoices, reports and other documents.',
  },
  {
    title: 'Sales Intelligence',
    description: 'Automate research, summarize customer information and support sales teams.',
  },
  {
    title: 'Operations',
    description: 'Automate repetitive workflows across business systems.',
  },
  {
    title: 'Finance',
    description: 'Analyze financial documents and automate information-heavy workflows.',
  },
  {
    title: 'HR',
    description: 'Create intelligent employee assistants and automate internal processes.',
  },
  {
    title: 'E-commerce',
    description: 'Personalization, product intelligence and customer experience automation.',
  },
];

const dataConnectors = [
  'Databases',
  'Data warehouses',
  'Documents',
  'APIs',
  'CRMs',
  'ERPs',
  'Internal applications',
  'Knowledge bases',
];

const securityGovernanceItems = [
  'Data privacy',
  'Access controls',
  'Authentication',
  'Authorization',
  'Secure API design',
  'Data isolation',
  'Auditability',
  'AI safety',
  'Prompt injection protection',
  'Sensitive information handling',
  'Model governance',
  'Responsible AI',
];

const technologyStack = [
  {
    category: 'AI',
    items: ['OpenAI', 'Anthropic', 'Google Gemini', 'Mistral', 'LangGraph', 'Other LLM frameworks'],
  },
  {
    category: 'Application',
    items: ['Next.js', 'React', 'TypeScript', 'Python', 'FastAPI', 'Node.js'],
  },
  {
    category: 'Data',
    items: ['PostgreSQL', 'Redis', 'Vector Databases', 'Data Warehouses'],
  },
  {
    category: 'Infrastructure',
    items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD'],
  },
];

const engagementModels = [
  {
    title: 'AI Product Development',
    description: 'Build a new AI-powered application or product.',
  },
  {
    title: 'AI Feature Integration',
    description: 'Add AI capabilities to an existing product.',
  },
  {
    title: 'AI Modernization',
    description: 'Introduce intelligent capabilities into existing software.',
  },
  {
    title: 'Prototype to Production',
    description: 'Turn an existing AI proof-of-concept into a production system.',
  },
  {
    title: 'Forward Deployed Engineering',
    description: 'Embed RockScale engineers directly with the client’s team.',
    href: '/services/forward-deployed-engineer',
  },
];

const whyRockScaleItems = [
  {
    title: 'AI + Software Engineering',
    description: 'We understand both the AI layer and the underlying software system.',
  },
  {
    title: 'Data-Aware',
    description: 'We build AI systems that can work with real business data.',
  },
  {
    title: 'Production Focus',
    description: 'We design for reliability, security and scale from the beginning.',
  },
  {
    title: 'Model Agnostic',
    description: 'We select technology based on the problem rather than forcing one provider.',
  },
  {
    title: 'End-to-End',
    description: 'Strategy, software, data and infrastructure under one partner.',
  },
  {
    title: 'Business Outcomes',
    description: 'We build technology to solve business problems, not simply demonstrate AI.',
  },
];

const faqItems = [
  {
    id: 'ai-software-faq-1',
    question: 'What types of AI applications do you build?',
    answer:
      'We build a range of AI-powered software including custom AI applications, copilots, agents, RAG systems, document intelligence solutions, and AI-powered SaaS products.',
  },
  {
    id: 'ai-software-faq-2',
    question: 'Can you integrate AI into our existing software?',
    answer:
      'Yes, we specialize in integrating AI capabilities and models into existing enterprise applications and workflows, ensuring seamless operation and enhanced functionality.',
  },
  {
    id: 'ai-software-faq-3',
    question: 'Can you work with our existing engineering team?',
    answer:
      'Absolutely. We often collaborate directly with internal engineering teams, embedding our expertise to augment your team\'s capabilities and accelerate delivery.',
  },
  {
    id: 'ai-software-faq-4',
    question: 'Which AI models do you support?',
    answer:
      'We are model-agnostic and work with a variety of leading AI providers including OpenAI, Anthropic, Google Gemini, Mistral, and open-source models, selecting the best fit for your specific needs.',
  },
  {
    id: 'ai-software-faq-5',
    question: 'Can you build AI agents?',
    answer:
      'Yes, we design and implement AI agents capable of executing complex, multi-step tasks by leveraging tools, APIs, and integrating with your business data.',
  },
  {
    id: 'ai-software-faq-6',
    question: 'Can you connect AI to our internal data?',
    answer:
      'Connecting AI to your internal data is a core part of our approach. We integrate with databases, data warehouses, documents, APIs, CRMs, ERPs, and other internal systems to power intelligent applications.',
  },
  {
    id: 'ai-software-faq-7',
    question: 'How do you evaluate AI application quality?',
    answer:
      'Our evaluation process includes testing model quality, reliability, latency, security, and overall user experience to ensure production-readiness and optimal performance.',
  },
  {
    id: 'ai-software-faq-8',
    question: 'How do you handle security?',
    answer:
      'We prioritize enterprise-grade security, implementing data privacy measures, access controls, robust authentication/authorization, secure API design, and prompt injection protection.',
  },
  {
    id: 'ai-software-faq-9',
    question: 'Can you take an AI prototype into production?',
    answer:
      'Yes, a key strength is moving AI prototypes and proofs-of-concept into secure, observable, and scalable production systems that deliver real business value.',
  },
  {
    id: 'ai-software-faq-10',
    question: 'How long does an AI software project take?',
    answer:
      'Project timelines vary based on complexity and scope. We work closely with clients to define clear milestones and deliver in agile sprints, ensuring continuous progress and transparency.',
  },
  {
    id: 'ai-software-faq-11',
    question: 'Do you provide ongoing support?',
    answer:
      'We offer various levels of ongoing support and optimization services to ensure your AI-powered software continues to perform, scale, and adapt to evolving business needs.',
  },
];

const AIPoweredSoftwareDevelopmentPageContent = () => {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative z-0 overflow-hidden bg-[url('/images/ns-img-171.png')] bg-cover bg-top bg-no-repeat pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-52 lg:pb-[120px] xl:pt-[220px] xl:pb-[140px]"
        aria-labelledby="ai-hero-heading"
      >
        <RevealAnimation delay={0.1} direction="right" offset={200}>
          <div className="pointer-events-none absolute top-[-10%] right-[-15%] -z-10 h-[600px] w-[600px] select-none rounded-full bg-[#7E57FD]/20 blur-[120px]" />
        </RevealAnimation>

        <div className="main-container relative z-10">
          <div className="mx-auto max-w-[980px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-6 inline-block">AI-Powered Software Development</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 id="ai-hero-heading" className="mb-6">
                AI-Powered Software Built for the Real World
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mx-auto mb-10 max-w-[760px] text-lg leading-relaxed">
                We design and build intelligent software that combines modern AI with reliable engineering — from AI
                copilots and agents to enterprise applications and automated workflows.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <LinkButton href="/contact-us" className="btn btn-primary btn-md hover:btn-secondary w-[85%] sm:w-auto">
                  Build With RockScale
                </LinkButton>
                <LinkButton href="/contact-us" className="btn btn-secondary btn-md hover:btn-primary w-[85%] sm:w-auto">
                  Talk to an AI Engineer
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="problem-heading">
        <div className="main-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-outline-primary">The Challenge</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 id="problem-heading">Software Is Becoming Intelligent</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary/70 dark:text-accent/70">
                  Businesses increasingly need software that can understand natural language, process unstructured
                  information, reason across business data, and automate multi-step workflows. Traditional deterministic
                  software often struggles with these complex demands.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="text-secondary/70 dark:text-accent/70">
                  RockScale combines conventional software engineering with advanced AI capabilities to build systems
                  that are truly intelligent and adaptable.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.5}>
              <div className="grid gap-4 rounded-[24px] border border-stroke-1/10 bg-background-3 p-6 dark:bg-background-7 md:p-8">
                {[
                  'Understand natural language',
                  'Process unstructured information',
                  'Reason across business data',
                  'Automate multi-step workflows',
                  'Assist employees',
                  'Interact with existing systems',
                  'Adapt to changing information',
                ].map((item) => (
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

      {/* What We Build Section */}
      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="what-we-build-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">What We Build</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="what-we-build-heading" className="mt-5">
                Intelligent Software Tailored to Your Business Needs
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whatWeBuildItems.map((item, index) => (
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

      {/* From Idea to Production Section */}
      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="idea-to-production-heading">
        <div className="main-container">
          <div className="mx-auto mb-16 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-outline-primary">Our Process</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="idea-to-production-heading" className="mt-5">
                We Don’t Stop at the Prototype
              </h2>
            </RevealAnimation>
          </div>

          <div className="relative mx-auto max-w-[900px]">
            <div className="absolute left-[27px] top-[24px] bottom-[24px] hidden w-px bg-stroke-1/30 dark:bg-white/10 md:block" />
            <div className="space-y-8 md:space-y-12">
              {ideaToProductionSteps.map((step, index) => (
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

      {/* AI Engineering Capabilities Section */}
      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="ai-capabilities-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Deep Expertise</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="ai-capabilities-heading" className="mt-5">
                Our AI Engineering Capabilities
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {['Core AI', 'Advanced AI', 'Quality & Ops', 'Performance'].map((groupTitle, groupIndex) => (
              <RevealAnimation key={groupTitle} delay={0.15 + groupIndex * 0.05}>
                <div className="rounded-[22px] border border-stroke-1/10 bg-white p-6 dark:bg-background-6">
                  <h3 className="mb-4 text-heading-6">{groupTitle}</h3>
                  <div className="flex flex-wrap gap-3">
                    {aiEngineeringCapabilities
                      .filter((item) => item.group === groupTitle)
                      .map((item) => (
                        <span
                          key={item.title}
                          className="rounded-full border border-stroke-1/20 bg-background-3 px-4 py-2 text-sm text-secondary dark:border-white/10 dark:bg-background-7 dark:text-accent"
                        >
                          {item.title}
                        </span>
                      ))}
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Application Architecture Section */}
      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="architecture-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-outline-primary">System Design</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="architecture-heading" className="mt-5">
                Scalable Application Architecture
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mt-4">
                We design robust architectures that seamlessly integrate AI, data, and cloud infrastructure to create
                powerful and reliable intelligent systems.
              </p>
            </RevealAnimation>
          </div>

          {/* This is a custom visual component. Using existing card/grid patterns */}
          <RevealAnimation delay={0.4}>
            <div className="relative mx-auto max-w-[800px] rounded-[24px] border border-stroke-1/10 bg-background-3 p-8 dark:bg-background-7">
              {/* User */}
              <div className="relative mb-8 flex flex-col items-center">
                <div className="rounded-[18px] border border-stroke-1/10 bg-white p-4 text-center dark:bg-background-6">
                  <p className="text-lg font-semibold text-secondary dark:text-accent">User</p>
                </div>
                <div className="h-8 w-px bg-stroke-1/30 dark:bg-white/10" />
              </div>

              {/* RockScale Application */}
              <div className="relative mb-8 flex flex-col items-center">
                <div className="rounded-[18px] border border-stroke-1/10 bg-white p-4 text-center dark:bg-background-6">
                  <p className="text-lg font-semibold text-secondary dark:text-accent">RockScale Application</p>
                </div>
                <div className="h-8 w-px bg-stroke-1/30 dark:bg-white/10" />
              </div>

              {/* AI Orchestration Layer */}
              <div className="relative mb-8 flex flex-col items-center">
                <div className="rounded-[18px] border border-stroke-1/10 bg-white p-4 text-center dark:bg-background-6">
                  <p className="text-lg font-semibold text-secondary dark:text-accent">AI Orchestration Layer</p>
                </div>
                <div className="h-8 w-px bg-stroke-1/30 dark:bg-white/10" />
              </div>

              {/* Models, Data & Knowledge, Tools & Integrations */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center">
                  <div className="rounded-[18px] border border-stroke-1/10 bg-white p-4 text-center dark:bg-background-6">
                    <p className="text-lg font-semibold text-secondary dark:text-accent">Models</p>
                    <ul className="mt-2 text-sm text-secondary/70 dark:text-accent/70">
                      <li>OpenAI</li>
                      <li>Anthropic</li>
                      <li>Google</li>
                      <li>Open-source models</li>
                    </ul>
                  </div>
                  <div className="h-8 w-px bg-stroke-1/30 dark:bg-white/10" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-[18px] border border-stroke-1/10 bg-white p-4 text-center dark:bg-background-6">
                    <p className="text-lg font-semibold text-secondary dark:text-accent">Data & Knowledge</p>
                    <ul className="mt-2 text-sm text-secondary/70 dark:text-accent/70">
                      <li>PostgreSQL</li>
                      <li>Vector Database</li>
                      <li>Documents</li>
                      <li>Business Systems</li>
                    </ul>
                  </div>
                  <div className="h-8 w-px bg-stroke-1/30 dark:bg-white/10" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-[18px] border border-stroke-1/10 bg-white p-4 text-center dark:bg-background-6">
                    <p className="text-lg font-semibold text-secondary dark:text-accent">Tools & Integrations</p>
                    <ul className="mt-2 text-sm text-secondary/70 dark:text-accent/70">
                      <li>APIs</li>
                      <li>CRM</li>
                      <li>ERP</li>
                      <li>Internal Systems</li>
                    </ul>
                  </div>
                  <div className="h-8 w-px bg-stroke-1/30 dark:bg-white/10" />
                </div>
              </div>

              {/* Cloud Infrastructure */}
              <div className="flex flex-col items-center">
                <div className="rounded-[18px] border border-stroke-1/10 bg-white p-4 text-center dark:bg-background-6">
                  <p className="text-lg font-semibold text-secondary dark:text-accent">Cloud Infrastructure</p>
                  <ul className="mt-2 text-sm text-secondary/70 dark:text-accent/70">
                    <li>AWS / Azure / Google Cloud</li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Build with the Best Model Section */}
      <section className="bg-secondary py-16 md:py-20 lg:py-[100px]" aria-labelledby="model-choice-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur text-ns-yellow">Model Agnostic</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="model-choice-heading" className="mt-5 text-white">
                The Right Model for the Right Problem
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-white/70 mt-4">
                RockScale integrates with a diverse range of AI providers and models, ensuring we select the optimal
                technology for your unique business needs, without vendor lock-in.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <RevealAnimation delay={0.4}>
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-6 text-white">
                <h3 className="mb-4 text-heading-6">Supported Models</h3>
                <div className="flex flex-wrap gap-3">
                  {['OpenAI', 'Anthropic', 'Google Gemini', 'Mistral', 'Open-source models', 'Qorebit AI'].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.5} className="md:col-span-2">
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-6 text-white">
                <h3 className="mb-4 text-heading-6">Key Benefits</h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    'Model flexibility',
                    'Cost optimization',
                    'Performance optimization',
                    'Provider independence',
                    'Fallback strategies',
                    'Model experimentation',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Production-Ready AI Section */}
      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="production-ai-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Enterprise Ready</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="production-ai-heading" className="mt-5">
                Production AI Requires More Than an API Call
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mt-4">
                Moving AI from prototype to a reliable production system demands meticulous attention to detail
                across multiple critical dimensions.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {productionAiRequirements.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.15 + index * 0.05}>
                <div className="dark:bg-background-6 h-full rounded-[22px] border border-stroke-1/10 bg-white p-6">
                  <h3 className="mb-3 text-heading-6">{item.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">
                    Ensuring {item.title.toLowerCase()} for your AI applications.
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Software Engineering + AI Section */}
      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="combined-engineering-heading">
        <div className="main-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-outline-primary">Integrated Approach</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 id="combined-engineering-heading">AI Engineering Built on Solid Software Engineering</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary/70 dark:text-accent/70">
                  RockScale doesn't treat AI as a separate layer. We deeply integrate AI engineering with robust
                  software development practices, data engineering, and cloud infrastructure to build complete,
                  production-grade intelligent systems.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="flex flex-wrap gap-3">
                  {combinedEngineeringCapabilities.map((item) => (
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
            <RevealAnimation delay={0.5}>
              {/* This is a placeholder for a visual composition. Using an image from the template. */}
              <Image
                src="/images/ns-img-174.png"
                alt="AI and Software Engineering"
                width={800}
                height={600}
                className="rounded-[24px] shadow-lg"
              />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="use-cases-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Real-World Impact</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="use-cases-heading" className="mt-5">
                AI-Powered Software Solves Critical Business Problems
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

      {/* Data + AI Section */}
      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="data-ai-heading">
        <div className="main-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-outline-primary">Data-Driven AI</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 id="data-ai-heading">Great AI Starts With Great Data</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary/70 dark:text-accent/70">
                  Reliable access to high-quality business data is foundational for effective AI applications.
                  RockScale connects your AI systems to all your critical data sources.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <div className="flex flex-wrap gap-3">
                  {dataConnectors.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-stroke-1/20 bg-white px-4 py-2 text-sm text-secondary dark:border-white/10 dark:bg-background-6 dark:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <p className="text-secondary/70 dark:text-accent/70">
                  This integrated approach ensures a natural connection between AI-Powered Software Development and
                  Data Engineering & Analytics.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.6}>
              {/* Placeholder image for data and AI integration */}
              <Image
                src="/images/ns-img-378.svg"
                alt="Data and AI Integration"
                width={700}
                height={500}
                className="rounded-[24px] shadow-lg"
              />
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Security & Governance Section */}
      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="security-governance-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Trust & Control</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="security-governance-heading" className="mt-5">
                Enterprise-Grade Security & Governance for AI
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mt-4">
                Building intelligent systems requires a strong foundation of security, privacy, and responsible AI practices.
                We implement robust measures to protect your data and ensure compliance.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {securityGovernanceItems.map((item, index) => (
              <RevealAnimation key={item} delay={0.15 + index * 0.05}>
                <div className="dark:bg-background-6 h-full rounded-[22px] border border-stroke-1/10 bg-white p-6">
                  <h3 className="mb-3 text-heading-6">{item}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">
                    Implementing robust {item.toLowerCase()} measures.
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="bg-secondary py-16 md:py-20 lg:py-[100px]" aria-labelledby="tech-stack-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur text-ns-yellow">Our Stack</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="tech-stack-heading" className="mt-5 text-white">
                Our Go-To Technologies
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-white/70 mt-4">
                We leverage a modern and flexible technology stack, choosing the right tools for your specific solution
                architecture and operational environment.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {technologyStack.map((group, index) => (
              <RevealAnimation key={group.category} delay={0.15 + index * 0.05}>
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-6 text-white">
                  <h3 className="mb-5 text-heading-6">{group.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white"
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

      {/* Engagement Models Section */}
      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="engagement-models-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-outline-primary">Flexible Partnership</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="engagement-models-heading" className="mt-5">
                How You Can Work With RockScale
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {engagementModels.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.15 + index * 0.05}>
                <div className="dark:bg-background-6 rounded-[22px] border border-stroke-1/10 bg-white p-6">
                  <h3 className="mb-3 text-heading-6">{item.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">{item.description}</p>
                  {item.href && (
                    <LinkButton
                      href={item.href}
                      className="btn btn-sm btn-outline-primary mt-5"
                    >
                      Learn More
                    </LinkButton>
                  )}
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Products Section - Qorebit AI */}
      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="qorebit-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Our Product</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="qorebit-heading" className="mt-5">
                Qorebit AI: Our Own AI Engineering Platform
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mt-4">
                Qorebit AI demonstrates RockScale's capability to design, build, and deploy advanced AI
                infrastructure and software products. It's an example of our expertise in action.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.4}>
            <div className="dark:bg-background-6 relative overflow-hidden rounded-[24px] border border-stroke-1/10 bg-white p-8 md:p-12">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h3 className="mb-4 text-heading-4">Accelerating Enterprise AI with Qorebit</h3>
                  <p className="text-secondary/70 dark:text-accent/70 mb-6">
                    Qorebit AI is our enterprise-grade AI engineering platform, built to streamline the development,
                    deployment, and management of intelligent applications. It provides the tools and infrastructure
                    for secure, scalable, and observable AI solutions.
                  </p>
                  <LinkButton href="/products/qorebit-ai" className="btn btn-primary btn-md">
                    Explore Qorebit AI
                  </LinkButton>
                </div>
                <div className="flex justify-center lg:justify-end">
                  {/* Placeholder image for Qorebit AI */}
                  <Image
                    src="/images/ns-img-391.png"
                    alt="Qorebit AI Platform"
                    width={500}
                    height={300}
                    className="rounded-[16px] shadow-xl"
                  />
                </div>
              </div>
            </div>
          </RevealAnimation>
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
                Why Companies Choose RockScale for AI Software Development
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

      {/* FAQ Section */}
      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="faq-heading">
        <div className="main-container">
          <div className="mx-auto mb-10 max-w-[750px] space-y-5 text-center md:mb-[70px]">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-green">FAQs</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 id="faq-heading" className="mb-3">
                Frequently Asked Questions about AI Software Development
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/60 mx-auto max-w-[600px]">
                Answers to common questions about building intelligent applications and AI-powered systems.
              </p>
            </RevealAnimation>
          </div>
          <div className="mx-auto max-w-[800px]">
            <Accordion defaultValue="ai-software-faq-1" className="space-y-6">
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
              <span className="badge badge-blur mb-5 text-ns-yellow">Ready to Build?</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-4 text-white">Have an AI Idea? Let’s Build It.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto mb-8 max-w-[620px] text-white/60">
                From early-stage concepts to production systems, RockScale helps businesses turn AI opportunities
                into reliable software.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <LinkButton href="/contact-us" className="btn btn-white btn-md w-[85%] hover:btn-primary sm:w-auto">
                  Start Your AI Project
                </LinkButton>
                <LinkButton
                  href="/contact-us"
                  className="btn btn-md w-[85%] border border-white/20 text-white hover:border-white/60 sm:w-auto"
                >
                  Book a Discovery Call
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

export default AIPoweredSoftwareDevelopmentPageContent;