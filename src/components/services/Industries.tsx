'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import HealthtechProjects from './industries/HealthtechProjects';
import EdtechProjects from './industries/EdtechProjects';
import RetailProjects from './industries/RetailProjects';
import WellnessProjects from './industries/WellnessProjects';
import AiAgentsProjects from './industries/AiAgentsProjects';
import FintechProjects from './industries/FintechProjects';

export default function Industries() {
  const industries = [
    { id: 'healthtech', name: 'Healthtech' },
    { id: 'ai-agents', name: 'AI Agents' },
    { id: 'fintech', name: 'Fintech' },
    { id: 'retail', name: 'Retail' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'edtech', name: 'Edtech' },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          Explore our expertise across multiple industries
        </h2>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <Tabs defaultValue="healthtech" className="w-full">
            <TabsList className="mx-auto mb-12 flex flex-wrap justify-center gap-4 bg-transparent p-0">
              {industries.map((industry) => (
                <TabsTrigger
                  key={industry.id}
                  value={industry.id}
                  className="rounded-full border border-gray-700 px-6 py-2 text-sm font-medium !text-gray-300 transition hover:border-blue-500 data-[state=active]:!border-blue-500 [&[data-state=active]]:bg-blue-600 [&[data-state=active]]:text-white"
                >
                  {industry.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="healthtech">
              <HealthtechProjects />
            </TabsContent>
            <TabsContent value="ai-agents">
              <AiAgentsProjects />
            </TabsContent>
            <TabsContent value="fintech">
              <FintechProjects />
            </TabsContent>
            <TabsContent value="retail">
              <RetailProjects />
            </TabsContent>
            <TabsContent value="wellness">
              <WellnessProjects />
            </TabsContent>
            <TabsContent value="edtech">
              <EdtechProjects />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
