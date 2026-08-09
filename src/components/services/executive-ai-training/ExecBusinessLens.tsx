'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';

const businessAreas = [
  {
    icon: 'ns-chart-bar',
    title: 'Revenue',
    items: ['New products', 'Personalization', 'Sales intelligence', 'New services'],
  },
  {
    icon: 'ns-settings-2',
    title: 'Productivity',
    items: ['Automation', 'AI copilots', 'Knowledge systems', 'Workflow optimization'],
  },
  {
    icon: 'ns-users',
    title: 'Customer Experience',
    items: ['AI assistants', 'Personalization', 'Faster support', 'Intelligent interfaces'],
  },
  {
    icon: 'ns-zap',
    title: 'Operations',
    items: ['Process automation', 'Document processing', 'Decision support', 'Operational intelligence'],
  },
  {
    icon: 'ns-box',
    title: 'Product',
    items: ['AI-powered features', 'AI-native products', 'Intelligent workflows'],
  },
];

const ExecBusinessLens = () => {
  return (
    <section className="py-20 lg:py-[120px] bg-white dark:bg-background-7">
      <div className="main-container">
        <div className="text-center mb-12">
          <RevealAnimation>
            <h2 className="text-4xl lg:text-5xl font-bold">AI Through a Business Lens</h2>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessAreas.map((area, index) => (
            <RevealAnimation key={index} delay={0.1 * index}>
              <div className="bg-secondary/5 dark:bg-accent/5 rounded-2xl p-6 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`${area.icon} text-primary text-3xl`} />
                  <h3 className="font-bold text-xl">{area.title}</h3>
                </div>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="ns-check text-green-500" />
                      <span className="text-secondary/80 dark:text-accent/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

ExecBusinessLens.displayName = 'ExecBusinessLens';
export default ExecBusinessLens;