export default function Timeline() {
  const timelineItems = [
    {
      year: '2013',
      title: 'The beginning',
      description: 'Focused on small agile projects with a compact dev team.',
    },
    {
      year: '2015',
      title: 'Expanding abroad',
      description: 'Built MVPs and entered the US market.',
    },
    {
      year: '2018',
      title: 'Stabilization and maturity',
      description: 'Long-term clients, product teams, and internal growth.',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
          10 years of tech excellence:
          <span className="text-blue-600"> A timeline</span>
        </h2>
        <p className="mb-12 text-lg text-gray-600">
          We&apos;ve been innovating, learning, and tackling complex challenges
          throughout our journey.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-6 left-0 h-0.5 w-full bg-gray-200" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative pt-6">
                {/* Timeline dot */}
                <div className="absolute -top-1 h-4 w-4 rounded-full border-4 border-blue-600 bg-white" />
                <div className="text-2xl font-bold text-blue-600">
                  {item.year}
                </div>
                <h3 className="mt-4 mb-2 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
