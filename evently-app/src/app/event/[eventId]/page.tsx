'use client';

import EventHeader from '@/components/EventHeader';
import ExhibitorManagement, { Exhibitor } from '@/components/ExhibitorManagement';
import Overview from '@/components/Overview';
import Sidebar from '@/components/Sidebar';
import SpeakerManagement, { Speaker } from '@/components/SpeakerManagement';
import Website from '@/components/Website';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

type Section = 'overview' | 'details' | 'agenda' | 'website' | 'speakers' | 'exhibitors' | 'tickets' | 'registration' | 'settings';

export default function EventPage() {
  const searchParams = useSearchParams();

  // Get section from URL search params, default to 'overview'
  const section = (searchParams?.get('section') as Section) || 'overview';

  // Speaker state
  const [speakers, setSpeakers] = useState<Speaker[]>([
    {
      id: '1',
      name: 'Daniela Kim',
      title: 'Skincare Expert & Beauty Scientist',
      bio: "Hear Daniela Kim's expert perspective on transformative skincare routines and the future of beauty science.",
      isFeatured: true,
      scheduleTime: '2:00 PM - 3:00 PM',
      topic: 'Transformative Skincare Routines',
      venueLocation: 'Main Hall'
    },
    {
      id: '2',
      name: 'Dr. Elisa Ray',
      title: 'Dermatologist',
      bio: 'Leading dermatologist specializing in advanced skin treatments.',
      isFeatured: false,
      scheduleTime: '3:30 PM - 4:15 PM',
      topic: 'Advanced Skin Treatments',
      venueLocation: 'Room A'
    },
    {
      id: '3',
      name: 'Michael Tan',
      title: 'Beauty Industry Innovator',
      bio: 'Pioneering new approaches to sustainable beauty products.',
      isFeatured: false,
      scheduleTime: '4:30 PM - 5:15 PM',
      topic: 'Sustainable Beauty',
      venueLocation: 'Room B'
    },
    {
      id: '4',
      name: 'Ava Books',
      title: 'Wellness Coach',
      bio: 'Holistic approach to beauty and wellness.',
      isFeatured: false,
      scheduleTime: '5:30 PM - 6:00 PM',
      topic: 'Holistic Beauty',
      venueLocation: 'Main Hall'
    },
    {
      id: '5',
      name: 'Priya Desai',
      title: 'Cosmetic Chemist',
      bio: 'Expert in formulation science and ingredient innovation.',
      isFeatured: false,
      scheduleTime: '6:15 PM - 7:00 PM',
      topic: 'Beauty Science Innovation',
      venueLocation: 'Room A'
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

  // Render content based on active section
  const renderContent = () => {
    switch (section) {
      case 'overview':
        return <Overview
          eventStatus="published"
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
        />;

      case 'website':
        return <Website speakers={speakers} />;

      case 'speakers':
        return (
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-10">
              <SpeakerManagement
                speakers={speakers}
                onClose={() => {}}
                onSave={(updatedSpeakers) => setSpeakers(updatedSpeakers)}
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

      case 'details':
      case 'agenda':
      case 'tickets':
      case 'registration':
      case 'settings':
        return (
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-10">
              <div className="flex flex-col items-center justify-center py-20">
                <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[24px] text-[rgba(0,0,0,0.4)] mb-2 capitalize">
                  {section}
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.4)]">
                  {section === 'details' && 'Edit event details and information'}
                  {section === 'agenda' && 'Create and manage your event schedule'}
                  {section === 'tickets' && 'Configure ticket types and pricing'}
                  {section === 'registration' && 'Customize registration form and attendee information'}
                  {section === 'settings' && 'Configure event settings and preferences'}
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return <Overview
          eventStatus="published"
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
        />;
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-white overflow-hidden">
      <EventHeader eventName="Beauty & Wellness Expo 2025" />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        {renderContent()}
      </div>
    </div>
  );
}

