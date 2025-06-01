const ChevronLeft = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_537_2735)">
        <path d="M5.75732 8.65698L9.99979 12.8994" stroke="#009BC9" />
        <path d="M10 3L5.75753 7.24247" stroke="#89CEE7" />
      </g>
      <defs>
        <clipPath id="clip0_537_2735">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export { ChevronLeft }
