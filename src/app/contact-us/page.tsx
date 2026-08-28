import ContactPageContent from '@/components/contact-page/ContactPageContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us | RockScale — AI, Data & Cloud Consulting',
  description: 'Discuss your AI initiative, data modernization, or cloud infrastructure project with the RockScale team. Book a discovery call or send us a message.',
};

const ContactUs = () => {
  return <ContactPageContent />;
};

export default ContactUs;
