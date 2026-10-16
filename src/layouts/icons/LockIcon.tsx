interface LockIconProps {
  widht?: number;
  height?: number;
  className?: string;
}

const LockIcon = ({
  widht = 24,
  height = 12,
  className = "",
}: LockIconProps) => {
  return (
    <svg
      width={widht}
      height={height}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 9.75C6.41419 9.75 6.75 9.41419 6.75 9C6.75 8.58581 6.41419 8.25 6 8.25C5.58581 8.25 5.25 8.58581 5.25 9C5.25 9.41419 5.58581 9.75 6 9.75ZM6 0C4.48714 0 3.25 1.23714 3.25 2.75V4.5H1C0.45364 4.5 0 4.95364 0 5.5V12.5C0 13.0464 0.45364 13.5 1 13.5H11C11.5464 13.5 12 13.0464 12 12.5V5.5C12 4.95364 11.5464 4.5 11 4.5H8.75V2.75C8.75 1.23714 7.51286 0 6 0ZM6 1C6.97242 1 7.75 1.77758 7.75 2.75V4.5H4.25V2.75C4.25 1.77758 5.02758 1 6 1ZM1 5.5H11V12.5H1V5.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LockIcon;
