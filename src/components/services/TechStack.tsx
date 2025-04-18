import {
  ReactLogo,
  NextLogo,
  PythonLogo,
  DjangoLogo,
  NodeLogo,
  PostgresLogo,
  DockerLogo,
  KubernetesLogo,
  AwsLogo,
  AzureLogo,
  JestLogo,
  PlaywrightLogo,
  FigmaLogo,
  DatadogLogo,
  NewRelicLogo,
  SentryLogo,
} from '@/components/icons';

const techStackData = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: ReactLogo },
      { name: 'Next.js', icon: NextLogo },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Python', icon: PythonLogo },
      { name: 'Django', icon: DjangoLogo },
      { name: 'Node.js', icon: NodeLogo },
      { name: 'PostgreSQL', icon: PostgresLogo },
    ],
  },
  {
    title: 'Cloud',
    items: [
      { name: 'Docker', icon: DockerLogo },
      { name: 'Kubernetes', icon: KubernetesLogo },
      { name: 'AWS', icon: AwsLogo },
      { name: 'Azure', icon: AzureLogo },
    ],
  },
  {
    title: 'Testing',
    items: [
      { name: 'Jest', icon: JestLogo },
      { name: 'Playwright', icon: PlaywrightLogo },
    ],
  },
  {
    title: 'Design',
    items: [{ name: 'Figma', icon: FigmaLogo }],
  },
  {
    title: 'Monitoring',
    items: [
      { name: 'Datadog', icon: DatadogLogo },
      { name: 'New Relic', icon: NewRelicLogo },
      { name: 'Sentry', icon: SentryLogo },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="px-4 py-16 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="from-primary to-secondary mb-4 bg-gradient-to-r bg-clip-text text-center text-4xl font-bold text-transparent">
          Cutting-edge Products
        </h2>
        <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">
          We leverage the latest technologies and tools to deliver high-quality
          solutions that meet your business needs.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {techStackData.map((category, index) => (
            <div key={index} className="rounded-lg p-4 text-white">
              <h3 className="mb-4 text-xl font-semibold">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col items-center">
                    <item.icon className="mb-2 h-12 w-12" />
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
