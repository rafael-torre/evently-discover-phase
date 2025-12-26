'use client';

import { usePathname, useRouter } from 'next/navigation';

const imgIcon = "https://www.figma.com/api/mcp/asset/79580c89-d89c-416f-8435-7f95f9414145";

interface SidebarProps {
  userName?: string;
  userInitials?: string;
}

export default function Sidebar({ userName = "Mihir", userInitials = "MP" }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleEventsClick = () => {
    router.push('/home');
  };

  const handleLogout = () => {
    router.push('/login');
  };

  const isEventsActive = pathname === '/home';

  return (
    <div className="bg-white w-[288px] h-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex flex-col">
      {/* Header */}
      <div className="flex flex-col gap-[8px] pt-[32px] px-[32px] pb-[32px] cursor-pointer" onClick={() => router.push('/home')}>
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] text-[#0f172b] text-[24px] tracking-[-0.5297px]">
          Evently
        </h1>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#62748e] text-[14px] tracking-[-0.1504px]">
          Organizer Dashboard
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-[16px]">
        <div className="flex flex-col gap-[4px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] text-[#62748e] text-[12px] tracking-[0.6px] uppercase px-[16px] py-[8px]">
            Event Management
          </p>
          <div
            onClick={handleEventsClick}
            className={`h-[48px] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex items-center px-[15px] gap-[13px] cursor-pointer transition-colors ${
              isEventsActive ? 'bg-[#fefefe]' : 'bg-white hover:bg-gray-50'
            }`}
          >
            <div className="size-[20px]">
              <img alt="Events icon" className="block max-w-none size-full" src={imgIcon} />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[#4f4f4f] text-[16px] tracking-[-0.3125px]">
              Events
            </p>
          </div>
        </div>
      </div>

      {/* User Profile - Fixed at bottom */}
      <div className="bg-[#f8fafc] mx-[16px] mb-[16px] p-[16px] rounded-[16px]">
        <div className="flex gap-[12px] items-center mb-[12px]">
          <div
            className="rounded-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[40px] flex items-center justify-center"
            style={{ backgroundImage: "linear-gradient(135deg, rgba(202, 213, 226, 1) 0%, rgba(144, 161, 185, 1) 100%)" }}
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-white tracking-[-0.1504px]">
              {userInitials}
            </p>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#0f172b] text-[14px] tracking-[-0.1504px] flex-1">
            {userName}
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-[8px] bg-white hover:bg-[#0f172b] border border-[#e5e7eb] hover:border-[#0f172b] rounded-[12px] px-[16px] py-[10px] font-['Inter:Medium',sans-serif] font-medium leading-[20px] text-[#0f172b] hover:text-white text-[14px] tracking-[-0.1504px] transition-all duration-200 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] group"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5">
            <path d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.6667 11.3333L14 8L10.6667 4.66666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 8H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
}
