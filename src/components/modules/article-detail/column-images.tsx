import Image, { type ImageProps } from 'next/image'

const ColumnImages = ({ images }: { images: ImageProps[] }) => {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {images.map((item, index) => {
        const { alt, ...restProps } = item
        return (
          <div className="bg-gray-light-1 relative aspect-[0.81]" key={index}>
            <Image alt={alt} fill className="object-cover object-center" {...restProps} />
          </div>
        )
      })}
    </div>
  )
}

export { ColumnImages }
