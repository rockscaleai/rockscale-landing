const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/app/layout.tsx');

const content = `import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import { interTight } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Script from 'next/script';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  ...generateMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={\`\${interTight.variable} antialiased\`} suppressHydrationWarning>
        <Script id="qorebit-config" strategy="beforeInteractive">
          {\`
            window.QorebitConfig = {
              widgetId: "qrb_widget_a47296a1161067098a0fc8eb8cfd578f"
            };
          \`}
        </Script>
        <Script src="https://qorebit-widget-livid.vercel.app/widget.js" strategy="afterInteractive" />
        
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
          <Suspense>
            <SmoothScrollProvider>
              <Navbar />
              {children}
              <Footer />
            </SmoothScrollProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
`;

fs.writeFileSync(targetFile, content);
console.log('Layout fixed.');
