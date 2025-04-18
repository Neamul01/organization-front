import Hero from '@/components/about/Hero';
import Founders from '@/components/about/Founders';
import Quote from '@/components/about/Quote';
import Timeline from '@/components/about/Timeline';
import OpenSource from '@/components/about/OpenSource';
import Team from '@/components/about/Team';
import Testimonials from '@/components/about/Testimonials';
import WorkCulture from '@/components/about/WorkCulture';
import CallToAction from '@/components/about/CallToAction';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Founders />
      <Quote />
      <Timeline />
      <OpenSource />
      <Team />
      <Testimonials />
      <WorkCulture />
      <CallToAction />
    </main>
  );
}
