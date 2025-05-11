import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import Image, { type ImageProps } from 'next/image'

type CardProjectProps = ComponentProps<'div'> & {
  image: React.ReactElement
  projectName: string
  projectNameTag?: 'h2' | 'h3'
  location: string
}

const CardProject = ({
  className,
  image,
  projectName,
  projectNameTag = 'h2',
  location,
  ...props
}: CardProjectProps) => {
  const TagName = projectNameTag
  return (
    <div className={cn('group/card relative', className)} {...props}>
      <div className="bg-gray relative mb-[0.625rem] aspect-[22/15] overflow-hidden">{image}</div>
      <TagName className="typo-body-1 font-bold uppercase">{projectName}</TagName>
      <p className="typo-body-3 text-gray">{location}</p>
    </div>
  )
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

export { CardProject, CardProjectImage, type CardProjectProps }
