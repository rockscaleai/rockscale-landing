'use client';
import RevealAnimation from '../animation/RevealAnimation';

const values = [
  {
    id: 1,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Innovation with Purpose',
    description: 'We build technology to solve real business problems, not just to play with the latest models.',
  },
  {
    id: 2,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Customer Success',
    description: 'Our success is measured entirely by the business outcomes and ROI our clients achieve.',
  },
  {
    id: 3,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Engineering Excellence',
    description: 'We believe in scalable, secure, and maintainable enterprise-grade architecture from day one.',
  },
  {
    id: 4,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Responsible AI',
    description: 'We prioritize data privacy, security, and ethical model deployment in everything we build.',
  },
  {
    id: 5,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Execution over Hype',
    description: 'We skip the buzzwords and focus on reliable delivery, rapid implementation, and measurable results.',
  },
  {
    id: 6,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Continuous Learning',
    description: 'In a rapidly evolving field, we stay at the forefront so our clients always have a competitive edge.',
  },
];

const Values = () => {
  return (
    <section
      className="relative overflow-hidden bg-background-3 py-20 md:py-28 lg:py-32"
      aria-labelledby="values-heading"
    >
      <div className="main-container relative z-10">
        <div className="mx-auto mb-16 max-w-[800px] space-y-5 text-center md:mb-20">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2">Our Values</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="values-heading" className="text-4xl font-medium tracking-tight text-secondary md:text-5xl lg:text-[52px]">
              The principles shaping how we think, build, and partner
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[620px] text-lg leading-relaxed text-secondary/70">
              These are the core standards we bring to every architecture decision, every line of code, and every client relationship.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {values.map((value, index) => (
            <RevealAnimation key={value.id} delay={0.15 + index * 0.05}>
              <div className="group h-full rounded-[28px] border border-stroke-3 bg-white p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#25CA22]/30 hover:shadow-[0_20px_40px_-15px_rgba(37,202,34,0.15)] xl:p-10">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4f5f8] text-secondary transition-colors duration-300 group-hover:bg-[#25CA22] group-hover:text-white">
                  {value.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold tracking-tight text-secondary md:text-2xl">
                  {value.title}
                </h3>
                <p className="text-base leading-relaxed text-secondary/70">
                  {value.description}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

Values.displayName = 'Values';
export default Values;
