import { hyRequest1 } from '..'
import type { IPhone } from '@/types'

export function phoneLoginRequest(phone: IPhone) {
  return hyRequest1.post({
    url: '/api/user/login',
    data: phone
  })
}

export function getCodeRequest() {
  return hyRequest1.get({
    url: '/api/user/code'
  })
}
