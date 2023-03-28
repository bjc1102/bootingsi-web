import React from 'react'

import ClipDeleteButton from '@/components/Card/ClipDeleteButton'
import sliceString from '@/utils/sliceString'
import { ClipType } from '@/types/clip'
import PlanetIcon from 'public/assets/PlanetIcon'

import validUrl from 'valid-url'
import StarIcon from 'public/assets/StarIcon'

interface ClipCardProps {
  clip: ClipType
}

const ClipCard = ({ clip }: ClipCardProps) => {
  const hoverRef = React.useRef<HTMLDivElement>(null)

  const openInNewTab = () => () => {
    window.open(clip.ogUrl, '_blank')?.focus
  }

  const checkFavicon = function (url: string) {
    if (!validUrl.isWebUri(url)) {
      return (
        <div className="w-5 h-5 [&>*]:fill-accentColor1">
          <PlanetIcon />
        </div>
      )
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={clip.favicon}
        alt="site-image"
        className="w-5 h-5 border-black object-cover rounded-full overflow-clip"
        style={{ fill: 'black' }}
      />
    )
  }

  return (
    <>
      <div
        onClick={openInNewTab()}
        ref={hoverRef}
        className="relative group w-full lg:max-w-7xl hover:cursor-pointer"
      >
        {clip.isFavorite && (
          <div className="absolute top-[8px] left-2 z-50 [&>*]:fill-yellow-300">
            <StarIcon />
          </div>
        )}
        <div className="absolute top-[-12px] right-[-12px] z-50 hidden group-hover:block">
          <ClipDeleteButton id={clip.id} />
        </div>
        <div
          style={{ backgroundImage: `url(${clip.ogImage})` }}
          className="relative group-hover:shadow-[inset_0_-55px_75px_-55px_rgba(0,0,0,1)] bg-primaryColor2 py-20 rounded-lg bg-no-repeat bg-center bg-cover"
        >
          {!validUrl.isWebUri(clip.ogImage) && (
            <div className="absoluteCenter [&>*]:fill-accentColor1 w-12 h-12">
              <PlanetIcon />
            </div>
          )}
        </div>
        <div className="flex gap-2 items-center pt-3">
          {checkFavicon(clip.favicon)}
          <h5 className="text-base font-semibold tracking-tight text-accentColor2 group-hover:text-gray-500">
            {sliceString(clip.ogTitle, 25)}
          </h5>
        </div>
        <span className="text-gray-500 group-hover:text-gray-700 text-sm">
          {sliceString(clip.ogDescription, 500)}
        </span>
      </div>
    </>
  )
}

export default ClipCard
