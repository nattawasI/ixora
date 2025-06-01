const ChevronDown = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8.65698 10.2427L12.8995 6.00021" stroke="#009BC9" />
      <path d="M3 6L7.24247 10.2425" stroke="#89CEE7" />
    </svg>
  )
}

export { ChevronDown }
