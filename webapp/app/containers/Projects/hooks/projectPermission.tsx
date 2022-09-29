import { useSelector } from 'react-redux'
import { makeSelectCurrentProject } from '../selectors'

import { IProjectPermission } from '../types'

function useProjectPermission<T>(
  component: T,
  permissionNames: keyof IProjectPermission,
  type?: 2 | 3
): T
function useProjectPermission<T>(
  component: T,
  permissionNames: keyof IProjectPermission | Array<keyof IProjectPermission>,
  type?: 2 | 3
): T[]
function useProjectPermission<T>(
  component: T,
  permissionNames: keyof IProjectPermission | Array<keyof IProjectPermission>,
  type?: 2 | 3
) {
  const currentProject = useSelector(makeSelectCurrentProject())
  const names: Array<keyof IProjectPermission> = [].concat(permissionNames)
  const authorizedComponents = names.map((permissionName) => {
    if (!currentProject) {
      return () => null
    }
    const { permission } = currentProject
    const typePermission = permission[permissionName]
    if (!typePermission) {
      return () => null
    }
    let hasPermission = false
    if (typeof typePermission === 'boolean') {
      hasPermission = typePermission
    } else {
      // 0 隐藏
      // 1 只读
      // 2 修改
      // 3 删除
      switch (+typePermission) {
        case 3:
          hasPermission = true
          break
        case 2:
        case 1:
          hasPermission = type ? typePermission >= type : true // default readonly
          break
      }
    }
    if (hasPermission) {
      return component
    }
    const nullComponent = Array.isArray(component)
      ? component.map(() => () => null)
      : () => null
    return nullComponent
  })
  return typeof permissionNames === 'string'
    ? authorizedComponents[0]
    : authorizedComponents
}

export default useProjectPermission
