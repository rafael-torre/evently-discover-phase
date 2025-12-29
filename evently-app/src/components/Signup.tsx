'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Signup() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    orgName: '',
    website: '',
    logo: null as File | null,
  });
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        logo: file,
      }));

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call - replace with actual implementation
    setTimeout(() => {
      setIsLoading(false);
      router.push('/create-event'); // Redirect to create event after signup
    }, 1500);
  };

  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        background: 'linear-gradient(144.58deg, rgba(250, 250, 250, 1) 0%, rgba(240, 244, 248, 1) 100%)'
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
              Tell us about your company
            </h2>
            <p className="font-['SF_Pro',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] leading-[21px]">
              Build your team on Evently
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Org Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="orgName"
                className="block font-['SF_Pro',sans-serif] font-bold text-[#0f172b] text-[18px] leading-[27px]"
              >
                Org Name
              </label>
              <input
                type="text"
                id="orgName"
                name="orgName"
                value={formData.orgName}
                onChange={handleInputChange}
                placeholder="Enter your event name"
                className="w-full h-[56px] bg-[#f3f3f5] border-2 border-[#e5e7eb] rounded-[16px] px-6 py-1 font-['Inter',sans-serif] text-[14px] text-[#0f172b] placeholder:text-[#717182] focus:outline-none focus:border-[#0f172b] transition-colors"
              />
            </div>

            {/* Website Field */}
            <div className="space-y-2">
              <label
                htmlFor="website"
                className="block font-['SF_Pro',sans-serif] font-bold text-[#0f172b] text-[18px] leading-[27px]"
              >
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="Enter your website URL"
                className="w-full h-[56px] bg-[#f3f3f5] border-2 border-[#e5e7eb] rounded-[16px] px-6 py-1 font-['Inter',sans-serif] text-[14px] text-[#0f172b] placeholder:text-[#717182] focus:outline-none focus:border-[#0f172b] transition-colors"
              />
            </div>

            {/* Org Logo Field */}
            <div className="space-y-2">
              <label
                htmlFor="logo"
                className="block font-['SF_Pro',sans-serif] font-bold text-[#0f172b] text-[18px] leading-[27px]"
              >
                Org Logo
              </label>
              <div className="bg-[#f1f5f9] border-2 border-[#e5e7eb] rounded-[16px] p-4 flex items-center gap-6">
                {/* Logo Preview */}
                <div className="w-16 h-16 bg-white rounded-[16px] flex items-center justify-center overflow-hidden flex-shrink-0">
                  {logoPreview ? (
                    <img src={logoPreview} alt="Logo preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-white" />
                  )}
                </div>

                {/* Upload Button */}
                <label
                  htmlFor="logo"
                  className="bg-white border-2 border-[#e5e7eb] rounded-[16px] px-[26px] py-[18px] flex items-center gap-3 cursor-pointer hover:border-[#0f172b] transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#0f172b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 8L12 3L7 8" stroke="#0f172b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3V15" stroke="#0f172b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-['SF_Pro',sans-serif] font-medium text-[#0f172b] text-[16px]">
                    Select image
                  </span>
                </label>
                <input
                  type="file"
                  id="logo"
                  name="logo"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="hidden"
                />
              </div>
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

