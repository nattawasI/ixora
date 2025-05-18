import { CardPress, CardPressLoading } from '@/components/ui/card-press'

const PressList = async () => {
  /** fetch here */
  return (
    <div className="space-y-4 lg:space-y-10">
      {Array.from({ length: 4 }).map((_, index) => (
        <CardPress
          key={index}
          link={{
            href: '#',
          }}
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
      ))}
    </div>
  )
}

const PressListLoading = () => {
  return (
    <div className="space-y-4 lg:space-y-10">
      {Array.from({ length: 2 }).map((_, index) => (
        <CardPressLoading key={index} isImageRight={index % 2 === 0} />
      ))}
    </div>
  )
}

export { PressList, PressListLoading }
