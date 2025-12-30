'use client';

import { useState } from 'react';
import Button from './Button';

// Icons
const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.6667 1.33331L7.33334 8.66665M14.6667 1.33331L10 14.6666L7.33334 8.66665M14.6667 1.33331L1.33334 5.99998L7.33334 8.66665" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AlertIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 6.66669V10M10 13.3334H10.01M18.3333 10C18.3333 14.6024 14.6024 18.3334 10 18.3334C5.39763 18.3334 1.66667 14.6024 1.66667 10C1.66667 5.39765 5.39763 1.66669 10 1.66669C14.6024 1.66669 18.3333 5.39765 18.3333 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MegaphoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6667 3.33331L10 6.66665V13.3333L16.6667 16.6666V3.33331Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 6.66669H5.83333C4.94928 6.66669 4.10143 7.01788 3.47631 7.643C2.85119 8.26812 2.5 9.11597 2.5 10C2.5 10.8841 2.85119 11.7319 3.47631 12.357C4.10143 12.9822 4.94928 13.3334 5.83333 13.3334H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.08334 13.3334V15C7.08334 15.663 7.34673 16.299 7.81557 16.7678C8.28441 17.2366 8.92029 17.5 9.58334 17.5C10.2464 17.5 10.8823 17.2366 11.3511 16.7678C11.8199 16.299 12.0833 15.663 12.0833 15V13.3334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6667 3.33331H3.33333C2.41286 3.33331 1.66667 4.07951 1.66667 4.99998V16.6666C1.66667 17.5871 2.41286 18.3333 3.33333 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6666V4.99998C18.3333 4.07951 17.5871 3.33331 16.6667 3.33331Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.3333 1.66669V5.00002M6.66667 1.66669V5.00002M1.66667 8.33335H18.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 11.6666L11.6667 13.3333L15 9.99998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 8.33331C17.5 14.1666 10 19.1666 10 19.1666C10 19.1666 2.5 14.1666 2.5 8.33331C2.5 6.34419 3.29018 4.43653 4.6967 3.02987C6.10322 1.62319 8.01088 0.833313 10 0.833313C11.9891 0.833313 13.8968 1.62319 15.3033 3.02987C16.7098 4.43653 17.5 6.34419 17.5 8.33331Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 10.8333C11.3807 10.8333 12.5 9.71403 12.5 8.33331C12.5 6.95259 11.3807 5.83331 10 5.83331C8.61929 5.83331 7.5 6.95259 7.5 8.33331C7.5 9.71403 8.61929 10.8333 10 10.8333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66667C5.78261 12.5 4.93477 12.8512 4.30964 13.4763C3.68452 14.1014 3.33333 14.9493 3.33333 15.8333V17.5M13.3333 5.83333C13.3333 7.67428 11.841 9.16667 10 9.16667C8.15905 9.16667 6.66667 7.67428 6.66667 5.83333C6.66667 3.99238 8.15905 2.5 10 2.5C11.841 2.5 13.3333 3.99238 13.3333 5.83333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 6.66669C15 5.34061 14.4732 4.06883 13.5355 3.13115C12.5979 2.19347 11.3261 1.66669 10 1.66669C8.67392 1.66669 7.40215 2.19347 6.46447 3.13115C5.52678 4.06883 5 5.34061 5 6.66669C5 12.5 2.5 14.1667 2.5 14.1667H17.5C17.5 14.1667 15 12.5 15 6.66669Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.4417 17.5C11.2952 17.7526 11.0849 17.9622 10.8319 18.1079C10.5789 18.2537 10.292 18.3304 10 18.3304C9.70802 18.3304 9.42115 18.2537 9.16815 18.1079C8.91515 17.9622 8.70486 17.7526 8.55835 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.3333 9.23333V10C18.3323 11.797 17.7504 13.5456 16.6744 14.9849C15.5985 16.4241 14.0861 17.4771 12.3628 17.9866C10.6395 18.4961 8.79767 18.4349 7.11205 17.8122C5.42643 17.1894 3.98718 16.0384 3.00912 14.5309C2.03106 13.0234 1.56646 11.24 1.68472 9.44693C1.80298 7.65385 2.49767 5.94694 3.66523 4.58089C4.83279 3.21485 6.41064 2.26282 8.16348 1.86679C9.91632 1.47076 11.7502 1.65195 13.3917 2.38333M18.3333 3.33333L10 11.675L7.5 9.175" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Types
export type NotificationType = 'urgent' | 'general' | 'schedule' | 'location' | 'speaker' | 'reminder';

