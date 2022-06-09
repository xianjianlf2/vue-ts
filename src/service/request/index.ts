import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { MXRequestInterceptors, MXRequestConfig } from './type'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
import { ElLoading } from 'element-plus'

const DEFAULT_LOADING = true

class MXRequest {
  instance: AxiosInstance
  interceptors?: MXRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: MXRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)

    // 保存基本信息
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器: 请求成功拦截')

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器: 请求失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // 将loading移除
        this.loading?.close()

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败~, 错误信息')
        } else {
          return data
        }
      },
      (err) => {
        // 将loading移除
        this.loading?.close()

        // 例子: 判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404的错误~')
        }
        return err
      }
    )
  }

  request<T = any>(config: MXRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 判断是否需要显示loading
      if (!config.showLoading as boolean) {
        this.showLoading = !config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING

          // 将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          // 将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: MXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: MXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: MXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: MXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}
export default MXRequest
