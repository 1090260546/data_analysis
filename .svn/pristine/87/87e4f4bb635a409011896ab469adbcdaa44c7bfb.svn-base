import { createSelector } from 'reselect'
import { RouterState } from 'connected-react-router'

const selectGlobal = (state) => state.global

const selectRouter = (state: { router: RouterState }) => state.router

const makeSelectExternalAuthProviders = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.externalAuthProviders
  )

const makeSelectLogged = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.logged
  )

const makeSelectLoginUser = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.loginUser
  )

const makeSelectLoginLoading = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.loginLoading
  )

const makeSelectNavigator = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.navigator
  )

const makeSelectDownloadList = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.downloadList
  )

const makeSelectDownloadListLoading = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.downloadListLoading
  )

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    (routerState) => routerState.location
  )

const makeSelectVersion = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.version
  )

const makeSelectOauth2Enabled = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.oauth2Enabled
  )

export {
  selectGlobal,
  makeSelectVersion,
  makeSelectOauth2Enabled,
  makeSelectExternalAuthProviders,
  makeSelectLogged,
  makeSelectLoginUser,
  makeSelectLoginLoading,
  makeSelectNavigator,
  makeSelectLocation,
  makeSelectDownloadList,
  makeSelectDownloadListLoading
}
