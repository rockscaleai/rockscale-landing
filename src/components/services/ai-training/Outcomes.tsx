'use client';
import RevealAnimation from '../../animation/RevealAnimation';

const outcomes = [
  { id: 1, icon: 'ns-chart-pie', label: 'Increased productivity & efficiency' },
  { id: 2, icon: 'ns-light-bulb', label: 'Improved innovation & problem-solving' },
  { id: 3, icon: 'ns-check-up', label: 'Better decision-making with data' },
  { id: 4, icon: 'ns-user-speak', label: 'Enhanced employee skills & retention' },
  { id: 5, icon: 'ns-line-chart-up', label: 'Faster time-to-market for AI projects' },
  { id: 6, icon: 'ns-shield', label: 'Stronger AI governance & risk management' },
];

const Outcomes = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[100px]" aria-labelledby="outcomes-heading">
      <div className="main-container">
        <div className="mx-auto mb-10 max-w-[750px] space-y-5 text-center md:mb-[70px]">
            <RevealAnimation delay={0.2}>
                <span className="badge badge-green">Measurable Outcomes</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
                <h2 id="outcomes-heading" className="mb-3">What your teams will achieve.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
                <p className="text-secondary/60 mx-auto max-w-[600px]">
                Our training is designed to deliver tangible results. We measure success by the real-world impact our programs have on your teams’ skills, your company’s capabilities, and your bottom line.
                </p>
            </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item, idx) => (
            <RevealAnimation key={item.id} delay={0.5 + idx * 0.1}>
                <div className="bg-background-3 dark:bg-background-7 rounded-lg p-8 text-center h-full">
                    <span className={`${item.icon} text-primary text-5xl mb-4 inline-block`}></span>
                    <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
