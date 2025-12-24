import { useNavigate } from 'react-router-dom';
import Card from './Card';
import EmptyState from './EmptyState';
import Sidebar from './Sidebar';

export default function Landing() {
  const navigate = useNavigate();

  const handleCreateWithAI = () => {
    navigate('/create-with-ai');
  };

  const handleCreateManually = () => {
    console.log('Create event manually');
  };

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar userName="Mihir" userInitials="MP" />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-[1400px]">
          {/* Welcome Header */}
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] text-[#0f172b] text-[48px] tracking-[-0.5297px] mb-8">
            Hello, Mihir
          </h1>

          {/* Create Event Cards */}
          <div className="flex gap-6 mb-12">
            <Card
              title="Create Event with AI"
              onAction={handleCreateWithAI}
              actionLabel="Create"
            />
            <Card
              title="Create Event manually"
              onAction={handleCreateManually}
              actionLabel="Create"
            />
          </div>

          {/* Events Section */}
          <div>
            <h2 className="font-['SF_Pro:Medium',sans-serif] leading-[1.1] text-[24px] text-black mb-6">
              Events
            </h2>
            <EmptyState
              icon=":'("
              message="No fun events created yet..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
