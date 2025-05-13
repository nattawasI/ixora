import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import Image, { type ImageProps } from 'next/image'
import { Separator } from '@/components/ui/separator'
import { ButtonLink } from '@/components/ui/button-link'
import { Plus } from '@/components/ui/icons'
import { TextSkeleton } from '@/components/ui/text-skeleton'
import type { LinkProps } from 'next/link'

type CardAwardProps = Omit<ComponentProps<'div'>, 'title'> & {
  awardImage: ImageProps
  projectImage: Omit<ImageProps, 'fill'>
  title: {
    tag?: 'h2' | 'h3'
    text: string
  }
  description: string
  date: string
  projectName: string
  type: string
  year: string
  projectLink: LinkProps
}

const CardAward = ({
  awardImage,
  projectImage,
  title,
  description,
  date,
  projectName,
  type,
  year,
  projectLink,
  className,
  ...props
}: CardAwardProps) => {
  const { src: awardSrc, alt: awardAlt, ...restAwardImageProps } = awardImage
  const { src: projectSrc, alt: projectAlt, ...restProjectImageProps } = projectImage

  const TitleTag = title.tag ?? 'h2'

  return (
    <div
      className={cn('flex flex-col gap-5 bg-white p-4', 'lg:flex-row lg:gap-8 lg:p-10 xl:gap-[3.125rem]', className)}
      {...props}
    >
      <div
        className={cn(
          'bg-gray-light-1 relative aspect-square overflow-hidden',
          'lg:w-[20rem] lg:shrink-0 lg:self-start',
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
      <div className="flex-1 space-y-2">
        <p className="text-gray typo-body-2">{date}</p>
        <TitleTag className="typo-title-2 font-bold">{title.text}</TitleTag>
        <div>
          <p className="typo-body-2 whitespace-pre-line">{description}</p>
          <button className="typo-body-3 text-gray mt-5 inline-flex items-center gap-x-[0.313rem] font-bold uppercase">
            READ MORE
            <Plus className="text-blue -mt-px size-2.5" />
          </button>
        </div>
      </div>
      <Separator orientation="horizontal" className="lg:hidden" />
      <Separator orientation="vertical" className="max-lg:hidden" />
      <div className={cn('flex flex-col', 'lg:w-[13.5rem] lg:shrink-0')}>
        <div className="flex flex-1 flex-col gap-y-2.5 lg:gap-5">
          <div className="space-y-[0.313rem]">
            <p className="typo-body-2 text-gray">Project :</p>
            <p className="typo-body-2 font-bold uppercase">{projectName}</p>
          </div>
          <div className="space-y-[0.313rem]">
            <p className="typo-body-2 text-gray">Type :</p>
            <p className="typo-body-2 font-bold uppercase">{type}</p>
          </div>
          <div className="space-y-[0.313rem]">
            <p className="typo-body-2 text-gray">Year :</p>
            <p className="typo-body-2 font-bold uppercase">{year}</p>
          </div>
        </div>
        <div className="shrink-0 max-lg:mt-5">
          <ButtonLink isFullWidth {...projectLink}>
            See this project
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}

const CardAwardLoading = () => {
  return (
    <div className={cn('flex flex-col gap-5 bg-white p-4', 'lg:flex-row lg:p-10 xl:gap-[3.125rem]')}>
      <div className={cn('skeleton aspect-square', 'lg:w-[20rem] lg:shrink-0 lg:self-start')} />
      <div className="flex-1 space-y-2">
        <TextSkeleton variant="typo-body-2" className="w-1/4" />
        <TextSkeleton variant="typo-title-2" />
        <div>
          <TextSkeleton variant="typo-body-2" />
          <TextSkeleton variant="typo-body-2" className="w-3/4" />
          <TextSkeleton variant="typo-body-3" className="mt-5 w-1/4" />
        </div>
      </div>
      <Separator orientation="horizontal" className="animate-pulse lg:hidden" />
      <Separator orientation="vertical" className="animate-pulse max-lg:hidden" />
      <div className={cn('flex flex-col', 'lg:w-[16.625rem] lg:shrink-0')}>
        <div className="flex flex-1 flex-col gap-y-2.5 lg:gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index}>
              <TextSkeleton variant="typo-body-2" className="w-1/3" />
              <TextSkeleton variant="typo-body-2" className="w-2/3" />
            </div>
          ))}
        </div>
        <div className="shrink-0 max-lg:mt-5">
          <div className="skeleton h-14" />
        </div>
      </div>
    </div>
  )
}

export { CardAward, CardAwardLoading, type CardAwardProps }
