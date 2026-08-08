'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import Accordion from '@/components/ui/accordion/Accordion';
import AccordionContent from '@/components/ui/accordion/AccordionContent';
import AccordionItem from '@/components/ui/accordion/AccordionItem';
import AccordionTrigger from '@/components/ui/accordion/AccordionTrigger';
import LinkButton from '@/components/ui/button/LinkButton';

const problemToProductionSteps = [
  'Client Problem',
  'RockScale Engineer Embedded',
  'Understand',
  'Design',
  'Build',
  'Deploy',
  'Measure',
  'Scale',
];

const embeddedEngineerSteps = [
  'Understand the problem',
  'Work with stakeholders',
  'Explore existing systems',
  'Design the solution',
  'Build the software',
  'Integrate with infrastructure',
  'Deploy to production',
  'Measure and iterate',
];

const comparisonRows = [
  {
    traditional: 'Receives predefined tasks',
    forward: 'Works directly with stakeholders to define and solve the right problem',
  },
  {
    traditional: 'Operates within a narrow technical scope',
    forward: 'Works across product, software, data and infrastructure when needed',
  },
  {
    traditional: 'Focuses primarily on implementation output',
    forward: 'Owns technical outcomes and business relevance',
  },
  {
    traditional: 'Usually operates at arm’s length',
    forward: 'Collaborates inside your team, tools and workflows',
  },
  {
    traditional: 'Success is measured by completed tasks',
    forward: 'Success is measured by production progress and business impact',
  },
];

const capabilityItems = [
  {
    title: 'AI Engineering',
    description:
      'Build production AI applications, LLM systems, AI agents and intelligent workflows that solve real operational and product problems.',
  },
  {
    title: 'Software Engineering',
    description:
      'Design and integrate production-grade web applications, APIs and internal platforms that fit your existing architecture and delivery process.',
  },
  {
    title: 'Data Engineering',
    description:
      'Create pipelines, analytics infrastructure and AI-ready data systems that make models usable inside the business.',
  },
  {
    title: 'Cloud & Infrastructure',
    description:
      'Implement scalable cloud environments, deployment pipelines and platform architecture that support reliable delivery.',
  },
  {
    title: 'AI Integration',
    description:
      'Connect AI systems to enterprise applications, databases, APIs and workflows without disrupting the systems your teams already depend on.',
  },
  {
    title: 'Technical Architecture',
    description:
      'Assess constraints, design solution architecture and make practical implementation decisions with long-term maintainability in mind.',
  },
  {
    title: 'Rapid Prototyping',
    description:
      'Turn promising concepts into working prototypes quickly so teams can validate technical direction before overcommitting.',
  },
  {
    title: 'Productionization',
    description:
      'Move prototypes and proofs of concept into secure, observable and production-ready systems your business can rely on.',
  },
];

const scenarioItems = [
  {
    title: 'You Have an AI Prototype But Can’t Get It Into Production',
    description:
      'RockScale engineers help turn promising prototypes into reliable production systems with the engineering discipline required for real-world deployment.',
  },
  {
    title: 'Your Engineering Team Is Stretched',
    description:
      'Add specialized AI, data or cloud expertise directly into the team without waiting months to make the right internal hire.',
  },
  {
    title: 'You Need to Integrate AI Into Existing Systems',
    description:
      'We work within your current architecture and connect AI capabilities to the applications, workflows and data your business already runs on.',
  },
  {
    title: 'You Have a Complex Technical Problem',
    description:
      'Bring in experienced engineers to investigate the system, diagnose constraints and implement the right solution end to end.',
  },
  {
    title: 'You Need to Move Faster',
    description:
      'Embed an engineer directly with your team to remove bottlenecks, compress decision cycles and accelerate delivery.',
  },
  {
    title: 'You’re Building an AI Product',
    description:
      'Add experienced implementation capability during critical product phases where architecture, experimentation and shipping speed all matter.',
  },
];

const collaborationEnvironment = [
  'Git repositories',
  'Project management tools',
  'Communication channels',
  'Cloud environments',
  'Development workflows',
  'Engineering processes',
];

const technologyGroups = [
  {
    title: 'AI',
    items: ['LLMs', 'RAG', 'AI Agents', 'Model Integration', 'AI Evaluation', 'AI Workflows'],
  },
  {
    title: 'Software',
    items: ['TypeScript', 'Python', 'Next.js', 'React', 'FastAPI', 'APIs', 'Microservices'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'Data Pipelines', 'ETL / ELT', 'Data Warehouses', 'Analytics', 'Data Platforms'],
  },
  {
    title: 'Cloud',
    items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure Automation'],
  },
];

