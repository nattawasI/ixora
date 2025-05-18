import { cn } from '@/libs/utils/cn'
import { IconLogo } from '@/components/ui/icons-color/icon-logo'

const ExploreMoreSection = ({
  isInModal,
  className,
  children,
  ...props
}: React.ComponentProps<'section'> & {
  isInModal?: boolean
}) => {
  return (
    <section className={cn(isInModal ? 'bg-gray-light-2 px-12.5 pb-10' : '', className)} {...props}>
      <h2 className="typo-title-3 flex items-center gap-x-2.5 font-bold uppercase">
        <IconLogo />
        EXPLORE MORE
      </h2>
      {children}
    </section>
  )
}

export { ExploreMoreSection }
