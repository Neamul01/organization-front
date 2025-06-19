import Hero from '@/components/about/Hero';
import Founders from '@/components/about/Founders';
import Quote from '@/components/about/Quote';
import Team from '@/components/about/Team';
import CallToAction from '@/components/about/CallToAction';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Founders />
      <Quote />
      {/* <Timeline /> */}
      {/* <OpenSource /> */}
      <Team />
      {/* <Testimonials /> */}
      {/* <WorkCulture /> */}
      <CallToAction />
    </main>
  );
}
