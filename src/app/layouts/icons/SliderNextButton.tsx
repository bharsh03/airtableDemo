interface SliderNextButtonProps {
  size?: number;
  className?: string;
}

const SliderNextButton = ({ size = 32, className = "" }: SliderNextButtonProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#slider_next_clip0)">
        <path
          d="M18 11L23 16L18 21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M23 16H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="slider_next_clip0">
          <rect width="16" height="12" fill="white" transform="translate(8 10)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SliderNextButton;
