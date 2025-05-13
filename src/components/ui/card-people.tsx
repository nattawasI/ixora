import { ComponentProps } from 'react'
import Image, { type ImageProps } from 'next/image'
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
      <div className="bg-gray-light-1 relative mb-[0.625rem] aspect-square overflow-hidden">
        <Image src={src} alt={alt} fill className="object-cover object-center" {...restImageProps} />
      </div>
      <div className="min-h-[6.25rem]">
        <h2 className="typo-body-1 font-bold uppercase">{name}</h2>
        <p className="typo-body-2 text-gray font-bold">{position}</p>
      </div>
    </div>
  )
}

const CardPeopleLoading = () => {
  return (
    <div>
      <div className="skeleton mb-[0.625rem] aspect-square" />
      <TextSkeleton variant="typo-body-1" className="w-2/3" />
      <TextSkeleton variant="typo-body-2" className="w-1/3" />
    </div>
  )
}

export { CardPeople, CardPeopleLoading, type CardPeopleProps }
