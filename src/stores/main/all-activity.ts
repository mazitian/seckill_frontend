import { defineStore } from 'pinia'
import { allActivityListRequest } from '../../service/main/admin'
import router from '@/router'

interface IAllActivityStore {
  seckillActivitiesResponseList: any[]
}

const useAllActivityStore = defineStore('all-activity', {
  state: (): IAllActivityStore => ({
    seckillActivitiesResponseList: []
  }),
  actions: {
    async getAllActivityListAction() {
      const allActivityListResult = await allActivityListRequest()
      this.seckillActivitiesResponseList =
        allActivityListResult.data.seckillActivitiesResponseList
      router.push('/main/admin/all-activity')
    }
  }
})

export default useAllActivityStore
