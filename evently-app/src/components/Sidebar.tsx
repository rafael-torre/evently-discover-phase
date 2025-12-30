'use client';

import { useParams, useRouter, useSearchParams } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const eventId = params?.eventId as string;
  const section = searchParams?.get('section') || 'overview';

  // Helper function to navigate to a section
  const navigateToSection = (newSection: string) => {
    router.push(`/event/${eventId}?section=${newSection}`);
  };

  // Determine active tab based on section param
  const isOverviewActive = section === 'overview';
  const isRegistrationActive = section === 'registration';
  const isAgendaActive = section === 'agenda';
  const isExhibitorsActive = section === 'exhibitors';
  const isCommunicationActive = section === 'communication';
  const isInsightsActive = section === 'insights';
  const isSettingsActive = section === 'settings';

  return (
    <div className="w-[288px] bg-white flex flex-col border-r border-[#e5e7eb] pt-8 px-4">
      {/* Navigation Items */}
      <div className="space-y-0">
        {/* Overview */}
        <button
          onClick={() => navigateToSection('overview')}
          className={`w-full rounded-[16px] px-[15px] h-12 flex items-center gap-[13px] transition-colors ${
            isOverviewActive ? 'bg-[#f1f5f9]' : 'bg-[#fefefe] hover:bg-[#f1f5f9]'
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 7.5L10 2.5L17.5 7.5V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.5Z" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5 18.3333V10H12.5V18.3333" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-['Inter',sans-serif] text-[16px] text-[#4f4f4f] leading-[24px]">
            Overview
          </span>
        </button>

        {/* Registration */}
        <button
          onClick={() => navigateToSection('registration')}
          className={`w-full rounded-[16px] px-[15px] h-12 flex items-center gap-[13px] transition-colors ${
            isRegistrationActive ? 'bg-[#f1f5f9]' : 'bg-[#fefefe] hover:bg-[#f1f5f9]'
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 7.5H5C4.30964 7.5 3.75 8.05964 3.75 8.75V11.25C3.75 11.9404 4.30964 12.5 5 12.5H15C15.6904 12.5 16.25 11.9404 16.25 11.25V8.75C16.25 8.05964 15.6904 7.5 15 7.5Z" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.5 7.5V12.5" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-['Inter',sans-serif] text-[16px] text-[#4f4f4f] leading-[24px]">
            Registration
          </span>
        </button>

        {/* Agenda */}
        <button
          onClick={() => navigateToSection('agenda')}
          className={`w-full rounded-[16px] px-[15px] h-12 flex items-center gap-[13px] transition-colors ${
            isAgendaActive ? 'bg-[#f1f5f9]' : 'bg-[#fefefe] hover:bg-[#f1f5f9]'
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6667 2.5H3.33333C2.41286 2.5 1.66667 3.24619 1.66667 4.16667V17.5C1.66667 18.4205 2.41286 19.1667 3.33333 19.1667H16.6667C17.5871 19.1667 18.3333 18.4205 18.3333 17.5V4.16667C18.3333 3.24619 17.5871 2.5 16.6667 2.5Z" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3333 0.833344V4.16668" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.66667 0.833344V4.16668" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.66667 7.5H18.3333" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-['Inter',sans-serif] text-[16px] text-[#4f4f4f] leading-[24px]">
            Agenda
          </span>
        </button>

        {/* Exhibitors */}
        <button
          onClick={() => navigateToSection('exhibitors')}
          className={`w-full rounded-[16px] px-[15px] h-12 flex items-center gap-[13px] transition-colors ${
            isExhibitorsActive ? 'bg-[#f1f5f9]' : 'bg-[#fefefe] hover:bg-[#f1f5f9]'
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6667 2.5H3.33333C2.41286 2.5 1.66667 3.24619 1.66667 4.16667V15.8333C1.66667 16.7538 2.41286 17.5 3.33333 17.5H16.6667C17.5871 17.5 18.3333 16.7538 18.3333 15.8333V4.16667C18.3333 3.24619 17.5871 2.5 16.6667 2.5Z" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.66667 7.5H18.3333" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.66667 12.5H8.33333" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-['Inter',sans-serif] text-[16px] text-[#4f4f4f] leading-[24px]">
            Exhibitors
          </span>
        </button>

        {/* Communication */}
        <button
          onClick={() => navigateToSection('communication')}
          className={`w-full rounded-[16px] px-[15px] h-12 flex items-center gap-[13px] transition-colors ${
            isCommunicationActive ? 'bg-[#f1f5f9]' : 'bg-[#fefefe] hover:bg-[#f1f5f9]'
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3333 9.23333C18.3405 10.2348 18.1377 11.2263 17.7381 12.1433C17.2172 13.3444 16.3949 14.3936 15.3487 15.1919C14.3025 15.9903 13.0688 16.5124 11.7674 16.7091C10.466 16.9058 9.13796 16.7709 7.90001 16.3167L1.66667 18.3333L3.68334 12.1C3.22915 10.862 3.09426 9.53399 3.29094 8.23258C3.48761 6.93118 4.00973 5.69749 4.8081 4.65129C5.60647 3.60508 6.65562 2.78281 7.85668 2.26185C8.77375 1.86234 9.76521 1.65952 10.7667 1.66666H11.1667C12.9233 1.75744 14.5827 2.52514 15.8121 3.8163C17.0415 5.10746 17.7524 6.82493 17.8 8.58333V9.23333Z" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-['Inter',sans-serif] text-[16px] text-[#4f4f4f] leading-[24px]">
            Communication
          </span>
        </button>

        {/* Insights */}
        <button
          onClick={() => navigateToSection('insights')}
          className={`w-full rounded-[16px] px-[15px] h-12 flex items-center gap-[13px] transition-colors ${
            isInsightsActive ? 'bg-[#f1f5f9]' : 'bg-[#fefefe] hover:bg-[#f1f5f9]'
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3333 18.3333H1.66667V1.66667" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.3333 5L11.6667 11.6667L8.33333 8.33333L1.66667 15" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-['Inter',sans-serif] text-[16px] text-[#4f4f4f] leading-[24px]">
            Insights
          </span>
        </button>

        {/* Settings */}
        <button
          onClick={() => navigateToSection('settings')}
          className={`w-full rounded-[16px] px-[15px] h-12 flex items-center gap-[13px] transition-colors ${
            isSettingsActive ? 'bg-[#f1f5f9]' : 'bg-[#fefefe] hover:bg-[#f1f5f9]'
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.1667 12.5C16.0557 12.7513 16.0226 13.0302 16.0717 13.3006C16.1209 13.5709 16.2501 13.8203 16.4417 14.0167L16.4917 14.0667C16.6461 14.221 16.7687 14.4044 16.8527 14.6063C16.9368 14.8083 16.9806 15.0249 16.9806 15.2437C16.9806 15.4626 16.9368 15.6792 16.8527 15.8812C16.7687 16.0831 16.6461 16.2665 16.4917 16.4208C16.3373 16.5752 16.154 16.6978 15.952 16.7819C15.75 16.8659 15.5334 16.9097 15.3146 16.9097C15.0957 16.9097 14.8791 16.8659 14.6772 16.7819C14.4752 16.6978 14.2918 16.5752 14.1375 16.4208L14.0875 16.3708C13.8911 16.1792 13.6417 16.05 13.3714 16.0009C13.101 15.9517 12.8221 15.9848 12.5708 16.0958C12.3243 16.2014 12.1153 16.3771 11.9698 16.6017C11.8243 16.8263 11.7487 17.0897 11.7521 17.3583V17.5C11.7521 17.942 11.5765 18.366 11.2624 18.6804C10.9483 18.9945 10.5243 19.1701 10.0823 19.1701C9.64029 19.1701 9.21632 18.9945 8.90221 18.6804C8.5881 18.366 8.4125 17.942 8.4125 17.5V17.425C8.40391 17.1478 8.31883 16.8782 8.16732 16.6478C8.01581 16.4174 7.80403 16.2353 7.55625 16.1208C7.30497 16.0098 7.02605 15.9767 6.75571 16.0259C6.48537 16.075 6.23598 16.2042 6.03958 16.3958L5.98958 16.4458C5.83527 16.6002 5.65188 16.7228 5.44992 16.8069C5.24796 16.8909 5.03136 16.9347 4.8125 16.9347C4.59364 16.9347 4.37704 16.8909 4.17508 16.8069C3.97312 16.7228 3.78973 16.6002 3.63542 16.4458C3.48105 16.2915 3.35843 16.1081 3.27438 15.9062C3.19033 15.7042 3.14648 15.4876 3.14648 15.2688C3.14648 15.0499 3.19033 14.8333 3.27438 14.6313C3.35843 14.4294 3.48105 14.246 3.63542 14.0917L3.68542 14.0417C3.87698 13.8453 4.00616 13.5959 4.05533 13.3255C4.1045 13.0552 4.07136 12.7763 3.96042 12.525C3.85481 12.2785 3.67912 12.0695 3.45451 11.924C3.22991 11.7785 2.96651 11.7029 2.69792 11.7063H2.5C2.05797 11.7063 1.634 11.5307 1.31989 11.2166C1.00578 10.9025 0.830177 10.4785 0.830177 10.0365C0.830177 9.59443 1.00578 9.17046 1.31989 8.85635C1.634 8.54224 2.05797 8.36664 2.5 8.36664H2.575C2.85221 8.35805 3.12178 8.27297 3.35218 8.12146C3.58258 7.96995 3.76474 7.75817 3.87917 7.51039C3.99011 7.25911 4.02325 6.98019 3.97408 6.70985C3.92491 6.43951 3.79573 6.19012 3.60417 5.99372L3.55417 5.94372C3.3998 5.78941 3.27718 5.60602 3.19313 5.40406C3.10908 5.2021 3.06523 4.9855 3.06523 4.76664C3.06523 4.54778 3.10908 4.33118 3.19313 4.12922C3.27718 3.92726 3.3998 3.74387 3.55417 3.58956C3.70848 3.43519 3.89187 3.31257 4.09383 3.22852C4.29579 3.14447 4.51239 3.10062 4.73125 3.10062C4.95011 3.10062 5.16671 3.14447 5.36867 3.22852C5.57063 3.31257 5.75402 3.43519 5.90833 3.58956L5.95833 3.63956C6.15473 3.83112 6.40412 3.9603 6.67446 4.00947C6.9448 4.05864 7.22372 4.0255 7.475 3.91456H7.5C7.74651 3.80895 7.95549 3.63326 8.101 3.40865C8.24651 3.18405 8.32212 2.92065 8.31875 2.65206V2.5C8.31875 2.05797 8.49435 1.634 8.80846 1.31989C9.12257 1.00578 9.54654 0.830177 9.98858 0.830177C10.4306 0.830177 10.8546 1.00578 11.1687 1.31989C11.4828 1.634 11.6584 2.05797 11.6584 2.5V2.575C11.655 2.84359 11.7306 3.10699 11.8761 3.3316C12.0216 3.5562 12.2306 3.73189 12.4771 3.8375C12.7284 3.94844 13.0073 3.98158 13.2776 3.93241C13.548 3.88324 13.7974 3.75406 13.9938 3.5625L14.0438 3.5125C14.1981 3.35813 14.3815 3.23551 14.5834 3.15146C14.7854 3.06741 15.002 3.02356 15.2208 3.02356C15.4397 3.02356 15.6563 3.06741 15.8583 3.15146C16.0602 3.23551 16.2436 3.35813 16.3979 3.5125C16.5523 3.66681 16.6749 3.8502 16.759 4.05216C16.843 4.25412 16.8869 4.47072 16.8869 4.68958C16.8869 4.90844 16.843 5.12504 16.759 5.327C16.6749 5.52896 16.5523 5.71235 16.3979 5.86666L16.3479 5.91666C16.1564 6.11306 16.0272 6.36245 15.978 6.63279C15.9289 6.90313 15.962 7.18205 16.073 7.43333V7.5C16.1786 7.74651 16.3543 7.95549 16.5789 8.101C16.8035 8.24651 17.0669 8.32212 17.3355 8.31875H17.5C17.942 8.31875 18.366 8.49435 18.6801 8.80846C18.9942 9.12257 19.1698 9.54654 19.1698 9.98858C19.1698 10.4306 18.9942 10.8546 18.6801 11.1687C18.366 11.4828 17.942 11.6584 17.5 11.6584H17.425C17.1564 11.655 16.893 11.7306 16.6684 11.8761C16.4438 12.0216 16.2681 12.2306 16.1625 12.4771V12.5Z" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-['Inter',sans-serif] text-[16px] text-[#4f4f4f] leading-[24px]">
            Settings
          </span>
        </button>
      </div>
    </div>
  );
}
