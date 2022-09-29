import React, { FC } from 'react'
import classnames from 'classnames'
import SplitPane, { ISplitPaneProps } from 'components/SplitPane'
import styles from './ListFormLayout.less'

const ListFormLayout: FC<ISplitPaneProps> = ({
  children,
  className,
  ...rest
}) => {
  const containerClass = classnames({
    [styles.container]: true,
    [className]: !!className
  })
  return (
    <SplitPane className={containerClass} {...rest}>
      {children}
    </SplitPane>
  )
}

export default ListFormLayout
