import { createSelector } from 'reselect'
import { IOrganizationState } from './types'

const selectOrganization = (state) => state.organization

const makeSelectOrganizations = () => createSelector(
  selectOrganization,
  (organizationState: IOrganizationState) => organizationState.organizations
)

const makeSelectInviteMemberList = () => createSelector(
  selectOrganization,
  (organizationState: IOrganizationState) => organizationState.inviteMemberLists
)

const makeSelectCurrentOrganizations = () => createSelector(
  selectOrganization,
  (organizationState: IOrganizationState) => organizationState.currentOrganization
)

const makeSelectCurrentOrganizationProjects = () => createSelector(
  selectOrganization,
  (organizationState: IOrganizationState) => organizationState.currentOrganizationProjects
)

const makeSelectCurrentOrganizationProjectsDetail = () => createSelector(
  selectOrganization,
  (organizationState: IOrganizationState) => organizationState.currentOrganizationProjectsDetail
)

const makeSelectCurrentOrganizationRole = () => createSelector(
  selectOrganization,
  (organizationState: IOrganizationState) => organizationState.currentOrganizationRole
)

const makeSelectCurrentOrganizationMembers = () => createSelector(
  selectOrganization,
  (organizationState: IOrganizationState) => organizationState.currentOrganizationMembers
)

const makeSelectRoleModalLoading = () => createSelector(
  selectOrganization,
  (organizationState: IOrganizationState) => organizationState.roleModalLoading
)

const makeSelectCurrentOrganizationProject = () => createSelector(
  selectOrganization,
  (organizationState: IOrganizationState) => organizationState.projectDetail
)

const makeSelectCurrentOrganizationProjectAdmins = () => createSelector(
  selectOrganization,
  (organizationState: IOrganizationState) => organizationState.projectAdmins
)

const makeSelectCurrentOrganizationProjectRoles = () => createSelector(
  selectOrganization,
  (organizationState: IOrganizationState) => organizationState.projectRoles
)

const makeSelectInviteMemberLoading = () => createSelector(
  selectOrganization,
  (organizationState: IOrganizationState) => organizationState.inviteMemberfetching
)



export {
  selectOrganization,
  makeSelectOrganizations,
  makeSelectCurrentOrganizations,
  makeSelectCurrentOrganizationProjects,
  makeSelectCurrentOrganizationProjectsDetail,
  makeSelectCurrentOrganizationRole,
  makeSelectCurrentOrganizationMembers,
  makeSelectInviteMemberList,
  makeSelectRoleModalLoading,
  makeSelectCurrentOrganizationProject,
  makeSelectCurrentOrganizationProjectAdmins,
  makeSelectCurrentOrganizationProjectRoles,
  makeSelectInviteMemberLoading
}
