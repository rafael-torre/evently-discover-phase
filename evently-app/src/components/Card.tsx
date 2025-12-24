import Button from './Button';

interface CardProps {
  title: string;
  onAction?: () => void;
  actionLabel?: string;
}

export default function Card({ title, onAction, actionLabel = 'Create' }: CardProps) {
  return (
    <div className="bg-[#efefef] rounded-[14px] p-6 flex flex-col justify-between h-[132px] min-w-[300px] flex-1">
      <p className="font-['SF_Pro:Medium',sans-serif] leading-[1.1] text-[14px] text-black">
        {title}
      </p>
      <div className="flex justify-end">
        <Button onClick={onAction}>
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}

