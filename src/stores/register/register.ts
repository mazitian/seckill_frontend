import { defineStore } from 'pinia'

import type { IUser } from '@/types'
import { getCodeRequest, userRegisterRequest } from '@/service/register'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'

interface IRegisterState {
  token: string
  id: number
  headImg: string
  nickName: string
  status: number
  code: number
}

const useRegisterStore = defineStore('register', {
  state: (): IRegisterState => ({
    token: '',
    id: -1,
    headImg: '',
    nickName: '',
    status: -1,
    code: -1
  }),
  actions: {
    async registerUserAction(user: IUser) {
      // 1.注册帐号，获取token
      const registerResult = await userRegisterRequest(user)
      this.token = registerResult.data.token
      this.id = registerResult.data.id
      this.headImg = registerResult.data.headImg
      this.nickName = registerResult.data.nickName
      this.status = registerResult.data.status
      localCache.setCache(LOGIN_TOKEN, this.token)
      if (this.code !== -1) {
        router.push('/main')
      } else {
        alert('请输入手机号和验证码！')
      }
    },
    async getCodeAction() {
      // 2.获取MessageCode
      const codeResult = await getCodeRequest()
      this.code = codeResult.data.code
    }
  }
})

export default useRegisterStore
