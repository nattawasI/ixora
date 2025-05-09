const ArrowRightBold = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="0.5" y="7" width="9" height="2" fill="currentColor" />
      <path d="M15.5 8L8.75 12.3301L8.75 3.66987L15.5 8Z" fill="currentColor" />
    </svg>
  )
}

export { ArrowRightBold }
