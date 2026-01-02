'use client';

import { useState, useEffect } from 'react';
import Button from './Button';
import SpeakerManagement, { Speaker } from './SpeakerManagement';

// Icons
const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3.33337V12.6667M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.3333 2.00004C11.5084 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6666 1.44775C12.9142 1.44775 13.1594 1.49653 13.3882 1.59129C13.617 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4087 2.61178C14.5035 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5035 3.82619 14.4087 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00001 13.6667L1.33334 14.6667L2.33334 11L11.3333 2.00004Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4H3.33333H14M5.33333 4V2.66667C5.33333 2.31304 5.47381 1.97391 5.72386 1.72386C5.97391 1.47381 6.31304 1.33333 6.66667 1.33333H9.33333C9.68696 1.33333 10.0261 1.47381 10.2761 1.72386C10.5262 1.97391 10.6667 2.31304 10.6667 2.66667V4M12.6667 4V13.3333C12.6667 13.687 12.5262 14.0261 12.2761 14.2761C12.0261 14.5262 11.687 14.6667 11.3333 14.6667H4.66667C4.31304 14.6667 3.97391 14.5262 3.72386 14.2761C3.47381 14.0261 3.33333 13.687 3.33333 13.3333V4H12.6667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4V8L10.6667 9.33333M14.6667 8C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8C1.33333 4.3181 4.3181 1.33333 8 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 6.66667C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66667C2 5.07536 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.40871 0.666672 8 0.666672C9.59131 0.666672 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07536 14 6.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.56209 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.56209 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AlertIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5.33337V8.00004M8 10.6667H8.00667M14.6667 8.00004C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8.00004C1.33333 4.31814 4.3181 1.33337 8 1.33337C11.6819 1.33337 14.6667 4.31814 14.6667 8.00004Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Segment Types
export type SegmentType = 'session' | 'keynote' | 'break' | 'food' | 'networking' | 'workshop' | 'panel' | 'registration' | 'other';

export interface AgendaSegment {
  id: string;
  type: SegmentType;
  title: string;
  description?: string;
  startTime: string; // HH:MM format
  endTime: string; // HH:MM format
  day: number; // Day index (0 for single day, 0,1,2... for multi-day)
  location?: string;
  speakerIds?: string[]; // References to speaker IDs
  capacity?: number;
  isPublished: boolean;
}

interface AgendaManagementProps {
  segments: AgendaSegment[];
  speakers: Speaker[]; // Available speakers to assign
  onSpeakersChange: (speakers: Speaker[]) => void; // Callback to update speakers
  eventDays: number; // Number of days (1 for single day)
  onClose: () => void;
  onSave: (segments: AgendaSegment[]) => void;
  isModal?: boolean;
}

const SEGMENT_TYPE_CONFIG: Record<SegmentType, { label: string; emoji: string; color: string; bgColor: string; borderColor: string }> = {
  session: { label: 'Session/Talk', emoji: '🎤', color: 'rgba(59,130,246,1)', bgColor: 'rgba(59,130,246,0.08)', borderColor: 'rgba(59,130,246,0.2)' },
  keynote: { label: 'Keynote', emoji: '⭐', color: 'rgba(234,179,8,1)', bgColor: 'rgba(234,179,8,0.08)', borderColor: 'rgba(234,179,8,0.2)' },
  break: { label: 'Break', emoji: '☕', color: 'rgba(139,92,246,1)', bgColor: 'rgba(139,92,246,0.08)', borderColor: 'rgba(139,92,246,0.2)' },
  food: { label: 'Food', emoji: '🍽️', color: 'rgba(236,72,153,1)', bgColor: 'rgba(236,72,153,0.08)', borderColor: 'rgba(236,72,153,0.2)' },
  networking: { label: 'Networking', emoji: '🤝', color: 'rgba(34,197,94,1)', bgColor: 'rgba(34,197,94,0.08)', borderColor: 'rgba(34,197,94,0.2)' },
  workshop: { label: 'Workshop', emoji: '🎓', color: 'rgba(249,115,22,1)', bgColor: 'rgba(249,115,22,0.08)', borderColor: 'rgba(249,115,22,0.2)' },
  panel: { label: 'Panel', emoji: '👥', color: 'rgba(20,184,166,1)', bgColor: 'rgba(20,184,166,0.08)', borderColor: 'rgba(20,184,166,0.2)' },
  registration: { label: 'Registration', emoji: '📝', color: 'rgba(100,116,139,1)', bgColor: 'rgba(100,116,139,0.08)', borderColor: 'rgba(100,116,139,0.2)' },
  other: { label: 'Other', emoji: '🎉', color: 'rgba(0,0,0,0.7)', bgColor: 'rgba(0,0,0,0.04)', borderColor: 'rgba(0,0,0,0.1)' },
};

