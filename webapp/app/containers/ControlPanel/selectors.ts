import { createSelector } from 'reselect'
import { IControlState } from './types'


const selectControl = (state: { control: IControlState }) => state.control
const selectItemId = (_, itemId: number) => itemId

const makeSelectGlobalControlPanelFormValues = () =>
  createSelector(
    selectControl,
    (controlState) => controlState.globalControlPanelFormValues
  )

const makeSelectGlobalControlPanelSelectOptions = () =>
  createSelector(
    selectControl,
    (controlState) => controlState.globalControlPanelSelectOptions
  )

const makeSelectLocalControlPanelFormValues = () =>
  createSelector(
    selectControl,
    selectItemId,
    (controlState, itemId) => controlState.localControlPanelFormValues[itemId]
  )

const makeSelectLocalControlPanelSelectOptions = () =>
  createSelector(
    selectControl,
    selectItemId,
    (controlState, itemId) =>
      controlState.localControlPanelSelectOptions[itemId]
  )

export {
  makeSelectGlobalControlPanelFormValues,
  makeSelectGlobalControlPanelSelectOptions,
  makeSelectLocalControlPanelFormValues,
  makeSelectLocalControlPanelSelectOptions
}
