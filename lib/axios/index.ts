import { findRefreshToken, parsingAuthorization } from '@/utils/token'
import axios, { AxiosRequestHeaders } from 'axios'
import { getCookie } from 'cookies-next'
import { authAPI } from './instance'

export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/api/'
    : 'https://clip-planet.site/api/'

export const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  withCredentials: true,
})

export const auth = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  withCredentials: true,
})

interface HeaderType extends AxiosRequestHeaders {
  ['Content-Type']: string
  Authorization: string
}

// 토큰 부착하기
instance.interceptors.request.use(
  (config) => {
    const headers = config.headers as HeaderType
    const token = getCookie('access-token') ?? ''

    if (token) {
      headers['Content-Type'] = 'application/json'
      headers.Authorization = parsingAuthorization(token)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const refreshToken = findRefreshToken()
    if (error.response.status === 401 && refreshToken) {
      await authAPI.setRefreshToken()
    }

    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data)
    }
    return Promise.reject(error)
  }
)
