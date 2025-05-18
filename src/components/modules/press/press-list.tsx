import { CardPressLoading } from '@/components/ui/card-press'
import { PressCard } from '@/components/modules/press/press-card'
import Link from 'next/link'

const PressList = async () => {
  /** fetch here */
  return (
    <div className="list-awards-press">
      {Array.from({ length: 4 }).map((_, index) => (
        <Link href="#" className="block" key={index}>
          <PressCard
            image={{
              src: '/mockup/press-1.jpg',
              alt: 'Topic of press Abc...',
              sizes: '100vw, (min-width: 1024px) 50vw',
            }}
            date={'April, 2025'}
            title={{
              tag: 'h2',
              text: 'Topic of press Abc...',
            }}
            description={
              'A new campus community redefines suburban living with the concept of "Convergent with The Divergent Design." This approach uses experimental designs reflecting distinctive personality traits.'
            }
            isImageRight={index % 2 === 0}
          />
        </Link>
      ))}
    </div>
  )
}

const PressListLoading = () => {
  return (
    <div className="list-awards-press">
      {Array.from({ length: 2 }).map((_, index) => (
        <CardPressLoading key={index} isImageRight={index % 2 === 0} />
      ))}
    </div>
  )
}

export { PressList, PressListLoading }
