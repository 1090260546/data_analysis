import React, { useContext, useCallback } from 'react'

import { Button, Icon } from 'antd'
const ButtonGroup = Button.Group

import { DisplayToolbarContext } from './util'
import { GraphTypes } from '../constants'

interface IToolbarSlideProps {
  onAdd: (type: GraphTypes) => void
}

const Slide: React.FC<IToolbarSlideProps> = (props) => {
  const { size, comment } = useContext(DisplayToolbarContext)
  const { onAdd } = props
  const addSlide = useCallback(() => {
    onAdd(GraphTypes.Slide)
  }, [onAdd])
  return (
    <ButtonGroup size={size}>
      <Button type="ghost" onClick={addSlide}>
        <Icon type="plus" /> {comment && '添加大屏页'}
      </Button>
    </ButtonGroup>
  )
}
export default Slide
