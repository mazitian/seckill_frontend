import hyRequest1 from '..'
import type { IUser } from '@/types'

export function userRegisterRequest(user: IUser) {
  return hyRequest1.post({
    url: 'user/register',
    data: user
  })
}

export function useCodeRequest() {
  return hyRequest1.get({
    url: '/user/code'
  })
}
