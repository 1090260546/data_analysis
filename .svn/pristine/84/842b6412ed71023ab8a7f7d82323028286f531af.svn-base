import React, { useContext } from 'react'

import { Tooltip, Icon } from 'antd'
import { EditorContext } from '../context'

const Reset: React.FC = () => {
  const { clearTextFormat } = useContext(EditorContext)
  return (
    <Tooltip title="清除格式">
      <Icon type="close-circle" onClick={clearTextFormat} />
    </Tooltip>
  )
}

export default Reset
