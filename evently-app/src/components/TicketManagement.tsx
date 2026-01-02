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

const TicketIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 7.5H5C4.30964 7.5 3.75 8.05964 3.75 8.75V11.25C3.75 11.9404 4.30964 12.5 5 12.5H15C15.6904 12.5 16.25 11.9404 16.25 11.25V8.75C16.25 8.05964 15.6904 7.5 15 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5 7.5V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PercentIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6667 3.33337L3.33334 12.6667M5.33334 4.66671C5.33334 5.40304 4.73634 6.00004 4.00001 6.00004C3.26367 6.00004 2.66667 5.40304 2.66667 4.66671C2.66667 3.93037 3.26367 3.33337 4.00001 3.33337C4.73634 3.33337 5.33334 3.93037 5.33334 4.66671ZM13.3333 11.3334C13.3333 12.0697 12.7363 12.6667 12 12.6667C11.2637 12.6667 10.6667 12.0697 10.6667 11.3334C10.6667 10.597 11.2637 10 12 10C12.7363 10 13.3333 10.597 13.3333 11.3334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export interface TicketTier {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  quantity: number;
  quantitySold: number;
  features: string[];
  isActive: boolean;
  salesStartDate?: string;
  salesEndDate?: string;
  order: number;
}

export interface Discount {
  id: string;
  code: string;
  description: string;
  type: 'percentage' | 'fixed';
  value: number;
  maxUses?: number;
  currentUses: number;
  validFrom?: string;
  validUntil?: string;
  applicableTickets: string[]; // ticket tier IDs
  isActive: boolean;
}

interface TicketManagementProps {
  tickets: TicketTier[];
  discounts: Discount[];
  onClose: () => void;
  onSave: (tickets: TicketTier[], discounts: Discount[]) => void;
  isModal?: boolean;
}

