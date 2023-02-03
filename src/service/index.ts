import { BASE_URL_1, BASE_URL_2, BASE_URL_3, TIME_OUT } from './config'
import HYRequest from './request'

export const hyRequest1 = new HYRequest({
  baseURL: BASE_URL_1,
  timeout: TIME_OUT
})

export const hyRequest2 = new HYRequest({
  baseURL: BASE_URL_2,
  timeout: TIME_OUT
})

export const hyRequest3 = new HYRequest({
  baseURL: BASE_URL_3,
  timeout: TIME_OUT
})
