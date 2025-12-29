'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateEvent() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    eventCapacity: '',
    eventAddress: '',
    locationDetails: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call - replace with actual implementation
    setTimeout(() => {
      setIsLoading(false);
      router.push('/add-speakers'); // Redirect to add speakers after event creation
    }, 1500);
  };

  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        background: 'linear-gradient(134.04deg, rgba(250, 250, 250, 1) 0%, rgba(240, 244, 248, 1) 100%)'
      }}
    >
      {/* Navigation Header */}
      <div
        className="sticky top-0 z-10 border-b border-[#e5e7eb] bg-white/80 backdrop-blur-[6px] px-8 md:px-[132.5px] py-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0f172b] rounded-[12px] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="font-['Inter',sans-serif] font-semibold text-[#0f172b] text-[24px]">
            Evently
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-start justify-center pt-8 pb-16 px-4">
        <div className="w-full max-w-[840px] bg-white rounded-[24px] p-10 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          {/* Header */}
          <div className="mb-8">
            <h2 className="font-['Inter',sans-serif] font-semibold text-[#0f172b] text-[32px] mb-2 leading-[40px]">
              Create your first event
            </h2>
            <p className="font-['Inter',sans-serif] text-[15px] text-[#64748b] leading-[22.5px]">
              Let's get started by describing the event you are organizing
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Event Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="eventName"
                className="block font-['SF_Pro',sans-serif] font-bold text-[#0f172b] text-[18px] leading-[27px]"
              >
                Event Name
              </label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                value={formData.eventName}
                onChange={handleInputChange}
                placeholder="Enter your event name"
                className="w-full h-[56px] bg-[#f3f3f5] border-2 border-[#e5e7eb] rounded-[16px] px-6 py-1 font-['Inter',sans-serif] text-[14px] text-[#0f172b] placeholder:text-[#717182] focus:outline-none focus:border-[#0f172b] transition-colors"
              />
            </div>

            {/* Event Date and Time - Two Column Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Event Date */}
              <div className="space-y-2">
                <label
                  htmlFor="eventDate"
                  className="flex items-center gap-2 font-['SF_Pro',sans-serif] font-bold text-[#0f172b] text-[18px] leading-[27px]"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07953 2.5 5.00001V16.6667C2.5 17.5872 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5872 17.5 16.6667V5.00001C17.5 4.07953 16.7538 3.33334 15.8333 3.33334Z" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.3333 1.66666V4.99999" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66667 1.66666V4.99999" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.5 8.33334H17.5" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full h-[56px] bg-[#f3f3f5] border-2 border-[#e5e7eb] rounded-[16px] px-6 py-1 font-['Inter',sans-serif] text-[14px] text-[#0f172b] focus:outline-none focus:border-[#0f172b] transition-colors"
                />
              </div>

              {/* Event Time */}
              <div className="space-y-2">
                <label
                  htmlFor="eventTime"
                  className="flex items-center gap-2 font-['SF_Pro',sans-serif] font-bold text-[#0f172b] text-[18px] leading-[27px]"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66666 10 1.66666C5.39763 1.66666 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 5V10L13.3333 11.6667" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Event Time
                </label>
                <input
                  type="time"
                  id="eventTime"
                  name="eventTime"
                  value={formData.eventTime}
                  onChange={handleInputChange}
                  className="w-full h-[56px] bg-[#f3f3f5] border-2 border-[#e5e7eb] rounded-[16px] px-6 py-1 font-['Inter',sans-serif] text-[14px] text-[#0f172b] focus:outline-none focus:border-[#0f172b] transition-colors"
                />
              </div>
            </div>

            {/* Event Capacity Field */}
            <div className="space-y-2">
              <label
                htmlFor="eventCapacity"
                className="flex items-center gap-2 font-['SF_Pro',sans-serif] font-bold text-[#0f172b] text-[18px] leading-[27px]"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1667 17.5V15.8333C14.1667 14.9493 13.8155 14.1014 13.1904 13.4763C12.5652 12.8512 11.7174 12.5 10.8333 12.5H4.16667C3.28261 12.5 2.43476 12.8512 1.80964 13.4763C1.18452 14.1014 0.833336 14.9493 0.833336 15.8333V17.5" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.50001 9.16667C9.34096 9.16667 10.8333 7.67428 10.8333 5.83333C10.8333 3.99238 9.34096 2.5 7.50001 2.5C5.65906 2.5 4.16667 3.99238 4.16667 5.83333C4.16667 7.67428 5.65906 9.16667 7.50001 9.16667Z" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.1667 17.5V15.8333C19.1661 15.0948 18.9204 14.3773 18.4679 13.7936C18.0154 13.2099 17.3819 12.793 16.6667 12.6083" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3333 2.60834C14.0503 2.79192 14.6858 3.20892 15.1397 3.79359C15.5935 4.37827 15.8398 5.09736 15.8398 5.8375C15.8398 6.57765 15.5935 7.29674 15.1397 7.88141C14.6858 8.46609 14.0503 8.88309 13.3333 9.06667" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Event Capacity
              </label>
              <input
                type="number"
                id="eventCapacity"
                name="eventCapacity"
                value={formData.eventCapacity}
                onChange={handleInputChange}
                placeholder="Maximum number of attendees"
                className="w-full h-[56px] bg-[#f3f3f5] border-2 border-[#e5e7eb] rounded-[16px] px-6 py-1 font-['Inter',sans-serif] text-[14px] text-[#0f172b] placeholder:text-[#717182] focus:outline-none focus:border-[#0f172b] transition-colors"
                min="1"
              />
            </div>

            {/* Event Address Field */}
            <div className="space-y-2">
              <label
                htmlFor="eventAddress"
                className="flex items-center gap-2 font-['SF_Pro',sans-serif] font-bold text-[#0f172b] text-[18px] leading-[27px]"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 8.33334C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33334C2.5 6.34421 3.29018 4.4366 4.6967 3.03007C6.10322 1.62355 8.01088 0.833344 10 0.833344C11.9891 0.833344 13.8968 1.62355 15.3033 3.03007C16.7098 4.4366 17.5 6.34421 17.5 8.33334Z" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 10.8333C11.3807 10.8333 12.5 9.71406 12.5 8.33334C12.5 6.95263 11.3807 5.83334 10 5.83334C8.61929 5.83334 7.5 6.95263 7.5 8.33334C7.5 9.71406 8.61929 10.8333 10 10.8333Z" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Event Address
              </label>
              <input
                type="text"
                id="eventAddress"
                name="eventAddress"
                value={formData.eventAddress}
                onChange={handleInputChange}
                placeholder="Enter event location address"
                className="w-full h-[56px] bg-[#f3f3f5] border-2 border-[#e5e7eb] rounded-[16px] px-6 py-1 font-['Inter',sans-serif] text-[14px] text-[#0f172b] placeholder:text-[#717182] focus:outline-none focus:border-[#0f172b] transition-colors"
              />
            </div>

            {/* Location Preview */}
            <div className="space-y-2">
              <label
                className="flex items-center gap-2 font-['SF_Pro',sans-serif] font-bold text-[#0f172b] text-[18px] leading-[27px]"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 8.33334C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33334C2.5 6.34421 3.29018 4.4366 4.6967 3.03007C6.10322 1.62355 8.01088 0.833344 10 0.833344C11.9891 0.833344 13.8968 1.62355 15.3033 3.03007C16.7098 4.4366 17.5 6.34421 17.5 8.33334Z" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 10.8333C11.3807 10.8333 12.5 9.71406 12.5 8.33334C12.5 6.95263 11.3807 5.83334 10 5.83334C8.61929 5.83334 7.5 6.95263 7.5 8.33334C7.5 9.71406 8.61929 10.8333 10 10.8333Z" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Location Preview
              </label>
              <div className="bg-[#f1f5f9] border-2 border-[#e5e7eb] rounded-[16px] p-2 h-[280px] flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-white rounded-[16px] flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 13.3333C28 22.6667 16 30.6667 16 30.6667C16 30.6667 4 22.6667 4 13.3333C4 10.1507 5.26428 7.09854 7.51472 4.84811C9.76516 2.59767 12.8174 1.33334 16 1.33334C19.1826 1.33334 22.2348 2.59767 24.4853 4.84811C26.7357 7.09854 28 10.1507 28 13.3333Z" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17.3333C18.2091 17.3333 20 15.5425 20 13.3333C20 11.1242 18.2091 9.33334 16 9.33334C13.7909 9.33334 12 11.1242 12 13.3333C12 15.5425 13.7909 17.3333 16 17.3333Z" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-center space-y-2">
                  <p className="font-['Inter',sans-serif] text-[15px] text-[#64748b] leading-[22.5px]">
                    Enter an address to preview location
                  </p>
                  <p className="font-['Inter',sans-serif] text-[13px] text-[#94a3b8] leading-[19.5px]">
                    Map preview will appear here
                  </p>
                </div>
              </div>
            </div>

            {/* Location Details Field (Optional) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="locationDetails"
                  className="flex items-center gap-2 font-['SF_Pro',sans-serif] font-bold text-[#0f172b] text-[18px] leading-[27px]"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66666 10 1.66666C5.39763 1.66666 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 13.3333V10" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 6.66666H10.0083" stroke="#0f172b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Location Details
                </label>
                <span className="font-['SF_Pro',sans-serif] font-bold text-[13px] text-[#94a3b8] leading-[19.5px]">
                  Optional
                </span>
              </div>
              <textarea
                id="locationDetails"
                name="locationDetails"
                value={formData.locationDetails}
                onChange={handleInputChange}
                placeholder="Add specific instructions (e.g., parking info, entrance details)"
                rows={4}
                className="w-full bg-[#f3f3f5] border-2 border-[#e5e7eb] rounded-[16px] px-6 py-4 font-['Inter',sans-serif] text-[14px] text-[#0f172b] placeholder:text-[#717182] focus:outline-none focus:border-[#0f172b] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#0f172b] text-white rounded-[16px] py-[18px] font-['Inter',sans-serif] font-medium text-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#1e293b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </span>
                ) : (
                  'Next'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

