const ChevronRight = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_537_2719)">
        <path d="M10.2427 7.34302L6.00021 3.10055" stroke="#009BC9" />
        <path d="M6 13L10.2425 8.75753" stroke="#89CEE7" />
      </g>
      <defs>
        <clipPath id="clip0_537_2719">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export { ChevronRight }
