import { ActionTypes } from './constants'
import { returnType } from 'utils/redux'
import { IDisplayFormed } from 'app/containers/Viz/types'

export const ShareDisplayActions = {
  loadDisplay(token: string, resolve, reject) {
    return {
      type: ActionTypes.LOAD_SHARE_DISPLAY,
      payload: {
        token,
        resolve,
        reject
      }
    }
  },
  displayLoaded(display: IDisplayFormed, slides, widgets, formedViews) {
    return {
      type: ActionTypes.LOAD_SHARE_DISPLAY_SUCCESS,
      payload: {
        display,
        slides,
        widgets,
        formedViews
      }
    }
  },
  loadDisplayFail(error) {
    return {
      type: ActionTypes.LOAD_SHARE_DISPLAY_FAILURE,
      payload: {
        error
      }
    }
  },

  loadLayerData(renderType, slideNumber, layerId, dataToken, requestParams) {
    return {
      type: ActionTypes.LOAD_LAYER_DATA,
      payload: {
        renderType,
        slideNumber,
        layerId,
        dataToken,
        requestParams
      }
    }
  },
  layerDataLoaded(renderType, slideNumber, layerId, data, requestParams) {
    return {
      type: ActionTypes.LOAD_LAYER_DATA_SUCCESS,
      payload: {
        renderType,
        slideNumber,
        layerId,
        data,
        requestParams
      }
    }
  },
  loadLayerDataFail(slideNumber, layerId, error) {
    return {
      type: ActionTypes.LOAD_LAYER_DATA_FAILURE,
      payload: {
        slideNumber,
        layerId,
        error
      }
    }
  }
}

const mockAction = returnType(ShareDisplayActions)
export type ShareDisplayActionType = typeof mockAction

export default ShareDisplayActions
