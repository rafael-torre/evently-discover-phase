import React from 'react';

interface ButtonProps {
  readonly children: React.ReactNode;
  readonly onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  readonly variant?: 'primary' | 'secondary' | 'tertiary';
  readonly size?: 'small' | 'medium';
  readonly className?: string;
  readonly disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false
}: Readonly<ButtonProps>) {
  const sizeStyles = {
    small: "h-[28px] px-[12px] py-[2px] text-[13px]",
    medium: "h-[32px] px-[16px] py-[4px] text-[14px]"
  };

  const baseStyles = `flex items-center justify-center rounded-[20px] font-['SF_Pro:Medium',sans-serif] leading-[1.1] not-italic transition-all ${sizeStyles[size]}`;

  const variantStyles = {
    primary: "bg-[#4d4d4d] text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0.5px_1px_0px_rgba(0,0,0,0.02)] hover:opacity-90",
    secondary: "bg-gray-200 text-gray-800 hover:opacity-90",
    tertiary: "border border-[rgba(0,0,0,0.15)] bg-transparent text-[rgba(0,0,0,0.8)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05),0px_0.5px_1px_0px_rgba(0,0,0,0.02)] hover:bg-gray-50"
  };

  const disabledStyles = "opacity-50 cursor-not-allowed hover:opacity-50";

  return (
    <button
      onClick={disabled ? undefined : (e) => onClick?.(e)}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles : 'cursor-pointer'} ${className}`}
    >
      {children}
    </button>
  );
}

