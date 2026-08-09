'use client';

import Link from 'next/link';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import ExecHero from '@/components/services/executive-ai-training/ExecHero';

const sectionLabelClass =
  'mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary';
const sectionTitleClass =
  'text-3xl font-bold tracking-tight text-secondary dark:text-white md:text-4xl lg:text-[42px]';
const sectionTextClass = 'text-base leading-8 text-secondary/70 dark:text-white/70 md:text-lg';

const knowledgeAreas = [
  {
    title: 'AI Fundamentals',
    description: 'Understand modern AI, LLMs, generative AI and AI agents without needing to become engineers.',
  },
  {
    title: 'Business Value',
    description: 'Identify where AI can improve revenue, productivity, customer experience and operations.',
  },
  {
    title: 'AI Strategy',
    description: 'Understand how to create an AI roadmap aligned with business objectives.',
  },
  {
    title: 'AI Investment',
    description: 'Evaluate where to invest, what to build and what to buy.',
  },
  {
    title: 'Data',
    description: 'Understand why data quality, infrastructure and access matter to AI.',
  },
  {
    title: 'AI Risk',
    description: 'Understand privacy, security, hallucinations, reliability and governance.',
  },
  {
    title: 'AI Adoption',
    description: 'Understand how AI changes workflows, roles and organizational processes.',
  },
  {
    title: 'Competitive Advantage',
    description: 'Identify where AI can create differentiation rather than simply improve productivity.',
  },
];

const businessLens = [
  {
    title: 'Revenue',
    items: ['New products', 'Personalization', 'Sales intelligence', 'New services'],
  },
  {
    title: 'Productivity',
    items: ['Automation', 'AI copilots', 'Knowledge systems', 'Workflow optimization'],
  },
  {
    title: 'Customer Experience',
    items: ['AI assistants', 'Personalization', 'Faster support', 'Intelligent interfaces'],
  },
  {
    title: 'Operations',
    items: ['Process automation', 'Document processing', 'Decision support', 'Operational intelligence'],
  },
  {
    title: 'Product',
    items: ['AI-powered features', 'AI-native products', 'Intelligent workflows'],
  },
];

const aiLandscape = [
  'Foundation models',
  'LLMs',
  'AI agents',
  'AI copilots',
  'RAG',
  'AI automation',
  'Multimodal AI',
  'Open-source models',
  'AI infrastructure',
  'AI applications',
];

const investmentAreas = [
  'Expected business value',
  'Implementation cost',
  'Infrastructure cost',
  'AI model costs',
  'Integration complexity',
  'Employee adoption',
  'Maintenance',
  'Risk',
  'Time to value',
  'Long-term scalability',
];

const governanceAreas = [
  {
    title: 'Data Privacy',
    description: 'Understand what organizational information can safely be used with AI systems.',
  },
  {
    title: 'Security',
    description: 'Understand common security considerations when introducing AI.',
  },
  {
    title: 'Reliability',
    description: 'Understand hallucinations, model limitations and the importance of evaluation.',
  },
  {
    title: 'Governance',
    description: 'Establish appropriate policies and accountability.',
  },
  {
    title: 'Human Oversight',
    description: 'Determine where human review should remain part of the workflow.',
  },
  {
    title: 'Responsible Adoption',
    description: 'Create practical guidelines for employees and teams.',
  },
];

const programModules = [
  ['Module 01 — AI Foundations', 'What modern AI can and cannot do.'],
  ['Module 02 — AI & Your Business', 'Identify where AI could affect the organization’s products, customers and operations.'],
  ['Module 03 — AI Opportunities', 'Discover and prioritize valuable use cases.'],
  ['Module 04 — AI Strategy', 'Understand how to build an AI roadmap.'],
  ['Module 05 — AI Investment', 'Evaluate build, buy and integration decisions.'],
  ['Module 06 — AI Risk', 'Understand privacy, security, governance and responsible adoption.'],
  ['Module 07 — AI Adoption', 'Prepare teams, workflows and operating models for AI.'],
  ['Module 08 — Executive Action Plan', 'Define the organization’s next steps.'],
];

const formats = [
  {
    title: 'Executive Briefing',
    description: 'A focused session introducing leadership teams to the current AI landscape and business implications.',
  },
  {
    title: 'Executive Workshop',
    description: 'A practical workshop focused on AI opportunities, strategy and decision-making.',
  },
  {
    title: 'AI Strategy Session',
    description: 'A deeper working session focused on identifying and prioritizing AI opportunities.',
  },
  {
    title: 'Leadership Program',
    description: 'A structured multi-session program covering AI strategy, investment, governance and adoption.',
  },
  {
    title: 'Board / Leadership Session',
    description: 'A concise executive-level briefing focused on AI’s strategic implications for the organization.',
  },
];

