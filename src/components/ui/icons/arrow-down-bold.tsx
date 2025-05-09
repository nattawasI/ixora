const ArrowDownBold = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="9" y="0.5" width="9" height="2" transform="rotate(90 9 0.5)" fill="currentColor" />
      <path d="M8 15.5L3.66987 8.75L12.3301 8.75L8 15.5Z" fill="currentColor" />
    </svg>
  )
}

export { ArrowDownBold }
