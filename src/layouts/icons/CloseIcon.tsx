interface CloseIconProps {
  size?: number;
  className?: string;
}

const CloseIcon = ({ size = 22, className = "" }: CloseIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M17 5L5 17M5 5L17 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CloseIcon;
