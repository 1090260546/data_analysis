import React, { useContext, useMemo } from 'react'

import { LayerContext } from '../util'
import { SecondaryGraphTypes } from '../../Setting'
import { useSelector } from 'react-redux'
import { makeSelectCurrentOperateItemParams } from 'app/containers/Display/selectors'

const LayerTooltip: React.FC = () => {
  const { operationInfo, layer } = useContext(LayerContext)

  const { resizing, dragging } = operationInfo

  const { id: layerId, subType } = layer

  const operateItemParams = useSelector(makeSelectCurrentOperateItemParams())

  const params = useMemo(
    () =>
      dragging
        ? operateItemParams.find((_) => _.id === layerId)?.params
        : layer.params,
    [dragging, operateItemParams, layer.params]
  )

  const labelText = useMemo(
    (): boolean => subType === SecondaryGraphTypes.Label,
    [subType]
  )

  const { positionX, positionY, width, height } = params

  let tooltip: string
  if (resizing) {
    tooltip = !labelText && `宽度：${width}px，高度：${height}px`
  } else if (dragging) {
    tooltip = `x：${positionX}px，y：${positionY}px`
  }
  return <div className="display-slide-layer-tooltips">{tooltip}</div>
}

export default LayerTooltip
