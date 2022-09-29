import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import styles from '../Sidebar/Sidebar.less'

interface ISidebarOptionProps {
  indexRoute: string
  active: boolean
  projectId: number
  icon: React.ReactNode
}

const SidebarOption: React.FC<ISidebarOptionProps> = (props) => {
  const { indexRoute, active, projectId, icon } = props
  const optionClass = classnames(
    { [styles.option]: true },
    { [styles.active]: active }
  )
  const linkRoute = `/project/${projectId}/${indexRoute}`

  return (
    <div className={optionClass}>
      <Link to={linkRoute}>{icon}</Link>
    </div>
  )
}

export default React.memo(SidebarOption)
