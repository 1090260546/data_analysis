import slide from 'assets/json/slideSettings/slide.json'

import { ISlideParams } from 'containers/Viz/types'
import { ILayerParams } from './types'

export { computeEditorBaselines } from './Container/Slide/util'
export { setLayersAlignment } from './Setting/Alignment/util'

import { GraphTypes, SecondaryGraphTypes, slideSettings } from './constants'

export function getDefaultSlideParams() {
  const params = (slide as any).params
  const defaultSlideParams = {}
  params.forEach((param) => {
    param.items.forEach((item) => {
      defaultSlideParams[item.name] = item.default || null
    })
  })
  return defaultSlideParams as ISlideParams
}

export function getDefaultLayerSetting(
  graphType: GraphTypes,
  secondaryGraphType?: SecondaryGraphTypes
) {
  const defaultSetting = {}
  const type = secondaryGraphType || graphType
  const setting = slideSettings[type]
  if (!setting) {
    return defaultSetting as ILayerParams
  }
  setting.params.forEach((param) => {
    param.items.forEach((item) => {
      defaultSetting[item.name] = item.default || null
    })
  })
  return defaultSetting as ILayerParams
}

export const captureVideosWithImages = (canvasDom) => {
  const canvas = canvasDom || document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const videos = document.querySelectorAll('video')
  Array.prototype.forEach.call(videos, (v) => {
    if (!v.src) {
      return
    }

    try {
      const { videoWidth, videoHeight } = v
      canvas.width = videoWidth
      canvas.height = videoHeight
      ctx.fillRect(0, 0, videoWidth, videoHeight)
      ctx.drawImage(v, 0, 0, videoWidth, videoHeight)
      v.style.backgroundImage = `url(${canvas.toDataURL()})`
      v.style.backgroundSize = 'cover'
      console.log('v.style: ', v.style)
      ctx.clearRect(0, 0, videoWidth, videoHeight)
    } catch (e) {
      console.log('e: ', e)
      return
    }
  })
}

