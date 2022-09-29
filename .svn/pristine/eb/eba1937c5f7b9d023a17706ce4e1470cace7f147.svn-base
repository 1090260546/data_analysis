import React, { useContext, useCallback } from 'react'
import { ContainerContext } from '../../Container/ContainerContext'
import { LayerListContext, LayerContext } from '../util'

import { DraggableCore, DraggableEventHandler } from 'react-draggable'
import { DraggableProxy } from './DraggableProxy'
import { DeltaPosition } from '../types'
import { DragTriggerTypes } from 'app/containers/Display/constants'

// @FIX when update react-draggble in next versions
// to fix react-draggble@4.2.0 DraggableCore delta param in float value when scale is not 1
const adjustDelta = (deltaX: number, deltaY: number): DeltaPosition => ({
  deltaX: Math.round(deltaX),
  deltaY: Math.round(deltaY)
})

const LayerDraggable: React.FC = (props) => {
  const { scale, grid } = useContext(ContainerContext)
  const { onDrag } = useContext(LayerListContext)
  const {
    layer: { id: layerId }, operationInfo: { editing }
  } = useContext(LayerContext)

  const start: DraggableEventHandler = useCallback((e, data) => {
    e.stopPropagation()
    if (e.target === data.node.lastElementChild) {
      return false
    }
    if (
      typeof (e as MouseEvent).button === 'number' &&
      (e as MouseEvent).button !== 0
    ) {
      return false
    }
  }, [])

  const drag: DraggableEventHandler = useCallback(
    (e, { deltaX, deltaY }) => {
      e.stopPropagation()
      const eventTrigger = e.type as DragTriggerTypes
      onDrag(layerId, adjustDelta(deltaX, deltaY), eventTrigger)
    },
    [layerId, onDrag]
  )

  const stop: DraggableEventHandler = useCallback(
    (e, { deltaX, deltaY }) => {
      e.stopPropagation()
      const eventTrigger = e.type as DragTriggerTypes
      onDrag(layerId, adjustDelta(deltaX, deltaY), eventTrigger, true)
    },
    [layerId, onDrag]
  )

  return (
    <DraggableCore
      allowAnyClick
      grid={grid}
      scale={scale[0]}
      onStart={start}
      onStop={stop}
      onDrag={drag}
      handle=".display-slide-layer"
      disabled ={editing}
    >
      <DraggableProxy>{props.children}</DraggableProxy>
    </DraggableCore>
  )
}

export default LayerDraggable
