interface SliderDotProps {
  width?: number;
  height?: number;
  className?: string;
}

const SliderDot = ({ width = 50, height = 5, className = "" }: SliderDotProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="50" height="5" rx="2.5" fill="currentColor" />
    </svg>
  );
};

export default SliderDot;
