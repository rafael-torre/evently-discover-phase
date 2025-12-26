'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { type EventStatus } from './EventListItem';
import Sidebar from './Sidebar';

// Mock data
const mockEvents = [
  {
    id: '1',
    name: 'Summer Music Festival 2025',
    location: 'Central Park, New York',
    date: 'Jul 15, 2025',
    dateObj: new Date('2025-07-15'),
    status: 'live' as EventStatus,
    attendeeCount: 1247,
    capacity: 2000,
    revenue: 124700
  },
  {
    id: '2',
    name: 'Tech Conference: AI & Future',
    location: 'Convention Center, SF',
    date: 'Aug 22, 2025',
    dateObj: new Date('2025-08-22'),
    status: 'published' as EventStatus,
    attendeeCount: 342,
    capacity: 500,
    revenue: 68400
  },
  {
    id: '3',
    name: 'Community Yoga Session',
    location: 'Riverside Park, Brooklyn',
    date: 'Jul 30, 2025',
    dateObj: new Date('2025-07-30'),
    status: 'ready' as EventStatus,
    attendeeCount: 89,
    capacity: 150,
    revenue: 4450
  },
  {
    id: '4',
    name: 'Food & Wine Tasting Evening',
    location: 'Downtown Gallery, Manhattan',
    date: 'Sep 5, 2025',
    dateObj: new Date('2025-09-05'),
    status: 'draft' as EventStatus,
    attendeeCount: 0,
    capacity: 100,
    revenue: 0
  },
  {
    id: '5',
    name: 'Startup Networking Mixer',
    location: 'WeWork Hub, Austin',
    date: 'Aug 10, 2025',
    dateObj: new Date('2025-08-10'),
    status: 'published' as EventStatus,
    attendeeCount: 156,
    capacity: 200,
    revenue: 15600
  },
  {
    id: '6',
    name: 'Kids Art Workshop',
    location: 'Community Center, Boston',
    date: 'Jul 28, 2025',
    dateObj: new Date('2025-07-28'),
    status: 'draft' as EventStatus,
    attendeeCount: 0,
    capacity: 50,
    revenue: 0
  }
];

const statusConfig = {
  draft: {
    label: 'Draft',
    color: 'bg-[#94a3b8]',
    textColor: 'text-[#475569]',
    bgColor: 'bg-[#f1f5f9]',
    borderColor: 'border-[#cbd5e1]'
  },
  ready: {
    label: 'Ready',
    color: 'bg-[#3b82f6]',
    textColor: 'text-[#1e40af]',
    bgColor: 'bg-[#dbeafe]',
    borderColor: 'border-[#93c5fd]'
  },
  published: {
    label: 'Published',
    color: 'bg-[#8b5cf6]',
    textColor: 'text-[#6d28d9]',
    bgColor: 'bg-[#ede9fe]',
    borderColor: 'border-[#c4b5fd]'
  },
  live: {
    label: 'Live',
    color: 'bg-[#10b981]',
    textColor: 'text-[#047857]',
    bgColor: 'bg-[#d1fae5]',
    borderColor: 'border-[#6ee7b7]'
  }
};

