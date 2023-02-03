import { defineStore } from 'pinia'
import { activityListRequest } from '../../service/main/admin'
import router from '@/router'

const useActivityStore = defineStore('activity', {
  state: () => ({
    activityId: -1,
    activityName: '',
    activityDesc: '',
    activityStatus: -1,
    startTime: '',
    endTime: ''
  }),
  actions: {
    async getActivityListAction() {
      const activityListResult = await activityListRequest()
      this.activityId = activityListResult.data.activityId
      this.activityName = activityListResult.data.activityName
      this.activityDesc = activityListResult.data.activityDesc
      this.activityStatus = activityListResult.data.activityStatus
      this.startTime = activityListResult.data.startTime
      this.endTime = activityListResult.data.endTime
      router.push('/main/user/activity')
    }
  }
})

export default useActivityStore
