import { ActionTypes } from './constants'
import { returnType } from 'utils/redux'
import { IServerConfigurations } from 'app/containers/App/types'

export const AppActions = {
  getExternalAuthProviders() {
    return {
      type: ActionTypes.GET_EXTERNAL_AUTH_PROVIDERS
    }
  },
  
  gotExternalAuthProviders(externalAuthProviders) {
    return {
      type: ActionTypes.GET_EXTERNAL_AUTH_PROVIDERS_SUCESS,
      payload: {
        externalAuthProviders
      }
    }
  },

  login(username, password, shareToken, resolve, reject?) {
    return {
      type: ActionTypes.LOGIN,
      payload: {
        username,
        password,
        shareToken,
        resolve,
        reject
      }
    }
  },

  logout() {
    return {
      type: ActionTypes.LOGOUT
    }
  },

  logged(user) {
    return {
      type: ActionTypes.LOGGED,
      payload: {
        user
      }
    }
  },

  loginFail(error) {
    return {
      type: ActionTypes.LOGON_FAILURE,
      payload: {
        error
      }
    }
  },

  interceptor(token: string) {
    return {
      type: ActionTypes.INTERCEPTOR_PREFLIGHT,
      payload: {
        token
      }
    }
  },

  interceptored(shareType, vizType) {
    return {
      type: ActionTypes.INTERCEPTOR_PREFLIGHT_SUCCESS,
      payload: {
        shareType,
        vizType
      }
    }
  },

  interceptorFail() {
    return {
      type: ActionTypes.INTERCEPTOR_PREFLIGHT_FAIL
    }
  },

  getPermissions(
    token: string,
    password?: string,
    resolve?: () => void,
    reject?: () => void
  ) {
    return {
      type: ActionTypes.GET_PERMISSIONS,
      payload: {
        token,
        password,
        resolve,
        reject
      }
    }
  },
  getPermissionsSuccess(download) {
    return {
      type: ActionTypes.GET_PERMISSIONS_SUCCESS,
      payload: {
        download
      }
    }
  },
  getPermissionsFail() {
    return {
      type: ActionTypes.GET_PERMISSIONS_FAIL
    }
  },
  getServerConfigurations() {
    return {
      type: ActionTypes.GET_SERVER_CONFIGURATIONS
    }
  },
  serverConfigurationsGetted(configurations: IServerConfigurations) {
    return {
      type: ActionTypes.GET_SERVER_CONFIGURATIONS_SUCCESS,
      payload: {
        configurations
      }
    }
  },
  getServerConfigurationsFail(error) {
    return {
      type: ActionTypes.GET_SERVER_CONFIGURATIONS_FAIL,
      payload: {
        error
      }
    }
  }
}

const mockAction = returnType(AppActions)
export type AppActionType = typeof mockAction

export default AppActions
