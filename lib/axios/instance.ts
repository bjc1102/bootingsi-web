import { ClipType } from '@/types/clip'
import { parsingAuthorization } from '@/utils/token'
import { getCookie } from 'cookies-next'
import { instance, auth, baseURL } from '.'

const authAPI = {
  login: async () => {
    location.href = `${baseURL}auth/google/login`
  },
  setRefreshToken: async (): Promise<boolean> => {
    const refreshToken = getCookie('refresh-token')

    const result = await auth.post(
      `${baseURL}auth/refresh`,
      {},
      {
        headers: {
          Authorization: parsingAuthorization(refreshToken),
        },
      }
    )
    return result.status === 201
  },
}

const clipAPI = {
  setClip: async (url: string): Promise<ClipType> => {
    const result = await instance.post('sites/set/clip', { siteURL: url })
    return result.data
  },
  getClips: async (): Promise<ClipType[]> => {
    const result = await instance.get('sites/get/clips')
    return result.data
  },
  deleteClip: async (id: number): Promise<null> => {
    const result = await instance.delete(`sites/delete/clip/${id}`)
    return result.data
  },
  updateMarkClip: async (id: number): Promise<ClipType> => {
    const result = await instance.put(`sites/update/mark/${id}`)
    return result.data
  },
}

export { clipAPI, authAPI }
