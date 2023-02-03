import { defineStore } from 'pinia'
import { allGoodListRequest } from '../../service/main/admin'
import router from '@/router'

interface IAllGoodStore {
  seckillGoodResponses: any[]
}

const useAllGoodStore = defineStore('all-good', {
  state: (): IAllGoodStore => ({
    seckillGoodResponses: []
  }),
  actions: {
    async getAllGoodListAction() {
      const allActivityListResult = await allGoodListRequest()
      this.seckillGoodResponses =
        allActivityListResult.data.seckillGoodResponses
      router.push('/main/admin/all-good')
    }
  }
})

export default useAllGoodStore
