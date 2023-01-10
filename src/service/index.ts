import { BASE_URL_1, TIME_OUT } from './config'
import HYRequest from './request'

const hyRequest1 = new HYRequest({
  baseURL: BASE_URL_1,
  timeout: TIME_OUT
})

export default hyRequest1
