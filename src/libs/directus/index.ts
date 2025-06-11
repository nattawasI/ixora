import 'server-only'

import { createDirectus, rest, staticToken } from '@directus/sdk'

// ตรวจสอบว่า environment variables ถูกตั้งค่าหรือไม่
if (!process.env.DIRECTUS_URL) {
  throw new Error('DIRECTUS_URL is not defined in environment variables.')
}
if (!process.env.DIRECTUS_API_KEY) {
  throw new Error('DIRECTUS_API_KEY is not defined in environment variables.')
}

// สร้าง Directus Client instance
// ใช้ staticToken เพื่อยืนยันตัวตน
// `process.env.DIRECTUS_URL` จะเข้าถึงได้เฉพาะฝั่ง server เท่านั้น
const directus = createDirectus(process.env.DIRECTUS_URL)
  .with(
    rest({
      onRequest: (opts) => ({ ...opts, cache: 'no-store' }),
    }),
  )
  .with(staticToken(process.env.DIRECTUS_API_KEY))

export { directus }
