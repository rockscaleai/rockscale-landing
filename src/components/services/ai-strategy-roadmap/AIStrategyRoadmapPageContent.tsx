'use client';

import Link from 'next/link';
import Navbar from '@/components/shared/navbar/Navbar';
import Footer from '@/components/shared/footer/Footer';
import AIStrategyRoadmapHero from '@/components/services/ai-strategy-roadmap/AIStrategyRoadmapHero';

const sectionLabelClass =
  'mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary';
const sectionTitleClass =
  'text-3xl font-bold tracking-tight text-secondary dark:text-white md:text-4xl lg:text-[42px]';
const sectionTextClass = 'text-base leading-8 text-secondary/70 dark:text-white/70 md:text-lg';

const readinessCategories = [
  {
    title: 'Business',
    icon: '01',
    items: ['Goals', 'AI opportunities', 'Expected ROI'],
  },
  {
    title: 'Data',
    icon: '02',
    items: ['Availability', 'Quality', 'Accessibility', 'Governance'],
  },
  {
    title: 'Technology',
    icon: '03',
    items: ['Architecture', 'Infrastructure', 'Existing software', 'Integration capability'],
  },
  {
    title: 'People',
    icon: '04',
    items: ['Technical skills', 'AI literacy', 'Team capacity'],
  },
  {
    title: 'Governance',
    icon: '05',
    items: ['Security', 'Privacy', 'Risk', 'Responsible AI'],
  },
];

const opportunities = [
  'Customer Experience',
  'Operations',
  'Sales',
  'Marketing',
  'Finance',
  'HR',
  'Product',
  'Data',
  'Internal Knowledge',
  'Software Development',
];

const useCases = [
  {
    title: 'Customer Support Copilot',
    description: 'Assist support teams with knowledge retrieval and faster, more consistent response generation.',
  },
  {
    title: 'Document Intelligence',
    description: 'Extract and analyze information from contracts, invoices and high-volume business documents.',
  },
  {
    title: 'AI Sales Assistant',
    description: 'Automate research, summarize accounts and support pipeline execution with AI-driven context.',
  },
  {
    title: 'Knowledge Assistant',
    description: 'Give employees natural-language access to internal company knowledge and operating procedures.',
  },
  {
    title: 'AI Workflow Agent',
    description: 'Automate multi-step operational processes across tools, people and approvals.',
  },
  {
    title: 'Predictive Analytics',
    description: 'Use business data to forecast trends, reduce risk and identify growth opportunities.',
  },
];

const roadmapPhases = [
  {
    phase: 'Phase 1 — Discover',
    description: 'Identify business opportunities and assess AI readiness.',
  },
  {
    phase: 'Phase 2 — Prioritize',
    description: 'Rank opportunities by value, feasibility, risk and effort.',
  },
  {
    phase: 'Phase 3 — Validate',
    description: 'Run focused experiments or proof-of-concepts where needed.',
  },
  {
    phase: 'Phase 4 — Build',
    description: 'Develop high-value production solutions with the right foundation.',
  },
  {
    phase: 'Phase 5 — Deploy',
    description: 'Integrate AI into real workflows, operations and decision-making.',
  },
  {
    phase: 'Phase 6 — Scale',
    description: 'Expand successful initiatives across teams and business units.',
  },
];

const deliverables = [
  'AI Readiness Assessment',
  'AI Opportunity Map',
  'Prioritized Use Cases',
  'AI Architecture Recommendations',
  'Data Readiness Assessment',
  'Technology Recommendations',
  'Build vs Buy Analysis',
  'AI Investment Priorities',
  'Implementation Roadmap',
  'Governance Considerations',
  '90-Day Action Plan',
];

const faqs = [
  {
    question: 'What is an AI strategy?',
    answer:
      'An AI strategy defines how an organization will use artificial intelligence to achieve business objectives, including identifying opportunities, prioritizing use cases and planning implementation.',
  },
  {
    question: 'Why does a business need an AI roadmap?',
    answer:
      'An AI roadmap provides a sequenced plan for developing and deploying AI solutions so teams can move from experimentation to production with clarity and momentum.',
  },
  {
    question: 'How do you identify AI use cases?',
    answer:
      'We assess business processes, pain points and strategic goals to uncover high-value AI opportunities across functions and workflows.',
  },
  {
    question: 'How do you prioritize AI opportunities?',
    answer:
      'We evaluate each opportunity based on business value, technical feasibility, data availability, implementation complexity, risk and time to value.',
  },
  {
    question: 'Can you assess our AI readiness?',
    answer:
      'Yes. We evaluate readiness across business, data, technology, people and governance so you understand current capability and critical gaps.',
  },
  {
    question: 'Can RockScale help us implement the roadmap?',
    answer:
      'Yes. We can continue from strategy into data engineering, AI software development and forward-deployed execution support.',
  },
];

