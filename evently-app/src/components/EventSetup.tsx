import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Button from './Button';
import Input from './Input';

export default function EventSetup() {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState('');

  const handleCreate = () => {
    if (eventName.trim()) {
      console.log('Creating event:', eventName);
      // Navigate to event prompt page
      navigate('/event-prompt');
    }
  };

  const handleSkip = () => {
    console.log('Skipping event name');
    // Navigate to event prompt page without name
    navigate('/event-prompt');
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
            Choose a cool name for your event
          </h1>

          {/* Input Field */}
          <div className="w-full mb-4">
            <Input
              placeholder="Event name"
              value={eventName}
              onChange={setEventName}
            />
          </div>

          {/* Create Button */}
          <div className="w-full mb-4">
            <Button
              onClick={handleCreate}
              className="w-full h-[32px]"
            >
              Create
            </Button>
          </div>

          {/* Skip Link */}
          <button
            onClick={handleSkip}
            className="font-['SF_Pro:Medium',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)] underline leading-[1.1] cursor-pointer hover:text-black transition-colors"
          >
            Choose name later
          </button>
        </div>
      </div>
    </div>
  );
}

