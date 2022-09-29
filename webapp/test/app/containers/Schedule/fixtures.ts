import {
  JobType,
  IUserInfo,
  ISchedule,
  JobStatus
} from 'app/containers/Schedule/components/types'
import { IDashboard } from 'app/containers/Dashboard/types'

interface ImockStore {
  schedule: ISchedule
  projectId: number
  schedules: ISchedule[]
  scheduleId: number
  resolve: () => void
  jobType: JobType
  mails: IUserInfo[]
  keywords: string
  jobStatus: JobStatus
  dashboard: IDashboard
  api: string
}

const scheduleDemo: ISchedule = {
  id: 1,
  name: 'scheduleName',
  description: 'desc',
  projectId: 2,
  startDate: '',
  endDate: '',
  cronExpression: '',
  jobStatus: 'new',
  jobType: 'email',
  execLog: '',
  config: {
    webHookUrl: 'string',
    type: 'string',
    imageWidth: 1,
    contentList: [],
    setCronExpressionManually: false
  }
}

export const mockStore: ImockStore = {
  schedule: scheduleDemo,
  projectId: 1,
  schedules: [scheduleDemo],
  jobStatus: scheduleDemo.jobStatus,
  scheduleId: 2,
  keywords: 'keywords',
  resolve: () => void 0,
  jobType: 'email',
  mails: [
    {
      id: 1,
      username: '',
      email: '',
      avatar: ''
    }
  ],
  dashboard: {
    id: 1,
    name: 'string',
    parentId: 1,
    index: 1,
    dashboardPortalId: 1,
    type: 0,
    config: {
      filters: [],
      linkages: [],
      queryMode: 0
    }
  },
  api: '/api/v3/protal/projectId'
}
