import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { throwError } from 'redux-saga-test-plan/providers'
import request from 'app/utils/request'
import actions from 'app/containers/Source/actions'
import { getSources } from 'app/containers/Source/sagas'
import { mockProjectId, mockSource } from './fixtures'
import { getMockResponse } from 'test/utils/fixtures'

describe('Source Sagas', () => {
  describe('getSources Saga', () => {
    it('should dispatch the sourcesLoaded action if it requests the data successfully', () =>
      expectSaga(getSources, actions.loadSources(mockProjectId))
        .provide([[matchers.call.fn(request), getMockResponse([mockSource])]])
        .put(actions.sourcesLoaded([mockSource]))
        .run())

    it('should call the loadSourcesFail action if the response errors', () => {
      const errors = new Error('error')
      return expectSaga(getSources, actions.loadSources(mockProjectId))
        .provide([[matchers.call.fn(request), throwError(errors)]])
        .put(actions.loadSourcesFail())
        .run()
    })
  })
})
