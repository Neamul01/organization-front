'use client';

import Image from 'next/image';
import { CalendlyDialog } from '../ui/calendly-dialog';

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0">
        <Image
          src="/images/about/team-full.jpg"
          alt="Intelliduosteam"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-transparent" />
      </div>

      <div className="relative">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
              Now that you know us,{' '}
              <span className="text-blue-400">
                let&apos;s make history together
              </span>
            </h2>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CalendlyDialog
                triggerText={
                  <p className="rounded-full bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700">
                    Book a free consultation
                  </p>
                }
              />
              {/* <a
                href="#"
                className="rounded-full border border-white px-8 py-3 text-white transition hover:bg-white/10"
              >
                Explore careers
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
