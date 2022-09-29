import React from 'react'

import { Menu, Icon } from 'antd'
const MenuItem = Menu.Item

import useProjectPermission from 'containers/Projects/hooks/projectPermission'

const useDashboardConfigMenu = (style: React.CSSProperties = {}) => {
  const EditMenuItem = useProjectPermission(MenuItem, 'vizPermission', 2)
  const DeleteMenuItem = useProjectPermission(MenuItem, 'vizPermission', 3)

  console.log(EditMenuItem, DeleteMenuItem)
  return (
    <Menu style={style}>
      <EditMenuItem key="edit"><Icon type="edit" />编辑</EditMenuItem>
      <EditMenuItem key="move"><Icon type="swap" />移动</EditMenuItem>
      <DeleteMenuItem key="delete"><Icon type="delete" />删除</DeleteMenuItem>
    </Menu>
  )
}

export default useDashboardConfigMenu
