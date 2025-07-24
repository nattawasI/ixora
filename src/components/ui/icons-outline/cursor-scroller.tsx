const CursorScroller = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M36 10L32.25 13.4641L32.25 6.5359L36 10Z" fill="white" />
      <path d="M-1.74846e-07 10L3.75 6.5359L3.75 13.4641L-1.74846e-07 10Z" fill="white" />
      <circle cx="18" cy="10" r="9.25" stroke="white" strokeWidth="1.5" />
      <path
        d="M17.0001 8.59994L14.4 6L14 6.39996L16.6001 9.0001L17.0001 8.59994Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
      <path
        d="M19 11.4001L21.5999 14L21.9999 13.6001L19.4 11.0001L19 11.4001Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
      <path
        d="M19 8.59994L21.5999 6L21.9999 6.39996L19.4 9.0001L19 8.59994Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
      <path
        d="M17.0001 11.4001L14.4 14L14 13.6001L16.6001 11.0001L17.0001 11.4001Z"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </svg>
  )
}

export { CursorScroller }
