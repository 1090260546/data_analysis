import React from 'react'

import { LayerDraggable } from './Draggable'
import { LayerResizable } from './Resizable'
import LayerBox from './Content/LayerBox'
// @TODO add contextmenu to Layer
// import LayerContextMenu from './ContextMenu/LayerContextMenu'
import LayerTool from './Content/LayerTool'
import LayerTooltip from './Content/LayerTooltip'
import LayerCore from './LayerCore'

const LayerItem: React.FC = () => (
  // <LayerContextMenu>
  <LayerDraggable>
    <LayerResizable>
      <LayerBox>
        <LayerTool />
        <LayerTooltip />
        <LayerCore />
      </LayerBox>
    </LayerResizable>
  </LayerDraggable>
  // </LayerContextMenu>
)

export default LayerItem
