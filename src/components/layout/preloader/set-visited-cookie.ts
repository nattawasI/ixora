'use server'

import { cookies } from 'next/headers'

export async function setVisitedCookie() {
  const cookieStore = await cookies()

  cookieStore.set('hasVisited', 'true', {
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })
}
