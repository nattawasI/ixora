import { ExploreMoreAccordion } from '@/components/modules/article-detail/explore-more-accordion'
import { PressCard } from '@/components/modules/press/press-card'
import Link from 'next/link'

const PressExploreMore = () => {
  return (
    <ExploreMoreAccordion type="single" collapsible>
      <div className="space-y-4 lg:space-y-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <Link href="/press/4" className="block" key={index}>
            <PressCard
              image={{
                src: '/mockup/press-1.jpg',
                alt: 'Topic of press Abc...',
                sizes: '100vw, (min-width: 1024px) 50vw',
              }}
              date={'April, 2025'}
              title={{
                tag: 'h3',
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
    </ExploreMoreAccordion>
  )
}

export { PressExploreMore }
