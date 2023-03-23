import React from 'react'
import SpinnerIcon from 'public/assets/\bSpinnerIcon'

const SpinnerLayout = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <SpinnerIcon />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default SpinnerLayout
