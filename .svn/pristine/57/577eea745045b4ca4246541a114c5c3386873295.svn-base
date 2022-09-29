import produce from 'immer'
import { LayerAlignmentTypes } from './types'
import { ILayerFormed } from '../../types'

export const setLayersAlignment = (
  layers: ILayerFormed[],
  alignmentType: LayerAlignmentTypes
) => {
  if (!layers.length) {
    return []
  }

  const [minPosX, minPosY, rightX, bottomY] = layers.reduce(
    (
      [minX, minY, rightX, bottomY],
      { params: { positionX, positionY, width, height } }
    ) => [
      Math.min(minX, positionX),
      Math.min(minY, positionY),
      Math.max(positionX + width, rightX),
      Math.max(positionY + height, bottomY)
    ],
    [Infinity, Infinity, 0, 0]
  )

  const updateLayers = produce(layers, (draft) => {
    switch (alignmentType) {
      case LayerAlignmentTypes.Top:
        layers.forEach((l) => {
          l.params.positionY = minPosY
        })
        break
      case LayerAlignmentTypes.Left:
        layers.forEach((l) => {
          l.params.positionX = minPosX
        })
        break
      case LayerAlignmentTypes.Bottom:
        layers.forEach((l) => {
          l.params.positionY = bottomY - l.params.height
        })
        break
      case LayerAlignmentTypes.Right:
        layers.forEach((l) => {
          l.params.positionX = rightX - l.params.width
        })
        break
      case LayerAlignmentTypes.HorizontalCenter:
        const midPosX = (minPosX + rightX) / 2
        layers.forEach((l) => {
          l.params.positionX = midPosX - l.params.width / 2
        })
        break
      case LayerAlignmentTypes.VerticalCenter:
        const midPosY = (minPosY + bottomY) / 2
        layers.forEach((l) => {
          l.params.positionY = minPosY - l.params.height / 2
        })
        break
    }
  })

  return updateLayers
}
