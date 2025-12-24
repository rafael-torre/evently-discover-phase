
interface EmptyStateProps {
  message?: string;
  icon?: string;
}

export default function EmptyState({
  message = "No fun events created yet...",
  icon = ":'("
}: EmptyStateProps) {
  return (
    <div className="bg-[#efefef] rounded-[14px] p-8 flex flex-col items-center justify-center h-[183px]">
      <p className="font-['SF_Pro:Medium',sans-serif] leading-[1.1] text-[24.471px] text-black mb-4">
        {icon}
      </p>
      <p className="font-['SF_Pro:Medium',sans-serif] leading-[1.1] text-[16px] text-black">
        {message}
      </p>
    </div>
  );
}

