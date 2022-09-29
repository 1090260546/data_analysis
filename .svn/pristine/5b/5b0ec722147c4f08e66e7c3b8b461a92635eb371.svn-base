import produce from 'immer'
import { ISourceState } from './types'

import { ActionTypes } from './constants'
import { SourceActionType } from './actions'

export function getSourceInitialState(): ISourceState {
  return {
    sources: null,
    listLoading: false,
    formLoading: false,
    testLoading: false,
    resetLoading: false,
    datasourcesInfo: []
  }
}

const initialState: ISourceState = getSourceInitialState()

const sourceReducer = (state = initialState, action: SourceActionType) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.LOAD_SOURCES:
        draft.listLoading = true
        break
      case ActionTypes.LOAD_SOURCES_SUCCESS:
        draft.listLoading = false
        draft.sources = action.payload.sources
        break
      case ActionTypes.LOAD_SOURCES_FAILURE:
        draft.listLoading = false
        break

      case ActionTypes.ADD_SOURCE:
        draft.formLoading = true
        break
      case ActionTypes.ADD_SOURCE_SUCCESS:
        draft.sources = [action.payload.result].concat(draft.sources || [])
        draft.formLoading = false
        break
      case ActionTypes.ADD_SOURCE_FAILURE:
        draft.formLoading = false
        break

      case ActionTypes.DELETE_SOURCE:
        draft.listLoading = true
        break
      case ActionTypes.DELETE_SOURCE_SUCCESS:
        draft.listLoading = false
        draft.sources = draft.sources.filter((g) => g.id !== action.payload.id)
        break
      case ActionTypes.DELETE_SOURCE_FAILURE:
        draft.listLoading = false
        break

      case ActionTypes.EDIT_SOURCE:
        draft.formLoading = true
        break
      case ActionTypes.EDIT_SOURCE_SUCCESS:
        draft.sources.splice(
          draft.sources.findIndex((g) => g.id === action.payload.result.id),
          1,
          action.payload.result
        )
        draft.formLoading = false
        break
      case ActionTypes.EDIT_SOURCE_FAILURE:
        draft.formLoading = false
        break

      case ActionTypes.TEST_SOURCE_CONNECTION:
        draft.testLoading = true
        break
      case ActionTypes.TEST_SOURCE_CONNECTION_SUCCESS:
      case ActionTypes.TEST_SOURCE_CONNECTION_FAILURE:
        draft.testLoading = false
        break

      case ActionTypes.RESET_SOURCE_CONNECTION:
        draft.resetLoading = true
        break
      case ActionTypes.RESET_SOURCE_CONNECTION_SUCCESS:
      case ActionTypes.RESET_SOURCE_CONNECTION_FAILURE:
        draft.resetLoading = false
        break

      case ActionTypes.LOAD_DATASOURCES_INFO_SUCCESS:
        draft.datasourcesInfo = action.payload.info
        break
    }
  })

export default sourceReducer
