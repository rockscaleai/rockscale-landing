'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const contactDetails = [
  {
    id: '1',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Business Email',
    value: 'hello@rockscale.ai',
    href: 'mailto:hello@rockscale.ai',
  },
  {
    id: '2',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
    label: 'Phone',
    value: '[Placeholder]',
    href: null,
  },
  {
    id: '3',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    label: 'Headquarters',
    value: 'Remote-first, globally distributed',
    href: null,
  },
  {
    id: '4',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    label: 'Business Hours',
    value: 'Mon–Fri, 9:00 AM – 6:00 PM (GMT)',
    href: null,
  },
];

const socialLinks = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com', icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  )},
  { id: 'x', label: 'X (Twitter)', href: 'https://x.com', icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )},
  { id: 'github', label: 'GitHub', href: 'https://github.com', icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )},
  { id: 'product', label: 'Qorebit AI', href: 'https://qorebit.ai', icon: (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
  )},
];

const ContactDetails = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 py-16 md:py-20 lg:py-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-12 max-w-[750px] space-y-4 text-center md:mb-[60px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Office &amp; Contact Information</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Direct ways to reach us</h2>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item, index) => (
            <RevealAnimation key={item.id} delay={0.15 + index * 0.08}>
              <div className="flex flex-col gap-4 rounded-[20px] bg-white p-8 dark:bg-background-6 border border-stroke-1/10 dark:border-white/5 h-full">
                <span className="inline-flex size-12 items-center justify-center rounded-[12px] bg-background-3 text-secondary dark:bg-background-7 dark:text-accent">
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary/50 dark:text-accent/50 mb-1">{item.label}</p>
                  {item.href ? (
                    <Link href={item.href} className="font-medium text-primary hover:underline">{item.value}</Link>
                  ) : (
                    <p className="font-medium text-secondary dark:text-accent">{item.value}</p>
                  )}
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Social Links */}
        <RevealAnimation delay={0.5}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex items-center gap-2 rounded-full border border-stroke-1 dark:border-stroke-7 bg-white dark:bg-background-6 px-5 py-3 text-sm font-medium text-secondary dark:text-accent hover:bg-secondary hover:text-white dark:hover:bg-white dark:hover:text-secondary transition-all duration-200">
                {social.icon}
                {social.label}
              </Link>
            ))}
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

ContactDetails.displayName = 'ContactDetails';
export default ContactDetails;