const engagementExamples = [
  {
    title: 'AI Product Development',
    description:
      'Work alongside a product team to design and build a new AI-powered product from architecture through release.',
  },
  {
    title: 'AI Platform Integration',
    description:
      'Integrate LLMs and AI capabilities into an existing enterprise platform while preserving security, workflow continuity and maintainability.',
  },
  {
    title: 'Data Platform Modernization',
    description:
      'Modernize fragmented data infrastructure and create an AI-ready data foundation that supports analytics and model-driven applications.',
  },
  {
    title: 'AI Agent Deployment',
    description:
      'Build and deploy agents capable of executing multi-step business workflows with the controls, integration points and observability required in production.',
  },
  {
    title: 'Legacy System Modernization',
    description:
      'Connect modern AI and software capabilities to existing enterprise systems without requiring a full rewrite.',
  },
  {
    title: 'Internal AI Platform',
    description:
      'Build internal infrastructure that helps teams adopt AI safely, consistently and at scale across the organization.',
  },
];

const engagementModels = [
  {
    title: 'Short-Term Technical Sprint',
    description: 'For a specific technical challenge, prototype or proof-of-concept with clear execution focus.',
  },
  {
    title: 'Product Build',
    description: 'Embed an engineer or engineering pod during a critical product development phase.',
  },
  {
    title: 'AI Productionization',
    description: 'Help move an existing AI prototype into a reliable production system with stronger architecture and delivery discipline.',
  },
  {
    title: 'Long-Term Embedded Engineer',
    description: 'Provide ongoing engineering capability integrated into your team, tools and delivery process.',
  },
  {
    title: 'Specialized Technical Engagement',
    description: 'Bring in focused expertise for AI, data, cloud or architecture challenges where experience matters immediately.',
  },
];

const collaborationModel = [
  {
    title: 'Client Leadership',
    description: 'Sets business objectives, priorities and success criteria.',
  },
  {
    title: 'Client Product / Engineering Team',
    description: 'Partners on requirements, implementation and internal context.',
  },
  {
    title: 'RockScale Forward Deployed Engineer',
    description: 'Embeds directly with the team to diagnose, design, build and deploy.',
  },
  {
    title: 'RockScale Specialist Network',
    description: 'Provides additional AI, data and cloud depth when the problem requires it.',
  },
];

const deliverySteps = [
  {
    id: '01',
    title: 'Understand',
    description: 'Understand the business objective, technical environment, stakeholders and delivery constraints.',
  },
  {
    id: '02',
    title: 'Diagnose',
    description: 'Identify bottlenecks, technical risks, integration constraints and the highest-value path forward.',
  },
  {
    id: '03',
    title: 'Design',
    description: 'Define the architecture, implementation strategy and collaboration model required to ship successfully.',
  },
  {
    id: '04',
    title: 'Build',
    description: 'Develop the solution collaboratively with your team using your workflows, repositories and engineering practices.',
  },
  {
    id: '05',
    title: 'Deploy',
    description: 'Move the solution into your production environment with reliability, observability and operational clarity.',
  },
  {
    id: '06',
    title: 'Optimize',
    description: 'Monitor outcomes, improve the implementation and help the system scale with the business.',
  },
];

const outcomes = [
  'Faster AI implementation',
  'Shorter path from PoC to production',
  'Reduced engineering bottlenecks',
  'Access to specialized expertise',
  'Better technical architecture',
  'Production-ready systems',
  'Faster product development',
  'Stronger internal engineering capability',
];

const differentiators = [
  {
    title: 'AI Engineering Expertise',
    description: 'We understand modern AI systems beyond basic API integration and can build for real production use.',
  },
  {
    title: 'Full-Stack Capability',
    description: 'AI, software, data and cloud engineering live under one roof, reducing coordination overhead.',
  },
  {
    title: 'Business Context',
    description: 'We focus on the problem behind the technical request so engineering effort produces meaningful business outcomes.',
  },
  {
    title: 'Production Focus',
    description: 'We do not stop at prototypes. Our work is designed to survive production constraints and operational reality.',
  },
  {
    title: 'Embedded Collaboration',
    description: 'Our engineers work directly with your team inside your environment, tooling and delivery process.',
  },
  {
    title: 'Flexible Engagement',
    description: 'You can bring in the right depth of engineering support based on the stage and complexity of the problem.',
  },
];