export interface NotificationTemplate {
  id: NotificationType;
  label: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  defaultSubject: string;
  placeholder: string;
}

export interface CommunicationSettings {
  emailEnabled: boolean;
  pushEnabled: boolean;
}

export interface SentNotification {
  id: string;
  type: NotificationType;
  subject: string;
  recipientCount: number;
  channels: ('email' | 'push')[];
  sentAt: Date;
  sentBy: string;
}

// Mock data for sent notifications
const mockSentNotifications: SentNotification[] = [
  {
    id: '1',
    type: 'speaker',
    subject: 'Speaker Announcement: Beauty & Wellness Expo 2025',
    recipientCount: 143,
    channels: ['email', 'push'],
    sentAt: new Date('2025-12-29T10:30:00'),
    sentBy: 'Mihir Patel'
  },
  {
    id: '2',
    type: 'reminder',
    subject: 'Reminder: Beauty & Wellness Expo 2025 is coming up!',
    recipientCount: 168,
    channels: ['email'],
    sentAt: new Date('2025-12-28T15:45:00'),
    sentBy: 'Mihir Patel'
  },
  {
    id: '3',
    type: 'schedule',
    subject: 'Schedule Update: Beauty & Wellness Expo 2025',
    recipientCount: 143,
    channels: ['email', 'push'],
    sentAt: new Date('2025-12-27T09:15:00'),
    sentBy: 'Mihir Patel'
  },
  {
    id: '4',
    type: 'general',
    subject: 'Update: Beauty & Wellness Expo 2025',
    recipientCount: 135,
    channels: ['email'],
    sentAt: new Date('2025-12-26T14:20:00'),
    sentBy: 'Mihir Patel'
  },
  {
    id: '5',
    type: 'location',
    subject: 'Venue Update: Beauty & Wellness Expo 2025',
    recipientCount: 128,
    channels: ['email', 'push'],
    sentAt: new Date('2025-12-25T11:00:00'),
    sentBy: 'Mihir Patel'
  },
  {
    id: '6',
    type: 'general',
    subject: 'Welcome to Beauty & Wellness Expo 2025!',
    recipientCount: 120,
    channels: ['email'],
    sentAt: new Date('2025-12-24T16:30:00'),
    sentBy: 'Mihir Patel'
  },
  {
    id: '7',
    type: 'reminder',
    subject: 'Don\'t forget to register for Beauty & Wellness Expo 2025',
    recipientCount: 89,
    channels: ['email', 'push'],
    sentAt: new Date('2025-12-23T10:00:00'),
    sentBy: 'Mihir Patel'
  }
];

