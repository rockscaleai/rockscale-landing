'use client';
import RevealAnimation from '../animation/RevealAnimation';

const values = [
  {
    id: 1,
    icon: 'ns-shape-35',
    title: 'Innovation with Purpose',
    description: 'We build technology to solve real business problems, not just to play with the latest models.',
  },
  {
    id: 2,
    icon: 'ns-shape-10',
    title: 'Customer Success',
    description: 'Our success is measured entirely by the business outcomes and ROI our clients achieve.',
  },
  {
    id: 3,
    icon: 'ns-shape-23',
    title: 'Engineering Excellence',
    description: 'We believe in scalable, secure, and maintainable enterprise-grade architecture from day one.',
  },
  {
    id: 4,
    icon: 'ns-shape-19',
    title: 'Responsible AI',
    description: 'We prioritize data privacy, security, and ethical model deployment in everything we build.',
  },
  {
    id: 5,
    icon: 'ns-shape-41',
    title: 'Execution over Hype',
    description: 'We skip the buzzwords and focus on reliable delivery, rapid implementation, and measurable results.',
  },
  {
    id: 6,
    icon: 'ns-shape-8',
    title: 'Continuous Learning',
    description: 'In a rapidly evolving field, we stay at the forefront so our clients always have a competitive edge.',
  },
];

const Values = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] dark:bg-[#0d0d1a]" aria-labelledby="values-heading">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[750px] space-y-5 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Our Values</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 id="values-heading">The principles that guide our work</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px]">
              How we think, how we build, and how we partner with our clients.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {values.map((value, index) => (
            <RevealAnimation key={value.id} delay={0.2 + index * 0.1}>
              <div className="bg-background-3 dark:bg-background-6 h-full col-span-12 rounded-[20px] p-8 md:col-span-6 lg:col-span-4">
                <div className="mb-6">
                  <span className={`${value.icon} text-secondary dark:text-accent text-[48px]`} />
                </div>
                <h3 className="mb-3 text-heading-5">{value.title}</h3>
                <p className="text-secondary/70 dark:text-accent/70">{value.description}</p>
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
