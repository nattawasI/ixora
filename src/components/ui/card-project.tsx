import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import Link, { type LinkProps } from 'next/link'
import Image, { type ImageProps } from 'next/image'

type CardProjectProps = ComponentProps<'div'> & {
  link: LinkProps
  image: Omit<ImageProps, 'fill'>
  projectName: {
    tag?: 'h2' | 'h3'
    text: string
  }
  location: string
}

const CardProject = ({ className, link, image, projectName, location, ...props }: CardProjectProps) => {
  const ProjectNameTag = projectName.tag ?? 'h2'
  const { src, alt, ...restImageProps } = image
  return (
    <div className={cn('group/card relative', className)} {...props}>
      <Link className="block" {...link}>
        <div className="bg-gray relative mb-[0.625rem] aspect-[22/15] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className={cn(
              'object-cover object-center opacity-90 transition-all duration-300',
              'group-hover/card:scale-110 group-hover/card:opacity-100',
            )}
            {...restImageProps}
          />
        </div>
        <ProjectNameTag className="typo-body-1 font-bold uppercase">{projectName.text}</ProjectNameTag>
        <p className="typo-body-3 text-gray">{location}</p>
      </Link>
    </div>
  )
}

export { CardProject, type CardProjectProps }
