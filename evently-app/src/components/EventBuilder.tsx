'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import Button from './Button';

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

export default function EventBuilder() {
  const [showRefinementPanel, setShowRefinementPanel] = useState(true);
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [heroTitle, setHeroTitle] = useState('The Glow Summit.');
  const [heroSubtitle, setHeroSubtitle] = useState('Join us for a skincare event.');
  const [aiPrompt, setAiPrompt] = useState('');
  const [description, setDescription] = useState('Experience the latest in skincare with industry leaders at the Glow Summit.');
  const [descriptionSubtext, setDescriptionSubtext] = useState('Limited to 100 attendees. Discover, learn and connect in New York City');

  const handleAIRefine = (section: string) => {
    console.log(`AI refining ${section} with prompt:`, aiPrompt);
    // TODO: Call AI API to refine the section
    setAiPrompt('');
  };

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar userName="Mihir" userInitials="MP" />

      {/* Main Content - Scrollable Event Landing Page */}
      <div className="flex-1 overflow-y-auto relative">
        <div className="flex flex-col items-center px-10 py-6 max-w-[1012px] mx-auto">
          {/* Header Navigation */}
          <div className="flex items-center justify-between w-full mb-[100px]">
            <div className="flex items-center gap-[39px] text-center">
              <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[24px] text-black">
                GlowEvent
              </p>
              <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[16px] text-[rgba(0,0,0,0.6)] tracking-[-0.08px]">
                About
              </p>
              <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[16px] text-[rgba(0,0,0,0.6)] tracking-[-0.08px]">
                Speakers
              </p>
              <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[16px] text-[rgba(0,0,0,0.6)] tracking-[-0.08px]">
                Tickets
              </p>
            </div>
            <button className="bg-[#061111] flex items-center justify-center px-4 py-1 rounded-[20px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0.5px_1px_0px_rgba(0,0,0,0.02)] h-[32px]">
              <p className="font-['SF_Pro:Medium',sans-serif] text-[14px] leading-[1.1] text-white">
                Register
              </p>
            </button>
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
            <div className="flex gap-8 items-center w-[677px]">
              <div className="bg-[rgba(217,217,217,0.25)] rounded-[21.146px] w-[263px] h-[263px]" />
              <div className="flex flex-col gap-2 items-start justify-center flex-1">
                <div className="border border-[rgba(0,0,0,0.1)] border-solid flex items-center justify-center px-2 py-1 rounded-[16px]">
                  <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.5)] tracking-[-0.07px] leading-normal">
                    Featured speaker
                  </p>
                </div>
                <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.09px] leading-normal">
                  Featured Speaker: Daniela Kim
                </p>
                <p className="font-['Rethink_Sans:Regular',sans-serif] font-normal text-[14px] text-[rgba(0,0,0,0.5)] tracking-[-0.07px] leading-normal whitespace-pre-wrap w-full">
                  Hear Daniela Kim's expert perspective on transformative skincare routines and the future of beauty science.
                </p>
              </div>
            </div>

            {/* Other Speakers */}
            <div className="flex gap-10 items-center">
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="bg-[rgba(217,217,217,0.25)] rounded-[12.06px] w-[150px] h-[150px]" />
                <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.09px] leading-normal">
                  Dr. Elisa Ray
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="bg-[rgba(217,217,217,0.25)] rounded-[12.06px] w-[150px] h-[150px]" />
                <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.09px] leading-normal">
                  Michael Tan
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="bg-[rgba(217,217,217,0.25)] rounded-[12.06px] w-[150px] h-[150px]" />
                <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.09px] leading-normal">
                  Ava Books
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="bg-[rgba(217,217,217,0.25)] rounded-[12.06px] w-[150px] h-[150px]" />
                <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-[rgba(0,0,0,0.8)] text-center tracking-[-0.09px] leading-normal">
                  Priya Desai
                </p>
              </div>
            </div>
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
        </div>

        {/* Refinement Panel - Fixed on the right */}
        {showRefinementPanel && (
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
              <Button
                variant="tertiary"
                className="w-full justify-start gap-2"
                onClick={() => setEditingSection('speakers')}
              >
                <EditIcon />
                Edit Speakers
              </Button>
              <Button
                variant="tertiary"
                className="w-full justify-start gap-2"
                onClick={() => setEditingSection('tickets')}
              >
                <EditIcon />
                Edit Tickets
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

        {/* Toggle Refinement Panel Button (when hidden) */}
        {!showRefinementPanel && (
          <button
            onClick={() => setShowRefinementPanel(true)}
            className="fixed right-6 top-6 bg-[#4d4d4d] text-white px-4 py-2 rounded-[20px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] hover:bg-[#3d3d3d] transition-colors z-10"
          >
            <span className="font-['SF_Pro:Medium',sans-serif] text-[14px]">Show Refinement Panel</span>
          </button>
        )}
      </div>
    </div>
  );
}

