const ChevronRight = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_761_1093)">
        <path d="M10.2432 7.34277L6.0007 3.10031" stroke="currentColor" />
        <path d="M6 13L10.2425 8.75753" stroke="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_761_1093">
          <rect width="16" height="16" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  )
}

export { ChevronRight }
