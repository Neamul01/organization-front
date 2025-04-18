import Image from 'next/image';

export default function Offshoring() {
  const advantages = [
    {
      title: 'Global Talent Pool',
      description:
        'Access to a vast network of skilled professionals worldwide',
      icon: '🌍',
    },
    {
      title: '24/7 Operations',
      description: 'Round-the-clock productivity with distributed teams',
      icon: '⏰',
    },
    {
      title: 'Competitive Pricing',
      description:
        'Optimize costs with global market rates and economies of scale',
      icon: '💰',
    },
    {
      title: 'Innovation Hub',
      description: 'Tap into diverse perspectives and innovative solutions',
      icon: '💡',
    },
  ];

  return (
    <section className="bg-gray-900/50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="order-2 flex flex-col justify-center lg:order-1">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Strategic Offshoring
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Transform your business with our strategic offshoring solutions.
              We help you build global teams that drive innovation and growth
              while optimizing costs.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-700 bg-gray-800/50 p-6 transition hover:border-blue-500"
                >
                  <div className="mb-4 text-3xl">{advantage.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 h-[400px] lg:order-2 lg:h-[500px]">
            <Image
              src="/images/offshoring.svg"
              alt="Offshoring Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
