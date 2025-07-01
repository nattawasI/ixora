import { ImageMedia, type ImageMediaProps } from '@/components/ui/image-media'

const SingleImage = ({ alt, ...props }: ImageMediaProps) => {
  return (
    <div className="relative aspect-[1.47]">
      <ImageMedia alt={alt} fill className="object-cover object-center" {...props} />
    </div>
  )
}

export { SingleImage }
