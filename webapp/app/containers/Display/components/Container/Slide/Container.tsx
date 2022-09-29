import React from 'react'
import { SlideContext } from './SlideContext'

import { ISlideParams } from 'containers/Viz/types'

interface ISlideContainerProps {
  slideId: number
  slideParams: ISlideParams
}

const SlideContainer: React.FC<ISlideContainerProps> = (props) => {
  const { slideId, slideParams } = props

  return (
    <SlideContext.Provider value={{ slideId, slideParams }}>
      {props.children}
    </SlideContext.Provider>
  )
}

export default SlideContainer
