import { IScheduleVizConfigItem } from './ScheduleVizConfig/types'
import { RichTextNode } from 'components/RichText'

export * from './ScheduleVizConfig/types'
export type JobStatus = 'new' | 'failed' | 'started' | 'stopped'
export type JobType = 'email' | 'weChatWork'
export type ScheduleType = 'image' | 'excel' | 'imageAndExcel'
export type SchedulePeriodUnit =
  | 'Minute'
  | 'Hour'
  | 'Day'
  | 'Week'
  | 'Month'
  | 'Year'

export interface IScheduleBase {
  id: number
  name: string
  description: string
  projectId: number
  startDate: string
  endDate: string
  cronExpression: string
  jobStatus: JobStatus
  jobType: JobType
  execLog: string
}

export interface IScheduleRaw extends IScheduleBase {
  config: string
}

export interface IScheduleMailConfig {
  subject: string
  content: string | RichTextNode[]
  to: string
  cc: string
  bcc: string
  type: ScheduleType
  imageWidth: number
  contentList: IScheduleVizConfigItem[]
  setCronExpressionManually: boolean
}

export interface IScheduleWeChatWorkConfig {
  webHookUrl: string
  type: string
  imageWidth: number
  contentList: IScheduleVizConfigItem[]
  setCronExpressionManually: boolean
}

export interface ISchedule extends IScheduleBase {
  config: IScheduleMailConfig | IScheduleWeChatWorkConfig
}

export interface IUserInfo {
  id: number
  username: string
  email: string
  avatar: string
}

export interface ICronExpressionPartition {
  periodUnit: SchedulePeriodUnit
  minute: number
  hour: number
  day: number
  month: number
  weekDay: number
}
