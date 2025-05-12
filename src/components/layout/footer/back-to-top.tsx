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
      className="text-gray hover:text-blue flex size-9 items-center justify-center"
      onClick={handleClick}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-9 transition-colors duration-300"
      >
        <path d="M31.5 24.75L18 11.25L4.5 24.75" stroke="currentColor" />
      </svg>
    </button>
  )
}

export { BackToTop }
