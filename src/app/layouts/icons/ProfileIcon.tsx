interface ProfileIconProps {
  width?: number
  height?: number
  alt?: string
  className?: string
}

export default function ProfileIcon({ width = 48, height = 48, alt = "", className = "" }: ProfileIconProps) {
  return (
    <img
      src="/icons/profileicon.svg"
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  )
}
