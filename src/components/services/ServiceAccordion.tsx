import { Pencil, Rocket, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function ServiceAccordion() {
  const services = [
    {
      title: 'Sketch your Business Idea',
      icon: Pencil,
      description:
        'De-risk your software budget in 3 weeks with our Product, UX & Engineering experts.',
      cta: 'Learn more',
    },
    {
      title: 'Launch your Product',
      icon: Rocket,
      description:
        'Transform your idea into a reliable product using modern tech.',
      cta: 'Learn more',
    },
    {
      title: 'Grow Your Product',
      icon: TrendingUp,
      description:
        'Expertise to help deliver features, overcome hurdles and impress stakeholders.',
      cta: 'Learn more',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="text-lg text-gray-300">
            We&apos;ll help you navigate all stages of{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              your business
            </span>
          </p>
        </div>

        <div className="mb-8 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/clutch-badge.svg"
              alt="Clutch Rating"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-yellow-400">4.9</span>
          </div>
          <a
            href="#"
            className="text-sm text-blue-400 transition hover:text-blue-300"
          >
            View all reviews
          </a>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 transition hover:border-blue-500"
            >
              <div className="flex items-center gap-4">
                <service.icon className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>
              </div>
              <div className="mt-4">
                <p className="mb-4 text-gray-300">{service.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-400 transition hover:text-blue-300"
                >
                  {service.cta}
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
