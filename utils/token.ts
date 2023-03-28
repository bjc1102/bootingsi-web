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
  if (findAccessToken()) {
    const pastDate = new Date(0)
    deleteCookie(token, { expires: pastDate })
  }
}

export const removeRefreshToken = () => {
  if (findRefreshToken()) {
    const pastDate = new Date(0)
    deleteCookie(refreshToken, { expires: pastDate })
  }
}
