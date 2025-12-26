import { useNavigate } from 'react-router-dom';

export type EventStatus = 'draft' | 'ready' | 'published' | 'live';

interface EventListItemProps {
  id: string;
  name: string;
  location: string;
  date: string;
  status: EventStatus;
  attendeeCount?: number;
  onClick?: (id: string) => void;
}

const statusConfig = {
  draft: {
    label: 'Draft',
    color: 'bg-[#94a3b8]',
    textColor: 'text-[#475569]',
    bgColor: 'bg-[#f1f5f9]'
  },
  ready: {
    label: 'Ready',
    color: 'bg-[#3b82f6]',
    textColor: 'text-[#1e40af]',
    bgColor: 'bg-[#dbeafe]'
  },
  published: {
    label: 'Published',
    color: 'bg-[#8b5cf6]',
    textColor: 'text-[#6d28d9]',
    bgColor: 'bg-[#ede9fe]'
  },
  live: {
    label: 'Live',
    color: 'bg-[#10b981]',
    textColor: 'text-[#047857]',
    bgColor: 'bg-[#d1fae5]'
  }
};

export default function EventListItem({
  id,
  name,
  location,
  date,
  status,
  attendeeCount,
  onClick
}: EventListItemProps) {
  const statusStyle = statusConfig[status];

  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#efefef] rounded-[14px] p-6 hover:bg-[#e5e5e5] transition-colors cursor-pointer group"
    >
      <div className="flex items-start justify-between">
        {/* Left Section - Event Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="font-['SF_Pro:Medium',sans-serif] leading-[1.1] text-[18px] text-black group-hover:text-[#3b82f6] transition-colors">
              {name}
            </h3>
            <span className={`px-3 py-1 rounded-full text-[12px] font-['SF_Pro:Medium',sans-serif] ${statusStyle.bgColor} ${statusStyle.textColor}`}>
              {statusStyle.label}
            </span>
          </div>

          <div className="flex items-center gap-6 text-[14px] font-['SF_Pro:Regular',sans-serif] text-[#64748b]">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8.5C9.38071 8.5 10.5 7.38071 10.5 6C10.5 4.61929 9.38071 3.5 8 3.5C6.61929 3.5 5.5 4.61929 5.5 6C5.5 7.38071 6.61929 8.5 8 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 6C13 10.5 8 13.5 8 13.5C8 13.5 3 10.5 3 6C3 3.23858 5.23858 1 8 1C10.7614 1 13 3.23858 13 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{location}</span>
            </div>

            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.6667 1.33334V4.00001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.33333 1.33334V4.00001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 6.66666H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{date}</span>
            </div>

            {attendeeCount !== undefined && attendeeCount > 0 && (
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.3333 14V12.6667C11.3333 11.9594 11.0524 11.2811 10.5523 10.781C10.0522 10.281 9.37391 10 8.66667 10H3.33333C2.62609 10 1.94781 10.281 1.44772 10.781C0.947619 11.2811 0.666667 11.9594 0.666667 12.6667V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 7.33333C7.47276 7.33333 8.66667 6.13943 8.66667 4.66667C8.66667 3.19391 7.47276 2 6 2C4.52724 2 3.33333 3.19391 3.33333 4.66667C3.33333 6.13943 4.52724 7.33333 6 7.33333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.3333 14V12.6667C15.3328 12.0758 15.1362 11.5019 14.7742 11.0349C14.4122 10.5679 13.9053 10.2344 13.3333 10.0867" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.6667 2.08667C11.2403 2.23354 11.7487 2.56714 12.1118 3.03488C12.4748 3.50262 12.6719 4.07789 12.6719 4.67C12.6719 5.26212 12.4748 5.83739 12.1118 6.30513C11.7487 6.77287 11.2403 7.10647 10.6667 7.25334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{attendeeCount} attending</span>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Arrow */}
        <div className="flex items-center ml-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#94a3b8] group-hover:text-[#3b82f6] group-hover:translate-x-1 transition-all"
          >
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

