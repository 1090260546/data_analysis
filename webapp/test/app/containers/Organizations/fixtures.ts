import { IMembers, IOrganizationRole, IOrganization } from 'app/containers/Organizations/types'
import { IProject } from 'app/containers/Projects/types'
import { ProjectDemo } from '../Projects/fixtures'

const memberDemo: IMembers = {
  id: 811,
  user: {
    avatar: '',
    email: '',
    id: 1,
    role: 0,
    username: 'shan'
  }
}

const orgDemo: IOrganization = {
  id: 1,
  name: 'string',
  avatar: '',
  description: ''
}

const roleDemo: IOrganizationRole = {
  id: 1,
  name: 'roleName',
  description: 'desc'
}

interface ImockStore {
  orgId: number
  memberId: number
  project: IProject
  projects: IProject[]
  orgProjects: {
    list: IProject[]
  }
  member: IMembers
  members: IMembers[]
  role: IOrganizationRole
  roles: IOrganizationRole[]
  organization: IOrganization
  organizations: IOrganization[]
  resolve: () => void

}

export const mockStore: ImockStore = {
  orgId: 1,
  memberId: 1,
  project: ProjectDemo,
  projects: [ProjectDemo],
  member: memberDemo,
  members: [memberDemo],
  role: roleDemo,
  roles: [roleDemo],
  organization: orgDemo,
  organizations: [orgDemo],
  orgProjects: {
    list: [ProjectDemo]
  },
  resolve: () => void 0
}
