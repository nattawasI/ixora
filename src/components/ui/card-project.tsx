import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import Link, { type LinkProps } from 'next/link'
import Image, { type ImageProps } from 'next/image'

type CardProjectProps = Omit<ComponentProps<'div'>, 'title'> & {
  link: LinkProps
  image: Omit<ImageProps, 'fill'>
  title: {
    tag?: 'h2' | 'h3'
    text: string
  }
  location: string
}

const CardProject = ({ className, link, image, title, location, ...props }: CardProjectProps) => {
  const ProjectNameTag = title.tag ?? 'h2'
  const { src, alt, ...restImageProps } = image
  return (
    <div className={cn('relative', className)} {...props}>
      <Link className="group/card block" {...link}>
        <div className="bg-gray relative mb-[0.625rem] aspect-[22/15] overflow-hidden">
          <Image src={src} alt={alt} fill className="card-hover-image object-cover object-center" {...restImageProps} />
        </div>
        <ProjectNameTag className="typo-body-1 font-bold uppercase">{title.text}</ProjectNameTag>
        <p className="typo-body-3 text-gray">{location}</p>
      </Link>
    </div>
  )
}

export { CardProject, type CardProjectProps }
