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

const UploadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M14.1667 6.66667L10 2.5M10 2.5L5.83333 6.66667M10 2.5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.66667 8.66667C6.95298 9.0482 7.31826 9.36453 7.73771 9.59169C8.15716 9.81886 8.62101 9.95143 9.09641 9.98075C9.57181 10.0101 10.0485 9.93552 10.4941 9.76378C10.9397 9.59203 11.3436 9.32724 11.68 8.98667L13.68 6.98667C14.2429 6.40696 14.5549 5.63228 14.5489 4.82697C14.543 4.02167 14.2195 3.25159 13.6475 2.67957C13.0755 2.10755 12.3054 1.78407 11.5001 1.77811C10.6948 1.77216 9.92014 2.08421 9.34 2.64667L8.08 3.9M9.33333 7.33333C9.04703 6.9518 8.68174 6.63547 8.26229 6.40831C7.84284 6.18114 7.37899 6.04857 6.90359 6.01925C6.42819 5.98993 5.95152 6.06448 5.50589 6.23622C5.06026 6.40797 4.65638 6.67276 4.32 7.01333L2.32 9.01333C1.75709 9.59305 1.44505 10.3677 1.45101 11.173C1.45696 11.9783 1.78044 12.7484 2.35246 13.3204C2.92448 13.8925 3.69456 14.2159 4.49986 14.2219C5.30517 14.2278 6.07985 13.9158 6.66 13.3533L7.91333 12.1067" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TagIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.7733 8.43998L8.43998 13.7733C8.2597 13.9537 8.04556 14.0972 7.80993 14.1957C7.5743 14.2943 7.32199 14.3459 7.06665 14.3459C6.81131 14.3459 6.559 14.2943 6.32337 14.1957C6.08774 14.0972 5.8736 13.9537 5.69331 13.7733L1.33331 9.41331V1.33331H9.41331L13.7733 5.69331C14.1349 6.05609 14.3387 6.54996 14.3387 7.06665C14.3387 7.58333 14.1349 8.0772 13.7733 8.43998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.33331 5.33331H5.34065" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export type SponsorshipTier = 'platinum' | 'gold' | 'silver' | 'bronze' | 'standard';

export interface Exhibitor {
  id: string;
  companyName: string;
  logoUrl?: string;
  tagline: string;
  description: string;
  tier: SponsorshipTier;
  boothNumber: string;
  floorArea: string;
  website: string;
  contactPerson: string;
  contactEmail: string;
  industryTags: string[];
  offerings: string;
}

interface ExhibitorManagementProps {
  exhibitors: Exhibitor[];
  onClose: () => void;
  onSave: (exhibitors: Exhibitor[]) => void;
  isModal?: boolean;
}

const tierConfig: Record<SponsorshipTier, { label: string; color: string; bgColor: string; order: number }> = {
  platinum: { label: 'Platinum', color: 'rgba(229,228,226,1)', bgColor: 'rgba(229,228,226,0.2)', order: 1 },
  gold: { label: 'Gold', color: 'rgba(255,193,7,1)', bgColor: 'rgba(255,193,7,0.15)', order: 2 },
  silver: { label: 'Silver', color: 'rgba(158,158,158,1)', bgColor: 'rgba(158,158,158,0.15)', order: 3 },
  bronze: { label: 'Bronze', color: 'rgba(205,127,50,1)', bgColor: 'rgba(205,127,50,0.15)', order: 4 },
  standard: { label: 'Standard', color: 'rgba(0,0,0,0.6)', bgColor: 'rgba(0,0,0,0.05)', order: 5 }
};

