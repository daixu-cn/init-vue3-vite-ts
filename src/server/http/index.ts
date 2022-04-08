import axios from "axios"
import { AxiosInstance, AxiosRequestConfig } from "axios"

class Http {
  instance: AxiosInstance // axios的实例将被保存到这里
  constructor(config: AxiosRequestConfig) {
    // 构造器里的config包括baseURL，timeout等
    this.instance = axios.create(config) //创建axios实例
    //实例中的请求拦截器
    this.instance.interceptors.request.use(
      (config: any) => {
        const token = localStorage.getItem("token")
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    //实例中的响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        return response.data
      },
      (error) => {
        if (error && error.response) {
          switch (error.response.status) {
            case 400:
              error.message = "请求错误"
              break
            case 401:
              error.message = "未授权，请登录"
              break
            case 403:
              error.message = "拒绝访问"
              break
            case 404:
              error.message = `请求地址出错: ${error.response.config.url}`
              break
            case 408:
              error.message = "请求超时"
              break
            case 500:
              error.message = "服务器内部错误"
              break
            case 501:
              error.message = "服务未实现"
              break
            case 502:
              error.message = "网关错误"
              break
            case 503:
              error.message = "服务不可用"
              break
            case 504:
              error.message = "网关超时"
              break
            case 505:
              error.message = "HTTP版本不受支持"
              break
            default:
              break
          }
        }
        return Promise.reject(error)
      }
    )
  }
  request<T>(config: AxiosRequestConfig): Promise<T> {
    //再次封装request方法
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res) //将结果返回出去
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }

  get<T = any>(
    url: string,
    params: any = {},
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    return this.request<T>({ url, params, ...config, method: "GET" })
  }

  post<T = any>(
    url: string,
    data: any = {},
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    return this.request<T>({ url, data, ...config, method: "POST" })
  }

  delete<T = any>(
    url: string,
    params: any = {},
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    return this.request<T>({ url, params, ...config, method: "DELETE" })
  }

  patch<T = any>(
    url: string,
    data: any = {},
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    return this.request<T>({ url, data, ...config, method: "PATCH" })
  }

  put<T = any>(
    url: string,
    data: any = {},
    config: AxiosRequestConfig = {}
  ): Promise<T> {
    return this.request<T>({ url, data, ...config, method: "PATCH" })
  }
}
export default Http
