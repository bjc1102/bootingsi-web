import React from 'react'
import type { AuthContextType } from '@/types/auth'
import { findAccessToken, findRefreshToken } from '@/utils/token'
import useUpdateToken from './queries/useUpdateToken'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AuthContext = React.createContext<AuthContextType>(null!)

export function useAuth() {
  return React.useContext(AuthContext)
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isToken, setIsToken] = React.useState(false)
  const { mutate: updateToken } = useUpdateToken(() => setIsToken(true))

  React.useEffect(() => {
    const accessToken = findAccessToken()
    if (accessToken) return setIsToken(true)
    const refreshToken = findRefreshToken()
    if (refreshToken) return updateToken()
  }, [updateToken])

  const value = {
    isToken,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
