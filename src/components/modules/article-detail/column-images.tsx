import { ImageMedia, type ImageMediaProps } from '@/components/ui/image-media'

const ColumnImages = ({ images }: { images: ImageMediaProps[] }) => {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {images.map((item, index) => {
        const { alt, ...restProps } = item
        return (
          <div className="relative aspect-[0.81]" key={index}>
            <ImageMedia alt={alt} fill className="object-cover object-center" {...restProps} />
          </div>
        )
      })}
    </div>
  )
}

export { ColumnImages }
