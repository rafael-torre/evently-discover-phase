'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Button from './Button';

// Status Icons
const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" fill="#10b981" stroke="#10b981" strokeWidth="2"/>
    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WarningIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3L2 17h16L10 3z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M10 8v4M10 14h.01" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const AlertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" fill="#ef4444" stroke="#ef4444" strokeWidth="2"/>
    <path d="M10 6v5M10 14h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
  >
    <path d="M5 7.5L10 12.5L15 7.5" stroke="#4f4f4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Draft state types
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

// Published state types
interface ReadinessItem {
  id: string;
  label: string;
  sublabel?: string;
  status: 'complete' | 'warning' | 'critical';
  urgency?: 'high' | 'medium' | 'low';
  action?: string;
  section?: string;
}

interface OverviewProps {
  eventStatus?: 'draft' | 'published' | 'live' | 'finished';
  eventDate?: Date;
  locationConfirmed?: boolean;
  speakersCount?: number;
  speakersConfirmed?: number; // How many speakers have confirmed attendance
  exhibitorsCount?: number;
  exhibitorsConfirmed?: number; // How many exhibitors have confirmed
  agendaComplete?: boolean;
  ticketsSold?: number;
  ticketCapacity?: number;
  ticketPrice?: number;
  websiteViews?: number;
}

