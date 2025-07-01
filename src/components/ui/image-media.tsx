'use client'

import Image, { type ImageProps } from 'next/image'
import { cn } from '@/libs/utils/cn'

type ImageMediaProps = ImageProps

const ImageMedia = ({ src, alt, onLoad, className, ...props }: ImageMediaProps) => {
  return (
    <Image
      src={src}
      className={cn('bg-gray-light-1 opacity-0 transition-opacity duration-300', className)}
      alt={alt}
      onLoad={(e) => {
        e.currentTarget.classList.remove('opacity-0')
        onLoad?.(e)
      }}
      {...props}
    />
  )
}

export { ImageMedia, type ImageMediaProps }
