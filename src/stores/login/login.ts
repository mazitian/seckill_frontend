import { defineStore } from 'pinia'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'
import type { IPhone } from '@/types'
import { phoneLoginRequest, getCodeRequest } from '../../service/login/index'

interface ILoginStore {
  token: string
  id: number
  status: number
  nickName: string
  headImg: string
  code: number
}

const useLoginStore = defineStore('login', {
  state: (): ILoginStore => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    id: -1,
    status: -1,
    nickName: '',
    headImg: '',
    code: -1
  }),
  actions: {
    async loginPhoneAction(phone: IPhone) {
      const loginResult = await phoneLoginRequest(phone)
      this.token = loginResult.data.token
      this.id = loginResult.data.id
      this.headImg = loginResult.data.headImg
      this.nickName = loginResult.data.nickName
      this.status = loginResult.data.status
      localCache.setCache(LOGIN_TOKEN, this.token)
      if (this.code !== -1) {
        router.push('/main')
      } else {
        alert('请输入手机号和验证码！')
      }
    },
    async getCodeAction() {
      const codeResult = await getCodeRequest()
      this.code = codeResult.data.code
    }
  }
})

export default useLoginStore
