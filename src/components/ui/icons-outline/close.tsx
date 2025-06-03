const Close = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8.70703 7.29294L12.9495 3.05047" stroke="currentColor" />
      <path d="M3.0498 12.9498L7.29227 8.7073" stroke="currentColor" />
      <path d="M3.0498 3.0502L7.29227 7.29267" stroke="currentColor" />
      <path d="M8.70703 8.70706L12.9495 12.9495" stroke="currentColor" />
    </svg>
  )
}

export { Close }
