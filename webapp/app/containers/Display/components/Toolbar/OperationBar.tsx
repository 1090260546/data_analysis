import React, { useContext, useCallback } from 'react'

import { Button, Icon } from 'antd'
const ButtonGroup = Button.Group

import { DisplayToolbarContext } from './util'
import { LayerOperations } from '../constants'

interface IOperationBarProps {
  onOperate: (operation: LayerOperations) => void
}

const OperationBar: React.FC<IOperationBarProps> = (props) => {
  const { onOperate } = props
  const { size, comment } = useContext(DisplayToolbarContext)

  const copyLayers = useCallback(() => {
    onOperate(LayerOperations.Copy)
  }, [onOperate])

  const pasteLayers = useCallback(() => {
    onOperate(LayerOperations.Paste)
  }, [onOperate])

  return (
    <>
      <ButtonGroup size={size}>
        <Button type="ghost" onClick={copyLayers}>
          <Icon type="copy" />
          {comment && '复制'}
        </Button>
        <Button type="ghost" onClick={pasteLayers}>
          <Icon type="snippets" />
          {comment && '粘贴'}
        </Button>
      </ButtonGroup>
      {/* @TODO layers undo/redo */}
      {/* <ButtonGroup size={size}>
        <Button type="ghost">
          <Icon type="undo" />
          {comment && '撤销'}
        </Button>
        <Button type="ghost">
          <Icon type="redo" />
          {comment && '恢复'}
        </Button>
      </ButtonGroup> */}
    </>
  )
}
export default OperationBar
