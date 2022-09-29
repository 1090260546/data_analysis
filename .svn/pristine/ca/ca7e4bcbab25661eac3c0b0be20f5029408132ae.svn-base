import React from 'react'
import { Menu, Dropdown, Icon } from 'antd'
const { Item: MenuItem } = Menu
import IconFont from 'components/IconFont'

import { LayerCommands } from 'containers/Display/components/constants'
import { ContextMenuProxy } from './ContextMenuProxy'

const menu = (
  <Menu>
    <MenuItem key="copy">
      <Icon type="copy" /> 复制
    </MenuItem>
    <MenuItem key="delete">
      <Icon type="delete" /> 删除
    </MenuItem>
    {LayerCommands.map(({ title, icon, operation }) => (
      <MenuItem key={operation}>
        <IconFont type={icon} />
        {title}
      </MenuItem>
    ))}
  </Menu>
)

const LayerContextMenu: React.FC = (props) => {
  return (
    <Dropdown overlay={menu} trigger={['contextMenu']}>
      <ContextMenuProxy>{props.children}</ContextMenuProxy>
    </Dropdown>
  )
}

export default LayerContextMenu
