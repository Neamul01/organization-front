import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ClientLogos from '@/components/sections/ClientLogos';
import ServiceOfferings from '@/components/sections/ServiceOfferings';
import Testimonials from '@/components/sections/Testimonials';
import TechStack from '@/components/sections/TechStack';
import CallToAction from '@/components/sections/CallToAction';
import FAQ from '@/components/sections/FAQ';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="">
      <div className="dark-body-bg relative text-white">
        <Header />
        <div className="mx-auto max-w-[1440px]">
          <Hero />
          <ClientLogos />
          <ServiceOfferings />
          <Testimonials />
          <TechStack />
          <CallToAction />
          <FAQ />
        </div>

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
      </div>
      <Footer />
    </main>
  );
}
