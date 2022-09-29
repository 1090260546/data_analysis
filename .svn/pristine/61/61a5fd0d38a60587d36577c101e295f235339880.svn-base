import { createSelector } from 'reselect'
import { IDashboardState } from './types'
import { IWidgetState } from '../Widget/types'
import { IViewState } from '../View/types'

const selectDashboard = (state: { dashboard: IDashboardState }) =>
  state.dashboard
const selectWidget = (state: { widget: IWidgetState }) => state.widget
const selectFormedViews = (state: { view: IViewState }) =>
  state.view.formedViews

const selectItemId = (_, itemId: number) => itemId

const selectForm = (state) => state.form

const makeSelectCurrentDashboard = () =>
  createSelector(
    selectDashboard,
    (dashboardState) => dashboardState.currentDashboard
  )

const makeSelectCurrentDashboardLoading = () =>
  createSelector(
    selectDashboard,
    (dashboardState) => dashboardState.currentDashboardLoading
  )
const makeSelectCurrentDashboardShareToken = () =>
  createSelector(
    selectDashboard,
    (dashboardState) => dashboardState.currentDashboardShareToken
  )
const makeSelectCurrentDashboardAuthorizedShareToken = () =>
  createSelector(
    selectDashboard,
    (dashboardState) => dashboardState.currentDashboardAuthorizedShareToken
  )
const makeSelectCurrentDashboardPasswordShareToken = () =>
  createSelector(
    selectDashboard,
    (dashboardState) => dashboardState.currentDashboardPasswordShareToken
  )
const makeSelectCurrentDashboardPasswordSharePassword = () =>
  createSelector(
    selectDashboard,
    (dashboardState) => dashboardState.currentDashboardPasswordSharePassword
  )
const makeSelectCurrentDashboardShareLoading = () =>
  createSelector(
    selectDashboard,
    (dashboardState) => dashboardState.currentDashboardShareLoading
  )
const makeSelectSharePanel = () =>
  createSelector(
    selectDashboard,
    (dashboardState) => dashboardState.sharePanel
  )

const makeSelectCurrentItems = () =>
  createSelector(
    selectDashboard,
    (dashboardState) => dashboardState.currentItems
  )

const makeSelectCurrentItemsInfo = () =>
  createSelector(
    selectDashboard,
    (dashboardState) => dashboardState.currentItemsInfo
  )

const makeSelectWidgets = () =>
  createSelector(
    selectWidget,
    (widgetState) => widgetState.widgets
  )

const makeSelectItem = () =>
  createSelector(
    makeSelectCurrentItems(),
    selectItemId,
    (currentItems, itemId) => currentItems.find((item) => item.id === itemId)
  )

const makeSelectItemInfo = () =>
  createSelector(
    makeSelectCurrentItemsInfo(),
    selectItemId,
    (currentItemsInfo, itemId) => currentItemsInfo[itemId]
  )

const makeSelectItemRelatedWidget = () =>
  createSelector(
    makeSelectWidgets(),
    makeSelectItem(),
    (widgets, item) => widgets.find((w) => w.id === item.widgetId)
  )

const makeSelectFullScreenPanelItemId = () =>
  createSelector(
    selectDashboard,
    (dashboardState) => dashboardState.fullScreenPanelItemId
  )

const makeSelectCurrentLinkages = () =>
  createSelector(
    makeSelectCurrentDashboard(),
    makeSelectCurrentItemsInfo(),
    (currentDashboard, currentItemsInfo) => {
      if (!currentDashboard || !currentItemsInfo) {
        return []
      }

      const validLinkages = currentDashboard.config.linkages.filter((l) => {
        const { linkager, trigger } = l
        return currentItemsInfo[linkager[0]] && currentItemsInfo[trigger[0]]
      })
      return validLinkages
    }
  )

export {
  selectDashboard,
  selectForm,
  makeSelectCurrentDashboard,
  makeSelectCurrentDashboardLoading,
  makeSelectCurrentItems,
  makeSelectCurrentItemsInfo,
  makeSelectWidgets,
  makeSelectCurrentDashboardShareToken,
  makeSelectCurrentDashboardAuthorizedShareToken,
  makeSelectCurrentDashboardShareLoading,
  makeSelectSharePanel,
  makeSelectCurrentLinkages,
  makeSelectItemInfo,
  makeSelectItemRelatedWidget,
  makeSelectFullScreenPanelItemId,
  makeSelectCurrentDashboardPasswordShareToken,
  makeSelectCurrentDashboardPasswordSharePassword
}
