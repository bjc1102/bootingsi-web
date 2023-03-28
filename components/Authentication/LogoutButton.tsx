import React from 'react'
import { removeAccessToken, removeRefreshToken } from '@/utils/token'

const LogoutButton = () => {
  const handleLogout = () => {
    removeAccessToken()
    removeRefreshToken()
    // location.replace('/')
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
