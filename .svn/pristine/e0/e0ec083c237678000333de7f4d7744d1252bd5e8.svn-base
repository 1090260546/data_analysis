import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  makeSelectFormedViews,
  makeSelectSlidesCount,
  makeSelectWidgets
} from '../selectors'

import { getRequestParamsByWidgetConfig } from 'containers/Viz/util'
import {
  LayerListContext,
  LayerListContextValue
} from 'containers/Display/components/Layer'

import Slide from './Slide'
import ShareDisplayActions from '../actions'

interface IDisplayProps {
  targetSlideNumber?: number
}

const Display: React.FC<IDisplayProps> = (props) => {
  const { targetSlideNumber } = props
  const dispatch = useDispatch()
  const slidesCount = useSelector(makeSelectSlidesCount())
  const widgets = useSelector(makeSelectWidgets())
  const formedViews = useSelector(makeSelectFormedViews())

  const layerListContextValue: LayerListContextValue = {
    currentDisplayWidgets: widgets,
    getWidgetViewModel: (viewId, _) => formedViews[viewId].model,
    getChartData: (
      renderType,
      slideNumber,
      layerId,
      widget,
      prevQueryConditions,
      queryConditions?
    ) => {
      const requestParams = getRequestParamsByWidgetConfig(
        renderType,
        widget.config,
        prevQueryConditions,
        queryConditions
      )
      dispatch(
        ShareDisplayActions.loadLayerData(
          renderType,
          slideNumber,
          layerId,
          widget.dataToken,
          requestParams
        )
      )
    }
  }

  const onlyOneSlide =
    targetSlideNumber &&
    targetSlideNumber > 0 &&
    targetSlideNumber <= slidesCount

  return (
    <LayerListContext.Provider value={layerListContextValue}>
      {onlyOneSlide ? (
        <Slide slideNumber={targetSlideNumber} />
      ) : (
        [...Array(slidesCount).keys()].map((idx) => (
          <Slide key={idx} slideNumber={idx + 1} />
        ))
      )}
    </LayerListContext.Provider>
  )
}

export default Display
