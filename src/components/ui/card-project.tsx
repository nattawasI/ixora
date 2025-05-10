import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import Link, { type LinkProps } from 'next/link'
import Image, { type ImageProps } from 'next/image'

const CardProject = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div className={cn('relative', className)} {...props} />
}

const CardProjectLink = ({ className, ...props }: LinkProps & Omit<ComponentProps<'a'>, keyof LinkProps>) => {
  return <Link className={cn('group/card block', className)} {...props} />
}

const CardProjectImageWrap = ({ className, ...props }: ComponentProps<'div'>) => {
  return <div className={cn('bg-gray relative mb-[0.625rem] aspect-[22/15] overflow-hidden', className)} {...props} />
}

const CardProjectImage = ({ src, alt, className, ...props }: Omit<ImageProps, 'fill'>) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={cn(
        'object-cover object-center opacity-90 transition-all duration-300',
        'group-hover/card:scale-110 group-hover/card:opacity-100',
        className,
      )}
      {...props}
    />
  )
}

type CardProjectTitleTags = 'h2' | 'h3'

const defaultTag: CardProjectTitleTags = 'h2'

type CardProjectTitleProps<T extends CardProjectTitleTags = typeof defaultTag> = {
  tag?: T
} & ComponentProps<T>

const CardProjectName = <T extends CardProjectTitleTags = typeof defaultTag>({
  tag,
  className,
  ...props
}: CardProjectTitleProps<T>) => {
  const TagName = tag ?? defaultTag
  return <TagName className={cn('typo-body-1 font-bold uppercase', className)} {...props} />
}

const CardProjectLocation = ({ className, ...props }: ComponentProps<'p'>) => {
  return <p className={cn('typo-body-3 text-gray', className)} {...props} />
}

export { CardProject, CardProjectLink, CardProjectImageWrap, CardProjectImage, CardProjectName, CardProjectLocation }
