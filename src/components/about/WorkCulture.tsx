export default function WorkCulture() {
  const testimonials = [
    {
      quote:
        'Working at Vinta you can grow while making sure you are having fun.',
      author: 'Tathyane Muniz',
      role: 'Human Resources',
    },
    {
      quote:
        'Vinta creates a healthy team-oriented environment that helps us deliver our best.',
      author: 'Túlio Lages',
      role: 'Developer',
    },
    {
      quote:
        'At Vinta, the focus is not only code quality but also making sure we are having fun.',
      author: 'Victor Ferraz',
      role: 'Developer',
    },
    {
      quote: 'I love how growth and independence is a key priority at Vinta.',
      author: 'Rebeca Sarai',
      role: 'Tech Lead',
    },
  ];

  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          What <span className="text-blue-600">our team says</span> about
          working at Vinta
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl bg-white p-6 shadow-lg">
              <blockquote className="mb-4">
                <p className="text-lg text-gray-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              <div>
                <div className="font-medium text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="text-blue-600 hover:text-blue-700">
            Check our Glassdoor reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
