import { getSourceInitialState } from 'app/containers/Source/reducer'
import {
  selectSource,
  makeSelectSources
} from 'app/containers/Source/selectors'

const state = {
  source: getSourceInitialState()
}

describe('selectSource', () => {
  it('should select the source state', () => {
    expect(selectSource(state)).toEqual(state.source)
  })
})

describe('makeSelectSources', () => {
  const sourcesSelector = makeSelectSources()

  it('should select the sources', () => {
    expect(sourcesSelector(state)).toEqual(state.source.sources)
  })

  it('should memo correctly', () => {
    sourcesSelector(state)
    expect(sourcesSelector.recomputations()).toBe(1)
    sourcesSelector(state)
    expect(sourcesSelector.recomputations()).toBe(1)
    sourcesSelector({
      ...state,
      source: {
        ...state.source
      }
    })
    expect(sourcesSelector.recomputations()).toBe(2)
  })
})
