export const historyReplaceState = (pathname: string) => {
  const overlayElement = document.getElementById('page-dialog-overlay')

  // 1. จำ scroll position ปัจจุบันไว้
  const currentScroll = window.scrollY

  // 2. ปิด scroll ของ body และ html ชั่วคราว
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'

  // 3. เปลี่ยน URL
  history.replaceState(null, '', pathname)

  // 4. รอให้ browser เปลี่ยนเสร็จ แล้ว scroll กลับ และเปิด scroll คืน
  requestAnimationFrame(() => {
    window.scrollTo({ top: currentScroll })
    overlayElement?.scrollTo({ top: 0 }) /** reset scroll ใน modal content หลังจากที่ url เปลี่ยน */

    // 5. เปิด scroll คืน
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  })
}
