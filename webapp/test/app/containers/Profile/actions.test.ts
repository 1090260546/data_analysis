import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_SUCCESS
} from 'app/containers/Profile/constants'
import actions from 'app/containers/Profile/actions'
import { mockStore } from './fixtures'

describe('Profile Actions', () => {
  const { userId, profile } = mockStore
  describe('getUserProfile', () => {
    it('getUserProfile should return the correct type', () => {
      const expectedResult = {
        type: GET_USER_PROFILE,
        payload: {
          id: userId
        }
      }
      expect(actions.getUserProfile(userId)).toEqual(expectedResult)
    })
  })
  describe('userProfileGot', () => {
    it('userProfileGot should return the correct type', () => {
      const expectedResult = {
        type: GET_USER_PROFILE_SUCCESS,
        payload: {
          result: profile
        }
      }
      expect(actions.userProfileGot(profile)).toEqual(expectedResult)
    })
  })
  describe('getUserProfileFail', () => {
    it('getUserProfileFail should return the correct type', () => {
      const expectedResult = {
        type: GET_USER_PROFILE_FAILURE
      }
      expect(actions.getUserProfileFail()).toEqual(expectedResult)
    })
  })
})
