import React, { useEffect, useMemo, PropsWithChildren } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  useLocation,
  matchPath,
  useHistory
} from 'react-router-dom'

import { showNavigator } from 'containers/App/actions'
import { makeSelectCurrentProject } from 'containers/Projects/selectors'

import { Icon } from 'antd'
import SidebarOption from 'components/SidebarOption'
import Sidebar from 'components/Sidebar'

import { SidebarPermissions } from './constants'
import { IRouteParams } from 'utils/types'
import useProjectPermission from '../Projects/hooks/projectPermission'

import styles from './Main.less'

const sidebarSource: Array<{
  icon: React.ReactNode
  routes: string[]
  permissionName: typeof SidebarPermissions[number]
}> = [
  {
    icon: <i className="iconfont icon-datasource24" />,
    routes: ['sources'],
    permissionName: 'sourcePermission'
  },
  {
    icon: <i className="iconfont icon-custom-business" />,
    routes: ['views'],
    permissionName: 'viewPermission'
  },
  {
    icon: <i className="iconfont icon-widget-gallery" />,
    routes: ['widgets'],
    permissionName: 'widgetPermission'
  },
  // {
  //   icon: <i className="iconfont icon-dashboard" />,
  //   routes: ['vizs'],
  //   permissionName: 'vizPermission'
  // },
  // {
  //   icon: <Icon type="clock-circle" />,
  //   routes: ['schedules'],
  //   permissionName: 'schedulePermission'
  // }
]

const MainSidebar: React.FC<PropsWithChildren<{}>> = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showNavigator())
  }, [])

  const location = useLocation()
  const { pathname } = location
  const history = useHistory()
  const currentProject = useSelector(makeSelectCurrentProject())

  useEffect(() => {
    if (!currentProject) {
      return
    }
    const { id: projectId, permission } = currentProject
    const match = matchPath<IRouteParams>(pathname, {
      path: `/project/:projectId`,
      exact: true,
      strict: false
    })
    if (match) {
      const hasPermission = SidebarPermissions.some((sidebarPermission) => {
        if (permission[sidebarPermission] > 0) {
          const path = sidebarPermission.slice(0, -10)
          history.replace(`/project/${projectId}/${path}s`)
          return true
        }
      })
      !hasPermission && history.replace('/noAuthorization')
    }
  }, [pathname, currentProject])

  const AuthorizedSidebarOptions = useProjectPermission(
    SidebarOption,
    sidebarSource.map(({ permissionName }) => permissionName)
  )

  const sidebar = useMemo(() => {
    if (!currentProject) {
      return null
    }
    const { id: projectId, permission } = currentProject
    const vizOnly = SidebarPermissions.every((permissionName) =>
      permissionName == 'vizPermission'
        ? permission[permissionName]
        : !permission[permissionName]
    )
    if (vizOnly) {
      return null
    }
    const sidebarOptions = sidebarSource.map(
      ({ permissionName, routes, icon }, idx) => {
        if (!permission[permissionName]) {
          return null
        }
        const active = routes.some((route) => pathname.includes(route))
        const AuthorizedSidebarOption = AuthorizedSidebarOptions[idx]
        return (
          <AuthorizedSidebarOption
            key={permissionName}
            active={active}
            indexRoute={routes[0]}
            projectId={projectId}
            icon={icon}
          />
        )
      }
    )
    return <Sidebar>{sidebarOptions}</Sidebar>
  }, [currentProject, pathname])

  return (
    <div className={styles.sidebar}>
      {sidebar}
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

export default MainSidebar
