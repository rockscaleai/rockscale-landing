import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import ContactHero from '@/components/contact-page/ContactHero';
import ContactOptions from '@/components/contact-page/ContactOptions';
import ContactForm from '@/components/contact-page/ContactForm';
import EngagementProcess from '@/components/contact-page/EngagementProcess';
import ServicesGrid from '@/components/contact-page/ServicesGrid';
import ContactFaq from '@/components/contact-page/ContactFaq';
import GlobalDelivery from '@/components/contact-page/GlobalDelivery';
import ContactDetails from '@/components/contact-page/ContactDetails';
import WhyRockScale from '@/components/contact-page/WhyRockScale';
import CTA from '@/components/shared/cta/CTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us | RockScale — AI, Data & Cloud Consulting',
  description:
    'Discuss your AI initiative, data modernization, or cloud infrastructure project with the RockScale team. Book a discovery call or send us a message.',
};

const ContactUs = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      {/* 1. Hero */}
      <ContactHero />

      {/* 2. Contact Options */}
      <ContactOptions />

      {/* 3. Premium Contact Form */}
      <ContactForm />

      {/* 4. What Happens Next — Engagement Process */}
      <EngagementProcess />

      {/* 5. Services We Can Help With */}
      <ServicesGrid />

      {/* 6. FAQ */}
      <ContactFaq />

      {/* 7. Global Delivery */}
      <GlobalDelivery />

      {/* 8. Office & Contact Details */}
      <ContactDetails />

      {/* 9. Why RockScale */}
      <WhyRockScale />

      {/* 10. Final CTA */}
      <CTA
        className="dark:bg-background-7 bg-background-3 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[100px] lg:pb-[100px]"
        badgeClass="!badge-green"
        badgeText="Ready to Transform Your Business with AI?"
        ctaHeading="Schedule a conversation with our team."
        description="Every serious business transformation starts with a single conversation. Let us explore how AI, data, and cloud can create measurable value for your organization."
        ctaBtnText="Book a Discovery Call"
        btnClass="hover:btn-secondary dark:hover:btn-accent"
      />
    </main>
  );
};

export default ContactUs;
