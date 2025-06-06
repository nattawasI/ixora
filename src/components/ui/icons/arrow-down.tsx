const ArrowDown = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.64644 14.1036C7.84171 14.2988 8.15829 14.2988 8.35355 14.1036L11.5355 10.9216C11.7308 10.7263 11.7308 10.4097 11.5355 10.2145C11.3403 10.0192 11.0237 10.0192 10.8284 10.2145L8 13.0429L5.17157 10.2145C4.97631 10.0192 4.65973 10.0192 4.46446 10.2145C4.2692 10.4097 4.2692 10.7263 4.46446 10.9216L7.64644 14.1036ZM8.5 13.75L8.5 1.75L7.5 1.75L7.5 13.75L8.5 13.75Z"
        fill="currentColor"
      />
    </svg>
  )
}

export { ArrowDown }