const proofItems = [
  {
    label: 'Reference Implementation',
    title: 'AI application architecture built for production conditions',
    description:
      'Example system design showing how LLM workflows, APIs, data flows and operational controls come together in a production-style implementation.',
  },
  {
    label: 'Concept Solution',
    title: 'Enterprise AI integration pattern',
    description:
      'Illustrative engagement showing how AI services can connect to existing applications, internal tools and data systems without rebuilding the business around a demo.',
  },
  {
    label: 'Technical Showcase',
    title: 'AI-ready cloud and data foundation',
    description:
      'A practical modernization example that demonstrates the path from fragmented systems to a stronger platform for analytics, AI deployment and internal product delivery.',
  },
];

const faqItems = [
  {
    id: 'fde-faq-1',
    question: 'How is an FDE different from a consultant?',
    answer:
      'A Forward Deployed Engineer is hands-on and implementation-focused. They do not stop at recommendations. They work directly in your technical environment, build the solution, collaborate with your team and help move it into production.',
  },
  {
    id: 'fde-faq-2',
    question: 'Is the engineer part of our team?',
    answer:
      'Yes. The engagement is designed to feel embedded. RockScale engineers work within your repositories, communication channels, project workflows and cloud environment so collaboration is seamless.',
  },
  {
    id: 'fde-faq-3',
    question: 'How long does an engagement typically last?',
    answer:
      'It depends on the problem. Some engagements begin with a short technical sprint, while others continue through product delivery, AI productionization or longer-term embedded execution.',
  },
  {
    id: 'fde-faq-4',
    question: 'Can an FDE work with our existing engineering team?',
    answer:
      'Yes. That is the default model. RockScale engineers work alongside your internal product, engineering, data and operations teams rather than operating separately.',
  },
  {
    id: 'fde-faq-5',
    question: 'Can you work inside our cloud environment?',
    answer:
      'Yes. RockScale engineers can operate inside your existing cloud environment, deployment processes and security constraints.',
  },
  {
    id: 'fde-faq-6',
    question: 'Can you work with our existing technology stack?',
    answer:
      'Yes. We adapt to your technical environment and build within the realities of your current systems, team conventions and architecture decisions.',
  },
  {
    id: 'fde-faq-7',
    question: 'Do you provide AI engineers specifically?',
    answer:
      'Yes. Depending on the engagement, we can provide engineers with specific strength in AI systems, software engineering, data engineering, cloud infrastructure or technical architecture.',
  },
  {
    id: 'fde-faq-8',
    question: 'Can an engagement start with a short technical sprint?',
    answer:
      'Yes. Many teams begin with a focused sprint to diagnose the problem, prove an approach or accelerate a blocked initiative before expanding the engagement.',
  },
  {
    id: 'fde-faq-9',
    question: 'What happens after the FDE engagement ends?',
    answer:
      'We aim to leave your team stronger than we found it. That includes production systems, documentation, implementation knowledge and a clearer path for your internal team to continue.',
  },
  {
    id: 'fde-faq-10',
    question: 'Can RockScale provide additional specialists?',
    answer:
      'Yes. An embedded FDE can draw on RockScale’s wider network of AI, data, software and cloud specialists when the problem requires deeper or broader support.',
  },
];

