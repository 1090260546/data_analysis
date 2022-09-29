import { createSelector } from 'reselect'
import { ISourceState } from './types'

const selectSource = (state) => state.source

const makeSelectSources = () => createSelector(
  selectSource,
  (sourceState: ISourceState) => sourceState.sources
)

const makeSelectListLoading = () => createSelector(
  selectSource,
  (sourceState: ISourceState) => sourceState.listLoading
)

const makeSelectFormLoading = () => createSelector(
  selectSource,
  (sourceState: ISourceState) => sourceState.formLoading
)

const makeSelectTestLoading = () => createSelector(
  selectSource,
  (sourceState: ISourceState) => sourceState.testLoading
)

const makeSelectResetLoading = () => createSelector(
  selectSource,
  (sourceState: ISourceState) => sourceState.resetLoading
)

const makeSelectDatasourcesInfo = () => createSelector(
  selectSource,
  (sourceState: ISourceState) => sourceState.datasourcesInfo
)

export {
  selectSource,
  makeSelectSources,
  makeSelectListLoading,
  makeSelectFormLoading,
  makeSelectTestLoading,
  makeSelectResetLoading,
  makeSelectDatasourcesInfo
}
