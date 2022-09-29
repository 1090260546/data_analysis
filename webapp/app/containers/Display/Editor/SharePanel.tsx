import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SharePanelComponent from 'app/components/SharePanel'
import DisplayActions from '../actions'
import {
  makeSelectSharePanel,
  makeSelectDisplayLoading,
  makeSelectCurrentDisplayShareToken,
  makeSelectCurrentDisplayAuthorizedShareToken,
  makeSelectCurrentDisplayPasswordShareToken,
  makeSelectCurrentDisplayPasswordSharePassword
} from '../selectors'
import { makeSelectCurrentOrganizationMembers } from 'containers/Organizations/selectors'
import { makeSelectProjectRoles } from 'containers/Projects/selectors'

const SharePanel: FC = () => {
  const dispatch = useDispatch()
  const sharePanelStates = useSelector(makeSelectSharePanel())
  const shareToken = useSelector(makeSelectCurrentDisplayShareToken())
  const authorizedShareToken = useSelector(
    makeSelectCurrentDisplayAuthorizedShareToken()
  )
  const { shareToken: shareLoading } = useSelector(makeSelectDisplayLoading())
  const projectRoles = useSelector(makeSelectProjectRoles())
  const organizationMembers = useSelector(
    makeSelectCurrentOrganizationMembers()
  )
  const displayPasswordShareToken = useSelector(
    makeSelectCurrentDisplayPasswordShareToken()
  )
  const displayPasswordSharePassword = useSelector(
    makeSelectCurrentDisplayPasswordSharePassword()
  )

  const onLoadDisplayShareLink = useCallback(
    ({ id, mode, expired, permission, roles, viewers }) => {
      dispatch(
        DisplayActions.loadDisplayShareLink({
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

  const onCloseSharePanel = useCallback(() => {
    dispatch(DisplayActions.closeSharePanel())
  }, [])

  return (
    <SharePanelComponent
      {...sharePanelStates}
      shareToken={shareToken}
      passwordShareToken={displayPasswordShareToken}
      authorizedShareToken={authorizedShareToken}
      password={displayPasswordSharePassword}
      loading={shareLoading}
      projectRoles={projectRoles}
      organizationMembers={organizationMembers}
      onLoadDisplayShareLink={onLoadDisplayShareLink}
      onClose={onCloseSharePanel}
    />
  )
}

export default SharePanel
