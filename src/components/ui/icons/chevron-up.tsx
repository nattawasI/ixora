const ChevronUp = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M14 11L8 5L2 11" stroke="currentColor" />
    </svg>
  )
}

export { ChevronUp }
