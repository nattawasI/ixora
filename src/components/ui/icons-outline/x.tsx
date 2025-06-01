const X = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.061 1H14.2069L9.49517 6.94096L15 15H10.6801L7.2979 10.1026L3.42586 15H1.27991L6.27158 8.64576L1 1H5.42719L8.48284 5.4738L12.061 1ZM11.3099 13.6052H12.4995L4.80207 2.34317H3.52383L11.3099 13.6052Z"
        fill="currentColor"
      />
    </svg>
  )
}

export { X }