export default function AgendaManagement({
  segments: initialSegments,
  speakers,
  onSpeakersChange,
  eventDays = 1,
  onClose,
  onSave,
  isModal = true
}: AgendaManagementProps) {
  const [segments, setSegments] = useState<AgendaSegment[]>(initialSegments);
  const [currentDay, setCurrentDay] = useState(0);
  const [editingSegment, setEditingSegment] = useState<AgendaSegment | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [showSpeakerModal, setShowSpeakerModal] = useState(false);

  // Auto-save in embedded mode
  useEffect(() => {
    if (!isModal) {
      onSave(segments);
    }
  }, [segments, isModal, onSave]);

  const handleSave = () => {
    onSave(segments);
    if (isModal) {
      onClose();
    }
  };

  const handleDelete = (id: string) => {
    setSegments(segments.filter(s => s.id !== id));
  };

  const handleEdit = (segment: AgendaSegment) => {
    setEditingSegment(segment);
    setIsAddingNew(false);
  };

  const handleAddNew = () => {
    setIsAddingNew(true);
    setEditingSegment({
      id: `segment-${Date.now()}`,
      type: 'session',
      title: '',
      description: '',
      startTime: '09:00',
      endTime: '10:00',
      day: currentDay,
      location: '',
      speakerIds: [],
      isPublished: true,
    });
  };

  const handleSaveSegment = (segment: AgendaSegment) => {
    if (isAddingNew) {
      setSegments([...segments, segment]);
    } else {
      setSegments(segments.map(s => s.id === segment.id ? segment : s));
    }
    setEditingSegment(null);
    setIsAddingNew(false);
  };

  const handleCancelEdit = () => {
    setEditingSegment(null);
    setIsAddingNew(false);
  };

  // Get segments for current day, sorted by time
  const daySegments = segments
    .filter(s => s.day === currentDay)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  // Check for time conflicts
  const hasConflict = (segment: AgendaSegment) => {
    return segments.some(s =>
      s.id !== segment.id &&
      s.day === segment.day &&
      s.location === segment.location &&
      (
        (s.startTime <= segment.startTime && s.endTime > segment.startTime) ||
        (s.startTime < segment.endTime && s.endTime >= segment.endTime) ||
        (segment.startTime <= s.startTime && segment.endTime > s.startTime)
      )
    );
  };

  const content = (
    <div className={isModal ? "bg-white rounded-[32px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] w-full max-w-[1100px] max-h-[90vh] flex flex-col" : "w-full flex flex-col"}>
      {/* Header */}
      <div className={`flex items-center justify-between ${isModal ? 'p-8 pb-6 border-b border-[rgba(0,0,0,0.1)]' : 'pb-6 mb-6'}`}>
        <div>
          <h2 className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[24px] text-black tracking-[-0.5px]">
            Event Agenda
          </h2>
          <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] mt-1">
            Create and organize your event schedule with sessions, breaks, and activities
          </p>
        </div>
        {isModal && (
          <button
            onClick={onClose}
            className="text-[rgba(0,0,0,0.5)] hover:text-black transition-colors p-2"
          >
            <CloseIcon />
          </button>
        )}
      </div>

      {/* Multi-day tabs */}
      {eventDays > 1 && (
        <div className={`flex gap-2 ${isModal ? 'px-8' : ''} ${editingSegment ? 'hidden' : ''}`}>
          {Array.from({ length: eventDays }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentDay(index)}
              className={`px-6 py-3 rounded-t-[16px] font-['SF_Pro:Medium',sans-serif] text-[14px] transition-all ${
                currentDay === index
                  ? 'bg-[rgba(0,0,0,0.05)] text-black border-b-2 border-black'
                  : 'text-[rgba(0,0,0,0.5)] hover:text-black hover:bg-[rgba(0,0,0,0.02)]'
              }`}
            >
              Day {index + 1}
              <span className="ml-2 text-[12px] text-[rgba(0,0,0,0.5)]">
                ({segments.filter(s => s.day === index).length})
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className={`flex-1 ${isModal ? 'overflow-y-auto p-8' : ''}`}>
        {editingSegment ? (
          <SegmentForm
            segment={editingSegment}
            speakers={speakers}
            onSave={handleSaveSegment}
            onCancel={handleCancelEdit}
            isNew={isAddingNew}
          />
        ) : (
          <div className="space-y-4">
            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <Button
                variant="tertiary"
                className="flex-1 justify-center gap-2"
                onClick={handleAddNew}
              >
                <PlusIcon />
                Add Agenda Item
              </Button>
              <Button
                variant="tertiary"
                className="justify-center gap-2"
                onClick={() => setShowSpeakerModal(true)}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6667 14V12.6667C10.6667 11.9594 10.3857 11.2811 9.88562 10.781C9.38552 10.281 8.70724 10 8 10H3.33333C2.62609 10 1.94781 10.281 1.44772 10.781C0.947625 11.2811 0.666672 11.9594 0.666672 12.6667V14M13.3333 5.33337V9.33337M15.3333 7.33337H11.3333M8.33333 4.33333C8.33333 5.80609 7.13943 7 5.66667 7C4.19391 7 3 5.80609 3 4.33333C3 2.86057 4.19391 1.66667 5.66667 1.66667C7.13943 1.66667 8.33333 2.86057 8.33333 4.33333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Manage Speakers ({speakers.length})
              </Button>
            </div>

            {/* Agenda Timeline */}
            {daySegments.length === 0 ? (
              <div className="text-center py-12">
                <p className="font-['SF_Pro:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.4)]">
                  No items scheduled for {eventDays > 1 ? `Day ${currentDay + 1}` : 'this event'} yet.
                </p>
                <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.3)] mt-2">
                  Click "Add Agenda Item" to get started.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {daySegments.map((segment) => {
                  const hasTimeConflict = hasConflict(segment);
                  const config = SEGMENT_TYPE_CONFIG[segment.type];
                  const assignedSpeakers = speakers.filter(s => segment.speakerIds?.includes(s.id));

                  return (
                    <div
                      key={segment.id}
                      className="bg-white border rounded-[12px] p-3 hover:shadow-sm transition-all"
                      style={{
                        borderColor: config.borderColor,
                        backgroundColor: config.bgColor,
                      }}
                    >
                      <div className="flex gap-3">
                        {/* Time column */}
                        <div className="flex-shrink-0 w-[95px]">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-[rgba(0,0,0,0.4)]">
                              <path d="M8 4V8L10.6667 9.33333M14.6667 8C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8C1.33333 4.3181 4.3181 1.33333 8 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="font-['SF_Pro:SemiBold',sans-serif] text-[16px] text-black leading-none">
                              {segment.startTime}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[rgba(0,0,0,0.5)]">
                            <div className="w-[14px]" />
                            <span className="font-['SF_Pro:Regular',sans-serif] text-[14px] leading-none">
                              {segment.endTime}
                            </span>
                          </div>
                          <div className="mt-1.5 pt-1.5 border-t border-[rgba(0,0,0,0.1)]">
                            <span className="font-['SF_Pro:Medium',sans-serif] text-[10px] text-[rgba(0,0,0,0.5)]">
                              {calculateDuration(segment.startTime, segment.endTime)}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 mb-1">
                                <span className="text-[16px]">{config.emoji}</span>
                                <span
                                  className="px-2 py-0.5 rounded-full font-['SF_Pro:Medium',sans-serif] text-[9px] uppercase tracking-wider"
                                  style={{
                                    color: config.color,
                                    backgroundColor: config.bgColor,
                                  }}
                                >
                                  {config.label}
                                </span>
                                {hasTimeConflict && (
                                  <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-yellow-100 border border-yellow-300 rounded-full" title="Time conflict with another item">
                                    <AlertIcon />
                                    <span className="font-['SF_Pro:Medium',sans-serif] text-[9px] text-yellow-800 uppercase tracking-wider">
                                      Overlap
                                    </span>
                                  </div>
                                )}
                              </div>
                              <h3 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[15px] text-black leading-tight">
                                {segment.title || 'Untitled Item'}
                              </h3>
                              {segment.description && (
                                <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.6)] line-clamp-1 mt-0.5">
                                  {segment.description}
                                </p>
                              )}
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-0.5">
                              <button
                                onClick={() => handleEdit(segment)}
                                className="p-1 text-[rgba(0,0,0,0.5)] hover:text-black hover:bg-[rgba(0,0,0,0.08)] rounded transition-colors"
                                title="Edit item"
                              >
                                <EditIcon />
                              </button>
                              <button
                                onClick={() => handleDelete(segment.id)}
                                className="p-1 text-[rgba(0,0,0,0.5)] hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                                title="Delete item"
                              >
                                <TrashIcon />
                              </button>
                            </div>
                          </div>

                          {/* Meta info */}
                          {(segment.location || assignedSpeakers.length > 0) && (
                            <div className="flex items-center gap-3 mt-1.5 pt-1.5 border-t border-[rgba(0,0,0,0.1)]">
                              {segment.location && (
                                <div className="flex items-center gap-1">
                                  <LocationIcon />
                                  <span className="font-['SF_Pro:Regular',sans-serif] text-[11px] text-[rgba(0,0,0,0.7)]">
                                    {segment.location}
                                  </span>
                                </div>
                              )}
                              {assignedSpeakers.length > 0 && (
                                <div className="flex items-center gap-1">
                                  <span className="font-['SF_Pro:Medium',sans-serif] text-[10px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider">
                                    Speaker{assignedSpeakers.length > 1 ? 's' : ''}:
                                  </span>
                                  <span className="font-['SF_Pro:Regular',sans-serif] text-[11px] text-[rgba(0,0,0,0.7)]">
                                    {assignedSpeakers.map(s => s.name).join(', ')}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Legend */}
            {daySegments.length > 0 && (
              <div className="mt-8 pt-6 border-t border-[rgba(0,0,0,0.1)]">
                <p className="font-['SF_Pro:Medium',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider mb-3">
                  Segment Types
                </p>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(SEGMENT_TYPE_CONFIG).map(([type, config]) => (
                    <div
                      key={type}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full border"
                      style={{
                        backgroundColor: config.bgColor,
                        borderColor: config.borderColor,
                      }}
                    >
                      <span className="text-[14px]">{config.emoji}</span>
                      <span className="font-['SF_Pro:Regular',sans-serif] text-[12px]" style={{ color: config.color }}>
                        {config.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      {!editingSegment && isModal && (
        <div className="flex items-center justify-end gap-3 p-8 pt-6 border-t border-[rgba(0,0,0,0.1)]">
          <Button variant="tertiary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Agenda
          </Button>
        </div>
      )}

      {/* Auto-save indicator for embedded view */}
      {!editingSegment && !isModal && (
        <div className="mt-6 pt-6 border-t border-[rgba(0,0,0,0.1)]">
          <p className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.5)] text-center">
            Changes are saved automatically
          </p>
        </div>
      )}
    </div>
  );

  return (
    <>
      {isModal ? (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6">
          {content}
        </div>
      ) : (
        content
      )}

      {/* Speaker Management Modal */}
      {showSpeakerModal && (
        <SpeakerManagement
          speakers={speakers}
          agendaSegments={segments}
          onClose={() => setShowSpeakerModal(false)}
          onSave={(updatedSpeakers) => {
            onSpeakersChange(updatedSpeakers);
            setShowSpeakerModal(false);
          }}
          isModal={true}
        />
      )}
    </>
  );
}

// Segment Form Component
function SegmentForm({
  segment,
  speakers,
  onSave,
  onCancel,
  isNew
}: {
  segment: AgendaSegment;
  speakers: Speaker[];
  onSave: (segment: AgendaSegment) => void;
  onCancel: () => void;
  isNew: boolean;
}) {
  const [formData, setFormData] = useState<AgendaSegment>(segment);
  const [showSpeakerDropdown, setShowSpeakerDropdown] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    onSave(formData);
  };

  const updateField = (field: keyof AgendaSegment, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleSpeaker = (speakerId: string) => {
    const currentSpeakers = formData.speakerIds || [];
    const newSpeakers = currentSpeakers.includes(speakerId)
      ? currentSpeakers.filter(id => id !== speakerId)
      : [...currentSpeakers, speakerId];
    updateField('speakerIds', newSpeakers);
  };

  const config = SEGMENT_TYPE_CONFIG[formData.type];
  const selectedSpeakers = speakers.filter(s => formData.speakerIds?.includes(s.id));

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px] p-6">
        <h3 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-black mb-5">
          {isNew ? 'Add Agenda Item' : 'Edit Agenda Item'}
        </h3>

        {/* Type Selector */}
        <div className="mb-5">
          <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-3">
            Item Type *
          </label>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(SEGMENT_TYPE_CONFIG).map(([type, config]) => (
              <button
                key={type}
                type="button"
                onClick={() => updateField('type', type as SegmentType)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 transition-all ${
                  formData.type === type
                    ? 'border-black bg-[rgba(0,0,0,0.05)]'
                    : 'border-[rgba(0,0,0,0.1)] hover:border-[rgba(0,0,0,0.3)]'
                }`}
              >
                <span className="text-[18px]">{config.emoji}</span>
                <span className="font-['SF_Pro:Medium',sans-serif] text-[13px] text-black">
                  {config.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Basic Info */}
        <div className="space-y-4">
          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => updateField('title', e.target.value)}
              placeholder="e.g., Welcome & Registration"
              required
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
            />
          </div>

          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => updateField('description', e.target.value)}
              placeholder="Brief description of this agenda item..."
              rows={2}
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors resize-none"
            />
          </div>

          {/* Time & Location */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Start Time *
              </label>
              <input
                type="time"
                value={formData.startTime}
                onChange={(e) => updateField('startTime', e.target.value)}
                required
                className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
            </div>
            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                End Time *
              </label>
              <input
                type="time"
                value={formData.endTime}
                onChange={(e) => updateField('endTime', e.target.value)}
                required
                className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
            </div>
            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => updateField('location', e.target.value)}
                placeholder="e.g., Main Hall"
                className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
            </div>
          </div>

          {/* Duration indicator */}
          {formData.startTime && formData.endTime && (
            <div className="flex items-center gap-2 px-3 py-2 bg-[rgba(0,0,0,0.03)] rounded-lg">
              <ClockIcon />
              <span className="font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)]">
                Duration: {calculateDuration(formData.startTime, formData.endTime)}
              </span>
            </div>
          )}

          {/* Speaker Assignment */}
          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Assign Speakers {['session', 'keynote', 'workshop', 'panel'].includes(formData.type) && '(recommended)'}
            </label>

            {selectedSpeakers.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedSpeakers.map(speaker => (
                  <div
                    key={speaker.id}
                    className="flex items-center gap-2 px-3 py-1.5 bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.3)] rounded-full"
                  >
                    <span className="font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(59,130,246,1)]">
                      {speaker.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleSpeaker(speaker.id)}
                      className="text-[rgba(59,130,246,0.7)] hover:text-[rgba(59,130,246,1)]"
                    >
                      <CloseIcon />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="relative">
              <button
                type="button"
                onClick={() => setShowSpeakerDropdown(!showSpeakerDropdown)}
                className="w-full flex items-center justify-between px-4 py-2.5 border border-[rgba(0,0,0,0.15)] rounded-lg hover:border-[#4d4d4d] transition-colors"
              >
                <span className="font-['SF_Pro:Regular',sans-serif] text-[15px] text-[rgba(0,0,0,0.5)]">
                  {speakers.length === 0 ? 'No speakers available' : 'Select speakers...'}
                </span>
                <ChevronDownIcon />
              </button>

              {showSpeakerDropdown && speakers.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-[rgba(0,0,0,0.15)] rounded-lg shadow-lg max-h-[200px] overflow-y-auto">
                  {speakers.map(speaker => (
                    <button
                      key={speaker.id}
                      type="button"
                      onClick={() => toggleSpeaker(speaker.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[rgba(0,0,0,0.03)] transition-colors text-left ${
                        formData.speakerIds?.includes(speaker.id) ? 'bg-[rgba(59,130,246,0.05)]' : ''
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.speakerIds?.includes(speaker.id)}
                        onChange={() => {}}
                        className="w-4 h-4 rounded border-[rgba(0,0,0,0.3)]"
                      />
                      <div className="flex-1">
                        <p className="font-['SF_Pro:Medium',sans-serif] text-[14px] text-black">
                          {speaker.name}
                        </p>
                        {speaker.title && (
                          <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)]">
                            {speaker.title}
                          </p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {speakers.length === 0 && (
              <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.4)] mt-1">
                Add speakers first to assign them to agenda items
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex items-center justify-end gap-3">
        <Button type="button" variant="tertiary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={!formData.title.trim()}>
          {isNew ? 'Add Item' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
}

// Helper function to calculate duration
function calculateDuration(startTime: string, endTime: string): string {
  const [startHour, startMin] = startTime.split(':').map(Number);
  const [endHour, endMin] = endTime.split(':').map(Number);

  const startMinutes = startHour * 60 + startMin;
  const endMinutes = endHour * 60 + endMin;
  const diffMinutes = endMinutes - startMinutes;

  if (diffMinutes < 0) return 'Invalid time range';

  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  if (hours === 0) return `${minutes}min`;
  if (minutes === 0) return `${hours}h`;
  return `${hours}h ${minutes}min`;
}

