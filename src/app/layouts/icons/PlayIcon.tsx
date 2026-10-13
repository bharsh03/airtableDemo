interface PlayIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const PlayIcon = ({ width = 14, height = 18, className = "" }: PlayIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g clipPath="url(#play_clip0)">
        <path
          d="M12.946 8.46896L1.70401 1.59396C1.60946 1.53567 1.50109 1.50363 1.39005 1.50113C1.279 1.49864 1.1693 1.52578 1.07223 1.57976C0.975165 1.63375 0.894235 1.71262 0.837775 1.80827C0.781315 1.90392 0.751365 2.01289 0.751007 2.12396V15.874C0.75101 15.9852 0.780702 16.0944 0.837018 16.1904C0.893334 16.2863 0.974232 16.3655 1.07136 16.4197C1.16849 16.4739 1.27833 16.5012 1.38955 16.4988C1.50076 16.4964 1.60932 16.4643 1.70401 16.406L12.946 9.53096C13.0383 9.47638 13.1147 9.3987 13.1678 9.30559C13.2209 9.21248 13.2488 9.10715 13.2488 8.99996C13.2488 8.89278 13.2209 8.78744 13.1678 8.69433C13.1147 8.60122 13.0383 8.52355 12.946 8.46896Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="play_clip0">
          <rect width="14" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlayIcon;
