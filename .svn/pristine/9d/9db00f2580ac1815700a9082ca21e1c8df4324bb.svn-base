import React, { useContext } from 'react'
import classnames from 'classnames'
import { Icon } from 'antd'
import { IconProps } from 'antd/lib/icon'
import IconFont from 'components/IconFont'

import { ElementType } from '../../Element'
import { EditorContext } from '../../context'

interface IElementIconProps extends IconProps {
  value: ElementType
  iconFont?: boolean
}

const ElementIcon: React.FC<IElementIconProps> = (props) => {
  const { value, iconFont, ...rest } = props
  const { isElementActive, toggleElement } = useContext(EditorContext)

  const toggle = () => {
    toggleElement(value)
  }

  const cls = classnames({
    'richtext-toolbar-icon': true,
    'richtext-toolbar-icon-active': isElementActive(value)
  })

  return iconFont ? (
    <IconFont className={cls} {...rest} onClick={toggle} />
  ) : (
    <Icon className={cls} {...rest} onClick={toggle} />
  )
}

export default ElementIcon
