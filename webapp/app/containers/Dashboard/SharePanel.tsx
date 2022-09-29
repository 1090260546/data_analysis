import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SharePanelComponent from 'app/components/SharePanel'
import DashboardActions from './actions'
const {
  loadDashboardShareLink,
  loadWidgetShareLink,
  closeSharePanel
} = DashboardActions
import {
  makeSelectSharePanel,
  makeSelectCurrentDashboardShareToken,
  makeSelectCurrentDashboardAuthorizedShareToken,
  makeSelectCurrentDashboardPasswordSharePassword,
  makeSelectCurrentDashboardPasswordShareToken,
  makeSelectCurrentDashboardShareLoading,
  makeSelectCurrentItemsInfo
} from './selectors'
import { makeSelectCurrentOrganizationMembers } from 'containers/Organizations/selectors'
import { makeSelectProjectRoles } from 'containers/Projects/selectors'

const SharePanel: FC = () => {
  const dispatch = useDispatch()
  const sharePanelStates = useSelector(makeSelectSharePanel())
  const dashboardShareToken = useSelector(
    makeSelectCurrentDashboardShareToken()
  )
  const dashboardAuthorizedShareToken = useSelector(
    makeSelectCurrentDashboardAuthorizedShareToken()
  )
  const dashboardPasswordShareToken = useSelector(
    makeSelectCurrentDashboardPasswordShareToken()
  )
  const dashboardPasswordSharePassword = useSelector(
    makeSelectCurrentDashboardPasswordSharePassword()
  )
  const dashboardShareLoading = useSelector(
    makeSelectCurrentDashboardShareLoading()
  )
  const currentItemsInfo = useSelector(makeSelectCurrentItemsInfo())
  const projectRoles = useSelector(makeSelectProjectRoles())
  const organizationMembers = useSelector(
    makeSelectCurrentOrganizationMembers()
  )

  const onLoadDashboardShareLink = useCallback(
    ({ id, mode, expired, permission, roles, viewers }) => {
      dispatch(
        loadDashboardShareLink({
          id,
          mode,
          expired,
          permission,
          roles,
          viewers
        })
      )
    },
    []
  )

  const onLoadWidgetShareLink = useCallback(
    ({ id, itemId, mode, expired, permission, roles, viewers }) => {
      dispatch(
        loadWidgetShareLink({
          id,
          itemId,
          mode,
          expired,
          permission,
          roles,
          viewers
        })
      )
    },
    []
  )

  const onCloseSharePanel = useCallback(() => {
    dispatch(closeSharePanel())
  }, [])

  const { type, itemId } = sharePanelStates
  let shareToken = ''
  let authorizedShareToken = ''
  let passwordShareToken = ''
  let password = ''
  let shareLoading = false
  switch (type) {
    case 'dashboard':
      shareToken = dashboardShareToken
      authorizedShareToken = dashboardAuthorizedShareToken
      password = dashboardPasswordSharePassword
      passwordShareToken = dashboardPasswordShareToken
      shareLoading = dashboardShareLoading
      break
    case 'widget':
      const itemInfo = currentItemsInfo[itemId]
      shareToken = itemInfo.shareToken
      authorizedShareToken = itemInfo.authorizedShareToken
      password = itemInfo.password
      passwordShareToken = itemInfo.passwordShareToken
      shareLoading = itemInfo.shareLoading
      break
  }

  return (
    <SharePanelComponent
      {...sharePanelStates}
      shareToken={shareToken}
      passwordShareToken={passwordShareToken}
      authorizedShareToken={authorizedShareToken}
      password={password}
      loading={shareLoading}
      projectRoles={projectRoles}
      organizationMembers={organizationMembers}
      onLoadDashboardShareLink={onLoadDashboardShareLink}
      onLoadWidgetShareLink={onLoadWidgetShareLink}
      onClose={onCloseSharePanel}
    />
  )
}

export default SharePanel
