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

const DragIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 4H6.00667M6 8H6.00667M6 12H6.00667M10 4H10.0067M10 8H10.0067M10 12H10.0067" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TicketIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 7.5H5C4.30964 7.5 3.75 8.05964 3.75 8.75V11.25C3.75 11.9404 4.30964 12.5 5 12.5H15C15.6904 12.5 16.25 11.9404 16.25 11.25V8.75C16.25 8.05964 15.6904 7.5 15 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5 7.5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33333 3.33337H16.6667C17.5833 3.33337 18.3333 4.08337 18.3333 5.00004V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33333C2.41667 16.6667 1.66667 15.9167 1.66667 15V5.00004C1.66667 4.08337 2.41667 3.33337 3.33333 3.33337Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.3333 5L10 10.8333L1.66667 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66667C5.78261 12.5 4.93476 12.8512 4.30964 13.4763C3.68452 14.1014 3.33333 14.9493 3.33333 15.8333V17.5M13.3333 5.83333C13.3333 7.67428 11.841 9.16667 10 9.16667C8.15905 9.16667 6.66667 7.67428 6.66667 5.83333C6.66667 3.99238 8.15905 2.5 10 2.5C11.841 2.5 13.3333 3.99238 13.3333 5.83333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.1667 12.5C16.0557 12.7513 16.0226 13.0302 16.0717 13.3006C16.1209 13.5709 16.2501 13.8203 16.4417 14.0167L16.4917 14.0667C16.6461 14.221 16.7687 14.4044 16.8527 14.6063C16.9368 14.8083 16.9806 15.0249 16.9806 15.2437C16.9806 15.4626 16.9368 15.6792 16.8527 15.8812C16.7687 16.0831 16.6461 16.2665 16.4917 16.4208C16.3373 16.5752 16.154 16.6978 15.952 16.7819C15.75 16.8659 15.5334 16.9097 15.3146 16.9097C15.0957 16.9097 14.8791 16.8659 14.6772 16.7819C14.4752 16.6978 14.2918 16.5752 14.1375 16.4208L14.0875 16.3708C13.8911 16.1792 13.6417 16.05 13.3714 16.0009C13.101 15.9517 12.8221 15.9848 12.5708 16.0958C12.3243 16.2014 12.1153 16.3771 11.9698 16.6017C11.8243 16.8263 11.7487 17.0897 11.7521 17.3583V17.5C11.7521 17.942 11.5765 18.366 11.2624 18.6804C10.9483 18.9945 10.5243 19.1701 10.0823 19.1701C9.64029 19.1701 9.21632 18.9945 8.90221 18.6804C8.5881 18.366 8.4125 17.942 8.4125 17.5V17.425C8.40391 17.1478 8.31883 16.8782 8.16732 16.6478C8.01581 16.4174 7.80403 16.2353 7.55625 16.1208C7.30497 16.0098 7.02605 15.9767 6.75571 16.0259C6.48537 16.075 6.23598 16.2042 6.03958 16.3958L5.98958 16.4458C5.83527 16.6002 5.65188 16.7228 5.44992 16.8069C5.24796 16.8909 5.03136 16.9347 4.8125 16.9347C4.59364 16.9347 4.37704 16.8909 4.17508 16.8069C3.97312 16.7228 3.78973 16.6002 3.63542 16.4458C3.48105 16.2915 3.35843 16.1081 3.27438 15.9062C3.19033 15.7042 3.14648 15.4876 3.14648 15.2688C3.14648 15.0499 3.19033 14.8333 3.27438 14.6313C3.35843 14.4294 3.48105 14.246 3.63542 14.0917L3.68542 14.0417C3.87698 13.8453 4.00616 13.5959 4.05533 13.3255C4.1045 13.0552 4.07136 12.7763 3.96042 12.525C3.85481 12.2785 3.67912 12.0695 3.45451 11.924C3.22991 11.7785 2.96651 11.7029 2.69792 11.7063H2.5C2.05797 11.7063 1.634 11.5307 1.31989 11.2166C1.00578 10.9025 0.830177 10.4785 0.830177 10.0365C0.830177 9.59443 1.00578 9.17046 1.31989 8.85635C1.634 8.54224 2.05797 8.36664 2.5 8.36664H2.575C2.85221 8.35805 3.12178 8.27297 3.35218 8.12146C3.58258 7.96995 3.76474 7.75817 3.87917 7.51039C3.99011 7.25911 4.02325 6.98019 3.97408 6.70985C3.92491 6.43951 3.79573 6.19012 3.60417 5.99372L3.55417 5.94372C3.3998 5.78941 3.27718 5.60602 3.19313 5.40406C3.10908 5.2021 3.06523 4.9855 3.06523 4.76664C3.06523 4.54778 3.10908 4.33118 3.19313 4.12922C3.27718 3.92726 3.3998 3.74387 3.55417 3.58956C3.70848 3.43519 3.89187 3.31257 4.09383 3.22852C4.29579 3.14447 4.51239 3.10062 4.73125 3.10062C4.95011 3.10062 5.16671 3.14447 5.36867 3.22852C5.57063 3.31257 5.75402 3.43519 5.90833 3.58956L5.95833 3.63956C6.15473 3.83112 6.40412 3.9603 6.67446 4.00947C6.9448 4.05864 7.22372 4.0255 7.475 3.91456H7.5C7.74651 3.80895 7.95549 3.63326 8.101 3.40865C8.24651 3.18405 8.32212 2.92065 8.31875 2.65206V2.5C8.31875 2.05797 8.49435 1.634 8.80846 1.31989C9.12257 1.00578 9.54654 0.830177 9.98858 0.830177C10.4306 0.830177 10.8546 1.00578 11.1687 1.31989C11.4828 1.634 11.6584 2.05797 11.6584 2.5V2.575C11.655 2.84359 11.7306 3.10699 11.8761 3.3316C12.0216 3.5562 12.2306 3.73189 12.4771 3.8375C12.7284 3.94844 13.0073 3.98158 13.2776 3.93241C13.548 3.88324 13.7974 3.75406 13.9938 3.5625L14.0438 3.5125C14.1981 3.35813 14.3815 3.23551 14.5834 3.15146C14.7854 3.06741 15.002 3.02356 15.2208 3.02356C15.4397 3.02356 15.6563 3.06741 15.8583 3.15146C16.0602 3.23551 16.2436 3.35813 16.3979 3.5125C16.5523 3.66681 16.6749 3.8502 16.759 4.05216C16.843 4.25412 16.8869 4.47072 16.8869 4.68958C16.8869 4.90844 16.843 5.12504 16.759 5.327C16.6749 5.52896 16.5523 5.71235 16.3979 5.86666L16.3479 5.91666C16.1564 6.11306 16.0272 6.36245 15.978 6.63279C15.9289 6.90313 15.962 7.18205 16.073 7.43333V7.5C16.1786 7.74651 16.3543 7.95549 16.5789 8.101C16.8035 8.24651 17.0669 8.32212 17.3355 8.31875H17.5C17.942 8.31875 18.366 8.49435 18.6801 8.80846C18.9942 9.12257 19.1698 9.54654 19.1698 9.98858C19.1698 10.4306 18.9942 10.8546 18.6801 11.1687C18.366 11.4828 17.942 11.6584 17.5 11.6584H17.425C17.1564 11.655 16.893 11.7306 16.6684 11.8761C16.4438 12.0216 16.2681 12.2306 16.1625 12.4771V12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GroupIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.1667 17.5V15.8333C14.1667 14.9493 13.8155 14.1014 13.1904 13.4763C12.5652 12.8512 11.7174 12.5 10.8333 12.5H4.16667C3.28261 12.5 2.43476 12.8512 1.80964 13.4763C1.18452 14.1014 0.833333 14.9493 0.833333 15.8333V17.5M19.1667 17.5V15.8333C19.1662 15.0948 18.9204 14.3773 18.4679 13.7936C18.0154 13.2099 17.3819 12.793 16.6667 12.6083M13.3333 2.60834C14.0503 2.79192 14.6858 3.20892 15.1396 3.79359C15.5935 4.37827 15.8398 5.09736 15.8398 5.8375C15.8398 6.57765 15.5935 7.29674 15.1396 7.88141C14.6858 8.46609 14.0503 8.88309 13.3333 9.06667M10.8333 5.83333C10.8333 7.67428 9.34095 9.16667 7.5 9.16667C5.65905 9.16667 4.16667 7.67428 4.16667 5.83333C4.16667 3.99238 5.65905 2.5 7.5 2.5C9.34095 2.5 10.8333 3.99238 10.8333 5.83333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Types
export interface TicketType {
  id: string;
  name: string;
  price: number;
  capacity: number;
  registered: number;
  salesStart?: string;
  salesEnd?: string;
  isActive: boolean;
}

