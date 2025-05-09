const Plus = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 1.00012V15" stroke="currentColor" />
      <path d="M1 8L14.9999 8" stroke="currentColor" />
    </svg>
  )
}

export { Plus }
