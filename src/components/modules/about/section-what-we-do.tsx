import { CategorySlider } from './category/slider'

const SlideWhatWeDo = () => {
  return (
    <div className="flex h-full items-center pb-[6.25rem]">
      <div className="c-container space-y-16">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <h2 className="typo-title-2 font-bold">WHAT WE DO</h2>
          </div>
          <div className="col-span-8">
            <p className="typo-title-3">
              We are dedicated to exploring the limitless possibilities of landscape architectural design, crafting
              spaces that seamlessly integrate the beauty of nature with human needs.
            </p>
          </div>
        </div>

        <CategorySlider />
      </div>
    </div>
  )
}

export { SlideWhatWeDo }
