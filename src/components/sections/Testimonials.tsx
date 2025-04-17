'use client';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Vinta's team has been instrumental in helping us build and scale our product. Their expertise and dedication are unmatched.",
      author: 'John Doe',
      title: 'CTO',
      company: 'Tech Corp',
      image: '/testimonials/john-doe.jpg',
    },
    {
      quote:
        'Working with Vinta has been a game-changer for our business. They understand our needs and deliver exceptional results.',
      author: 'Jane Smith',
      title: 'Product Manager',
      company: 'Innovation Inc',
      image: '/testimonials/jane-smith.jpg',
    },
    {
      quote:
        'The team at Vinta brings technical excellence and business acumen to every project. They&apos;re true partners in our success.',
      author: 'Mike Johnson',
      title: 'CEO',
      company: 'StartupX',
      image: '/testimonials/mike-johnson.jpg',
    },
  ];

  return (
    <section className="bg-transparent py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-3xl font-bold">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="mr-4 h-12 w-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.author}</h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.title} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
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
