import {
  IPortal,
  IDisplayRaw,
  IDisplayParams,
  IDisplayFormed,
  Display,
  IDashboardBase,
  IDashboardRaw,
  IDashboardNode,
  ISlideBase,
  SlideScaleMode,
  ISlideParams,
  ISlideFormed
} from './components/types'
import { IDashboard } from 'containers/Dashboard/types'

export interface ISlideRaw extends ISlideBase {
  config: string
}

export type Slide = ISlideRaw & ISlideFormed

interface IVizState {
  portals: IPortal[]
  portalDashboards: {
    [portalId: number]: IDashboardNode[]
  }
  displaySlides: {
    [displayId: number]: ISlideFormed[]
  }
  currentPortalId: number
  currentDisplay: IDisplayFormed
  currentSlide: ISlideFormed
  displays: Display[]
  loading: {
    portal: boolean
    display: boolean
    editing: boolean
    dashboards: boolean
    slides: boolean
  }
}

export {
  IPortal,
  IDashboard,
  IDisplayRaw,
  IDisplayParams,
  IDisplayFormed,
  Display,
  IDashboardBase,
  IDashboardRaw,
  IDashboardNode,
  SlideScaleMode,
  ISlideParams,
  ISlideFormed,
  IVizState
}
