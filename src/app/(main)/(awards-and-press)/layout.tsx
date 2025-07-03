import { AwardsAndPressNav } from '@/components/modules/awards-and-press/awards-and-press-nav'

export default function AwardsAndPressLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="c-container max-lg:pt-5">
      <AwardsAndPressNav className="mb-5 justify-center lg:hidden" />
      {children}
    </div>
  )
}
