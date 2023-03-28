import React from 'react'
import PlanetIcon from 'public/assets/PlanetIcon'
import LoginButton from '@/components/Authentication/LoginButton'

const LoginLayout = () => {
  return (
    <div className="p-96">
      <div className="absoluteCenter flex flex-col justify-center items-center">
        <div className="w-12 h-12 [&>*]:fill-accentColor1">
          <PlanetIcon />
        </div>
        <strong className="block text-xl my-4 text-white">
          로그인이 필요한 서비스입니다.
        </strong>
        <div className="[&>*]:text-base">
          <LoginButton />
        </div>
      </div>
    </div>
  )
}

export default LoginLayout
