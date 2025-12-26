'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Card from './Card';
import EmptyState from './EmptyState';
import EventListItem, { type EventStatus } from './EventListItem';
import Sidebar from './Sidebar';

// Mock data
const mockEvents = [
  {
    id: '1',
    name: 'Summer Music Festival 2025',
    location: 'Central Park, New York',
    date: 'Jul 15, 2025',
    status: 'live' as EventStatus,
    attendeeCount: 1247
  },
  {
    id: '2',
    name: 'Tech Conference: AI & Future',
    location: 'Convention Center, SF',
    date: 'Aug 22, 2025',
    status: 'published' as EventStatus,
    attendeeCount: 342
  },
  {
    id: '3',
    name: 'Community Yoga Session',
    location: 'Riverside Park, Brooklyn',
    date: 'Jul 30, 2025',
    status: 'ready' as EventStatus,
    attendeeCount: 89
  },
  {
    id: '4',
    name: 'Food & Wine Tasting Evening',
    location: 'Downtown Gallery, Manhattan',
    date: 'Sep 5, 2025',
    status: 'draft' as EventStatus,
    attendeeCount: 0
  },
  {
    id: '5',
    name: 'Startup Networking Mixer',
    location: 'WeWork Hub, Austin',
    date: 'Aug 10, 2025',
    status: 'published' as EventStatus,
    attendeeCount: 156
  },
  {
    id: '6',
    name: 'Kids Art Workshop',
    location: 'Community Center, Boston',
    date: 'Jul 28, 2025',
    status: 'draft' as EventStatus,
    attendeeCount: 0
  }
];

type FilterStatus = 'all' | EventStatus;

export default function Landing() {
  const router = useRouter();
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');

  const handleCreateWithAI = () => {
    router.push('/create-with-ai');
  };

  const handleCreateManually = () => {
    console.log('Create event manually');
  };

  const handleEventClick = (id: string) => {
    console.log('Navigate to event details:', id);
  };

  // Filter events based on selected status
  const filteredEvents = filterStatus === 'all'
    ? mockEvents
    : mockEvents.filter(event => event.status === filterStatus);

  const filterOptions: { value: FilterStatus; label: string }[] = [
    { value: 'all', label: 'All Events' },
    { value: 'live', label: 'Live' },
    { value: 'published', label: 'Published' },
    { value: 'ready', label: 'Ready' },
    { value: 'draft', label: 'Draft' }
  ];

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar userName="Mihir" userInitials="MP" />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-[1400px]">
          {/* Welcome Header */}
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] text-[#0f172b] text-[48px] tracking-[-0.5297px] mb-8">
            Hello, Mihir
          </h1>

          {/* Create Event Cards */}
          <div className="flex gap-6 mb-12">
            <Card
              title="Create Event with AI"
              onAction={handleCreateWithAI}
              actionLabel="Create"
            />
            <Card
              title="Create Event manually"
              onAction={handleCreateManually}
              actionLabel="Create"
            />
          </div>

          {/* Events Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['SF_Pro:Medium',sans-serif] leading-[1.1] text-[24px] text-black">
                Events
              </h2>

              {/* Filter Tabs */}
              {mockEvents.length > 0 && (
                <div className="flex gap-2">
                  {filterOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFilterStatus(option.value)}
                      className={`px-4 py-2 rounded-lg font-['SF_Pro:Medium',sans-serif] text-[14px] transition-colors ${
                        filterStatus === option.value
                          ? 'bg-[#0f172b] text-white'
                          : 'bg-[#efefef] text-[#64748b] hover:bg-[#e5e5e5]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Events List or Empty State */}
            {filteredEvents.length > 0 ? (
              <div className="space-y-4">
                {filteredEvents.map((event) => (
                  <EventListItem
                    key={event.id}
                    id={event.id}
                    name={event.name}
                    location={event.location}
                    date={event.date}
                    status={event.status}
                    attendeeCount={event.attendeeCount}
                    onClick={handleEventClick}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                icon=":'("
                message={
                  filterStatus === 'all'
                    ? 'No fun events created yet...'
                    : `No ${filterStatus} events found...`
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
