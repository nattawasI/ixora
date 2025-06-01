const Email = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="0.5" y="2.5" width="15" height="11" stroke="currentColor" />
      <path d="M3 5L7.81481 9L13 5" stroke="currentColor" />
    </svg>
  )
}

export { Email }
