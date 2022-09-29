import {
  IProject,
  IStarUser,
  IProjectRole
} from 'app/containers/Projects/types'

interface ImockStore {
  projectId: number
  project: IProject
  projects: IProject[]
  resolve: () => void
  orgId: number
  isFavorite: boolean
  adminIds: number[]
  relationId: number
  user: IStarUser
  role: IProjectRole
}

export const ProjectDemo: IProject = {
  createBy: {
    avatar: '',
    email: '',
    id: 4,
    username: ''
  },
  description: '',
  id: 4,
  initialOrgId: 4,
  isStar: true,
  isTransfer: false,
  name: 'test',
  orgId: 4,
  permission: {
    downloadPermission: false,
    schedulePermission: 0,
    sharePermission: false,
    sourcePermission: 0,
    viewPermission: 0,
    vizPermission: 1,
    widgetPermission: 0
  },
  pic: '15',
  starNum: 1,
  userId: 4,
  visibility: true
}

export const mockStore: ImockStore = {
  orgId: 1,
  projectId: 1000,
  projects: [ProjectDemo],
  project: ProjectDemo,
  resolve: () => void 0,
  isFavorite: false,
  adminIds: [1, 3],
  relationId: 33,
  user: {
    avatar: '3c-f759-45c6-a3cb-a9b5ed88acfd.png',
    email: 'xxxx@xxx.cn',
    id: 5,
    starTime: '2020-06-04 10:53:39',
    username: 'xxxx'
  },
  role: {
    description: 'deving',
    id: 7,
    name: 'tank'
  }
}
