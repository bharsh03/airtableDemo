interface HamburgerIconProps {
  size?: number;
  className?: string;
}

const HamburgerIcon = ({ size = 22, className = "" }: HamburgerIconProps) => {
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
        d="M2 5H20M2 11H20M2 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HamburgerIcon;