export default function Home() {
  const router = useRouter();
  const [selectedView, setSelectedView] = useState<'timeline' | 'all'>('timeline');

  const handleCreateWithAI = () => {
    router.push('/create-with-ai');
  };

  const handleEventClick = (id: string) => {
    console.log('Navigate to event details:', id);
  };

  // Calculate stats
  const totalEvents = mockEvents.length;
  const liveEvents = mockEvents.filter(e => e.status === 'live').length;
  const totalAttendees = mockEvents.reduce((sum, e) => sum + e.attendeeCount, 0);
  const totalRevenue = mockEvents.reduce((sum, e) => sum + e.revenue, 0);

  // Get upcoming events (next 30 days, sorted by date)
  const now = new Date();
  const thirtyDaysFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
  const upcomingEvents = mockEvents
    .filter(e => e.dateObj >= now && e.dateObj <= thirtyDaysFromNow && e.status !== 'draft')
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

  // Get events needing attention (drafts or ready but not published)
  const needsAttention = mockEvents.filter(e => e.status === 'draft' || e.status === 'ready');

  // Get active events (live or published)
  const activeEvents = mockEvents.filter(e => e.status === 'live' || e.status === 'published');

  const formatRevenue = (amount: number) => {
    if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`;
    if (amount >= 1000) return `$${(amount / 1000).toFixed(1)}K`;
    return `$${amount}`;
  };

  const getTimeUntil = (date: Date) => {
    const diff = date.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Tomorrow';
    if (days < 7) return `In ${days} days`;
    if (days < 14) return 'Next week';
    return `In ${Math.floor(days / 7)} weeks`;
  };

  return (
    <div className="flex h-screen w-full bg-[#fafafa] overflow-hidden">
      {/* Sidebar */}
      <Sidebar userName="Mihir" userInitials="MP" />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-[1400px] mx-auto">
          {/* Hero Section - Personalized Greeting with Context */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="font-['Inter',sans-serif] font-semibold text-[#0f172b] text-[40px] tracking-[-0.5px] mb-2">
                  Good {new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 18 ? 'afternoon' : 'evening'}, Mihir
                </h1>
                <p className="font-['SF_Pro',sans-serif] text-[18px] text-[#64748b]">
                  {liveEvents > 0
                    ? `You have ${liveEvents} event${liveEvents > 1 ? 's' : ''} live right now`
                    : upcomingEvents.length > 0
                    ? `Your next event is ${getTimeUntil(upcomingEvents[0].dateObj).toLowerCase()}`
                    : 'Ready to create something amazing?'}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-6">
                <div className="text-right">
                  <div className="font-['Inter',sans-serif] font-semibold text-[28px] text-[#0f172b]">
                    {totalAttendees.toLocaleString()}
                  </div>
                  <div className="font-['SF_Pro',sans-serif] text-[13px] text-[#64748b]">
                    Total Attendees
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-['Inter',sans-serif] font-semibold text-[28px] text-[#10b981]">
                    {formatRevenue(totalRevenue)}
                  </div>
                  <div className="font-['SF_Pro',sans-serif] text-[13px] text-[#64748b]">
                    Revenue
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Zone - Prominent CTA */}
          <div className="mb-10">
            <button
              onClick={handleCreateWithAI}
              className="group relative w-full bg-gradient-to-br from-[#0f172b] to-[#1e293b] rounded-[20px] p-10 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] text-left"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-3 rounded-full -ml-32 -mb-32 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 flex items-start justify-between gap-8">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="px-4 py-1.5 bg-white/10 rounded-full text-white text-[12px] font-['SF_Pro',sans-serif] font-medium tracking-wide backdrop-blur-sm">
                      AI-POWERED
                    </span>
                  </div>
                  <h3 className="font-['Inter',sans-serif] font-semibold text-white text-[32px] mb-3 tracking-tight text-left">
                    Create Your Event with AI
                  </h3>
                  <p className="font-['SF_Pro',sans-serif] text-[17px] text-white/80 leading-relaxed text-left">
                    Describe your vision and let AI craft the perfect event in minutes. From concept to launch, we'll handle the details.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-white font-['SF_Pro',sans-serif] font-semibold text-[16px] bg-white/10 px-6 py-4 rounded-[14px] backdrop-blur-sm group-hover:bg-white/20 transition-all flex-shrink-0 self-center">
                  Get Started
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-2 transition-transform">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </button>
          </div>

          {/* View Toggle */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-['Inter',sans-serif] font-semibold text-[#0f172b] text-[28px]">
              Your Events
            </h2>
            <div className="flex gap-2 bg-white rounded-[12px] p-1 border border-[#e5e7eb]">
              <button
                onClick={() => setSelectedView('timeline')}
                className={`px-4 py-2 rounded-[8px] font-['SF_Pro',sans-serif] text-[14px] font-medium transition-all ${
                  selectedView === 'timeline'
                    ? 'bg-[#0f172b] text-white shadow-sm'
                    : 'text-[#64748b] hover:text-[#0f172b]'
                }`}
              >
                Timeline
              </button>
              <button
                onClick={() => setSelectedView('all')}
                className={`px-4 py-2 rounded-[8px] font-['SF_Pro',sans-serif] text-[14px] font-medium transition-all ${
                  selectedView === 'all'
                    ? 'bg-[#0f172b] text-white shadow-sm'
                    : 'text-[#64748b] hover:text-[#0f172b]'
                }`}
              >
                All Events
              </button>
            </div>
          </div>

          {/* Timeline View */}
          {selectedView === 'timeline' ? (
            <div className="space-y-8">
              {/* Needs Attention Section */}
              {needsAttention.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse"></div>
                    <h3 className="font-['SF_Pro',sans-serif] font-semibold text-[#0f172b] text-[18px]">
                      Needs Your Attention
                    </h3>
                    <span className="px-2 py-1 bg-[#fef3c7] text-[#92400e] rounded-full text-[12px] font-['SF_Pro',sans-serif] font-medium">
                      {needsAttention.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {needsAttention.map((event) => (
                      <div
                        key={event.id}
                        onClick={() => handleEventClick(event.id)}
                        className="group bg-white border-2 border-[#fbbf24] rounded-[16px] p-6 hover:shadow-lg transition-all cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <span className={`px-3 py-1 rounded-full text-[12px] font-['SF_Pro',sans-serif] font-medium ${statusConfig[event.status].bgColor} ${statusConfig[event.status].textColor}`}>
                            {statusConfig[event.status].label}
                          </span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#94a3b8] group-hover:text-[#0f172b] group-hover:translate-x-1 transition-all">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h4 className="font-['SF_Pro',sans-serif] font-semibold text-[#0f172b] text-[16px] mb-2 group-hover:text-[#3b82f6] transition-colors">
                          {event.name}
                        </h4>
                        <div className="flex items-center gap-4 text-[13px] text-[#64748b] font-['SF_Pro',sans-serif]">
                          <span>{event.date}</span>
                          <span>•</span>
                          <span>{event.location}</span>
                        </div>
                        {event.status === 'draft' && (
                          <div className="mt-3 pt-3 border-t border-[#f3f4f6]">
                            <p className="text-[13px] text-[#f59e0b] font-['SF_Pro',sans-serif] font-medium">
                              Complete setup to publish
                            </p>
                          </div>
                        )}
                        {event.status === 'ready' && (
                          <div className="mt-3 pt-3 border-t border-[#f3f4f6]">
                            <p className="text-[13px] text-[#3b82f6] font-['SF_Pro',sans-serif] font-medium">
                              Ready to publish
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Upcoming Section */}
              {upcomingEvents.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#3b82f6]"></div>
                    <h3 className="font-['SF_Pro',sans-serif] font-semibold text-[#0f172b] text-[18px]">
                      Coming Up
                    </h3>
                    <span className="px-2 py-1 bg-[#dbeafe] text-[#1e40af] rounded-full text-[12px] font-['SF_Pro',sans-serif] font-medium">
                      Next 30 days
                    </span>
                  </div>
                  <div className="space-y-3">
                    {upcomingEvents.map((event, index) => (
                      <div
                        key={event.id}
                        onClick={() => handleEventClick(event.id)}
                        className="group bg-white rounded-[16px] p-6 hover:shadow-lg transition-all cursor-pointer border border-[#e5e7eb] hover:border-[#3b82f6]"
                      >
                        <div className="flex items-center gap-6">
                          {/* Timeline indicator */}
                          <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center text-white font-['Inter',sans-serif] font-bold text-[18px]">
                              {index + 1}
                            </div>
                            {index < upcomingEvents.length - 1 && (
                              <div className="w-0.5 h-8 bg-[#e5e7eb] mt-2"></div>
                            )}
                          </div>

                          {/* Event info */}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="font-['SF_Pro',sans-serif] font-semibold text-[#0f172b] text-[18px] group-hover:text-[#3b82f6] transition-colors">
                                {event.name}
                              </h4>
                              <span className={`px-3 py-1 rounded-full text-[12px] font-['SF_Pro',sans-serif] font-medium ${statusConfig[event.status].bgColor} ${statusConfig[event.status].textColor}`}>
                                {statusConfig[event.status].label}
                              </span>
                            </div>
                            <div className="flex items-center gap-6 text-[14px] text-[#64748b] font-['SF_Pro',sans-serif]">
                              <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M10.6667 1.33334V4.00001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M5.33333 1.33334V4.00001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M2 6.66666H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="font-medium">{getTimeUntil(event.dateObj)}</span>
                                <span className="text-[#94a3b8]">•</span>
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 8.5C9.38071 8.5 10.5 7.38071 10.5 6C10.5 4.61929 9.38071 3.5 8 3.5C6.61929 3.5 5.5 4.61929 5.5 6C5.5 7.38071 6.61929 8.5 8 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M13 6C13 10.5 8 13.5 8 13.5C8 13.5 3 10.5 3 6C3 3.23858 5.23858 1 8 1C10.7614 1 13 3.23858 13 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>{event.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Metrics */}
                          <div className="flex gap-8 pr-4">
                            <div className="text-center">
                              <div className="font-['Inter',sans-serif] font-semibold text-[20px] text-[#0f172b]">
                                {event.attendeeCount}
                              </div>
                              <div className="font-['SF_Pro',sans-serif] text-[12px] text-[#64748b]">
                                Attendees
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="font-['Inter',sans-serif] font-semibold text-[20px] text-[#10b981]">
                                {Math.round((event.attendeeCount / event.capacity) * 100)}%
                              </div>
                              <div className="font-['SF_Pro',sans-serif] text-[12px] text-[#64748b]">
                                Capacity
                              </div>
                            </div>
                          </div>

                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#94a3b8] group-hover:text-[#3b82f6] group-hover:translate-x-1 transition-all">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Empty State */}
              {needsAttention.length === 0 && upcomingEvents.length === 0 && (
                <div className="bg-white rounded-[20px] p-16 text-center border-2 border-dashed border-[#e5e7eb]">
                  <div className="w-20 h-20 bg-[#f1f5f9] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#94a3b8]">
                      <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.6947 13.7H15.7037M15.6947 16.7H15.7037M11.9955 13.7H12.0045M11.9955 16.7H12.0045M8.29431 13.7H8.30329M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-['Inter',sans-serif] font-semibold text-[#0f172b] text-[24px] mb-2">
                    No upcoming events
                  </h3>
                  <p className="font-['SF_Pro',sans-serif] text-[16px] text-[#64748b] mb-6">
                    Create your first event to get started
                  </p>
                  <button
                    onClick={handleCreateWithAI}
                    className="px-6 py-3 bg-[#0f172b] text-white rounded-[12px] font-['SF_Pro',sans-serif] font-medium hover:bg-[#1e293b] transition-colors"
                  >
                    Create Event
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* All Events View - Grid Layout */
            <div className="grid grid-cols-3 gap-4">
              {mockEvents.map((event) => (
                <div
                  key={event.id}
                  onClick={() => handleEventClick(event.id)}
                  className="group bg-white rounded-[16px] p-5 hover:shadow-lg transition-all cursor-pointer border border-[#e5e7eb] hover:border-[#3b82f6]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-['SF_Pro',sans-serif] font-medium ${statusConfig[event.status].bgColor} ${statusConfig[event.status].textColor}`}>
                      {statusConfig[event.status].label}
                    </span>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#94a3b8] group-hover:text-[#3b82f6] group-hover:translate-x-1 transition-all">
                      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className="font-['SF_Pro',sans-serif] font-semibold text-[#0f172b] text-[15px] mb-3 group-hover:text-[#3b82f6] transition-colors line-clamp-2">
                    {event.name}
                  </h4>
                  <div className="space-y-2 text-[13px] text-[#64748b] font-['SF_Pro',sans-serif] mb-4">
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.6667 1.33334V4.00001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.33333 1.33334V4.00001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 6.66666H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C9.38071 8.5 10.5 7.38071 10.5 6C10.5 4.61929 9.38071 3.5 8 3.5C6.61929 3.5 5.5 4.61929 5.5 6C5.5 7.38071 6.61929 8.5 8 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 6C13 10.5 8 13.5 8 13.5C8 13.5 3 10.5 3 6C3 3.23858 5.23858 1 8 1C10.7614 1 13 3.23858 13 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#f3f4f6]">
                    <div className="text-center">
                      <div className="font-['Inter',sans-serif] font-semibold text-[16px] text-[#0f172b]">
                        {event.attendeeCount}
                      </div>
                      <div className="font-['SF_Pro',sans-serif] text-[11px] text-[#64748b]">
                        Attendees
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="font-['Inter',sans-serif] font-semibold text-[16px] text-[#10b981]">
                        {formatRevenue(event.revenue)}
                      </div>
                      <div className="font-['SF_Pro',sans-serif] text-[11px] text-[#64748b]">
                        Revenue
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
