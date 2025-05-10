import { Facebook, Line, X, Email, CopyLink, Close, ArrowLeft, ArrowRight, Video } from '@/components/ui/icons'
import Link from 'next/link'
import { ButtonSquare, buttonSquareVariants } from '@/components/ui/button-square'
import { ButtonLink } from '@/components/ui/button-link'
import { ButtonCopy } from '@/components/ui/button-copy'

export default function AllComponents() {
  return (
    <div className="container mx-auto">
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
      </div>
    </div>
  )
}
