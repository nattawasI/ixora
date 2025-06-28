import { CategorySlider } from './category/slider'

const SectionWhatWeDo = () => {
  return (
    <div className="about-page-container space-y-16 overflow-hidden pt-15 pb-4">
      <div className="c-container-sm">
        <div className="grid grid-cols-12 gap-2.5">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="typo-title-2 font-bold">WHAT WE DO</h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <p className="about-excerpt">
              We are dedicated to exploring the limitless possibilities of landscape architectural design, crafting
              spaces that seamlessly integrate the beauty of nature with human needs.
            </p>
          </div>
        </div>
      </div>

      <CategorySlider />
    </div>
  )
}

export { SectionWhatWeDo }
