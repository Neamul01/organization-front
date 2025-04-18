import Image from 'next/image';

export default function Founders() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <Image
                src="/images/about/founders.jpg"
                alt="Three fellow developers"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/20 via-transparent to-transparent" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              Three fellow developers teamed up
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              In 2013, our story began in Recife, Brazil, when three developers
              united with a shared vision. We understood that software is more
              than just code – it&apos;s about solving real problems for
              business leaders. From day one, we&apos;ve built our company with
              a focus on creating a human-centered, inclusive, and respected
              culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
