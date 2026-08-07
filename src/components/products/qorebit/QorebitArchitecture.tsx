'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const layers = [
  {
    id: 'layer-1',
    label: 'Your Applications',
    sublabel: 'Web, Mobile, Backend, AI Agents',
    color: 'bg-ns-green/20 border-ns-green/40 text-secondary dark:text-accent',
  },
  {
    id: 'layer-2',
    label: 'Qorebit API',
    sublabel: 'OpenAI-Compatible REST API · SDKs',
    color: 'bg-secondary border-ns-green/60 text-white',
    highlight: true,
  },
  {
    id: 'layer-3',
    label: 'Intelligent Model Router',
    sublabel: 'Cost · Latency · Capability routing',
    color: 'bg-ns-cyan/10 border-ns-cyan/40 text-secondary dark:text-accent',
  },
];

const providers = [
  { name: 'OpenAI', abbr: 'OAI' },
  { name: 'Anthropic', abbr: 'ANT' },
  { name: 'Google', abbr: 'GGL' },
  { name: 'Mistral', abbr: 'MST' },
  { name: 'DeepSeek', abbr: 'DSK' },
  { name: 'Meta', abbr: 'MET' },
];

const QorebitArchitecture = () => {
  return (
    <section className="bg-white dark:bg-[#0d0d1a] py-16 md:py-20 lg:py-[100px]" aria-labelledby="architecture-heading">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Platform Architecture</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="architecture-heading">How Qorebit works</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              A clean, powerful abstraction layer between your application and the world's best AI models.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="mx-auto max-w-[760px]">
            <div className="bg-background-3 dark:bg-background-6 rounded-[24px] p-8 border border-stroke-1/10 dark:border-white/5 md:p-12">
              {/* Stack layers */}
              <div className="space-y-3 mb-6">
                {layers.map((layer, index) => (
                  <div key={layer.id}>
                    <div className={`flex items-center justify-between rounded-[14px] border px-6 py-4 ${layer.color} ${layer.highlight ? 'shadow-[0_0_30px_rgba(198,245,111,0.15)]' : ''}`}>
                      <div>
                        <p className={`font-semibold ${layer.highlight ? 'text-white' : ''}`}>{layer.label}</p>
                        <p className={`text-xs mt-0.5 ${layer.highlight ? 'text-white/60' : 'text-secondary/50 dark:text-accent/50'}`}>{layer.sublabel}</p>
                      </div>
                      {layer.highlight && (
                        <span className="text-xs px-3 py-1 rounded-full bg-ns-green/20 text-ns-green font-medium">Core</span>
                      )}
                    </div>
                    {index < layers.length - 1 && (
                      <div className="flex justify-center py-1">
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
                          <path d="M7 0v16M1 10l6 8 6-8" stroke="currentColor" className="text-stroke-1 dark:text-white/20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-2">
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
                  <path d="M7 0v16M1 10l6 8 6-8" stroke="currentColor" className="text-stroke-1 dark:text-white/20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Providers grid */}
              <div className="rounded-[14px] border border-stroke-1/20 dark:border-white/10 p-5">
                <p className="text-xs text-center font-medium text-secondary/50 dark:text-accent/50 uppercase tracking-wider mb-4">AI Providers</p>
                <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
                  {providers.map((p) => (
                    <div key={p.name} className="flex flex-col items-center justify-center gap-1 rounded-xl bg-background-3 dark:bg-background-7 px-2 py-3 text-center">
                      <span className="text-xs font-bold text-secondary/40 dark:text-accent/40 font-mono">{p.abbr}</span>
                      <span className="text-xs text-secondary/60 dark:text-accent/60">{p.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

QorebitArchitecture.displayName = 'QorebitArchitecture';
export default QorebitArchitecture;
