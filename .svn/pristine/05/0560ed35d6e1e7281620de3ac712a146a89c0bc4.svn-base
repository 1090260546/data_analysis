import React, { useContext, useCallback } from 'react'

import { Button, Icon } from 'antd'
const ButtonGroup = Button.Group

import { DisplayToolbarContext } from './util'

interface IToolbarSettingProps {
  onSetting: () => void
}

const Setting: React.FC<IToolbarSettingProps> = (props) => {
  const { size, comment } = useContext(DisplayToolbarContext)
  const { onSetting } = props
  return (
    <ButtonGroup size={size}>
      <Button type="ghost" onClick={onSetting}>
        <Icon type="setting" /> {comment && '大屏设置'}
      </Button>
    </ButtonGroup>
  )
}
export default Setting