const outcomes = [
  ['AI Literacy', 'A shared understanding of modern AI.'],
  ['Strategic Clarity', 'A clearer view of where AI can create value.'],
  ['Prioritized Opportunities', 'A shortlist of AI opportunities worth exploring.'],
  ['Better Decisions', 'A framework for evaluating AI investments.'],
  ['Risk Awareness', 'A better understanding of AI risks and governance.'],
  ['Action Plan', 'Clear next steps for the organization.'],
];

const audience = ['CEOs', 'Founders', 'CTOs', 'CIOs', 'COOs', 'CFOs', 'Business Unit Leaders', 'Product Leaders', 'Technology Leaders', 'Board Members'];

const faqs = [
  {
    question: 'Who is Executive AI Training designed for?',
    answer: 'It is designed for CEOs, founders, CTOs, CIOs, COOs, CFOs, business leaders and senior executives responsible for AI-related decisions.',
  },
  {
    question: 'Does the training require technical knowledge?',
    answer: 'No. The program is executive-focused and explains AI in business terms without requiring engineering expertise.',
  },
  {
    question: 'Is this the same as AI Training for Teams?',
    answer: 'No. Team training focuses on how employees use AI in their work. Executive training focuses on strategy, investment, governance and leadership decisions.',
  },
  {
    question: 'Can the training be customized to our industry?',
    answer: 'Yes. We can tailor examples, use cases and discussion areas to your industry, business model and leadership priorities.',
  },
  {
    question: 'Can you train our entire leadership team?',
    answer: 'Yes. Sessions can be delivered for executive teams, business unit leaders, functional leaders and boards.',
  },
  {
    question: 'Can the session focus on our specific business?',
    answer: 'Yes. We can center the program around your products, operations, opportunities and strategic questions.',
  },
  {
    question: 'Do you cover AI strategy?',
    answer: 'Yes. AI strategy, prioritization and decision frameworks are core parts of the training.',
  },
  {
    question: 'Do you cover AI risks and governance?',
    answer: 'Yes. We cover privacy, security, reliability, governance and responsible adoption considerations.',
  },
  {
    question: 'Can the training include AI opportunity discovery?',
    answer: 'Yes. Workshops can include structured exercises to identify and evaluate high-value AI opportunities.',
  },
  {
    question: 'Can RockScale help implement the opportunities identified during the training?',
    answer: 'Yes. RockScale can support strategy, data readiness, AI software development and forward-deployed execution after training.',
  },
  {
    question: 'How long are executive sessions?',
    answer: 'Duration depends on the format, from concise briefings to multi-session leadership programs.',
  },
  {
    question: 'Can the training be delivered remotely or on-site?',
    answer: 'Yes. We can deliver executive AI training remotely, on-site or in a hybrid format.',
  },
];

