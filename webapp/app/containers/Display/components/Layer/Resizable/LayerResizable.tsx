import React, { useContext, useState, useEffect, useCallback, useMemo } from 'react'
import {
  ContainerContext,
  SlideContext
} from 'containers/Display/components/Container'
import { LayerListContext, LayerContext } from '../util'
import { SecondaryGraphTypes } from '../../Setting'

import { Resizable, ResizeCallbackData } from 'libs/react-resizable'
import { DeltaSize } from '../types'

const LayerResizable: React.FC = (props) => {
  const { scale, grid } = useContext(ContainerContext)
  const { slideParams } = useContext(SlideContext)

  const { onResize } = useContext(LayerListContext)
  const {
    layer: { id: layerId, params, subType }
  } = useContext(LayerContext)

  const { width: slideWidth, height: slideHeight } = slideParams
  const { width, height, positionX, positionY } = params
  const maxConstraints: [number, number] = [
    slideWidth - positionX,
    slideHeight - positionY
  ]

  const resizeProps = useMemo(
    (): Array<'s' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne'> =>
    subType === SecondaryGraphTypes.Label
        ? ['w', 'e']
        : ['se'],
    [subType]
  )

  const resize = useCallback(
    (e: React.SyntheticEvent, { size }: ResizeCallbackData) => {
      e.stopPropagation()
      const { width: newWidth, height: newHeight } = size
      onResize(layerId, { deltaWidth: newWidth - width, deltaHeight: newHeight - height })
    },
    [width, height, layerId, onResize]
  )

  const resizeStop = useCallback(
    (e: React.SyntheticEvent, { size }: ResizeCallbackData) => {
      e.stopPropagation()
      const { width: newWidth, height: newHeight } = size
      const deltaSize: DeltaSize = { deltaWidth: newWidth - width, deltaHeight: newHeight - height }
      onResize(layerId, deltaSize, true)
    },
    [layerId, width, height, onResize]
  )


  return (
    <Resizable
      width={width}
      height={height}
      scale={scale[0]}
      onResize={resize}
      onResizeStop={resizeStop}
      draggableOpts={{ grid }}
      minConstraints={[50, 50]}
      maxConstraints={maxConstraints}
      handleSize={[20, 20]}
      resizeHandles={resizeProps}
    >
      {props.children as React.ReactElement}
    </Resizable>
  )
}

export default LayerResizable
