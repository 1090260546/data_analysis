import React, { useContext } from 'react'
import classnames from 'classnames'
import { Icon } from 'antd'
import { IconProps } from 'antd/lib/icon'

import { TextStyles } from '../../Element'
import { EditorContext } from '../../context'

interface ITextStyleProps extends IconProps {
  value: TextStyles
}

const TextStyleIcon: React.FC<ITextStyleProps> = (props) => {
  const { value, ...rest } = props
  const { isTextStyleActive, toggleTextStyle } = useContext(EditorContext)

  const toggle = () => {
    toggleTextStyle(value)
  }

  const cls = classnames({
    'richtext-toolbar-icon': true,
    'richtext-toolbar-icon-active': isTextStyleActive(value)
  })

  return <Icon className={cls} {...rest} onClick={toggle} />
}

export default TextStyleIcon
