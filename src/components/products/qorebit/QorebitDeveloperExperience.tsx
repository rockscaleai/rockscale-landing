'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const QorebitDeveloperExperience = () => {
  return (
    <section className="bg-secondary py-16 md:py-20 lg:py-[100px]" aria-labelledby="devex-heading">
      <div className="main-container">
        <div className="mx-auto mb-16 max-w-[750px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green bg-ns-green/20 text-ns-green border-none">Developer Experience</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="devex-heading" className="text-white">Integrate in minutes. Scale without limits.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-white/70">
              If you already use the OpenAI SDK, migrating to Qorebit requires changing exactly two lines of code.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Code Snippet */}
          <RevealAnimation delay={0.4}>
            <div className="rounded-[20px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="size-3 rounded-full bg-red-400/60"></div>
                <div className="size-3 rounded-full bg-yellow-400/60"></div>
                <div className="size-3 rounded-full bg-green-400/60"></div>
                <span className="ml-2 text-white/30 text-xs font-mono">quickstart.ts</span>
              </div>
              <pre className="text-sm leading-relaxed overflow-x-auto">
<code className="text-white/80 font-mono">{`import OpenAI from 'openai'; // ← same SDK!

// Change baseURL + apiKey. That's it.
const client = new OpenAI({
  baseURL: 'https://api.qorebit.ai/v1',
  apiKey: process.env.QOREBIT_API_KEY,
});

// Use any model — same interface
const response = await client.chat.completions.create({
  model: 'claude-3-5-sonnet',   // or gpt-4o, gemini-2.0...
  messages: [
    { role: 'user', content: 'Explain quantum entanglement.' }
  ],
});

console.log(response.choices[0].message.content);`}</code>
              </pre>
            </div>
          </RevealAnimation>

          {/* Developer Tools */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-4">
              {[
                {
                  title: 'OpenAI SDK Compatible',
                  description: 'Drop-in replacement for the OpenAI client library. No new SDKs to learn.',
                  badge: 'Zero migration cost',
                },
                {
                  title: 'REST API',
                  description: 'Clean, versioned REST endpoints with comprehensive error handling and detailed documentation.',
                  badge: 'v1 API',
                },
                {
                  title: 'AI Playground',
                  description: 'Compare models side-by-side in your browser. Test prompts before shipping.',
                  badge: 'No code needed',
                },
                {
                  title: 'Quick Start Guide',
                  description: 'From sign-up to first API response in under 5 minutes.',
                  badge: '< 5 minutes',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-[14px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-ns-green/20">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8.5L6.5 12L13 4" stroke="#C6F56F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-white font-medium text-sm">{item.title}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-ns-green/20 text-ns-green font-medium">{item.badge}</span>
                    </div>
                    <p className="text-white/60 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

QorebitDeveloperExperience.displayName = 'QorebitDeveloperExperience';
export default QorebitDeveloperExperience;
