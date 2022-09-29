import React, { useContext, useCallback, MouseEvent } from 'react'

import { Tooltip, Icon } from 'antd'

import { LayerContext, LayerListContext } from '../util'

const LayerTool: React.FC = () => {
  const { editWidget } = useContext(LayerListContext)
  const {
    layer: { widgetId }
  } = useContext(LayerContext)
  if (!widgetId) {
    return null
  }
  const edit = useCallback(() => {
    editWidget(widgetId)
  }, [editWidget, widgetId])

  const stopPPG = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }, [])

  return (
    <div className="display-slide-layer-tools" onMouseDown={stopPPG}>
      <Tooltip title="编辑">
        <Icon type="edit" onClick={edit} />
      </Tooltip>
    </div>
  )
}

export default LayerTool
