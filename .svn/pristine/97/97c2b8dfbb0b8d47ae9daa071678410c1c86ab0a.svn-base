import {
  selectProject,
  makeSelectProjects,
  makeSelectCurrentProject,
  makeSelectSearchProject,
  makeSelectStarUserList,
  makeSelectCollectProjects,
  makeSelectCurrentProjectRole,
  makeSelectProjectRoles
} from 'app/containers/Projects/selectors'
import { initialState } from 'app/containers/Projects/reducer'

const state = {
  projects: initialState
}

describe('selectProject', () => {
  it('should select the projects state', () => {
    expect(selectProject(state)).toEqual(state.projects)
  })
})

describe('makeSelectProjects', () => {
  const projectsSelector = makeSelectProjects()

  const currentProjectSelector = makeSelectCurrentProject()
  const searchProjectsSelector = makeSelectSearchProject()
  const starUserListSelector = makeSelectStarUserList()
  const collectProjectsSelector = makeSelectCollectProjects()
  const currentProjectsRoleSelector = makeSelectCurrentProjectRole()
  const projectRolesSelector = makeSelectProjectRoles()

  it('should select the projects', () => {
    expect(projectsSelector(state)).toEqual(state.projects.projects)
  })

  it('should select the currentProjectSelector', () => {
    expect(currentProjectSelector(state)).toEqual(state.projects.currentProject)
  })

  it('should select the searchProjectsSelector', () => {
    expect(searchProjectsSelector(state)).toEqual(state.projects.searchProject)
  })

  it('should select the starUserListSelector', () => {
    expect(starUserListSelector(state)).toEqual(state.projects.starUserList)
  })

  it('should select the collectProjectsSelector', () => {
    expect(collectProjectsSelector(state)).toEqual(
      state.projects.collectProjects
    )
  })

  it('should select the currentProjectsRoleSelector', () => {
    expect(currentProjectsRoleSelector(state)).toEqual(
      state.projects.currentProjectRole
    )
  })

  it('should select the projectRolesSelector', () => {
    expect(projectRolesSelector(state)).toEqual(state.projects.projectRoles)
  })
})
