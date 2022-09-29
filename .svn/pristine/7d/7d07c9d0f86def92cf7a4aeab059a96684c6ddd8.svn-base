import React from 'react'
import { LayerListContextValue, LayerContextValue } from './types'

export const LayerListContext = React.createContext<LayerListContextValue>({
  currentDisplayWidgets: {},
  editWidget: () => {},
  getWidgetViewModel: () => null,
  getChartData: () => {},
  onDrag: () => {},
  onResize: () => {},
  onSelectionChange: () => {},
  onEditLabelChange: () => {}
})

export const LayerContext = React.createContext<LayerContextValue>({
  layer: null,
  layerInfo: null,
  operationInfo: {
    dragging: false,
    resizing: false,
    selected: false,
    editing: false
  }
})
