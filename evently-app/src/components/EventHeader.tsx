'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';

interface EventHeaderProps {
  eventName?: string;
  onPublish?: () => void;
}

export default function EventHeader({
  eventName = "Event name",
  onPublish
}: EventHeaderProps) {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 backdrop-blur-[6px] bg-white/80 border-b border-[#e5e7eb] px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Back button and Event info */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push('/home')}
            className="flex items-center justify-center w-6 h-6 text-[#0f172b] hover:text-[#0f172b]/70 transition-colors"
            aria-label="Go back"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="bg-[#0f172b] rounded-[12px] w-10 h-10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h1 className="font-['Inter',sans-serif] font-semibold text-[24px] text-[#0f172b] leading-[36px]">
            {eventName}
          </h1>
        </div>

        {/* Right: Publish button */}
        <button
          onClick={onPublish || (() => console.log('Publish event'))}
          className="bg-black text-white border border-[rgba(0,0,0,0.2)] rounded-[6px] px-3 py-[6px] h-[38px] flex items-center justify-center hover:bg-black/90 transition-colors"
        >
          <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[20px]">
            Publish event
          </span>
        </button>
      </div>
    </div>
  );
}

