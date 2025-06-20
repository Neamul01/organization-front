'use client';

import Image from 'next/image';
import { InlineWidget } from 'react-calendly';

const CallToAction = () => {
  return (
    <section className="bg-transparent py-20">
      <div className="container mx-auto px-4">
        <div className="bg-secondary shadow-primary rounded-xl p-0 md:p-8">
          <div className="flex flex-col items-stretch gap-0 md:flex-row md:gap-8">
            {/* Left Side */}
            <div className="flex flex-1 flex-col justify-center px-6 py-10 md:px-0 md:py-0">
              <h2 className="mb-6 text-left text-3xl font-bold text-white">
                Let&apos;s start the convo.
                <br />
                Just <span className="text-blue-500">book a call</span> →
              </h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="h-12 w-12 overflow-hidden rounded-full border-2 border-blue-500/20 bg-black/60"
                  >
                    <Image
                      src={`/images/undp.webp`}
                      alt="Team member"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-400">
                Still prefer the good old email?{' '}
                <a href="/contact" className="text-blue-500 hover:underline">
                  Contact us
                </a>
              </p>
            </div>
            {/* Right Side: Calendly */}
            <div className="flex flex-1 items-center justify-end p-0 md:p-4">
              <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white md:-my-20 md:py-2">
                <InlineWidget
                  url="https://calendly.com/intelliduous"
                  styles={{ height: 620, minWidth: '320px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
