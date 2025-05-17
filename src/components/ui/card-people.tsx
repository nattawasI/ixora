import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import Image, { type ImageProps } from 'next/image'
import { IconLogo } from '@/components/ui/icons-color/icon-logo'
import { TextSkeleton } from '@/components/ui/text-skeleton'

type CardPeopleProps = ComponentProps<'div'> & {
  image: Omit<ImageProps, 'fill'>
  name: string
  position: string
}

const CardPeople = ({ image, name, position, ...props }: CardPeopleProps) => {
  const { src, alt, ...restImageProps } = image

  return (
    <div {...props}>
      <div className="bg-gray-light-1 relative mb-2.5 aspect-square overflow-hidden">
        <Image
          src={src || '/images/people-fallback.jpg'}
          alt={alt}
          fill
          className="object-cover object-center"
          {...restImageProps}
        />
      </div>
      <div className="relative min-h-16 space-y-1.25 pl-6 lg:min-h-20">
        <IconLogo className="absolute top-1.25 left-0 size-3.5" />
        <h2 className="typo-body-1 font-bold break-words uppercase">{name}</h2>
        <p className="typo-body-2 text-gray">{position}</p>
      </div>
    </div>
  )
}

const CardPeopleLoading = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex flex-col gap-2.5', className)}>
      <div className="skeleton mb-2.5 aspect-square" />
      <div className="min-h-16 lg:min-h-20">
        <TextSkeleton variant="typo-body-1" className="w-2/3" />
        <TextSkeleton variant="typo-body-2" className="w-1/3" />
      </div>
    </div>
  )
}

export { CardPeople, CardPeopleLoading, type CardPeopleProps }
