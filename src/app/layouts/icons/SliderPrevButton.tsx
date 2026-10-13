interface SliderPrevButtonProps {
  size?: number;
  className?: string;
}

const SliderPrevButton = ({ size = 32, className = "" }: SliderPrevButtonProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#slider_prev_clip0)">
        <path
          d="M14 21L9 16L14 11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 16H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="slider_prev_clip0">
          <rect width="16" height="12" fill="white" transform="translate(8 10)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SliderPrevButton;
