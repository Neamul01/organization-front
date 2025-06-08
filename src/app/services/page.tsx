import Hero from '@/components/services/Hero';
import ServiceAccordion from '@/components/services/ServiceAccordion';
import TechStack from '@/components/services/TechStack';
import Industries from '@/components/services/Industries';
import CallToAction from '@/components/services/CallToAction';
import FAQ from '@/components/sections/FAQ';

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4">
      <Hero />
      {/* <Nearshoring /> */}
      <ServiceAccordion />
      <TechStack />
      <Industries />
      <CallToAction />
      <FAQ />
    </div>
  );
}
