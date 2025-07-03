export const overLayScrollToTop = () => {
  const overlayElement = document.getElementById('page-dialog-overlay')
  if (!overlayElement) return
  overlayElement.scrollTo({ top: 0 })
}
