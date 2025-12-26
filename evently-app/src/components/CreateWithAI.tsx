'use client';

import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';
import TemplateCard from './TemplateCard';

const templates = [
  {
    id: 1,
    title: 'Create Event Setup',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    id: 2,
    title: 'Create a website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    id: 3,
    title: 'Design floor diagram',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    id: 4,
    title: 'Create Event Setup',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    id: 5,
    title: 'Create a website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    id: 6,
    title: 'Design floor diagram',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  }
];

export default function CreateWithAI() {
  const router = useRouter();

  const handleTemplateSelect = (templateId: number) => {
    console.log('Selected template:', templateId);
    // Navigate based on template type
    if (templateId === 1 || templateId === 4) {
      router.push('/event-setup');
    } else if (templateId === 2 || templateId === 5) {
      router.push('/event-prompt');
    }
  };

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar userName="Mihir" userInitials="MP" />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Page Header */}
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] text-[#0f172b] text-[48px] tracking-[-0.5297px] mb-2">
            Create with AI
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] text-[16px] text-black tracking-[-0.5297px] mb-8">
            ¿Where would you like to start?
          </p>

          {/* Template Grid */}
          <div className="grid grid-cols-3 gap-6 max-w-[900px]">
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                title={template.title}
                description={template.description}
                onAction={() => handleTemplateSelect(template.id)}
                actionLabel="Create"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

