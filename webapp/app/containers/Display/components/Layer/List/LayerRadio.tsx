import React, { useCallback } from 'react'
import classnames from 'classnames'
import { Tooltip } from 'antd'

import 'antd/lib/radio/style/index.less'
import './LayerList.less'

interface ILayerRadioProps {
  id: number
  checked: boolean
  onChange: (layerId: number, checked: boolean, exclusive: boolean) => void
}

export const LayerRadio: React.FC<ILayerRadioProps> = React.memo((props) => {
  const { id, checked, onChange } = props

  const wrapperCls = classnames({
    'display-layer-radio': true,
    'ant-radio-wrapper-checked': checked
  })

  const radioCls = classnames({
    'ant-radio': true,
    'ant-radio-checked': checked
  })

  const change = useCallback(
    (e: React.MouseEvent<HTMLLabelElement>) => {
      e.preventDefault()
      const { altKey, metaKey } = e
      const exclusive = !altKey && !metaKey
      onChange(id, !checked, exclusive)
    },
    [id, checked, onChange]
  )

  return (
    <label className={wrapperCls} onClick={change}>
      <span className={radioCls}>
        <input
          type="radio"
          className="ant-radio-input"
          defaultChecked={checked}
        />
        <span className="ant-radio-inner" />
      </span>
      <Tooltip title={props.children} placement="right">
        <span>{props.children}</span>
      </Tooltip>
    </label>
  )
})

export const LayerRadioGroup: React.FC = React.memo((props) => (
  <div className="display-layer-radio-group ant-radio-group-outline">
    {props.children}
  </div>
))