export type FieldType = 'text' | 'number' | 'url';

export interface RegistrationField {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required: boolean;
  order: number;
}

export interface RegistrationSettings {
  isOpen: boolean;
  eventCapacity: number | 'unlimited';
  groupRegistrationEnabled: boolean;
}

interface RegistrationManagementProps {
  tickets: TicketType[];
  fields: RegistrationField[];
  settings: RegistrationSettings;
  onClose: () => void;
  onSave: (tickets: TicketType[], fields: RegistrationField[], settings: RegistrationSettings) => void;
  isModal?: boolean;
}

export default function RegistrationManagement({
  tickets: initialTickets,
  fields: initialFields,
  settings: initialSettings,
  onClose,
  onSave,
  isModal = true
}: RegistrationManagementProps) {
  const [tickets, setTickets] = useState<TicketType[]>(initialTickets);
  const [fields, setFields] = useState<RegistrationField[]>(initialFields);
  const [settings, setSettings] = useState<RegistrationSettings>(initialSettings);
  const [editingTicket, setEditingTicket] = useState<TicketType | null>(null);
  const [editingField, setEditingField] = useState<RegistrationField | null>(null);
  const [isAddingTicket, setIsAddingTicket] = useState(false);
  const [isAddingField, setIsAddingField] = useState(false);
  const [showAddFieldMenu, setShowAddFieldMenu] = useState(false);
  const [showEmailCustomization, setShowEmailCustomization] = useState(false);
  const [emailMessage, setEmailMessage] = useState('We look forward to seeing you at the event!');

  // Auto-save in embedded mode
  useEffect(() => {
    if (!isModal) {
      onSave(tickets, fields, settings);
    }
  }, [tickets, fields, settings, isModal, onSave]);

  const handleSave = () => {
    onSave(tickets, fields, settings);
    if (isModal) {
      onClose();
    }
  };

  // Ticket handlers
  const handleAddTicket = () => {
    setIsAddingTicket(true);
    setEditingTicket({
      id: `ticket-${Date.now()}`,
      name: '',
      price: 0,
      capacity: 100,
      registered: 0,
      isActive: true,
    });
  };

  const handleEditTicket = (ticket: TicketType) => {
    setEditingTicket(ticket);
    setIsAddingTicket(false);
  };

  const handleSaveTicket = (ticket: TicketType) => {
    if (isAddingTicket) {
      setTickets([...tickets, ticket]);
    } else {
      setTickets(tickets.map(t => t.id === ticket.id ? ticket : t));
    }
    setEditingTicket(null);
    setIsAddingTicket(false);
  };

  const handleDeleteTicket = (id: string) => {
    setTickets(tickets.filter(t => t.id !== id));
  };

  // Field handlers
  const handleAddField = (type: FieldType, suggestedLabel?: string) => {
    setIsAddingField(true);
    setEditingField({
      id: `field-${Date.now()}`,
      label: suggestedLabel || '',
      type,
      placeholder: '',
      required: false,
      order: fields.length,
    });
    setShowAddFieldMenu(false);
  };

  const handleEditField = (field: RegistrationField) => {
    setEditingField(field);
    setIsAddingField(false);
  };

  const handleSaveField = (field: RegistrationField) => {
    if (isAddingField) {
      setFields([...fields, field]);
    } else {
      setFields(fields.map(f => f.id === field.id ? field : f));
    }
    setEditingField(null);
    setIsAddingField(false);
  };

  const handleDeleteField = (id: string) => {
    setFields(fields.filter(f => f.id !== id));
  };

  const sortedFields = [...fields].sort((a, b) => a.order - b.order);

  const content = (
    <div className={isModal ? "bg-white rounded-[32px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] w-full max-w-[900px] max-h-[90vh] flex flex-col" : "w-full flex flex-col"}>
      {/* Header */}
      <div className={`flex items-center justify-between ${isModal ? 'p-8 pb-6 border-b border-[rgba(0,0,0,0.1)]' : 'pb-6 mb-6'}`}>
        <div>
          <h2 className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[24px] text-black tracking-[-0.5px]">
            Registration & Tickets
          </h2>
          <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] mt-1">
            Configure ticket types, pricing, and registration form
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
      <div className={`flex-1 ${isModal ? 'overflow-y-auto p-8 pt-6' : ''}`}>
        {editingTicket ? (
          <TicketForm
            ticket={editingTicket}
            onSave={handleSaveTicket}
            onCancel={() => {
              setEditingTicket(null);
              setIsAddingTicket(false);
            }}
            isNew={isAddingTicket}
          />
        ) : editingField ? (
          <FieldForm
            field={editingField}
            onSave={handleSaveField}
            onCancel={() => {
              setEditingField(null);
              setIsAddingField(false);
            }}
            isNew={isAddingField}
          />
        ) : (
          <div className="space-y-8">
            {/* Registration Settings */}
            <div className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px] p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 text-[rgba(0,0,0,0.6)]">
                  <SettingsIcon />
                </div>
                <h3 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-black">
                  Registration Settings
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {/* Registration Status */}
                <div className="bg-[rgba(77,77,77,0.05)] rounded-[16px] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 text-[rgba(77,77,77,0.6)]">
                      <UserIcon />
                    </div>
                    <p className="font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)]">
                      Registration
                    </p>
                  </div>
                  <select
                    value={settings.isOpen ? 'open' : 'closed'}
                    onChange={(e) => setSettings({ ...settings, isOpen: e.target.value === 'open' })}
                    className="w-full font-['SF_Pro:Medium',sans-serif] text-[15px] text-black bg-white border border-[rgba(0,0,0,0.15)] rounded-lg px-3 py-2 focus:outline-none focus:border-[#4d4d4d] transition-colors"
                  >
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                {/* Event Capacity */}
                <div className="bg-[rgba(77,77,77,0.05)] rounded-[16px] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 text-[rgba(77,77,77,0.6)]">
                      <TicketIcon />
                    </div>
                    <p className="font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)]">
                      Event Capacity
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={settings.eventCapacity === 'unlimited' ? '' : settings.eventCapacity}
                      onChange={(e) => setSettings({
                        ...settings,
                        eventCapacity: e.target.value ? parseInt(e.target.value) : 'unlimited'
                      })}
                      placeholder="Unlimited"
                      min="1"
                      className="flex-1 font-['SF_Pro:Regular',sans-serif] text-[15px] text-black bg-white border border-[rgba(0,0,0,0.15)] rounded-lg px-3 py-2 focus:outline-none focus:border-[#4d4d4d] transition-colors"
                    />
                  </div>
                </div>

                {/* Group Registration */}
                <div className="bg-[rgba(77,77,77,0.05)] rounded-[16px] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 text-[rgba(77,77,77,0.6)]">
                      <GroupIcon />
                    </div>
                    <p className="font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)]">
                      Group Registration
                    </p>
                  </div>
                  <select
                    value={settings.groupRegistrationEnabled ? 'on' : 'off'}
                    onChange={(e) => setSettings({ ...settings, groupRegistrationEnabled: e.target.value === 'on' })}
                    className="w-full font-['SF_Pro:Medium',sans-serif] text-[15px] text-black bg-white border border-[rgba(0,0,0,0.15)] rounded-lg px-3 py-2 focus:outline-none focus:border-[#4d4d4d] transition-colors"
                  >
                    <option value="on">On</option>
                    <option value="off">Off</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tickets Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[20px] text-black tracking-[-0.5px]">
                  Tickets
                </h3>
                <Button
                  variant="tertiary"
                  className="gap-2"
                  onClick={handleAddTicket}
                >
                  <PlusIcon />
                  New Ticket Type
                </Button>
              </div>

              <div className="space-y-3">
                {tickets.length === 0 ? (
                  <div className="text-center py-12 bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px]">
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.4)]">
                      No ticket types yet. Click "New Ticket Type" to add one.
                    </p>
                  </div>
                ) : (
                  tickets.map((ticket) => (
                    <TicketCard
                      key={ticket.id}
                      ticket={ticket}
                      onEdit={() => handleEditTicket(ticket)}
                      onDelete={() => handleDeleteTicket(ticket.id)}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Registration Email Section */}
            <div className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px] p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 text-[rgba(0,0,0,0.6)]">
                  <EmailIcon />
                </div>
                <h3 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-black">
                  Registration Email
                </h3>
              </div>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] mb-4">
                Upon registration, we send guests a confirmation email that includes a calendar invite. You can add a custom message to the email.
              </p>
              <Button
                variant="tertiary"
                className="gap-2"
                onClick={() => setShowEmailCustomization(true)}
              >
                <EmailIcon />
                Customize Email
              </Button>
            </div>

            {/* Registration Questions Section */}
            <div>
              <h3 className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[20px] text-black tracking-[-0.5px] mb-4">
                Registration Questions
              </h3>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] mb-6">
                We will ask guests the following questions when they register for the event.
              </p>

              {/* Personal Information Section */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4 px-2">
                  <div className="w-4 h-4 bg-[rgba(34,197,94,0.15)] rounded flex items-center justify-center">
                    <UserIcon />
                  </div>
                  <h4 className="font-['SF_Pro:Medium',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)]">
                    Personal Information
                  </h4>
                </div>

                <div className="space-y-2 max-w-[500px]">
                  {/* Required Fields - Name, Email, Phone */}
                  <PredeterminedFieldCard
                    icon={<UserIcon />}
                    label="Name"
                    value="Full Name"
                    badge="Required"
                    editable={true}
                  />
                  <PredeterminedFieldCard
                    icon={<EmailIcon />}
                    label="Email"
                    value="Required"
                    badge="Required"
                    editable={false}
                  />
                  <PredeterminedFieldCard
                    icon={<TicketIcon />}
                    label="Phone"
                    value="Off"
                    badge={null}
                    editable={true}
                  />
                </div>
              </div>

              {/* Custom Questions Section */}
              <div>
                <div className="flex items-center gap-2 mb-4 px-2">
                  <div className="w-4 h-4 bg-[rgba(255,159,67,0.15)] rounded flex items-center justify-center">
                    <EditIcon />
                  </div>
                  <h4 className="font-['SF_Pro:Medium',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)]">
                    Custom Questions
                  </h4>
                </div>

                <div className="space-y-2 mb-4 max-w-[600px]">
                  {sortedFields.map((field) => (
                    <CustomFieldCard
                      key={field.id}
                      field={field}
                      onEdit={() => handleEditField(field)}
                      onDelete={() => handleDeleteField(field.id)}
                    />
                  ))}
                </div>

                {/* Add Question Button with Dropdown */}
                <div className="relative">
                  <Button
                    variant="tertiary"
                    className="gap-2"
                    onClick={() => setShowAddFieldMenu(!showAddFieldMenu)}
                  >
                    <PlusIcon />
                    Add Question
                  </Button>

                  {showAddFieldMenu && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-[rgba(0,0,0,0.15)] rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] py-2 z-10 min-w-[200px]">
                      <button
                        onClick={() => handleAddField('text')}
                        className="w-full px-4 py-2 text-left font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)] hover:bg-[rgba(0,0,0,0.05)] transition-colors"
                      >
                        Text Field
                      </button>
                      <button
                        onClick={() => handleAddField('number')}
                        className="w-full px-4 py-2 text-left font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)] hover:bg-[rgba(0,0,0,0.05)] transition-colors"
                      >
                        Number Field
                      </button>
                      <button
                        onClick={() => handleAddField('url')}
                        className="w-full px-4 py-2 text-left font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)] hover:bg-[rgba(0,0,0,0.05)] transition-colors"
                      >
                        URL Field
                      </button>
                      <div className="border-t border-[rgba(0,0,0,0.1)] my-2"></div>
                      <div className="px-4 py-1">
                        <p className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider">
                          Quick Add
                        </p>
                      </div>
                      <button
                        onClick={() => handleAddField('text', 'Company')}
                        className="w-full px-4 py-2 text-left font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)] hover:bg-[rgba(0,0,0,0.05)] transition-colors"
                      >
                        Company
                      </button>
                      <button
                        onClick={() => handleAddField('text', 'Job Title')}
                        className="w-full px-4 py-2 text-left font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)] hover:bg-[rgba(0,0,0,0.05)] transition-colors"
                      >
                        Job Title
                      </button>
                      <button
                        onClick={() => handleAddField('text', 'Dietary Restrictions')}
                        className="w-full px-4 py-2 text-left font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)] hover:bg-[rgba(0,0,0,0.05)] transition-colors"
                      >
                        Dietary Restrictions
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {!editingTicket && !editingField && isModal && (
        <div className="flex items-center justify-end gap-3 p-8 pt-6 border-t border-[rgba(0,0,0,0.1)]">
          <Button variant="tertiary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      )}

      {/* Auto-save indicator */}
      {!editingTicket && !editingField && !isModal && (
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

      {/* Email Customization Modal */}
      {showEmailCustomization && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-[32px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] w-full max-w-[600px] flex flex-col">
            <div className="flex items-center justify-between p-8 pb-6 border-b border-[rgba(0,0,0,0.1)]">
              <div>
                <h2 className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[24px] text-black tracking-[-0.5px]">
                  Customize Email
                </h2>
                <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] mt-1">
                  Add a custom message to your confirmation email
                </p>
              </div>
              <button
                onClick={() => setShowEmailCustomization(false)}
                className="text-[rgba(0,0,0,0.5)] hover:text-black transition-colors p-2"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="p-8 space-y-5">
              <div className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px] p-6">
                <div className="mb-4">
                  <p className="font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                    Email Preview
                  </p>
                  <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-lg p-4 space-y-3">
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)]">
                      Hi {'[Name]'},
                    </p>
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)]">
                      Thank you for registering for {'[Event Name]'}!
                    </p>
                    <div className="bg-[rgba(77,77,77,0.05)] border-l-4 border-[#4d4d4d] pl-4 py-3">
                      <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)] whitespace-pre-wrap">
                        {emailMessage}
                      </p>
                    </div>
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)]">
                      Please find attached a calendar invite for the event.
                    </p>
                    <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)]">
                      See you there!
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                    Custom Message
                  </label>
                  <textarea
                    value={emailMessage}
                    onChange={(e) => setEmailMessage(e.target.value)}
                    placeholder="Add a personal message to your attendees..."
                    rows={4}
                    className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors resize-none"
                  />
                  <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)] mt-2">
                    This message will be included in the confirmation email sent to all attendees.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 p-8 pt-6 border-t border-[rgba(0,0,0,0.1)]">
              <Button
                variant="tertiary"
                onClick={() => setShowEmailCustomization(false)}
              >
                Cancel
              </Button>
              <Button onClick={() => setShowEmailCustomization(false)}>
                Save Message
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Ticket Card Component
function TicketCard({
  ticket,
  onEdit,
  onDelete
}: {
  ticket: TicketType;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const available = ticket.capacity - ticket.registered;
  const percentageRegistered = (ticket.registered / ticket.capacity) * 100;

  return (
    <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[16px] p-4 hover:border-[rgba(0,0,0,0.2)] transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <p className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[16px] text-black">
              {ticket.name}
            </p>
            <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.5)]">
              {ticket.price === 0 ? 'Free' : `$${ticket.price}`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 text-[rgba(0,0,0,0.4)]">
              <UserIcon />
            </div>
            <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.7)]">
              {ticket.registered}/{ticket.capacity}
            </p>
          </div>
          <button
            onClick={onEdit}
            className="p-2 text-[rgba(0,0,0,0.5)] hover:text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors"
          >
            <EditIcon />
          </button>
          <button
            onClick={onDelete}
            className="p-2 text-[rgba(0,0,0,0.5)] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

