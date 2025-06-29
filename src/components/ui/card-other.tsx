import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import Image, { type ImageProps } from 'next/image'

type CardOtherProps = Omit<ComponentProps<'div'>, 'title'> & {
  image: Omit<ImageProps, 'fill'>
  title: {
    tag?: 'h2' | 'h3'
    text: string
  }
  description: string
  action?: React.ReactElement
}

const CardOther = ({ className, image, title, description, action, ...props }: CardOtherProps) => {
  const TitleTag = title.tag ?? 'h2'
  const { src, alt, ...restImageProps } = image

  return (
    <div className={cn('max-md:space-y-5 md:grid md:grid-cols-2', className)} {...props}>
      <div className="flex flex-col bg-white md:py-8 md:pr-[3.75rem]">
        <TitleTag className="typo-title-2--rps mb-5 gap-y-5 font-semibold uppercase">{title.text}</TitleTag>
        <div className="md:mt-auto">
          <p className="typo-body-2--title-3 whitespace-pre-line">{description}</p>
          {action ? <div className="mt-10 max-md:hidden">{action}</div> : null}
        </div>
      </div>
      <div className="bg-gray-light-1 relative overflow-hidden max-md:aspect-[172/127] md:min-h-[24.375rem]">
        <Image src={src} alt={alt} fill className="object-cover object-center" {...restImageProps} />
      </div>
      {action ? <div className="md:hidden">{action}</div> : null}
    </div>
  )
}

export { CardOther }
