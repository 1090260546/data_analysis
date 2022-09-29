import { IWidgetConfig } from './components/Widget'

export interface IWidgetBase {
  id: number
  name: string
  description: string
  publish: boolean
  type: number
  viewId: number
  projectId: number
  viewName?: string
}

export interface IWidgetRaw extends IWidgetBase {
  config: string
}

export interface IWidgetFormed extends IWidgetBase {
  config: IWidgetConfig
  dataToken?: string
}

export interface IWidgetState {
  widgets: IWidgetFormed[]
  currentWidget: IWidgetFormed
  loading: boolean
  dataLoading: boolean
}
