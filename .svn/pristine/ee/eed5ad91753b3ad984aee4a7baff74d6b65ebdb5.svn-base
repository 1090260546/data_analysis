import React, { useCallback } from 'react'
import { Card } from 'antd'
import AlignmentItem from './AlignmentItem'

import { LayerAlignmentTypes } from './constants'

import { AlignmentGroups } from './constants'

import './Alignment.less'

interface ILayerAlignmentProps {
  onChange: (alignmentType: LayerAlignmentTypes) => void
}

const LayerAlignment: React.FC<ILayerAlignmentProps> = (props) => {
  const { onChange } = props

  const setAlignment = useCallback(
    (alignmentType: LayerAlignmentTypes) => {
      onChange(alignmentType)
    },
    [onChange]
  )

  return (
    <Card className="display-layer-align" title="图层对齐" size="small">
      {AlignmentGroups.map((group, idx) => (
        <div key={idx} className="display-layer-align-category">
          {group.map((props) => (
            <AlignmentItem key={props.type} {...props} onClick={setAlignment} />
          ))}
        </div>
      ))}
    </Card>
  )
}

export default React.memo(LayerAlignment)
