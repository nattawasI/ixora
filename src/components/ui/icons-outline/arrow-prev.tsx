const ArrowPrev = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="15.5" y="9" width="9" height="2" transform="rotate(180 15.5 9)" fill="currentColor" />
      <path d="M0.5 8L7.25 3.66987L7.25 12.3301L0.5 8Z" fill="currentColor" />
    </svg>
  )
}

export { ArrowPrev }
