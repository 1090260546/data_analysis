import React, { useContext, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { LayerContext, LayerSimple } from '../components/Layer'
import { SlideContext } from '../components/Container'
import { makeSelectSlideLayerContextValue } from '../selectors'

interface IPreviewLayerProps {
  id: number
}

const PreviewLayer: React.FC<IPreviewLayerProps> = (props) => {
  const { id } = props
  const { slideId } = useContext(SlideContext)

  const selectSlideLayerContextValue = useMemo(
    makeSelectSlideLayerContextValue,
    []
  )
  const layerContextValue = useSelector((state) =>
    selectSlideLayerContextValue(state, slideId, id, false)
  )

  return (
    <LayerContext.Provider value={layerContextValue}>
      <LayerSimple />
    </LayerContext.Provider>
  )
}

export default PreviewLayer
