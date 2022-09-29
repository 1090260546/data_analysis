import React, { useCallback } from 'react'
import { Tooltip } from 'antd'
import IconFont from 'components/IconFont'

import { LayerAlignmentTypes } from './constants'
import { LayerAlignmentItemConfig } from './types'

interface IAlignmentItemProps extends LayerAlignmentItemConfig {
  onClick: (alignmentType: LayerAlignmentTypes) => void
}

const AlignmentItem: React.FC<IAlignmentItemProps> = (props) => {
  const { type, title, icon, onClick } = props

  const setAlignment = useCallback(() => {
    onClick(type)
  }, [type, onClick])

  return (
    <Tooltip placement="bottom" title={title}>
      <IconFont onClick={setAlignment} type={icon} />
    </Tooltip>
  )
}

export default AlignmentItem
