'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const contactOptions = [
  {
    id: '1',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
    title: 'Book a Discovery Call',
    description: 'Schedule a 30-minute call with one of our AI strategy experts to explore how we can accelerate your business goals.',
    cta: 'Schedule a Call',
    href: '#contact-form',
  },
  {
    id: '2',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    title: 'General Enquiries',
    description: 'Tell us about your initiative. Whether it is exploratory or urgent, we respond to every serious business enquiry.',
    cta: 'Send a Message',
    href: '#contact-form',
  },
  {
    id: '3',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: 'Partnership Opportunities',
    description: 'Interested in building with us? We partner with technology vendors, system integrators, and specialist consultancies.',
    cta: 'Explore Partnerships',
    href: '#contact-form',
  },
  {
    id: '4',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    title: 'Enterprise Consulting',
    description: 'Large-scale transformation programmes, board-level AI strategy, or mission-critical infrastructure — let us discuss scope.',
    cta: 'Discuss Your Programme',
    href: '#contact-form',
  },
  {
    id: '5',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'Product Support (Qorebit AI)',
    description: 'Existing Qorebit AI users can reach our product support team for technical help, billing, or feature requests.',
    cta: 'Get Product Support',
    href: '#contact-form',
  },
];

const ContactOptions = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]" id="contact-options">
      <div className="main-container">
        <div className="mx-auto mb-12 max-w-[750px] space-y-4 text-center md:mb-[60px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">How Can We Help?</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Choose how you want to connect</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[600px] text-secondary/70 dark:text-accent/70">
              Every business challenge is different. Select the path that best describes your situation and we will route you to the right team.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactOptions.map((option, index) => (
            <RevealAnimation key={option.id} delay={0.15 + index * 0.08}>
              <div className="group flex h-full flex-col gap-5 rounded-[20px] bg-white p-8 border border-stroke-1/10 dark:border-white/5 dark:bg-background-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="inline-flex size-14 items-center justify-center rounded-[14px] bg-background-3 text-secondary dark:bg-background-7 dark:text-accent transition-colors duration-300 group-hover:bg-secondary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-secondary">
                  {option.icon}
                </span>
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="text-lg font-bold">{option.title}</h3>
                  <p className="text-sm text-secondary/70 dark:text-accent/70 flex-1">{option.description}</p>
                </div>
                <Link
                  href={option.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary dark:hover:text-white">
                  {option.cta}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M4.167 10H15.833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

ContactOptions.displayName = 'ContactOptions';
export default ContactOptions;
