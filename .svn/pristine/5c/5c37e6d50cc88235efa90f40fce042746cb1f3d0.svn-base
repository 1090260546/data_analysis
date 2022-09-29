import { createSelector } from 'reselect'
import { IVizState } from './types'

const selectViz = (state: { viz: IVizState }) => state.viz

const makeSelectPortals = () =>
  createSelector(
    selectViz,
    (vizState) => vizState.portals
  )

const makeSelectDisplays = () =>
  createSelector(
    selectViz,
    (vizState) => vizState.displays
  )

const makeSelectPortalDashboards = () =>
  createSelector(
    selectViz,
    (vizState) => vizState.portalDashboards
  )

const makeSelectCurrentPortal = () =>
  createSelector(
    selectViz,
    (vizState) =>
      vizState.portals.find(({ id }) => id == vizState.currentPortalId) || {}
  )

const makeSelectCurrentDashboards = () =>
  createSelector(
    selectViz,
    (vizState) => vizState.portalDashboards[vizState.currentPortalId] || []
  )

const makeSelectDisplaySlides = () =>
  createSelector(
    selectViz,
    (vizState) => vizState.displaySlides
  )

const makeSelectCurrentDisplay = () =>
  createSelector(
    selectViz,
    (vizState) => vizState.currentDisplay
  )

const makeSelectCurrentSlide = () =>
  createSelector(
    selectViz,
    (vizState) => vizState.currentSlide
  )

const makeSelectCurrentSlides = () =>
  createSelector(
    selectViz,
    ({ currentDisplay, displaySlides }) =>
      currentDisplay ? displaySlides[currentDisplay.id] : []
  )

const makeSelectVizLoading = () =>
  createSelector(
    selectViz,
    (vizState) => vizState.loading
  )

export {
  selectViz,
  makeSelectPortals,
  makeSelectDisplays,
  makeSelectPortalDashboards,
  makeSelectCurrentPortal,
  makeSelectCurrentDashboards,
  makeSelectDisplaySlides,
  makeSelectCurrentDisplay,
  makeSelectCurrentSlide,
  makeSelectCurrentSlides,
  makeSelectVizLoading
}
