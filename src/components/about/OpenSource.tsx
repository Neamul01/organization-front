import Image from 'next/image';

export default function OpenSource() {
  const stats = [
    { value: '10+', label: 'years' },
    { value: '30+', label: 'talks' },
    { value: '80+', label: 'articles' },
    { value: '160+', label: 'repos' },
  ];

  return (
    <section className="bg-transparent py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              We pride ourselves for contributing to the open-source community
            </h2>
            <div className="relative mt-8">
              <Image
                src="/images/about/djangocon.jpg"
                alt="DjangoCon presentation"
                width={500}
                height={300}
                className="rounded-2xl"
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-black/70 p-4">
                <p className="text-sm">
                  Flávio Juvenal speaking at DjangoCon US 2022
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-400">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
