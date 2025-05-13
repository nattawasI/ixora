import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import Link, { type LinkProps } from 'next/link'
import Image, { type ImageProps } from 'next/image'
import { Separator } from '@/components/ui/separator'
import { TextSkeleton } from '@/components/ui/text-skeleton'

type CardPressProps = Omit<ComponentProps<'div'>, 'title'> & {
  link: LinkProps
  image: Omit<ImageProps, 'fill'>
  date: string
  title: {
    tag?: 'h2' | 'h3'
    text: string
  }
  description: string
  isImageRight?: boolean
}

const CardPress = ({ className, link, image, date, title, description, isImageRight, ...props }: CardPressProps) => {
  const TitleTag = title.tag ?? 'h2'
  const { src, alt, ...restImageProps } = image

  return (
    <div className={cn('relative', className)} {...props}>
      <Link className="group/card grid lg:grid-cols-2" {...link}>
        <div
          className={cn(
            'bg-gray-light-1 card-hover-image relative aspect-[10/7] overflow-hidden',
            isImageRight ? 'lg:order-2' : '',
          )}
        >
          <Image src={src} alt={alt} fill className="object-cover object-center" {...restImageProps} />
        </div>
        <div className={cn('flex flex-col bg-white p-5 lg:p-10', isImageRight ? 'lg:order-1' : '')}>
          <p className="typo-body-3 text-gray">{date}</p>
          <Separator className="mt-2.5 mb-5" />
          <TitleTag className="typo-title-2 group-hover/card:text-blue font-bold transition-colors duration-300">
            {title.text}
          </TitleTag>
          <p className="typo-body-2 mt-auto whitespace-pre-line max-lg:mt-2.5">{description}</p>
        </div>
      </Link>
    </div>
  )
}

const CardPressLoading = ({ isImageRight }: { isImageRight?: boolean }) => {
  return (
    <div className="grid lg:grid-cols-2">
      <div className={cn('skeleton mb-2.5 aspect-[10/7]', isImageRight ? 'lg:order-2' : '')} />
      <div className={cn('flex flex-col bg-white p-5 lg:p-10', isImageRight ? 'lg:order-1' : '')}>
        <TextSkeleton variant="typo-body-3" className="w-1/4" />
        <Separator className="mt-2.5 mb-5 animate-pulse" />
        <TextSkeleton variant="typo-title-2" className="w-2/4" />
        <div className="mt-auto max-lg:mt-2.5">
          <TextSkeleton variant="typo-body-2" />
          <TextSkeleton variant="typo-body-2" className="w-2/3" />
        </div>
      </div>
    </div>
  )
}

export { CardPress, CardPressLoading, type CardPressProps }
