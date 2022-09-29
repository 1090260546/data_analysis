import { createSelector } from 'reselect'

export const selectProfile = (state) => state.profile

const makeSelectUserProfile = () => createSelector(
  selectProfile,
  (state) => state.userProfile
)

const makeSelectLoading = () => createSelector(
  selectProfile,
  (state) => state.loading
)


export {
  makeSelectLoading,
  makeSelectUserProfile
}
