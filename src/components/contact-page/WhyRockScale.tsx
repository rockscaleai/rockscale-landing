'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';

const reasons = [
  { id: '1', title: 'Business-First Approach', description: 'Every recommendation starts with business value, not technology preference. We choose tools that serve your outcomes.' },
  { id: '2', title: 'AI + Data + Cloud Expertise', description: 'A rare combination of deep expertise across the full intelligent systems stack — from model integration to data pipelines to cloud infrastructure.' },
  { id: '3', title: 'End-to-End Delivery', description: 'We design, build, and deploy. You get a working system, not a slide deck.' },
  { id: '4', title: 'Enterprise-Ready Architecture', description: 'Security, scalability, and governance are designed in from day one — not bolted on afterwards.' },
  { id: '5', title: 'Security-First Mindset', description: 'RBAC, encryption, private deployments, and audit logging are standard practice across every engagement.' },
  { id: '6', title: 'Long-Term Partnership', description: 'Many clients retain us beyond initial delivery. We build relationships designed to grow with your business.' },
  { id: '7', title: 'Rapid Implementation', description: 'We move quickly without sacrificing quality. Proof of concepts in weeks, production systems in months.' },
  { id: '8', title: 'Transparent Collaboration', description: 'Sprint-based delivery with clear milestones. You always know exactly where your project stands.' },
];

const WhyRockScale = () => {
  return (
    <section className="bg-white dark:bg-black py-16 md:py-20 lg:py-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-12 max-w-[750px] space-y-4 text-center md:mb-[60px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Why Companies Choose RockScale</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>What makes a serious technology partner</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              We are an embedded technical partner, not a vendor. Here is what that means in practice.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <RevealAnimation key={reason.id} delay={0.1 + (index % 4) * 0.07}>
              <div className="group h-full rounded-[20px] bg-background-3 p-7 dark:bg-background-7 border border-stroke-1/10 dark:border-white/5 transition-all duration-300 hover:-translate-y-1 space-y-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-white dark:bg-white dark:text-secondary text-sm font-bold">
                  {reason.id}
                </div>
                <h3 className="text-base font-bold">{reason.title}</h3>
                <p className="text-sm text-secondary/70 dark:text-accent/70 leading-relaxed">{reason.description}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

WhyRockScale.displayName = 'WhyRockScale';
export default WhyRockScale;
