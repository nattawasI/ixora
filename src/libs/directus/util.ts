import { groupImages } from '../utils/group-images'
import { NewsDetailResponse, NewsResponse, ProjectDetailResponse, ProjectResponse } from './type'

const mapMediaSource = <
  T extends ProjectResponse[] | NewsResponse[],
  U extends ProjectDetailResponse[] | NewsDetailResponse[],
>(
  data: T,
): U => {
  return data.map((item) => ({
    ...item,
    cover: {
      ...item.cover,
      src: `${process.env.DIRECTUS_URL}/assets/${item.cover.id}` || '',
    },
    gallery: groupImages(item.gallery.map((item) => item.directus_files_id)),
    video: item.video.map((item) => ({
      ...item,
      item: {
        ...item.item,
        embed_code: item.item?.embed_code ?? null,
        video: item.item?.video
          ? {
              ...item.item.video,
              src: `${process.env.DIRECTUS_URL}/assets/${item.item.video.id}`,
            }
          : null,
      },
    })),
  })) as U
}

const mapCoverImage = <T extends ProjectResponse[] | NewsResponse[]>(data: T): T => {
  return data.map((item) => ({
    ...item,
    cover: {
      ...item.cover,
      src: `${process.env.DIRECTUS_URL}/assets/${item.cover.id}` || '',
    },
  })) as T
}

export { mapMediaSource, mapCoverImage }
