import { hyRequest2, hyRequest3 } from '../index'

export function allActivityListRequest() {
  return hyRequest2.get({
    url: '/api/activity/list'
  })
}

export function activityListRequest() {
  return hyRequest2.get({
    url: '/api/activity/list/online'
  })
}

export function allGoodListRequest() {
  return hyRequest3.get({
    url: '/api/good/list'
  })
}

// export function innerGoodListRequest() {
//   return hyRequest3.get({
//     url: `/api/good/${id}/list`
//   })
// }
