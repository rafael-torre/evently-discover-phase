'use client';

import { useRouter } from 'next/navigation';

export default function Landing() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/login'); // In production, this would check auth first
  };

  const handleSignIn = () => {
    router.push('/login'); // In production, this would show login modal/page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fafafa] to-[#f0f4f8]">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-[#e5e7eb] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0f172b] rounded-[12px] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-['Inter',sans-serif] font-semibold text-[#0f172b] text-[24px]">
                Evently
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="font-['SF_Pro',sans-serif] text-[15px] text-[#64748b] hover:text-[#0f172b] transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="font-['SF_Pro',sans-serif] text-[15px] text-[#64748b] hover:text-[#0f172b] transition-colors">
                How it Works
              </a>
              <a href="#pricing" className="font-['SF_Pro',sans-serif] text-[15px] text-[#64748b] hover:text-[#0f172b] transition-colors">
                Pricing
              </a>
              <button
                onClick={handleSignIn}
                className="font-['SF_Pro',sans-serif] text-[15px] text-[#0f172b] hover:text-[#1e293b] transition-colors font-medium"
              >
                Sign In
              </button>
              <button
                onClick={handleGetStarted}
                className="px-6 py-2.5 bg-[#0f172b] text-white rounded-[12px] font-['SF_Pro',sans-serif] text-[15px] font-medium hover:bg-[#1e293b] transition-all shadow-sm hover:shadow-md"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#e5e7eb] mb-8">
            <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></span>
            <span className="font-['SF_Pro',sans-serif] text-[14px] text-[#64748b]">
              AI-Powered Event Management
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-['Inter',sans-serif] font-bold text-[#0f172b] text-[56px] md:text-[72px] leading-[1.1] tracking-[-1px] mb-6">
            Create unforgettable events in{' '}
            <span className="bg-gradient-to-r from-[#0f172b] to-[#3b82f6] bg-clip-text text-transparent">
              minutes
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-['SF_Pro',sans-serif] text-[#64748b] text-[20px] md:text-[24px] leading-relaxed mb-10 max-w-3xl mx-auto">
            Let AI help you design, manage, and grow your events. From concept to celebration, Evently makes event organizing effortless.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={handleGetStarted}
              className="group px-8 py-4 bg-[#0f172b] text-white rounded-[16px] font-['SF_Pro',sans-serif] text-[18px] font-medium hover:bg-[#1e293b] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center gap-2"
            >
              Get Started Free
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="px-8 py-4 bg-white text-[#0f172b] rounded-[16px] font-['SF_Pro',sans-serif] text-[18px] font-medium hover:bg-gray-50 transition-all shadow-md border border-[#e5e7eb]">
              Watch Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 text-[14px] text-[#64748b] font-['SF_Pro',sans-serif]">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#10b981"/>
              </svg>
              <span>4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#0f172b]">10,000+</span>
              <span>events created</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#0f172b]">50,000+</span>
              <span>happy organizers</span>
            </div>
          </div>
        </div>

        {/* Hero Image / Screenshot Placeholder */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="bg-white rounded-[24px] shadow-2xl border border-[#e5e7eb] p-4">
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#e5e7eb] rounded-[16px] aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#0f172b"/>
                  </svg>
                </div>
                <p className="font-['SF_Pro',sans-serif] text-[#64748b] text-[16px]">
                  Dashboard Preview
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-['Inter',sans-serif] font-bold text-[#0f172b] text-[48px] leading-tight mb-4">
              Everything you need
            </h2>
            <p className="font-['SF_Pro',sans-serif] text-[#64748b] text-[20px] max-w-2xl mx-auto">
              Powerful features designed to make event organizing a breeze
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'AI-Powered Creation',
                description: 'Let AI help you design your perfect event in minutes with smart suggestions and templates'
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Smart Timeline',
                description: 'See what needs attention and what\'s coming up with our intelligent timeline view'
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Attendee Management',
                description: 'Track registrations, send updates, and manage your audience effortlessly'
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Real-time Analytics',
                description: 'Get insights on attendance, revenue, and engagement as they happen'
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Automated Reminders',
                description: 'Keep attendees engaged with automated emails and notifications'
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Multi-Event Management',
                description: 'Organize multiple events simultaneously with ease and clarity'
              }
            ].map((feature) => (
              <div key={feature.title} className="group p-8 rounded-[20px] bg-[#fafafa] hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-[#e5e7eb]">
                <div className="w-16 h-16 bg-white rounded-[16px] flex items-center justify-center text-[#0f172b] mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="font-['Inter',sans-serif] font-semibold text-[#0f172b] text-[22px] mb-3">
                  {feature.title}
                </h3>
                <p className="font-['SF_Pro',sans-serif] text-[#64748b] text-[16px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-[#0f172b] to-[#1e293b] rounded-[32px] p-12 md:p-16 shadow-2xl">
            <h2 className="font-['Inter',sans-serif] font-bold text-white text-[40px] md:text-[48px] leading-tight mb-6">
              Ready to create your first event?
            </h2>
            <p className="font-['SF_Pro',sans-serif] text-white/80 text-[18px] md:text-[20px] mb-8 max-w-2xl mx-auto">
              Join thousands of organizers who trust Evently to bring their events to life
            </p>
            <button
              onClick={handleGetStarted}
              className="group px-10 py-5 bg-white text-[#0f172b] rounded-[16px] font-['SF_Pro',sans-serif] text-[18px] font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] inline-flex items-center gap-3"
            >
              Get Started Free
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e5e7eb] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0f172b] rounded-[12px] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-['Inter',sans-serif] font-semibold text-[#0f172b] text-[20px]">
                Evently
              </span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="font-['SF_Pro',sans-serif] text-[14px] text-[#64748b] hover:text-[#0f172b] transition-colors">
                Privacy
              </a>
              <a href="#" className="font-['SF_Pro',sans-serif] text-[14px] text-[#64748b] hover:text-[#0f172b] transition-colors">
                Terms
              </a>
              <a href="#" className="font-['SF_Pro',sans-serif] text-[14px] text-[#64748b] hover:text-[#0f172b] transition-colors">
                Contact
              </a>
            </div>
            <p className="font-['SF_Pro',sans-serif] text-[14px] text-[#94a3b8]">
              © 2025 Evently. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
