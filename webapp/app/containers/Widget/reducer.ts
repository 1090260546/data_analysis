import produce from 'immer'
import { IWidgetState } from './types'
import { ActionTypes } from './constants'
import { ActionTypes as ViewActionTypes } from '../View/constants'
import { WidgetActionType } from './actions'
import { ViewActionType } from 'containers/View/actions'
import { DisplayActionType } from 'containers/Display/actions'

export const initialState: IWidgetState = {
  widgets: null,
  currentWidget: null,
  loading: false,
  dataLoading: false
}

const widgetReducer = (
  state = initialState,
  action: WidgetActionType | ViewActionType | DisplayActionType
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.LOAD_WIDGETS:
        draft.loading = true
        draft.widgets = null
        break
      case ActionTypes.LOAD_WIDGETS_SUCCESS:
        draft.loading = false
        draft.widgets = action.payload.widgets
        break
      case ActionTypes.LOAD_WIDGETS_FAILURE:
        draft.loading = false
        break

      case ActionTypes.ADD_WIDGET:
        draft.loading = true
        break
      case ActionTypes.ADD_WIDGET_SUCCESS:
        if (draft.widgets) {
          draft.widgets.push(action.payload.result)
          draft.loading = false
        } else {
          draft.loading = false
          draft.widgets = [action.payload.result]
        }
        break
      case ActionTypes.ADD_WIDGET_FAILURE:
        draft.loading = false
        break

      case ActionTypes.DELETE_WIDGET:
        draft.loading = true
        break
      case ActionTypes.DELETE_WIDGET_SUCCESS:
        draft.widgets = draft.widgets.filter((g) => g.id !== action.payload.id)
        draft.loading = false
        break
      case ActionTypes.DELETE_WIDGET_FAILURE:
        draft.loading = false
        break

      case ActionTypes.LOAD_WIDGET_DETAIL:
        draft.loading = true
        draft.currentWidget = null
        break
      case ActionTypes.LOAD_WIDGET_DETAIL_SUCCESS:
        draft.loading = false
        draft.currentWidget = action.payload.detail
        break
      case ActionTypes.LOAD_WIDGET_DETAIL_FAILURE:
        draft.loading = false
        break

      case ActionTypes.EDIT_WIDGET:
        draft.loading = true
        break
      case ActionTypes.EDIT_WIDGET_SUCCESS:
        draft.loading = false
        break
      case ActionTypes.EDIT_WIDGET_FAILURE:
        draft.loading = false
        break

      case ActionTypes.COPY_WIDGET:
        draft.loading = true
        break
      case ActionTypes.COPY_WIDGET_SUCCESS:
        const fromWidgetId = action.payload.fromWidgetId
        const copyWidgetIndex = draft.widgets.findIndex(({ id }) => id === fromWidgetId)
        draft.widgets.splice(
          copyWidgetIndex + 1,
          0,
          {
            ...action.payload.result,
            viewName: draft.widgets[copyWidgetIndex].viewName
          }
         
        )
        draft.loading = false
        break
      case ActionTypes.COPY_WIDGET_FAILURE:
        draft.loading = false

      case ViewActionTypes.LOAD_VIEW_DATA:
        draft.dataLoading = true
        break
      case ViewActionTypes.LOAD_VIEW_DATA_SUCCESS:
        draft.dataLoading = false
        break
      case ViewActionTypes.LOAD_VIEW_DATA_FAILURE:
        draft.dataLoading = false
        break

      case ActionTypes.CLEAR_CURRENT_WIDGET:
        draft.currentWidget = null
        break
    }
  })

export default widgetReducer
