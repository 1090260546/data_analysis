import {
  selectProfile,
  makeSelectLoading,
  makeSelectUserProfile
} from 'app/containers/Profile/selectors'
import { initialState } from 'app/containers/Profile/reducer'

const state = {
  profile: initialState
}

describe('selectProfile', () => {
  it('should select the selectProfile state', () => {
    expect(selectProfile(state)).toEqual(state.profile)
  })
})

describe('makeSelectProjects', () => {
  const loadingSelector = makeSelectLoading()
  const userProfileSelector = makeSelectUserProfile()

  it('should select the loadingSelector', () => {
    expect(loadingSelector(state)).toEqual(state.profile.loading)
  })

  it('should select the userProfileSelector', () => {
    expect(userProfileSelector(state)).toEqual(state.profile.userProfile)
  })
})
