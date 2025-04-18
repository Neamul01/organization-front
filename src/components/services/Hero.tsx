import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-4xl leading-tight font-bold text-white sm:text-5xl lg:text-6xl">
              Services to make you the{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                chillest person
              </span>{' '}
              in the office
            </h1>
            <p className="mb-8 text-lg text-gray-300">
              We&apos;ll help you navigate all stages of your product journey
              with our top-notch professionals.
            </p>
          </div>
          <div className="relative">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl lg:h-[500px]">
              <Image
                src="/images/hero-person.jpg"
                alt="Person working on laptop"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-2xl opacity-40" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
    </section>
  );
}
