import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import { Copy } from '@/components/ui/icons/copy'

const ButtonCopy = ({
  className,
  isCopied,
  ...props
}: Omit<ComponentProps<'button'>, 'children'> & { isCopied?: boolean }) => {
  return (
    <button
      type="button"
      data-copied={isCopied ? true : undefined}
      className={cn(
        'typo-body-3 border-blue inline-flex h-[1.625rem] items-center gap-x-[0.188rem] rounded-full border px-2.5 font-bold text-white uppercase transition-colors duration-300',
        'hover:bg-blue hover:text-white',
        'data-[copied=true]:bg-transparent',
        className,
      )}
      {...props}
    >
      {!isCopied ? <Copy /> : null}
      <span className="mt-0.5">{isCopied ? 'Copied!' : 'Copy'}</span>
    </button>
  )
}

export { ButtonCopy }
