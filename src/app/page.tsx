import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ClientLogos from '@/components/sections/ClientLogos';
import ServiceOfferings from '@/components/sections/ServiceOfferings';
import Testimonials from '@/components/sections/Testimonials';
import TechStack from '@/components/sections/TechStack';
import CallToAction from '@/components/sections/CallToAction';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <main className="">
      <div className="dark-body-bg text-white">
        <Header />
        <div className="max-w-container mx-auto">
          <Hero />
          <ClientLogos />
          <ServiceOfferings />
          <Testimonials />
          <TechStack />
          <CallToAction />
          <FAQ />
        </div>
      </div>
      <Footer />
    </main>
  );
}
