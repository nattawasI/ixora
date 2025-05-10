import { Facebook, Line, X, Email, CopyLink, Close, ArrowLeft, ArrowRight, Video } from '@/components/ui/icons'
import Link from 'next/link'

export default function AllComponents() {
  return (
    <div className="container mx-auto">
      <div className="space-y-[0.625rem]">
        <div className="space-y-[0.625rem]">
          <Link href="#" className="btn-square btn-square-border">
            <Facebook />
          </Link>
          <Link href="#" className="btn-square btn-square-border">
            <Line />
          </Link>
          <Link href="#" className="btn-square btn-square-border">
            <X />
          </Link>
          <Link href="#" className="btn-square btn-square-border">
            <Email />
          </Link>
          <Link href="#" className="btn-square btn-square-blue">
            <CopyLink />
          </Link>
        </div>
        <button className="btn-square btn-square-gray">
          <Close />
        </button>
        <button className="btn-square btn-square-gray">
          <ArrowLeft />
        </button>
        <button className="btn-square btn-square-gray">
          <ArrowRight />
        </button>
        <button className="btn-square btn-square-text-blue">
          <Video />
        </button>
      </div>
    </div>
  )
}
