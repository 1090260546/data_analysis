import React from 'react'
import { Card } from 'antd'

import CommandList from './CommandList'
import { LayerRadioGroup, LayerRadio } from './LayerRadio'
import { LayerOperations } from '../../constants'
import { LayerBase } from '../../types'
import { LayerSelectionInfo } from './types'

interface ILayerListProps {
  layers: LayerBase[]
  selection: LayerSelectionInfo
  onCommand: (operation: LayerOperations) => void
  onSelectionChange: (
    layerId: number,
    checked: boolean,
    exclusive: boolean
  ) => void
}

const LayerList: React.FC<ILayerListProps> = (props) => {
  const { layers, selection, onCommand, onSelectionChange } = props

  return (
    <Card
      className="display-layer-list"
      size="small"
      title={
        <CommandList className="display-layer-command" onCommand={onCommand} />
      }
    >
      <LayerRadioGroup>
        {layers.map((layer) => (
          <LayerRadio
            key={layer.id}
            id={layer.id}
            checked={selection[layer.id].selected}
            onChange={onSelectionChange}
          >
            {layer.name}
          </LayerRadio>
        ))}
      </LayerRadioGroup>
    </Card>
  )
}

export default React.memo(LayerList)
