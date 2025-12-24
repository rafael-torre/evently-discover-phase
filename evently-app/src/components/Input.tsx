interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number';
  className?: string;
}

export default function Input({
  placeholder = '',
  value = '',
  onChange,
  type = 'text',
  className = ''
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={`border border-[rgba(0,0,0,0.15)] rounded-[16px] px-[16px] h-[46px] w-full font-['Rethink_Sans:Regular',sans-serif] font-normal text-[16px] text-black placeholder:text-[rgba(0,0,0,0.5)] focus:outline-none focus:border-[rgba(0,0,0,0.3)] transition-colors ${className}`}
    />
  );
}

