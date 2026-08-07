'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const platformFeatures = [
  { id: 'f1', icon: 'ns-shape-8', title: 'AI Gateway', description: 'Centralized entry point for all AI requests with load balancing, fallbacks, and intelligent routing.' },
  { id: 'f2', icon: 'ns-shape-35', title: 'Model Routing', description: 'Automatically route requests to the best available model based on cost, speed, and capability.' },
  { id: 'f3', icon: 'ns-shape-41', title: 'Unified API', description: 'One OpenAI-compatible API endpoint for every supported model and provider.' },
  { id: 'f4', icon: 'ns-shape-19', title: 'Workspace Management', description: 'Create isolated workspaces for different teams, projects, or environments.' },
  { id: 'f5', icon: 'ns-shape-31', title: 'Usage Analytics', description: 'Granular usage reporting by model, team, and time period for complete cost visibility.' },
  { id: 'f6', icon: 'ns-shape-21', title: 'API Key Management', description: 'Create, rotate, and revoke API keys with custom permissions and rate limits.' },
  { id: 'f7', icon: 'ns-shape-23', title: 'Team Collaboration', description: 'Invite team members with role-based access controls across all workspaces.' },
  { id: 'f8', icon: 'ns-shape-10', title: 'Credit Wallet', description: 'Pre-load credits once and use them across every AI provider without managing multiple subscriptions.' },
  { id: 'f9', icon: 'ns-shape-16', title: 'Cost Monitoring', description: 'Real-time budget alerts and spend analysis to keep AI costs predictable and controlled.' },
  { id: 'f10', icon: 'ns-shape-23', title: 'Developer Dashboard', description: 'A clean, intuitive dashboard to manage all platform resources in one place.' },
  { id: 'f11', icon: 'ns-shape-8', title: 'Organization Management', description: 'Multi-organization support for agencies and enterprises managing multiple clients.' },
  { id: 'f12', icon: 'ns-shape-35', title: 'AI Playground', description: 'Test and compare models interactively in the browser without writing any code.' },
];

const QorebitCoreFeatures = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" aria-labelledby="core-features-heading">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Core Features</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="core-features-heading">Built for professional AI teams</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              Every feature in Qorebit exists because engineering teams building real AI products needed it.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {platformFeatures.map((feature, index) => (
            <RevealAnimation key={feature.id} delay={0.15 + (index % 4) * 0.08}>
              <div className="bg-white dark:bg-background-6 group flex flex-col gap-3 rounded-[16px] p-6 border border-stroke-1/10 dark:border-white/5 h-full transition-all duration-300 hover:-translate-y-1 hover:border-ns-green/30 dark:hover:border-ns-green/20">
                <span className={`${feature.icon} text-secondary dark:text-accent text-[32px] transition-transform duration-300 group-hover:text-ns-green group-hover:scale-110`} />
                <h4 className="text-heading-6 text-sm font-semibold">{feature.title}</h4>
                <p className="text-secondary/60 dark:text-accent/60 text-xs leading-relaxed flex-grow">{feature.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

QorebitCoreFeatures.displayName = 'QorebitCoreFeatures';
export default QorebitCoreFeatures;
