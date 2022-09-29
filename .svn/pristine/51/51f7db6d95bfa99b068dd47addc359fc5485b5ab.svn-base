import {
  ControlTypes,
  DatePickerFormats,
  ControlFieldTypes,
  ControlOptionTypes,
  ControlDefaultValueTypes,
  ControlVisibilityTypes
} from './constants'
import { OperatorTypes } from 'utils/operatorTypes'
import { IQueryConditions } from 'containers/Dashboard/types'

export interface IControlRelatedItem {
  viewId: number
  checked: boolean
}

export interface IControlRelatedView {
  fieldType: ControlFieldTypes
  fields: string[]
}

export interface IControlRelatedViewFormValue {
  fieldType: ControlFieldTypes
  fields: string | string[]
}

export interface IControlOption {
  text: string
  value: string
  variables?: {
    [viewId: string]: string
  }
}

export interface IControlCondition {
  control: string
  operator: OperatorTypes
  value: string
}

export interface IControl {
  key: string
  name: string
  type: ControlTypes
  operator: OperatorTypes
  dateFormat?: DatePickerFormats
  multiple?: boolean
  radioType?: 'normal' | 'button'
  min?: number
  max?: number
  step?: number
  label?: boolean
  cache: boolean
  expired: number
  optionType?: ControlOptionTypes
  valueViewId?: number
  valueField?: string
  textField?: string
  parentField?: string
  customOptions?: IControlOption[]
  optionWithVariable?: boolean
  width: number
  visibility: ControlVisibilityTypes
  conditions?: IControlCondition[]
  defaultValueType: ControlDefaultValueTypes
  defaultValue?: any
  parent?: string
  relatedItems?: {
    [itemId: string]: IControlRelatedItem
  }
  relatedViews: {
    [viewId: string]: IControlRelatedView
  }
}

export interface IRenderTreeItem extends IControl {
  children?: IRenderTreeItem[]
}

export type ILocalControlConditions = Pick<
  IQueryConditions,
  'tempFilters' | 'variables'
>
export type IGlobalControlConditions = Pick<
  IQueryConditions,
  'globalFilters' | 'globalVariables'
>

export interface IGlobalControlConditionsByItem {
  [itemId: number]: IGlobalControlConditions
}

export interface IDistinctValueReqeustParams {
  columns: string[]
  filters?: string[]
  variables?: Array<{ name: string; value: string | number }>
  cache: boolean
  expired: number
}

export type OnGetControlOptions = (
  controlKey: string,
  userOptions: boolean,
  paramsOrOptions:
    | { [viewId: string]: IDistinctValueReqeustParams }
    | IControlOption[],
  itemId?: number
) => void

export interface IMapControlOptions {
  [controlKey: string]: object[]
}

export interface IFilter {
  name: string
  type: string
  value: string[] | string
  operator: string
  sqlType: string
  children?: IFilter
}
