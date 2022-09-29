import React, { useContext } from 'react'

import { Button, Icon } from 'antd'
const ButtonGroup = Button.Group

import { DisplayToolbarContext } from './util'

interface IShareProps {
  onShare: () => void
}

const Share: React.FC<IShareProps> = (props) => {
  const { size, comment } = useContext(DisplayToolbarContext)

  return (
    <ButtonGroup size={size}>
      <Button type="ghost" onClick={props.onShare}>
        <Icon type="share-alt" />
        {comment && '分享'}
      </Button>
    </ButtonGroup>
  )
}
export default Share
