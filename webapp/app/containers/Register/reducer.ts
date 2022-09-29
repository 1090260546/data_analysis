import produce from 'immer'

import {
  SIGNUP,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS
} from './constants'

const initialState = {
  signupLoading: false
}

const signupReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SIGNUP:
        draft.signupLoading = true
        break

      case SIGNUP_SUCCESS:
        draft.signupLoading = false
        break

      case SIGNUP_ERROR:
        draft.signupLoading = false
        break
    }
  })

export default signupReducer
