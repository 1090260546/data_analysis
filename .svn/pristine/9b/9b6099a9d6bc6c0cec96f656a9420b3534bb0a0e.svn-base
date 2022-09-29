import React, { useMemo, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { makeSelectCurrentDisplayWidgets } from '../selectors'
import {
  makeSelectCurrentSlides,
  makeSelectCurrentDisplay
} from 'containers/Viz/selectors'
import { makeSelectFormedViews } from 'containers/View/selectors'

import {
  LayerListContextValue,
  LayerListContext
} from '../components/Layer'
import Slide from './Slide'

import { ViewActions } from 'containers/View/actions'

import { RenderType } from 'containers/Widget/components/Widget'
import { IQueryConditions } from 'containers/Dashboard/types'
import { IWidgetFormed } from 'app/containers/Widget/types'
import { getRequestParamsByWidgetConfig } from 'containers/Viz/util'
import DisplayActions from '../actions'

interface IDisplayPreviewProps {
  slideIndex: number
}

const DisplayPreview: React.FC<IDisplayPreviewProps> = (props) => {
  const { slideIndex } = props
  const dispatch = useDispatch()

  const { id: displayId } = useSelector(makeSelectCurrentDisplay())
  const currentSlides = useSelector(makeSelectCurrentSlides())
  const currentDisplayWidgets = useSelector(makeSelectCurrentDisplayWidgets())
  const formedViews = useSelector(makeSelectFormedViews())

  useEffect(() => {
    const { id: slideId } = currentSlides[slideIndex]
    dispatch(DisplayActions.loadSlideDetail(displayId, slideId))
  }, [displayId, slideIndex, currentSlides])

  const layerListContextValue = useMemo<LayerListContextValue>(
    () => ({
      currentDisplayWidgets,
      getWidgetViewModel: (viewId: number) => {
        const viewModel = formedViews[viewId].model
        return viewModel
      },
      getChartData: (
        renderType: RenderType,
        slideId: number,
        layerId: number,
        widget: IWidgetFormed,
        prevQueryConditions: Partial<IQueryConditions>,
        queryConditions?: Partial<IQueryConditions>
      ) => {
        const requestParams = getRequestParamsByWidgetConfig(
          renderType,
          widget.config,
          prevQueryConditions,
          queryConditions
        )
        dispatch(
          ViewActions.loadViewDataFromVizItem(
            renderType,
            [slideId, layerId],
            widget.viewId,
            requestParams,
            'display',
            null
          )
        )
      }
    }),
    [currentDisplayWidgets, formedViews]
  )

  return (
    <LayerListContext.Provider value={layerListContextValue}>
      {currentSlides.map((slide) => (
        <Slide
          key={slide.id}
          slideId={slide.id}
          slideParams={slide.config.slideParams}
        />
      ))}
    </LayerListContext.Provider>
  )
}

export default DisplayPreview
