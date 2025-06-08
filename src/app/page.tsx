import Hero from '@/components/sections/Hero';
import ServiceOfferings from '@/components/sections/ServiceOfferings';
import TechStack from '@/components/sections/TechStack';
import CallToAction from '@/components/sections/CallToAction';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Hero />
      {/* <ClientLogos /> */}
      <ServiceOfferings />
      {/* <Testimonials /> */}
      <TechStack />
      <CallToAction />
      <FAQ />
    </div>
  );
}
