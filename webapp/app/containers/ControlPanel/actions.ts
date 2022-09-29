import { returnType } from 'utils/redux'
import { ActionTypes } from './constants'

export const ControlActions = {
  setGlobalControlPanelFormValues(values: object) {
    return {
      type: ActionTypes.SET_GLOBAL_CONTROL_PANEL_FORM_VALUES,
      payload: {
        values
      }
    }
  },
  setLocalControlPanelFormValues(values: object, itemId: number) {
    return {
      type: ActionTypes.SET_LOCAL_CONTROL_PANEL_FORM_VALUES,
      payload: {
        values,
        itemId
      }
    }
  },
  setSelectOptions(controlKey: string, options: any[], itemId?: number) {
    return {
      type: ActionTypes.SET_SELECT_OPTIONS,
      payload: {
        controlKey,
        options,
        itemId
      }
    }
  }
}

const mockAction = returnType(ControlActions)
export type ControlActionType = typeof mockAction

export default ControlActions
