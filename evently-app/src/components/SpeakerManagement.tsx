'use client';

import { useState, useEffect } from 'react';
import Button from './Button';

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

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill={filled ? "currentColor" : "none"} xmlns="http://www.w3.org/2000/svg">
    <path d="M8 1.33337L10.06 5.50671L14.6667 6.18004L11.3333 9.42671L12.12 14.0134L8 11.8467L3.88 14.0134L4.66667 9.42671L1.33334 6.18004L5.94 5.50671L8 1.33337Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
  isFeatured: boolean;
  scheduleTime: string;
  topic: string;
  venueLocation: string;
}

interface SpeakerManagementProps {
  speakers: Speaker[];
  onClose: () => void;
  onSave: (speakers: Speaker[]) => void;
  isModal?: boolean; // Whether to render as modal or embedded view
}

export default function SpeakerManagement({ speakers: initialSpeakers, onClose, onSave, isModal = true }: SpeakerManagementProps) {
  const [speakers, setSpeakers] = useState<Speaker[]>(initialSpeakers);
  const [editingSpeaker, setEditingSpeaker] = useState<Speaker | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Auto-save in embedded mode
  useEffect(() => {
    if (!isModal) {
      onSave(speakers);
    }
  }, [speakers, isModal, onSave]);

  const handleSave = () => {
    onSave(speakers);
    if (isModal) {
      onClose();
    }
  };

  const handleDelete = (id: string) => {
    setSpeakers(speakers.filter(s => s.id !== id));
  };

  const handleToggleFeatured = (id: string) => {
    setSpeakers(speakers.map(s => ({
      ...s,
      isFeatured: s.id === id ? !s.isFeatured : (s.isFeatured && s.id !== id ? false : s.isFeatured)
    })));
  };

  const handleEdit = (speaker: Speaker) => {
    setEditingSpeaker(speaker);
    setIsAddingNew(false);
  };

  const handleAddNew = () => {
    setIsAddingNew(true);
    setEditingSpeaker({
      id: `speaker-${Date.now()}`,
      name: '',
      title: '',
      bio: '',
      isFeatured: false,
      scheduleTime: '',
      topic: '',
      venueLocation: ''
    });
  };

  const handleSaveSpeaker = (speaker: Speaker) => {
    if (isAddingNew) {
      setSpeakers([...speakers, speaker]);
    } else {
      setSpeakers(speakers.map(s => s.id === speaker.id ? speaker : s));
    }
    setEditingSpeaker(null);
    setIsAddingNew(false);
  };

  const handleCancelEdit = () => {
    setEditingSpeaker(null);
    setIsAddingNew(false);
  };

  // Sort speakers: featured first, then by schedule time
  const sortedSpeakers = [...speakers].sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return a.scheduleTime.localeCompare(b.scheduleTime);
  });

  const content = (
    <div className={isModal ? "bg-white rounded-[32px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] w-full max-w-[900px] max-h-[90vh] flex flex-col" : "w-full flex flex-col"}>
      {/* Header */}
      <div className={`flex items-center justify-between ${isModal ? 'p-8 pb-6 border-b border-[rgba(0,0,0,0.1)]' : 'pb-6 mb-6'}`}>
        <div>
          <h2 className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[24px] text-black tracking-[-0.5px]">
            Manage Speakers
          </h2>
          <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] mt-1">
            Add, edit, and schedule your event speakers
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

      {/* Content */}
      <div className={`flex-1 ${isModal ? 'overflow-y-auto p-8' : ''}`}>
          {editingSpeaker ? (
            <SpeakerForm
              speaker={editingSpeaker}
              onSave={handleSaveSpeaker}
              onCancel={handleCancelEdit}
              isNew={isAddingNew}
            />
          ) : (
            <div className="space-y-4">
              {/* Add New Button */}
              <Button
                variant="tertiary"
                className="w-full justify-center gap-2 mb-6"
                onClick={handleAddNew}
              >
                <PlusIcon />
                Add New Speaker
              </Button>

              {/* Speaker List */}
              {sortedSpeakers.length === 0 ? (
                <div className="text-center py-12">
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.4)]">
                    No speakers added yet. Click "Add New Speaker" to get started.
                  </p>
                </div>
              ) : (
                sortedSpeakers.map((speaker) => (
                  <SpeakerCard
                    key={speaker.id}
                    speaker={speaker}
                    onEdit={() => handleEdit(speaker)}
                    onDelete={() => handleDelete(speaker.id)}
                    onToggleFeatured={() => handleToggleFeatured(speaker.id)}
                  />
                ))
              )}
            </div>
          )}
      </div>

      {/* Footer */}
      {!editingSpeaker && isModal && (
        <div className="flex items-center justify-end gap-3 p-8 pt-6 border-t border-[rgba(0,0,0,0.1)]">
          <Button variant="tertiary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      )}

      {/* Auto-save indicator for embedded view */}
      {!editingSpeaker && !isModal && (
        <div className="mt-6 pt-6 border-t border-[rgba(0,0,0,0.1)]">
          <p className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.5)] text-center">
            Changes are saved automatically
          </p>
        </div>
      )}
    </div>
  );

  return isModal ? (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6">
      {content}
    </div>
  ) : (
    content
  );
}

