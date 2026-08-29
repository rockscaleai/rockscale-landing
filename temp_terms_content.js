const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/components/terms-conditions/TermsConditionContent.tsx');

const content = `'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import React from 'react';

const TermsConditionContent = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: \`<p class="mb-4">By accessing or using the services provided by <strong>RockScale</strong>, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services or website.</p>\`
    },
    {
      title: "2. Enterprise Services & Deliverables",
      content: \`<p class="mb-4">RockScale provides AI strategy consulting, data engineering, cloud infrastructure, and custom software development services. Specific deliverables, timelines, and payment structures will be defined in a mutually agreed upon Statement of Work (SOW) or Master Services Agreement (MSA) separate from these general website terms.</p>\`
    },
    {
      title: "3. Intellectual Property Rights",
      content: \`<p class="mb-4">Unless otherwise stated in a specific Master Services Agreement, all underlying methodologies, frameworks, and pre-existing code libraries used by RockScale remain the exclusive property of RockScale. Client-specific data, proprietary models, and custom deliverables generated during an engagement become the property of the client upon full payment.</p>\`
    },
    {
      title: "4. Confidentiality & Data Security",
      content: \`<p class="mb-4">We are committed to protecting your enterprise data. Both parties agree to maintain the confidentiality of any proprietary information shared during the course of business. Our infrastructure adheres to strict security protocols to prevent unauthorized access, but clients are responsible for securing their own API keys and credentials.</p>\`
    },
    {
      title: "5. Limitation of Liability",
      content: \`<p class="mb-4">RockScale shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of our services.</p>\`
    },
    {
      title: "6. Modifications to Terms",
      content: \`<p class="mb-4">We reserve the right to modify these terms at any time. We will notify clients of significant changes via email or through prominent notice on our website. Continued use of our services following any changes indicates your acceptance of the new terms.</p>\`
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="main-container max-w-4xl">
        
        <RevealAnimation delay={0.1}>
           <div className="text-center mb-16 md:mb-24">
              <span className="badge badge-green-v2 mb-6 inline-block uppercase tracking-wider text-[11px] font-bold">Legal</span>
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6 tracking-tight">Terms & Conditions</h1>
              <p className="text-lg text-secondary/60">Last updated: August 29, 2026</p>
           </div>
        </RevealAnimation>

        <div className="space-y-16">
          <RevealAnimation delay={0.2}>
            <div className="prose prose-lg max-w-none text-secondary/80">
              <p className="text-xl leading-relaxed mb-12">
                These Terms and Conditions govern your use of the <strong>RockScale</strong> website and serve as the baseline agreement for our enterprise consulting and software engineering services.
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
                <p className="text-secondary/70 mb-2">For inquiries regarding our terms, Master Services Agreements, or legal compliance, please contact our legal team at:</p>
                <a href="mailto:legal@rockscale.ai" className="text-[#25CA22] font-bold hover:underline text-lg">legal@rockscale.ai</a>
             </div>
          </RevealAnimation>
        </div>

      </div>
    </section>
  );
};

export default TermsConditionContent;
`;

fs.writeFileSync(targetFile, content);
console.log('TermsConditionContent updated.');
