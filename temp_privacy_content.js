const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/components/privacy/PrivacyContent.tsx');

const content = `'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import React from 'react';

const PrivacyContent = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: \`<p class="mb-4">When you visit RockScale, we collect certain information about your device, your interaction with the Site, and information necessary to process your requests. We may also collect additional information if you contact us for customer support.</p>
      <ul class="list-disc pl-6 space-y-2 text-secondary/70">
        <li><strong>Device Information:</strong> We collect version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.</li>
        <li><strong>Order Information:</strong> We collect your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number when you engage our services.</li>
      </ul>\`
    },
    {
      title: "2. How We Use Your Information",
      content: \`<p class="mb-4">We use the Order Information that we collect generally to fulfill any contracts placed through the Site (including processing your payment information and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:</p>
      <ul class="list-disc pl-6 space-y-2 text-secondary/70">
        <li>Communicate with you.</li>
        <li>Screen our orders for potential risk or fraud.</li>
        <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
      </ul>\`
    },
    {
      title: "3. Sharing Your Personal Information",
      content: \`<p class="mb-4">We share your Personal Information with trusted third parties to help us use your Personal Information, as described above. We use highly secure infrastructure providers and analytics tools to understand how our customers use the Site.</p>
      <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>\`
    },
    {
      title: "4. Data Security & Retention",
      content: \`<p class="mb-4">When you engage our services through the Site, we will maintain your Information for our records unless and until you ask us to delete this information. We implement robust, enterprise-grade security protocols to prevent unauthorized access to your data.</p>\`
    },
    {
      title: "5. Your Rights",
      content: \`<p class="mb-4">If you are a resident of the EEA or California, you have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>\`
    },
    {
      title: "6. Changes to this Policy",
      content: \`<p class="mb-4">We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</p>\`
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="main-container max-w-4xl">
        
        <RevealAnimation delay={0.1}>
           <div className="text-center mb-16 md:mb-24">
              <span className="badge badge-green-v2 mb-6 inline-block uppercase tracking-wider text-[11px] font-bold">Legal</span>
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 tracking-tight">Privacy Policy</h1>
              <p className="text-lg text-secondary/60">Last updated: August 29, 2026</p>
           </div>
        </RevealAnimation>

        <div className="space-y-16">
          <RevealAnimation delay={0.2}>
            <div className="prose prose-lg max-w-none text-secondary/80">
              <p className="text-xl leading-relaxed mb-12">
                This Privacy Policy describes how your personal information is collected, used, and shared when you visit or engage with services from <strong>RockScale</strong> (the "Site"). We take your privacy and enterprise data security extremely seriously.
              </p>
            </div>
          </RevealAnimation>

          {sections.map((section, idx) => (
            <RevealAnimation key={idx} delay={0.1}>
              <div className="bg-[#f4f5f8] rounded-[24px] p-8 md:p-12 border border-secondary/5">
                 <h3 className="text-2xl font-bold text-secondary mb-6">{section.title}</h3>
                 <div 
                   className="text-lg text-secondary/80 leading-relaxed space-y-4"
                   dangerouslySetInnerHTML={{ __html: section.content }} 
                 />
              </div>
            </RevealAnimation>
          ))}

          <RevealAnimation delay={0.2}>
             <div className="mt-16 p-8 border border-secondary/10 rounded-[24px] text-center">
                <h3 className="text-xl font-bold text-secondary mb-4">Contact Us</h3>
                <p className="text-secondary/70 mb-2">For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at:</p>
                <a href="mailto:privacy@rockscale.ai" className="text-[#25CA22] font-bold hover:underline text-lg">privacy@rockscale.ai</a>
             </div>
          </RevealAnimation>
        </div>

      </div>
    </section>
  );
};

export default PrivacyContent;
`;

fs.writeFileSync(targetFile, content);
console.log('PrivacyContent updated.');
