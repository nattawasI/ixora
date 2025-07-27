import { MotionPageFade } from '@/components/common/motion'
import { CursorProvider } from '@/components/common/cursor-provider'

export default function TestCursor() {
  return (
    <MotionPageFade>
      <CursorProvider>
        <div className="c-container-sm py-20">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="col-span-1" data-cursor-target>
                <div className="aspect-square bg-amber-400 p-5">
                  <div className="flex size-full items-center justify-center bg-amber-300 text-center font-bold">
                    <p>Card {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CursorProvider>
    </MotionPageFade>
  )
}
