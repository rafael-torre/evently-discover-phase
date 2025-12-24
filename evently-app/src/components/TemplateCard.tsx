import Button from './Button';

interface TemplateCardProps {
  title: string;
  description: string;
  imagePlaceholder?: boolean;
  onAction?: () => void;
  actionLabel?: string;
}

export default function TemplateCard({
  title,
  description,
  imagePlaceholder = true,
  onAction,
  actionLabel = 'Create'
}: TemplateCardProps) {
  return (
    <div className="bg-white border border-[#e0e0e0] rounded-[8px] w-full h-[337px] p-[13px] flex flex-col">
      {/* Image Placeholder */}
      {imagePlaceholder && (
        <div className="bg-[#efefef] rounded-[14px] w-full h-[132px] mb-4" />
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="font-['SF_Pro:Medium',sans-serif] leading-[1.1] text-[14px] text-black mb-2">
          {title}
        </h3>
        <p className="font-['SF_Pro:Light',sans-serif] leading-[1.22] text-[12px] text-black mb-4 flex-1">
          {description}
        </p>
      </div>

      {/* Action Button */}
      <div className="flex justify-start">
        <Button onClick={onAction}>
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}

