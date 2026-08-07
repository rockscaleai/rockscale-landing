'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const inputClass =
  'dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-8 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[52px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none';

const selectClass =
  'dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-8 border-stroke-3 bg-background-1 text-tagline-2 text-secondary/60 dark:text-accent/60 focus:border-secondary h-[52px] w-full rounded-full border px-[18px] py-3 font-normal focus:outline-none appearance-none';

const ContactForm = () => {
  return (
    <section className="bg-white dark:bg-black py-16 md:py-20 lg:py-[100px]" id="contact-form">
      <div className="main-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left panel */}
          <div className="lg:col-span-4 space-y-8">
            <RevealAnimation delay={0.2}>
              <div className="space-y-4">
                <span className="badge badge-green">Tell Us About Your Initiative</span>
                <h2 className="text-3xl font-bold leading-tight">
                  Discuss your digital transformation goals.
                </h2>
                <p className="text-secondary/70 dark:text-accent/70">
                  Share a few details and we will connect you with the right expert. We respond to every serious enquiry within one business day.
                </p>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.35}>
              <div className="space-y-5 border-t border-stroke-1 dark:border-stroke-7 pt-8">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-background-3 dark:bg-background-7 text-secondary dark:text-accent">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <Link href="mailto:hello@rockscale.ai" className="text-sm text-primary hover:underline">hello@rockscale.ai</Link>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-background-3 dark:bg-background-7 text-secondary dark:text-accent">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Response Time</p>
                    <p className="text-sm text-secondary/70 dark:text-accent/70">Within 1 business day</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-background-3 dark:bg-background-7 text-secondary dark:text-accent">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 0 1 .284-2.253" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Global Delivery</p>
                    <p className="text-sm text-secondary/70 dark:text-accent/70">Remote &amp; on-site worldwide</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Form */}
          <RevealAnimation delay={0.3} className="lg:col-span-8">
            <div className="dark:bg-background-6 rounded-[24px] bg-background-3 p-8 md:p-10 border border-stroke-1/10 dark:border-white/5">
              <form action="#" method="POST" className="space-y-6">
                {/* Row 1: Full Name + Company Name */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="full-name" className="text-tagline-2 text-secondary dark:text-accent block font-medium">Full Name *</label>
                    <input type="text" id="full-name" name="full-name" placeholder="Jane Smith" required autoComplete="name" className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company-name" className="text-tagline-2 text-secondary dark:text-accent block font-medium">Company Name *</label>
                    <input type="text" id="company-name" name="company-name" placeholder="Acme Corp" required autoComplete="organization" className={inputClass} />
                  </div>
                </div>

                {/* Row 2: Job Title + Business Email */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="job-title" className="text-tagline-2 text-secondary dark:text-accent block font-medium">Job Title *</label>
                    <input type="text" id="job-title" name="job-title" placeholder="CTO / Head of AI" required autoComplete="organization-title" className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="business-email" className="text-tagline-2 text-secondary dark:text-accent block font-medium">Business Email *</label>
                    <input type="email" id="business-email" name="business-email" placeholder="jane@company.com" required autoComplete="email" className={inputClass} />
                  </div>
                </div>

                {/* Row 3: Phone + Company Size */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-tagline-2 text-secondary dark:text-accent block font-medium">Phone Number <span className="text-secondary/50 dark:text-accent/50">(Optional)</span></label>
                    <input type="tel" id="phone" name="phone" placeholder="+1 555 000 0000" autoComplete="tel" className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company-size" className="text-tagline-2 text-secondary dark:text-accent block font-medium">Company Size *</label>
                    <div className="relative">
                      <select id="company-size" name="company-size" required className={selectClass}>
                        <option value="">Select company size</option>
                        <option value="1-10">1–10 employees</option>
                        <option value="11-50">11–50 employees</option>
                        <option value="51-200">51–200 employees</option>
                        <option value="201-1000">201–1,000 employees</option>
                        <option value="1000+">1,000+ employees</option>
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-secondary/60">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Row 4: Industry + Service Interested In */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="industry" className="text-tagline-2 text-secondary dark:text-accent block font-medium">Industry *</label>
                    <div className="relative">
                      <select id="industry" name="industry" required className={selectClass}>
                        <option value="">Select your industry</option>
                        <option>Financial Services</option>
                        <option>Healthcare</option>
                        <option>Technology</option>
                        <option>Manufacturing</option>
                        <option>Retail</option>
                        <option>Professional Services</option>
                        <option>Logistics</option>
                        <option>Education</option>
                        <option>Government</option>
                        <option>Other</option>
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-secondary/60">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-tagline-2 text-secondary dark:text-accent block font-medium">Service Interested In *</label>
                    <div className="relative">
                      <select id="service" name="service" required className={selectClass}>
                        <option value="">Select a service</option>
                        <option>AI Applications</option>
                        <option>AI Agents</option>
                        <option>LLM Integration</option>
                        <option>Generative AI</option>
                        <option>AI Strategy</option>
                        <option>Data Engineering</option>
                        <option>Business Intelligence</option>
                        <option>Cloud Infrastructure</option>
                        <option>Enterprise Automation</option>
                        <option>Not sure — let&apos;s discuss</option>
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-secondary/60">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Row 5: Budget + Timeline */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-tagline-2 text-secondary dark:text-accent block font-medium">Project Budget <span className="text-secondary/50 dark:text-accent/50">(Optional)</span></label>
                    <div className="relative">
                      <select id="budget" name="budget" className={selectClass}>
                        <option value="">Select a range</option>
                        <option>Under $25K</option>
                        <option>$25K – $75K</option>
                        <option>$75K – $200K</option>
                        <option>$200K – $500K</option>
                        <option>$500K+</option>
                        <option>Not defined yet</option>
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-secondary/60">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-tagline-2 text-secondary dark:text-accent block font-medium">Preferred Timeline *</label>
                    <div className="relative">
                      <select id="timeline" name="timeline" required className={selectClass}>
                        <option value="">Select a timeline</option>
                        <option>Immediately</option>
                        <option>Within 1–3 months</option>
                        <option>Within 3–6 months</option>
                        <option>6–12 months</option>
                        <option>Exploring options</option>
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-secondary/60">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-tagline-2 text-secondary dark:text-accent block font-medium">Tell Us About Your AI Initiative *</label>
                  <textarea
                    id="contact-message"
                    name="contact-message"
                    rows={5}
                    placeholder="Describe your business challenge, current infrastructure, and what success looks like for your organization."
                    required
                    className="dark:bg-background-8 dark:border-stroke-7 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary dark:focus-visible:border-stroke-4/20 placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent w-full rounded-xl border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none"
                  />
                </div>

                {/* Consent */}
                <fieldset>
                  <label className="flex items-start gap-x-3 cursor-pointer">
                    <input id="contact-consent" type="checkbox" className="peer sr-only" required />
                    <span className="mt-0.5 border-stroke-3 dark:border-stroke-7 after:bg-primary-500 peer-checked:border-primary-500 relative size-5 shrink-0 cursor-pointer rounded border after:absolute after:top-1/2 after:left-1/2 after:size-3 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-sm after:opacity-0 peer-checked:after:opacity-100" />
                    <span className="text-tagline-3 text-secondary/70 dark:text-accent/70">
                      I consent to RockScale processing my information in accordance with their{' '}
                      <Link href="/privacy-policy" className="text-primary underline">Privacy Policy</Link>.
                      I understand I can withdraw consent at any time.
                    </span>
                  </label>
                </fieldset>

                {/* Submit */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="btn btn-md w-full"
                  style={{ backgroundColor: '#061225', borderColor: '#061225', color: '#fff' }}>
                  Schedule My Discovery Session
                </button>
              </form>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

ContactForm.displayName = 'ContactForm';
export default ContactForm;
