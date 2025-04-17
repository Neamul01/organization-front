'use client';

import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Vinta's team has been instrumental in helping us build and scale our product. Their expertise and dedication are unmatched.",
      author: 'John Doe',
      title: 'CTO',
      company: 'Tech Corp',
      image: '/images/undp.webp',
    },
    {
      quote:
        'Working with Vinta has been a game-changer for our business. They understand our needs and deliver exceptional results.',
      author: 'Jane Smith',
      title: 'Product Manager',
      company: 'Innovation Inc',
      image: '/images/uniliver.webp',
    },
    {
      quote:
        'The team at Vinta brings technical excellence and business acumen to every project. They&apos;re true partners in our success.',
      author: 'Mike Johnson',
      title: 'CEO',
      company: 'StartupX',
      image: '/images/quilted.webp',
    },
  ];

  return (
    <section className="bg-transparent py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-3xl font-bold">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-secondary/20 flex flex-col gap-5 rounded-lg p-6 text-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center">
                <Image
                  width={48}
                  height={48}
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="border-secondary/20 mr-4 h-12 w-12 rounded-full border"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.author}</h3>
                  <p className="text-sm">
                    {testimonial.title} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="leading-7 italic">
                &quot;{testimonial.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
