import React, { useContext } from 'react'

import { LayerContext } from '../../util'

import { VIDEO_REG, IFRAME_REG, MEDIA_SRC_REG } from './constants'

const Video: React.FC = () => {
  const {
    layer: { params }
  } = useContext(LayerContext)
  const { src, controlSetting, start, end } = params
  const setting = controlSetting.reduce((acc, key) => {
    let dataKey = key
    if (key === 'autoplay') {
      // support revealjs data-autoplay
      dataKey = 'data-autoplay'
    }
    return {
      ...acc,
      [dataKey]: true
    }
  }, {})

  let srcWithParams = src

  const videoRegExp = src && VIDEO_REG.test(src)
  const iframeRegExp = src && IFRAME_REG.test(src)

  if (src && videoRegExp) {
    const startParams = `#t=${start || 0}`
    const endParams = end ? `,${end}` : ''
    srcWithParams = start
      ? `${srcWithParams}${startParams}`
      : `${srcWithParams}${endParams}`
  }

  if (src && iframeRegExp) {
    const iframeSrc = src.match(MEDIA_SRC_REG)
    srcWithParams = iframeRegExp ? `${iframeSrc[0]}&autoplay=true` : src
  }

  const mediaType = videoRegExp ? 'video' : 'iframe'

  switch (mediaType) {
    case 'video':
      return (
        <video src={srcWithParams} preload="auto" {...setting}>
          你的浏览器不支持 <code>video</code> 标签.
        </video>
      )
    default:
      return <iframe src={srcWithParams} frameBorder="0" allow="autoplay" />
  }
}

export default Video
