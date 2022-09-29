import React, { useContext } from 'react'
import classnames from 'classnames'

import { ElementTypes } from '../Element'
import { EditorContext } from '../context'

import { Tooltip } from 'antd'
import IconFont from 'components/IconFont'

const Marquee: React.FC = () => {
  const { isElementActive, toggleElement } = useContext(EditorContext)

  const click = () => {
    toggleElement(ElementTypes.Marquee)
  }

  const currentActive = !!isElementActive(ElementTypes.Marquee)
  const cls = classnames({
    'richtext-toolbar-icon': true,
    'richtext-toolbar-icon-active': currentActive
  })

  return (
    <Tooltip title="滚屏字幕">
      <IconFont
        className={cls}
        tabIndex={-1}
        type="icon-bullet-subtitle"
        onClick={click}
      />
    </Tooltip>
  )
}

export default Marquee