export const notificationTemplates: Record<NotificationType, NotificationTemplate> = {
  urgent: {
    id: 'urgent',
    label: 'Urgent Announcement',
    icon: <AlertIcon />,
    color: '#DC2626',
    bgColor: 'rgba(220, 38, 38, 0.1)',
    defaultSubject: 'Important: Urgent Update for {{event}}',
    placeholder: `We have an important update regarding {{event}}.

[Replace this with your urgent message - what happened and what attendees need to know or do]

We apologize for any inconvenience and appreciate your understanding.

If you have any questions, please don't hesitate to reach out.`
  },
  general: {
    id: 'general',
    label: 'General Update',
    icon: <MegaphoneIcon />,
    color: '#2563EB',
    bgColor: 'rgba(37, 99, 235, 0.1)',
    defaultSubject: 'Update: {{event}}',
    placeholder: `Hello,

We wanted to share an update about {{event}}.

[Add your update here - what's new or what attendees should know]

We look forward to seeing you at the event!`
  },
  schedule: {
    id: 'schedule',
    label: 'Schedule Change',
    icon: <CalendarIcon />,
    color: '#7C3AED',
    bgColor: 'rgba(124, 58, 237, 0.1)',
    defaultSubject: 'Schedule Update: {{event}}',
    placeholder: `Hi there,

We've made some changes to the schedule for {{event}}.

[Specify what changed - session time, speaker slot, break duration, etc.]

Updated Schedule:
• [Session/Activity]: [New Time]
• [Session/Activity]: [New Time]

Please make note of these changes. We apologize for any inconvenience.`
  },
  location: {
    id: 'location',
    label: 'Location Change',
    icon: <MapPinIcon />,
    color: '#EA580C',
    bgColor: 'rgba(234, 88, 12, 0.1)',
    defaultSubject: 'Venue Update: {{event}}',
    placeholder: `Important location update for {{event}}.

[Explain the reason for the change if appropriate]

New Location:
[Address]
[City, State ZIP]

[Add parking information, public transit details, or other helpful directions]

We apologize for any inconvenience this may cause.`
  },
  speaker: {
    id: 'speaker',
    label: 'Speaker Update',
    icon: <UserIcon />,
    color: '#059669',
    bgColor: 'rgba(5, 150, 105, 0.1)',
    defaultSubject: 'Speaker Announcement: {{event}}',
    placeholder: `Exciting speaker update for {{event}}!

[Choose one and customize:]

New Speaker Addition:
We're thrilled to announce that [Speaker Name], [Title/Company], will be joining us to speak about [Topic].

Speaker Change:
Please note that [Original Speaker] will be replaced by [New Speaker] for the session on [Topic].

Speaker Cancellation:
Unfortunately, [Speaker Name] can no longer join us. [Explain alternative or replacement]

We're excited about this update and look forward to an amazing session!`
  },
  reminder: {
    id: 'reminder',
    label: 'Event Reminder',
    icon: <BellIcon />,
    color: '#0891B2',
    bgColor: 'rgba(8, 145, 178, 0.1)',
    defaultSubject: 'Reminder: {{event}} is coming up!',
    placeholder: `Hi there!

This is a friendly reminder that {{event}} is happening soon!

Event Details:
• Date: [Event Date]
• Time: [Start Time]
• Location: [Venue Name & Address]

[Add any last-minute reminders, what to bring, dress code, etc.]

We can't wait to see you there!`
  }
};

interface CommunicationProps {
  readonly eventName: string;
  readonly settings?: CommunicationSettings;
  readonly onSettingsChange?: (settings: CommunicationSettings) => void;
}

