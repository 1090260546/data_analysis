import React, { FC, forwardRef } from 'react'
import styles from './Container.less'

interface IContainerTitleProps {
  grid?: boolean
  children: React.ReactNode
}

const Title: FC<IContainerTitleProps> = ({ grid, children }, ref) => {
  return (
    <div className={styles.title} ref={ref}>
      {children}
    </div>
  )
}

export default forwardRef(Title)
