import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { useAuth } from './AuthProvider'
import SpinnerLayout from '@/components/Layout/SpinnerLayout'

const withAuth = (Component: NextPage | React.FC, LoginComponent: React.FC) => {
  const Auth = () => {
    const auth = useAuth()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      //마운트 됐을 때, auth.isToken이 수정되었을 때
      if (!auth.isToken) setIsLoading(false)
    }, [auth.isToken])
    if (isLoading) return <SpinnerLayout />
    return auth.isToken ? <Component /> : <LoginComponent />
  }

  return Auth
}

export default withAuth
