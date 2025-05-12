const IconLogo = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M48.7517 42.2014L6.49934 0L0 6.49202L42.2524 48.6968L48.7517 42.2014Z" fill="#89CEE7" />
      <path d="M81.2516 87.6522L123.501 129.854L130 123.362L87.7509 81.1602L81.2516 87.6522Z" fill="#89CEE7" />
      <path d="M81.2516 42.2014L123.501 0L130 6.49202L87.7509 48.6968L81.2516 42.2014Z" fill="#009BC9" />
      <path d="M48.7517 87.6522L6.49934 129.854L0 123.362L42.2524 81.1602L48.7517 87.6522Z" fill="#009BC9" />
    </svg>
  )
}

export { IconLogo }
