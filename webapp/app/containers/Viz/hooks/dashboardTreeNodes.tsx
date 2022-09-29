import React, { useMemo } from 'react'
import { Tree, TreeSelect, Icon } from 'antd'

import { IDashboardNode } from '../types'
import { DashboardTypes } from '../constants'

const dashboardNodeKeyPrefix = 'dashboard_'

const renderTreeNodes = (
  nodes: IDashboardNode[],
  folderOnly: boolean,
  treeSelect: boolean
) => {
  if (!nodes || !nodes.length) {
    return null
  }

  let filterNodes = folderOnly
    ? nodes.filter(({ type }) => type === DashboardTypes.Folder)
    : nodes
  if (!filterNodes.length) {
    return null
  }

  const { TreeNode } = treeSelect ? TreeSelect : Tree
  return filterNodes.map((node) => (
    <TreeNode
      key={`${dashboardNodeKeyPrefix}${node.id}`}
      title={node.name}
      icon={!node.children && <Icon type="dot-chart" />}
      isLeaf={!node.children}
    >
      {renderTreeNodes(node.children, folderOnly, treeSelect)}
    </TreeNode>
  ))
}

const findFirstLeaf = (nodes: IDashboardNode[], folderOnly: boolean): string[] => {
  if (!nodes || !nodes.length) {
    return []
  }

  let filterNodes = folderOnly
    ? nodes.filter(({ type }) => type === DashboardTypes.Folder)
    : nodes
  if (!filterNodes.length) {
    return []
  }

  if (folderOnly) {
    return [`${dashboardNodeKeyPrefix}${filterNodes[0].id}`]
  }

  let firstDashboardNodeKey: string[] = []
  filterNodes.some((node) => {
    if (node.type === DashboardTypes.Dashboard) {
      firstDashboardNodeKey = [`${dashboardNodeKeyPrefix}${node.id}`]
      return true
    }
    firstDashboardNodeKey = findFirstLeaf(node.children, folderOnly)
    return firstDashboardNodeKey.length
  })
  return firstDashboardNodeKey
}

const useDashboardTreeNodes = (
  nodes: IDashboardNode[],
  folderOnly: boolean = false,
  treeSelect: boolean = false
): [JSX.Element[], string[]] => {
  const treeNodes = useMemo(
    () => renderTreeNodes(nodes, folderOnly, treeSelect),
    [nodes]
  )
  const firstDashboardNodeKey = useMemo(
    () => findFirstLeaf(nodes, folderOnly),
    [nodes, folderOnly]
  )
  return [treeNodes, firstDashboardNodeKey]
}

export default useDashboardTreeNodes
