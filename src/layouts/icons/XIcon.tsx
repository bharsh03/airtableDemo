interface XIconProps {
  size?: number;
  className?: string;
}

const XIcon = ({ size = 21, className = "" }: XIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.751 2H18.318L12.411 8.773L19.333 18H13.944L9.696 12.403L4.845 18H2.277L8.59 10.765L1.967 2H7.489L11.328 7.112L15.751 2ZM14.875 16.48H16.302L6.494 3.46H4.964L14.875 16.48Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default XIcon
