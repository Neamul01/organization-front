import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Organization',
  description:
    'This site is a collection of tools and resources for organizations',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className="bg-main-gradient min-h-screen bg-[#020817] bg-[length:1440px_auto] bg-fixed bg-[center_36%] font-['Moderat_Thin'] font-thin">
          <Header />
          {children}
          <div className="fixed right-8 bottom-8 w-72">
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-sm text-gray-300">
                Let&apos;s start a conversation about your project
              </p>
              <Button variant="outline" className="mt-4 w-full">
                Book a call →
              </Button>
            </div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
