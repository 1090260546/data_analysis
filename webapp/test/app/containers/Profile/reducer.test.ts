import produce from 'immer'
import reducer, { initialState } from 'app/containers/Profile/reducer'
import actions from 'app/containers/Profile/actions'
import { mockAnonymousAction } from 'test/utils/fixtures'
import { mockStore } from './fixtures'

describe('projectsReducer', () => {
  const { profile, userId } = mockStore
  let state
  beforeEach(() => {
    state = initialState
  })

  it('should return the initial state', () => {
    expect(reducer(void 0, mockAnonymousAction)).toEqual(state)
  })

  it('should handle the  getUserProfile action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.loading = true
    })
    expect(reducer(state, actions.getUserProfile(userId))).toEqual(
      expectedResult
    )
  })

  it('should handle the  relRoleProjectLoaded action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.loading = false
      draft.userProfile = profile
    })
    expect(reducer(state, actions.userProfileGot(profile))).toEqual(
      expectedResult
    )
  })
})
