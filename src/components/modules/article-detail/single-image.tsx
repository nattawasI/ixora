import Image, { type ImageProps } from 'next/image'

const SingleImage = ({ alt, ...props }: ImageProps) => {
  return (
    <div className="relative aspect-[1.47]">
      <Image alt={alt} fill className="object-cover object-center" {...props} />
    </div>
  )
}

export { SingleImage }
