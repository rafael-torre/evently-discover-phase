'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    // Simulate API call - replace with actual Google OAuth implementation
    setTimeout(() => {
      setIsLoading(false);
      router.push('/home'); // Redirect to home/dashboard after login
    }, 1500);
  };

  return (
    <div className="flex min-h-screen w-full bg-[#fafafa]">

      {/* Main Content */}
      <div className="relative z-10 flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-[440px]">
          {/* Logo/Brand Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0f172b] rounded-[16px] mb-6 shadow-lg">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="font-['Inter',sans-serif] font-semibold text-[#0f172b] text-[40px] tracking-[-0.5px] mb-3">
              Welcome to Evently
            </h1>
            <p className="font-['SF_Pro',sans-serif] text-[18px] text-[#64748b]">
              Create and manage amazing events with ease
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-[24px] p-10 shadow-2xl">
            <div className="mb-8">
              <h2 className="font-['Inter',sans-serif] font-semibold text-[#0f172b] text-[28px] mb-2">
                Sign in
              </h2>
              <p className="font-['SF_Pro',sans-serif] text-[15px] text-[#64748b]">
                Sign in to your account to continue
              </p>
            </div>

            {/* Google Sign In Button */}
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-[#e5e7eb] rounded-[16px] px-6 py-4 font-['SF_Pro',sans-serif] font-medium text-[16px] text-[#0f172b] hover:border-[#0f172b] hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-[#e5e7eb] border-t-[#0f172b] rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#64748b"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#64748b"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#64748b"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#64748b"/>
                  </svg>
                  <span>Continue with Google</span>
                </>
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-[#e5e7eb]"></div>
              <span className="font-['SF_Pro',sans-serif] text-[13px] text-[#94a3b8]">
                or
              </span>
              <div className="flex-1 h-px bg-[#e5e7eb]"></div>
            </div>

            {/* Email Sign In Option (Optional - can be removed if only Google is needed) */}
            <button
              className="w-full flex items-center justify-center gap-3 bg-[#0f172b] rounded-[16px] px-6 py-4 font-['SF_Pro',sans-serif] font-medium text-[16px] text-white hover:bg-[#1e293b] transition-all duration-300 group"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33333 3.33334H16.6667C17.5833 3.33334 18.3333 4.08334 18.3333 5.00001V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33333C2.41667 16.6667 1.66667 15.9167 1.66667 15V5.00001C1.66667 4.08334 2.41667 3.33334 3.33333 3.33334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.3333 5L10 10.8333L1.66667 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Continue with Email</span>
            </button>

            {/* Terms and Privacy */}
            <p className="font-['SF_Pro',sans-serif] text-[13px] text-[#94a3b8] text-center mt-8 leading-relaxed">
              By continuing, you agree to our{' '}
              <a href="#" className="text-[#0f172b] hover:underline font-medium">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-[#0f172b] hover:underline font-medium">
                Privacy Policy
              </a>
            </p>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="font-['SF_Pro',sans-serif] text-[14px] text-[#64748b]">
              Don't have an account?{' '}
              <button
                onClick={() => router.push('/signup')}
                className="text-[#0f172b] font-medium hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Feature Highlights - Right Side (Optional) */}
      <div className="hidden lg:flex relative z-10 flex-1 items-center justify-center p-16">
        <div className="max-w-[500px]">
          <h3 className="font-['Inter',sans-serif] font-semibold text-[#0f172b] text-[32px] mb-8 leading-tight">
            Everything you need to create unforgettable events
          </h3>

          <div className="space-y-6">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'AI-Powered Creation',
                description: 'Let AI help you design your perfect event in minutes'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Attendee Management',
                description: 'Track registrations and manage your audience effortlessly'
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.27002 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Real-time Analytics',
                description: 'Get insights on attendance, revenue, and engagement'
              }
            ].map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-[12px] bg-[#f1f5f9] flex items-center justify-center text-[#0f172b] flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-['SF_Pro',sans-serif] font-semibold text-[#0f172b] text-[18px] mb-1">
                    {feature.title}
                  </h4>
                  <p className="font-['SF_Pro',sans-serif] text-[15px] text-[#64748b]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

