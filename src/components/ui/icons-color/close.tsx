const Close = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9.20703 7.29297L13.4495 3.0505" stroke="#009BC9" />
      <path d="M3.55029 12.9492L7.79276 8.70675" stroke="#009BC9" />
      <path d="M3.55029 3.0498L7.79276 7.29227" stroke="#89CEE7" />
      <path d="M9.20703 8.70703L13.4495 12.9495" stroke="#89CEE7" />
    </svg>
  )
}

export { Close }
