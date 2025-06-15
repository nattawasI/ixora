import { getNews } from '@/libs/directus/service/news'
import { PressList } from '@/components/modules/press/press-list'
import { UpdatePressListContext } from '@/components/modules/press/update-press-list-context'

export default async function PressAndNews() {
  const data = await getNews()

  return (
    <>
      <h1 className="sr-only">PRESS & NEWS</h1>
      <PressList data={data} />
      <UpdatePressListContext data={data} />
    </>
  )
}
