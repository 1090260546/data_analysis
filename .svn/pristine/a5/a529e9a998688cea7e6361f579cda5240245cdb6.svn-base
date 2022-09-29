import produce from 'immer'
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS
} from './constants'


export const initialState = {
  userProfile: false,
  loading: false
}

const profileReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_USER_PROFILE:
        draft.loading = true
        break

      case GET_USER_PROFILE_SUCCESS:
        draft.loading = false
        draft.userProfile = action.payload.result
        break
    }
  })

export default profileReducer
