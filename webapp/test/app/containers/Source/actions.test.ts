import { ActionTypes } from 'app/containers/Source/constants'
import actions from 'app/containers/Source/actions'
import { mockProjectId, mockSource } from './fixtures'

describe('Source Actions', () => {
  describe('loadSources', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: ActionTypes.LOAD_SOURCES,
        payload: {
          projectId: mockProjectId
        }
      }
      expect(actions.loadSources(mockProjectId)).toEqual(expectedResult)
    })
  })

  describe('sourcesLoaded', () => {
    it('should return the correct type and passed sources', () => {
      const expectedResult = {
        type: ActionTypes.LOAD_SOURCES_SUCCESS,
        payload: {
          sources: [mockSource]
        }
      }
      expect(actions.sourcesLoaded([mockSource])).toEqual(expectedResult)
    })
  })

  describe('loadSourcesFail', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: ActionTypes.LOAD_SOURCES_FAILURE
      }
      expect(actions.loadSourcesFail()).toEqual(expectedResult)
    })
  })
})
