import type { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`w-full max-w-336 mx-auto lg:px-12 md:px-8 px-6 ${className}`.trim()}
    >
      {children}
    </div>
  )
}
