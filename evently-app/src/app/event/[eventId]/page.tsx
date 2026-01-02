'use client';

import AgendaManagement, { AgendaSegment } from '@/components/AgendaManagement';
import Communication, { CommunicationSettings } from '@/components/Communication';
import EventHeader from '@/components/EventHeader';
import ExhibitorManagement, { Exhibitor } from '@/components/ExhibitorManagement';
import Overview from '@/components/Overview';
import RegistrationManagement, { RegistrationField, RegistrationSettings, TicketType } from '@/components/RegistrationManagement';
import Sidebar from '@/components/Sidebar';
import { Speaker } from '@/components/SpeakerManagement';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

type Section = 'overview' | 'registration' | 'agenda' | 'exhibitors' | 'communication' | 'insights' | 'settings';

export default function EventPage() {
  const searchParams = useSearchParams();

  // Get section from URL search params, default to 'overview'
  const section = (searchParams?.get('section') as Section) || 'overview';

  // Event status - change this to see different Overview states: 'draft', 'published', 'live', 'finished'
  // Using state so it can be changed dynamically (in production this would come from your backend)
  const [eventStatus] = useState<'draft' | 'published' | 'live' | 'finished'>('published');

  // Speaker state
  const [speakers, setSpeakers] = useState<Speaker[]>([
    {
      id: '1',
      name: 'Daniela Kim',
      title: 'Skincare Expert & Beauty Scientist',
      bio: "Hear Daniela Kim's expert perspective on transformative skincare routines and the future of beauty science.",
      isFeatured: true,
    },
    {
      id: '2',
      name: 'Dr. Elisa Ray',
      title: 'Dermatologist',
      bio: 'Leading dermatologist specializing in advanced skin treatments.',
      isFeatured: false,
    },
    {
      id: '3',
      name: 'Michael Tan',
      title: 'Beauty Industry Innovator',
      bio: 'Pioneering new approaches to sustainable beauty products.',
      isFeatured: false,
    },
    {
      id: '4',
      name: 'Ava Books',
      title: 'Wellness Coach',
      bio: 'Holistic approach to beauty and wellness.',
      isFeatured: false,
    },
    {
      id: '5',
      name: 'Priya Desai',
      title: 'Cosmetic Chemist',
      bio: 'Expert in formulation science and ingredient innovation.',
      isFeatured: false,
    }
  ]);

  // Exhibitor state
  const [exhibitors, setExhibitors] = useState<Exhibitor[]>([
    {
      id: '1',
      companyName: 'GlowTech Innovations',
      tagline: 'Revolutionizing skincare through science',
      description: 'Leading provider of AI-powered skincare analysis tools and personalized treatment solutions.',
      tier: 'platinum',
      boothNumber: 'A-101',
      floorArea: 'Main Hall',
      website: 'https://glowtech.example.com',
      contactPerson: 'Sarah Chen',
      contactEmail: 'sarah@glowtech.example.com',
      industryTags: ['Technology', 'Skincare', 'AI'],
      offerings: 'AI skin analysis devices, personalized skincare apps, professional consultation tools'
    },
    {
      id: '2',
      companyName: 'Pure Essence Botanicals',
      tagline: 'Natural beauty, scientifically proven',
      description: 'Organic and sustainable skincare products crafted from rare botanical ingredients.',
      tier: 'gold',
      boothNumber: 'B-205',
      floorArea: 'East Wing',
      website: 'https://pureessence.example.com',
      contactPerson: 'Michael Torres',
      contactEmail: 'michael@pureessence.example.com',
      industryTags: ['Organic', 'Sustainability', 'Skincare'],
      offerings: 'Organic serums, botanical face masks, sustainable packaging solutions'
    },
    {
      id: '3',
      companyName: 'DermaCare Solutions',
      tagline: 'Professional-grade skincare for everyone',
      description: 'Clinical skincare products developed by dermatologists for professional and home use.',
      tier: 'silver',
      boothNumber: 'C-112',
      floorArea: 'Main Hall',
      website: 'https://dermacare.example.com',
      contactPerson: 'Dr. Lisa Park',
      contactEmail: 'lisa@dermacare.example.com',
      industryTags: ['Clinical', 'Dermatology', 'Healthcare'],
      offerings: 'Medical-grade cleansers, prescription-strength treatments, professional consultation'
    }
  ]);

  // Registration & Ticket state
  const [tickets, setTickets] = useState<TicketType[]>([
    {
      id: '1',
      name: 'Standard',
      price: 0,
      capacity: 200,
      registered: 0,
      isActive: true,
    },
    {
      id: '2',
      name: 'Early Birds',
      price: 0,
      capacity: 10,
      registered: 0,
      salesEnd: '2025-02-01T23:59:59',
      isActive: true,
    }
  ]);

  const [registrationFields, setRegistrationFields] = useState<RegistrationField[]>([
    {
      id: 'field-1',
      label: 'What company do you work for?',
      type: 'text',
      placeholder: 'What is your job title?',
      required: false,
      order: 0,
    }
  ]);

  const [registrationSettings, setRegistrationSettings] = useState<RegistrationSettings>({
    isOpen: true,
    eventCapacity: 'unlimited',
    groupRegistrationEnabled: false,
  });

  // Communication settings
  const [communicationSettings, setCommunicationSettings] = useState<CommunicationSettings>({
    emailEnabled: true,
    pushEnabled: true,
  });

  // Agenda segments
  const [agendaSegments, setAgendaSegments] = useState<AgendaSegment[]>([
    {
      id: 'seg-1',
      type: 'registration',
      title: 'Registration & Welcome Coffee',
      description: 'Check in and enjoy refreshments before the event begins',
      startTime: '08:00',
      endTime: '09:00',
      day: 0,
      location: 'Main Lobby',
      isPublished: true,
    },
    {
      id: 'seg-2',
      type: 'keynote',
      title: 'Opening Keynote: The Future of Beauty',
      description: 'Hear from industry leaders about the transformative trends in beauty and wellness',
      startTime: '09:00',
      endTime: '10:00',
      day: 0,
      location: 'Main Hall',
      speakerIds: ['1'],
      isPublished: true,
    },
    {
      id: 'seg-3',
      type: 'break',
      title: 'Coffee Break',
      startTime: '10:00',
      endTime: '10:15',
      day: 0,
      location: 'Lobby',
      isPublished: true,
    },
    {
      id: 'seg-4',
      type: 'session',
      title: 'Advanced Skin Treatments Workshop',
      description: 'Learn about the latest clinical approaches to skincare',
      startTime: '10:15',
      endTime: '11:00',
      day: 0,
      location: 'Room A',
      speakerIds: ['2'],
      capacity: 50,
      isPublished: true,
    },
    {
      id: 'seg-5',
      type: 'panel',
      title: 'Sustainability in Beauty',
      description: 'Panel discussion on eco-friendly practices and sustainable beauty products',
      startTime: '11:15',
      endTime: '12:15',
      day: 0,
      location: 'Main Hall',
      speakerIds: ['3', '4'],
      isPublished: true,
    },
    {
      id: 'seg-6',
      type: 'food',
      title: 'Networking Lunch',
      description: 'Connect with fellow attendees and exhibitors over lunch',
      startTime: '12:15',
      endTime: '13:30',
      day: 0,
      location: 'Dining Hall',
      isPublished: true,
    },
    {
      id: 'seg-7',
      type: 'workshop',
      title: 'Beauty Science Innovation',
      description: 'Hands-on workshop exploring ingredient innovation',
      startTime: '13:30',
      endTime: '14:30',
      day: 0,
      location: 'Room B',
      speakerIds: ['5'],
      capacity: 30,
      isPublished: true,
    },
    {
      id: 'seg-8',
      type: 'networking',
      title: 'Closing Reception',
      description: 'Final networking opportunity with drinks and light refreshments',
      startTime: '14:45',
      endTime: '16:00',
      day: 0,
      location: 'Main Lobby',
      isPublished: true,
    },
    // Day 2 - with overlapping sessions
    {
      id: 'seg-9',
      type: 'registration',
      title: 'Day 2 Registration',
      description: 'Check-in for day two attendees',
      startTime: '08:30',
      endTime: '09:00',
      day: 1,
      location: 'Main Lobby',
      isPublished: true,
    },
    {
      id: 'seg-10',
      type: 'keynote',
      title: 'Innovation in Beauty Tech',
      description: 'Exploring the intersection of technology and beauty',
      startTime: '09:00',
      endTime: '10:00',
      day: 1,
      location: 'Main Hall',
      speakerIds: ['1'],
      isPublished: true,
    },
    {
      id: 'seg-11',
      type: 'workshop',
      title: 'Makeup Masterclass - Track A',
      description: 'Professional makeup techniques for beginners',
      startTime: '10:15',
      endTime: '11:30',
      day: 1,
      location: 'Main Hall',
      speakerIds: ['2'],
      capacity: 30,
      isPublished: true,
    },
    {
      id: 'seg-12',
      type: 'workshop',
      title: 'Skincare Routine Building - Track B',
      description: 'Create your personalized skincare routine',
      startTime: '10:15',
      endTime: '11:30',
      day: 1,
      location: 'Main Hall',
      speakerIds: ['3'],
      capacity: 30,
      isPublished: true,
    },
    {
      id: 'seg-13',
      type: 'session',
      title: 'Advanced Techniques - Track A',
      description: 'Deep dive into advanced beauty techniques',
      startTime: '11:45',
      endTime: '12:45',
      day: 1,
      location: 'Room A',
      speakerIds: ['4'],
      isPublished: true,
    },
    {
      id: 'seg-14',
      type: 'session',
      title: 'Product Innovation - Track B',
      description: 'Latest trends in beauty product development',
      startTime: '11:45',
      endTime: '12:45',
      day: 1,
      location: 'Room A',
      speakerIds: ['5'],
      isPublished: true,
    },
    {
      id: 'seg-15',
      type: 'food',
      title: 'Lunch Break',
      description: 'Catered lunch and networking',
      startTime: '12:45',
      endTime: '14:00',
      day: 1,
      location: 'Dining Hall',
      isPublished: true,
    },
    {
      id: 'seg-16',
      type: 'panel',
      title: 'Industry Leaders Panel',
      description: 'Q&A with top beauty industry executives',
      startTime: '14:00',
      endTime: '15:30',
      day: 1,
      location: 'Main Hall',
      speakerIds: ['1', '2', '3'],
      isPublished: true,
    },
    {
      id: 'seg-17',
      type: 'networking',
      title: 'Closing Cocktail Reception',
      description: 'End of day two celebration',
      startTime: '15:30',
      endTime: '17:00',
      day: 1,
      location: 'Main Lobby',
      isPublished: true,
    },
  ]);

  // LIVE event sample data (for when eventStatus === 'live')
  const liveSpeakers = [
    { id: '1', name: 'Daniela Kim', role: 'Skincare Expert', checkedIn: true, checkInTime: new Date('2025-12-30T08:30:00') },
    { id: '2', name: 'Dr. Elisa Ray', role: 'Dermatologist', checkedIn: true, checkInTime: new Date('2025-12-30T08:45:00') },
    { id: '3', name: 'Michael Tan', role: 'Beauty Innovator', checkedIn: false },
    { id: '4', name: 'Ava Books', role: 'Wellness Coach', checkedIn: true, checkInTime: new Date('2025-12-30T09:00:00') },
    { id: '5', name: 'Priya Desai', role: 'Cosmetic Chemist', checkedIn: false },
  ];

  const liveExhibitors = [
    { id: '1', name: 'GlowTech Innovations', role: 'Booth A-101', checkedIn: true, checkInTime: new Date('2025-12-30T08:00:00') },
    { id: '2', name: 'Pure Essence Botanicals', role: 'Booth B-205', checkedIn: true, checkInTime: new Date('2025-12-30T08:15:00') },
    { id: '3', name: 'DermaCare Solutions', role: 'Booth C-112', checkedIn: false },
  ];

  // Sample agenda for live event (current time + next few hours)
  const now = new Date();
  const liveAgenda = [
    {
      id: '1',
      title: 'Registration & Welcome Coffee',
      type: 'networking' as const,
      startTime: new Date(now.getTime() - 30 * 60000), // Started 30 min ago
      endTime: new Date(now.getTime() + 30 * 60000), // Ends in 30 min
      location: 'Main Lobby'
    },
    {
      id: '2',
      title: 'Opening Keynote: The Future of Beauty',
      type: 'keynote' as const,
      startTime: new Date(now.getTime() + 30 * 60000), // In 30 min
      endTime: new Date(now.getTime() + 90 * 60000), // In 1.5 hours
      speaker: 'Daniela Kim',
      location: 'Main Hall'
    },
    {
      id: '3',
      title: 'Coffee Break',
      type: 'break' as const,
      startTime: new Date(now.getTime() + 90 * 60000),
      endTime: new Date(now.getTime() + 105 * 60000),
      location: 'Lobby'
    },
    {
      id: '4',
      title: 'Advanced Skin Treatments Workshop',
      type: 'session' as const,
      startTime: new Date(now.getTime() + 105 * 60000),
      endTime: new Date(now.getTime() + 150 * 60000),
      speaker: 'Dr. Elisa Ray',
      location: 'Room A'
    },
    {
      id: '5',
      title: 'Networking Lunch',
      type: 'food' as const,
      startTime: new Date(now.getTime() + 150 * 60000),
      endTime: new Date(now.getTime() + 210 * 60000),
      location: 'Dining Hall'
    }
  ];

  // Render content based on active section
  const renderContent = () => {
    switch (section) {
      case 'overview':
        return <Overview
          eventStatus={eventStatus}
          eventDate={new Date('2025-02-15')} // Event in ~6 weeks
          locationConfirmed={true} // Location is confirmed
          speakersCount={speakers.length} // 5 speakers total
          speakersConfirmed={3} // Only 3 have confirmed - WARNING
          exhibitorsCount={exhibitors.length} // 3 exhibitors total
          exhibitorsConfirmed={2} // Only 2 confirmed - WARNING
          agendaComplete={true}
          ticketsSold={143}
          ticketCapacity={300}
          ticketPrice={50}
          websiteViews={2640}
          // LIVE event specific props
          speakers={eventStatus === 'live' ? liveSpeakers : []}
          exhibitors={eventStatus === 'live' ? liveExhibitors : []}
          agenda={eventStatus === 'live' ? liveAgenda : []}
          attendeesCheckedIn={eventStatus === 'live' ? 87 : 0}
          onOpenUrgentCommunication={() => {
            // Navigate to communication section
            globalThis.location.href = `/event/1?section=communication`;
          }}
        />;

      case 'registration':
        return (
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-10">
              <RegistrationManagement
                tickets={tickets}
                fields={registrationFields}
                settings={registrationSettings}
                onClose={() => {}}
                onSave={(updatedTickets, updatedFields, updatedSettings) => {
                  setTickets(updatedTickets);
                  setRegistrationFields(updatedFields);
                  setRegistrationSettings(updatedSettings);
                }}
                isModal={false}
              />
            </div>
          </div>
        );

      case 'agenda':
        return (
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-10">
              <AgendaManagement
                segments={agendaSegments}
                speakers={speakers}
                onSpeakersChange={setSpeakers}
                eventDays={1}
                onClose={() => {}}
                onSave={(updatedSegments) => setAgendaSegments(updatedSegments)}
                isModal={false}
              />
            </div>
          </div>
        );

      case 'exhibitors':
        return (
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-10">
              <ExhibitorManagement
                exhibitors={exhibitors}
                onClose={() => {}}
                onSave={(updatedExhibitors) => setExhibitors(updatedExhibitors)}
                isModal={false}
              />
            </div>
          </div>
        );

      case 'communication':
        return (
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-10">
              <Communication
                eventName="Beauty & Wellness Expo 2025"
                settings={communicationSettings}
                onSettingsChange={setCommunicationSettings}
              />
            </div>
          </div>
        );

      case 'insights':
      case 'settings':
        return (
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-10">
              <div className="flex flex-col items-center justify-center py-20">
                <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[24px] text-[rgba(0,0,0,0.4)] mb-2 capitalize">
                  {section}
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.4)]">
                  {section === 'insights' && 'View analytics and attendee insights'}
                  {section === 'settings' && 'Configure event settings and preferences'}
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return <Overview
          eventStatus={eventStatus}
          eventDate={new Date('2025-02-15')}
          locationConfirmed={true}
          speakersCount={speakers.length}
          speakersConfirmed={3}
          exhibitorsCount={exhibitors.length}
          exhibitorsConfirmed={2}
          agendaComplete={true}
          ticketsSold={143}
          ticketCapacity={300}
          ticketPrice={50}
          websiteViews={2640}
          speakers={eventStatus === 'live' ? liveSpeakers : []}
          exhibitors={eventStatus === 'live' ? liveExhibitors : []}
          agenda={eventStatus === 'live' ? liveAgenda : []}
          attendeesCheckedIn={eventStatus === 'live' ? 87 : 0}
        />;
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-white overflow-hidden">
      <EventHeader
        eventName="Beauty & Wellness Expo 2025"
        eventStatus={eventStatus}
      />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        {renderContent()}
      </div>
    </div>
  );
}

