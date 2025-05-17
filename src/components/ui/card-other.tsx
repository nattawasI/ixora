import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import Image, { type ImageProps } from 'next/image'
import { IconLogo } from '@/components/ui/icons-color/icon-logo'

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
    <div className={cn('max-lg:space-y-5 lg:grid lg:grid-cols-2', className)} {...props}>
      <div className="flex flex-col bg-white lg:pr-[3.75rem]">
        <TitleTag className="typo-title-2 mb-5 gap-y-5 font-bold uppercase">
          <IconLogo className="mb-5 block size-12.5" />
          {title.text}
        </TitleTag>
        <div className="lg:mt-auto">
          <p className="typo-title-3 whitespace-pre-line">{description}</p>
          {action ? <div className="mt-10 max-lg:hidden">{action}</div> : null}
        </div>
      </div>
      <div className="bg-gray-light-1 relative overflow-hidden max-lg:aspect-[172/127] lg:min-h-[24.375rem]">
        <Image src={src} alt={alt} fill className="object-cover object-center" {...restImageProps} />
      </div>
      {action ? <div className="lg:hidden">{action}</div> : null}
    </div>
  )
}

export { CardOther }
