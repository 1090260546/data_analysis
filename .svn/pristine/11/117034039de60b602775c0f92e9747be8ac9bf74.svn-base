/**
 * Test store addons
 */

import history from 'app/utils/history'
import configureStore, { IWindow } from 'app/configureStore'

describe('configureStore', () => {
  let store

  beforeAll(() => {
    store = configureStore({}, history)
  })

  describe('injectedReducers', () => {
    it('should contain an object for reducers', () => {
      expect(typeof store.injectedReducers).toBe('object')
    })
  })

  describe('injectedSagas', () => {
    it('should contain an object for sagas', () => {
      expect(typeof store.injectedSagas).toBe('object')
    })
  })

  describe('runSaga', () => {
    it('should contain a hook for `sagaMiddleware.run`', () => {
      expect(typeof store.runSaga).toBe('function')
    })
  })
})

declare const window: IWindow
describe('configureStore params', () => {
  it('should call window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__', () => {
    /* eslint-disable no-underscore-dangle */
    const compose = jest.fn()
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = () => compose
    configureStore(undefined, history)
    expect(compose).toHaveBeenCalled()
    /* eslint-enable */
  })
})
