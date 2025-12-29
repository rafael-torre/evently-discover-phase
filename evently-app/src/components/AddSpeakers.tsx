'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
  initials: string;
}

export default function AddSpeakers() {
  const router = useRouter();
  const [speakers, setSpeakers] = useState<Speaker[]>([
    {
      id: '1',
      name: 'Dr. Elisa Ray',
      title: 'Dermatologist',
      bio: 'Leading dermatologist specializing in advanced skin treatments.',
      initials: 'DE',
    },
    {
      id: '2',
      name: 'Michael Tan',
      title: 'Beauty Industry Innovator',
      bio: 'Pioneering new approaches to sustainable beauty products.',
      initials: 'MT',
    },
  ]);

  const handleAddSpeaker = () => {
    // TODO: Open modal or navigate to add speaker form
    console.log('Add new speaker');
  };

  const handleEditSpeaker = (id: string) => {
    // TODO: Open edit modal
    console.log('Edit speaker:', id);
  };

  const handleDeleteSpeaker = (id: string) => {
    setSpeakers(speakers.filter(speaker => speaker.id !== id));
  };

  const handleSkip = () => {
    router.push('/home');
  };

  const handleNext = () => {
    router.push('/home');
  };

  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        background: 'linear-gradient(144.58deg, rgba(250, 250, 250, 1) 0%, rgba(240, 244, 248, 1) 100%)'
      }}
    >
      {/* Navigation Header */}
      <div
        className="sticky top-0 z-10 border-b border-[#e5e7eb] bg-white/80 backdrop-blur-[6px] px-8 md:px-[132.5px] py-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0f172b] rounded-[12px] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="font-['Inter',sans-serif] font-semibold text-[#0f172b] text-[24px]">
            Evently
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-start justify-center pt-8 pb-16 px-4">
        <div className="w-full max-w-[840px] bg-white rounded-[24px] p-10 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          {/* Header */}
          <div className="mb-8">
            <h2 className="font-['Inter',sans-serif] font-semibold text-[#0f172b] text-[32px] mb-2 leading-[40px]">
              Add your speakers
            </h2>
            <p className="font-['SF_Pro',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] leading-[21px]">
              Add, edit, and schedule your event speakers
            </p>
          </div>

          {/* Speakers List */}
          <div className="space-y-8">
            {speakers.map((speaker) => (
              <div
                key={speaker.id}
                className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px] p-5"
              >
                <div className="flex gap-4">
                  {/* Avatar */}
                  <div className="w-20 h-20 bg-[rgba(217,217,217,0.4)] rounded-[16px] flex items-center justify-center flex-shrink-0">
                    <span className="font-['Rethink_Sans',sans-serif] text-[24px] text-[rgba(0,0,0,0.4)] leading-[36px]">
                      {speaker.initials}
                    </span>
                  </div>

                  {/* Speaker Info */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-1">
                        <h3 className="font-['Rethink_Sans',sans-serif] font-medium text-[18px] text-black leading-[27px]">
                          {speaker.name}
                        </h3>
                        <p className="font-['SF_Pro',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] leading-[21px]">
                          {speaker.title}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditSpeaker(speaker.id)}
                          className="p-2 rounded-[8px] hover:bg-[rgba(0,0,0,0.05)] transition-colors"
                          aria-label="Edit speaker"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3333 2.00001C11.5084 1.82491 11.7163 1.68601 11.9451 1.59126C12.1739 1.49651 12.4191 1.44772 12.6667 1.44772C12.9142 1.44772 13.1594 1.49651 13.3882 1.59126C13.617 1.68601 13.8249 1.82491 14 2.00001C14.1751 2.17511 14.314 2.383 14.4088 2.6118C14.5035 2.8406 14.5523 3.08578 14.5523 3.33334C14.5523 3.58091 14.5035 3.82609 14.4088 4.05489C14.314 4.28369 14.1751 4.49158 14 4.66668L5 13.6667L1.33333 14.6667L2.33333 11L11.3333 2.00001Z" stroke="rgba(0,0,0,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDeleteSpeaker(speaker.id)}
                          className="p-2 rounded-[8px] hover:bg-[rgba(0,0,0,0.05)] transition-colors"
                          aria-label="Delete speaker"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4H3.33333H14" stroke="rgba(0,0,0,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.33333 4.00001V2.66668C5.33333 2.31305 5.47381 1.97392 5.72386 1.72387C5.97391 1.47382 6.31304 1.33334 6.66667 1.33334H9.33333C9.68696 1.33334 10.0261 1.47382 10.2761 1.72387C10.5262 1.97392 10.6667 2.31305 10.6667 2.66668V4.00001M12.6667 4.00001V13.3333C12.6667 13.687 12.5262 14.0261 12.2761 14.2761C12.0261 14.5262 11.687 14.6667 11.3333 14.6667H4.66667C4.31304 14.6667 3.97391 14.5262 3.72386 14.2761C3.47381 14.0261 3.33333 13.687 3.33333 13.3333V4.00001H12.6667Z" stroke="rgba(0,0,0,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="font-['SF_Pro',sans-serif] text-[13px] text-[rgba(0,0,0,0.5)] leading-[19.5px]">
                      {speaker.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Add New Speaker Button */}
            <button
              onClick={handleAddSpeaker}
              className="w-full bg-[rgba(255,255,255,0)] border border-[rgba(0,0,0,0.15)] rounded-[20px] px-4 py-2 flex items-center justify-center gap-2 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0.5px_1px_0px_rgba(0,0,0,0.02)] hover:bg-[rgba(0,0,0,0.02)] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3.33334V12.6667" stroke="rgba(0,0,0,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.33333 8H12.6667" stroke="rgba(0,0,0,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-['SF_Pro',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)] leading-[15.4px]">
                Add New Speaker
              </span>
            </button>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleSkip}
                className="flex-1 border border-[#0f172b] rounded-[16px] py-[18px] font-['Inter',sans-serif] font-medium text-[16px] text-[#0f172b] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[rgba(15,23,43,0.05)] transition-colors"
              >
                Skip for now
              </button>
              <button
                onClick={handleNext}
                className="flex-1 bg-[#0f172b] text-white rounded-[16px] py-[18px] font-['Inter',sans-serif] font-medium text-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#1e293b] transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

