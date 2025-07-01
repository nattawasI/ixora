import { ComponentProps } from 'react'
import { ImageMedia, type ImageMediaProps } from '@/components/ui/image-media'
import { IconLogo } from '@/components/ui/icons-color/icon-logo'
import { TextSkeleton } from '@/components/ui/text-skeleton'

type CardPeopleProps = ComponentProps<'div'> & {
  image: Omit<ImageMediaProps, 'fill'>
  name: string
  position: string
}

const CardPeople = ({ image, name, position, ...props }: CardPeopleProps) => {
  const { src, alt, ...restImageProps } = image

  return (
    <div {...props}>
      <div className="relative mb-2.5 aspect-square overflow-hidden">
        <ImageMedia
          src={src || '/images/people/people-fallback.jpg'}
          alt={alt}
          fill
          className="object-cover object-center"
          {...restImageProps}
        />
      </div>
      <div className="relative min-h-16.25 space-y-1.25 pl-6 lg:min-h-[6.25rem]">
        <IconLogo className="absolute top-1.25 left-0 size-3.5" />
        <h2 className="typo-body-2--1 font-semibold break-words">{name}</h2>
        <p className="text-gray typo-body-3--2">{position}</p>
      </div>
    </div>
  )
}

const CardPeopleLoading = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="skeleton mb-2.5 aspect-square" />
      <div className="min-h-16 space-y-1.25 lg:min-h-20">
        <TextSkeleton variant="typo-body-2--1" className="w-2/3" />
        <TextSkeleton variant="typo-body-3--2" className="w-1/3" />
      </div>
    </div>
  )
}

export { CardPeople, CardPeopleLoading, type CardPeopleProps }