export default function Communication({
  eventName,
  settings = { emailEnabled: true, pushEnabled: true },
  onSettingsChange
}: Readonly<CommunicationProps>) {
  const [selectedType, setSelectedType] = useState<NotificationType | null>(null);
  const [showComposer, setShowComposer] = useState(false);
  const [localSettings, setLocalSettings] = useState<CommunicationSettings>(settings);
  const [visibleCount, setVisibleCount] = useState(5);
  const [sentNotifications] = useState<SentNotification[]>(mockSentNotifications);

  const handleSelectType = (type: NotificationType) => {
    setSelectedType(type);
    setShowComposer(true);
  };

  const handleCloseComposer = () => {
    setShowComposer(false);
    setSelectedType(null);
  };

  const handleSettingsChange = (newSettings: CommunicationSettings) => {
    setLocalSettings(newSettings);
    if (onSettingsChange) {
      onSettingsChange(newSettings);
    }
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 5, sentNotifications.length));
  };

  const visibleNotifications = sentNotifications.slice(0, visibleCount);
  const hasMore = visibleCount < sentNotifications.length;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h2 className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[32px] text-black tracking-[-0.5px] mb-2">
          Communication
        </h2>
        <p className="font-['SF_Pro:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)]">
          Send notifications and updates to your event participants
        </p>
      </div>

      {/* Delivery Channels */}
      <div className="mb-6 p-5 bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px]">
        <h3 className="font-['SF_Pro:SemiBold',sans-serif] font-semibold text-[16px] text-black mb-3">
          Delivery Channels
        </h3>
        <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] mb-4">
          Select which channels to use for sending notifications
        </p>
        <div className="flex gap-3">
          <label
            htmlFor="email-channel"
            aria-label="Enable email notifications"
            className={`flex-1 flex items-center gap-3 p-4 border-2 rounded-[16px] cursor-pointer transition-all ${
              localSettings.emailEnabled
                ? 'bg-white border-black shadow-sm'
                : 'bg-white border-[rgba(0,0,0,0.1)] hover:border-[rgba(0,0,0,0.2)]'
            }`}
          >
            <input
              id="email-channel"
              type="checkbox"
              checked={localSettings.emailEnabled}
              onChange={(e) => handleSettingsChange({ ...localSettings, emailEnabled: e.target.checked })}
              className="w-5 h-5 rounded border-[rgba(0,0,0,0.3)] text-black focus:ring-black"
            />
            <div className="flex-1">
              <div className="font-['SF_Pro:SemiBold',sans-serif] font-semibold text-[15px] text-black flex items-center gap-2">
                📧 Email
              </div>
              <div className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.6)] mt-0.5">
                Send via email
              </div>
            </div>
          </label>

          <label
            htmlFor="push-channel"
            aria-label="Enable push notifications"
            className={`flex-1 flex items-center gap-3 p-4 border-2 rounded-[16px] cursor-pointer transition-all ${
              localSettings.pushEnabled
                ? 'bg-white border-black shadow-sm'
                : 'bg-white border-[rgba(0,0,0,0.1)] hover:border-[rgba(0,0,0,0.2)]'
            }`}
          >
            <input
              id="push-channel"
              type="checkbox"
              checked={localSettings.pushEnabled}
              onChange={(e) => handleSettingsChange({ ...localSettings, pushEnabled: e.target.checked })}
              className="w-5 h-5 rounded border-[rgba(0,0,0,0.3)] text-black focus:ring-black"
            />
            <div className="flex-1">
              <div className="font-['SF_Pro:SemiBold',sans-serif] font-semibold text-[15px] text-black flex items-center gap-2">
                🔔 Push
              </div>
              <div className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.6)] mt-0.5">
                Send to mobile app
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Notification Type Selection */}
      <div>
        <h3 className="font-['SF_Pro:SemiBold',sans-serif] font-semibold text-[16px] text-black mb-4">
          Select Notification Type
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.values(notificationTemplates).map((template) => (
            <button
              key={template.id}
              onClick={() => handleSelectType(template.id)}
              className="bg-white border-2 border-[rgba(0,0,0,0.08)] rounded-[20px] p-6 hover:border-[rgba(0,0,0,0.2)] hover:shadow-md transition-all text-left group"
            >
              <div
                className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-4"
                style={{ backgroundColor: template.bgColor, color: template.color }}
              >
                {template.icon}
              </div>
              <h3 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-black mb-2">
                {template.label}
              </h3>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.5)] line-clamp-2">
                {template.placeholder.split('\n\n')[0]}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Notification History */}
      <div className="mt-12">
        <h3 className="font-['SF_Pro:SemiBold',sans-serif] font-semibold text-[16px] text-black mb-4">
          Notification History
        </h3>

        {visibleNotifications.length === 0 ? (
          <div className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px] p-8 text-center">
            <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.5)]">
              No notifications sent yet
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {visibleNotifications.map((notification) => (
              <NotificationHistoryItem
                key={notification.id}
                notification={notification}
                template={notificationTemplates[notification.type]}
              />
            ))}

            {hasMore && (
              <div className="flex justify-center pt-2">
                <Button variant="tertiary" onClick={handleLoadMore}>
                  Load More ({sentNotifications.length - visibleCount} remaining)
                </Button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Composer Modal */}
      {showComposer && selectedType && (
        <NotificationComposer
          template={notificationTemplates[selectedType]}
          eventName={eventName}
          settings={localSettings}
          onClose={handleCloseComposer}
        />
      )}
    </div>
  );
}

