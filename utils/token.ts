import { refreshToken, token } from 'constant/const'
import { CookieValueTypes, getCookie, deleteCookie } from 'cookies-next'

export const parsingAuthorization = (token: CookieValueTypes) => {
  return `Bearer ${token}`
}

export const findAccessToken = () => {
  return getCookie(token)
}

export const findRefreshToken = () => {
  const token = getCookie(refreshToken)
  return token
}

export const removeAccessToken = () => {
  return deleteCookie(token)
}

export const removeRefreshToken = () => {
  return deleteCookie(refreshToken)
}
