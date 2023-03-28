import React from 'react'
import { removeAccessToken, removeRefreshToken } from '@/utils/token'
import { useAuth } from '@/hooks/Auth/AuthProvider'

const LogoutButton = () => {
  const auth = useAuth()
  const handleLogout = () => {
    removeAccessToken()
    removeRefreshToken()
    auth.handleTokenChange(false)
  }
  return (
    <button
      className="cursor-pointer text-lg font-semibold"
      onClick={handleLogout}
    >
      Logout
    </button>
  )
}

export default LogoutButton