// Notification History Item Component
function NotificationHistoryItem({
  notification,
  template
}: Readonly<{
  notification: SentNotification;
  template: NotificationTemplate;
}>) {
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) {
      return diffMins <= 1 ? 'Just now' : `${diffMins} minutes ago`;
    } else if (diffHours < 24) {
      return diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`;
    } else if (diffDays < 7) {
      return diffDays === 1 ? 'Yesterday' : `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  };

  return (
    <div className="bg-white border border-[rgba(0,0,0,0.08)] rounded-[16px] p-4 hover:border-[rgba(0,0,0,0.15)] transition-colors">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
          style={{ backgroundColor: template.bgColor, color: template.color }}
        >
          {template.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-1">
            <h4 className="font-['SF_Pro:SemiBold',sans-serif] font-semibold text-[15px] text-black line-clamp-1">
              {notification.subject}
            </h4>
            <span className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.5)] shrink-0">
              {formatDate(notification.sentAt)}
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {/* Type Badge */}
            <span
              className="px-2 py-0.5 rounded-md font-['SF_Pro:Medium',sans-serif] text-[12px]"
              style={{ backgroundColor: template.bgColor, color: template.color }}
            >
              {template.label}
            </span>

            {/* Recipients */}
            <span className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.6)]">
              {notification.recipientCount} recipients
            </span>

            {/* Channels */}
            <div className="flex items-center gap-1">
              {notification.channels.includes('email') && (
                <span className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.6)]">
                  📧
                </span>
              )}
              {notification.channels.includes('push') && (
                <span className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.6)]">
                  🔔
                </span>
              )}
            </div>

            {/* Sent By */}
            <span className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.5)]">
              by {notification.sentBy}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Notification Composer Component
