import React, { FC } from 'react'
import classnames from 'classnames'
import { Icon } from 'antd'
import styles from './ListFormLayout.less'

interface IListProps {
  title?: string
  className?: string
  onAddItem?: () => void
}

export const List: FC<IListProps> = ({
  title,
  className,
  onAddItem,
  children
}) => {
  const listClass = classnames({
    [styles.list]: true,
    [className]: !!className
  })
  return (
    <div className={styles.listContainer}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <Icon type="plus" {...(onAddItem && { onClick: onAddItem })} />
      </div>
      <div className={listClass}>{children}</div>
    </div>
  )
}

export default List
