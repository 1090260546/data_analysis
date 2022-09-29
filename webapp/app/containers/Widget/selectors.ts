import { createSelector } from 'reselect'
import { IWidgetState } from './types'
import { initialState } from './reducer'

const selectWidget = (state: { widget: IWidgetState }) => state.widget || initialState

const makeSelectWidgets = () => createSelector(
  selectWidget,
  (widgetState) => widgetState.widgets
)

const makeSelectCurrentWidget = () => createSelector(
  selectWidget,
  (widgetState) => widgetState.currentWidget
)

const makeSelectLoading = () => createSelector(
  selectWidget,
  (widgetState) => widgetState.loading
)

const makeSelectDataLoading = () => createSelector(
  selectWidget,
  (widgetState) => widgetState.dataLoading
)

export {
  selectWidget,
  makeSelectWidgets,
  makeSelectCurrentWidget,
  makeSelectLoading,
  makeSelectDataLoading
}
