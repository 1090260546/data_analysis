import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { makeSelectCurrentProject } from 'containers/Projects/selectors'

import { IProjectPermission } from 'containers/Projects/types'

import { NoAuthorization } from 'containers/NoAuthorization/Loadable'

interface IAuthorizedRouteProps extends RouteProps {
  permission: keyof IProjectPermission
  redirect?: boolean
}

const AuthorizedRoute: React.FC<IAuthorizedRouteProps> = (props) => {
  const { permission, ...rest } = props

  const currentProject = useSelector(makeSelectCurrentProject())
  if (!currentProject || !currentProject.permission) {
    return null
  }

  if (!currentProject.permission[permission]) {
    return (
      <Route {...rest} component={NoAuthorization} />
    )
  }

  return (
    <Route {...rest} />
  )
}

export default AuthorizedRoute
