import Image from 'next/image';

export const metadata = {
  title: 'Why Choose Us? | Our Values & Mission',
  description:
    'Discover our unique value proposition, core values, and industry-leading achievements that make us the preferred choice for partners and customers.',
  keywords: 'mission, values, achievements, sustainability, innovation',
};

export default function WhyUs() {
  return (
    <main className="min-h-screen bg-white" role="main">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/globe.svg"
            alt="Global presence"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1
            className="text-5xl font-bold text-gray-900 mb-6 font-sans"
            data-testid="main-heading"
          >
            Why Choose Our Organization?
          </h1>
          <p className="text-xl text-gray-600 font-mono">
            Pioneering solutions since 2015, trusted by over 1M+ users worldwide
          </p>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 bg-gray-50" aria-labelledby="core-values">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            id="core-values"
            className="text-3xl font-bold text-center mb-16 font-sans"
          >
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {['Innovation', 'Integrity', 'Excellence'].map((value) => (
              <div
                key={value}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src="/file.svg"
                  alt=""
                  width={64}
                  height={64}
                  className="mb-6"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold mb-4 font-sans">{value}</h3>
                <p className="text-gray-600 font-mono">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Timeline */}
      <section className="py-20" aria-labelledby="achievements">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            id="achievements"
            className="text-3xl font-bold text-center mb-16 font-sans"
          >
            Our Journey
          </h2>
          <div className="relative border-l-2 border-gray-200 ml-4">
            {[2015, 2018, 2021, 2024].map((year) => (
              <div key={year} className="mb-12 pl-8 relative">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1" />
                <h3 className="text-xl font-bold mb-2 font-sans">
                  {year} Milestone
                </h3>
                <p className="text-gray-600 font-mono">
                  Significant achievement description for {year} with measurable
                  results.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
