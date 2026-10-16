interface IntegrationIconProps {
  width?: number
  height?: number
  alt?: string
}

export default function IntegrationIcon({ width = 36, height = 36, alt = "" }: IntegrationIconProps) {
  return (
    <img
      src="/icons/image_88.svg"
      width={width}
      height={height}
      alt={alt}
    />
  )
}
