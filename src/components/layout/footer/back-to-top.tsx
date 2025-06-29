'use client'

const BackToTop = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      aria-label="back to top"
      className="text-gray hover:text-blue flex size-9 items-center justify-center transition-colors duration-300"
      onClick={handleClick}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_220_7953)">
          <path d="M18.3574 14.3931L7.75125 24.9992" stroke="#009BC9" />
          <path d="M32.5 25L21.8938 14.3938" stroke="#89CEE7" />
        </g>
        <defs>
          <clipPath id="clip0_220_7953">
            <rect width="40" height="40" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  )
}

export { BackToTop }
