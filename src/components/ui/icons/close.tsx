const Close = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M2 2L14 14" stroke="currentColor" />
      <path d="M2 14L14 2" stroke="currentColor" />
    </svg>
  )
}

export { Close }
