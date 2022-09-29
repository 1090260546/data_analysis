import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'

import {
  makeSelectCurrentDisplay,
  makeSelectCurrentSlide
} from '../selectors'

import { hideNavigator } from 'containers/App/actions'
import { VizActions } from '../actions'

import { Route, matchPath } from 'react-router-dom'
import { RouteComponentWithParams, IRouteParams } from 'utils/types'

import { Display } from 'containers/Display/Loadable'
import { VizDisplayEditor } from './Loadable'

const VizDisplay: React.FC<RouteComponentWithParams> = (props) => {
  const dispatch = useDispatch()
  const currentDisplay = useSelector(makeSelectCurrentDisplay())
  const currentSlide = useSelector(makeSelectCurrentSlide())
  const {
    history,
    match: { params }
  } = props
  const displayId = +params.displayId
  const { pathname } = history.location

  useEffect(() => {
    dispatch(hideNavigator())
  }, [])

  useEffect(() => {
    dispatch(VizActions.loadDisplaySlides(displayId))
  }, [displayId])

  if (!currentDisplay || !currentSlide) {
    return null
  }

  return (
    <>
      <Helmet title={`${currentDisplay.name} - Display`} />
      <Route exact path="/project/:projectId/display/:displayId/preview/slide/:slideId" component={Display} />
      <Route exact path="/project/:projectId/display/:displayId/slide/:slideId" component={VizDisplayEditor} />
    </>
  )
}

export default VizDisplay
