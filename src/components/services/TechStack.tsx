import React from 'react';
import { NextLogo } from '@/components/icons';
import {
  VueIcon,
  AngularIcon,
  NodeIcon,
  CppIcon,
  PythonIcon,
  MongoDBIcon,
  PostgresIcon,
  MySQLIcon,
  GrafanaIcon,
  PrometheusIcon,
  DockerIcon,
  KubernetesIcon,
  AwsIcon,
  AzureIcon,
  JestIcon,
  PlaywrightIcon,
  PostmanIcon,
  GithubIcon,
  GitlabIcon,
  TrelloIcon,
  ReactIcon,
  NextJsIcon,
  FigmaIcon,
  OpenTelemetryIcon,
  TerraformIcon,
} from '../icons/techs';
import DjangoIcon from '../icons/techs/django';
import ElkIcon from '../icons/techs/elk';
import AtlassianIcon from '../icons/techs/atlassian';
import CloudFormationIcon from '../icons/techs/cloudformation';
import AzureBicepIcon from '../icons/techs/azureBicep';
import WrikeIcon from '../icons/techs/wrike';

const techStackData = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: ReactIcon },
      { name: 'Next.js', icon: NextJsIcon },
      { name: 'Vue', icon: VueIcon },
      { name: 'Angular', icon: AngularIcon },
    ],
  },
  {
    title: 'Design',
    items: [{ name: 'Figma', icon: FigmaIcon }],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: NodeIcon },
      { name: 'C++', icon: CppIcon },
      { name: 'Python', icon: PythonIcon },
      { name: 'Django', icon: DjangoIcon },
      { name: 'MongoDB', icon: MongoDBIcon },
      { name: 'PostgreSQL', icon: PostgresIcon },
      { name: 'MySQL', icon: MySQLIcon },
    ],
  },
  {
    title: 'Monitoring',
    items: [
      { name: 'Grafana', icon: GrafanaIcon },
      { name: 'Prometheus', icon: PrometheusIcon },
      { name: 'OpenTelemetry', icon: OpenTelemetryIcon },
      { name: 'ELK', icon: ElkIcon },
      { name: 'Atlassian', icon: AtlassianIcon },
    ],
  },
  {
    title: 'Infrastructure (IaC)',
    items: [
      { name: 'Terraform', icon: TerraformIcon },
      { name: 'CloudFormation', icon: CloudFormationIcon },
      { name: 'Azure Bicep', icon: AzureBicepIcon },
    ],
  },
  {
    title: 'Cloud',
    items: [
      {
        name: 'Docker',
        icon: (props: React.ComponentProps<'svg'>) => (
          <DockerIcon width={64} height={64} {...props} />
        ),
      },
      {
        name: 'Kubernetes',
        icon: (props: React.ComponentProps<'svg'>) => (
          <KubernetesIcon width={64} height={64} {...props} />
        ),
      },
      { name: 'AWS', icon: AwsIcon },
      { name: 'Azure', icon: AzureIcon },
    ],
  },
  {
    title: 'Testing',
    items: [
      { name: 'Jest', icon: JestIcon },
      { name: 'Playwright', icon: PlaywrightIcon },
      { name: 'Postman', icon: PostmanIcon },
    ],
  },
  {
    title: 'Product Management',
    items: [
      { name: 'Atlassian', icon: AtlassianIcon },
      { name: 'Trello', icon: TrelloIcon },
      { name: 'Wrike', icon: WrikeIcon },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { name: 'GitHub', icon: GithubIcon },
      { name: 'GitLab', icon: GitlabIcon },
      { name: 'CI/CD tools', icon: NextLogo },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="px-4 py-16 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="from-primary to-secondary text-primary mb-4 bg-gradient-to-r bg-clip-text text-center text-4xl font-bold">
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
                {category.items.map((item, itemIndex) => {
                  const isCustomSized =
                    typeof item.icon === 'function' &&
                    (item.name === 'Docker' || item.name === 'Kubernetes');
                  return (
                    <div key={itemIndex} className="flex flex-col items-center">
                      {isCustomSized ? (
                        <item.icon className="mb-2" />
                      ) : (
                        <item.icon className="mb-2 h-auto w-12" />
                      )}
                      <span className="text-sm">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
