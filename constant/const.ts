export const token = 'access-token' as const
export const refreshToken = 'refresh-token' as const
export const siteURL = 'siteURL'
export const domain =
  process.env.NODE_ENV === 'production' ? '.clip-planet.site' : 'localhost'