// Speaker Card Component
function SpeakerCard({
  speaker,
  onEdit,
  onDelete,
  onToggleFeatured
}: {
  speaker: Speaker;
  onEdit: () => void;
  onDelete: () => void;
  onToggleFeatured: () => void;
}) {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px] p-5 hover:border-[rgba(0,0,0,0.15)] transition-colors">
      <div className="flex gap-4">
        {/* Avatar */}
        <div className="bg-[rgba(217,217,217,0.4)] rounded-[16px] w-[80px] h-[80px] flex-shrink-0 flex items-center justify-center">
          {speaker.imageUrl ? (
            <img src={speaker.imageUrl} alt={speaker.name} className="w-full h-full object-cover rounded-[16px]" />
          ) : (
            <span className="font-['Rethink_Sans:Medium',sans-serif] text-[24px] text-[rgba(0,0,0,0.4)]">
              {speaker.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-black">
                  {speaker.name}
                </h3>
                {speaker.isFeatured && (
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-[rgba(255,200,0,0.15)] rounded-full">
                    <StarIcon filled={true} />
                    <span className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.7)] uppercase tracking-wider">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)]">
                {speaker.title}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={onToggleFeatured}
                className={`p-2 rounded-lg transition-colors ${
                  speaker.isFeatured
                    ? 'text-[rgba(255,180,0,1)] hover:bg-[rgba(255,200,0,0.1)]'
                    : 'text-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0.05)]'
                }`}
                title={speaker.isFeatured ? 'Remove featured status' : 'Set as featured'}
              >
                <StarIcon filled={speaker.isFeatured} />
              </button>
              <button
                onClick={onEdit}
                className="p-2 text-[rgba(0,0,0,0.5)] hover:text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors"
                title="Edit speaker"
              >
                <EditIcon />
              </button>
              <button
                onClick={onDelete}
                className="p-2 text-[rgba(0,0,0,0.5)] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete speaker"
              >
                <TrashIcon />
              </button>
            </div>
          </div>

          {/* Schedule Info */}
          <div className="grid grid-cols-3 gap-3 mt-3 pt-3 border-t border-[rgba(0,0,0,0.08)]">
            <div>
              <p className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider mb-1">
                Time
              </p>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.8)]">
                {speaker.scheduleTime || 'Not scheduled'}
              </p>
            </div>
            <div>
              <p className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider mb-1">
                Location
              </p>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.8)]">
                {speaker.venueLocation || 'TBD'}
              </p>
            </div>
            <div className="col-span-1">
              <p className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider mb-1">
                Topic
              </p>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.8)] truncate">
                {speaker.topic || 'TBD'}
              </p>
            </div>
          </div>

          {/* Bio Preview */}
          {speaker.bio && (
            <p className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.5)] mt-3 line-clamp-2">
              {speaker.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Speaker Form Component
function SpeakerForm({
  speaker,
  onSave,
  onCancel,
  isNew
}: {
  speaker: Speaker;
  onSave: (speaker: Speaker) => void;
  onCancel: () => void;
  isNew: boolean;
}) {
  const [formData, setFormData] = useState<Speaker>(speaker);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    onSave(formData);
  };

  const updateField = (field: keyof Speaker, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px] p-6">
        <h3 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-black mb-5">
          {isNew ? 'Add New Speaker' : 'Edit Speaker'}
        </h3>

        {/* Basic Info */}
        <div className="space-y-4">
          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Speaker Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="e.g., Daniela Kim"
              required
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
            />
          </div>

          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Title / Role
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => updateField('title', e.target.value)}
              placeholder="e.g., Skincare Expert & Beauty Scientist"
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
            />
          </div>

          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Bio
            </label>
            <textarea
              value={formData.bio}
              onChange={(e) => updateField('bio', e.target.value)}
              placeholder="Brief description about the speaker..."
              rows={3}
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors resize-none"
            />
          </div>

          {/* Featured Toggle */}
          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="featured"
              checked={formData.isFeatured}
              onChange={(e) => updateField('isFeatured', e.target.checked)}
              className="w-4 h-4 rounded border-[rgba(0,0,0,0.3)] text-black focus:ring-0 focus:ring-offset-0"
            />
            <label htmlFor="featured" className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)] flex items-center gap-2">
              <StarIcon filled={formData.isFeatured} />
              Set as Featured Speaker
            </label>
          </div>
        </div>

        {/* Schedule Info */}
        <div className="mt-6 pt-6 border-t border-[rgba(0,0,0,0.1)]">
          <h4 className="font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] uppercase tracking-wider mb-4">
            Schedule Details
          </h4>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Time
              </label>
              <input
                type="text"
                value={formData.scheduleTime}
                onChange={(e) => updateField('scheduleTime', e.target.value)}
                placeholder="e.g., 2:00 PM - 3:00 PM"
                className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
            </div>

            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Venue Location
              </label>
              <input
                type="text"
                value={formData.venueLocation}
                onChange={(e) => updateField('venueLocation', e.target.value)}
                placeholder="e.g., Main Hall, Room A"
                className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Topic / Session Title
            </label>
            <input
              type="text"
              value={formData.topic}
              onChange={(e) => updateField('topic', e.target.value)}
              placeholder="e.g., Transformative Skincare Routines"
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex items-center justify-end gap-3">
        <Button type="button" variant="tertiary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={!formData.name.trim()}>
          {isNew ? 'Add Speaker' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
}

