import React, { useCallback } from 'react'
import styles from './SharePanel.less'
import { Radio } from 'antd'
import { RadioChangeEvent } from 'antd/lib/radio'
const RadioButton = Radio.Button
const RadioGroup = Radio.Group
import { ICtrl } from './types'

const Contrl: React.FC<ICtrl> = ({ mode, onModeChange }) => {
  const radioChange = useCallback(
    (e: RadioChangeEvent) => {
      onModeChange(e.target.value)
    },
    [mode]
  )

  return (
    <div className={styles.panelHead}>
      <RadioGroup
        defaultValue={mode}
        buttonStyle="solid"
        onChange={radioChange}
      >
        <RadioButton value="NORMAL">普通分享</RadioButton>
        <RadioButton value="PASSWORD">口令分享</RadioButton>
        <RadioButton value="AUTH">授权分享</RadioButton>
      </RadioGroup>
    </div>
  )
}

export default Contrl
