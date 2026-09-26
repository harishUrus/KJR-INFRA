type Props = {
  className?: string
}

export function Logo({ className = '' }: Props) {
  return (
    <img
      src="/logo.jpeg"
      alt="KJR Infra — Building Better Tomorrow"
      className={`h-10 w-auto sm:h-12 ${className}`}
    />
  )
}
