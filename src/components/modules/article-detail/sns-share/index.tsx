import { cn } from '@/libs/utils/cn'
import { ButtonSquare, buttonSquareVariants } from '@/components/ui/button-square'
import { Facebook, Line, X, Pinterest, CopyLink, Email } from '@/components/ui/icons'

const SnsShare = () => {
  return (
    <div
      className={cn(
        'flex',
        'max-lg:flex-col max-lg:items-center max-lg:gap-y-2.5',
        'lg:flex-row lg:justify-between lg:gap-x-4 lg:py-7',
      )}
    >
      <p className="typo-body-2 text-gray">Share this article</p>
    </div>
  )
}

export { SnsShare }
