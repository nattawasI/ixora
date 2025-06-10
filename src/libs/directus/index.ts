import 'server-only'

import { createDirectus, rest, staticToken } from '@directus/sdk'

// ตรวจสอบว่า environment variables ถูกตั้งค่าหรือไม่
if (!process.env.NEXT_PUBLIC_DIRECTUS_URL) {
  throw new Error('NEXT_PUBLIC_DIRECTUS_URL is not defined in environment variables.')
}
if (!process.env.NEXT_PUBLIC_DIRECTUS_API_KEY) {
  throw new Error('NEXT_PUBLIC_DIRECTUS_API_KEY is not defined in environment variables.')
}

// สร้าง Directus Client instance
// ใช้ staticToken เพื่อยืนยันตัวตน
// `process.env.NEXT_PUBLIC_DIRECTUS_URL` จะเข้าถึงได้เฉพาะฝั่ง server เท่านั้น
const directus = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL)
  .with(
    rest({
      onRequest: (opts) => ({ ...opts, cache: 'no-store' }),
    }),
  )
  .with(staticToken(process.env.NEXT_PUBLIC_DIRECTUS_API_KEY))

export { directus }
