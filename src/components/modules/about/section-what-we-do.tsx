import { CategorySlider } from './category-slider'

const SlideWhatWeDo = () => {
  return (
    <div>
      <div className="c-container">
        <h2 className="typo-title-2 font-bold">WHAT WE DO</h2>
        <p className="typo-title-3">
          We are dedicated to exploring the limitless possibilities of landscape architectural design, crafting spaces
          that seamlessly integrate the beauty of nature with human needs.
        </p>

        <CategorySlider />
      </div>
    </div>
  )
}

export { SlideWhatWeDo }
