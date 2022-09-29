import React, { useContext, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { LayerContext, LayerSimple } from 'containers/Display/components/Layer'
import { SlideContext } from 'containers/Display/components/Container'
import { makeSelectSlideLayerContextValue } from '../selectors'

interface ILayerProps {
  id: number
}

const PreviewLayer: React.FC<ILayerProps> = (props) => {
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
      <LayerSimple />
    </LayerContext.Provider>
  )
}

export default PreviewLayer
