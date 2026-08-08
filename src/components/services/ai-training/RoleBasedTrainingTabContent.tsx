'use client';
import { CheckIcon } from '@/icons';
import TabContent from '../../ui/tab/TabContent';

const engineeringSkills = [
    'AI coding assistants',
    'LLM APIs',
    'AI application development',
    'Agents',
    'Testing and evaluation',
];
const operationsSkills = [
    'Workflow automation',
    'AI assistants',
    'Document processing',
    'Research automation',
];
const salesSkills = [
    'Lead research',
    'Proposal generation',
    'CRM workflows',
    'Customer intelligence',
];
const dataSkills = [
    'AI-assisted analytics',
    'Natural language querying',
    'Reporting',
    'Data exploration',
];
const leadershipSkills = ['AI strategy', 'AI opportunities', 'AI risk', 'AI governance', 'ROI'];

const data = [
  {
    id: 1,
    tabContent: (
        <ul className="space-y-4">
        {engineeringSkills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <span className="bg-accent/17 dark:bg-accent/10 flex size-5 shrink-0 items-center justify-center rounded-full">
              <CheckIcon className="dark:fill-accent" />
            </span>
            <span className="text-accent">{skill}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 2,
    tabContent: (
        <ul className="space-y-4">
        {operationsSkills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <span className="bg-accent/17 dark:bg-accent/10 flex size-5 shrink-0 items-center justify-center rounded-full">
              <CheckIcon className="dark:fill-accent" />
            </span>
            <span className="text-accent">{skill}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 3,
    tabContent: (
        <ul className="space-y-4">
        {salesSkills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <span className="bg-accent/17 dark:bg-accent/10 flex size-5 shrink-0 items-center justify-center rounded-full">
              <CheckIcon className="dark:fill-accent" />
            </span>
            <span className="text-accent">{skill}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 4,
    tabContent: (
        <ul className="space-y-4">
        {dataSkills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <span className="bg-accent/17 dark:bg-accent/10 flex size-5 shrink-0 items-center justify-center rounded-full">
              <CheckIcon className="dark:fill-accent" />
            </span>
            <span className="text-accent">{skill}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 5,
    tabContent: (
        <ul className="space-y-4">
        {leadershipSkills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <span className="bg-accent/17 dark:bg-accent/10 flex size-5 shrink-0 items-center justify-center rounded-full">
              <CheckIcon className="dark:fill-accent" />
            </span>
            <span className="text-accent">{skill}</span>
          </li>
        ))}
      </ul>
    ),
  },
];

const RoleBasedTrainingTabContent = () => {
  return (
    <>
      {data.map((item, index) => (
        <TabContent key={item.id} index={index}>
          <div className="lg:w-1/2 mx-auto">
            {item.tabContent}
          </div>
        </TabContent>
      ))}
    </>
  );
};

export default RoleBasedTrainingTabContent;
