import type { ReactNode } from "react"

type ButtonVariant = "filled" | "dark" | "outline" | "ghost"

interface ButtonProps {
  variant?: ButtonVariant
  href?: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

const variantClasses: Record<ButtonVariant, string> = {
  filled:  "bg-primary-300 text-white rounded-lg hover:bg-primary-900",
  dark:    "bg-secondary-800 text-white rounded-lg hover:bg-primary-900",
  outline: "border-0 border-transparent text-secondary-800 bg-white rounded-lg hover:bg-neutral-50 btn-outline-shadow",
  ghost:   "text-secondary-800 hover:text-primary-300",
}

export default function Button({
  variant = "filled",
  href,
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const classes =
    `inline-flex items-center justify-center font-medium transition-colors ${variantClasses[variant]} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
