import { ComponentProps, ReactElement } from 'react'
import { cn } from '@/libs/utils/cn'
import parse from 'html-react-parser'
import { format } from 'date-fns'
import Image, { type ImageProps } from 'next/image'
import { Separator } from '@/components/ui/separator'
import { TextSkeleton } from '@/components/ui/text-skeleton'
import { ReadMoreBlock } from '@/components/ui/read-more-block'

type CardAwardProps = Omit<ComponentProps<'div'>, 'title'> & {
  image: Omit<ImageProps, 'fill'>
  title: {
    tag?: 'h2' | 'h3'
    text: string
  }
  descriptionLead: string
  descriptionMore: string
  date: string
  projectName: string
  category: string
  year: string
  action: ReactElement
}

const CardAward = ({
  image,
  title,
  descriptionLead,
  descriptionMore,
  date,
  projectName,
  category,
  year,
  action,
  className,
  ...props
}: CardAwardProps) => {
  const { src, alt, ...restImageProps } = image

  const TitleTag = title.tag ?? 'h2'

  return (
    <div
      className={cn('flex flex-col gap-5 bg-white p-4', 'lg:flex-row lg:gap-9 lg:p-10', 'xl:gap-12.5', className)}
      {...props}
    >
      <div
        className={cn(
          'bg-gray-light-1 relative aspect-square w-full overflow-hidden',
          'max-[27rem]:max-w-full',
          'max-lg:mx-auto max-lg:max-w-[25rem]',
          'lg:w-[27.6%] lg:max-w-[20rem] lg:min-w-[15rem] lg:self-start',
        )}
      >
        <Image src={src} alt={alt} fill className="object-cover object-center" {...restImageProps} />
      </div>
      <div className="flex-1 space-y-2">
        <p className="text-gray typo-body-2">{format(new Date(date), 'MMMM, yyyy')}</p>
        <TitleTag className="typo-title-2--rps font-semibold">{title.text}</TitleTag>
        {descriptionLead && descriptionMore ? (
          <ReadMoreBlock
            className="typo-body-2"
            contentLead={parse(descriptionLead)}
            contentMore={<div className="pt-5">{parse(descriptionMore)}</div>}
          />
        ) : descriptionLead || descriptionMore ? (
          <div className="typo-body-2">{parse(descriptionLead || descriptionMore)}</div>
        ) : null}
      </div>
      <Separator orientation="horizontal" className="lg:hidden" />
      <Separator orientation="vertical" className="max-lg:hidden" />
      <div className={cn('flex flex-col', 'lg:w-[13.5rem] lg:shrink-0')}>
        <div className="flex flex-1 flex-col gap-y-2.5 lg:gap-5">
          <div className="space-y-1.25">
            <p className="typo-body-2 text-gray">Project :</p>
            <p className="typo-body-2 font-semibold uppercase">{projectName}</p>
          </div>
          <div className="space-y-1.25">
            <p className="typo-body-2 text-gray">Type :</p>
            <p className="typo-body-2 font-semibold uppercase">{category}</p>
          </div>
          <div className="space-y-1.25">
            <p className="typo-body-2 text-gray">Year :</p>
            <p className="typo-body-2 font-semibold uppercase">{year}</p>
          </div>
        </div>
        <div className="shrink-0 max-lg:mt-5">{action}</div>
      </div>
    </div>
  )
}

const CardAwardLoading = () => {
  return (
    <div className={cn('flex flex-col gap-5 bg-white p-4', 'lg:flex-row lg:gap-9 lg:p-10', 'xl:gap-12.5')}>
      <div
        className={cn(
          'skeleton aspect-square w-full',
          'max-[27rem]:max-w-full',
          'max-lg:mx-auto max-lg:max-w-[25rem]',
          'lg:w-[20rem] lg:shrink-0 lg:self-start',
        )}
      />
      <div className="flex-1 space-y-2">
        <TextSkeleton variant="typo-body-2" className="w-28" />
        <TextSkeleton variant="typo-title-2--rps" className="w-1/2" />
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
