const ChevronLeft = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_761_2150)">
        <path d="M5.75684 8.65723L9.9993 12.8997" stroke="currentColor" />
        <path d="M10 3L5.75753 7.24247" stroke="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_761_2150">
          <rect width="16" height="16" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  )
}

export { ChevronLeft }
