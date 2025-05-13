const Filter = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13.5 4L2.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 8L5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9.5 12L6.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export { Filter }
