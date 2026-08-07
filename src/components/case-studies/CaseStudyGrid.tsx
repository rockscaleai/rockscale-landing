'use client';
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';

interface CaseStudyItem {
  id: string;
  projectName: string;
  industry: string;
  clientType: string;
  category: string;
  description: string;
  technologies: string[];
  businessOutcome: string;
  slug: string;
  type: string;
}

const caseStudies: CaseStudyItem[] = [
  {
    id: '1',
    projectName: 'Qorebit AI',
    industry: 'Technology',
    clientType: 'Internal Product',
    category: 'Platform Development',
    description: 'An AI Infrastructure Platform built to simplify access to multiple AI providers through one unified API.',
    technologies: ['Next.js', 'Node.js', 'OpenAI', 'Anthropic', 'PostgreSQL'],
    businessOutcome: 'Unified AI integration, reduced API costs, and centralized token management.',
    slug: 'qorebit-ai',
    type: 'Platform Showcase'
  },
  {
    id: '2',
    projectName: 'AI Document Intelligence Platform',
    industry: 'Financial Services',
    clientType: 'Enterprise',
    category: 'Process Automation',
    description: 'A platform to automatically extract, classify, and validate data from complex financial documents.',
    technologies: ['Python', 'AWS Textract', 'LangChain', 'FastAPI'],
    businessOutcome: 'Reduced manual processing time by 85% and improved data accuracy.',
    slug: 'ai-document-intelligence',
    type: 'Concept Solution'
  },
  {
    id: '3',
    projectName: 'Enterprise Knowledge Assistant',
    industry: 'Professional Services',
    clientType: 'Mid-Market',
    category: 'Generative AI',
    description: 'An internal AI assistant that connects to company wikis and documents for instant answers.',
    technologies: ['OpenAI', 'Pinecone', 'React', 'LangChain'],
    businessOutcome: 'Saved employees an average of 4 hours per week on information retrieval.',
    slug: 'enterprise-knowledge-assistant',
    type: 'Reference Architecture'
  },
  {
    id: '4',
    projectName: 'Retail Analytics Dashboard',
    industry: 'Retail',
    clientType: 'SME',
    category: 'Data Engineering',
    description: 'A real-time dashboard unifying sales data, inventory, and customer behavior across channels.',
    technologies: ['Snowflake', 'dbt', 'Power BI', 'Azure'],
    businessOutcome: 'Enabled data-driven inventory management, reducing stockouts by 30%.',
    slug: 'retail-analytics-dashboard',
    type: 'Concept Solution'
  },
  {
    id: '5',
    projectName: 'Customer Support Copilot',
    industry: 'Technology',
    clientType: 'Enterprise',
    category: 'AI Agents',
    description: 'An AI copilot that assists support agents by drafting responses and surfacing relevant documentation.',
    technologies: ['Anthropic Claude', 'Node.js', 'Zendesk API'],
    businessOutcome: 'Decreased average response time by 40% and improved customer satisfaction scores.',
    slug: 'customer-support-copilot',
    type: 'Solution Showcase'
  },
  {
    id: '6',
    projectName: 'Predictive Sales Analytics',
    industry: 'B2B SaaS',
    clientType: 'Startup',
    category: 'Business Intelligence',
    description: 'A machine learning pipeline that scores leads and predicts churn based on usage data.',
    technologies: ['Python', 'scikit-learn', 'GCP', 'Looker'],
    businessOutcome: 'Increased conversion rates by 25% by prioritizing high-propensity leads.',
    slug: 'predictive-sales-analytics',
    type: 'Internal Innovation'
  },
  {
    id: '7',
    projectName: 'Supply Chain Intelligence',
    industry: 'Manufacturing',
    clientType: 'Enterprise',
    category: 'Data Engineering',
    description: 'A comprehensive data platform for end-to-end supply chain visibility and predictive maintenance.',
    technologies: ['AWS', 'Kafka', 'Databricks', 'Tableau'],
    businessOutcome: 'Identified bottlenecks and reduced logistics costs by 15% annually.',
    slug: 'supply-chain-intelligence',
    type: 'Concept Solution'
  }
];

const CaseStudyGrid = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] dark:bg-black">
      <div className="main-container">
        <div className="mb-10 space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Our Work</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>Explore our solutions.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[680px]">
              Discover how we leverage AI, Data Engineering, and Cloud Infrastructure to solve complex business challenges.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {caseStudies.map((study, index) => (
            <RevealAnimation key={study.id} delay={0.2 + index * 0.1}>
              <div className="group relative flex flex-col justify-between rounded-[20px] bg-background-3 p-8 transition-all hover:bg-background-2 dark:bg-background-7 dark:hover:bg-background-6 border border-stroke-1 dark:border-stroke-7 h-full">
                <div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-white dark:bg-white dark:text-secondary">
                      {study.industry}
                    </span>
                    <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary">
                      {study.category}
                    </span>
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-secondary">
                      {study.type}
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{study.projectName}</h3>
                  <p className="mb-5 text-secondary/70 dark:text-accent/70">
                    {study.description}
                  </p>
                  <div className="mb-6 space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-secondary dark:text-white">Business Outcome: </span>
                      <span className="text-sm text-secondary/80 dark:text-accent/80">{study.businessOutcome}</span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-secondary dark:text-white">Technologies: </span>
                      <span className="text-sm text-secondary/80 dark:text-accent/80">{study.technologies.join(', ')}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-secondary dark:hover:text-white">
                    Read Case Study
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16666 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

CaseStudyGrid.displayName = 'CaseStudyGrid';
export default CaseStudyGrid;