const TheProblemSection = () => (
  <section className="relative overflow-hidden py-20 md:py-28">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(126,87,253,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />
    <div className="main-container">
      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <span className={sectionLabelClass}>The challenge</span>
          <h2 className={sectionTitleClass}>AI is easy to explore. Knowing what to build is where most teams stall.</h2>
          <p className={`${sectionTextClass} mt-6 max-w-2xl`}>
            Organizations often face too many AI tools, too many possible use cases and too little clarity on where real business value lives. The result is scattered experimentation, unclear ROI and initiatives disconnected from strategic priorities.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { value: 'Too many', label: 'tools and vendors to evaluate' },
              { value: 'Unclear', label: 'ROI and business prioritization' },
              { value: 'Hard', label: 'path from pilot to production' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-primary/10 bg-white p-5 shadow-[0_10px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-background-7">
                <p className="text-2xl font-bold text-primary">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-secondary/70 dark:text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-primary/10 bg-white p-7 shadow-[0_20px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-background-7 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">What gets in the way</p>
          <div className="mt-6 space-y-4">
            {[
              'Too many AI tools and possible use cases',
              'Unclear ROI and experimentation without direction',
              'AI projects disconnected from business goals',
              'Poor-quality or inaccessible data',
              'Security and governance concerns',
              'Difficulty moving from PoC to production',
              'Lack of internal AI expertise',
            ].map((item, index) => (
              <div key={item} className="flex items-start gap-4 rounded-2xl bg-primary/5 px-4 py-4 dark:bg-white/5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-secondary/80 dark:text-white/80 md:text-base">{item}</p>
              </div>
            ))}
          </div>
          <p className={`${sectionTextClass} mt-6`}>
            RockScale turns uncertainty into a structured, executable plan — so your organization can move from AI curiosity to strategic implementation.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const WhatAIStrategyMeansToRockScaleSection = () => (
  <section className="py-20 md:py-28">
    <div className="main-container">
      <div className="mb-12 text-center">
        <span className={sectionLabelClass}>What good strategy looks like</span>
        <h2 className={`${sectionTitleClass} mx-auto mt-4 max-w-3xl`}>Strategy that leads somewhere practical</h2>
        <p className={`${sectionTextClass} mx-auto mt-5 max-w-3xl`}>
          For RockScale, strategy is not a slide deck that ends the conversation. It is a decision framework that clarifies where to invest, what to build and how to execute with confidence.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[28px] border border-rose-200/60 bg-gradient-to-br from-rose-50 to-white p-8 dark:border-rose-500/20 dark:from-rose-500/10 dark:to-background-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">Not just</p>
          <div className="mt-6 space-y-4">
            {['Reports', 'Workshops', 'Presentations'].map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl border border-rose-200/60 bg-white/90 px-5 py-4 dark:border-white/10 dark:bg-background-7/80">
                <span className="text-lg text-rose-500">✕</span>
                <p className="text-lg font-medium text-secondary dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-emerald-200/60 bg-gradient-to-br from-emerald-50 to-white p-8 dark:border-emerald-500/20 dark:from-emerald-500/10 dark:to-background-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">Instead, the outcome should be</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              'Prioritized use cases',
              'Technical direction',
              'Architecture recommendations',
              'Data requirements',
              'Implementation plan',
              'Investment priorities',
              'Execution roadmap',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-emerald-200/60 bg-white/90 px-5 py-4 dark:border-white/10 dark:bg-background-7/80">
                <p className="text-base font-semibold text-secondary dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AIReadinessAssessmentSection = () => (
  <section className="bg-gray-50 py-20 dark:bg-background-8 md:py-28">
    <div className="main-container">
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className={sectionLabelClass}>AI readiness assessment</span>
          <h2 className={`${sectionTitleClass} mt-4`}>Understand where you stand before you build</h2>
        </div>
        <p className={`${sectionTextClass} max-w-xl`}>
          We evaluate the capabilities that determine whether AI initiatives can succeed sustainably — from business clarity and data quality to governance and implementation readiness.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {readinessCategories.map((category) => (
          <div
            key={category.title}
            className="group rounded-[26px] border border-primary/10 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-background-7">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold tracking-[0.2em] text-primary/60">{category.icon}</span>
              <div className="h-10 w-10 rounded-full bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-white" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-secondary dark:text-white">{category.title}</h3>
            <ul className="mt-5 space-y-3">
              {category.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-secondary/70 dark:text-white/70">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AIOpportunityDiscoverySection = () => (
  <section className="py-20 md:py-28">
    <div className="main-container">
      <div className="rounded-[32px] border border-primary/10 bg-gradient-to-br from-primary/[0.08] via-white to-sky-50 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:from-primary/10 dark:via-background-7 dark:to-background-8 md:p-10 lg:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className={sectionLabelClass}>Opportunity discovery</span>
          <h2 className={`${sectionTitleClass} mt-4`}>Find the AI opportunities worth pursuing</h2>
          <p className={`${sectionTextClass} mt-5`}>
            RockScale helps uncover high-impact AI opportunities across your business and evaluate them against the variables that matter most: value, feasibility, data readiness, risk and time to value.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {opportunities.map((area) => (
            <div
              key={area}
              className="rounded-full border border-primary/15 bg-white px-5 py-3 text-sm font-semibold text-secondary shadow-sm dark:border-white/10 dark:bg-background-7 dark:text-white md:text-base">
              {area}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const PrioritizationFrameworkSection = () => (
  <section className="py-20 md:py-28">
    <div className="main-container">
      <div className="mb-12 text-center">
        <span className={sectionLabelClass}>Prioritization matrix</span>
        <h2 className={`${sectionTitleClass} mx-auto mt-4 max-w-3xl`}>Not every AI idea deserves to be built</h2>
        <p className={`${sectionTextClass} mx-auto mt-5 max-w-3xl`}>
          Our prioritization framework helps you focus on initiatives that balance strategic value with realistic execution effort.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {[
          {
            title: 'Quick Wins',
            subtitle: 'High value / Low complexity',
            note: 'Start here to prove momentum and capture measurable results early.',
            className: 'from-emerald-100 to-white text-emerald-700 dark:from-emerald-500/20 dark:to-background-7 dark:text-emerald-300',
          },
          {
            title: 'Strategic Bets',
            subtitle: 'High value / High complexity',
            note: 'Plan carefully and invest deliberately when the payoff is transformative.',
            className: 'from-sky-100 to-white text-sky-700 dark:from-sky-500/20 dark:to-background-7 dark:text-sky-300',
          },
          {
            title: 'Experiments',
            subtitle: 'Low value / Low complexity',
            note: 'Test selectively to learn fast without overcommitting resources.',
            className: 'from-amber-100 to-white text-amber-700 dark:from-amber-500/20 dark:to-background-7 dark:text-amber-300',
          },
          {
            title: 'Avoid',
            subtitle: 'Low value / High complexity',
            note: 'Do not prioritize unless assumptions change significantly.',
            className: 'from-rose-100 to-white text-rose-700 dark:from-rose-500/20 dark:to-background-7 dark:text-rose-300',
          },
        ].map((item) => (
          <div
            key={item.title}
            className={`rounded-[28px] border border-primary/10 bg-gradient-to-br p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)] dark:border-white/10 ${item.className}`}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-80">Priority zone</p>
            <h3 className="mt-4 text-3xl font-bold">{item.title}</h3>
            <p className="mt-2 text-base font-medium text-secondary/80 dark:text-white/80">{item.subtitle}</p>
            <p className="mt-5 max-w-md text-sm leading-7 text-secondary/70 dark:text-white/70">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AIUseCaseExamplesSection = () => (
  <section className="bg-gray-50 py-20 dark:bg-background-8 md:py-28">
    <div className="main-container">
      <div className="mb-12 text-center">
        <span className={sectionLabelClass}>Illustrative use cases</span>
        <h2 className={`${sectionTitleClass} mx-auto mt-4 max-w-3xl`}>Examples of AI initiatives that create real business value</h2>
        <p className={`${sectionTextClass} mx-auto mt-5 max-w-3xl`}>
          These examples show the kinds of opportunities we help businesses explore, validate and bring into production.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {useCases.map((useCase, index) => (
          <div
            key={useCase.title}
            className="group rounded-[28px] border border-primary/10 bg-white p-7 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-background-7">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold tracking-[0.2em] text-primary/60">0{index + 1}</span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Use case</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-secondary dark:text-white">{useCase.title}</h3>
            <p className="mt-4 text-base leading-8 text-secondary/70 dark:text-white/70">{useCase.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AIArchitectureStrategySection = () => (
  <section className="py-20 md:py-28">
    <div className="main-container">
      <div className="mb-12 text-center">
        <span className={sectionLabelClass}>Architecture strategy</span>
        <h2 className={`${sectionTitleClass} mx-auto mt-4 max-w-3xl`}>Design the architecture before you build</h2>
        <p className={`${sectionTextClass} mx-auto mt-5 max-w-3xl`}>
          We map the full AI system — from business problem to infrastructure — to ensure your roadmap is technically sound, scalable and implementation-ready.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          'Business Problem',
          'AI Application',
          'AI Orchestration',
          'Models',
          'Business Data',
          'Enterprise Systems',
          'Cloud Infrastructure',
        ].map((item) => (
          <div
            key={item}
            className="rounded-[24px] border border-primary/10 bg-gradient-to-br from-white to-primary/[0.04] px-6 py-8 text-center shadow-[0_12px_40px_rgba(15,23,42,0.05)] dark:border-white/10 dark:from-background-7 dark:to-primary/10">
            <p className="text-lg font-semibold text-secondary dark:text-white">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DataReadinessSection = () => (
  <section className="py-20 md:py-28">
    <div className="main-container">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="rounded-[30px] bg-secondary p-8 text-white shadow-[0_18px_60px_rgba(15,23,42,0.16)] dark:bg-background-7 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Data foundation</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Your AI strategy is only as strong as your data</h2>
          <p className="mt-5 text-base leading-8 text-white/75 md:text-lg">
            If the data foundation is weak, even great AI ideas will struggle. We assess whether the right data exists, whether it can be accessed and whether the supporting architecture is ready for production AI systems.
          </p>
          <Link
            href="/services/data-engineering-analytics"
            className="mt-8 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-secondary">
            Explore Data Engineering & Analytics
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            'Data availability and quality',
            'Data accessibility and architecture',
            'Data governance and pipelines',
            'Relevant knowledge sources',
            'Integration requirements',
            'Foundational data engineering work',
          ].map((item) => (
            <div
              key={item}
              className="rounded-[24px] border border-primary/10 bg-white px-6 py-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-background-7">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 rounded-full bg-primary" />
                <p className="text-base font-medium leading-7 text-secondary dark:text-white">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const BuildVsBuySection = () => (
  <section className="bg-gray-50 py-20 dark:bg-background-8 md:py-28">
    <div className="main-container">
      <div className="mb-12 text-center">
        <span className={sectionLabelClass}>Decision framework</span>
        <h2 className={`${sectionTitleClass} mx-auto mt-4 max-w-3xl`}>Build, buy, integrate or customize?</h2>
        <p className={`${sectionTextClass} mx-auto mt-5 max-w-3xl`}>
          Making the right product and platform decision is a key part of your roadmap. We evaluate options based on fit, cost, speed and long-term leverage.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: 'Build',
            description: 'Create custom software when the problem requires differentiated capability.',
          },
          {
            title: 'Buy',
            description: 'Choose an existing AI product when it already solves the problem well.',
          },
          {
            title: 'Integrate',
            description: 'Connect existing tools to your systems and workflows for faster adoption.',
          },
          {
            title: 'Customize',
            description: 'Extend an existing solution when some adaptation creates better business fit.',
          },
        ].map((option, index) => (
          <div
            key={option.title}
            className="rounded-[28px] border border-primary/10 bg-white p-7 shadow-[0_16px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-background-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary">
              {index + 1}
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-secondary dark:text-white">{option.title}</h3>
            <p className="mt-4 text-base leading-8 text-secondary/70 dark:text-white/70">{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ModelTechnologyStrategySection = () => (
  <section className="py-20 md:py-28">
    <div className="main-container">
      <div className="rounded-[32px] border border-primary/10 bg-gradient-to-br from-secondary to-secondary/90 p-8 text-white shadow-[0_20px_80px_rgba(15,23,42,0.18)] dark:border-white/10 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-semibold text-white/90">
            Technology strategy
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl lg:text-[42px]">Choose technology based on the problem, not the hype</h2>
          <p className="mt-5 text-base leading-8 text-white/75 md:text-lg">
            We provide technology-agnostic recommendations based on model capability, cost, latency, privacy, reliability and scalability.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {['OpenAI', 'Anthropic', 'Google Gemini', 'Mistral', 'Open-source models', 'Cloud platforms'].map((tech) => (
            <div key={tech} className="rounded-2xl border border-white/10 bg-white/10 px-4 py-5 text-center backdrop-blur-sm">
              <p className="text-sm font-semibold text-white md:text-base">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const RoadmapSection = () => (
  <section className="py-20 md:py-28">
    <div className="main-container">
      <div className="mb-14 text-center">
        <span className={sectionLabelClass}>Execution roadmap</span>
        <h2 className={`${sectionTitleClass} mx-auto mt-4 max-w-3xl`}>From AI ideas to an executable roadmap</h2>
        <p className={`${sectionTextClass} mx-auto mt-5 max-w-3xl`}>
          We translate strategy into a structured path that moves your organization from discovery to deployment and scale.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-primary/20 md:block" />
        <div className="grid gap-6">
          {roadmapPhases.map((item, index) => (
            <div key={item.phase} className="grid gap-4 md:grid-cols-[70px_1fr] md:gap-6">
              <div className="hidden md:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
              </div>
              <div className="rounded-[28px] border border-primary/10 bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-background-7">
                <div className="md:hidden mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold text-secondary dark:text-white">{item.phase}</h3>
                <p className="mt-3 text-base leading-8 text-secondary/70 dark:text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const StrategyDeliverablesSection = () => (
  <section className="bg-gray-50 py-20 dark:bg-background-8 md:py-28">
    <div className="main-container">
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className={sectionLabelClass}>Deliverables</span>
          <h2 className={`${sectionTitleClass} mt-4`}>What you walk away with</h2>
        </div>
        <p className={`${sectionTextClass} max-w-xl`}>
          Every engagement is designed to produce implementation-ready outputs, not generic recommendations.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {deliverables.map((deliverable) => (
          <div
            key={deliverable}
            className="flex items-center gap-4 rounded-[22px] border border-primary/10 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-background-7">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">✓</span>
            <p className="text-base font-semibold text-secondary dark:text-white">{deliverable}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const NinetyDayAIPlanSection = () => (
  <section id="90-day-ai-plan" className="py-20 md:py-28">
    <div className="main-container">
      <div className="mb-12 text-center">
        <span className={sectionLabelClass}>90-day action plan</span>
        <h2 className={`${sectionTitleClass} mx-auto mt-4 max-w-3xl`}>Know what to do in the next 90 days</h2>
        <p className={`${sectionTextClass} mx-auto mt-5 max-w-3xl`}>
          A practical roadmap should create momentum immediately. We break the first 90 days into focused stages that turn strategy into action.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: 'Days 1–30',
            items: ['Assess', 'Discover', 'Prioritize'],
            accent: 'from-primary to-[#8B5CF6]',
          },
          {
            title: 'Days 31–60',
            items: ['Validate', 'Prototype', 'Prepare data and architecture'],
            accent: 'from-sky-500 to-primary',
          },
          {
            title: 'Days 61–90',
            items: ['Build', 'Deploy', 'Measure'],
            accent: 'from-emerald-500 to-sky-500',
          },
        ].map((period) => (
          <div
            key={period.title}
            className="overflow-hidden rounded-[30px] border border-primary/10 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-background-7">
            <div className={`h-2 w-full bg-gradient-to-r ${period.accent}`} />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-secondary dark:text-white">{period.title}</h3>
              <ul className="mt-6 space-y-4">
                {period.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base font-medium text-secondary/80 dark:text-white/80">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FromStrategyToBuildSection = () => (
  <section className="py-20 md:py-28">
    <div className="main-container">
      <div className="rounded-[32px] border border-primary/10 bg-gradient-to-br from-primary/[0.08] via-white to-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:from-primary/10 dark:via-background-7 dark:to-background-8 md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className={sectionLabelClass}>From strategy to execution</span>
          <h2 className={`${sectionTitleClass} mt-4`}>Strategy shouldn&apos;t end with a slide deck</h2>
          <p className={`${sectionTextClass} mt-5`}>
            Once priorities are clear, RockScale can continue directly into implementation support across data, software and embedded engineering execution.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {[
            { title: 'Strategy', link: '/services/ai-strategy-roadmap' },
            { title: 'Data Engineering', link: '/services/data-engineering-analytics' },
            { title: 'AI Software Development', link: '/services/ai-powered-software-development' },
            { title: 'Forward Deployed Engineering', link: '/services/forward-deployed-engineer' },
          ].map((service) => (
            <Link
              key={service.title}
              href={service.link}
              className="rounded-[24px] border border-primary/10 bg-white px-6 py-8 text-center shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.09)] dark:border-white/10 dark:bg-background-7">
              <p className="text-lg font-semibold text-secondary dark:text-white">{service.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const WhyRockScaleSection = () => (
  <section className="bg-gray-50 py-20 dark:bg-background-8 md:py-28">
    <div className="main-container">
      <div className="mb-12 text-center">
        <span className={sectionLabelClass}>Why RockScale</span>
        <h2 className={`${sectionTitleClass} mx-auto mt-4 max-w-3xl`}>Why teams choose RockScale for AI strategy</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[
          {
            title: 'Engineering-led strategy',
            description: 'Our recommendations are shaped by people who design and build production AI systems.',
          },
          {
            title: 'Practical and actionable',
            description: 'We focus on decisions that can be implemented and tied to business outcomes.',
          },
          {
            title: 'Technology-agnostic',
            description: 'We recommend what fits your problem best, not what serves a vendor agenda.',
          },
          {
            title: 'Data-aware from day one',
            description: 'We account for the data reality required to support sustainable AI systems.',
          },
          {
            title: 'Production-focused',
            description: 'We think beyond pilots and frame the path to live, scalable systems.',
          },
          {
            title: 'End-to-end execution support',
            description: 'Strategy can continue directly into data, software and embedded implementation.',
          },
        ].map((item, index) => (
          <div
            key={item.title}
            className="rounded-[28px] border border-primary/10 bg-white p-7 shadow-[0_16px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-background-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary">
              {index + 1}
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-secondary dark:text-white">{item.title}</h3>
            <p className="mt-4 text-base leading-8 text-secondary/70 dark:text-white/70">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudiesSection = () => (
  <section className="py-20 md:py-28">
    <div className="main-container">
      <div className="rounded-[32px] border border-primary/10 bg-secondary px-8 py-12 text-center text-white shadow-[0_20px_80px_rgba(15,23,42,0.18)] dark:border-white/10 md:px-12">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-semibold text-white/90">
          Proof in practice
        </span>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">AI strategy case studies</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
          Explore how RockScale helps organizations turn AI ambition into focused execution and measurable outcomes.
        </p>
        <Link
          href="/case-studies"
          className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-secondary transition hover:bg-primary hover:text-white">
          View all case studies
        </Link>
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section className="py-20 md:py-28">
    <div className="main-container">
      <div className="mb-12 text-center">
        <span className={sectionLabelClass}>FAQs</span>
        <h2 className={`${sectionTitleClass} mx-auto mt-4 max-w-3xl`}>Frequently asked questions</h2>
      </div>

      <div className="mx-auto grid max-w-4xl gap-5">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className="rounded-[26px] border border-primary/10 bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-background-7">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-secondary dark:text-white">{faq.question}</h3>
                <p className="mt-3 text-base leading-8 text-secondary/70 dark:text-white/70">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="pb-20 pt-10 md:pb-28">
    <div className="main-container">
      <div className="relative overflow-hidden rounded-[36px] border border-primary/10 bg-gradient-to-r from-primary via-[#7E57FD] to-sky-500 px-8 py-14 text-center text-white shadow-[0_24px_100px_rgba(126,87,253,0.28)] md:px-12 md:py-16">
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-white/90">
            Ready to move?
          </span>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl lg:text-[44px]">Know where AI can take your business</h2>
          <p className="mt-5 text-base leading-8 text-white/80 md:text-lg">
            Let&apos;s identify the opportunities worth pursuing, build a practical roadmap and create a clear path from AI strategy to production.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-secondary transition hover:bg-secondary hover:text-white">
              Build Your AI Roadmap
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10">
              Talk to RockScale
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AIStrategyRoadmapPageContent = () => {
  return (
    <main className="overflow-hidden bg-white dark:bg-background-9">
      <Navbar />
      <AIStrategyRoadmapHero />
      <TheProblemSection />
      <WhatAIStrategyMeansToRockScaleSection />
      <AIReadinessAssessmentSection />
      <AIOpportunityDiscoverySection />
      <PrioritizationFrameworkSection />
      <AIUseCaseExamplesSection />
      <AIArchitectureStrategySection />
      <DataReadinessSection />
      <BuildVsBuySection />
      <ModelTechnologyStrategySection />
      <RoadmapSection />
      <StrategyDeliverablesSection />
      <NinetyDayAIPlanSection />
      <FromStrategyToBuildSection />
      <WhyRockScaleSection />
      <CaseStudiesSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default AIStrategyRoadmapPageContent;
