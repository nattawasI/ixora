const HamburgerMenu = ({ ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg width="31" height="21" viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.8694 5.97491L0.919146 5.97539L0.919145 7.81368L12.8699 7.81367L12.8694 5.97491Z" fill="#89CEE7" />
      <path d="M17.1701 14.0637L29.12 14.0637L29.12 12.2254L17.1701 12.2254L17.1701 14.0637Z" fill="#89CEE7" />
      <path d="M17.1701 5.97514L29.1199 5.97515L29.1199 7.81344L17.1696 7.8139L17.1701 5.97514Z" fill="#009BC9" />
      <path d="M12.8699 14.0639L0.919621 14.0634L0.919619 12.2251L12.8699 12.2256L12.8699 14.0639Z" fill="#009BC9" />
    </svg>
  )
}

export { HamburgerMenu }
