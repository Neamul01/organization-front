import Image from 'next/image';

const categories = [
  'Healthtech',
  'AI Agents',
  'Fintech',
  'Retail',
  'Wellness',
  'Edtech',
];

export default function SuccessStories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          Check our success stories
        </h2>

        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-600 transition hover:bg-blue-100"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <div className="mb-4">
                <Image
                  src="/images/case-studies/rewind-logo.svg"
                  alt="Rewind Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <div className="mb-4 flex gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600">
                  Healthtech
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600">
                  Diabetes management
                </span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Rewind: breaking down EHR migration barriers
              </h3>
              <p className="text-gray-600">
                Discover how we helped Rewind migrate from Healthie to Medplum
                to create a tailored EHR solution. Learn from our insights on
                overcoming EHR migration challenges and designing clinical
                workflows.
              </p>
            </div>
            <div className="relative h-[300px] lg:h-auto">
              <Image
                src="/images/case-studies/rewind-hero.jpg"
                alt="Doctor using tablet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
