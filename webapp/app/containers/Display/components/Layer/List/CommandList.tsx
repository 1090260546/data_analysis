import React, { useCallback } from 'react'
import classnames from 'classnames'

import { Button, Tooltip } from 'antd'
const ButtonGroup = Button.Group
import IconFont from 'components/IconFont'

import { LayerOperations, LayerCommands } from '../../constants'

interface ILayerCommandProps {
  operation: LayerOperations
  icon: string
  title: string
  onClick: (operation: LayerOperations) => void
}

const LayerCommand: React.FC<ILayerCommandProps> = (props) => {
  const { operation, icon, title, onClick } = props

  const click = useCallback(() => {
    onClick(operation)
  }, [operation, onClick])

  return (
    <Tooltip placement="bottom" title={title}>
      <Button type="ghost" onClick={click}>
        <IconFont type={icon} />
      </Button>
    </Tooltip>
  )
}

interface ILayerCommandListProps {
  className?: string
  onCommand: (operation: LayerOperations) => void
}

const LayerCommandList: React.FC<ILayerCommandListProps> = (props) => {
  const { onCommand, className } = props
  const cls = classnames({ [className]: !!className })
  return (
    <ButtonGroup className={cls} size="small">
      {LayerCommands.map((cmd) => (
        <LayerCommand key={cmd.operation} {...cmd} onClick={onCommand} />
      ))}
    </ButtonGroup>
  )
}

export default React.memo(LayerCommandList)
