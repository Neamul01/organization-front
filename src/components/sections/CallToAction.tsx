'use client';

import Image from 'next/image';
import { CalendlyDialog } from '../ui/calendly-dialog';

const CallToAction = () => {
  return (
    <section className="bg-transparent py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-xl bg-blue-500/10 p-8">
          <div className="mx-auto max-w-3xl text-center">
            <CalendlyDialog
              triggerText={
                <h2 className="mb-6 cursor-pointer text-3xl font-bold text-white">
                  Let&apos;s start the convo.
                  <br />
                  Just <span className="text-blue-500">book a call</span> →
                </h2>
              }
            />
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-12 w-12 overflow-hidden rounded-full border-2 border-blue-500/20"
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
              Still prefer the good old e-mail?{' '}
              <a href="/contact" className="text-blue-500 hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