const ForwardDeployedEngineerPageContent = () => {
  return (
    <main>
      <Navbar />

      <section
        className="relative z-0 overflow-hidden bg-[url('/images/ns-img-169.png')] bg-cover bg-top bg-no-repeat pt-36 pb-20 md:pt-44 md:pb-24 lg:pt-52 lg:pb-[120px] xl:pt-[220px] xl:pb-[140px]"
        aria-labelledby="fde-hero-heading"
      >
        <RevealAnimation delay={0.1} direction="right" offset={200}>
          <div className="pointer-events-none absolute top-[-10%] right-[-15%] -z-10 h-[600px] w-[600px] select-none rounded-full bg-[#7E57FD]/20 blur-[120px]" />
        </RevealAnimation>

        <div className="main-container relative z-10">
          <div className="mx-auto max-w-[980px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-6 inline-block">Forward Deployed Engineer</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 id="fde-hero-heading" className="mb-6">
                Engineering Expertise, Embedded in Your Team
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mx-auto mb-10 max-w-[760px] text-lg leading-relaxed">
                RockScale’s Forward Deployed Engineers work alongside your product, engineering and operations teams to
                solve complex technical problems, build AI-powered systems and accelerate the path from idea to
                production.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <LinkButton href="/contact-us" className="btn btn-primary btn-md hover:btn-secondary w-[85%] sm:w-auto">
                  Deploy an Engineer
                </LinkButton>
                <LinkButton href="/contact-us" className="btn btn-secondary btn-md hover:btn-primary w-[85%] sm:w-auto">
                  Talk to Our Team
                </LinkButton>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <div className="dark:bg-background-6/80 mt-12 grid gap-4 rounded-[26px] border border-stroke-1/10 bg-white/85 p-6 text-left backdrop-blur md:grid-cols-3 md:p-8">
                {[
                  {
                    title: 'Embedded collaboration',
                    description: 'Work inside your team, systems and delivery rhythm rather than from a distance.',
                  },
                  {
                    title: 'End-to-end execution',
                    description: 'Move from problem framing through design, build, deployment and iteration.',
                  },
                  {
                    title: 'Production outcomes',
                    description: 'Focus engineering effort on business impact, not just ticket completion.',
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-[20px] bg-background-3/80 px-5 py-5 dark:bg-background-7/80">
                    <h2 className="mb-2 text-base font-semibold text-secondary dark:text-accent">{item.title}</h2>
                    <p className="text-secondary/70 dark:text-accent/70 text-sm leading-7">{item.description}</p>
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="what-is-fde-heading">
        <div className="main-container">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-outline-primary">Embedded engineering expertise</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 id="what-is-fde-heading">What Is a Forward Deployed Engineer?</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary/70 dark:text-accent/70">
                  A Forward Deployed Engineer is an experienced technical specialist who works directly within your
                  environment to solve real business and technical problems. They do not simply receive tickets and
                  disappear into a separate delivery queue.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="text-secondary/70 dark:text-accent/70">
                  They understand the problem, work with stakeholders, explore your systems, design the right solution,
                  build the software, integrate with your infrastructure, deploy into production, measure the outcome
                  and iterate with your team.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <div className="rounded-[22px] border border-stroke-1/10 bg-background-3 p-6 dark:bg-background-7">
                  <p className="text-secondary/70 dark:text-accent/70">
                    The result is not generic capacity. It is embedded engineering ownership applied to an important
                    initiative where architecture, delivery speed and production quality all matter.
                  </p>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.4}>
              <div className="dark:bg-background-6 bg-background-3 rounded-[24px] border border-stroke-1/10 p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {embeddedEngineerSteps.map((item, index) => (
                    <div key={item} className="rounded-[18px] bg-white px-5 py-4 dark:bg-background-7">
                      <p className="text-tagline-2 text-primary-500 mb-2">0{index + 1}</p>
                      <p className="text-secondary dark:text-accent font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="comparison-heading">
        <div className="main-container">
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Clear distinction</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="comparison-heading" className="mt-5">
                More Than Extra Engineering Capacity
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mt-4">
                RockScale’s FDE model is not generic staff augmentation. It is embedded engineering ownership focused on
                moving meaningful work into production.
              </p>
            </RevealAnimation>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-stroke-1/10 bg-white dark:bg-background-6">
            <div className="grid grid-cols-1 border-b border-stroke-1/10 md:grid-cols-2">
              <div className="border-b border-stroke-1/10 px-6 py-6 md:border-b-0 md:border-r md:border-stroke-1/10 md:px-8">
                <h3 className="text-heading-6">Traditional Staff Augmentation</h3>
              </div>
              <div className="bg-secondary px-6 py-6 text-white md:px-8">
                <h3 className="text-heading-6 text-white">RockScale Forward Deployed Engineer</h3>
              </div>
            </div>

            {comparisonRows.map((row, index) => (
              <div key={row.traditional} className="grid grid-cols-1 md:grid-cols-2">
                <div
                  className={`px-6 py-5 text-secondary/70 dark:text-accent/70 md:border-r md:border-stroke-1/10 md:px-8 ${
                    index !== comparisonRows.length - 1 ? 'border-b border-stroke-1/10' : ''
                  }`}
                >
                  {row.traditional}
                </div>
                <div
                  className={`bg-secondary/[0.03] px-6 py-5 text-secondary dark:text-accent md:px-8 ${
                    index !== comparisonRows.length - 1 ? 'border-b border-stroke-1/10' : ''
                  }`}
                >
                  {row.forward}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="fde-model-heading">
        <div className="main-container">
          <div className="mx-auto mb-16 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-outline-primary">How the model works</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="fde-model-heading" className="mt-5">
                The RockScale FDE Model
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mt-4">
                We embed experienced engineering capability where the problem actually lives, then work through the full
                journey from understanding to scale.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-4 xl:grid-cols-8">
            {problemToProductionSteps.map((item, index) => (
              <RevealAnimation key={item} delay={0.15 + index * 0.05}>
                <div className="relative h-full rounded-[20px] border border-stroke-1/10 bg-background-3 p-5 text-center dark:bg-background-7">
                  <p className="text-tagline-2 text-primary-500 mb-3">0{index + 1}</p>
                  <h3 className="text-base font-semibold text-secondary dark:text-accent">{item}</h3>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="capabilities-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Capabilities</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="capabilities-heading" className="mt-5">
                What Our Engineers Can Do
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {capabilityItems.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.15 + index * 0.05}>
                <div className="dark:bg-background-6 h-full rounded-[22px] border border-stroke-1/10 bg-white p-6">
                  <p className="text-tagline-2 text-primary-500 mb-3">0{index + 1}</p>
                  <h3 className="mb-3 text-heading-6">{item.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">{item.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="when-to-use-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[820px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-outline-primary">Common triggers</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="when-to-use-heading" className="mt-5">
                When Should You Bring in a Forward Deployed Engineer?
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {scenarioItems.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.15 + index * 0.05}>
                <div className="rounded-[22px] border border-stroke-1/10 bg-white p-6 dark:bg-background-6">
                  <h3 className="mb-3 text-heading-6">{item.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">{item.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-20 lg:py-[100px]" aria-labelledby="embedded-heading">
        <div className="main-container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <div className="space-y-6">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-blur text-ns-yellow">Embedded, not outsourced</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 id="embedded-heading" className="text-white">
                  Your Team. Your Systems. Our Engineering Expertise.
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-white/70">
                  RockScale engineers work inside your existing environment so collaboration is direct, fast and
                  operationally real. The goal is seamless integration, not parallel delivery at a distance.
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="text-white/70">
                  Your engineer should feel like an extension of the team: working through your workflows, shipping
                  into your environment and solving problems in the context of your business.
                </p>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.4}>
              <div className="grid gap-4 sm:grid-cols-2">
                {collaborationEnvironment.map((item) => (
                  <div key={item} className="rounded-[18px] border border-white/10 bg-white/5 px-5 py-4 text-white">
                    {item}
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="tech-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Engineering capabilities</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="tech-heading" className="mt-5">
                Our Engineering Capabilities
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mt-4">
                The service is outcome-focused, but our engineers bring practical depth across modern AI, software, data
                and cloud systems.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {technologyGroups.map((group, index) => (
              <RevealAnimation key={group.title} delay={0.15 + index * 0.05}>
                <div className="rounded-[22px] border border-stroke-1/10 bg-background-3 p-6 dark:bg-background-7">
                  <h3 className="mb-5 text-heading-6">{group.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-stroke-1/20 bg-white px-4 py-2 text-sm text-secondary dark:border-white/10 dark:bg-background-6 dark:text-accent"
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

      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="examples-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-outline-primary">Engagement examples</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="examples-heading" className="mt-5">
                Examples of FDE Engagements
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mt-4">
                These examples illustrate the kinds of work RockScale Forward Deployed Engineers can support. They are
                representative engagement types, not named client case studies.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {engagementExamples.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.15 + index * 0.05}>
                <div className="dark:bg-background-6 rounded-[22px] border border-stroke-1/10 bg-white p-6">
                  <h3 className="mb-3 text-heading-6">{item.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">{item.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="engagement-models-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Flexible engagement</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="engagement-models-heading" className="mt-5">
                Engagement Models
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {engagementModels.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.15 + index * 0.05}>
                <div className="rounded-[22px] border border-stroke-1/10 bg-white p-6 dark:bg-background-6">
                  <p className="text-tagline-2 text-primary-500 mb-3">0{index + 1}</p>
                  <h3 className="mb-3 text-base font-semibold text-secondary dark:text-accent">{item.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">{item.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="collaboration-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-outline-primary">Collaboration model</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="collaboration-heading" className="mt-5">
                How We Work With Your Team
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 mt-4">
                The Forward Deployed Engineer works directly with your team and can draw on RockScale’s wider specialist
                network when the problem needs more depth than one person alone.
              </p>
            </RevealAnimation>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {collaborationModel.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.15 + index * 0.05}>
                <div className="rounded-[22px] border border-stroke-1/10 bg-white p-6 text-center dark:bg-background-6">
                  <p className="text-tagline-2 text-primary-500 mb-3">0{index + 1}</p>
                  <h3 className="mb-3 text-heading-6">{item.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">{item.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="delivery-heading">
        <div className="main-container">
          <div className="mx-auto mb-16 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Delivery process</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="delivery-heading" className="mt-5">
                From Problem to Production
              </h2>
            </RevealAnimation>
          </div>

          <div className="relative mx-auto max-w-[900px]">
            <div className="absolute left-[27px] top-[24px] bottom-[24px] hidden w-px bg-stroke-1/30 dark:bg-white/10 md:block" />
            <div className="space-y-8 md:space-y-12">
              {deliverySteps.map((step, index) => (
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

      <section className="bg-secondary py-16 md:py-20 lg:py-[100px]" aria-labelledby="outcomes-heading">
        <div className="main-container">
          <div className="mx-auto max-w-[900px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur text-ns-yellow">Outcome focused</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="outcomes-heading" className="mt-5 text-white">
                What Outcomes Can Clients Expect?
              </h2>
            </RevealAnimation>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {outcomes.map((item, index) => (
              <RevealAnimation key={item} delay={0.15 + index * 0.05}>
                <div className="rounded-[20px] border border-white/10 bg-white/5 px-6 py-5 text-white">
                  <p className="text-tagline-2 text-ns-yellow mb-2">0{index + 1}</p>
                  <p>{item}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="why-rockscale-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-outline-primary">Why RockScale</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="why-rockscale-heading" className="mt-5">
                Why Companies Choose RockScale
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {differentiators.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.15 + index * 0.05}>
                <div className="rounded-[22px] border border-stroke-1/10 bg-background-3 p-6 dark:bg-background-7">
                  <h3 className="mb-3 text-heading-6">{item.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">{item.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="proof-heading">
        <div className="main-container">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Proof & references</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 id="proof-heading" className="mt-5">
                Technical Proof, Without Fabricated Claims
              </h2>
            </RevealAnimation>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {proofItems.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.15 + index * 0.05}>
                <div className="rounded-[22px] border border-stroke-1/10 bg-white p-6 dark:bg-background-6">
                  <p className="text-tagline-2 text-primary-500 mb-3">{item.label}</p>
                  <h3 className="mb-3 text-heading-6">{item.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">{item.description}</p>
                  <p className="text-secondary/50 dark:text-accent/50 mt-5 text-sm">
                    Illustrative example only. Not presented as a named client project.
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="faq-heading">
        <div className="main-container">
          <div className="mx-auto mb-10 max-w-[750px] space-y-5 text-center md:mb-[70px]">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-green">FAQs</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 id="faq-heading" className="mb-3">
                Frequently Asked Questions
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/60 mx-auto max-w-[600px]">
                Answers to the questions enterprise teams usually ask before embedding engineering support into a live
                initiative.
              </p>
            </RevealAnimation>
          </div>
          <div className="mx-auto max-w-[800px]">
            <Accordion defaultValue="fde-faq-1" className="space-y-6">
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

      <section className="bg-secondary relative overflow-hidden py-16 md:py-20 lg:py-[100px]">
        <div className="main-container">
          <div className="mx-auto max-w-[760px] text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-blur mb-5 text-ns-yellow">Ready to move faster?</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-4 text-white">Have a Complex Problem? Put an Engineer on It.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto mb-8 max-w-[620px] text-white/60">
                Bring experienced AI, software, data and cloud engineering expertise directly into your team and move
                from problem to production faster.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <LinkButton href="/contact-us" className="btn btn-white btn-md w-[85%] hover:btn-primary sm:w-auto">
                  Deploy a RockScale Engineer
                </LinkButton>
                <LinkButton
                  href="/contact-us"
                  className="btn btn-md w-[85%] border border-white/20 text-white hover:border-white/60 sm:w-auto"
                >
                  Talk to Our Team
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

export default ForwardDeployedEngineerPageContent;