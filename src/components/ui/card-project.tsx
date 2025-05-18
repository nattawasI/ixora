import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import Image, { type ImageProps } from 'next/image'
import { TextSkeleton } from '@/components/ui/text-skeleton'

type CardProjectProps = Omit<ComponentProps<'div'>, 'title'> & {
  image: Omit<ImageProps, 'fill'>
  title: {
    tag?: 'h2' | 'h3'
    text: string
  }
  location: string
}

const CardProject = ({ image, title, location, className, ...props }: CardProjectProps) => {
  const ProjectNameTag = title.tag ?? 'h2'
  const { src, alt, ...restImageProps } = image
  return (
    <div className={cn('group/card block', className)} {...props}>
      <div className="bg-gray-light-1 card-hover-image relative mb-2.5 aspect-[22/15] overflow-hidden">
        <Image src={src} alt={alt} fill className="object-cover object-center" {...restImageProps} />
      </div>
      <ProjectNameTag className="typo-body-1 font-bold uppercase">{title.text}</ProjectNameTag>
      <p className="typo-body-3 text-gray">{location}</p>
    </div>
  )
}

const CardProjectLoading = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="skeleton mb-2.5 aspect-[22/15]" />
      <TextSkeleton variant="typo-body-1" className="w-2/3" />
      <TextSkeleton variant="typo-body-3" className="w-1/3" />
    </div>
  )
}

export { CardProject, CardProjectLoading, type CardProjectProps }
