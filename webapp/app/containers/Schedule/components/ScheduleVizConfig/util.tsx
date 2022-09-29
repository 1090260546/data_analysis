import React from 'react'
import { Tree, Icon, Popover } from 'antd'
const { TreeNode } = Tree
import { NodeKeyPrefix } from './constants'

import {
  IPortal,
  IDashboard,
  IDisplayFormed,
  ISlideFormed
} from 'containers/Viz/types'
import { IScheduleVizConfigItem } from './types'
import IconFont from 'app/components/IconFont'

export const splitNodeKeyWithPrefix = (
  nodeKey: string
): [NodeKeyPrefix, number] => {
  const nodePrefix = [
    NodeKeyPrefix.Portal,
    NodeKeyPrefix.Dashboard,
    NodeKeyPrefix.Display,
    NodeKeyPrefix.Slide
  ].find((prefix) => nodeKey.includes(prefix))
  const nodeId = +nodeKey.slice(nodePrefix.length)
  return [nodePrefix, nodeId]
}

const getDashboardChildNodes = (
  portalId: number,
  mapDashboards: { [parentId: number]: IDashboard[] },
  ancestorIds: number[] = [0]
): [JSX.Element[], number[]] => {
  const currentDashboardId = ancestorIds[ancestorIds.length - 1]
  const childDashboards = mapDashboards[currentDashboardId]
  if (!Array.isArray(childDashboards)) {
    return [null, [currentDashboardId]]
  }
  let descendantIds = []
  const descendantNodes = childDashboards.map((child) => {
    const [childNodes, childIds] = getDashboardChildNodes(
      portalId,
      mapDashboards,
      ancestorIds.concat(child.id)
    )
    descendantIds = descendantIds.concat(child.id).concat(childIds)
    return (
      <TreeNode
        title={child.name}
        icon={
          <Icon type={mapDashboards[child.id] ? 'folder-open' : 'dot-chart'} />
        }
        key={`${NodeKeyPrefix.Dashboard}${child.id}`}
        isLeaf={!childNodes}
        dataRef={[portalId, ancestorIds, childIds]}
      >
        {childNodes}
      </TreeNode>
    )
  })
  return [descendantNodes, descendantIds]
}

export const renderPortalDashboardsTreeNodes = (
  portalId: number,
  dashboards: IDashboard[]
) => {
  if (!Array.isArray(dashboards)) {
    return null
  }
  const mapDashboards = dashboards.reduce<{ [parentId: number]: IDashboard[] }>(
    (map, dashboard) => {
      if (!map[dashboard.parentId]) {
        map[dashboard.parentId] = []
      }
      map[dashboard.parentId].push(dashboard)
      return map
    },
    {}
  )
  const [dashboardNodes] = getDashboardChildNodes(portalId, mapDashboards)
  return dashboardNodes
}

const slideIcon = <IconFont type="icon-dashboard" />
export const renderDisplaySlidesTreeNodes = (
  displayId: number,
  slides: ISlideFormed[]
) => {
  if (!Array.isArray(slides)) {
    return null
  }
  const childNodes = slides.map(({ id: slideId, config }, idx) => {
    const {
      slideParams: { avatar }
    } = config
    const icon = avatar ? (
      <Popover content={<img src={avatar} width={250} />}>{slideIcon}</Popover>
    ) : (
      slideIcon
    )
    return (
      <TreeNode
        title={idx + 1}
        icon={icon}
        key={`${NodeKeyPrefix.Slide}${slideId}`}
        isLeaf={true}
        dataRef={[displayId]}
      />
    )
  })

  return childNodes
}

export const getCheckedVizKeys = (
  value: IScheduleVizConfigItem[],
  type: IScheduleVizConfigItem['contentType'],
  vizs: IPortal[] | IDisplayFormed[],
  vizPrefix: string,
  vizItemPrefix: string
) => {
  if (!Array.isArray(vizs)) {
    return []
  }

  const checkedVizKeys = value
    .filter(({ contentType }) => contentType === type)
    .reduce<string[]>((acc, { id, items }) => {
      // checked all viz items under this viz
      if (!Array.isArray(items)) {
        if (~vizs.findIndex((viz) => viz.id === id)) {
          acc.push(`${vizPrefix}${id}`)
        }
      } else {
        // check the partial viz item under this viz
        items.forEach((vizItemId) => {
          acc.push(`${vizItemPrefix}${vizItemId}`)
        })
      }
      return acc
    }, [])

  return checkedVizKeys
}
