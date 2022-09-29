import React from 'react'

import { DEFAULT_BASELINE_COLOR } from './constants'
import { IBaseline } from './types'

interface IBaselineProps {
  value: IBaseline
}

const Baseline: React.FC<IBaselineProps> = (props) => {
  const { top, right, bottom, left } = props.value
  const style: React.CSSProperties = {
    position: 'absolute',
    zIndex: 999999,
    top: `${top}px`,
    right: `${right}px`,
    bottom: `${bottom}px`,
    left: `${left}px`,
    backgroundColor: DEFAULT_BASELINE_COLOR
  }
  return (
    <div style={style} />
  )
}

export default Baseline
