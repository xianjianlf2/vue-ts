import MXRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'
import router from '@/router'
import { ElMessage } from 'element-plus'

const mxRequest = new MXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if (token) {
        // bug fixed (ts 类型警告 Forbidden non-null assertion.)
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`
        }
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败拦截')
      if (err.response.status === 401) {
        ElMessage({ message: '请先登录', type: 'success', center: true })
        localCache.deleteCache('token')
        const login = {
          path: '/login',
          query: { redirect: router.currentRoute.value.path }
        }
        return router.push(login)
      }
      return err
    }
  }
})

export default mxRequest
