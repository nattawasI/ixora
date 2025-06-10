import { ComponentProps, ReactElement } from 'react'
import { cn } from '@/libs/utils/cn'
import Image, { type ImageProps } from 'next/image'
import { Separator } from '@/components/ui/separator'
import { TextSkeleton } from '@/components/ui/text-skeleton'
import { ReadMore, ReadMoreTrigger, ReadMoreContent } from '@/components/ui/read-more'

type CardAwardProps = Omit<ComponentProps<'div'>, 'title'> & {
  image: Omit<ImageProps, 'fill'>
  title: {
    tag?: 'h2' | 'h3'
    text: string
  }
  description: string
  descriptionMore?: string
  date: string
  projectName: string
  type: string
  year: string
  action: ReactElement
}

const CardAward = ({
  image,
  title,
  description,
  descriptionMore,
  date,
  projectName,
  type,
  year,
  action,
  className,
  ...props
}: CardAwardProps) => {
  const { src, alt, ...restImageProps } = image

  const TitleTag = title.tag ?? 'h2'

  return (
    <div
      className={cn('flex flex-col gap-5 bg-white p-4', 'lg:flex-row lg:gap-9 lg:p-10', 'xl:gap-[3.125rem]', className)}
      {...props}
    >
      <div
        className={cn(
          'bg-gray-light-1 relative aspect-square w-full overflow-hidden',
          'max-lg:mx-auto max-lg:max-w-[25rem]',
          'lg:w-[20rem] lg:shrink-0 lg:self-start',
        )}
      >
        <Image src={src} alt={alt} fill className="object-cover object-center" {...restImageProps} />
      </div>
      <div className="flex-1 space-y-2">
        <p className="text-gray typo-body-2">{date}</p>
        <TitleTag className="typo-title-2 font-bold">{title.text}</TitleTag>
        <ReadMore>
          <p className="typo-body-2 whitespace-pre-line">{description}</p>
          {descriptionMore ? (
            <>
              <ReadMoreContent>
                <p className="typo-body-2 mt-5 whitespace-pre-line">{descriptionMore}</p>
              </ReadMoreContent>
              <ReadMoreTrigger className="mt-4" />
            </>
          ) : null}
        </ReadMore>
      </div>
      <Separator orientation="horizontal" className="lg:hidden" />
      <Separator orientation="vertical" className="max-lg:hidden" />
      <div className={cn('flex flex-col', 'lg:w-[13.5rem] lg:shrink-0')}>
        <div className="flex flex-1 flex-col gap-y-2.5 lg:gap-5">
          <div className="space-y-1.25">
            <p className="typo-body-2 text-gray">Project :</p>
            <p className="typo-body-2 font-bold uppercase">{projectName}</p>
          </div>
          <div className="space-y-1.25">
            <p className="typo-body-2 text-gray">Type :</p>
            <p className="typo-body-2 font-bold uppercase">{type}</p>
          </div>
          <div className="space-y-1.25">
            <p className="typo-body-2 text-gray">Year :</p>
            <p className="typo-body-2 font-bold uppercase">{year}</p>
          </div>
        </div>
        <div className="shrink-0 max-lg:mt-5">{action}</div>
      </div>
    </div>
  )
}

const CardAwardLoading = () => {
  return (
    <div className={cn('flex flex-col gap-5 bg-white p-4', 'lg:flex-row lg:gap-9 lg:p-10', 'xl:gap-[3.125rem]')}>
      <div className={cn('skeleton aspect-square', 'lg:w-[20rem] lg:shrink-0 lg:self-start')} />
      <div className="flex-1 space-y-2">
        <TextSkeleton variant="typo-body-2" className="w-28" />
        <TextSkeleton variant="typo-title-2" className="w-1/2" />
        <div>
          <TextSkeleton variant="typo-body-2" />
          <TextSkeleton variant="typo-body-2" className="w-3/4" />
          <TextSkeleton variant="typo-body-3" className="mt-5 w-20" />
        </div>
      </div>
      <Separator orientation="horizontal" className="animate-pulse lg:hidden" />
      <Separator orientation="vertical" className="animate-pulse max-lg:hidden" />
      <div className={cn('flex flex-col', 'lg:w-[13.5rem] lg:shrink-0')}>
        <div className="flex flex-1 flex-col gap-y-2.5 lg:gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index}>
              <TextSkeleton variant="typo-body-2" className="w-28" />
              <TextSkeleton variant="typo-body-2" className="w-32" />
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
