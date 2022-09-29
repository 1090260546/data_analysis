import produce from 'immer'
import { ActionTypes } from './constants'
import { Tmode } from 'app/components/SharePanel/types'

interface IState {
  loading: boolean,
  logged: boolean,
  loginUser: object
  shareType: Tmode
  vizType: 'dashboard' | 'widget' | 'display' | ''
  permissionLoading: boolean
  download: boolean
  oauth2Enabled: boolean
  externalAuthProviders: any[]
}

export const initialState: IState = {
  loading: false,
  logged: false,
  loginUser: null,
  shareType: '',
  vizType: '',
  permissionLoading: false,
  download: false,
  oauth2Enabled: false,
  externalAuthProviders: []
}

const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.GET_EXTERNAL_AUTH_PROVIDERS_SUCESS:
        draft.externalAuthProviders = action.payload.externalAuthProviders
        break
      case ActionTypes.LOGIN:
        draft.loading = true
        break
      case ActionTypes.LOGGED:
        draft.loading = false
        draft.logged = true
        draft.loginUser = action.payload.user
        break
      case ActionTypes.LOGON_FAILURE:
        draft.loading = false
        break
      case ActionTypes.LOGOUT:
        draft.logged = false
        draft.loginUser = null
        break
      case ActionTypes.GET_SERVER_CONFIGURATIONS_SUCCESS:
        draft.oauth2Enabled =
          action.payload.configurations.security.oauth2.enable
        break
      case ActionTypes.INTERCEPTOR_PREFLIGHT_SUCCESS:
        draft.shareType = action.payload.shareType
        draft.vizType = action.payload.vizType
        break
      case ActionTypes.GET_PERMISSIONS:
        draft.permissionLoading = true
        break
      case ActionTypes.GET_PERMISSIONS_SUCCESS:
        draft.permissionLoading = false
        draft.download = action.payload.download
        break
      case ActionTypes.GET_PERMISSIONS_FAIL:
        draft.permissionLoading = false
    }
  })

export default appReducer
