import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGlobal = (state) => state.global || initialState

const makeSelectLoginLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loading
)

const makeSelectLogged = () => createSelector(
  selectGlobal,
  (globalState) => globalState.logged
)

const makeSelectLoginUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loginUser
)

const makeSelectShareType = () => createSelector(
  selectGlobal,
  (globalState) => {
    return globalState.shareType
  }
)

const makeSelectVizType = () => createSelector(
  selectGlobal,
  (globalState) => {
    return globalState.vizType
  }
)

const makeSelectPermission = () => createSelector(
  selectGlobal,
  (globalState) => {
    return globalState.download
  }
)

const makeSelectPermissionLoading = () => createSelector(
  selectGlobal,
  (globalState) => {
    return globalState.permissionLoading
  }
)

const makeSelectExternalAuthProviders = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.externalAuthProviders
  )

const makeSelectOauth2Enabled = () =>
  createSelector(
    selectGlobal,
    (globalState) => globalState.oauth2Enabled
  )



export {
  selectGlobal,
  makeSelectLoginLoading,
  makeSelectLogged,
  makeSelectLoginUser,
  makeSelectShareType,
  makeSelectVizType,
  makeSelectPermission,
  makeSelectPermissionLoading,
  makeSelectExternalAuthProviders,
  makeSelectOauth2Enabled
}
