'use client';

import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-dvh bg-transparent pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="max-w-container mx-auto h-full px-4">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          Your product.
          <br />
          Our mastery.
          <br />
          <span className="text-blue-500">Lasting partnerships.</span>
        </h1>
        <div className="absolute top-32 right-0 w-72">
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
    </section>
  );
};

export default Hero;
