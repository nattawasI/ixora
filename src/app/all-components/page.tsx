import { Facebook, Line, X, Email, CopyLink, Close, ArrowLeft, ArrowRight, Video } from '@/components/ui/icons'
import Link from 'next/link'
import { ButtonSquare, buttonSquareVariants } from '@/components/ui/button-square'
import { ButtonLink } from '@/components/ui/button-link'
import { ButtonCopy } from '@/components/ui/button-copy'
import { CardProject } from '@/components/ui/card-project'
import { CardPeople } from '@/components/ui/card-people'
import { CardAward } from '@/components/ui/card-award'

export default function AllComponents() {
  return (
    <>
      <div className="mx-auto max-w-[77.5rem] px-4 lg:px-[3.125rem]">
        <div className="space-y-[0.625rem]">
          <div className="space-y-[0.625rem]">
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
          <ButtonCopy label="Copy" copiedLabel="Copied" isCopied={false} />
          <div className="grid grid-cols-3 gap-5">
            <CardProject
              link={{
                href: '#',
              }}
              image={{
                src: '/mockup/project.jpg',
                alt: 'XT HUAIKHWANG',
              }}
              projectName={{
                tag: 'h2',
                text: 'XT HUAIKHWANG',
              }}
              location={'BANGKOK, THAILAND'}
            />
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
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[77.5rem]">
        <CardAward
          mainImage={{
            src: '/mockup/award.jpg',
            alt: 'Award',
          }}
          title={'Architecture Master Prize 2025 | Winner'}
          description={
            'A new campus community redefines suburban living with the concept of "Convergent with The Divergent Design." This approach uses experimental designs reflecting distinctive personality traits, linked by a convergent iconic bridge that seamlessly connects diverse characteristics, offering an unparalleled living experience.'
          }
          date={'April, 2025'}
          project={'PANYA INDRA RESIDENCE'}
          type={'RESIDENTIAL'}
          year={'2025'}
          action={<ButtonLink href="#">See this project</ButtonLink>}
        />
      </div>
    </>
  )
}
