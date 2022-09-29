import React, { useMemo, useContext } from 'react'
import { useSelector } from 'react-redux'

import { makeSelectSlideLayerContextValue } from '../selectors'

import { LayerContext } from '../components/Layer'
import { SlideContext } from '../components/Container'

interface ISlideLayerProps {
  id: number
}

const SlideLayer: React.FC<ISlideLayerProps> = (props) => {
  const { id } = props
  const { slideId } = useContext(SlideContext)
  const selectSlideLayerContextValue = useMemo(
    makeSelectSlideLayerContextValue,
    []
  )
  const layerContextValue = useSelector((state) =>
    selectSlideLayerContextValue(state, slideId, id)
  )

  return (
    <LayerContext.Provider value={layerContextValue}>
      {props.children}
    </LayerContext.Provider>
  )
}

export default SlideLayer