// Predetermined Field Card Component
function PredeterminedFieldCard({
  icon,
  label,
  value,
  badge,
  editable
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  badge: string | null;
  editable: boolean;
}) {
  return (
    <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[16px] p-4 hover:border-[rgba(0,0,0,0.15)] transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 text-[rgba(0,0,0,0.4)]">
            {icon}
          </div>
          <p className="font-['SF_Pro:Medium',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)]">
            {label}
          </p>
          <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.5)]">
            {value}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {badge && (
            <span className="px-2 py-0.5 bg-[rgba(0,0,0,0.05)] rounded-md font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.6)]">
              {badge}
            </span>
          )}
          {editable && (
            <button className="p-2 text-[rgba(0,0,0,0.3)] hover:text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3L6 6M6 6L3 9M6 6L9 9M6 6L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Custom Field Card Component
function CustomFieldCard({
  field,
  onEdit,
  onDelete
}: {
  field: RegistrationField;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[16px] p-4 hover:border-[rgba(0,0,0,0.15)] transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 text-[rgba(0,0,0,0.3)] cursor-move">
            <DragIcon />
          </div>
          <p className="font-['SF_Pro:Medium',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)]">
            {field.label}
          </p>
          <span className="px-2 py-0.5 bg-[rgba(0,0,0,0.05)] rounded-md font-['SF_Pro:Regular',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] capitalize">
            {field.type}
          </span>
          {field.required && (
            <span className="px-2 py-0.5 bg-[rgba(0,0,0,0.05)] rounded-md font-['SF_Pro:Regular',sans-serif] text-[11px] text-[rgba(0,0,0,0.6)]">
              Required
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onEdit}
            className="p-2 text-[rgba(0,0,0,0.5)] hover:text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors"
          >
            <EditIcon />
          </button>
          <button
            onClick={onDelete}
            className="p-2 text-[rgba(0,0,0,0.5)] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <TrashIcon />
          </button>
        </div>
      </div>
      {field.placeholder && (
        <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.4)] mt-2 ml-9">
          Placeholder: {field.placeholder}
        </p>
      )}
    </div>
  );
}

// Ticket Form Component
function TicketForm({
  ticket,
  onSave,
  onCancel,
  isNew
}: {
  ticket: TicketType;
  onSave: (ticket: TicketType) => void;
  onCancel: () => void;
  isNew: boolean;
}) {
  const [formData, setFormData] = useState<TicketType>(ticket);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    onSave(formData);
  };

  const updateField = (field: keyof TicketType, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px] p-6">
        <h3 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-black mb-5">
          {isNew ? 'Add New Ticket Type' : 'Edit Ticket Type'}
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Ticket Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="e.g., Standard, Early Birds, VIP"
              required
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Price *
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-['SF_Pro:Regular',sans-serif] text-[15px] text-[rgba(0,0,0,0.5)]">
                  $
                </span>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => updateField('price', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  min="0"
                  step="0.01"
                  required
                  className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg pl-8 pr-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
                />
              </div>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] mt-1">
                Enter 0 for free tickets
              </p>
            </div>

            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Capacity *
              </label>
              <input
                type="number"
                value={formData.capacity}
                onChange={(e) => updateField('capacity', parseInt(e.target.value) || 0)}
                placeholder="100"
                min="1"
                required
                className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Sales Start Date
              </label>
              <input
                type="datetime-local"
                value={formData.salesStart || ''}
                onChange={(e) => updateField('salesStart', e.target.value)}
                className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
            </div>

            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Sales End Date
              </label>
              <input
                type="datetime-local"
                value={formData.salesEnd || ''}
                onChange={(e) => updateField('salesEnd', e.target.value)}
                className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="ticket-active"
              checked={formData.isActive}
              onChange={(e) => updateField('isActive', e.target.checked)}
              className="w-4 h-4 rounded border-[rgba(0,0,0,0.3)] text-black focus:ring-0 focus:ring-offset-0"
            />
            <label htmlFor="ticket-active" className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)]">
              Ticket is active and available for purchase
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <Button type="button" variant="tertiary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={!formData.name.trim()}>
          {isNew ? 'Add Ticket' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
}

