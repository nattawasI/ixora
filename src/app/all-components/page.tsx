import { Facebook, Line, X, Email, CopyLink, Close, ArrowLeft, ArrowRight, Video } from '@/components/ui/icons'
import Link from 'next/link'
import { ButtonSquare, buttonSquareVariants } from '@/components/ui/button-square'
import { ButtonLink } from '@/components/ui/button-link'
import { ButtonCopy } from '@/components/ui/button-copy'
import { CardProject, CardProjectLoading } from '@/components/ui/card-project'
import { CardPeople, CardPeopleLoading } from '@/components/ui/card-people'
import { CardAward, CardAwardLoading } from '@/components/ui/card-award'
import { CardPress, CardPressLoading } from '@/components/ui/card-press'

export default function AllComponents() {
  return (
    <>
      <div className="c-container-px">
        <div className="space-y-2.5">
          <div className="space-y-2.5">
            <Link href="#" className={buttonSquareVariants()}>
              <Facebook />
            </Link>
            <Link href="#" className={buttonSquareVariants()}>
              <Line />
            </Link>
            <Link href="#" className={buttonSquareVariants()}>
              <X />
            </Link>
            <Link href="#" className={buttonSquareVariants()}>
              <Email />
            </Link>
            <Link href="#" className={buttonSquareVariants({ theme: 'blue' })}>
              <CopyLink />
            </Link>
          </div>
          <ButtonSquare theme="gray">
            <Close />
          </ButtonSquare>
          <ButtonSquare theme="gray">
            <ArrowLeft />
          </ButtonSquare>
          <ButtonSquare theme="gray">
            <ArrowRight />
          </ButtonSquare>
          <ButtonSquare theme="text-blue">
            <Video />
          </ButtonSquare>
          <ButtonLink href="#">Award & Press</ButtonLink>
          <ButtonLink href="#" arrow="left" isFullWidth className="uppercase">
            BACK TO RESIDENTIAL
          </ButtonLink>
          <div className="flex gap-x-2">
            <ButtonCopy isCopied={false} />
            <ButtonCopy isCopied={true} />
          </div>
          <div className="grid grid-cols-3 gap-5">
            <CardProject
              link={{
                href: '#',
              }}
              image={{
                src: '/mockup/project.jpg',
                alt: 'XT HUAIKHWANG',
              }}
              title={{
                tag: 'h2',
                text: 'XT HUAIKHWANG',
              }}
              location={'BANGKOK, THAILAND'}
            />
            <CardProjectLoading />
          </div>
          <div className="grid grid-cols-3 gap-5">
            <CardPeople
              image={{
                src: '/mockup/people.jpg',
                alt: 'Chanchai Jarungruangkiat',
              }}
              name={'Chanchai Jarungruangkiat'}
              position={'Founder / Partner'}
            />
            <CardPeopleLoading />
          </div>
        </div>
      </div>
      <div className="c-container">
        <CardAward
          award="architecture-masterprize"
          projectImage={{
            src: '/mockup/project-award.jpg',
            alt: 'Award',
          }}
          title={{ tag: 'h2', text: 'Architecture Master Prize 2025 | Winner' }}
          description={
            'A new campus community redefines suburban living with the concept of "Convergent with The Divergent Design." This approach uses experimental designs reflecting distinctive personality traits.'
          }
          date={'April, 2025'}
          projectName={'PANYA INDRA RESIDENCE'}
          type={'RESIDENTIAL'}
          year={'2025'}
          projectLink={{
            href: '#',
          }}
        />
        <CardAwardLoading />
        <div className="space-y-10">
          <CardPress
            link={{
              href: '#',
            }}
            image={{
              src: '/mockup/press-1.jpg',
              alt: 'Topic of press Abc...',
            }}
            date={'April, 2025'}
            title={{
              tag: 'h2',
              text: 'Topic of press Abc...',
            }}
            description={
              'A new campus community redefines suburban living with the concept of "Convergent with The Divergent Design." This approach uses experimental designs reflecting distinctive personality traits.'
            }
            isImageRight
          />
          <CardPress
            link={{
              href: '#',
            }}
            image={{
              src: '/mockup/press-2.jpg',
              alt: 'Topic of press Abc...',
            }}
            date={'April, 2025'}
            title={{
              tag: 'h2',
              text: 'Topic of press Abc...',
            }}
            description={
              'A new campus community redefines suburban living with the concept of "Convergent with The Divergent Design." This approach uses experimental designs reflecting distinctive personality traits.'
            }
          />
          <CardPressLoading />
        </div>
      </div>
    </>
  )
}
