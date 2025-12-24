import { useLocation, useNavigate } from 'react-router-dom';

const imgIcon = "https://www.figma.com/api/mcp/asset/79580c89-d89c-416f-8435-7f95f9414145";

interface SidebarProps {
  userName?: string;
  userInitials?: string;
}

export default function Sidebar({ userName = "Mihir", userInitials = "MP" }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleEventsClick = () => {
    navigate('/');
  };

  const isEventsActive = location.pathname === '/';

  return (
    <div className="bg-white w-[288px] h-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex flex-col">
      {/* Header */}
      <div className="flex flex-col gap-[8px] pt-[32px] px-[32px] pb-[32px] cursor-pointer" onClick={() => navigate('/')}>
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
        <div className="flex gap-[12px] items-center">
          <div
            className="rounded-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[40px] flex items-center justify-center"
            style={{ backgroundImage: "linear-gradient(135deg, rgba(202, 213, 226, 1) 0%, rgba(144, 161, 185, 1) 100%)" }}
          >
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-white tracking-[-0.1504px]">
              {userInitials}
            </p>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#0f172b] text-[14px] tracking-[-0.1504px]">
            {userName}
          </p>
        </div>
      </div>
    </div>
  );
}