// Field Form Component
function FieldForm({
  field,
  onSave,
  onCancel,
  isNew
}: {
  field: RegistrationField;
  onSave: (field: RegistrationField) => void;
  onCancel: () => void;
  isNew: boolean;
}) {
  const [formData, setFormData] = useState<RegistrationField>(field);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.label.trim()) return;
    onSave(formData);
  };

  const updateField = (key: keyof RegistrationField, value: string | boolean | FieldType) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px] p-6">
        <h3 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-black mb-5">
          {isNew ? 'Add Custom Question' : 'Edit Custom Question'}
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Question Label *
            </label>
            <input
              type="text"
              value={formData.label}
              onChange={(e) => updateField('label', e.target.value)}
              placeholder="e.g., What company do you work for?"
              required
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
            />
          </div>

          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Field Type
            </label>
            <select
              value={formData.type}
              onChange={(e) => updateField('type', e.target.value as FieldType)}
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors bg-white"
            >
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="url">URL</option>
            </select>
          </div>

          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Placeholder Text
            </label>
            <input
              type="text"
              value={formData.placeholder || ''}
              onChange={(e) => updateField('placeholder', e.target.value)}
              placeholder="e.g., Enter your company name"
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="field-required"
              checked={formData.required}
              onChange={(e) => updateField('required', e.target.checked)}
              className="w-4 h-4 rounded border-[rgba(0,0,0,0.3)] text-black focus:ring-0 focus:ring-offset-0"
            />
            <label htmlFor="field-required" className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)]">
              This field is required
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <Button type="button" variant="tertiary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={!formData.label.trim()}>
          {isNew ? 'Add Question' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
}

