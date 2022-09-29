import { IProjectPermission } from 'containers/Projects/types'

export const SidebarPermissions: Array<keyof IProjectPermission> = [
  'sourcePermission',
  'viewPermission',
  'widgetPermission',
  'vizPermission',
  'schedulePermission'
]
