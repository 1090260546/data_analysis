import React from 'react'
import { Card, Row } from 'antd'
import classnames from 'classnames'

import Item from './Item'
import { SettingParam } from './types'
const utilStyles = require('assets/less/util.less')

interface ISettingItemGroupProps {
  param: SettingParam
}

const SettingItemGroup: React.FC<ISettingItemGroupProps> = (props) => {
  const { param } = props
  const { title, items, visible: cardVisible = true } = param
  return (
    <Card
      size="small"
      title={title}
      className={classnames({
        [utilStyles.hide]: !cardVisible
      })}
    >
      <Row>
        {items.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </Row>
    </Card>
  )
}

export default SettingItemGroup
