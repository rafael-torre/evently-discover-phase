'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import HomeSidebar from './HomeSidebar';

// Mock data - simplified for the new design
const mockEvents = [
  { id: '1', name: 'Event name' },
  { id: '2', name: 'Event name' },
];

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const handleNewEvent = () => {
    router.push('/create-with-ai');
  };

  const handleEventClick = () => {
    router.push('/event-builder');
  };

  return (
    <div
      className="flex h-screen w-full overflow-hidden"
      style={{
        background: 'linear-gradient(144.58deg, rgba(250, 250, 250, 1) 0%, rgba(240, 244, 248, 1) 100%)'
      }}
    >
      {/* Sidebar */}
      <HomeSidebar userName="Mihir" userInitials="MP" userEmail="mihir.patel@eplannerpro.com" />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-[50px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-['Inter',sans-serif] font-semibold text-[18px] text-black leading-[20px]">
              All Events
            </h2>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="bg-white border border-[#e3e8ef] rounded-[6px] px-[21px] py-[9px] w-[256px] flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7" cy="7" r="5.25" stroke="#9aa4b2" strokeWidth="1.5"/>
                  <path d="M11 11L14 14" stroke="#9aa4b2" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search events"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 font-['Inter',sans-serif] text-[14px] text-[#697586] leading-normal outline-none bg-transparent placeholder:text-[#697586]"
                />
              </div>

              {/* View Toggle */}
              <div className="bg-[#e4e4e5] rounded-[6px] pl-[2px] pr-3 py-[2px] flex items-center gap-3">
            <button
                  onClick={() => setViewMode('grid')}
                  className={`w-[36px] h-[36px] rounded-[6px] flex items-center justify-center transition-all ${
                    viewMode === 'grid'
                      ? 'bg-white border border-[#f0f0f0] shadow-[1px_4px_4px_0px_rgba(224,224,224,0.25)]'
                      : ''
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="7" height="7" rx="1" stroke="#4f4f4f" strokeWidth="1.5"/>
                    <rect x="11" y="2" width="7" height="7" rx="1" stroke="#4f4f4f" strokeWidth="1.5"/>
                    <rect x="2" y="11" width="7" height="7" rx="1" stroke="#4f4f4f" strokeWidth="1.5"/>
                    <rect x="11" y="11" width="7" height="7" rx="1" stroke="#4f4f4f" strokeWidth="1.5"/>
                  </svg>
            </button>
              <button
                  onClick={() => setViewMode('list')}
                  className={`w-5 h-5 flex items-center justify-center ${
                    viewMode === 'list' ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5H17" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M3 10H17" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M3 15H17" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
              </button>
              </div>

              {/* New Event Button */}
              <button
                onClick={handleNewEvent}
                className="bg-black border border-[rgba(0,0,0,0.2)] rounded-[6px] px-3 py-[6px] h-[38px] flex items-center justify-center hover:bg-[#1e293b] transition-colors"
              >
                <span className="font-['Inter',sans-serif] font-medium text-[14px] text-white leading-[20px]">
                  New event
                </span>
              </button>
            </div>
          </div>

          {/* Event Grid */}
          <div className="flex gap-6">
              {mockEvents.map((event) => (
                <button
                  key={event.id}
                  onClick={handleEventClick}
                  className="cursor-pointer space-y-2 text-left"
                  type="button"
                >
                <div className="w-[240px] h-[160px] bg-white border border-[rgba(0,0,0,0.15)] rounded-[12px] hover:shadow-lg transition-all" />
                <div className="font-['Inter',sans-serif] font-medium text-[14px] text-black leading-[20px]">
                    {event.name}
                  </div>
                </button>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
