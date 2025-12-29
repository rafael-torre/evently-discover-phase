'use client';

import Button from './Button';

// Check icon for completed tasks
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" fill="black" stroke="black" strokeWidth="2"/>
    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Circle icon for incomplete tasks
const CircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" stroke="rgba(0,0,0,0.2)" strokeWidth="2" fill="none"/>
  </svg>
);

interface Task {
  id: string;
  label: string;
  completed: boolean;
}

interface TaskSection {
  title: string;
  progress: number;
  tasks: Task[];
}

export default function Overview() {
  const taskSections: TaskSection[] = [
    {
      title: 'Event definition',
      progress: 20,
      tasks: [
        { id: '1', label: 'Event topic is clear', completed: true },
        { id: '2', label: 'Target audience is clear', completed: true },
        { id: '3', label: 'Speakers are added', completed: true },
        { id: '4', label: 'Create your agenda', completed: false },
        { id: '5', label: 'Confirm ticket tiers', completed: false },
        { id: '6', label: 'Set up your company branding', completed: false },
        { id: '7', label: 'Publish your event website', completed: false },
      ]
    },
    {
      title: 'Event operations',
      progress: 20,
      tasks: [
        { id: '8', label: 'Start confirming speakers', completed: false },
        { id: '9', label: 'Complete your agenda', completed: false },
      ]
    }
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-br from-[#fafafa] to-[#f0f4f8]">
        <div className="px-20 py-8 max-w-[1152px]">
          <h2 className="font-['Rethink_Sans:Bold',sans-serif] font-bold text-[24px] text-black tracking-[-0.5px] mb-3">
            Overview
          </h2>

          <div className="flex flex-col gap-3">
            {taskSections.map((section, index) => (
              <div
                key={index}
                className="bg-white border border-[rgba(0,0,0,0.15)] rounded-[8px] px-6 py-4"
              >
                {/* Section Header */}
                <div className="flex items-center justify-between mb-2">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.5)] tracking-[-0.15px]">
                    {section.title}
                  </p>
                  <div className="flex items-center gap-3 w-[182px]">
                    {/* Progress Bar */}
                    <div className="flex-1 bg-[#eef2f6] rounded-[8px] h-[8px] overflow-hidden flex">
                      {Array.from({ length: 10 }).map((_, i) => {
                        const segmentProgress = (section.progress / 10);
                        const isFilledSegment = i < Math.floor(segmentProgress);
                        const isLastFilledSegment = i === Math.floor(segmentProgress) - 1;

                        return (
                          <div
                            key={i}
                            className={`flex-1 h-full ${
                              isFilledSegment
                                ? `bg-black ${isLastFilledSegment ? 'rounded-r-[8px]' : ''}`
                                : ''
                            }`}
                          />
                        );
                      })}
                    </div>
                    <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#121926]">
                      {section.progress}%
                    </span>
                  </div>
                </div>

                {/* Task List */}
                <div className="flex flex-col gap-2">
                  {section.tasks.map((task) => (
                    <div key={task.id} className="flex items-center gap-2">
                      {task.completed ? <CheckIcon /> : <CircleIcon />}
                      <span className="font-['Inter:Regular',sans-serif] text-[16px] text-black tracking-[-0.5px]">
                        {task.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

