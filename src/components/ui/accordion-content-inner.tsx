'use client'

import { useRef, useEffect } from 'react'

const AccordionContentInner = ({ open, ...props }: React.ComponentProps<'div'> & { open?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const focusableElements = ref.current?.querySelectorAll('button, [href]')

    if (open) {
      focusableElements?.forEach((element) => {
        element.removeAttribute('tabindex')
      })
    } else {
      focusableElements?.forEach((element) => {
        element.setAttribute('tabindex', '-1')
      })
    }
  }, [open])

  return <div ref={ref} {...props} />
}

export { AccordionContentInner }