const ExecIntro = () => (
  <section className="relative overflow-hidden py-20 md:py-28">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(126,87,253,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />
    <div className="main-container">
      <div className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div>
          <span className={sectionLabelClass}>The executive AI gap</span>
          <h2 className={sectionTitleClass}>AI Is Moving Faster Than Most Leadership Teams</h2>
          <p className={`${sectionTextClass} mt-6 max-w-2xl`}>
            Executives are increasingly expected to make decisions about AI investments, tools, vendors, automation,
            data infrastructure, talent, governance, security, product strategy and competitive positioning. But many
            leadership teams still lack a shared understanding of what modern AI can realistically do.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { value: 'More', label: 'AI decisions at the leadership level' },
              { value: 'Less', label: 'clarity on where value actually exists' },
              { value: 'Higher', label: 'risk from poorly framed initiatives' },
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
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/80">What this gap creates</p>
          <div className="mt-6 space-y-4">
            {[
              'Investing in the wrong tools',
              'Running disconnected AI experiments',
              'Missing valuable opportunities',
              'Underestimating implementation complexity',
              'Failing to prepare employees',
              'Creating unnecessary AI risk',
            ].map((item, index) => (
              <div key={item} className="flex items-start gap-4 rounded-2xl bg-primary/5 px-4 py-4 dark:bg-white/5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-secondary/80 dark:text-white/80 md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ExecGrid = () => (
  <section className="bg-gray-50 py-20 dark:bg-background-8 md:py-28">
    <div className="main-container">
      <div className="mb-12 text-center">
        <span className={sectionLabelClass}>What executives need to understand</span>
        <h2 className={`${sectionTitleClass} mx-auto mt-4 max-w-3xl`}>The AI Knowledge Every Executive Team Needs</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {knowledgeAreas.map((item, index) => (
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

const BusinessLens = () => (
  <section className="py-20 md:py-28">
    <div className="main-container">
      <div className="mb-12 text-center">
        <span className={sectionLabelClass}>AI for business leaders</span>
        <h2 className={`${sectionTitleClass} mx-auto mt-4 max-w-3xl`}>AI Through a Business Lens</h2>
        <p className={`${sectionTextClass} mx-auto mt-5 max-w-3xl`}>
          Executive AI education should explain AI in terms of revenue, productivity, customer experience,
          operations and product strategy — not just technology.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {businessLens.map((item) => (
          <div
            key={item.title}
            className="rounded-[28px] border border-primary/10 bg-white p-7 shadow-[0_16px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-background-7">
            <h3 className="text-2xl font-semibold text-secondary dark:text-white">{item.title}</h3>
            <ul className="mt-5 space-y-3">
              {item.items.map((entry) => (
                <li key={entry} className="flex items-start gap-3 text-sm leading-7 text-secondary/70 dark:text-white/70">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <span>{entry}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Landscape = () => (
  <section className="py-20 md:py-28">
    <div className="main-container">
      <div className="rounded-[32px] border border-primary/10 bg-gradient-to-br from-primary/[0.08] via-white to-sky-50 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:from-primary/10 dark:via-background-7 dark:to-background-8 md:p-10 lg:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className={sectionLabelClass}>Understanding the AI landscape</span>
          <h2 className={`${sectionTitleClass} mt-4`}>Know What’s Real, What’s Useful and What’s Hype</h2>
          <p className={`${sectionTextClass} mt-5`}>
            We explain the current AI ecosystem in executive-friendly language so leaders have enough context to make
            informed decisions without turning the training into a technical implementation course.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {aiLandscape.map((area) => (
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

const StrategyDiscovery = () => (
  <section className="py-20 md:py-28">
    <div className="main-container">
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <span className={sectionLabelClass}>AI strategy & use case discovery</span>
          <h2 className={`${sectionTitleClass} mt-4`}>Find the AI Opportunities That Matter</h2>
        </div>
        <p className={`${sectionTextClass} max-w-xl`}>
          Executives need a practical way to evaluate AI opportunities based on business value, feasibility, data
          availability, cost, risk, time to value and strategic importance.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {[
          {
            title: 'Quick Wins',
            subtitle: 'High value / Low complexity',
            note: 'Use these to create early momentum and practical proof of value.',
            className: 'from-emerald-100 to-white text-emerald-700 dark:from-emerald-500/20 dark:to-background-7 dark:text-emerald-300',
          },
          {
            title: 'Strategic Bets',
            subtitle: 'High value / High complexity',
            note: 'These deserve structured investment and a stronger roadmap.',
            className: 'from-sky-100 to-white text-sky-700 dark:from-sky-500/20 dark:to-background-7 dark:text-sky-300',
          },
          {
            title: 'Experiments',
            subtitle: 'Low value / Low complexity',
            note: 'Useful for selective learning, but not always investment priorities.',
            className: 'from-amber-100 to-white text-amber-700 dark:from-amber-500/20 dark:to-background-7 dark:text-amber-300',
          },
          {
            title: 'Avoid',
            subtitle: 'Low value / High complexity',
            note: 'Do not prioritize unless assumptions or business context change.',
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

      <div className="mt-10 text-center">
        <Link
          href="/services/ai-strategy-roadmap"
          className="inline-flex rounded-full border border-primary/20 bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:bg-secondary">
          Explore AI Strategy & Roadmap
        </Link>
      </div>
    </div>
  </section>
);

const BuildBuyIntegrate = () => (
  <section className="bg-gray-50 py-20 dark:bg-background-8 md:py-28">
    <div className="main-container">
      <div className="mb-12 text-center">
        <span className={sectionLabelClass}>Decision-making</span>
        <h2 className={`${sectionTitleClass} mx-auto mt-4 max-w-3xl`}>Know When to Build, Buy or Integrate</h2>
      </div>
