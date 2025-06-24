import { CategorySlider } from './category/slider'

const SlideWhatWeDo = () => {
  return (
    <div className="c-container space-y-16 pt-15 pb-4">
      <div className="grid grid-cols-12 gap-2.5">
        <div className="col-span-12 lg:col-span-4">
          <h2 className="typo-title-2 font-bold">WHAT WE DO</h2>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <p className="typo-title-3">
            We are dedicated to exploring the limitless possibilities of landscape architectural design, crafting spaces
            that seamlessly integrate the beauty of nature with human needs.
          </p>
        </div>
      </div>

      <CategorySlider />
    </div>
  )
}

export { SlideWhatWeDo }
