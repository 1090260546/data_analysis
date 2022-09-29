import { GraphTypes, SecondaryGraphTypes } from './constants'

import { RichTextNode } from 'components/RichText'

export * from './Layer/List/types'
export * from './Layer/types'
export * from './Container/types'

export type LayerBase = {
  id: number
  displaySlideId: number
  index: number
  name: string
  type: GraphTypes
  subType?: SecondaryGraphTypes
  widgetId?: number
}

export interface ILayerRaw extends LayerBase {
  params: string
}

export interface ILayerParams {
  backgroundColor: [number, number, number]
  backgroundRepeat: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat'
  backgroundSize: 'auto' | 'contain' | 'cover'
  backgroundImage: string
  borderColor: [number, number, number]
  borderRadius: number
  borderStyle: string
  borderWidth: number
  frequency: number
  height: number
  polling: 'true' | 'false'
  positionX: number
  positionY: number
  width: number
  fontWeight: React.CSSProperties['fontWeight']
  fontFamily: string
  fontColor: [number, number, number]
  fontSize: number
  textAlign: string
  textStyle: string
  lineHeight: number
  textIndent: number
  paddingTop: number
  paddingBottom: number
  paddingLeft: number
  paddingRight: number
  richText: IRichTextConfig
  contentText: string,
  
  src: string
  controlSetting: string[]
  start?: number
  end?: number

  timeFormat: string
  timeDuration: number

}

export interface ILayerOperationInfo {
  dragging: boolean,
  resizing: boolean,
  selected: boolean,
  editing: boolean
}

export interface IRichTextConfig {
  content: string | RichTextNode[]
} 

export type ILayerFormed = LayerBase & {
  params: ILayerParams
}

export type Layer = ILayerRaw | ILayerFormed
