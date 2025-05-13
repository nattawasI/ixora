import { cn } from '@/libs/utils/cn'
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogClose,
  type DialogTitleProps,
  type DialogContentProps,
} from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const DrawerContent = ({
  className,
  children,
  side = 'left',
  ...props
}: DialogContentProps & { side?: 'left' | 'right' }) => {
  return (
    <DialogPortal>
      <DialogOverlay
        className={cn(
          'fixed inset-0 z-20 bg-black/25',
          'data-[state=closed]:animate-out data-[state=open]:animate-in',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        )}
      />
      <DialogContent
        aria-describedby={undefined}
        className={cn(
          'fixed top-0 left-0 z-20 h-full w-[10rem] bg-white p-4 duration-300 md:w-[14.188rem] lg:p-10',
          'data-[state=closed]:animate-out data-[state=open]:animate-in',
          side === 'left' ? 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left' : '',
          side === 'right' ? 'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right' : '',
          className,
        )}
        {...props}
      >
        {children}
      </DialogContent>
    </DialogPortal>
  )
}

const DrawerTitle = ({ ...props }: DialogTitleProps) => {
  return (
    <VisuallyHidden>
      <DialogTitle {...props} />
    </VisuallyHidden>
  )
}

export { Dialog as Drawer, DialogTrigger as DrawerTrigger, DrawerContent, DrawerTitle, DialogClose as DrawerClose }
