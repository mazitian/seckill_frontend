import { hyRequest1 } from '..'
import type { IUser } from '@/types'

export function userRegisterRequest(user: IUser) {
  return hyRequest1.post({
    url: '/api/user/register',
    data: user
  })
}

export function getCodeRequest() {
  return hyRequest1.get({
    url: '/api/user/code'
  })
}