export default function TicketManagement({
  tickets: initialTickets,
  discounts: initialDiscounts,
  onClose,
  onSave,
  isModal = true
}: TicketManagementProps) {
  const [tickets, setTickets] = useState<TicketTier[]>(initialTickets);
  const [discounts, setDiscounts] = useState<Discount[]>(initialDiscounts);
  const [activeTab, setActiveTab] = useState<'tickets' | 'discounts'>('tickets');
  const [editingTicket, setEditingTicket] = useState<TicketTier | null>(null);
  const [editingDiscount, setEditingDiscount] = useState<Discount | null>(null);
  const [isAddingNewTicket, setIsAddingNewTicket] = useState(false);
  const [isAddingNewDiscount, setIsAddingNewDiscount] = useState(false);

  // Auto-save in embedded mode
  useEffect(() => {
    if (!isModal) {
      onSave(tickets, discounts);
    }
  }, [tickets, discounts, isModal, onSave]);

  const handleSave = () => {
    onSave(tickets, discounts);
    if (isModal) {
      onClose();
    }
  };

  // Ticket handlers
  const handleDeleteTicket = (id: string) => {
    setTickets(tickets.filter(t => t.id !== id));
  };

  const handleEditTicket = (ticket: TicketTier) => {
    setEditingTicket(ticket);
    setIsAddingNewTicket(false);
  };

  const handleAddNewTicket = () => {
    setIsAddingNewTicket(true);
    setEditingTicket({
      id: `ticket-${Date.now()}`,
      name: '',
      description: '',
      price: 0,
      currency: 'USD',
      quantity: 100,
      quantitySold: 0,
      features: [],
      isActive: true,
      order: tickets.length,
    });
  };

  const handleSaveTicket = (ticket: TicketTier) => {
    if (isAddingNewTicket) {
      setTickets([...tickets, ticket]);
    } else {
      setTickets(tickets.map(t => t.id === ticket.id ? ticket : t));
    }
    setEditingTicket(null);
    setIsAddingNewTicket(false);
  };

  const handleCancelEditTicket = () => {
    setEditingTicket(null);
    setIsAddingNewTicket(false);
  };

  // Discount handlers
  const handleDeleteDiscount = (id: string) => {
    setDiscounts(discounts.filter(d => d.id !== id));
  };

  const handleEditDiscount = (discount: Discount) => {
    setEditingDiscount(discount);
    setIsAddingNewDiscount(false);
  };

  const handleAddNewDiscount = () => {
    setIsAddingNewDiscount(true);
    setEditingDiscount({
      id: `discount-${Date.now()}`,
      code: '',
      description: '',
      type: 'percentage',
      value: 0,
      currentUses: 0,
      applicableTickets: [],
      isActive: true,
    });
  };

  const handleSaveDiscount = (discount: Discount) => {
    if (isAddingNewDiscount) {
      setDiscounts([...discounts, discount]);
    } else {
      setDiscounts(discounts.map(d => d.id === discount.id ? discount : d));
    }
    setEditingDiscount(null);
    setIsAddingNewDiscount(false);
  };

  const handleCancelEditDiscount = () => {
    setEditingDiscount(null);
    setIsAddingNewDiscount(false);
  };

  // Sort tickets by order
  const sortedTickets = [...tickets].sort((a, b) => a.order - b.order);

  const content = (
    <div className={isModal ? "bg-white rounded-[32px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] w-full max-w-[900px] max-h-[90vh] flex flex-col" : "w-full flex flex-col"}>
      {/* Header */}
      <div className={`flex items-center justify-between ${isModal ? 'p-8 pb-6 border-b border-[rgba(0,0,0,0.1)]' : 'pb-6 mb-6'}`}>
        <div>
          <h2 className="font-['Rethink_Sans:SemiBold',sans-serif] font-semibold text-[24px] text-black tracking-[-0.5px]">
            Ticket Management
          </h2>
          <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)] mt-1">
            Configure ticket tiers, pricing, and discount codes
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

      {/* Tabs */}
      {!editingTicket && !editingDiscount && (
        <div className={`flex gap-2 ${isModal ? 'px-8' : ''} border-b border-[rgba(0,0,0,0.1)]`}>
          <button
            onClick={() => setActiveTab('tickets')}
            className={`px-4 py-3 font-['SF_Pro:Medium',sans-serif] text-[14px] transition-colors border-b-2 ${
              activeTab === 'tickets'
                ? 'text-black border-black'
                : 'text-[rgba(0,0,0,0.5)] border-transparent hover:text-[rgba(0,0,0,0.8)]'
            }`}
          >
            Ticket Tiers
          </button>
          <button
            onClick={() => setActiveTab('discounts')}
            className={`px-4 py-3 font-['SF_Pro:Medium',sans-serif] text-[14px] transition-colors border-b-2 ${
              activeTab === 'discounts'
                ? 'text-black border-black'
                : 'text-[rgba(0,0,0,0.5)] border-transparent hover:text-[rgba(0,0,0,0.8)]'
            }`}
          >
            Discount Codes
          </button>
        </div>
      )}

      {/* Content */}
      <div className={`flex-1 ${isModal ? 'overflow-y-auto p-8' : ''}`}>
        {editingTicket ? (
          <TicketForm
            ticket={editingTicket}
            onSave={handleSaveTicket}
            onCancel={handleCancelEditTicket}
            isNew={isAddingNewTicket}
          />
        ) : editingDiscount ? (
          <DiscountForm
            discount={editingDiscount}
            tickets={tickets}
            onSave={handleSaveDiscount}
            onCancel={handleCancelEditDiscount}
            isNew={isAddingNewDiscount}
          />
        ) : activeTab === 'tickets' ? (
          <div className="space-y-4">
            {/* Add New Button */}
            <Button
              variant="tertiary"
              className="w-full justify-center gap-2 mb-6"
              onClick={handleAddNewTicket}
            >
              <PlusIcon />
              Add New Ticket Tier
            </Button>

            {/* Ticket List */}
            {sortedTickets.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 text-[rgba(0,0,0,0.2)]">
                  <TicketIcon />
                </div>
                <p className="font-['SF_Pro:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.4)]">
                  No ticket tiers created yet. Click "Add New Ticket Tier" to get started.
                </p>
              </div>
            ) : (
              sortedTickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onEdit={() => handleEditTicket(ticket)}
                  onDelete={() => handleDeleteTicket(ticket.id)}
                />
              ))
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {/* Add New Button */}
            <Button
              variant="tertiary"
              className="w-full justify-center gap-2 mb-6"
              onClick={handleAddNewDiscount}
            >
              <PlusIcon />
              Add New Discount Code
            </Button>

            {/* Discount List */}
            {discounts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 text-[rgba(0,0,0,0.2)]">
                  <PercentIcon />
                </div>
                <p className="font-['SF_Pro:Regular',sans-serif] text-[16px] text-[rgba(0,0,0,0.4)]">
                  No discount codes created yet. Click "Add New Discount Code" to get started.
                </p>
              </div>
            ) : (
              discounts.map((discount) => (
                <DiscountCard
                  key={discount.id}
                  discount={discount}
                  tickets={tickets}
                  onEdit={() => handleEditDiscount(discount)}
                  onDelete={() => handleDeleteDiscount(discount.id)}
                />
              ))
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      {!editingTicket && !editingDiscount && isModal && (
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
      {!editingTicket && !editingDiscount && !isModal && (
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

// Ticket Card Component
function TicketCard({
  ticket,
  onEdit,
  onDelete
}: {
  ticket: TicketTier;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const availableTickets = ticket.quantity - ticket.quantitySold;
  const percentageSold = (ticket.quantitySold / ticket.quantity) * 100;

  return (
    <div className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px] p-5 hover:border-[rgba(0,0,0,0.15)] transition-colors">
      <div className="flex gap-4">
        {/* Ticket Icon */}
        <div className="bg-[rgba(77,77,77,0.08)] rounded-[16px] w-[80px] h-[80px] flex-shrink-0 flex items-center justify-center text-[rgba(77,77,77,0.6)]">
          <TicketIcon />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-black">
                  {ticket.name}
                </h3>
                {!ticket.isActive && (
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-[rgba(0,0,0,0.1)] rounded-full">
                    <span className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider">
                      Inactive
                    </span>
                  </div>
                )}
              </div>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)]">
                {ticket.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={onEdit}
                className="p-2 text-[rgba(0,0,0,0.5)] hover:text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors"
                title="Edit ticket"
              >
                <EditIcon />
              </button>
              <button
                onClick={onDelete}
                className="p-2 text-[rgba(0,0,0,0.5)] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete ticket"
              >
                <TrashIcon />
              </button>
            </div>
          </div>

          {/* Price & Availability */}
          <div className="grid grid-cols-3 gap-3 mt-3 pt-3 border-t border-[rgba(0,0,0,0.08)]">
            <div>
              <p className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider mb-1">
                Price
              </p>
              <p className="font-['Rethink_Sans:SemiBold',sans-serif] text-[18px] text-[rgba(0,0,0,0.8)]">
                ${ticket.price}
              </p>
            </div>
            <div>
              <p className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider mb-1">
                Sold
              </p>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.8)]">
                {ticket.quantitySold} / {ticket.quantity}
              </p>
            </div>
            <div>
              <p className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider mb-1">
                Available
              </p>
              <p className={`font-['SF_Pro:Regular',sans-serif] text-[13px] ${
                availableTickets < 10 ? 'text-red-600' : 'text-[rgba(0,0,0,0.8)]'
              }`}>
                {availableTickets} left
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-3">
            <div className="w-full h-2 bg-[rgba(0,0,0,0.08)] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#4d4d4d] transition-all"
                style={{ width: `${percentageSold}%` }}
              />
            </div>
            <p className="font-['SF_Pro:Regular',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] mt-1">
              {percentageSold.toFixed(0)}% sold
            </p>
          </div>

          {/* Features */}
          {ticket.features.length > 0 && (
            <div className="mt-3 pt-3 border-t border-[rgba(0,0,0,0.08)]">
              <p className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider mb-2">
                Includes
              </p>
              <div className="flex flex-wrap gap-2">
                {ticket.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <div className="w-3 h-3 text-[rgba(0,0,0,0.6)]">
                      <CheckIcon />
                    </div>
                    <span className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.7)]">
                      {feature}
                    </span>
                  </div>
                ))}
                {ticket.features.length > 3 && (
                  <span className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)]">
                    +{ticket.features.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
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
  ticket: TicketTier;
  onSave: (ticket: TicketTier) => void;
  onCancel: () => void;
  isNew: boolean;
}) {
  const [formData, setFormData] = useState<TicketTier>(ticket);
  const [featureInput, setFeatureInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.price < 0) return;
    onSave(formData);
  };

  const updateField = (field: keyof TicketTier, value: string | number | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addFeature = () => {
    if (featureInput.trim() && !formData.features.includes(featureInput.trim())) {
      updateField('features', [...formData.features, featureInput.trim()]);
      setFeatureInput('');
    }
  };

  const removeFeature = (featureToRemove: string) => {
    updateField('features', formData.features.filter(f => f !== featureToRemove));
  };

  const handleFeatureInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addFeature();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px] p-6">
        <h3 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-black mb-5">
          {isNew ? 'Add New Ticket Tier' : 'Edit Ticket Tier'}
        </h3>

        {/* Basic Info */}
        <div className="space-y-4">
          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Ticket Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="e.g., General Admission, VIP Pass, Early Bird"
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
              placeholder="Brief description of what this ticket includes..."
              rows={2}
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors resize-none"
            />
          </div>

          {/* Pricing */}
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
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  required
                  className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg pl-8 pr-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Total Quantity *
              </label>
              <input
                type="number"
                value={formData.quantity}
                onChange={(e) => updateField('quantity', parseInt(e.target.value) || 0)}
                placeholder="100"
                min="1"
                required
                className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
            </div>
          </div>

          {/* Active Toggle */}
          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="active"
              checked={formData.isActive}
              onChange={(e) => updateField('isActive', e.target.checked)}
              className="w-4 h-4 rounded border-[rgba(0,0,0,0.3)] text-black focus:ring-0 focus:ring-offset-0"
            />
            <label htmlFor="active" className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)]">
              Ticket is active and available for purchase
            </label>
          </div>
        </div>

        {/* Features */}
        <div className="mt-6 pt-6 border-t border-[rgba(0,0,0,0.1)]">
          <h4 className="font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] uppercase tracking-wider mb-4">
            Ticket Features
          </h4>

          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Add Features
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                onKeyDown={handleFeatureInputKeyDown}
                placeholder="e.g., Event access, Gift bag, VIP seating"
                className="flex-1 font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
              <Button type="button" variant="tertiary" onClick={addFeature}>
                <PlusIcon />
              </Button>
            </div>
            {formData.features.length > 0 && (
              <div className="space-y-2">
                {formData.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 bg-[rgba(0,0,0,0.04)] rounded-lg"
                  >
                    <div className="w-4 h-4 text-[rgba(0,0,0,0.6)]">
                      <CheckIcon />
                    </div>
                    <span className="flex-1 font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)]">
                      {feature}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFeature(feature)}
                      className="text-[rgba(0,0,0,0.4)] hover:text-red-600 transition-colors"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sales Period (Optional) */}
        <div className="mt-6 pt-6 border-t border-[rgba(0,0,0,0.1)]">
          <h4 className="font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] uppercase tracking-wider mb-4">
            Sales Period (Optional)
          </h4>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Sales Start Date
              </label>
              <input
                type="datetime-local"
                value={formData.salesStartDate || ''}
                onChange={(e) => updateField('salesStartDate', e.target.value)}
                className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
            </div>

            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Sales End Date
              </label>
              <input
                type="datetime-local"
                value={formData.salesEndDate || ''}
                onChange={(e) => updateField('salesEndDate', e.target.value)}
                className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex items-center justify-end gap-3">
        <Button type="button" variant="tertiary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={!formData.name.trim() || formData.price < 0}>
          {isNew ? 'Add Ticket Tier' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
}

// Discount Card Component
function DiscountCard({
  discount,
  tickets,
  onEdit,
  onDelete
}: {
  discount: Discount;
  tickets: TicketTier[];
  onEdit: () => void;
  onDelete: () => void;
}) {
  const usagePercentage = discount.maxUses ? (discount.currentUses / discount.maxUses) * 100 : 0;
  const applicableTicketNames = tickets
    .filter(t => discount.applicableTickets.includes(t.id))
    .map(t => t.name);

  return (
    <div className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px] p-5 hover:border-[rgba(0,0,0,0.15)] transition-colors">
      <div className="flex gap-4">
        {/* Discount Icon */}
        <div className="bg-[rgba(255,193,7,0.15)] rounded-[16px] w-[80px] h-[80px] flex-shrink-0 flex items-center justify-center text-[rgba(255,193,7,1)]">
          <PercentIcon />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-black">
                  {discount.code}
                </h3>
                {!discount.isActive && (
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-[rgba(0,0,0,0.1)] rounded-full">
                    <span className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider">
                      Inactive
                    </span>
                  </div>
                )}
              </div>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.6)]">
                {discount.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={onEdit}
                className="p-2 text-[rgba(0,0,0,0.5)] hover:text-black hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors"
                title="Edit discount"
              >
                <EditIcon />
              </button>
              <button
                onClick={onDelete}
                className="p-2 text-[rgba(0,0,0,0.5)] hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete discount"
              >
                <TrashIcon />
              </button>
            </div>
          </div>

          {/* Discount Value & Usage */}
          <div className="grid grid-cols-3 gap-3 mt-3 pt-3 border-t border-[rgba(0,0,0,0.08)]">
            <div>
              <p className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider mb-1">
                Discount
              </p>
              <p className="font-['Rethink_Sans:SemiBold',sans-serif] text-[18px] text-[rgba(0,0,0,0.8)]">
                {discount.type === 'percentage' ? `${discount.value}%` : `$${discount.value}`}
              </p>
            </div>
            <div>
              <p className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider mb-1">
                Uses
              </p>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.8)]">
                {discount.currentUses} {discount.maxUses ? `/ ${discount.maxUses}` : ''}
              </p>
            </div>
            <div>
              <p className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider mb-1">
                Type
              </p>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[13px] text-[rgba(0,0,0,0.8)] capitalize">
                {discount.type}
              </p>
            </div>
          </div>

          {/* Usage Progress */}
          {discount.maxUses && (
            <div className="mt-3">
              <div className="w-full h-2 bg-[rgba(0,0,0,0.08)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[rgba(255,193,7,1)] transition-all"
                  style={{ width: `${usagePercentage}%` }}
                />
              </div>
              <p className="font-['SF_Pro:Regular',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] mt-1">
                {usagePercentage.toFixed(0)}% used
              </p>
            </div>
          )}

          {/* Applicable Tickets */}
          {applicableTicketNames.length > 0 && (
            <div className="mt-3 pt-3 border-t border-[rgba(0,0,0,0.08)]">
              <p className="font-['SF_Pro:Medium',sans-serif] text-[11px] text-[rgba(0,0,0,0.5)] uppercase tracking-wider mb-2">
                Applicable to
              </p>
              <div className="flex flex-wrap gap-2">
                {applicableTicketNames.map((name, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-[rgba(0,0,0,0.06)] rounded-md font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.7)]"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Discount Form Component
function DiscountForm({
  discount,
  tickets,
  onSave,
  onCancel,
  isNew
}: {
  discount: Discount;
  tickets: TicketTier[];
  onSave: (discount: Discount) => void;
  onCancel: () => void;
  isNew: boolean;
}) {
  const [formData, setFormData] = useState<Discount>(discount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.code.trim() || formData.value <= 0) return;
    onSave(formData);
  };

  const updateField = (field: keyof Discount, value: string | number | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleTicket = (ticketId: string) => {
    const newApplicableTickets = formData.applicableTickets.includes(ticketId)
      ? formData.applicableTickets.filter(id => id !== ticketId)
      : [...formData.applicableTickets, ticketId];
    updateField('applicableTickets', newApplicableTickets);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.08)] rounded-[20px] p-6">
        <h3 className="font-['Rethink_Sans:Medium',sans-serif] font-medium text-[18px] text-black mb-5">
          {isNew ? 'Add New Discount Code' : 'Edit Discount Code'}
        </h3>

        {/* Basic Info */}
        <div className="space-y-4">
          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Discount Code *
            </label>
            <input
              type="text"
              value={formData.code}
              onChange={(e) => updateField('code', e.target.value.toUpperCase())}
              placeholder="e.g., EARLYBIRD, SAVE20"
              required
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors uppercase"
            />
          </div>

          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Description
            </label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => updateField('description', e.target.value)}
              placeholder="e.g., Early bird special - 20% off"
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
            />
          </div>

          {/* Discount Type & Value */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Discount Type *
              </label>
              <select
                value={formData.type}
                onChange={(e) => updateField('type', e.target.value as 'percentage' | 'fixed')}
                className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors bg-white"
              >
                <option value="percentage">Percentage (%)</option>
                <option value="fixed">Fixed Amount ($)</option>
              </select>
            </div>

            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Discount Value *
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-['SF_Pro:Regular',sans-serif] text-[15px] text-[rgba(0,0,0,0.5)]">
                  {formData.type === 'percentage' ? '%' : '$'}
                </span>
                <input
                  type="number"
                  value={formData.value}
                  onChange={(e) => updateField('value', parseFloat(e.target.value) || 0)}
                  placeholder="0"
                  min="0"
                  max={formData.type === 'percentage' ? 100 : undefined}
                  step={formData.type === 'percentage' ? 1 : 0.01}
                  required
                  className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg pl-8 pr-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Max Uses */}
          <div>
            <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
              Maximum Uses (Optional)
            </label>
            <input
              type="number"
              value={formData.maxUses || ''}
              onChange={(e) => updateField('maxUses', e.target.value ? parseInt(e.target.value) : undefined)}
              placeholder="Unlimited"
              min="1"
              className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
            />
            <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)] mt-1">
              Leave empty for unlimited uses
            </p>
          </div>

          {/* Active Toggle */}
          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="discount-active"
              checked={formData.isActive}
              onChange={(e) => updateField('isActive', e.target.checked)}
              className="w-4 h-4 rounded border-[rgba(0,0,0,0.3)] text-black focus:ring-0 focus:ring-offset-0"
            />
            <label htmlFor="discount-active" className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)]">
              Discount code is active
            </label>
          </div>
        </div>

        {/* Validity Period */}
        <div className="mt-6 pt-6 border-t border-[rgba(0,0,0,0.1)]">
          <h4 className="font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] uppercase tracking-wider mb-4">
            Validity Period (Optional)
          </h4>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Valid From
              </label>
              <input
                type="datetime-local"
                value={formData.validFrom || ''}
                onChange={(e) => updateField('validFrom', e.target.value)}
                className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
            </div>

            <div>
              <label className="block font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] mb-2">
                Valid Until
              </label>
              <input
                type="datetime-local"
                value={formData.validUntil || ''}
                onChange={(e) => updateField('validUntil', e.target.value)}
                className="w-full font-['SF_Pro:Regular',sans-serif] text-[15px] text-black border border-[rgba(0,0,0,0.15)] rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#4d4d4d] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Applicable Tickets */}
        <div className="mt-6 pt-6 border-t border-[rgba(0,0,0,0.1)]">
          <h4 className="font-['SF_Pro:Medium',sans-serif] text-[13px] text-[rgba(0,0,0,0.7)] uppercase tracking-wider mb-4">
            Applicable Ticket Tiers
          </h4>

          {tickets.length === 0 ? (
            <p className="font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.5)]">
              No ticket tiers available. Create ticket tiers first.
            </p>
          ) : (
            <div className="space-y-2">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="flex items-center gap-3 p-3 bg-[rgba(0,0,0,0.04)] rounded-lg hover:bg-[rgba(0,0,0,0.06)] transition-colors"
                >
                  <input
                    type="checkbox"
                    id={`ticket-${ticket.id}`}
                    checked={formData.applicableTickets.includes(ticket.id)}
                    onChange={() => toggleTicket(ticket.id)}
                    className="w-4 h-4 rounded border-[rgba(0,0,0,0.3)] text-black focus:ring-0 focus:ring-offset-0"
                  />
                  <label
                    htmlFor={`ticket-${ticket.id}`}
                    className="flex-1 font-['SF_Pro:Regular',sans-serif] text-[14px] text-[rgba(0,0,0,0.8)] cursor-pointer"
                  >
                    {ticket.name} - ${ticket.price}
                  </label>
                </div>
              ))}
            </div>
          )}
          <p className="font-['SF_Pro:Regular',sans-serif] text-[12px] text-[rgba(0,0,0,0.5)] mt-3">
            Leave all unchecked to apply to all ticket types
          </p>
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex items-center justify-end gap-3">
        <Button type="button" variant="tertiary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={!formData.code.trim() || formData.value <= 0}>
          {isNew ? 'Add Discount Code' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
}


