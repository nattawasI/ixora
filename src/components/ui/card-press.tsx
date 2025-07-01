import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import { ImageMedia, type ImageMediaProps } from '@/components/ui/image-media'
import { Separator } from '@/components/ui/separator'
import { TextSkeleton } from '@/components/ui/text-skeleton'

type CardPressProps = Omit<ComponentProps<'div'>, 'title'> & {
  image: Omit<ImageMediaProps, 'fill'>
  date: string
  title: {
    tag?: 'h2' | 'h3'
    text: string
  }
  description: string
  isImageRight?: boolean
  isInModal?: boolean
}

const CardPress = ({
  image,
  date,
  title,
  description,
  isImageRight,
  isInModal,
  className,
  ...props
}: CardPressProps) => {
  const TitleTag = title.tag ?? 'h2'
  const { src, alt, ...restImageProps } = image

  return (
    <div className={cn('group/card grid md:grid-cols-2', className)} {...props}>
      <div className={cn('card-hover-image relative aspect-[10/7] overflow-hidden', isImageRight ? 'md:order-2' : '')}>
        <ImageMedia src={src} alt={alt} fill className="object-cover object-center" {...restImageProps} />
      </div>
      <div className={cn('flex flex-col bg-white p-5 md:p-10', isImageRight ? 'md:order-1' : '')}>
        <p className="typo-body-2 text-gray">{date}</p>
        <Separator className="mt-2.5 mb-5" />
        <TitleTag
          className={cn(
            'group-hover/card:text-blue line-clamp-3 font-semibold transition-colors duration-300',
            isInModal ? 'typo-title-3' : 'typo-title-2--rps',
          )}
        >
          {title.text}
        </TitleTag>
        <p className="typo-body-2 mt-auto line-clamp-5 pt-2.5 whitespace-pre-line md:line-clamp-3">{description}</p>
      </div>
    </div>
  )
}

const CardPressLoading = ({ isImageRight }: { isImageRight?: boolean }) => {
  return (
    <div className="grid md:grid-cols-2">
      <div className={cn('skeleton mb-2.5 aspect-[10/7]', isImageRight ? 'md:order-2' : '')} />
      <div className={cn('flex flex-col bg-white p-5 md:p-10', isImageRight ? 'md:order-1' : '')}>
        <TextSkeleton variant="typo-body-3" className="w-1/4" />
        <Separator className="mt-2.5 mb-5 animate-pulse" />
        <TextSkeleton variant="typo-title-2--rps" className="w-2/4" />
        <div className="mt-auto max-md:mt-2.5">
          <TextSkeleton variant="typo-body-2" />
          <TextSkeleton variant="typo-body-2" className="w-2/3" />
        </div>
      </div>
    </div>
  )
}

export { CardPress, CardPressLoading, type CardPressProps }
