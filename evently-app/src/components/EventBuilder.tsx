'use client';

import EventHeader from './EventHeader';
import Sidebar from './Sidebar';

export default function EventBuilder() {
  return (
    <div className="flex flex-col h-screen w-full bg-white overflow-hidden">
      <EventHeader eventName="Beauty & Wellness Expo 2025" />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-10">
            <div className="flex flex-col items-center justify-center py-20">
              <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[24px] text-[rgba(0,0,0,0.4)] mb-2">
                Event Builder
              </p>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.4)] text-center max-w-md">
                Use the sidebar to navigate between different sections of your event
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
