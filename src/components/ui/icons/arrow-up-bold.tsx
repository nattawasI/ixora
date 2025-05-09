const ArrowUpBold = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="7" y="15.5" width="9" height="2" transform="rotate(-90 7 15.5)" fill="currentColor" />
      <path d="M8 0.5L12.3301 7.25L3.66987 7.25L8 0.5Z" fill="currentColor" />
    </svg>
  )
}

export { ArrowUpBold }
