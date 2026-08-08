'use client';

import Link from 'next/link';
import Navbar from '@/components/shared/navbar/Navbar';
import Footer from '@/components/shared/footer/Footer';
import AIStrategyRoadmapHero from '@/components/services/ai-strategy-roadmap/AIStrategyRoadmapHero';

const TheProblemSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-secondary dark:text-white">
        AI Is Easy to Experiment With. Knowing What to Build Is Hard.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg text-secondary/70 dark:text-white/70">
            Organizations often grapple with a plethora of AI tools and an overwhelming number of possible use cases, making it difficult to discern true value and clear ROI. Teams experiment without clear direction, leading to AI projects disconnected from core business goals.
          </p>
        </div>
        <div>
          <ul className="list-disc list-inside space-y-4 text-secondary/70 dark:text-white/70 text-lg">
            <li>Too many AI tools and use cases</li>
            <li>Unclear ROI and experimentation without direction</li>
            <li>AI projects disconnected from business goals</li>
            <li>Poor-quality or inaccessible data</li>
            <li>Security and governance concerns</li>
            <li>Difficulty moving from PoC to production</li>
            <li>Lack of internal AI expertise</li>
          </ul>
          <p className="mt-8 text-lg text-secondary/70 dark:text-white/70">
            RockScale transforms this uncertainty into a structured, executable plan, guiding you from chaotic experimentation to strategic implementation.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const WhatAIStrategyMeansToRockScaleSection = () => (
  <section className="py-16 md:py-24 bg-gray-50 dark:bg-background-8">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary dark:text-white">
        Strategy That Leads Somewhere
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-secondary dark:text-white">Not Just:</h3>
          <ul className="list-disc list-inside space-y-2 text-secondary/70 dark:text-white/70 text-lg">
            <li>Reports</li>
            <li>Workshops</li>
            <li>Presentations</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-secondary dark:text-white">Instead, the Outcome Should Be:</h3>
          <ul className="list-disc list-inside space-y-2 text-primary text-lg font-semibold">
            <li>Prioritized use cases</li>
            <li>Technical direction</li>
            <li>Architecture recommendations</li>
            <li>Data requirements</li>
            <li>Implementation plan</li>
            <li>Investment priorities</li>
            <li>Execution roadmap</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const AIReadinessAssessmentSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary dark:text-white">
        Understand Where You Stand Before You Build
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Business", items: ["Goals", "AI opportunities", "Expected ROI"] },
          { title: "Data", items: ["Availability", "Quality", "Accessibility", "Governance"] },
          { title: "Technology", items: ["Architecture", "Infrastructure", "Existing software", "Integration capability"] },
          { title: "People", items: ["Technical skills", "AI literacy", "Team capacity"] },
          { title: "Governance", items: ["Security", "Privacy", "Risk", "Responsible AI"] },
        ].map((category) => (
          <div key={category.title} className="bg-white dark:bg-background-7 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-3 text-primary">{category.title}</h4>
            <ul className="list-disc list-inside text-secondary/70 dark:text-white/70">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AIOpportunityDiscoverySection = () => (
  <section className="py-16 md:py-24 bg-gray-50 dark:bg-background-8">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary dark:text-white">
        Find the AI Opportunities Worth Pursuing
      </h2>
      <p className="text-lg text-center text-secondary/70 dark:text-white/70 mb-12 max-w-3xl mx-auto">
        RockScale helps identify high-impact AI opportunities across your organization, ensuring alignment with strategic objectives.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {["Customer Experience", "Operations", "Sales", "Marketing", "Finance", "HR", "Product", "Data", "Internal Knowledge", "Software Development"].map((area) => (
          <div key={area} className="bg-white dark:bg-background-7 p-4 rounded-lg shadow-sm text-center">
            <p className="text-lg font-semibold text-primary">{area}</p>
          </div>
        ))}
      </div>
      <p className="text-lg text-center text-secondary/70 dark:text-white/70 mt-12">
        Each opportunity is rigorously evaluated based on business value, technical feasibility, data availability, implementation complexity, risk, and time to value.
      </p>
    </div>
  </section>
);

const PrioritizationFrameworkSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary dark:text-white">
        Not Every AI Idea Deserves to Be Built
      </h2>
      <p className="text-lg text-center text-secondary/70 dark:text-white/70 mb-12 max-w-3xl mx-auto">
        Our prioritization matrix helps you focus on AI initiatives that deliver maximum impact with feasible effort.
      </p>
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        <div className="bg-green-100 dark:bg-green-900/30 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-green-700 dark:text-green-300">Quick Wins</h3>
          <p className="text-secondary/80 dark:text-white/80">High value / Low complexity</p>
          <p className="text-sm text-secondary/60 dark:text-white/60 mt-2">Build first.</p>
        </div>
        <div className="bg-blue-100 dark:bg-blue-900/30 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Strategic Bets</h3>
          <p className="text-secondary/80 dark:text-white/80">High value / High complexity</p>
          <p className="text-sm text-secondary/60 dark:text-white/60 mt-2">Plan carefully.</p>
        </div>
        <div className="bg-yellow-100 dark:bg-yellow-900/30 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">Experiments</h3>
          <p className="text-secondary/80 dark:text-white/80">Low value / Low complexity</p>
          <p className="text-sm text-secondary/60 dark:text-white/60 mt-2">Test selectively.</p>
        </div>
        <div className="bg-red-100 dark:bg-red-900/30 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-red-700 dark:text-red-300">Avoid</h3>
          <p className="text-secondary/80 dark:text-white/80">Low value / High complexity</p>
          <p className="text-sm text-secondary/60 dark:text-white/60 mt-2">Do not prioritize.</p>
        </div>
      </div>
    </div>
  </section>
);

const AIUseCaseExamplesSection = () => (
  <section className="py-16 md:py-24 bg-gray-50 dark:bg-background-8">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary dark:text-white">
        AI Use Case Examples
      </h2>
      <p className="text-lg text-center text-secondary/70 dark:text-white/70 mb-12 max-w-3xl mx-auto">
        Explore practical applications of AI that can drive tangible business value. These are illustrative examples, not guaranteed solutions for every business.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Customer Support Copilot", description: "Assist support teams with knowledge retrieval and response generation." },
          { title: "Document Intelligence", description: "Extract and analyze information from contracts, invoices and business documents." },
          { title: "AI Sales Assistant", description: "Automate research, summarize customer information and support sales workflows." },
          { title: "Knowledge Assistant", description: "Give employees natural-language access to internal company knowledge." },
          { title: "AI Workflow Agent", description: "Automate multi-step operational processes." },
          { title: "Predictive Analytics", description: "Use business data to forecast trends and identify opportunities." },
        ].map((useCase) => (
          <div key={useCase.title} className="bg-white dark:bg-background-7 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-primary">{useCase.title}</h3>
            <p className="text-secondary/70 dark:text-white/70">{useCase.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AIArchitectureStrategySection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary dark:text-white">
        Design the Architecture Before You Build
      </h2>
      <p className="text-lg text-center text-secondary/70 dark:text-white/70 mb-12 max-w-3xl mx-auto">
        RockScale evaluates the critical components of your AI ecosystem to ensure a robust and scalable foundation.
      </p>
      <div className="flex flex-col items-center space-y-4 text-lg font-medium text-primary">
        {["Business Problem", "AI Application", "AI Orchestration", "Models", "Business Data", "Enterprise Systems", "Cloud Infrastructure"].map((item, idx, arr) => (
          <div key={item} className="flex flex-col items-center">
            <p className="bg-primary/10 dark:bg-primary/20 px-6 py-3 rounded-lg">{item}</p>
            {idx < arr.length - 1 && (
              <svg className="w-6 h-6 text-primary my-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DataReadinessSection = () => (
  <section className="py-16 md:py-24 bg-gray-50 dark:bg-background-8">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary dark:text-white">
        Your AI Strategy Is Only as Strong as Your Data
      </h2>
      <p className="text-lg text-center text-secondary/70 dark:text-white/70 mb-12 max-w-3xl mx-auto">
        A successful AI strategy is intrinsically linked to the quality and accessibility of your data.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <ul className="list-disc list-inside space-y-3 text-secondary/70 dark:text-white/70 text-lg">
          <li>Data availability and quality</li>
          <li>Data accessibility and architecture</li>
          <li>Data governance and pipelines</li>
          <li>Relevant knowledge sources</li>
          <li>Integration requirements</li>
        </ul>
        <div>
          <p className="text-secondary/70 dark:text-white/70">
            If gaps exist in your data infrastructure, our roadmap will include the necessary data engineering work to prepare your organization for AI.
          </p>
          <Link href="/services/data-engineering-analytics" className="inline-block mt-4 text-primary hover:underline font-semibold">
            Learn more about our Data Engineering & Analytics services →
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const BuildVsBuySection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary dark:text-white">
        Build, Buy or Integrate?
      </h2>
      <p className="text-lg text-center text-secondary/70 dark:text-white/70 mb-12 max-w-3xl mx-auto">
        Making the right decision between building custom AI solutions, buying existing products, or integrating them is crucial for efficient and impactful AI adoption.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Build", description: "Create custom software when the problem requires differentiated capabilities." },
          { title: "Buy", description: "Use an existing AI product when it already solves the problem effectively." },
          { title: "Integrate", description: "Connect existing AI tools with the organization's systems and workflows." },
          { title: "Customize", description: "Extend an existing solution when some customization is required." },
        ].map((option) => (
          <div key={option.title} className="bg-white dark:bg-background-7 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-3 text-primary">{option.title}</h3>
            <p className="text-secondary/70 dark:text-white/70">{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ModelTechnologyStrategySection = () => (
  <section className="py-16 md:py-24 bg-gray-50 dark:bg-background-8">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary dark:text-white">
        Choose Technology Based on the Problem
      </h2>
      <p className="text-lg text-center text-secondary/70 dark:text-white/70 mb-12 max-w-3xl mx-auto">
        We provide technology-agnostic recommendations, evaluating solutions based on model capability, cost, latency, reliability, privacy, and scalability.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {["OpenAI", "Anthropic", "Google Gemini", "Mistral", "Open-source models", "Cloud platforms"].map((tech) => (
          <div key={tech} className="p-4 bg-white dark:bg-background-7 rounded-lg shadow-sm text-center">
            <p className="text-primary font-semibold">{tech}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const RoadmapSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary dark:text-white">
        From AI Ideas to an Executable Roadmap
      </h2>
      <p className="text-lg text-center text-secondary/70 dark:text-white/70 mb-12 max-w-3xl mx-auto">
        Our structured roadmap guides your AI journey from initial discovery to scalable production.
      </p>
      <div className="max-w-3xl mx-auto">
        {[
          { phase: "Phase 1 — Discover", description: "Identify business opportunities and assess AI readiness." },
          { phase: "Phase 2 — Prioritize", description: "Rank opportunities by value, feasibility, risk and effort." },
          { phase: "Phase 3 — Validate", description: "Build focused experiments or proof-of-concepts where necessary." },
          { phase: "Phase 4 — Build", description: "Develop high-value production solutions." },
          { phase: "Phase 5 — Deploy", description: "Integrate into real business workflows." },
          { phase: "Phase 6 — Scale", description: "Expand successful AI initiatives across the organization." },
        ].map((item, idx) => (
          <div key={item.phase} className={`relative my-6 p-6 border-l-4 border-primary pl-8 ${idx === 0 ? 'mt-0' : ''}`}>
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full" />
            <h3 className="text-xl font-semibold text-primary">{item.phase}</h3>
            <p className="text-secondary/70 dark:text-white/70">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const StrategyDeliverablesSection = () => (
  <section className="py-16 md:py-24 bg-gray-50 dark:bg-background-8">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary dark:text-white">
        What You Walk Away With
      </h2>
      <p className="text-lg text-center text-secondary/70 dark:text-white/70 mb-12 max-w-3xl mx-auto">
        Our deliverables are designed to support actual implementation decisions, providing clear, actionable insights for your AI journey.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {["AI Readiness Assessment", "AI Opportunity Map", "Prioritized Use Cases", "AI Architecture Recommendations", "Data Readiness Assessment", "Technology Recommendations", "Build vs Buy Analysis", "AI Investment Priorities", "Implementation Roadmap", "Governance Considerations", "90-Day Action Plan"].map((deliverable) => (
          <div key={deliverable} className="bg-white dark:bg-background-7 p-4 rounded-lg shadow-md text-center">
            <p className="text-lg font-semibold text-primary">{deliverable}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const NinetyDayAIPlanSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary dark:text-white">
        Know What to Do in the Next 90 Days
      </h2>
      <p className="text-lg text-center text-secondary/70 dark:text-white/70 mb-12 max-w-3xl mx-auto">
        Our practical 90-day action plan provides a clear, actionable path for immediate progress and long-term success.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {[
          { title: "Days 1–30", items: ["Assess", "Discover", "Prioritize"] },
          { title: "Days 31–60", items: ["Validate", "Prototype", "Prepare data and architecture"] },
          { title: "Days 61–90", items: ["Build", "Deploy", "Measure"] },
        ].map((period) => (
          <div key={period.title} className="bg-primary/10 dark:bg-primary/20 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">{period.title}</h3>
            <ul className="list-none space-y-2 text-secondary/80 dark:text-white/80 text-lg">
              {period.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FromStrategyToBuildSection = () => (
  <section className="py-16 md:py-24 bg-gray-50 dark:bg-background-8">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary dark:text-white">
        Strategy Shouldn&#39;t End With a Slide Deck
      </h2>
      <p className="text-lg text-center text-secondary/70 dark:text-white/70 mb-12 max-w-3xl mx-auto">
        Once priorities are established, RockScale can seamlessly continue into implementation, bringing your AI strategy to life.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {[
          { title: "Strategy", link: "/services/ai-strategy-roadmap" },
          { title: "Data Engineering", link: "/services/data-engineering-analytics" },
          { title: "AI Software Development", link: "/services/ai-powered-software-development" },
          { title: "Forward Deployed Engineering", link: "/services/forward-deployed-engineer" },
        ].map((service, idx, arr) => (
          <div key={service.title} className="flex items-center gap-4">
            <Link href={service.link} className="bg-white dark:bg-background-7 p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <p className="text-lg font-semibold text-primary">{service.title}</p>
            </Link>
            {idx < arr.length - 1 && (
              <svg className="w-6 h-6 text-primary hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyRockScaleSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary dark:text-white">
        Why RockScale for AI Strategy?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Engineering-Led Strategy", description: "Our strategy is informed by people who actually build AI systems." },
          { title: "Practical", description: "We focus on decisions that can be implemented and deliver tangible results." },
          { title: "Technology-Agnostic", description: "We recommend technology based on the problem, not vendor partnerships." },
          { title: "Data-Aware", description: "We consider the data foundation required for AI from the beginning." },
          { title: "Production-Focused", description: "We think beyond prototypes and experiments, aiming for live systems." },
          { title: "End-to-End", description: "Strategy can continue directly into data, software and engineering implementation." },
        ].map((item) => (
          <div key={item.title} className="bg-white dark:bg-background-7 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
            <p className="text-secondary/70 dark:text-white/70">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudiesSection = () => (
  <section className="py-16 md:py-24 bg-gray-50 dark:bg-background-8">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-secondary dark:text-white">
        AI Strategy Case Studies
      </h2>
      <p className="text-lg text-secondary/70 dark:text-white/70 mb-8">
        Explore how RockScale has helped organizations transform their AI vision into reality.
      </p>
      <Link href="/case-studies" className="text-primary hover:underline font-semibold">
        View All Case Studies →
      </Link>
    </div>
  </section>
);

const FAQSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary dark:text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6 max-w-3xl mx-auto">
        {[
          { question: "What is an AI strategy?", answer: "An AI strategy defines how an organization will use artificial intelligence to achieve its business objectives, including identifying opportunities, prioritizing use cases, and planning for implementation." },
          { question: "Why does a business need an AI roadmap?", answer: "An AI roadmap provides a clear, sequenced plan for developing and deploying AI solutions, moving beyond experimentation to production with defined milestones and expected outcomes." },
          { question: "How do you identify AI use cases?", answer: "We conduct comprehensive assessments of business processes, pain points, and strategic goals to uncover high-value AI opportunities across various departments." },
          { question: "How do you prioritize AI opportunities?", answer: "We use a rigorous framework that evaluates opportunities based on business value, technical feasibility, data availability, implementation complexity, risk, and time to value." },
          { question: "Can you assess our AI readiness?", answer: "Yes, we provide AI readiness assessments across business, data, technology, people, and governance to understand your current state and identify gaps." },
          { question: "Do you help with AI architecture?", answer: "Absolutely. We design AI architectures that are scalable, secure, and integrated, considering models, data, applications, and cloud infrastructure." },
          { question: "Can RockScale help us implement the roadmap?", answer: "Yes, RockScale offers end-to-end services, seamlessly transitioning from strategy and roadmap development to data engineering, AI software development, and forward-deployed engineering." },
          { question: "How long does an AI strategy engagement take?", answer: "The duration varies depending on the scope and complexity of your organization, typically ranging from a few weeks to several months for comprehensive engagements." },
          { question: "What do we receive at the end of the engagement?", answer: "You receive a comprehensive set of deliverables, including an AI Readiness Assessment, AI Opportunity Map, Prioritized Use Cases, AI Architecture Recommendations, Implementation Roadmap, a 90-Day Action Plan, and more." },
        ].map((faq, idx) => (
          <div key={idx} className="bg-white dark:bg-background-7 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-primary">{faq.question}</h3>
            <p className="text-secondary/70 dark:text-white/70">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="py-16 md:py-24 bg-primary/5 dark:bg-primary/10">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-secondary dark:text-white">
        Know Where AI Can Take Your Business
      </h2>
      <p className="text-lg text-secondary/70 dark:text-white/70 mb-8 max-w-2xl mx-auto">
        Let&#39;s identify the opportunities worth pursuing, build a practical roadmap and create a clear path from AI strategy to production.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/contact-us" className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
          Build Your AI Roadmap
        </Link>
        <Link href="/contact-us" className="border border-primary text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/10 transition-colors">
          Talk to RockScale
        </Link>
      </div>
    </div>
  </section>
);

const AIStrategyRoadmapPageContent = () => {
  return (
    <main>
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
