'use client';

import { useState } from 'react';
import Button from './Button';
import ExhibitorManagement, { Exhibitor } from './ExhibitorManagement';
import Sidebar from './Sidebar';
import SpeakerManagement, { Speaker } from './SpeakerManagement';

// Checkmark icon for ticket features
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Edit icon
const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.3333 2.00004C11.5084 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6666 1.44775C12.9142 1.44775 13.1594 1.49653 13.3882 1.59129C13.617 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4087 2.61178C14.5035 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5035 3.82619 14.4087 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00001 13.6667L1.33334 14.6667L2.33334 11L11.3333 2.00004Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Sparkles icon for AI regenerate
const SparklesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1.33337V14.6667M14.6667 8H1.33334M12.6667 3.33337L3.33334 12.6667M12.6667 12.6667L3.33334 3.33337" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

type TabType = 'preview' | 'speakers' | 'exhibitors' | 'tickets' | 'registration';

export default function EventBuilder() {
  const [activeTab, setActiveTab] = useState<TabType>('preview');
  const [showRefinementPanel, setShowRefinementPanel] = useState(true);
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [heroTitle, setHeroTitle] = useState('The Glow Summit.');
  const [heroSubtitle, setHeroSubtitle] = useState('Join us for a skincare event.');
  const [aiPrompt, setAiPrompt] = useState('');
  const [description, setDescription] = useState('Experience the latest in skincare with industry leaders at the Glow Summit.');
  const [descriptionSubtext, setDescriptionSubtext] = useState('Limited to 100 attendees. Discover, learn and connect in New York City');

  // Speaker state with initial data
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

  // Exhibitor state with initial data
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

  const handleAIRefine = (section: string) => {
    console.log(`AI refining ${section} with prompt:`, aiPrompt);
    // TODO: Call AI API to refine the section
    setAiPrompt('');
  };

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar userName="Mihir" userInitials="MP" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Tab Navigation - Fixed at top */}
        <div className="shrink-0 bg-white border-b border-[rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between w-full px-10">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTab('preview')}
                className={`font-['SF_Pro:Medium',sans-serif] text-[14px] px-6 py-4 transition-colors relative ${
                  activeTab === 'preview'
                    ? 'text-black'
                    : 'text-[rgba(0,0,0,0.5)] hover:text-[rgba(0,0,0,0.7)]'
                }`}
              >
                Preview
                {activeTab === 'preview' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('speakers')}
                className={`font-['SF_Pro:Medium',sans-serif] text-[14px] px-6 py-4 transition-colors relative ${
                  activeTab === 'speakers'
                    ? 'text-black'
                    : 'text-[rgba(0,0,0,0.5)] hover:text-[rgba(0,0,0,0.7)]'
                }`}
              >
                Speakers
                {activeTab === 'speakers' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('exhibitors')}
                className={`font-['SF_Pro:Medium',sans-serif] text-[14px] px-6 py-4 transition-colors relative ${
                  activeTab === 'exhibitors'
                    ? 'text-black'
                    : 'text-[rgba(0,0,0,0.5)] hover:text-[rgba(0,0,0,0.7)]'
                }`}
              >
                Exhibitors
                {activeTab === 'exhibitors' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('tickets')}
                className={`font-['SF_Pro:Medium',sans-serif] text-[14px] px-6 py-4 transition-colors relative ${
                  activeTab === 'tickets'
                    ? 'text-black'
                    : 'text-[rgba(0,0,0,0.5)] hover:text-[rgba(0,0,0,0.7)]'
                }`}
              >
                Tickets
                {activeTab === 'tickets' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('registration')}
                className={`font-['SF_Pro:Medium',sans-serif] text-[14px] px-6 py-4 transition-colors relative ${
                  activeTab === 'registration'
                    ? 'text-black'
                    : 'text-[rgba(0,0,0,0.5)] hover:text-[rgba(0,0,0,0.7)]'
                }`}
              >
                Registration
                {activeTab === 'registration' && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
                )}
              </button>
            </div>

            {/* Toggle Refinement Panel Button (when hidden, only on Preview tab) */}
            {!showRefinementPanel && activeTab === 'preview' && (
              <button
                onClick={() => setShowRefinementPanel(true)}
                className="bg-[#4d4d4d] text-white px-4 py-2 rounded-[20px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] hover:bg-[#3d3d3d] transition-colors"
              >
                <span className="font-['SF_Pro:Medium',sans-serif] text-[14px]">Show Refinement Panel</span>
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col items-center px-10 py-6 max-w-[1012px] mx-auto">
          {/* Preview Tab - Event Landing Page */}
          {activeTab === 'preview' && (
            <>
              {/* Event Name Header */}
              <div className="w-full mb-[60px] pb-6 border-b border-[rgba(0,0,0,0.08)]">
                <h1 className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[32px] text-black tracking-[-0.5px]">
                  GlowEvent
                </h1>
              </div>

              {/* Hero Section */}
          <div className="flex flex-col items-center text-center mb-[100px] relative group">
            {editingSection === 'hero' ? (
              <div className="flex flex-col gap-4 w-[600px] bg-white border border-[rgba(0,0,0,0.15)] rounded-[24px] p-6 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)]">
                <p className="font-['SF_Pro:Medium',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)] text-left mb-2">
                  Edit Hero Section
                </p>
                <input
                  type="text"
                  value={heroTitle}
                  onChange={(e) => setHeroTitle(e.target.value)}
                  placeholder="Event title"
                  className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[24px] text-black tracking-[-1px] leading-normal text-center border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2 focus:outline-none focus:border-[#4d4d4d]"
                />
                <input
                  type="text"
                  value={heroSubtitle}
                  onChange={(e) => setHeroSubtitle(e.target.value)}
                  placeholder="Event subtitle"
                  className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[20px] text-[rgba(0,0,0,0.6)] tracking-[-1px] leading-normal text-center border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2 focus:outline-none focus:border-[#4d4d4d]"
                />

                {/* AI Prompt Section */}
                <div className="mt-4 pt-4 border-t border-[rgba(0,0,0,0.1)]">
                  <div className="flex items-center gap-2 mb-2">
                    <SparklesIcon />
                    <p className="font-['SF_Pro:Medium',sans-serif] text-[12px] text-[rgba(0,0,0,0.6)] uppercase tracking-wider">
                      AI Assistant
                    </p>
                  </div>
                  <input
                    type="text"
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="e.g., Make it more exciting, Add urgency, Make it shorter..."
                    className="w-full font-['SF_Pro:Regular',sans-serif] text-[14px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-3 py-2 focus:outline-none focus:border-[#4d4d4d] mb-2"
                  />
                  <Button
                    variant="tertiary"
                    className="w-full justify-center gap-2"
                    onClick={() => handleAIRefine('hero')}
                    disabled={!aiPrompt.trim()}
                  >
                    <SparklesIcon />
                    Refine with AI
                  </Button>
                </div>

                <div className="flex gap-2 justify-center mt-2">
                  <Button onClick={() => setEditingSection(null)}>
                    Save Changes
                  </Button>
                  <Button
                    variant="tertiary"
                    onClick={() => {
                      setHeroTitle('The Glow Summit.');
                      setHeroSubtitle('Join us for a skincare event.');
                      setAiPrompt('');
                      setEditingSection(null);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <p className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[36px] text-black tracking-[-1px] leading-normal">
                  {heroTitle}
                </p>
                <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[36px] text-[rgba(0,0,0,0.6)] tracking-[-1px] leading-normal">
                  {heroSubtitle}
                </p>
                {/* Inline Edit Button */}
                <button
                  onClick={() => setEditingSection('hero')}
                  className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white border border-[rgba(0,0,0,0.15)] rounded-lg p-2 hover:bg-gray-50"
                  title="Edit hero section"
                >
                  <EditIcon />
                </button>
              </>
            )}
          </div>

          {/* Description Section */}
          <div className="flex flex-col items-center text-center gap-3 mb-[100px] relative group">
            {editingSection === 'description' ? (
              <div className="flex flex-col gap-4 w-[600px] bg-white border border-[rgba(0,0,0,0.15)] rounded-[24px] p-6 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)]">
                <p className="font-['SF_Pro:Medium',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)] text-left mb-2">
                  Edit Description
                </p>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Main description"
                  rows={3}
                  className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[20px] text-black tracking-[-1px] leading-normal text-center border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-[#4d4d4d] resize-none"
                />
                <textarea
                  value={descriptionSubtext}
                  onChange={(e) => setDescriptionSubtext(e.target.value)}
                  placeholder="Subtext"
                  rows={2}
                  className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.6)] tracking-[-1px] leading-normal text-center border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-[#4d4d4d] resize-none"
                />

                {/* AI Prompt Section */}
                <div className="mt-4 pt-4 border-t border-[rgba(0,0,0,0.1)]">
                  <div className="flex items-center gap-2 mb-2">
                    <SparklesIcon />
                    <p className="font-['SF_Pro:Medium',sans-serif] text-[12px] text-[rgba(0,0,0,0.6)] uppercase tracking-wider">
                      AI Assistant
                    </p>
                  </div>
                  <input
                    type="text"
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="e.g., Add more details about benefits, Make it more compelling..."
                    className="w-full font-['SF_Pro:Regular',sans-serif] text-[14px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-3 py-2 focus:outline-none focus:border-[#4d4d4d] mb-2"
                  />
                  <Button
                    variant="tertiary"
                    className="w-full justify-center gap-2"
                    onClick={() => handleAIRefine('description')}
                    disabled={!aiPrompt.trim()}
                  >
                    <SparklesIcon />
                    Refine with AI
                  </Button>
                </div>

                <div className="flex gap-2 justify-center mt-2">
                  <Button onClick={() => setEditingSection(null)}>
                    Save Changes
                  </Button>
                  <Button
                    variant="tertiary"
                    onClick={() => {
                      setDescription('Experience the latest in skincare with industry leaders at the Glow Summit.');
                      setDescriptionSubtext('Limited to 100 attendees. Discover, learn and connect in New York City');
                      setAiPrompt('');
                      setEditingSection(null);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <p className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[26px] text-black tracking-[-1px] leading-none whitespace-pre-wrap w-full">
                  {description}
                </p>
                <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[26px] text-[rgba(0,0,0,0.6)] tracking-[-1px] leading-none w-[425px]">
                  {descriptionSubtext}
                </p>
                {/* Inline Edit Button */}
                <button
                  onClick={() => setEditingSection('description')}
                  className="absolute -right-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white border border-[rgba(0,0,0,0.15)] rounded-lg p-2 hover:bg-gray-50"
                  title="Edit description"
                >
                  <EditIcon />
                </button>
              </>
            )}
          </div>

          {/* Info Cards Section */}
          <div className="flex gap-10 items-center mb-[100px]">
            <div className="flex flex-col gap-2 items-start justify-center">
              <div className="bg-[rgba(217,217,217,0.25)] rounded-[16px] w-[199px] h-[199px]" />
              <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.09px] leading-normal">
                Date & Location
              </p>
              <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.5)] tracking-[-0.07px] leading-normal whitespace-pre-wrap w-full">
                December 10, 2025 at 47 W 13th St, New York, NY
              </p>
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <div className="bg-[rgba(217,217,217,0.25)] rounded-[16px] w-[199px] h-[199px]" />
              <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.09px] leading-normal">
                Purpose
              </p>
              <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.5)] tracking-[-0.07px] leading-normal whitespace-pre-wrap w-full">
                Immersive experience about skincare and beauty rituals.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-start justify-center">
              <div className="bg-[rgba(217,217,217,0.25)] rounded-[16px] w-[199px] h-[199px]" />
              <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.09px] leading-normal">
                For 100 guests.
              </p>
              <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.5)] tracking-[-0.07px] leading-normal whitespace-pre-wrap w-full">
                Exclusive event for skincare enthusiasts and professionals.
              </p>
            </div>
          </div>

          {/* Speakers Section */}
          <div className="flex flex-col gap-10 items-center mb-[100px]">
            {/* Featured Speaker */}
            {speakers.filter(s => s.isFeatured).map(speaker => (
              <div key={speaker.id} className="flex gap-8 items-center w-[677px]">
                <div className="bg-[rgba(217,217,217,0.25)] rounded-[21.146px] w-[263px] h-[263px] flex items-center justify-center">
                  {speaker.imageUrl ? (
                    <img src={speaker.imageUrl} alt={speaker.name} className="w-full h-full object-cover rounded-[21.146px]" />
                  ) : (
                    <span className="font-['Rethink_Sans:SemiBold',sans-serif] text-[48px] text-[rgba(0,0,0,0.3)]">
                      {speaker.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2 items-start justify-center flex-1">
                  <div className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-2 py-1 rounded-[16px]">
                    <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.5)] tracking-[-0.07px] leading-normal">
                      Featured speaker
                    </p>
                  </div>
                  <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.8)] tracking-[-0.09px] leading-normal">
                    {speaker.name}
                  </p>
                  {speaker.title && (
                    <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[13px] text-[rgba(0,0,0,0.4)] tracking-[-0.07px] leading-normal">
                      {speaker.title}
                    </p>
                  )}
                  <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.5)] tracking-[-0.07px] leading-normal whitespace-pre-wrap w-full">
                    {speaker.bio}
                  </p>
                  {(speaker.scheduleTime || speaker.topic) && (
                    <div className="mt-2 pt-2 border-t border-[rgba(0,0,0,0.1)] w-full">
                      {speaker.scheduleTime && (
                        <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)]">
                          <span className="font-medium">Time:</span> {speaker.scheduleTime}
                        </p>
                      )}
                      {speaker.topic && (
                        <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)]">
                          <span className="font-medium">Topic:</span> {speaker.topic}
                        </p>
                      )}
                      {speaker.venueLocation && (
                        <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)]">
                          <span className="font-medium">Location:</span> {speaker.venueLocation}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Other Speakers */}
            {speakers.some(s => !s.isFeatured) && (
              <div className="flex gap-10 items-center flex-wrap justify-center">
                {speakers.filter(s => !s.isFeatured).map(speaker => (
                  <div key={speaker.id} className="flex flex-col gap-2 items-center justify-center">
                    <div className="bg-[rgba(217,217,217,0.25)] rounded-[12.06px] w-[150px] h-[150px] flex items-center justify-center">
                      {speaker.imageUrl ? (
                        <img src={speaker.imageUrl} alt={speaker.name} className="w-full h-full object-cover rounded-[12.06px]" />
                      ) : (
                        <span className="font-['Rethink_Sans:SemiBold',sans-serif] text-[32px] text-[rgba(0,0,0,0.3)]">
                          {speaker.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                        </span>
                      )}
                    </div>
                    <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.09px] leading-normal">
                      {speaker.name}
                    </p>
                    {speaker.scheduleTime && (
                      <p className="font-['SF_Pro:Regular',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] text-center">
                        {speaker.scheduleTime}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tickets Section */}
          <div className="flex flex-col gap-10 items-center mb-[100px]">
            <div className="flex flex-col gap-3 items-center text-center">
              <p className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[26px] text-black tracking-[-1px] leading-none whitespace-pre-wrap w-full">
                Tickets
              </p>
              <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[26px] text-[rgba(0,0,0,0.6)] tracking-[-1px] leading-none w-[425px]">
                Choose your access
              </p>
            </div>

            {/* Ticket Cards */}
            <div className="flex gap-6 items-start w-[520px]">
              {/* Basic Ticket */}
              <div className="bg-[rgba(0,0,0,0.05)] flex flex-col gap-4 items-start p-4 rounded-[32px] flex-1">
                <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.6)] text-center tracking-[-0.09px] leading-normal">
                  Basic
                </p>
                <p className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[34px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.17px] leading-normal">
                  $59
                </p>
                <div className="flex gap-2 items-center justify-center">
                  <div className="w-4 h-4 text-[rgba(0,0,0,0.6)]">
                    <CheckIcon />
                  </div>
                  <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.6)] text-center tracking-[-0.07px] leading-normal">
                    Event access
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <div className="w-4 h-4 text-[rgba(0,0,0,0.6)]">
                    <CheckIcon />
                  </div>
                  <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.6)] text-center tracking-[-0.07px] leading-normal">
                    Gift bag
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <div className="w-4 h-4 text-[rgba(0,0,0,0.6)]">
                    <CheckIcon />
                  </div>
                  <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.6)] text-center tracking-[-0.07px] leading-normal">
                    Refreshments
                  </p>
                </div>
                <button className="bg-[rgba(6,17,17,0.2)] flex items-center justify-center px-4 py-1 rounded-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0.5px_1px_0px_rgba(0,0,0,0.02)] h-[32px] w-full">
                  <p className="font-['SF_Pro:Medium',sans-serif] text-[14px] leading-[1.1] text-black">
                    Buy Basic
                  </p>
                </button>
              </div>

              {/* Pro Ticket */}
              <div className="bg-[rgba(0,0,0,0.05)] flex flex-col gap-4 items-start p-4 rounded-[32px] flex-1">
                <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.6)] text-center tracking-[-0.09px] leading-normal">
                  Pro
                </p>
                <p className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[34px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.17px] leading-normal">
                  $99
                </p>
                <div className="flex gap-2 items-center justify-center">
                  <div className="w-4 h-4 text-[rgba(0,0,0,0.6)]">
                    <CheckIcon />
                  </div>
                  <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.6)] text-center tracking-[-0.07px] leading-normal">
                    All Basic features
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <div className="w-4 h-4 text-[rgba(0,0,0,0.6)]">
                    <CheckIcon />
                  </div>
                  <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.6)] text-center tracking-[-0.07px] leading-normal">
                    VIP seating
                  </p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <div className="w-4 h-4 text-[rgba(0,0,0,0.6)]">
                    <CheckIcon />
                  </div>
                  <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[14px] text-[rgba(0,0,0,0.6)] text-center tracking-[-0.07px] leading-normal">
                    Meet & greet
                  </p>
                </div>
                <button className="bg-[#061111] flex items-center justify-center px-4 py-1 rounded-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0.5px_1px_0px_rgba(0,0,0,0.02)] h-[32px] w-full">
                  <p className="font-['SF_Pro:Medium',sans-serif] text-[14px] leading-[1.1] text-white">
                    Buy Pro
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="flex flex-col gap-3 items-center mb-10">
            <p className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[26px] text-black text-center tracking-[-1px] leading-none whitespace-pre-wrap w-full">
              Secure your spot!
            </p>
            <div className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[26px] text-[rgba(0,0,0,0.6)] text-center tracking-[-1px] leading-none w-[425px] whitespace-pre-wrap">
              <p className="mb-0">Limited seats remaining, </p>
              <p>don't miss out</p>
            </div>
            <button className="bg-[#061111] flex items-center justify-center px-4 py-1 rounded-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0.5px_1px_0px_rgba(0,0,0,0.02)] h-[32px]">
              <p className="font-['SF_Pro:Medium',sans-serif] text-[14px] leading-[1.1] text-white">
                Register now
              </p>
            </button>
          </div>
            </>
          )}

          {/* Speakers Tab - Speaker Management */}
          {activeTab === 'speakers' && (
            <SpeakerManagement
              speakers={speakers}
              onClose={() => {}} // No close needed in tab view
              onSave={(updatedSpeakers) => setSpeakers(updatedSpeakers)}
              isModal={false}
            />
          )}

          {/* Exhibitors Tab - Exhibitor Management */}
          {activeTab === 'exhibitors' && (
            <ExhibitorManagement
              exhibitors={exhibitors}
              onClose={() => {}} // No close needed in tab view
              onSave={(updatedExhibitors) => setExhibitors(updatedExhibitors)}
              isModal={false}
            />
          )}

          {/* Tickets Tab */}
          {activeTab === 'tickets' && (
            <div className="flex flex-col items-center justify-center py-20">
              <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[24px] text-[rgba(0,0,0,0.4)] mb-2">
                Tickets
              </p>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.4)]">
                Configure ticket types and pricing
              </p>
            </div>
          )}

          {/* Registration Tab */}
          {activeTab === 'registration' && (
            <div className="flex flex-col items-center justify-center py-20">
              <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[24px] text-[rgba(0,0,0,0.4)] mb-2">
                Registration
              </p>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.4)]">
                Customize registration form and attendee information
              </p>
            </div>
          )}

        </div>

        {/* Refinement Panel - Fixed on the right (only on Preview tab) */}
        {showRefinementPanel && activeTab === 'preview' && (
          <div className="fixed right-6 top-6 w-[320px] bg-white border border-[rgba(0,0,0,0.15)] rounded-[24px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] p-6 z-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-black">
                Refine Event
              </h3>
              <button
                onClick={() => setShowRefinementPanel(false)}
                className="text-[rgba(0,0,0,0.5)] hover:text-black transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col gap-3 mb-6">
              <p className="font-['SF_Pro:Medium',sans-serif] text-[12px] text-[rgba(0,0,0,0.6)] uppercase tracking-wider">
                Quick Actions
              </p>
              <Button
                variant="tertiary"
                className="w-full justify-start gap-2"
                onClick={() => console.log('Regenerate all')}
              >
                <SparklesIcon />
                Regenerate All Content
              </Button>
              <Button
                variant="tertiary"
                className="w-full justify-start gap-2"
                onClick={() => console.log('Make more professional')}
              >
                Make More Professional
              </Button>
              <Button
                variant="tertiary"
                className="w-full justify-start gap-2"
                onClick={() => console.log('Make more casual')}
              >
                Make More Casual
              </Button>
              <Button
                variant="tertiary"
                className="w-full justify-start gap-2"
                onClick={() => console.log('Shorten content')}
              >
                Shorten All Text
              </Button>
            </div>

            {/* Edit Sections */}
            <div className="flex flex-col gap-3">
              <p className="font-['SF_Pro:Medium',sans-serif] text-[12px] text-[rgba(0,0,0,0.6)] uppercase tracking-wider">
                Edit Sections
              </p>
              <Button
                variant="tertiary"
                className="w-full justify-start gap-2"
                onClick={() => setEditingSection('hero')}
              >
                <EditIcon />
                Edit Hero Section
              </Button>
              <Button
                variant="tertiary"
                className="w-full justify-start gap-2"
                onClick={() => setEditingSection('description')}
              >
                <EditIcon />
                Edit Description
              </Button>
            </div>

            {/* Publish Button */}
            <div className="mt-6 pt-6 border-t border-[rgba(0,0,0,0.1)]">
              <Button
                className="w-full"
                onClick={() => console.log('Publish event')}
              >
                Publish Event
              </Button>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

