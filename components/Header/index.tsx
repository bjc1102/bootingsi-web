import React from 'react'
import Logo from '@/components/Header/Logo'
import CreateClipForm from '@/components/Header/CreateClipForm'
import { useAuth } from '@/hooks/Auth/AuthProvider'
import LogoutButton from '../Authentication/LogoutButton'

const Header = () => {
  const auth = useAuth()

  return (
    <nav className="w-full border-gray-200 py-3 bg-gray-800">
      <div className="max-w-7xl mx-auto text-white flex flex-wrap justify-between items-center max-md:px-4">
        <Logo />
        {auth.isToken && <CreateClipForm />}
        <div className="flex gap-4 items-center">
          <span className="text-lg font-semibold">Docs</span>
          {auth.isToken && <LogoutButton />}
        </div>
      </div>
    </nav>
  )
}

export default Header
