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
  const { mutate: updateToken } = useUpdateToken()

  React.useEffect(() => {
    if (!!findAccessToken()) return setIsToken(true)
    if (!!findRefreshToken()) {
      updateToken(void 1, {
        onSuccess() {
          setIsToken(true)
        },
      })
    }
  }, [updateToken])

  const value = {
    isToken,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
