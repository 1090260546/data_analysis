import React, { useContext, useState, useEffect } from 'react'
import moment from 'moment'

import { useLabelStyle } from './hooks'
import { LayerContext } from '../../util'

const Timer: React.FC = () => {
  const { layer: { params } } = useContext(LayerContext)
  const labelStyle = useLabelStyle(params)

  const { timeDuration, timeFormat } = params
  const [currentTime, setCurrentTime] = useState(
    moment().format(timeFormat || 'YYYY-MM-dd HH:mm:ss')
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format(timeFormat || 'YYYY-MM-dd HH:mm:ss'))
    }, timeDuration)

    return () => {
      clearInterval(timer)
    }
  }, [timeFormat])

  return <p style={labelStyle}>{currentTime}</p>
}

export default Timer
