import { createSelector } from 'reselect'
import { IProjectState } from './types'
import { initialState } from './reducer'

const selectProject = (state) => state.project || initialState

const makeSelectProjects = () => createSelector(
  selectProject,
  (projectState: IProjectState) => projectState.projects
)

const makeSelectCurrentProject = () => createSelector(
  selectProject,
  (projectState: IProjectState) => projectState.currentProject
)

const makeSelectSearchProject = () => createSelector(
  selectProject,
  (projectState: IProjectState) => projectState.searchProject
)

const makeSelectStarUserList = () => createSelector(
  selectProject,
  (projectState: IProjectState) => projectState.starUserList
)

const makeSelectCollectProjects = () => createSelector(
  selectProject,
  (projectState: IProjectState) => projectState.collectProjects
)

const makeSelectCurrentProjectRole = () => createSelector(
  selectProject,
  (projectState: IProjectState) => projectState.currentProjectRole
)

const makeSelectProjectRoles = () => createSelector(
  selectProject,
  (projectState: IProjectState) => projectState.projectRoles
)

export {
  selectProject,
  makeSelectProjects,
  makeSelectSearchProject,
  makeSelectCurrentProject,
  makeSelectStarUserList,
  makeSelectCollectProjects,
  makeSelectCurrentProjectRole,
  makeSelectProjectRoles
}
