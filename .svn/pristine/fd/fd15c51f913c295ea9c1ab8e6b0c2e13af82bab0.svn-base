import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'
import request from 'app/utils/request'
import actions from 'app/containers/Profile/actions'
import { getUserProfile } from 'app/containers/Profile/sagas'
import { mockStore } from './fixtures'
import { getMockResponse } from 'test/utils/fixtures'

describe('Profile Sagas', () => {
  const { userId, profile } = mockStore
  describe('getUserProfile Saga', () => {
    const getUserProfileActions = actions.getUserProfile(userId)
    it('should dispatch the userProfileGot action if it requests the data successfully', () =>
      expectSaga(getUserProfile, getUserProfileActions)
        .provide([[matchers.call.fn(request), getMockResponse(profile)]])
        .put(actions.userProfileGot(profile))
        .run())

    it('should call the getUserProfileFail action if the response errors', () => {
      const errors = new Error('error')
      return expectSaga(getUserProfile, getUserProfileActions)
        .provide([[matchers.call.fn(request), throwError(errors)]])
        .put(actions.getUserProfileFail())
        .run()
    })
  })
})
