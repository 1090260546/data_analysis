import React, { useContext } from 'react'

import { LayerContext } from './util'
import { GraphTypes, SecondaryGraphTypes } from '../Setting'

import { Chart, Rectangle, Video, Timer } from './Content'

import LabelEditor from './RichText'
const LayerCore: React.FC = () => {
  const { layer } = useContext(LayerContext)
  const { type, subType } = layer
  if (type === GraphTypes.Chart) {
    return <Chart />
  }
  if (type === GraphTypes.Secondary) {
    switch (subType) {
      case SecondaryGraphTypes.Rectangle:
        return <Rectangle />
      case SecondaryGraphTypes.Label:
        return <LabelEditor />
      case SecondaryGraphTypes.Video:
        return <Video />
      case SecondaryGraphTypes.Timer:
        return <Timer />
    }
  }
  return <div>123</div>
}

export default LayerCore
