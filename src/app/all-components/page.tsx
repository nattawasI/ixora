import { Facebook, Line, X, Email, CopyLink, Close, ArrowLeft, ArrowRight, Video } from '@/components/ui/icons'
import Link from 'next/link'
import { ButtonSquare, buttonSquareVariants } from '@/components/ui/button-square'
import { ButtonLink } from '@/components/ui/button-link'
import { ButtonCopy } from '@/components/ui/button-copy'
import { CardProject, CardProjectLoading } from '@/components/ui/card-project'
import { CardPeople, CardPeopleLoading } from '@/components/ui/card-people'
import { CardAward, CardAwardLoading } from '@/components/ui/card-award'
import { CardPress, CardPressLoading } from '@/components/ui/card-press'
import { CardOther } from '@/components/ui/card-other'

export default function AllComponents() {
  return (
    <>
      <div className="c-container">
        <div className="space-y-5">
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
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <CardProject
              link={{
                href: '#',
              }}
              image={{
                src: '/mockup/project.jpg',
                alt: 'XT HUAIKHWANG',
                sizes: '100vw, (min-width: 768px) 33vw',
              }}
              title={{
                tag: 'h2',
                text: 'XT HUAIKHWANG',
              }}
              location={'BANGKOK, THAILAND'}
            />
            <CardProjectLoading />
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <CardPeople
              image={{
                src: '/mockup/people.jpg',
                alt: 'Chanchai Jarungruangkiat',
                sizes: '50vw, (min-width: 1024px) 33vw, (min-width: 1280px) 25vw',
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
          image={{
            src: '/mockup/award-1.jpg',
            alt: 'Award',
            sizes: '100vw, (min-width: 1024px) 320px',
          }}
          title={{ tag: 'h2', text: 'Architecture Master Prize 2025 | Winner' }}
          description={
            'A new campus community redefines suburban living with the concept of "Convergent with The Divergent Design." This approach uses experimental designs reflecting distinctive personality traits.'
          }
          date={'April, 2025'}
          projectName={'PANYA INDRA RESIDENCE'}
          type={'RESIDENTIAL'}
          year={'2025'}
          action={
            <ButtonLink isFullWidth href="/">
              See this project
            </ButtonLink>
          }
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
            isImageRight
          />
          <CardPress
            link={{
              href: '#',
            }}
            image={{
              src: '/mockup/press-2.jpg',
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
          />
          <CardPressLoading />
        </div>
        <CardOther
          image={{
            src: '/images/culture.jpg',
            alt: 'CULTURE',
            sizes: '100vw, (min-width: 1024px) 50vw',
          }}
          title={{
            tag: 'h2',
            text: 'CULTURE',
          }}
          description={
            'We value collaboration, creativity, and purpose-driven design — turning every space into something meaningful through thoughtful ideas and teamwork.'
          }
          action={
            <ButtonLink href="/career" className="max-lg:w-full">
              Career
            </ButtonLink>
          }
        />
      </div>
    </>
  )
}
