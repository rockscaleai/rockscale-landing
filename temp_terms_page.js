const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/app/terms-conditions/page.tsx');

const content = `import TermsConditionContent from '@/components/terms-conditions/TermsConditionContent';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Terms & Conditions | RockScale',
};

const page = () => {
  return (
    <main className="bg-white">
      <TermsConditionContent />
      <CTA
        className="bg-white border-t border-secondary/5"
        badgeClass="!badge-green-v2"
        badgeText="Any Questions?"
        ctaHeading="Need clarification on our policies?"
        description="Our legal and compliance team is happy to assist you."
        btnClass="hover:bg-primary"
        ctaBtnText="Contact Support"
      />
    </main>
  );
};

export default page;
`;

fs.writeFileSync(targetFile, content);
console.log('Terms page wrapper updated.');
