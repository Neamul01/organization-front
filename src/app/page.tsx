import Hero from '@/components/sections/Hero';
import ClientLogos from '@/components/sections/ClientLogos';
import ServiceOfferings from '@/components/sections/ServiceOfferings';
import Testimonials from '@/components/sections/Testimonials';
import TechStack from '@/components/sections/TechStack';
import CallToAction from '@/components/sections/CallToAction';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Hero />
      <ClientLogos />
      <ServiceOfferings />
      <Testimonials />
      <TechStack />
      <CallToAction />
      <FAQ />
    </div>
  );
}
