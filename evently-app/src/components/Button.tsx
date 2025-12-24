import React from 'react';

interface ButtonProps {
  readonly children: React.ReactNode;
  readonly onClick?: () => void;
  readonly variant?: 'primary' | 'secondary' | 'tertiary';
  readonly className?: string;
  readonly disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false
}: Readonly<ButtonProps>) {
  const baseStyles = "flex h-[32px] items-center justify-center px-[16px] py-[4px] rounded-[20px] font-['SF_Pro:Medium',sans-serif] text-[14px] leading-[1.1] not-italic transition-all";

  const variantStyles = {
    primary: "bg-[#4d4d4d] text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0.5px_1px_0px_rgba(0,0,0,0.02)] hover:opacity-90",
    secondary: "bg-gray-200 text-gray-800 hover:opacity-90",
    tertiary: "border border-[rgba(0,0,0,0.15)] bg-transparent text-[rgba(0,0,0,0.8)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0.5px_1px_0px_rgba(0,0,0,0.02)] hover:bg-gray-50"
  };

  const disabledStyles = "opacity-50 cursor-not-allowed hover:opacity-50";

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles : 'cursor-pointer'} ${className}`}
    >
      {children}
    </button>
  );
}

