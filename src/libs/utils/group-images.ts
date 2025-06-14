import type { MediaResponse, GalleryGroupImage } from '@/libs/directus/type'

const groupImages = (images: MediaResponse[]): GalleryGroupImage[] => {
  const result: GalleryGroupImage[] = []
  const portraitBuffer: MediaResponse[] = []

  for (const img of images) {
    const isPortrait = img.height > img.width

    if (isPortrait) {
      portraitBuffer.push(img)
    } else {
      // Flush portrait buffer if needed
      while (portraitBuffer.length >= 2) {
        result.push({
          type: 'portrait-stack',
          images: portraitBuffer.splice(0, 2),
        })
      }

      // If one portrait is left in the buffer, we keep it for now

      // Push landscape image
      result.push({ type: 'landscape', images: [img] })
    }
  }

  // After loop ends, flush any remaining portrait images
  while (portraitBuffer.length >= 2) {
    result.push({
      type: 'portrait-stack',
      images: portraitBuffer.splice(0, 2),
    })
  }

  if (portraitBuffer.length === 1) {
    result.push({
      type: 'portrait-stack',
      images: [portraitBuffer[0]],
    })
  }

  return result
}

export { groupImages }
