import { ComponentProps, ReactElement } from 'react'
import { cn } from '@/libs/utils/cn'
import Image, { type ImageProps } from 'next/image'

type CardAwardProps = Omit<ComponentProps<'div'>, 'title'> & {
  awardImage: ImageProps
  projectImage: Omit<ImageProps, 'fill'>
  title: {
    tag?: 'h2' | 'h3'
    text: string
  }
  description: string
  date: string
  project: string
  type: string
  year: string
  action?: ReactElement
}

const CardAward = ({
  awardImage,
  projectImage,
  title,
  description,
  date,
  project,
  type,
  year,
  action,
  className,
  ...props
}: CardAwardProps) => {
  const { src: awardSrc, alt: awardAlt, ...restAwardImageProps } = awardImage
  const { src: projectSrc, alt: projectAlt, ...restProjectImageProps } = projectImage
  const TitleTag = title.tag ?? 'h2'
  return (
    <div className={cn('flex flex-wrap gap-[3.125rem] bg-white p-10', className)} {...props}>
      <div
        className={cn(
          'bg-gray-light-1 relative mb-[0.625rem] aspect-square w-[20rem] shrink-0 gap-[3.125rem] self-start overflow-hidden',
          'before:absolute before:inset-0 before:z-[1] before:bg-black/10 before:content-[""]',
        )}
      >
        <Image
          src={projectSrc}
          alt={projectAlt}
          fill
          className="object-cover object-center"
          {...restProjectImageProps}
        />
        <div className="relative z-[2] mt-5 ml-5">
          <Image src={awardSrc} alt={awardAlt} {...restAwardImageProps} />
        </div>
      </div>
      <div className="flex-1 space-y-5">
        <TitleTag className="typo-title-2 font-bold">{title.text}</TitleTag>
        <p className="typo-body-2 whitespace-pre-line">{description}</p>
        <p className="text-gray typo-body-3">{date}</p>
      </div>
      <div className={cn('border-gray-light-1 flex w-[16.625rem] shrink-0 flex-col border-l pl-[3.125rem]')}>
        <div className="flex flex-1 flex-col gap-5">
          <div>
            <p className="typo-body-2 text-gray mb-[0.313rem]">Project :</p>
            <p className="typo-body-2 font-bold uppercase">{project}</p>
          </div>
          <div>
            <p className="typo-body-2 text-gray mb-[0.313rem]">Type :</p>
            <p className="typo-body-2 font-bold uppercase">{type}</p>
          </div>
          <div>
            <p className="typo-body-2 text-gray mb-[0.313rem]">Year :</p>
            <p className="typo-body-2 font-bold uppercase">{year}</p>
          </div>
        </div>
        <div className="shrink-0">{action}</div>
      </div>
    </div>
  )
}

export { CardAward, type CardAwardProps }
