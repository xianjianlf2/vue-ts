import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface MXRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface MXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MXRequestInterceptors<T>
  showLoading?: boolean
}
