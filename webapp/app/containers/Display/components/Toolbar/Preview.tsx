import React, { useContext } from 'react'

import { Button } from 'antd'
const ButtonGroup = Button.Group
import IconFont from 'components/IconFont'

import { DisplayToolbarContext } from './util'

interface IToolbarPreviewProps {
  onPreview: () => void
}

const Preview: React.FC<IToolbarPreviewProps> = (props) => {
  const { onPreview } = props
  const { size, comment } = useContext(DisplayToolbarContext)
  return (
    <ButtonGroup size={size}>
      <Button type="ghost" onClick={onPreview}>
        <IconFont type="icon-preview" />
        {comment && '预览'}
      </Button>
    </ButtonGroup>
  )
}
export default Preview
