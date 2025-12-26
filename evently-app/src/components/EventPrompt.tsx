'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';
import Button from './Button';
import Textarea from './Textarea';

export default function EventPrompt() {
  const router = useRouter();
  const [prompt, setPrompt] = useState('');

  const handleGenerateEvent = () => {
    console.log('Generating event with prompt:', prompt);
    // TODO: Call AI API to generate event
    // Navigate to event builder page
    router.push('/event-builder');
  };

  const handleOpenPromptBuilder = () => {
    console.log('Opening prompt builder');
    // TODO: Navigate to prompt builder or open modal
  };

  const handleSeeExamples = () => {
    console.log('Showing examples');
    // TODO: Show examples modal or navigate to examples page
  };

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar userName="Mihir" userInitials="MP" />

      {/* Main Content - Centered Form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center w-[440px]">
          {/* Heading */}
          <h1 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[44px] text-black text-center mb-12 leading-normal">
            Your event planned in minutes
          </h1>

          {/* Textarea Field */}
          <div className="w-full mb-4">
            <Textarea
              placeholder="Create my event for..."
              value={prompt}
              onChange={setPrompt}
              rows={4}
              className="h-[101px]"
            />
          </div>

          {/* Generate Button */}
          <div className="w-full mb-4">
            <Button
              onClick={handleGenerateEvent}
              className="w-full"
            >
              Generate Event
            </Button>
          </div>

          {/* Helper Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleOpenPromptBuilder}
              variant="tertiary"
            >
              Open Prompt builder
            </Button>
            <Button
              onClick={handleSeeExamples}
              variant="tertiary"
            >
              See examples
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

