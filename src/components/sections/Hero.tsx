'use client';

const Hero = () => {
  return (
    <section className="flex min-h-dvh items-center bg-transparent pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="h-full w-full px-4">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Your product.
          <br />
          Our craftsmanship.
          <br />
          <span className="text-primary">
            Built to last, backed by experts.
          </span>
        </h1>
        <p className="text-md mt-6 max-w-2xl text-gray-300 md:text-xl">
          We bring your vision to life with clean, scalable code, intuitive
          design, and end-to-end product strategy — all handled by a team of
          industry veterans who truly care.
        </p>
      </div>
    </section>
  );
};

export default Hero;
