export default function Testimonials() {
  const testimonials = [
    {
      quote: 'We love to trust in your team, they are very proactive.',
      author: 'Will Ploegh',
      role: 'CTO at LastMile',
    },
    {
      quote:
        'The quality of everything they do is so high, never had to fix anything.',
      author: 'Marko Gargenta',
      role: 'CEO at PlusPlus',
    },
    {
      quote: 'They were an integral part of development for over 10+ years.',
      author: 'Nehal Madhani',
      role: 'CEO at AltLegal',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Exceeding Expectations:{' '}
            <span className="text-blue-600">What Clients Share About Us</span>
          </h2>
          <div className="flex items-center gap-12">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-blue-600">4.9</span>
              <span className="text-gray-600">based on reviews</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-blue-600">25</span>
              <span className="text-gray-600">long-term clients</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-900 p-6 text-white shadow-lg"
            >
              <blockquote className="mb-4">
                <p className="text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
              </blockquote>
              <div>
                <div className="font-medium">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="text-blue-600 hover:text-blue-700">
            Browse case studies →
          </a>
        </div>
      </div>
    </section>
  );
}