export default function Overview({
  eventStatus = 'draft',
  eventDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Default: 30 days from now
  locationConfirmed = false,
  speakersCount = 0,
  speakersConfirmed = 0,
  exhibitorsCount = 0,
  exhibitorsConfirmed = 0,
  agendaComplete = true,
  ticketsSold = 143,
  ticketCapacity = 300,
  ticketPrice = 50,
  websiteViews = 2640
}: OverviewProps) {
  const router = useRouter();
  const params = useParams();
  const eventId = params?.eventId as string;
  const [isReadinessCollapsed, setIsReadinessCollapsed] = useState(false);

  // Calculate days until event
  const daysUntilEvent = Math.ceil((eventDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  const isEventSoon = daysUntilEvent <= 14; // 2 weeks or less
  const isEventVeryClose = daysUntilEvent <= 7; // 1 week or less

  // Navigation helper
  const navigateToSection = (section: string) => {
    router.push(`/event/${eventId}?section=${section}`);
  };

  // Calculate readiness status for Published state
  const getReadinessItems = (): ReadinessItem[] => {
    const items: ReadinessItem[] = [];

    // Priority 1: Location (CRITICAL if TBD and tickets sold or event soon)
    if (!locationConfirmed) {
      const hasSales = ticketsSold > 0;
      items.push({
        id: 'location',
        label: 'Location is TBD',
        sublabel: hasSales
          ? `${ticketsSold} people bought tickets without knowing the location`
          : 'Attendees need to know where to go',
        status: hasSales || isEventSoon ? 'critical' : 'warning',
        urgency: isEventVeryClose ? 'high' : isEventSoon ? 'medium' : 'low',
        action: 'Set Location Now',
        section: 'details'
      });
    } else {
      items.push({
        id: 'location',
        label: 'Location confirmed',
        status: 'complete',
        section: 'details'
      });
    }

    // Priority 2: Speakers (CRITICAL if none and tickets sold, WARNING otherwise)
    if (speakersCount === 0) {
      const hasSales = ticketsSold > 0;
      items.push({
        id: 'speakers',
        label: 'No speakers announced yet',
        sublabel: hasSales
          ? 'People bought tickets expecting speaker announcements'
          : 'Add speakers to increase ticket sales',
        status: hasSales ? 'critical' : 'warning',
        urgency: isEventSoon ? 'high' : 'medium',
        action: 'Add Speakers',
        section: 'speakers'
      });
    } else {
      const unconfirmedCount = speakersCount - speakersConfirmed;
      if (unconfirmedCount > 0) {
        items.push({
          id: 'speakers',
          label: `${unconfirmedCount} speaker${unconfirmedCount > 1 ? 's' : ''} not confirmed`,
          sublabel: isEventSoon
            ? `${speakersConfirmed}/${speakersCount} confirmed - reach out to confirm attendance`
            : `${speakersConfirmed}/${speakersCount} confirmed - follow up soon`,
          status: 'warning',
          urgency: isEventVeryClose ? 'high' : isEventSoon ? 'medium' : 'low',
          action: 'Confirm Speakers',
          section: 'speakers'
        });
      } else {
        items.push({
          id: 'speakers',
          label: `${speakersCount} speaker${speakersCount > 1 ? 's' : ''} confirmed`,
          status: 'complete',
          section: 'speakers'
        });
      }
    }

    // Priority 3: Agenda (WARNING if incomplete and event soon)
    if (!agendaComplete) {
      items.push({
        id: 'agenda',
        label: 'Agenda incomplete',
        sublabel: isEventSoon
          ? 'Attendees need to plan their day'
          : 'Complete before event goes live',
        status: isEventSoon ? 'warning' : 'warning',
        urgency: isEventVeryClose ? 'high' : isEventSoon ? 'medium' : 'low',
        action: 'Complete Agenda',
        section: 'agenda'
      });
    } else {
      items.push({
        id: 'agenda',
        label: 'Agenda finalized',
        status: 'complete',
        section: 'agenda'
      });
    }

    // Priority 4: Exhibitors (WARNING, less critical than speakers)
    if (exhibitorsCount === 0) {
      items.push({
        id: 'exhibitors',
        label: 'No exhibitors confirmed',
        sublabel: 'Add exhibitors to enhance attendee experience',
        status: 'warning',
        urgency: 'low',
        action: 'Add Exhibitors',
        section: 'exhibitors'
      });
    } else {
      const unconfirmedExhibitors = exhibitorsCount - exhibitorsConfirmed;
      if (unconfirmedExhibitors > 0) {
        items.push({
          id: 'exhibitors',
          label: `${unconfirmedExhibitors} exhibitor${unconfirmedExhibitors > 1 ? 's' : ''} not confirmed`,
          sublabel: `${exhibitorsConfirmed}/${exhibitorsCount} confirmed - verify booth setup`,
          status: 'warning',
          urgency: isEventSoon ? 'medium' : 'low',
          action: 'Confirm Exhibitors',
          section: 'exhibitors'
        });
      } else {
        items.push({
          id: 'exhibitors',
          label: `${exhibitorsCount} exhibitor${exhibitorsCount > 1 ? 's' : ''} confirmed`,
          status: 'complete',
          section: 'exhibitors'
        });
      }
    }

    return items;
  };

  // DRAFT STATE VIEW
  if (eventStatus === 'draft') {
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
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.5)] tracking-[-0.15px]">
                      {section.title}
                    </p>
                    <div className="flex items-center gap-3 w-[182px]">
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

                  <div className="flex flex-col gap-2">
                    {section.tasks.map((task) => (
                      <div key={task.id} className="flex items-center gap-2">
                        {task.completed ? <CheckCircleIcon /> : (
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="9" stroke="rgba(0,0,0,0.2)" strokeWidth="2" fill="none"/>
                          </svg>
                        )}
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

  // PUBLISHED STATE VIEW
  const readinessItems = getReadinessItems();
  const hasCritical = readinessItems.some(item => item.status === 'critical');
  const hasWarning = readinessItems.some(item => item.status === 'warning');
  const allClear = !hasCritical && !hasWarning;

  const overallStatus = hasCritical ? 'critical' : hasWarning ? 'warning' : 'complete';
  const statusConfig = {
    critical: {
      title: 'Needs Immediate Attention',
      subtitle: 'Your event is public - fix these issues now',
      bgColor: 'bg-[#fef2f2]',
      borderColor: 'border-[#ef4444]',
      icon: <AlertIcon />
    },
    warning: {
      title: 'Safe for now',
      subtitle: 'Address these before your event goes live',
      bgColor: 'bg-[#fffbeb]',
      borderColor: 'border-[#f59e0b]',
      icon: <WarningIcon />
    },
    complete: {
      title: 'Public Trust',
      subtitle: 'Your event information is complete',
      bgColor: 'bg-[#f0fdf4]',
      borderColor: 'border-[#10b981]',
      icon: <CheckCircleIcon />
    }
  };

  const currentStatus = statusConfig[overallStatus];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto bg-gradient-to-br from-[#fafafa] to-[#f0f4f8]">
        <div className="px-20 py-8 max-w-[1152px]">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-['Rethink_Sans:Bold',sans-serif] font-bold text-[24px] text-black tracking-[-0.5px]">
              Overview
            </h2>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[rgba(0,0,0,0.15)] rounded-[8px]">
              <ClockIcon />
              <span className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                {daysUntilEvent} days until event
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {/* Event Readiness Card */}
            <div className={`bg-white border-2 ${currentStatus.borderColor} rounded-[8px] overflow-hidden`}>
              <button
                onClick={() => allClear && setIsReadinessCollapsed(!isReadinessCollapsed)}
                className={`w-full px-6 py-4 flex items-center justify-between ${allClear ? 'cursor-pointer hover:bg-gray-50' : 'cursor-default'}`}
              >
                <div className="flex items-center gap-3">
                  {currentStatus.icon}
                  <div>
                    <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[18px] text-black tracking-[-0.5px] text-left">
                      Event Readiness
                    </h3>
                    <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.6)] tracking-[-0.15px] text-left">
                      {currentStatus.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`px-4 py-2 rounded-[6px] ${
                    overallStatus === 'critical' ? 'bg-[#ef4444]' :
                    overallStatus === 'warning' ? 'bg-[#f59e0b]' :
                    'bg-[#10b981]'
                  } text-white font-['Inter:SemiBold',sans-serif] font-semibold text-[14px]`}>
                    {currentStatus.title}
                  </div>
                  {allClear && <ChevronIcon isOpen={isReadinessCollapsed} />}
                </div>
              </button>

              {(!allClear || !isReadinessCollapsed) && (
                <div className={`px-6 pb-4 flex flex-col gap-3 ${currentStatus.bgColor} border-t-2 ${currentStatus.borderColor}`}>
                  {readinessItems
                    .filter(item => item.status !== 'complete')
                    .concat(readinessItems.filter(item => item.status === 'complete'))
                    .map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-start justify-between py-3 px-4 bg-white rounded-[8px] ${
                        item.status !== 'complete' ? 'border-l-4' : 'border-l-2'
                      } ${
                        item.status === 'critical' ? 'border-l-[#ef4444]' :
                        item.status === 'warning' ? 'border-l-[#f59e0b]' :
                        'border-l-[#10b981]'
                      }`}
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <div className="mt-0.5">
                          {item.status === 'complete' && <CheckCircleIcon />}
                          {item.status === 'warning' && <WarningIcon />}
                          {item.status === 'critical' && <AlertIcon />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-['Inter:SemiBold',sans-serif] font-semibold text-[16px] text-black tracking-[-0.5px]">
                              {item.label}
                            </span>
                            {item.urgency === 'high' && item.status !== 'complete' && (
                              <span className="px-2 py-0.5 bg-[#ef4444] text-white text-[11px] font-['Inter:Bold',sans-serif] font-bold rounded-[4px] uppercase">
                                Urgent
                              </span>
                            )}
                          </div>
                          {item.sublabel && (
                            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] mt-1">
                              {item.sublabel}
                            </p>
                          )}
                        </div>
                      </div>
                      {item.action && item.section && (
                        <Button
                          variant={item.status === 'critical' ? 'primary' : 'secondary'}
                          size="small"
                          onClick={() => navigateToSection(item.section!)}
                        >
                          {item.action}
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Ticketing Performance Card */}
            <div
              className="bg-white border border-[rgba(0,0,0,0.15)] rounded-[8px] px-6 py-4 cursor-pointer hover:border-[rgba(0,0,0,0.3)] hover:shadow-sm transition-all"
              onClick={() => navigateToSection('tickets')}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7.5H5C4.30964 7.5 3.75 8.05964 3.75 8.75V11.25C3.75 11.9404 4.30964 12.5 5 12.5H15C15.6904 12.5 16.25 11.9404 16.25 11.25V8.75C16.25 8.05964 15.6904 7.5 15 7.5Z" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.5 7.5V12.5" stroke="#4f4f4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="font-['Inter:SemiBold',sans-serif] font-semibold text-[16px] text-black tracking-[-0.5px]">
                    Ticketing
                  </h3>
                </div>
                <div className="bg-black text-white px-4 py-1.5 rounded-[6px] font-['Inter:Bold',sans-serif] font-bold text-[16px]">
                  {ticketsSold} / {ticketCapacity}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-black">
                    General Admission - ${ticketPrice}
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.5)]">
                    {Math.round((ticketsSold / ticketCapacity) * 100)}% capacity
                  </p>
                </div>
                <Button variant="secondary" size="small" onClick={(e) => {
                  e?.stopPropagation();
                  navigateToSection('tickets');
                }}>
                  Manage Tickets
                </Button>
              </div>
            </div>

            {/* Website Performance Card */}
            <div
              className="bg-white border border-[rgba(0,0,0,0.15)] rounded-[8px] px-6 py-4 cursor-pointer hover:border-[rgba(0,0,0,0.3)] hover:shadow-sm transition-all"
              onClick={() => navigateToSection('website')}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
                  <h3 className="font-['Inter:SemiBold',sans-serif] font-semibold text-[16px] text-black tracking-[-0.5px]">
                    Website Live
                  </h3>
                </div>
                <Button variant="secondary" size="small" onClick={(e) => {
                  e?.stopPropagation();
                  navigateToSection('website');
                }}>
                  View Website
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] text-black">
                  {websiteViews.toLocaleString()} views · {ticketsSold} tickets sold
                </p>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${locationConfirmed ? 'bg-[#10b981]' : 'bg-[#ef4444]'}`}></span>
                    <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)]">
                      Location: {locationConfirmed ? 'Announced' : 'TBD'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${speakersCount > 0 ? 'bg-[#10b981]' : 'bg-[#f59e0b]'}`}></span>
                    <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)]">
                      Speakers: {speakersCount > 0 ? `${speakersCount} listed` : 'None yet'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

