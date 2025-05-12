/** libs */
import { useCallback } from 'react'

/** types */
import type { ReadonlyURLSearchParams } from 'next/navigation'

type UseQueryStringParamsType = Record<string, string | string[] | null | undefined>

const useQueryString = (searchParams: ReadonlyURLSearchParams) => {
  const createQueryString = useCallback(
    (paramsObj: UseQueryStringParamsType) => {
      const params = new URLSearchParams(searchParams.toString())

      Object.entries(paramsObj).forEach(([key, value]) => {
        if (value === null || value === undefined || value === '') {
          params.delete(key) // ลบ query parameter หาก value เป็น null, undefined หรือ ''
        } else if (Array.isArray(value)) {
          // หาก value เป็น array
          params.delete(key) // ลบ key ก่อน
          value.forEach((item) => {
            params.append(key, item) // เพิ่มค่าทีละตัว
          })
        } else {
          params.set(key, value) // ตั้งค่า key-value ทั่วไป
        }
      })

      return params.toString()
    },
    [searchParams],
  )

  return createQueryString
}

export { useQueryString }
