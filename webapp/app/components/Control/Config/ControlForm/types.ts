import { IControlRelatedItem, IControlRelatedView } from '../../types'
import { IViewModelProps, IViewVariable } from 'app/containers/View/types'

export interface IFlatRelatedItem extends IControlRelatedItem {
  id: number
  name: string
}

export interface IFlatRelatedView extends IControlRelatedView {
  id: number
  name: string
  models: IViewModelProps[]
  variables: IViewVariable[]
}