export default function ExhibitorManagement({ exhibitors: initialExhibitors, onClose, onSave, isModal = true }: ExhibitorManagementProps) {
  const [exhibitors, setExhibitors] = useState<Exhibitor[]>(initialExhibitors);
  const [editingExhibitor, setEditingExhibitor] = useState<Exhibitor | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Auto-save in embedded mode
  useEffect(() => {
    if (!isModal) {
      onSave(exhibitors);
    }
  }, [exhibitors, isModal, onSave]);

  const handleSave = () => {
    onSave(exhibitors);
    if (isModal) {
      onClose();
    }
  };

  const handleDelete = (id: string) => {
    setExhibitors(exhibitors.filter(e => e.id !== id));
  };

  const handleEdit = (exhibitor: Exhibitor) => {
    setEditingExhibitor(exhibitor);
    setIsAddingNew(false);
  };

  const handleAddNew = () => {
    setIsAddingNew(true);
    setEditingExhibitor({
      id: `exhibitor-${Date.now()}`,
      companyName: '',
      tagline: '',
      description: '',
      tier: 'standard',
      boothNumber: '',
      floorArea: '',
      website: '',
      contactPerson: '',
      contactEmail: '',
      industryTags: [],
      offerings: ''
    });
  };

  const handleSaveExhibitor = (exhibitor: Exhibitor) => {
    if (isAddingNew) {
      setExhibitors([...exhibitors, exhibitor]);
    } else {
      setExhibitors(exhibitors.map(e => e.id === exhibitor.id ? exhibitor : e));
    }
    setEditingExhibitor(null);
    setIsAddingNew(false);
  };

  const handleCancelEdit = () => {
    setEditingExhibitor(null);
    setIsAddingNew(false);
  };

  // Sort exhibitors: by tier first, then alphabetically
  const sortedExhibitors = [...exhibitors].sort((a, b) => {
    const tierDiff = tierConfig[a.tier].order - tierConfig[b.tier].order;
    if (tierDiff !== 0) return tierDiff;
    return a.companyName.localeCompare(b.companyName);
  });

  const content = (
    <div className={isModal ? "bg-white rounded-[32px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] w-full max-w-[900px] max-h-[90vh] flex flex-col" : "w-full flex flex-col"}>
      {/* Header */}
      <div className={`flex items-center justify-between ${isModal ? 'p-8 pb-6 border-b border-[rgba(0,0,0,0.1)]' : 'pb-6 mb-6'}`}>
        <div>
          <h2 className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[24px] text-black tracking-[-0.5px]">
            Manage Exhibitors
          </h2>
          <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] mt-1">
            Add and manage event exhibitors and sponsors
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
        {editingExhibitor ? (
          <ExhibitorForm
            exhibitor={editingExhibitor}
            onSave={handleSaveExhibitor}
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
              Add New Exhibitor
            </Button>

            {/* Exhibitor List */}
            {sortedExhibitors.length === 0 ? (
              <div className="text-center py-12">
                <p className="font-['SF_Pro:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.4)]">
                  No exhibitors added yet. Click "Add New Exhibitor" to get started.
                </p>
              </div>
            ) : (
              sortedExhibitors.map((exhibitor) => (
                <ExhibitorCard
                  key={exhibitor.id}
                  exhibitor={exhibitor}
                  onEdit={() => handleEdit(exhibitor)}
                  onDelete={() => handleDelete(exhibitor.id)}
                />
              ))
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      {!editingExhibitor && isModal && (
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
      {!editingExhibitor && !isModal && (
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

// Exhibitor Card Component
function ExhibitorCard({
  exhibitor,
  onEdit,
  onDelete
}: {
  exhibitor: Exhibitor;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const tierInfo = tierConfig[exhibitor.tier];

  return (
    <div className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px] p-5 hover:border-[rgba(0,0,0,0.15)] transition-colors">
      <div className="flex gap-4">
        {/* Logo */}
        <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[16px] w-[100px] h-[100px] flex-shrink-0 flex items-center justify-center p-2">
          {exhibitor.logoUrl ? (
            <img src={exhibitor.logoUrl} alt={exhibitor.companyName} className="w-full h-full object-contain" />
          ) : (
            <span className="font-['Rethink_Sans:Medium',sans-serif] text-[20px] text-[rgba(0,0,0,0.3)]">
              {exhibitor.companyName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-black">
                  {exhibitor.companyName}
                </h3>
                <div
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: tierInfo.bgColor }}
                >
                  <span
                    className="font-['SF_Pro:Medium',sans-serif] text-[11px] uppercase tracking-wider"
                    style={{ color: tierInfo.color }}
                  >
                    {tierInfo.label}
                  </span>
                </div>
              </div>
              {exhibitor.tagline && (
                <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] italic">
                  "{exhibitor.tagline}"
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={onEdit}
                className="p-2 text-[rgba(0,0,0,0.5)] hover:text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors"
                title="Edit exhibitor"
              >
                <EditIcon />
              </button>
              <button
                onClick={onDelete}
                className="p-2 text-[rgba(0,0,0,0.5)] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete exhibitor"
              >
                <TrashIcon />
              </button>
            </div>
          </div>

          {/* Location & Contact Info */}
          <div className="grid grid-cols-3 gap-3 mt-3 pt-3 border-t border-[rgba(0,0,0,0.08)]">
            <div>
              <p className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider mb-1">
                Booth
              </p>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.8)]">
                {exhibitor.boothNumber || 'TBD'}
              </p>
            </div>
            <div>
              <p className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider mb-1">
                Location
              </p>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.8)]">
                {exhibitor.floorArea || 'TBD'}
              </p>
            </div>
            <div>
              <p className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider mb-1">
                Website
              </p>
              {exhibitor.website ? (
                <a
                  href={exhibitor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.8)] hover:text-black underline truncate block"
                >
                  Visit site
                </a>
              ) : (
                <p className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.8)]">
                  N/A
                </p>
              )}
            </div>
          </div>

          {/* Industry Tags */}
          {exhibitor.industryTags.length > 0 && (
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              {exhibitor.industryTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-[rgba(0,0,0,0.06)] rounded-md font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.7)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Description Preview */}
          {exhibitor.description && (
            <p className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.5)] mt-3 line-clamp-2">
              {exhibitor.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Exhibitor Form Component
function ExhibitorForm({
  exhibitor,
  onSave,
  onCancel,
  isNew
}: {
  exhibitor: Exhibitor;
  onSave: (exhibitor: Exhibitor) => void;
  onCancel: () => void;
  isNew: boolean;
}) {
  const [formData, setFormData] = useState<Exhibitor>(exhibitor);
  const [tagInput, setTagInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName.trim()) return;
    onSave(formData);
  };

  const updateField = (field: keyof Exhibitor, value: string | SponsorshipTier | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you'd upload to a server and get back a URL
      // For now, we'll create a local object URL
      const url = URL.createObjectURL(file);
      updateField('logoUrl', url);
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.industryTags.includes(tagInput.trim())) {
      updateField('industryTags', [...formData.industryTags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    updateField('industryTags', formData.industryTags.filter(tag => tag !== tagToRemove));
  };

  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px] p-6">
        <h3 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-black mb-5">
          {isNew ? 'Add New Exhibitor' : 'Edit Exhibitor'}
        </h3>

        {/* Company Info */}
        <div className="space-y-4">
          {/* Logo Upload */}
          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Company Logo
            </label>
            <div className="flex items-center gap-4">
              <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[16px] w-[100px] h-[100px] flex items-center justify-center p-2">
                {formData.logoUrl ? (
                  <img src={formData.logoUrl} alt="Logo preview" className="w-full h-full object-contain" />
                ) : (
                  <span className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.3)] text-center">
                    No logo
                  </span>
                )}
              </div>
              <div className="flex-1">
                <label className="cursor-pointer">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[rgba(0,0,0,0.04)] hover:bg-[rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.15)] rounded-lg transition-colors">
                    <UploadIcon />
                    <span className="font-['SF_Pro:Medium',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)]">
                      Upload Logo
                    </span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                </label>
                <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)] mt-2">
                  PNG, JPG or SVG (recommended: square format)
                </p>
              </div>
            </div>
          </div>

          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Company Name *
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => updateField('companyName', e.target.value)}
              placeholder="e.g., TechCorp Solutions"
              required
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
            />
          </div>

          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Tagline
            </label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => updateField('tagline', e.target.value)}
              placeholder="e.g., Innovating the future of technology"
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
              placeholder="Brief description about the company..."
              rows={3}
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors resize-none"
            />
          </div>

          {/* Sponsorship Tier */}
          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Sponsorship Tier
            </label>
            <select
              value={formData.tier}
              onChange={(e) => updateField('tier', e.target.value as SponsorshipTier)}
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors bg-white"
            >
              <option value="platinum">Platinum</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
              <option value="bronze">Bronze</option>
              <option value="standard">Standard</option>
            </select>
          </div>

          {/* Industry Tags */}
          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Industry Tags
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagInputKeyDown}
                placeholder="e.g., Technology, Healthcare"
                className="flex-1 font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
              <Button type="button" variant="tertiary" onClick={addTag}>
                <TagIcon />
              </Button>
            </div>
            {formData.industryTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.industryTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 px-3 py-1 bg-[rgba(0,0,0,0.06)] rounded-md font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)]"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-1 text-[rgba(0,0,0,0.4)] hover:text-[rgba(0,0,0,0.8)]"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Location Details */}
        <div className="mt-6 pt-6 border-t border-[rgba(0,0,0,0.1)]">
          <h4 className="font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] uppercase tracking-wider mb-4">
            Location Details
          </h4>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Booth Number
              </label>
              <input
                type="text"
                value={formData.boothNumber}
                onChange={(e) => updateField('boothNumber', e.target.value)}
                placeholder="e.g., A-101, Hall 2-B15"
                className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
            </div>

            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Floor / Area
              </label>
              <input
                type="text"
                value={formData.floorArea}
                onChange={(e) => updateField('floorArea', e.target.value)}
                placeholder="e.g., Main Hall, East Wing"
                className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Contact & Links */}
        <div className="mt-6 pt-6 border-t border-[rgba(0,0,0,0.1)]">
          <h4 className="font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] uppercase tracking-wider mb-4">
            Contact & Links
          </h4>

          <div className="space-y-4">
            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Website
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[rgba(0,0,0,0.4)]">
                  <LinkIcon />
                </div>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => updateField('website', e.target.value)}
                  placeholder="https://example.com"
                  className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                  Contact Person
                </label>
                <input
                  type="text"
                  value={formData.contactPerson}
                  onChange={(e) => updateField('contactPerson', e.target.value)}
                  placeholder="e.g., John Smith"
                  className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
                />
              </div>

              <div>
                <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => updateField('contactEmail', e.target.value)}
                  placeholder="contact@example.com"
                  className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Offerings */}
        <div className="mt-6 pt-6 border-t border-[rgba(0,0,0,0.1)]">
          <h4 className="font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] uppercase tracking-wider mb-4">
            Products / Services
          </h4>

          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Key Offerings
            </label>
            <textarea
              value={formData.offerings}
              onChange={(e) => updateField('offerings', e.target.value)}
              placeholder="Describe the main products or services this exhibitor will showcase..."
              rows={4}
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors resize-none"
            />
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex items-center justify-end gap-3">
        <Button type="button" variant="tertiary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={!formData.companyName.trim()}>
          {isNew ? 'Add Exhibitor' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
}



