import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import { Copy } from '@/components/ui/icons/copy'

const ButtonCopy = ({
  className,
  label,
  copiedLabel,
  isCopied,
  ...props
}: Omit<ComponentProps<'button'>, 'children'> & { label: string; copiedLabel: string; isCopied?: boolean }) => {
  return (
    <button
      type="button"
      data-copied={isCopied ? true : undefined}
      className={cn(
        'typo-body-3 border-blue inline-flex h-[1.625rem] items-center gap-x-[0.188rem] rounded-full border px-2.5 font-bold uppercase transition-colors duration-300',
        'hover:bg-blue hover:text-white',
        'data-[copied=true]:text-blue data-[copied=true]:bg-transparent',
        className,
      )}
      {...props}
    >
      {!isCopied ? <Copy /> : null}
      <span className="mt-0.5">{isCopied ? copiedLabel : label}</span>
    </button>
  )
}

export { ButtonCopy }
