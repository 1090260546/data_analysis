import { ActionTypes } from './constants'
import { returnType } from 'utils/redux'
import { IWidgetRaw, IWidgetBase, IWidgetFormed } from './types'

export const WidgetActions = {
  loadWidgets(projectId: number) {
    return {
      type: ActionTypes.LOAD_WIDGETS,
      payload: {
        projectId
      }
    }
  },
  widgetsLoaded(widgets: IWidgetFormed[]) {
    return {
      type: ActionTypes.LOAD_WIDGETS_SUCCESS,
      payload: {
        widgets
      }
    }
  },
  widgetsLoadedFail() {
    return {
      type: ActionTypes.LOAD_WIDGETS_FAILURE,
      payload: {}
    }
  },

  addWidget(widget: Omit<IWidgetRaw, 'id'>, resolve) {
    return {
      type: ActionTypes.ADD_WIDGET,
      payload: {
        widget,
        resolve
      }
    }
  },
  widgetAdded(result: IWidgetFormed) {
    return {
      type: ActionTypes.ADD_WIDGET_SUCCESS,
      payload: {
        result
      }
    }
  },
  addWidgetFail() {
    return {
      type: ActionTypes.ADD_WIDGET_FAILURE,
      payload: {}
    }
  },

  loadWidgetDetail(id: number) {
    return {
      type: ActionTypes.LOAD_WIDGET_DETAIL,
      payload: {
        id
      }
    }
  },
  widgetDetailLoaded(detail, view) {
    return {
      type: ActionTypes.LOAD_WIDGET_DETAIL_SUCCESS,
      payload: {
        detail,
        view
      }
    }
  },
  loadWidgetDetailFail(error) {
    return {
      type: ActionTypes.LOAD_WIDGET_DETAIL_FAILURE,
      payload: {
        error
      }
    }
  },

  editWidget(widget, resolve) {
    return {
      type: ActionTypes.EDIT_WIDGET,
      payload: {
        widget,
        resolve
      }
    }
  },
  widgetEdited() {
    return {
      type: ActionTypes.EDIT_WIDGET_SUCCESS,
      payload: {}
    }
  },
  editWidgetFail() {
    return {
      type: ActionTypes.EDIT_WIDGET_FAILURE,
      payload: {}
    }
  },

  copyWidget(widget: IWidgetBase, resolve: () => void) {
    return {
      type: ActionTypes.COPY_WIDGET,
      payload: {
        widget,
        resolve
      }
    }
  },
  widgetCopied(fromWidgetId: number, result: IWidgetFormed) {
    return {
      type: ActionTypes.COPY_WIDGET_SUCCESS,
      payload: {
        fromWidgetId,
        result
      }
    }
  },
  copyWidgetFail() {
    return {
      type: ActionTypes.COPY_WIDGET_FAILURE,
      payload: {}
    }
  },

  deleteWidget(id) {
    return {
      type: ActionTypes.DELETE_WIDGET,
      payload: {
        id
      }
    }
  },
  widgetDeleted(id: number) {
    return {
      type: ActionTypes.DELETE_WIDGET_SUCCESS,
      payload: {
        id
      }
    }
  },
  deleteWidgetFail() {
    return {
      type: ActionTypes.DELETE_WIDGET_FAILURE,
      payload: {}
    }
  },

  clearCurrentWidget() {
    return {
      type: ActionTypes.CLEAR_CURRENT_WIDGET,
      payload: {}
    }
  },

  executeComputed(sql) {
    return {
      type: ActionTypes.EXECUTE_COMPUTED_SQL,
      payload: {
        sql
      }
    }
  }
}

const mockAction = returnType(WidgetActions)
export type WidgetActionType = typeof mockAction

export default WidgetActions