function NotificationComposer({
  template,
  eventName,
  settings,
  onClose
}: Readonly<{
  template: NotificationTemplate;
  eventName: string;
  settings: CommunicationSettings;
  onClose: () => void;
}>) {
  const [step, setStep] = useState<'compose' | 'preview'>('compose');
  const [subject, setSubject] = useState(template.defaultSubject.replaceAll('{{event}}', eventName));
  const [message, setMessage] = useState(template.placeholder.replaceAll('{{event}}', eventName));

  // Recipients
  const [includeAllAttendees, setIncludeAllAttendees] = useState(true);
  const [includeVIPAttendees, setIncludeVIPAttendees] = useState(false);
  const [includeEarlyBird, setIncludeEarlyBird] = useState(false);
  const [includeSpeakers, setIncludeSpeakers] = useState(false);
  const [includeExhibitors, setIncludeExhibitors] = useState(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const getRecipientCount = () => {
    let count = 0;
    if (includeAllAttendees) count += 143; // From Overview stats
    if (includeVIPAttendees) count += 25;
    if (includeEarlyBird) count += 10;
    if (includeSpeakers) count += 5;
    if (includeExhibitors) count += 3;
    return count;
  };

  const handleSend = () => {
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
      onClose();
    }, 2000);
  };

  if (showSuccessModal) {
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6">
        <div className="bg-white rounded-[32px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] p-12 max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
            <CheckCircleIcon />
          </div>
          <h3 className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[24px] text-black mb-2">
            Notification Sent!
          </h3>
          <p className="font-['SF_Pro:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.6)]">
            Your message has been sent to {getRecipientCount()} recipients
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-[32px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] w-full max-w-[1200px] max-h-[95vh] flex flex-col my-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-[rgba(0,0,0,0.1)]">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-[10px] flex items-center justify-center"
              style={{ backgroundColor: template.bgColor, color: template.color }}
            >
              {template.icon}
            </div>
            <div>
              <h2 className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[22px] text-black">
                {template.label}
              </h2>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.5)]">
                {step === 'compose' ? 'Compose your message' : 'Review before sending'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[rgba(0,0,0,0.5)] hover:text-black transition-colors p-2"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {step === 'compose' ? (
            <div className="space-y-5">
              {/* Recipients and Delivery Channels Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Recipients */}
                <div>
                  <p className="block font-['SF_Pro:SemiBold',sans-serif] font-semibold text-[14px] text-black mb-3">
                    Send to:
                  </p>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 p-2.5 bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-lg hover:bg-[rgba(0,0,0,0.04)] cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={includeAllAttendees}
                        onChange={(e) => setIncludeAllAttendees(e.target.checked)}
                        className="w-4 h-4 rounded border-[rgba(0,0,0,0.3)] text-black focus:ring-black"
                      />
                      <span className="flex-1 font-['SF_Pro:Medium',sans-serif] text-[14px] text-black">
                        All Attendees
                      </span>
                      <span className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)]">
                        143
                      </span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-lg hover:bg-[rgba(0,0,0,0.04)] cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={includeVIPAttendees}
                        onChange={(e) => setIncludeVIPAttendees(e.target.checked)}
                        className="w-4 h-4 rounded border-[rgba(0,0,0,0.3)] text-black focus:ring-black"
                      />
                      <span className="flex-1 font-['SF_Pro:Medium',sans-serif] text-[14px] text-black">
                        VIP Ticket Holders
                      </span>
                      <span className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)]">
                        25
                      </span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-lg hover:bg-[rgba(0,0,0,0.04)] cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={includeEarlyBird}
                        onChange={(e) => setIncludeEarlyBird(e.target.checked)}
                        className="w-4 h-4 rounded border-[rgba(0,0,0,0.3)] text-black focus:ring-black"
                      />
                      <span className="flex-1 font-['SF_Pro:Medium',sans-serif] text-[14px] text-black">
                        Early Bird Holders
                      </span>
                      <span className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)]">
                        10
                      </span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-lg hover:bg-[rgba(0,0,0,0.04)] cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={includeSpeakers}
                        onChange={(e) => setIncludeSpeakers(e.target.checked)}
                        className="w-4 h-4 rounded border-[rgba(0,0,0,0.3)] text-black focus:ring-black"
                      />
                      <span className="flex-1 font-['SF_Pro:Medium',sans-serif] text-[14px] text-black">
                        Speakers
                      </span>
                      <span className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)]">
                        5
                      </span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-lg hover:bg-[rgba(0,0,0,0.04)] cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={includeExhibitors}
                        onChange={(e) => setIncludeExhibitors(e.target.checked)}
                        className="w-4 h-4 rounded border-[rgba(0,0,0,0.3)] text-black focus:ring-black"
                      />
                      <span className="flex-1 font-['SF_Pro:Medium',sans-serif] text-[14px] text-black">
                        Exhibitors
                      </span>
                      <span className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)]">
                        3
                      </span>
                    </label>
                  </div>
                </div>

                {/* Delivery Channels and Total */}
                <div className="space-y-3">
                  <div>
                    <p className="font-['SF_Pro:SemiBold',sans-serif] font-semibold text-[14px] text-black mb-3">
                      Delivery channels:
                    </p>
                    <div className="space-y-2">
                      {settings.emailEnabled && (
                        <div className="p-2.5 bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-lg">
                          <span className="font-['SF_Pro:Medium',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)]">
                            📧 Email
                          </span>
                        </div>
                      )}
                      {settings.pushEnabled && (
                        <div className="p-2.5 bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-lg">
                          <span className="font-['SF_Pro:Medium',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)]">
                            🔔 Push Notification
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="font-['SF_Pro:Medium',sans-serif] text-[14px] text-blue-900">
                      Total recipients: <strong>{getRecipientCount()}</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="notification-subject" className="block font-['SF_Pro:SemiBold',sans-serif] font-semibold text-[14px] text-black mb-2">
                  Subject
                </label>
                <input
                  id="notification-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Email subject line"
                  className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="notification-message" className="block font-['SF_Pro:SemiBold',sans-serif] font-semibold text-[14px] text-black">
                    Message
                  </label>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)]">
                    💡 Edit template, replace text in [brackets]
                  </p>
                </div>
                <textarea
                  id="notification-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={10}
                  className="w-full font-['SF_Pro:Regular',sans-serif] text-[14px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-3 focus:outline-none focus:border-[#4d4d4d] transition-colors resize-none"
                />
                <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)] mt-1.5">
                  {message.length} characters
                </p>
              </div>
            </div>
          ) : (
            <PreviewPane
              template={template}
              subject={subject}
              message={message}
              recipientCount={getRecipientCount()}
              settings={settings}
            />
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 p-6 pt-4 border-t border-[rgba(0,0,0,0.1)]">
          {step === 'compose' ? (
            <>
              <Button variant="tertiary" onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={() => setStep('preview')}
                disabled={!message.trim() || getRecipientCount() === 0}
              >
                Preview
              </Button>
            </>
          ) : (
            <>
              <Button variant="tertiary" onClick={() => setStep('compose')}>
                Back to Edit
              </Button>
              <Button onClick={handleSend}>
                <SendIcon />
                Send to {getRecipientCount()} Recipients
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Preview Pane
function PreviewPane({
  template,
  subject,
  message,
  recipientCount,
  settings
}: Readonly<{
  template: NotificationTemplate;
  subject: string;
  message: string;
  recipientCount: number;
  settings: CommunicationSettings;
}>) {
  return (
    <div className="space-y-5">
      {/* Preview Header */}
      <div className="p-4 bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-lg">
        <h3 className="font-['SF_Pro:SemiBold',sans-serif] font-semibold text-[15px] text-black mb-2.5">
          Message Preview
        </h3>
        <div className="space-y-1.5 text-[13px]">
          <div className="flex justify-between">
            <span className="text-[rgba(0,0,0,0.6)]">Type:</span>
            <span className="font-medium text-black">{template.label}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[rgba(0,0,0,0.6)]">Recipients:</span>
            <span className="font-medium text-black">{recipientCount} people</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[rgba(0,0,0,0.6)]">Channels:</span>
            <span className="font-medium text-black">
              {[settings.emailEnabled && 'Email', settings.pushEnabled && 'Push'].filter(Boolean).join(', ')}
            </span>
          </div>
        </div>
      </div>

      {/* Email Preview */}
      {settings.emailEnabled && (
        <div className="border-2 border-[rgba(0,0,0,0.1)] rounded-[16px] overflow-hidden">
          <div className="bg-[rgba(0,0,0,0.03)] px-5 py-3 border-b border-[rgba(0,0,0,0.1)]">
            <p className="font-['SF_Pro:Medium',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider mb-1.5">
              Email Preview
            </p>
            <h4 className="font-['SF_Pro:SemiBold',sans-serif] font-semibold text-[17px] text-black">
              {subject}
            </h4>
          </div>
          <div className="p-5 bg-white max-h-[300px] overflow-y-auto">
            <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)] whitespace-pre-wrap leading-relaxed">
              {message}
            </p>
          </div>
        </div>
      )}

      {/* Push Notification Preview */}
      {settings.pushEnabled && (
        <div className="border-2 border-[rgba(0,0,0,0.1)] rounded-[16px] overflow-hidden">
          <div className="bg-[rgba(0,0,0,0.03)] px-5 py-3 border-b border-[rgba(0,0,0,0.1)]">
            <p className="font-['SF_Pro:Medium',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider">
              Push Notification Preview
            </p>
          </div>
          <div className="p-5 bg-white">
            <div className="max-w-sm bg-white border border-[rgba(0,0,0,0.15)] rounded-[12px] shadow-md p-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: template.bgColor, color: template.color }}
                >
                  {template.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-['SF_Pro:SemiBold',sans-serif] font-semibold text-[14px] text-black mb-1">
                    {subject}
                  </h5>
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] line-clamp-2">
                    {message.slice(0, 120)}{message.length > 120 ? '...' : ''}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


