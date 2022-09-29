import {
  ILayerFormed,
  IBaseline,
  LayersOperationInfo
} from './components/types'
import { ISlideFormed } from 'containers/Viz/types'

import { ActionTypes as VizActionTypes } from 'containers/Viz/constants'
import { ActionTypes } from './constants'

import { IQueryConditions } from 'containers/Dashboard/types'
import { RenderType } from 'containers/Widget/components/Widget'
import { IWidgetFormed } from 'containers/Widget/types'
import { ISharePanel, TShareVizsType } from 'app/components/SharePanel/types'

export interface ILayerInfo {
  datasource: {
    pageNo?: number
    pageSize?: number
    resultList: any[]
    totalCount?: number
  }
  loading: boolean
  queryConditions?: Partial<IQueryConditions>
  interactId?: string
  rendered?: boolean
  renderType?: RenderType
}

interface IDisplayLoading {
  shareToken: boolean
  slideLayers: boolean
}

export interface IDisplayState {
  currentDisplayShareToken: string
  currentDisplayAuthorizedShareToken: string
  currentDisplayPasswordShareToken: string
  currentDisplayPasswordPassword: string
  currentDisplaySelectOptions: object

  currentSlideId: number

  currentDisplayWidgets: { [widgetId: number]: IWidgetFormed }

  slideLayers: { [slideId: number]: { [layerId: number]: ILayerFormed } }
  slideLayersInfo: { [slideId: number]: { [layerId: number]: ILayerInfo } }
  slideLayersOperationInfo: {
    [slideId: number]: LayersOperationInfo
  }

  clipboardSlides: ISlideFormed[]
  clipboardLayers: ILayerFormed[]

  lastOperationType: keyof typeof ActionTypes | keyof typeof VizActionTypes
  lastLayers: ILayerFormed[]

  editorBaselines: IBaseline[]
  operateItemParams: ILayerFormed[]

  sharePanel: IDisplaySharePanelState

  loading: IDisplayLoading
}

export interface IDisplaySharePanelState
  extends Pick<ISharePanel, 'id' | 'type' | 'title'> {
  visible: boolean
}

export { TShareVizsType }
