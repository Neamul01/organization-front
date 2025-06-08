import Image from 'next/image';

export default function Nearshoring() {
  const testimonial = {
    logo: '/images/undp-logo.svg',
    quote:
      'In just a few meetings to discuss our complex AI product, they had an in-depth understanding of our needs through a multidisciplinary team.',
    author: 'Ricardo Pravia Jácamo',
    role: 'ICT Associate at United Nations',
    tags: ['Social Tech', 'GPT-4'],
    rating: 5,
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl bg-gray-900 p-8">
            <div className="mb-6">
              <Image
                src={testimonial.logo}
                alt="UNDP Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="mb-4 flex gap-2">
              {testimonial.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <blockquote className="mb-6">
              <p className="text-lg text-gray-300">{testimonial.quote}</p>
            </blockquote>
            <div className="mb-4">
              <div className="font-medium text-white">{testimonial.author}</div>
              <div className="text-sm text-gray-400">{testimonial.role}</div>
            </div>
            <div className="flex text-yellow-400">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Why Intelliduosis the{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                top choice
              </span>{' '}
              for nearshoring
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Speed and reliability is what we&apos;re known for. Our onboarding
              is burden-free and our services are customized to fit your needs.
              Plus, we share your time zone, making collaboration seamless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
