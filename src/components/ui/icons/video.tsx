const Video = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15 8L4.5 14.0622L4.5 1.93782L15 8Z" fill="currentColor" />
    </svg>
  )
}

export { Video }
