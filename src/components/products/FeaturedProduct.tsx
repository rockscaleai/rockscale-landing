'use client';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const FeaturedProduct = () => {
  return (
    <section className="bg-white dark:bg-[#0d0d1a] py-16 md:py-20 lg:py-[100px]" aria-labelledby="featured-product-heading">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Featured Product</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="featured-product-heading">Our flagship AI platform</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              Qorebit AI simplifies AI infrastructure for modern businesses and development teams.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="bg-secondary relative overflow-hidden rounded-[24px] p-8 md:p-12 xl:p-16">
            {/* Background glow */}
            <div className="pointer-events-none absolute -top-[30%] -right-[15%] h-[500px] w-[500px] rounded-full bg-ns-green/15 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-[30%] -left-[10%] h-[400px] w-[400px] rounded-full bg-ns-cyan/10 blur-[120px]" />
            
            <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-ns-green">
                      <span className="text-secondary font-bold text-lg">Q</span>
                    </div>
                    <span className="text-white font-semibold text-xl tracking-wide">Qorebit AI</span>
                  </div>
                  <h3 className="text-white text-heading-4 leading-tight">The unified AI infrastructure platform</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    One OpenAI-compatible API that gives your applications access to every leading AI model — OpenAI, Anthropic, Google, Mistral, and more. Unified billing, model routing, and enterprise-grade reliability.
                  </p>
                </div>

                <ul className="space-y-3">
                  {[
                    'Single API for all frontier AI models',
                    'OpenAI-compatible SDK — zero migration cost',
                    'Unified billing and usage analytics',
                    'Enterprise workspace and team management',
                    'AI gateway with intelligent model routing',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-ns-green/20">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M9 1L3.5 6.5L1 4" stroke="#C6F56F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <LinkButton href="/products/qorebit-ai" className="btn btn-primary hover:btn-white btn-md">
                    Learn More
                  </LinkButton>
                  <a href="https://qorebit.ai" target="_blank" rel="noopener noreferrer" className="btn btn-md border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
                    Get Started →
                  </a>
                </div>
              </div>

              {/* Right — Visual */}
              <div className="relative">
                <div className="rounded-[20px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="size-3 rounded-full bg-red-400/60"></div>
                    <div className="size-3 rounded-full bg-yellow-400/60"></div>
                    <div className="size-3 rounded-full bg-green-400/60"></div>
                    <span className="ml-2 text-white/30 text-xs font-mono">qorebit-api.js</span>
                  </div>
                  <pre className="text-sm text-white/80 font-mono leading-relaxed overflow-x-auto">
{`import Qorebit from 'qorebit';

const client = new Qorebit({
  apiKey: process.env.QOREBIT_API_KEY
});

const response = await client.chat({
  model: 'gpt-4o', // or claude-3-5, gemini-1.5...
  messages: [
    { role: 'user', content: 'Hello!' }
  ]
});`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

FeaturedProduct.displayName = 'FeaturedProduct';
export default FeaturedProduct;
