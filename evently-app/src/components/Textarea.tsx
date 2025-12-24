interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  rows?: number;
  className?: string;
}

export default function Textarea({
  placeholder = '',
  value = '',
  onChange,
  rows = 4,
  className = ''
}: TextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      rows={rows}
      className={`border border-[rgba(0,0,0,0.15)] rounded-[16px] px-[16px] py-[16px] w-full font-['Rethink_Sans:Regular',sans-serif] font-normal text-[16px] text-black placeholder:text-[rgba(0,0,0,0.5)] focus:outline-none focus:border-[rgba(0,0,0,0.3)] transition-colors resize-none ${className}`}
    />
  );
}

