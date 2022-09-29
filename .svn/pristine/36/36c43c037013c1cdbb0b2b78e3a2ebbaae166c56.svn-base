import produce from 'immer'
import reducer, { getSourceInitialState } from 'app/containers/Source/reducer'
import actions from 'app/containers/Source/actions'
import { mockAnonymousAction } from 'test/utils/fixtures'
import { mockProjectId, mockSource } from './fixtures'

describe('sourceReducer', () => {
  let state
  beforeEach(() => {
    state = getSourceInitialState()
  })

  it('should return the initial state', () => {
    expect(reducer(void 0, mockAnonymousAction)).toEqual(state)
  })

  it('should handle the loadSources action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.listLoading = true
    })
    expect(reducer(state, actions.loadSources(mockProjectId))).toEqual(
      expectedResult
    )
  })

  it('should handle the sourcesLoaded action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.listLoading = false
      draft.sources = [mockSource]
    })
    expect(reducer(state, actions.sourcesLoaded([mockSource]))).toEqual(
      expectedResult
    )
  })

  it('should handle the loadSourcesFail action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.listLoading = false
    })
    expect(reducer(state, actions.loadSourcesFail())).toEqual(expectedResult)
  })
})
